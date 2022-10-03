// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TaxRate {
    export type TaxType =
      | 'gst'
      | 'hst'
      | 'jct'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat';
  }

  export /**
   * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
   *
   * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
   */
  interface TaxRate {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'tax_rate';

    /**
     * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
     */
    active: boolean;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
     */
    description: string | null;

    /**
     * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
     */
    display_name: string;

    /**
     * This specifies if the tax rate is inclusive or exclusive.
     */
    inclusive: boolean;

    /**
     * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
     */
    jurisdiction: string | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata | null;

    /**
     * This represents the tax rate percent out of 100.
     */
    percentage: number;

    /**
     * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
     */
    state: string | null;

    /**
     * The high-level tax type, such as `vat` or `sales_tax`.
     */
    tax_type: TaxRate.TaxType | null;
  }

  namespace TaxRateCreateParams {
    export type TaxType =
      | 'gst'
      | 'hst'
      | 'jct'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat';
  }

  export interface TaxRateCreateParams {
    /**
     * The display name of the tax rate, which will be shown to users.
     */
    display_name: string;

    /**
     * This specifies if the tax rate is inclusive or exclusive.
     */
    inclusive: boolean;

    /**
     * This represents the tax rate percent out of 100.
     */
    percentage: number;

    /**
     * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
     */
    active?: boolean;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string;

    /**
     * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
     */
    jurisdiction?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
     */
    state?: string;

    /**
     * The high-level tax type, such as `vat` or `sales_tax`.
     */
    tax_type?: TaxRateCreateParams.TaxType;
  }

  export interface TaxRateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace TaxRateUpdateParams {
    export type TaxType =
      | 'gst'
      | 'hst'
      | 'jct'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat';
  }

  export interface TaxRateUpdateParams {
    /**
     * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
     */
    active?: boolean;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string;

    /**
     * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
     */
    description?: string;

    /**
     * The display name of the tax rate, which will be shown to users.
     */
    display_name?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
     */
    jurisdiction?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
     */
    state?: string;

    /**
     * The high-level tax type, such as `vat` or `sales_tax`.
     */
    tax_type?: TaxRateUpdateParams.TaxType;
  }

  export interface TaxRateListParams extends PaginationParams {
    /**
     * Optional flag to filter by tax rates that are either active or inactive (archived).
     */
    active?: boolean;

    /**
     * Optional range for filtering created date.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).
     */
    inclusive?: boolean;
  }

  export interface TaxRatesResource {
    create: (
      params: TaxRateCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.TaxRate>>;

    retrieve:
      | ((
          id: string,
          params?: TaxRateRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TaxRate>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TaxRate>>);

    update: (
      id: string,
      params?: TaxRateUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.TaxRate>>;

    list:
      | ((
          params?: TaxRateListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.TaxRate>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.TaxRate>);
  }
}

const resource: TaxRatesResource = StripeResource.extend({
  path: 'tax_rates',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{taxRate}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{taxRate}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});

export = resource;
