// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Issuing {
    export /**
     * As a [card issuer](https://stripe.com/docs/issuing), you can dispute transactions that the cardholder does not recognize, suspects to be fraudulent, or has other issues with.
     *
     * Related guide: [Disputing Transactions](https://stripe.com/docs/issuing/purchases/disputes)
     */
    interface Dispute {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'issuing.dispute';

      /**
       * Disputed amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation).
       */
      amount: number;

      /**
       * List of balance transactions associated with the dispute.
       */
      balance_transactions: Array<Stripe.BalanceTransaction> | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The currency the `transaction` was made in.
       */
      currency: string;

      evidence: Dispute.Evidence;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Current status of the dispute.
       */
      status: Dispute.Status;

      /**
       * The transaction being disputed.
       */
      transaction: string | Stripe.Issuing.Transaction;

      /**
       * [Treasury](https://stripe.com/docs/api/treasury) details related to this dispute if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
       */
      treasury?: Dispute.Treasury | null;
    }

    namespace Dispute {
      export interface Evidence {
        canceled?: Evidence.Canceled;

        duplicate?: Evidence.Duplicate;

        fraudulent?: Evidence.Fraudulent;

        merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed;

        not_received?: Evidence.NotReceived;

        other?: Evidence.Other;

        /**
         * The reason for filing the dispute. Its value will match the field containing the evidence.
         */
        reason: Evidence.Reason;

        service_not_as_described?: Evidence.ServiceNotAsDescribed;
      }

      export type Status =
        | 'expired'
        | 'lost'
        | 'submitted'
        | 'unsubmitted'
        | 'won';

      export interface Treasury {
        /**
         * The Treasury [DebitReversal](https://stripe.com/docs/api/treasury/debit_reversals) representing this Issuing dispute
         */
        debit_reversal: string | null;

        /**
         * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) that is being disputed.
         */
        received_debit: string;
      }

      namespace Evidence {
        export interface Canceled {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * Date when order was canceled.
           */
          canceled_at: number | null;

          /**
           * Whether the cardholder was provided with a cancellation policy.
           */
          cancellation_policy_provided: boolean | null;

          /**
           * Reason for canceling the order.
           */
          cancellation_reason: string | null;

          /**
           * Date when the cardholder expected to receive the product.
           */
          expected_at: number | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description: string | null;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type: Canceled.ProductType | null;

          /**
           * Result of cardholder's attempt to return the product.
           */
          return_status: Canceled.ReturnStatus | null;

          /**
           * Date when the product was returned or attempted to be returned.
           */
          returned_at: number | null;
        }

        export interface Duplicate {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
           */
          card_statement: string | Stripe.File | null;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
           */
          cash_receipt: string | Stripe.File | null;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
           */
          check_image: string | Stripe.File | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;

          /**
           * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
           */
          original_transaction: string | null;
        }

        export interface Fraudulent {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;
        }

        export interface MerchandiseNotAsDescribed {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;

          /**
           * Date when the product was received.
           */
          received_at: number | null;

          /**
           * Description of the cardholder's attempt to return the product.
           */
          return_description: string | null;

          /**
           * Result of cardholder's attempt to return the product.
           */
          return_status: MerchandiseNotAsDescribed.ReturnStatus | null;

          /**
           * Date when the product was returned or attempted to be returned.
           */
          returned_at: number | null;
        }

        export interface NotReceived {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * Date when the cardholder expected to receive the product.
           */
          expected_at: number | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description: string | null;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type: NotReceived.ProductType | null;
        }

        export interface Other {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description: string | null;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type: Other.ProductType | null;
        }

        export type Reason =
          | 'canceled'
          | 'duplicate'
          | 'fraudulent'
          | 'merchandise_not_as_described'
          | 'not_received'
          | 'other'
          | 'service_not_as_described';

        export interface ServiceNotAsDescribed {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation: string | Stripe.File | null;

          /**
           * Date when order was canceled.
           */
          canceled_at: number | null;

          /**
           * Reason for canceling the order.
           */
          cancellation_reason: string | null;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation: string | null;

          /**
           * Date when the product was received.
           */
          received_at: number | null;
        }

        namespace Canceled {
          export type ProductType = 'merchandise' | 'service';

          export type ReturnStatus = 'merchant_rejected' | 'successful';
        }

        namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = 'merchant_rejected' | 'successful';
        }

        namespace NotReceived {
          export type ProductType = 'merchandise' | 'service';
        }

        namespace Other {
          export type ProductType = 'merchandise' | 'service';
        }
      }
    }

    export interface DisputeCreateParams {
      /**
       * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If not set, defaults to the full transaction amount.
       */
      amount?: number;

      /**
       * Evidence provided for the dispute.
       */
      evidence?: DisputeCreateParams.Evidence;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`.
       */
      transaction?: string;

      /**
       * Params for disputes related to Treasury FinancialAccounts
       */
      treasury?: DisputeCreateParams.Treasury;
    }

    namespace DisputeCreateParams {
      export interface Evidence {
        /**
         * Evidence provided when `reason` is 'canceled'.
         */
        canceled?: Stripe.Emptyable<Evidence.Canceled>;

        /**
         * Evidence provided when `reason` is 'duplicate'.
         */
        duplicate?: Stripe.Emptyable<Evidence.Duplicate>;

        /**
         * Evidence provided when `reason` is 'fraudulent'.
         */
        fraudulent?: Stripe.Emptyable<Evidence.Fraudulent>;

        /**
         * Evidence provided when `reason` is 'merchandise_not_as_described'.
         */
        merchandise_not_as_described?: Stripe.Emptyable<
          Evidence.MerchandiseNotAsDescribed
        >;

        /**
         * Evidence provided when `reason` is 'not_received'.
         */
        not_received?: Stripe.Emptyable<Evidence.NotReceived>;

        /**
         * Evidence provided when `reason` is 'other'.
         */
        other?: Stripe.Emptyable<Evidence.Other>;

        /**
         * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
         */
        reason?: Evidence.Reason;

        /**
         * Evidence provided when `reason` is 'service_not_as_described'.
         */
        service_not_as_described?: Stripe.Emptyable<
          Evidence.ServiceNotAsDescribed
        >;
      }

      export interface Treasury {
        /**
         * The ID of the ReceivedDebit to initiate an Issuings dispute for.
         */
        received_debit: string;
      }

      namespace Evidence {
        export interface Canceled {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Date when order was canceled.
           */
          canceled_at?: Stripe.Emptyable<number>;

          /**
           * Whether the cardholder was provided with a cancellation policy.
           */
          cancellation_policy_provided?: Stripe.Emptyable<boolean>;

          /**
           * Reason for canceling the order.
           */
          cancellation_reason?: string;

          /**
           * Date when the cardholder expected to receive the product.
           */
          expected_at?: Stripe.Emptyable<number>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description?: string;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type?: Stripe.Emptyable<Canceled.ProductType>;

          /**
           * Result of cardholder's attempt to return the product.
           */
          return_status?: Stripe.Emptyable<Canceled.ReturnStatus>;

          /**
           * Date when the product was returned or attempted to be returned.
           */
          returned_at?: Stripe.Emptyable<number>;
        }

        export interface Duplicate {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
           */
          card_statement?: Stripe.Emptyable<string>;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
           */
          cash_receipt?: Stripe.Emptyable<string>;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
           */
          check_image?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
           */
          original_transaction?: string;
        }

        export interface Fraudulent {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;
        }

        export interface MerchandiseNotAsDescribed {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Date when the product was received.
           */
          received_at?: Stripe.Emptyable<number>;

          /**
           * Description of the cardholder's attempt to return the product.
           */
          return_description?: string;

          /**
           * Result of cardholder's attempt to return the product.
           */
          return_status?: Stripe.Emptyable<
            MerchandiseNotAsDescribed.ReturnStatus
          >;

          /**
           * Date when the product was returned or attempted to be returned.
           */
          returned_at?: Stripe.Emptyable<number>;
        }

        export interface NotReceived {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Date when the cardholder expected to receive the product.
           */
          expected_at?: Stripe.Emptyable<number>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description?: string;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type?: Stripe.Emptyable<NotReceived.ProductType>;
        }

        export interface Other {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description?: string;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type?: Stripe.Emptyable<Other.ProductType>;
        }

        export type Reason =
          | 'canceled'
          | 'duplicate'
          | 'fraudulent'
          | 'merchandise_not_as_described'
          | 'not_received'
          | 'other'
          | 'service_not_as_described';

        export interface ServiceNotAsDescribed {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Date when order was canceled.
           */
          canceled_at?: Stripe.Emptyable<number>;

          /**
           * Reason for canceling the order.
           */
          cancellation_reason?: string;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Date when the product was received.
           */
          received_at?: Stripe.Emptyable<number>;
        }

        namespace Canceled {
          export type ProductType = 'merchandise' | 'service';

          export type ReturnStatus = 'merchant_rejected' | 'successful';
        }

        namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = 'merchant_rejected' | 'successful';
        }

        namespace NotReceived {
          export type ProductType = 'merchandise' | 'service';
        }

        namespace Other {
          export type ProductType = 'merchandise' | 'service';
        }
      }
    }

    export interface DisputeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface DisputeUpdateParams {
      /**
       * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      amount?: number;

      /**
       * Evidence provided for the dispute.
       */
      evidence?: DisputeUpdateParams.Evidence;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    namespace DisputeUpdateParams {
      export interface Evidence {
        /**
         * Evidence provided when `reason` is 'canceled'.
         */
        canceled?: Stripe.Emptyable<Evidence.Canceled>;

        /**
         * Evidence provided when `reason` is 'duplicate'.
         */
        duplicate?: Stripe.Emptyable<Evidence.Duplicate>;

        /**
         * Evidence provided when `reason` is 'fraudulent'.
         */
        fraudulent?: Stripe.Emptyable<Evidence.Fraudulent>;

        /**
         * Evidence provided when `reason` is 'merchandise_not_as_described'.
         */
        merchandise_not_as_described?: Stripe.Emptyable<
          Evidence.MerchandiseNotAsDescribed
        >;

        /**
         * Evidence provided when `reason` is 'not_received'.
         */
        not_received?: Stripe.Emptyable<Evidence.NotReceived>;

        /**
         * Evidence provided when `reason` is 'other'.
         */
        other?: Stripe.Emptyable<Evidence.Other>;

        /**
         * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
         */
        reason?: Evidence.Reason;

        /**
         * Evidence provided when `reason` is 'service_not_as_described'.
         */
        service_not_as_described?: Stripe.Emptyable<
          Evidence.ServiceNotAsDescribed
        >;
      }

      namespace Evidence {
        export interface Canceled {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Date when order was canceled.
           */
          canceled_at?: Stripe.Emptyable<number>;

          /**
           * Whether the cardholder was provided with a cancellation policy.
           */
          cancellation_policy_provided?: Stripe.Emptyable<boolean>;

          /**
           * Reason for canceling the order.
           */
          cancellation_reason?: string;

          /**
           * Date when the cardholder expected to receive the product.
           */
          expected_at?: Stripe.Emptyable<number>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description?: string;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type?: Stripe.Emptyable<Canceled.ProductType>;

          /**
           * Result of cardholder's attempt to return the product.
           */
          return_status?: Stripe.Emptyable<Canceled.ReturnStatus>;

          /**
           * Date when the product was returned or attempted to be returned.
           */
          returned_at?: Stripe.Emptyable<number>;
        }

        export interface Duplicate {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
           */
          card_statement?: Stripe.Emptyable<string>;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
           */
          cash_receipt?: Stripe.Emptyable<string>;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
           */
          check_image?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
           */
          original_transaction?: string;
        }

        export interface Fraudulent {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;
        }

        export interface MerchandiseNotAsDescribed {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Date when the product was received.
           */
          received_at?: Stripe.Emptyable<number>;

          /**
           * Description of the cardholder's attempt to return the product.
           */
          return_description?: string;

          /**
           * Result of cardholder's attempt to return the product.
           */
          return_status?: Stripe.Emptyable<
            MerchandiseNotAsDescribed.ReturnStatus
          >;

          /**
           * Date when the product was returned or attempted to be returned.
           */
          returned_at?: Stripe.Emptyable<number>;
        }

        export interface NotReceived {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Date when the cardholder expected to receive the product.
           */
          expected_at?: Stripe.Emptyable<number>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description?: string;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type?: Stripe.Emptyable<NotReceived.ProductType>;
        }

        export interface Other {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Description of the merchandise or service that was purchased.
           */
          product_description?: string;

          /**
           * Whether the product was a merchandise or service.
           */
          product_type?: Stripe.Emptyable<Other.ProductType>;
        }

        export type Reason =
          | 'canceled'
          | 'duplicate'
          | 'fraudulent'
          | 'merchandise_not_as_described'
          | 'not_received'
          | 'other'
          | 'service_not_as_described';

        export interface ServiceNotAsDescribed {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
           */
          additional_documentation?: Stripe.Emptyable<string>;

          /**
           * Date when order was canceled.
           */
          canceled_at?: Stripe.Emptyable<number>;

          /**
           * Reason for canceling the order.
           */
          cancellation_reason?: string;

          /**
           * Explanation of why the cardholder is disputing this transaction.
           */
          explanation?: string;

          /**
           * Date when the product was received.
           */
          received_at?: Stripe.Emptyable<number>;
        }

        namespace Canceled {
          export type ProductType = 'merchandise' | 'service';

          export type ReturnStatus = 'merchant_rejected' | 'successful';
        }

        namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = 'merchant_rejected' | 'successful';
        }

        namespace NotReceived {
          export type ProductType = 'merchandise' | 'service';
        }

        namespace Other {
          export type ProductType = 'merchandise' | 'service';
        }
      }
    }

    export interface DisputeListParams extends PaginationParams {
      /**
       * Select Issuing disputes that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Select Issuing disputes with the given status.
       */
      status?: DisputeListParams.Status;

      /**
       * Select the Issuing dispute for the given transaction.
       */
      transaction?: string;
    }

    namespace DisputeListParams {
      export type Status =
        | 'expired'
        | 'lost'
        | 'submitted'
        | 'unsubmitted'
        | 'won';
    }

    export interface DisputeSubmitParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface DisputesResource {
      create:
        | ((
            params?: DisputeCreateParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>)
        | ((
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>);

      retrieve:
        | ((
            id: string,
            params?: DisputeRetrieveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>);

      update: (
        id: string,
        params?: DisputeUpdateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>;

      list:
        | ((
            params?: DisputeListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Issuing.Dispute>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Issuing.Dispute>);

      submit:
        | ((
            id: string,
            params?: DisputeSubmitParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Issuing.Dispute>>);
    }
  }
}

const resource: DisputesResource = StripeResource.extend({
  path: 'issuing/disputes',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{dispute}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{dispute}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  submit: stripeMethod({
    method: 'POST',
    path: '/{dispute}/submit',
  }),
});

export = resource;
