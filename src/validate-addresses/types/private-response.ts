/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AddressValidationStatus = "unverified" | "verified" | "warning" | "error";
export type Address = PartialAddress;
export type PostalCode = string;
export type CountryCode = string;
export type AddressResidentialIndicator = "unknown" | "yes" | "no";
export type Address1 = PartialAddress1;
export type PostalCode1 = string;
export type CountryCode1 = string;
export type AddressResidentialIndicator1 = "unknown" | "yes" | "no";
export type AddressValidationCode =
  | "a1000"
  | "a1001"
  | "a1002"
  | "a1003"
  | "a1004"
  | "a1005"
  | "a1006"
  | "a1007"
  | "a1008"
  | "r1000"
  | "r1001"
  | "r1002"
  | "r1003";
export type AddressValidationMessageType = "error" | "warning" | "info";
export type AddressValidationDetailCode =
  | "unsupported_country"
  | "non_supported_country"
  | "minimum_postal_code_verification_failed"
  | "street_does_not_match_unique_street_name"
  | "multiple_directionals"
  | "multiple_matches"
  | "suite_not_valid"
  | "suite_missing"
  | "incompatible_paired_labels"
  | "invalid_house_number"
  | "missing_house_number"
  | "invalid_box_number"
  | "invalid_charge_event"
  | "missing_box_number"
  | "missing_cmra_or_private_mail_box_number"
  | "suite_has_no_secondaries"
  | "postal_code_changed_or_added"
  | "state_province_changed_or_added"
  | "city_locality_changed_or_added"
  | "urbanization_changed"
  | "street_name_spelling_changed_or_added"
  | "street_name_type_changed_or_added"
  | "street_direction_changed_or_added"
  | "suite_type_changed_or_added"
  | "suite_unit_number_changed_or_added"
  | "double_dependent_locality_changed_or_added"
  | "subadministrative_area_changed_or_added"
  | "subnational_area_changed_or_added"
  | "po_box_changed_or_added"
  | "premise_type_changed_or_added"
  | "house_number_changed"
  | "organization_changed_or_added"
  | "partially_verified_to_state_level"
  | "partially_verified_to_city_level"
  | "partially_verified_to_street_level"
  | "partially_verified_to_premise_level"
  | "verified_to_state_level"
  | "verified_to_city_level"
  | "verified_to_street_level"
  | "verified_to_premise_level"
  | "verified_to_suite_level"
  | "coded_to_street_lavel"
  | "coded_to_neighborhood_level"
  | "coded_to_community_level"
  | "coded_to_state_level"
  | "coded_to_rooftop_level"
  | "coded_to_rooftop_interpolation_level"
  | "name_max_length_exceeded"
  | "phone_max_length_exceeded"
  | "company_name_max_length_exceeded"
  | "line1_min_max_length"
  | "line2_max_length_exceeded"
  | "line3_max_length_exceeded"
  | "city_locality_max_length_exceeded"
  | "state_province_max_length_exceeded"
  | "invalid_postal_code"
  | "country_invalid_length"
  | "address_not_found";
export type ValidateAddressResponseBody = AddressValidationResult[];

export interface AddressValidationResult {
  status: AddressValidationStatus;
  original_address: Address;
  matched_address: Address1;
  messages: ResponseMessage[];
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
export interface ResponseMessage {
  code: AddressValidationCode;
  message: string;
  type: AddressValidationMessageType;
  detail_code: AddressValidationDetailCode;
}
