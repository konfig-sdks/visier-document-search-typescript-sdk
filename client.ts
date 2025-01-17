/*
Visier Document Search API

Visier API for searching for Visier documents

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  DocumentSearchApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { VisierDocumentSearchCustom } from "./client-custom";

export class VisierDocumentSearch extends VisierDocumentSearchCustom {
  readonly documentSearch: DocumentSearchApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.documentSearch = new DocumentSearchApi(configuration);
  }

}
