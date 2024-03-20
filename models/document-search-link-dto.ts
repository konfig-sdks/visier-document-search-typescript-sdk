/*
Visier Document Search API

Visier API for searching for Visier documents

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Defines the attributes of a web request to reference documents in the search results.
 * @export
 * @interface DocumentSearchLinkDTO
 */
export interface DocumentSearchLinkDTO {
    /**
     * The URL pointing to the specific document.
     * @type {string}
     * @memberof DocumentSearchLinkDTO
     */
    'href'?: string;
    /**
     * The verb to use when formulating the web request. This is commonly `GET`.
     * @type {string}
     * @memberof DocumentSearchLinkDTO
     */
    'verb'?: string;
}
