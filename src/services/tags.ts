import { AxiosInstance } from 'axios';

export interface ITagsService {
  get(): Promise<string[]>;
  create(tagName: string): Promise<string>;
}

/**
 * Publicly-accessible service for anything related to tags
 */
export class TagsService {
  private client: AxiosInstance;
  constructor(client: TagsService['client']) {
    this.client = client;
  }
  public getConvenienceAPI() {
    return {
      createTag: this.create,
    };
  }
  public getAdvancedAPI() {
    return {
      tags: {
        get: this.get,
        create: this.create,
      },
    };
  }
  private async get() {
    const { data } = await this.client.get<string[]>('/tags');
    return data;
  }
  private async create(tagName: string) {
    const { data } = await this.client.post<string>(`/tags/${tagName}`, {});
    return data;
  }
}
