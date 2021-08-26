/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CalculateRatesRequestBody = CalculateRatesRequestBody1 & CalculateRatesRequestBody2;
export type CalculateRatesRequestBody1 = RateRequestOptions;
export type SeId = string;
export type Currency = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type CalculateRatesRequestBody2 = ShipmentIdRequest | ShipmentRequest;
export type AddressValidatingShipment = ValidateShipmentFields & PartialShipment;
export type ValidateAddress = "no_validation" | "validate_only" | "validate_and_clean";
export type SeId1 = string;
export type ServiceCode = string;
export type OrderSourceName =
  | "amazon_ca"
  | "amazon_us"
  | "brightpearl"
  | "channel_advisor"
  | "cratejoy"
  | "ebay"
  | "etsy"
  | "jane"
  | "groupon_goods"
  | "magento"
  | "paypal"
  | "seller_active"
  | "shopify"
  | "stitch_labs"
  | "squarespace"
  | "three_dcart"
  | "tophatter"
  | "walmart"
  | "woo_commerce"
  | "volusion";
export type TaxableEntityType = "shipper" | "recipient";
export type IdentifierType = "vat" | "eori" | "ssn" | "ein" | "tin" | "ioss" | "pan" | "voec";
export type Date = string;
export type Address = PartialAddress;
export type PostalCode = string;
export type CountryCode = string;
export type AddressResidentialIndicator = "unknown" | "yes" | "no";
export type Address1 = PartialAddress1;
export type PostalCode1 = string;
export type CountryCode1 = string;
export type AddressResidentialIndicator1 = "unknown" | "yes" | "no";
export type SeId2 = string;
export type Address2 = PartialAddress2;
export type PostalCode2 = string;
export type CountryCode2 = string;
export type AddressResidentialIndicator2 = "unknown" | "yes" | "no";
export type DeliveryConfirmation =
  | "none"
  | "delivery"
  | "signature"
  | "adult_signature"
  | "direct_signature"
  | "delivery_mailed";
export type PackageContents = "merchandise" | "documents" | "gift" | "returned_goods" | "sample";
export type NonDelivery = "return_to_sender" | "treat_as_abandoned";
export type Currency1 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type CountryCode3 = string;
export type CountryCode4 = string;
export type BillToParty = "recipient" | "third_party";
export type WeightUnit = "pound" | "ounce" | "gram" | "kilogram";
export type OriginType = "pickup" | "drop_off";
export type CollectOnDeliveryPaymentType = "any" | "cash" | "cash_equivalent" | "none";
export type Currency2 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type OriginType1 = "pickup" | "drop_off";
export type InsuranceProvider = "none" | "shipsurance" | "carrier" | "third_party";
export type OrderSourceName1 =
  | "amazon_ca"
  | "amazon_us"
  | "brightpearl"
  | "channel_advisor"
  | "cratejoy"
  | "ebay"
  | "etsy"
  | "jane"
  | "groupon_goods"
  | "magento"
  | "paypal"
  | "seller_active"
  | "shopify"
  | "stitch_labs"
  | "squarespace"
  | "three_dcart"
  | "tophatter"
  | "walmart"
  | "woo_commerce"
  | "volusion";
export type PackageCode = string;
export type WeightUnit1 = "pound" | "ounce" | "gram" | "kilogram";
export type DimensionUnit = "inch" | "centimeter";
export type Currency3 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";

export interface RateRequestOptions {
  rate_options?: RateRequestBody;
  [k: string]: unknown;
}
export interface RateRequestBody {
  carrier_ids: [SeId, ...SeId[]];
  package_types?: string[];
  service_codes?: string[];
  calculate_tax_amount?: boolean;
  preferred_currency?: Currency;
}
export interface ShipmentIdRequest {
  [k: string]: unknown;
}
export interface ShipmentRequest {
  shipment?: AddressValidatingShipment;
  [k: string]: unknown;
}
export interface ValidateShipmentFields {
  validate_address?: ValidateAddress & string;
  [k: string]: unknown;
}
export interface PartialShipment {
  carrier_id?: SeId1;
  service_code?: ServiceCode;
  external_order_id?: string;
  items?: ShipmentItem[];
  tax_identifiers?: TaxIdentifier[];
  external_shipment_id?: string;
  ship_date?: Date;
  ship_to?: Address;
  ship_from?: Address1;
  warehouse_id?: SeId2;
  return_to?: Address2;
  confirmation?: DeliveryConfirmation & string;
  customs?: InternationalShipmentOptions;
  advanced_options?: AdvancedShipmentOptions;
  origin_type?: OriginType1;
  insurance_provider?: InsuranceProvider & string;
  order_source_code?: OrderSourceName1;
  packages?: [Package, ...Package[]];
}
export interface ShipmentItem {
  name?: string;
  sales_order_id?: string;
  sales_order_item_id?: string;
  quantity?: number;
  sku?: string;
  external_order_id?: string;
  external_order_item_id?: string;
  asin?: string;
  order_source_code?: OrderSourceName;
}
export interface TaxIdentifier {
  taxable_entity_type: TaxableEntityType;
  identifier_type: IdentifierType;
  issuing_authority: string;
  value: string;
}
export interface PartialAddress {
  name?: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city_locality?: string;
  state_province?: string;
  postal_code?: PostalCode;
  country_code?: CountryCode;
  address_residential_indicator?: AddressResidentialIndicator & string;
}
export interface PartialAddress1 {
  name?: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city_locality?: string;
  state_province?: string;
  postal_code?: PostalCode1;
  country_code?: CountryCode1;
  address_residential_indicator?: AddressResidentialIndicator1 & string;
}
export interface PartialAddress2 {
  name?: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city_locality?: string;
  state_province?: string;
  postal_code?: PostalCode2;
  country_code?: CountryCode2;
  address_residential_indicator?: AddressResidentialIndicator2 & string;
}
export interface InternationalShipmentOptions {
  contents: PackageContents & string;
  non_delivery: NonDelivery & string;
  customs_items?: CustomsItem[];
}
export interface CustomsItem {
  quantity?: number;
  value?: MonetaryValue;
  harmonized_tariff_code?: string;
  country_of_origin?: CountryCode3;
  unit_of_measure?: string;
  sku?: string;
  sku_description?: string;
}
export interface MonetaryValue {
  currency: Currency1;
  amount: number;
}
export interface AdvancedShipmentOptions {
  bill_to_account?: string;
  bill_to_country_code?: CountryCode4;
  bill_to_party?: BillToParty;
  bill_to_postal_code?: string;
  contains_alcohol?: boolean;
  delivered_duty_paid?: boolean;
  dry_ice?: boolean;
  dry_ice_weight?: Weight;
  non_machinable?: boolean;
  saturday_delivery?: boolean;
  use_ups_ground_freight_pricing?: boolean;
  freight_class?: string;
  custom_field1?: string;
  custom_field2?: string;
  custom_field3?: string;
  origin_type?: OriginType;
  shipper_release?: boolean;
  collect_on_delivery?: CollectOnDelivery;
}
export interface Weight {
  value: number;
  unit: WeightUnit;
}
export interface CollectOnDelivery {
  payment_type?: CollectOnDeliveryPaymentType;
  payment_amount?: PaymentAmount;
  [k: string]: unknown;
}
export interface PaymentAmount {
  currency?: Currency2;
  amount?: number;
  [k: string]: unknown;
}
export interface Package {
  package_code?: PackageCode;
  weight: Weight1;
  dimensions?: Dimensions;
  insured_value?: MonetaryValue1;
  label_messages?: LabelMessages;
  external_package_id?: string;
}
export interface Weight1 {
  value: number;
  unit: WeightUnit1;
}
export interface Dimensions {
  unit: DimensionUnit & string;
  length: number;
  width: number;
  height: number;
}
export interface MonetaryValue1 {
  currency: Currency3;
  amount: number;
}
export interface LabelMessages {
  reference1: string;
  reference2: string;
  reference3: string;
}