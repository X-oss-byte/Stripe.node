// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Refund {
    export interface NextAction {
      /**
       * Contains the refund details.
       */
      display_details: NextAction.DisplayDetails | null;

      /**
       * Type of the next action to perform.
       */
      type: string;
    }

    export type Reason =
      | 'duplicate'
      | 'expired_uncaptured_charge'
      | 'fraudulent'
      | 'requested_by_customer';

    namespace NextAction {
      export interface DisplayDetails {
        email_sent: DisplayDetails.EmailSent;

        /**
         * The expiry timestamp.
         */
        expires_at: number;
      }

      namespace DisplayDetails {
        export interface EmailSent {
          /**
           * The timestamp when the email was sent.
           */
          email_sent_at: number;

          /**
           * The recipient's email address.
           */
          email_sent_to: string;
        }
      }
    }
  }

  export /**
   * `Refund` objects allow you to refund a charge that has previously been created
   * but not yet refunded. Funds will be refunded to the credit or debit card that
   * was originally charged.
   *
   * Related guide: [Refunds](https://stripe.com/docs/refunds).
   */
  interface Refund {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'refund';

    /**
     * Amount, in %s.
     */
    amount: number;

    /**
     * Balance transaction that describes the impact on your account balance.
     */
    balance_transaction: string | Stripe.BalanceTransaction | null;

    /**
     * ID of the charge that was refunded.
     */
    charge: string | Stripe.Charge | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only)
     */
    description?: string;

    /**
     * If the refund failed, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
     */
    failure_balance_transaction?: string | Stripe.BalanceTransaction;

    /**
     * If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`.
     */
    failure_reason?: string;

    /**
     * Email to which refund instructions, if required, are sent to.
     */
    instructions_email?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata | null;

    next_action?: Refund.NextAction;

    /**
     * ID of the PaymentIntent that was refunded.
     */
    payment_intent: string | Stripe.PaymentIntent | null;

    /**
     * Reason for the refund, either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
     */
    reason: Refund.Reason | null;

    /**
     * This is the transaction number that appears on email receipts sent for this refund.
     */
    receipt_number: string | null;

    /**
     * The transfer reversal that is associated with the refund. Only present if the charge came from another Stripe account. See the Connect documentation for details.
     */
    source_transfer_reversal: string | Stripe.TransferReversal | null;

    /**
     * Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details.
     */
    status: string | null;

    /**
     * If the accompanying transfer was reversed, the transfer reversal object. Only applicable if the charge was created using the destination parameter.
     */
    transfer_reversal: string | Stripe.TransferReversal | null;
  }

  namespace RefundCreateParams {
    export type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';
  }

  export interface RefundCreateParams {
    /**
     * A positive integer representing how much to refund.
     */
    amount?: number;

    charge?: string;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * Customer whose customer balance to refund from.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Address to send refund email, use customer email if not specified
     */
    instructions_email?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * Origin of the refund
     */
    origin?: 'customer_balance';

    payment_intent?: string;

    reason?: RefundCreateParams.Reason;

    refund_application_fee?: boolean;

    reverse_transfer?: boolean;
  }

  export interface RefundRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface RefundUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }

  export interface RefundListParams extends PaginationParams {
    /**
     * Only return refunds for the charge specified by this charge ID.
     */
    charge?: string;

    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return refunds for the PaymentIntent specified by this ID.
     */
    payment_intent?: string;
  }

  export interface RefundCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface RefundsResource {
    create:
      | ((
          params?: RefundCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Refund>>)
      | ((options?: RequestOptions) => Promise<Stripe.Response<Stripe.Refund>>);

    retrieve:
      | ((
          id: string,
          params?: RefundRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Refund>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Refund>>);

    update: (
      id: string,
      params?: RefundUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.Refund>>;

    list:
      | ((
          params?: RefundListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.Refund>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.Refund>);

    cancel:
      | ((
          id: string,
          params?: RefundCancelParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Refund>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Refund>>);
  }
}

const resource: RefundsResource = StripeResource.extend({
  path: 'refunds',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{refund}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{refund}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{refund}/cancel',
  }),
});

export = resource;
