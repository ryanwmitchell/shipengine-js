import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { hasProperties, isObject } from '../../../utils';

type ErrorData =
  | {
      required: string[];
    }
  | string; // message

export interface JsonRpcError {
  code: number;
  message: string;
  data: ErrorData;
}

export const isJsonRpcError = (v: object): v is JsonRpcError => {
  return hasProperties(v, 'code', 'message', 'data');
};

interface BaseJsonRpcResponse {
  jsonrpc: '2.0';
  id: string;
}

export interface JsonRpcResponseSuccess<Data> extends BaseJsonRpcResponse {
  result: Data;
}

export interface JsonRpcResponseError extends BaseJsonRpcResponse {
  error: JsonRpcError;
}

export const isRpcResponseError = <T>(
  value: JsonRpcResponse<T>
): value is JsonRpcResponseError => {
  return 'error' in value && value.error !== null;
};

type JsonRpcResponse<T> = JsonRpcResponseSuccess<T> | JsonRpcResponseError;

/**
 * Validate the basic structure of the JSON:RPC reply
 */
function assertJsonRpcReply<T>(v: unknown): asserts v is JsonRpcResponse<T> {
  if (!isObject(v)) {
    throw new Error('Response is not object');
  }
  if (!hasProperties(v, 'jsonrpc', 'id')) {
    throw new Error(`Invalid response ${JSON.stringify(v, undefined, 2)}`);
  }
  if (hasProperties(v, 'result', 'error')) {
    throw new Error(
      'Result and error member should not exist together (https://www.jsonrpc.org/specification#5)'
    );
  }
  if (hasProperties(v, 'error')) {
    if (!isObject(v.error)) {
      throw new Error('Error not object');
    }
    if (!hasProperties(v.error, 'code', 'message', 'data')) {
      throw new Error(
        `Invalid error shape: ${JSON.stringify(v.error, undefined, 2)}`
      );
    }
  }
}

type Parameters = Record<string, any>;

export class JsonRpcCall<Params extends Parameters> {
  public jsonrpc = '2.0';
  constructor(
    public method: string,
    public params: Params,
    public id = uuidv4()
  ) {}
}

type RpcClientResponse<T> = T | JsonRpcError;
export class InternalRpcClient {
  #client: AxiosInstance;
  constructor(apiKey: string, baseUrl = 'http://localhost:8500') {
    this.#client = axios.create({
      baseURL: baseUrl,
      url: '/',
      headers: {
        'API-Key': apiKey,
      },
    });
  }

  exec = async <Params extends Parameters, Data>(
    method: string,
    params: Params
  ): Promise<RpcClientResponse<Data>> => {
    try {
      const data = new JsonRpcCall(method, params);
      const axiosResponse: AxiosResponse<unknown> = await this.#client({
        method: 'post',
        data,
      });
      const axiosData = axiosResponse.data;
      assertJsonRpcReply<Data>(axiosData);

      if (isRpcResponseError(axiosData)) {
        return axiosData.error;
      } else {
        return axiosData.result;
      }
    } catch (err) {
      // this should never happen
      return {
        code: 666,
        message: err.message || 'some unhandled axios error happened.',
        data: '',
      };
    }
  };
}
