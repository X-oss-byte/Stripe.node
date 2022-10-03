// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace SubscriptionItem {
    export interface BillingThresholds {
      /**
       * Usage threshold that triggers the subscription to create an invoice
       */
      usage_gte: number | null;
    }
  }

  export /**
   * Subscription items allow you to create customer subscriptions with more than
   * one plan, making it easy to represent complex billing relationships.
   */
  interface SubscriptionItem {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'subscription_item';

    /**
     * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
     */
    billing_thresholds: SubscriptionItem.BillingThresholds | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    deleted?: void;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata;

    /**
     * You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
     *
     * Plans define the base price, currency, and billing cycle for recurring purchases of products.
     * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.
     *
     * For example, you might have a single "gold" product that has plans for $10/month, $100/year, €9/month, and €90/year.
     *
     * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/products-prices/overview).
     */
    plan: Stripe.Plan;

    /**
     * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
     * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
     *
     * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
     *
     * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
     */
    price: Stripe.Price;

    /**
     * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
     */
    quantity?: number;

    /**
     * The `subscription` this `subscription_item` belongs to.
     */
    subscription: string;

    /**
     * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
     */
    tax_rates: Array<Stripe.TaxRate> | null;
  }

  export /**
   * The DeletedSubscriptionItem object.
   */
  interface DeletedSubscriptionItem {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'subscription_item';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  namespace SubscriptionItemCreateParams {
    export interface BillingThresholds {
      /**
       * Usage threshold that triggers the subscription to advance to a new billing period
       */
      usage_gte: number;
    }

    export type PaymentBehavior =
      | 'allow_incomplete'
      | 'default_incomplete'
      | 'error_if_incomplete'
      | 'pending_if_incomplete';

    export interface PriceData {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of the product that this price will belong to.
       */
      product: string;

      /**
       * The recurring components of a price such as `interval` and `interval_count`.
       */
      recurring: PriceData.Recurring;

      /**
       * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceData.TaxBehavior;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    namespace PriceData {
      export interface Recurring {
        /**
         * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count?: number;
      }

      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      namespace Recurring {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export interface SubscriptionItemCreateParams {
    /**
     * The identifier of the subscription to modify.
     */
    subscription: string;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: Stripe.Emptyable<
      SubscriptionItemCreateParams.BillingThresholds
    >;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
     *
     * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription's invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
     *
     * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
     *
     * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
     */
    payment_behavior?: SubscriptionItemCreateParams.PaymentBehavior;

    /**
     * The identifier of the plan to add to the subscription.
     */
    plan?: string;

    /**
     * The ID of the price object.
     */
    price?: string;

    /**
     * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
     */
    price_data?: SubscriptionItemCreateParams.PriceData;

    /**
     * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes.
     */
    proration_behavior?: SubscriptionItemCreateParams.ProrationBehavior;

    /**
     * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
     */
    proration_date?: number;

    /**
     * The quantity you'd like to apply to the subscription item you're creating.
     */
    quantity?: number;

    /**
     * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
     */
    tax_rates?: Stripe.Emptyable<Array<string>>;
  }

  export interface SubscriptionItemRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace SubscriptionItemUpdateParams {
    export interface BillingThresholds {
      /**
       * Usage threshold that triggers the subscription to advance to a new billing period
       */
      usage_gte: number;
    }

    export type PaymentBehavior =
      | 'allow_incomplete'
      | 'default_incomplete'
      | 'error_if_incomplete'
      | 'pending_if_incomplete';

    export interface PriceData {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of the product that this price will belong to.
       */
      product: string;

      /**
       * The recurring components of a price such as `interval` and `interval_count`.
       */
      recurring: PriceData.Recurring;

      /**
       * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceData.TaxBehavior;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    namespace PriceData {
      export interface Recurring {
        /**
         * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count?: number;
      }

      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      namespace Recurring {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export interface SubscriptionItemUpdateParams {
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: Stripe.Emptyable<
      SubscriptionItemUpdateParams.BillingThresholds
    >;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * Indicates if a customer is on or off-session while an invoice payment is attempted.
     */
    off_session?: boolean;

    /**
     * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
     *
     * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription's invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
     *
     * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
     *
     * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
     */
    payment_behavior?: SubscriptionItemUpdateParams.PaymentBehavior;

    /**
     * The identifier of the new plan for this subscription item.
     */
    plan?: string;

    /**
     * The ID of the price object. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
     */
    price?: string;

    /**
     * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
     */
    price_data?: SubscriptionItemUpdateParams.PriceData;

    /**
     * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes.
     */
    proration_behavior?: SubscriptionItemUpdateParams.ProrationBehavior;

    /**
     * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
     */
    proration_date?: number;

    /**
     * The quantity you'd like to apply to the subscription item you're creating.
     */
    quantity?: number;

    /**
     * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
     */
    tax_rates?: Stripe.Emptyable<Array<string>>;
  }

  export interface SubscriptionItemListParams extends PaginationParams {
    /**
     * The ID of the subscription whose items will be retrieved.
     */
    subscription: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace SubscriptionItemDeleteParams {
    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';
  }

  export interface SubscriptionItemDeleteParams {
    /**
     * Delete all usage for the given subscription item. Allowed only when the current plan's `usage_type` is `metered`.
     */
    clear_usage?: boolean;

    /**
     * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes.
     */
    proration_behavior?: SubscriptionItemDeleteParams.ProrationBehavior;

    /**
     * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
     */
    proration_date?: number;
  }

  export interface SubscriptionItemsResource {
    create: (
      params: SubscriptionItemCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.SubscriptionItem>>;

    retrieve:
      | ((
          id: string,
          params?: SubscriptionItemRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SubscriptionItem>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SubscriptionItem>>);

    update: (
      id: string,
      params?: SubscriptionItemUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.SubscriptionItem>>;

    list: (
      params: SubscriptionItemListParams,
      options?: RequestOptions
    ) => ApiListPromise<Stripe.SubscriptionItem>;

    del:
      | ((
          id: string,
          params?: SubscriptionItemDeleteParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedSubscriptionItem>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedSubscriptionItem>>);

    createUsageRecord: (
      id: string,
      params: UsageRecordCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.UsageRecord>>;

    listUsageRecordSummaries:
      | ((
          id: string,
          params?: UsageRecordSummaryListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.UsageRecordSummary>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.UsageRecordSummary>);
  }
}

const resource: SubscriptionItemsResource = StripeResource.extend({
  path: 'subscription_items',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{item}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{item}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{item}',
  }),

  createUsageRecord: stripeMethod({
    method: 'POST',
    path: '/{subscriptionItem}/usage_records',
  }),

  listUsageRecordSummaries: stripeMethod({
    method: 'GET',
    path: '/{subscriptionItem}/usage_record_summaries',
    methodType: 'list',
  }),
});

export = resource;
