// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Mandate {
    export interface CustomerAcceptance {
      /**
       * The time at which the customer accepted the Mandate.
       */
      accepted_at: number | null;

      offline?: CustomerAcceptance.Offline;

      online?: CustomerAcceptance.Online;

      /**
       * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
       */
      type: CustomerAcceptance.Type;
    }

    export interface MultiUse {}

    export interface PaymentMethodDetails {
      acss_debit?: PaymentMethodDetails.AcssDebit;

      au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

      bacs_debit?: PaymentMethodDetails.BacsDebit;

      blik?: PaymentMethodDetails.Blik;

      card?: PaymentMethodDetails.Card;

      link?: PaymentMethodDetails.Link;

      sepa_debit?: PaymentMethodDetails.SepaDebit;

      /**
       * The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method.
       */
      type: string;

      us_bank_account?: PaymentMethodDetails.UsBankAccount;
    }

    export interface SingleUse {
      /**
       * On a single use mandate, the amount of the payment.
       */
      amount: number;

      /**
       * On a single use mandate, the currency of the payment.
       */
      currency: string;
    }

    export type Status = 'active' | 'inactive' | 'pending';

    export type Type = 'multi_use' | 'single_use';

    namespace CustomerAcceptance {
      export interface Offline {}

      export interface Online {
        /**
         * The IP address from which the Mandate was accepted by the customer.
         */
        ip_address: string | null;

        /**
         * The user agent of the browser from which the Mandate was accepted by the customer.
         */
        user_agent: string | null;
      }

      export type Type = 'offline' | 'online';
    }

    namespace PaymentMethodDetails {
      export interface AcssDebit {
        /**
         * List of Stripe products where this mandate can be selected automatically.
         */
        default_for?: Array<AcssDebit.DefaultFor>;

        /**
         * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
         */
        interval_description: string | null;

        /**
         * Payment schedule for the mandate.
         */
        payment_schedule: AcssDebit.PaymentSchedule;

        /**
         * Transaction type of the mandate.
         */
        transaction_type: AcssDebit.TransactionType;
      }

      export interface AuBecsDebit {
        /**
         * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
         */
        url: string;
      }

      export interface BacsDebit {
        /**
         * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
         */
        network_status: BacsDebit.NetworkStatus;

        /**
         * The unique reference identifying the mandate on the Bacs network.
         */
        reference: string;

        /**
         * The URL that will contain the mandate that the customer has signed.
         */
        url: string;
      }

      export interface Blik {
        /**
         * Date at which the mandate expires.
         */
        expires_after: number | null;

        off_session?: Blik.OffSession;

        /**
         * Type of the mandate.
         */
        type: Blik.Type | null;
      }

      export interface Card {}

      export interface Link {}

      export interface SepaDebit {
        /**
         * The unique reference of the mandate.
         */
        reference: string;

        /**
         * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
         */
        url: string;
      }

      export interface UsBankAccount {}

      namespace AcssDebit {
        export type DefaultFor = 'invoice' | 'subscription';

        export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

        export type TransactionType = 'business' | 'personal';
      }

      namespace BacsDebit {
        export type NetworkStatus =
          | 'accepted'
          | 'pending'
          | 'refused'
          | 'revoked';
      }

      namespace Blik {
        export interface OffSession {
          /**
           * Amount of each recurring payment.
           */
          amount: number | null;

          /**
           * Currency of each recurring payment.
           */
          currency: string | null;

          /**
           * Frequency interval of each recurring payment.
           */
          interval: OffSession.Interval | null;

          /**
           * Frequency indicator of each recurring payment.
           */
          interval_count: number | null;
        }

        export type Type = 'off_session' | 'on_session';

        namespace OffSession {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }

  export /**
   * A Mandate is a record of the permission a customer has given you to debit their payment method.
   */
  interface Mandate {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'mandate';

    customer_acceptance: Mandate.CustomerAcceptance;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    multi_use?: Mandate.MultiUse;

    /**
     * ID of the payment method associated with this mandate.
     */
    payment_method: string | Stripe.PaymentMethod;

    payment_method_details: Mandate.PaymentMethodDetails;

    single_use?: Mandate.SingleUse;

    /**
     * The status of the mandate, which indicates whether it can be used to initiate a payment.
     */
    status: Mandate.Status;

    /**
     * The type of the mandate.
     */
    type: Mandate.Type;
  }

  export interface MandateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface MandatesResource {
    retrieve:
      | ((
          id: string,
          params?: MandateRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Mandate>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Mandate>>);
  }
}

const resource: MandatesResource = StripeResource.extend({
  path: 'mandates',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{mandate}',
  }),
});

export = resource;
