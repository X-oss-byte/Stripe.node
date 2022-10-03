// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Issuing {
    export /**
     * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
     * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
     * purchase to be completed successfully.
     *
     * Related guide: [Issued Card Authorizations](https://stripe.com/docs/issuing/purchases/authorizations).
     */
    interface Authorization {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'issuing.authorization';

      /**
       * The total amount that was authorized or rejected. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      amount: number;

      /**
       * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      amount_details: Authorization.AmountDetails | null;

      /**
       * Whether the authorization has been approved.
       */
      approved: boolean;

      /**
       * How the card details were provided.
       */
      authorization_method: Authorization.AuthorizationMethod;

      /**
       * List of balance transactions associated with this authorization.
       */
      balance_transactions: Array<Stripe.BalanceTransaction>;

      /**
       * You can [create physical or virtual cards](https://stripe.com/docs/issuing/cards) that are issued to cardholders.
       */
      card: Stripe.Issuing.Card;

      /**
       * The cardholder to whom this authorization belongs.
       */
      cardholder: string | Stripe.Issuing.Cardholder | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      merchant_amount: number;

      /**
       * The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      merchant_currency: string;

      merchant_data: Authorization.MerchantData;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
       */
      pending_request: Authorization.PendingRequest | null;

      /**
       * History of every time `pending_request` was approved/denied, either by you directly or by Stripe (e.g. based on your `spending_controls`). If the merchant changes the authorization by performing an [incremental authorization](https://stripe.com/docs/issuing/purchases/authorizations), you can look at this field to see the previous requests for the authorization.
       */
      request_history: Array<Authorization.RequestHistory>;

      /**
       * The current status of the authorization in its lifecycle.
       */
      status: Authorization.Status;

      /**
       * List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
       */
      transactions: Array<Stripe.Issuing.Transaction>;

      /**
       * [Treasury](https://stripe.com/docs/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://stripe.com/docs/api/treasury/financial_accounts).
       */
      treasury?: Authorization.Treasury | null;

      verification_data: Authorization.VerificationData;

      /**
       * The digital wallet used for this authorization. One of `apple_pay`, `google_pay`, or `samsung_pay`.
       */
      wallet: string | null;
    }

    namespace Authorization {
      export interface AmountDetails {
        /**
         * The fee charged by the ATM for the cash withdrawal.
         */
        atm_fee: number | null;
      }

      export type AuthorizationMethod =
        | 'chip'
        | 'contactless'
        | 'keyed_in'
        | 'online'
        | 'swipe';

      export interface MerchantData {
        /**
         * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
         */
        category: string;

        /**
         * The merchant category code for the seller's business
         */
        category_code: string;

        /**
         * City where the seller is located
         */
        city: string | null;

        /**
         * Country where the seller is located
         */
        country: string | null;

        /**
         * Name of the seller
         */
        name: string | null;

        /**
         * Identifier assigned to the seller by the card brand
         */
        network_id: string;

        /**
         * Postal code where the seller is located
         */
        postal_code: string | null;

        /**
         * State where the seller is located
         */
        state: string | null;
      }

      export interface PendingRequest {
        /**
         * The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount_details: PendingRequest.AmountDetails | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
         */
        is_amount_controllable: boolean;

        /**
         * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        merchant_amount: number;

        /**
         * The local currency the merchant is requesting to authorize.
         */
        merchant_currency: string;
      }

      export interface RequestHistory {
        /**
         * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
         */
        amount: number;

        /**
         * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount_details: RequestHistory.AmountDetails | null;

        /**
         * Whether this request was approved.
         */
        approved: boolean;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        merchant_amount: number;

        /**
         * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        merchant_currency: string;

        /**
         * The reason for the approval or decline.
         */
        reason: RequestHistory.Reason;
      }

      export type Status = 'closed' | 'pending' | 'reversed';

      export interface Treasury {
        /**
         * The array of [ReceivedCredits](https://stripe.com/docs/api/treasury/received_credits) associated with this authorization
         */
        received_credits: Array<string>;

        /**
         * The array of [ReceivedDebits](https://stripe.com/docs/api/treasury/received_debits) associated with this authorization
         */
        received_debits: Array<string>;

        /**
         * The Treasury [Transaction](https://stripe.com/docs/api/treasury/transactions) associated with this authorization
         */
        transaction: string | null;
      }

      export interface VerificationData {
        /**
         * Whether the cardholder provided an address first line and if it matched the cardholder's `billing.address.line1`.
         */
        address_line1_check: VerificationData.AddressLine1Check;

        /**
         * Whether the cardholder provided a postal code and if it matched the cardholder's `billing.address.postal_code`.
         */
        address_postal_code_check: VerificationData.AddressPostalCodeCheck;

        /**
         * Whether the cardholder provided a CVC and if it matched Stripe's record.
         */
        cvc_check: VerificationData.CvcCheck;

        /**
         * Whether the cardholder provided an expiry date and if it matched Stripe's record.
         */
        expiry_check: VerificationData.ExpiryCheck;
      }

      namespace PendingRequest {
        export interface AmountDetails {
          /**
           * The fee charged by the ATM for the cash withdrawal.
           */
          atm_fee: number | null;
        }
      }

      namespace RequestHistory {
        export interface AmountDetails {
          /**
           * The fee charged by the ATM for the cash withdrawal.
           */
          atm_fee: number | null;
        }

        export type Reason =
          | 'account_disabled'
          | 'card_active'
          | 'card_inactive'
          | 'cardholder_inactive'
          | 'cardholder_verification_required'
          | 'insufficient_funds'
          | 'not_allowed'
          | 'spending_controls'
          | 'suspected_fraud'
          | 'verification_failed'
          | 'webhook_approved'
          | 'webhook_declined'
          | 'webhook_timeout';
      }

      namespace VerificationData {
        export type AddressLine1Check = 'match' | 'mismatch' | 'not_provided';

        export type AddressPostalCodeCheck =
          | 'match'
          | 'mismatch'
          | 'not_provided';

        export type CvcCheck = 'match' | 'mismatch' | 'not_provided';

        export type ExpiryCheck = 'match' | 'mismatch' | 'not_provided';
      }
    }

    export interface AuthorizationRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface AuthorizationUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface AuthorizationListParams extends PaginationParams {
      /**
       * Only return authorizations that belong to the given card.
       */
      card?: string;

      /**
       * Only return authorizations that belong to the given cardholder.
       */
      cardholder?: string;

      /**
       * Only return authorizations that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
       */
      status?: AuthorizationListParams.Status;
    }

    namespace AuthorizationListParams {
      export type Status = 'closed' | 'pending' | 'reversed';
    }

    export interface AuthorizationApproveParams {
      /**
       * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
       */
      amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface AuthorizationDeclineParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface AuthorizationsResource {
      retrieve:
        | ((
            id: string,
            params?: AuthorizationRetrieveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>);

      update: (
        id: string,
        params?: AuthorizationUpdateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>;

      list:
        | ((
            params?: AuthorizationListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Issuing.Authorization>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Issuing.Authorization>);

      approve:
        | ((
            id: string,
            params?: AuthorizationApproveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>);

      decline:
        | ((
            id: string,
            params?: AuthorizationDeclineParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Authorization>>);
    }
  }
}

const resource: AuthorizationsResource = StripeResource.extend({
  path: 'issuing/authorizations',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{authorization}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{authorization}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  approve: stripeMethod({
    method: 'POST',
    path: '/{authorization}/approve',
  }),

  decline: stripeMethod({
    method: 'POST',
    path: '/{authorization}/decline',
  }),
});

export = resource;
