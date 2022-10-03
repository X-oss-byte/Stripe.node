// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace SetupIntent {
    export type CancellationReason =
      | 'abandoned'
      | 'duplicate'
      | 'requested_by_customer';

    export type FlowDirection = 'inbound' | 'outbound';

    export interface LastSetupError {
      /**
       * For card errors, the ID of the failed charge.
       */
      charge?: string;

      /**
       * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
       */
      code?: string;

      /**
       * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
       */
      decline_code?: string;

      /**
       * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
       */
      doc_url?: string;

      /**
       * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
       */
      message?: string;

      /**
       * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
       */
      param?: string;

      /**
       * A PaymentIntent guides you through the process of collecting a payment from your customer.
       * We recommend that you create exactly one PaymentIntent for each order or
       * customer session in your system. You can reference the PaymentIntent later to
       * see the history of payment attempts for a particular session.
       *
       * A PaymentIntent transitions through
       * [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
       * throughout its lifetime as it interfaces with Stripe.js to perform
       * authentication flows and ultimately creates at most one successful charge.
       *
       * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents).
       */
      payment_intent?: Stripe.PaymentIntent;

      /**
       * PaymentMethod objects represent your customer's payment instruments.
       * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
       * Customer objects to store instrument details for future payments.
       *
       * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
       */
      payment_method?: Stripe.PaymentMethod;

      /**
       * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
       */
      payment_method_type?: string;

      /**
       * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
       * For example, you could use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
       * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
       *
       * Create a SetupIntent as soon as you're ready to collect your customer's payment credentials.
       * Do not maintain long-lived, unconfirmed SetupIntents as they may no longer be valid.
       * The SetupIntent then transitions through multiple [statuses](https://stripe.com/docs/payments/intents#intent-statuses) as it guides
       * you through the setup process.
       *
       * Successful SetupIntents result in payment credentials that are optimized for future payments.
       * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) may need to be run through
       * [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication) at the time of payment method collection
       * in order to streamline later [off-session payments](https://stripe.com/docs/payments/setup-intents).
       * If the SetupIntent is used with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer), upon success,
       * it will automatically attach the resulting payment method to that Customer.
       * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
       * PaymentIntents to save payment methods in order to prevent saving invalid or unoptimized payment methods.
       *
       * By using SetupIntents, you ensure that your customers experience the minimum set of required friction,
       * even as regulations change over time.
       *
       * Related guide: [Setup Intents API](https://stripe.com/docs/payments/setup-intents).
       */
      setup_intent?: Stripe.SetupIntent;

      source?: Stripe.CustomerSource;

      /**
       * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
       */
      type: LastSetupError.Type;
    }

    export interface NextAction {
      redirect_to_url?: NextAction.RedirectToUrl;

      /**
       * Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
       */
      type: string;

      /**
       * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
       */
      use_stripe_sdk?: NextAction.UseStripeSdk;

      verify_with_microdeposits?: NextAction.VerifyWithMicrodeposits;
    }

    export interface PaymentMethodOptions {
      acss_debit?: PaymentMethodOptions.AcssDebit;

      blik?: PaymentMethodOptions.Blik;

      card?: PaymentMethodOptions.Card;

      link?: PaymentMethodOptions.Link;

      sepa_debit?: PaymentMethodOptions.SepaDebit;

      us_bank_account?: PaymentMethodOptions.UsBankAccount;
    }

    export type Status =
      | 'canceled'
      | 'processing'
      | 'requires_action'
      | 'requires_confirmation'
      | 'requires_payment_method'
      | 'succeeded';

    namespace LastSetupError {
      export type Type =
        | 'api_error'
        | 'card_error'
        | 'idempotency_error'
        | 'invalid_request_error';
    }

    namespace NextAction {
      export interface RedirectToUrl {
        /**
         * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
         */
        return_url: string | null;

        /**
         * The URL you must redirect your customer to in order to authenticate.
         */
        url: string | null;
      }

      export interface UseStripeSdk {}

      export interface VerifyWithMicrodeposits {
        /**
         * The timestamp when the microdeposits are expected to land.
         */
        arrival_date: number;

        /**
         * The URL for the hosted verification page, which allows customers to verify their bank account.
         */
        hosted_verification_url: string;

        /**
         * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
         */
        microdeposit_type: VerifyWithMicrodeposits.MicrodepositType | null;
      }

      namespace VerifyWithMicrodeposits {
        export type MicrodepositType = 'amounts' | 'descriptor_code';
      }
    }

    namespace PaymentMethodOptions {
      export interface AcssDebit {
        /**
         * Currency supported by the bank account
         */
        currency: AcssDebit.Currency | null;

        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Bank account verification method.
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Blik {
        mandate_options?: Blik.MandateOptions;
      }

      export interface Card {
        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options: Card.MandateOptions | null;

        /**
         * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
         */
        network: Card.Network | null;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure: Card.RequestThreeDSecure | null;
      }

      export interface Link {
        /**
         * Token used for persistent Link logins.
         */
        persistent_token: string | null;
      }

      export interface SepaDebit {
        mandate_options?: SepaDebit.MandateOptions;
      }

      export interface UsBankAccount {
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Bank account verification method.
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      namespace AcssDebit {
        export type Currency = 'cad' | 'usd';

        export interface MandateOptions {
          /**
           * A URL for custom mandate text
           */
          custom_mandate_url?: string;

          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<MandateOptions.DefaultFor>;

          /**
           * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description: string | null;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule: MandateOptions.PaymentSchedule | null;

          /**
           * Transaction type of the mandate.
           */
          transaction_type: MandateOptions.TransactionType | null;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type DefaultFor = 'invoice' | 'subscription';

          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Blik {
        export interface MandateOptions {
          /**
           * Date at which the mandate expires.
           */
          expires_after: number | null;

          off_session?: MandateOptions.OffSession;

          /**
           * Type of the mandate.
           */
          type: MandateOptions.Type | null;
        }

        namespace MandateOptions {
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

      namespace Card {
        export interface MandateOptions {
          /**
           * Amount to be charged for future payments.
           */
          amount: number;

          /**
           * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
           */
          amount_type: MandateOptions.AmountType;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A description of the mandate or subscription that is meant to be displayed to the customer.
           */
          description: string | null;

          /**
           * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
           */
          end_date: number | null;

          /**
           * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
           */
          interval: MandateOptions.Interval;

          /**
           * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
           */
          interval_count: number | null;

          /**
           * Unique identifier for the mandate or subscription.
           */
          reference: string;

          /**
           * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
           */
          start_date: number;

          /**
           * Specifies the type of mandates supported. Possible values are `india`.
           */
          supported_types: Array<'india'> | null;
        }

        export type Network =
          | 'amex'
          | 'cartes_bancaires'
          | 'diners'
          | 'discover'
          | 'interac'
          | 'jcb'
          | 'mastercard'
          | 'unionpay'
          | 'unknown'
          | 'visa';

        export type RequestThreeDSecure =
          | 'any'
          | 'automatic'
          | 'challenge_only';

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace SepaDebit {
        export interface MandateOptions {}
      }

      namespace UsBankAccount {
        export interface FinancialConnections {
          /**
           * The list of permissions to request. The `payment_method` permission must be included.
           */
          permissions?: Array<FinancialConnections.Permission>;

          /**
           * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
           */
          return_url?: string;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace FinancialConnections {
          export type Permission =
            | 'balances'
            | 'ownership'
            | 'payment_method'
            | 'transactions';
        }
      }
    }
  }

  export /**
   * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
   * For example, you could use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
   * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
   *
   * Create a SetupIntent as soon as you're ready to collect your customer's payment credentials.
   * Do not maintain long-lived, unconfirmed SetupIntents as they may no longer be valid.
   * The SetupIntent then transitions through multiple [statuses](https://stripe.com/docs/payments/intents#intent-statuses) as it guides
   * you through the setup process.
   *
   * Successful SetupIntents result in payment credentials that are optimized for future payments.
   * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) may need to be run through
   * [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication) at the time of payment method collection
   * in order to streamline later [off-session payments](https://stripe.com/docs/payments/setup-intents).
   * If the SetupIntent is used with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer), upon success,
   * it will automatically attach the resulting payment method to that Customer.
   * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
   * PaymentIntents to save payment methods in order to prevent saving invalid or unoptimized payment methods.
   *
   * By using SetupIntents, you ensure that your customers experience the minimum set of required friction,
   * even as regulations change over time.
   *
   * Related guide: [Setup Intents API](https://stripe.com/docs/payments/setup-intents).
   */
  interface SetupIntent {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'setup_intent';

    /**
     * ID of the Connect application that created the SetupIntent.
     */
    application: string | Stripe.Application | null;

    /**
     * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
     *
     * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
     */
    attach_to_self?: boolean;

    /**
     * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
     */
    cancellation_reason: SetupIntent.CancellationReason | null;

    /**
     * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
     *
     * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
     */
    client_secret: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * ID of the Customer this SetupIntent belongs to, if one exists.
     *
     * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
     */
    customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * Indicates the directions of money movement for which this payment method is intended to be used.
     *
     * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
     */
    flow_directions: Array<SetupIntent.FlowDirection> | null;

    /**
     * The error encountered in the previous SetupIntent confirmation.
     */
    last_setup_error: SetupIntent.LastSetupError | null;

    /**
     * The most recent SetupAttempt for this SetupIntent.
     */
    latest_attempt: string | Stripe.SetupAttempt | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * ID of the multi use Mandate generated by the SetupIntent.
     */
    mandate: string | Stripe.Mandate | null;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata | null;

    /**
     * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
     */
    next_action: SetupIntent.NextAction | null;

    /**
     * The account (if any) for which the setup is intended.
     */
    on_behalf_of: string | Stripe.Account | null;

    /**
     * ID of the payment method used with this SetupIntent.
     */
    payment_method: string | Stripe.PaymentMethod | null;

    /**
     * Payment-method-specific configuration for this SetupIntent.
     */
    payment_method_options: SetupIntent.PaymentMethodOptions | null;

    /**
     * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up.
     */
    payment_method_types: Array<string>;

    /**
     * ID of the single_use Mandate generated by the SetupIntent.
     */
    single_use_mandate: string | Stripe.Mandate | null;

    /**
     * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
     */
    status: SetupIntent.Status;

    /**
     * Indicates how the payment method is intended to be used in the future.
     *
     * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
     */
    usage: string;
  }

  namespace SetupIntentCreateParams {
    export type FlowDirection = 'inbound' | 'outbound';

    export interface MandateData {
      /**
       * This hash contains details about the customer acceptance of the Mandate.
       */
      customer_acceptance: MandateData.CustomerAcceptance;
    }

    export interface PaymentMethodData {
      /**
       * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
       */
      acss_debit?: PaymentMethodData.AcssDebit;

      /**
       * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
       */
      affirm?: PaymentMethodData.Affirm;

      /**
       * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
       */
      afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

      /**
       * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
       */
      alipay?: PaymentMethodData.Alipay;

      /**
       * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
       */
      au_becs_debit?: PaymentMethodData.AuBecsDebit;

      /**
       * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
       */
      bacs_debit?: PaymentMethodData.BacsDebit;

      /**
       * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
       */
      bancontact?: PaymentMethodData.Bancontact;

      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: PaymentMethodData.BillingDetails;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodData.Blik;

      /**
       * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
       */
      boleto?: PaymentMethodData.Boleto;

      /**
       * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
       */
      customer_balance?: PaymentMethodData.CustomerBalance;

      /**
       * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
       */
      eps?: PaymentMethodData.Eps;

      /**
       * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
       */
      fpx?: PaymentMethodData.Fpx;

      /**
       * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
       */
      giropay?: PaymentMethodData.Giropay;

      /**
       * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
       */
      grabpay?: PaymentMethodData.Grabpay;

      /**
       * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
       */
      ideal?: PaymentMethodData.Ideal;

      /**
       * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
       */
      interac_present?: PaymentMethodData.InteracPresent;

      /**
       * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
       */
      klarna?: PaymentMethodData.Klarna;

      /**
       * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
       */
      konbini?: PaymentMethodData.Konbini;

      /**
       * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
       */
      link?: PaymentMethodData.Link;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
       */
      oxxo?: PaymentMethodData.Oxxo;

      /**
       * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
       */
      p24?: PaymentMethodData.P24;

      /**
       * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
       */
      paynow?: PaymentMethodData.Paynow;

      /**
       * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
       */
      pix?: PaymentMethodData.Pix;

      /**
       * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
       */
      promptpay?: PaymentMethodData.Promptpay;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: PaymentMethodData.RadarOptions;

      /**
       * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
       */
      sepa_debit?: PaymentMethodData.SepaDebit;

      /**
       * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
       */
      sofort?: PaymentMethodData.Sofort;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type: PaymentMethodData.Type;

      /**
       * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
       */
      us_bank_account?: PaymentMethodData.UsBankAccount;

      /**
       * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
       */
      wechat_pay?: PaymentMethodData.WechatPay;
    }

    export interface PaymentMethodOptions {
      /**
       * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
       */
      acss_debit?: PaymentMethodOptions.AcssDebit;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodOptions.Blik;

      /**
       * Configuration for any card setup attempted on this SetupIntent.
       */
      card?: PaymentMethodOptions.Card;

      /**
       * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
       */
      link?: PaymentMethodOptions.Link;

      /**
       * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
       */
      sepa_debit?: PaymentMethodOptions.SepaDebit;

      /**
       * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
       */
      us_bank_account?: PaymentMethodOptions.UsBankAccount;
    }

    export interface SingleUse {
      /**
       * Amount the customer is granting permission to collect later. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;
    }

    export type Usage = 'off_session' | 'on_session';

    namespace MandateData {
      export interface CustomerAcceptance {
        /**
         * The time at which the customer accepted the Mandate.
         */
        accepted_at?: number;

        /**
         * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
         */
        offline?: CustomerAcceptance.Offline;

        /**
         * If this is a Mandate accepted online, this hash contains details about the online acceptance.
         */
        online?: CustomerAcceptance.Online;

        /**
         * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
         */
        type: CustomerAcceptance.Type;
      }

      namespace CustomerAcceptance {
        export interface Offline {}

        export interface Online {
          /**
           * The IP address from which the Mandate was accepted by the customer.
           */
          ip_address: string;

          /**
           * The user agent of the browser from which the Mandate was accepted by the customer.
           */
          user_agent: string;
        }

        export type Type = 'offline' | 'online';
      }
    }

    namespace PaymentMethodData {
      export interface AcssDebit {
        /**
         * Customer's bank account number.
         */
        account_number: string;

        /**
         * Institution number of the customer's bank.
         */
        institution_number: string;

        /**
         * Transit number of the customer's bank.
         */
        transit_number: string;
      }

      export interface Affirm {}

      export interface AfterpayClearpay {}

      export interface Alipay {}

      export interface AuBecsDebit {
        /**
         * The account number for the bank account.
         */
        account_number: string;

        /**
         * Bank-State-Branch number of the bank account.
         */
        bsb_number: string;
      }

      export interface BacsDebit {
        /**
         * Account number of the bank account that the funds will be debited from.
         */
        account_number?: string;

        /**
         * Sort code of the bank account. (e.g., `10-20-30`)
         */
        sort_code?: string;
      }

      export interface Bancontact {}

      export interface BillingDetails {
        /**
         * Billing address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * Email address.
         */
        email?: Stripe.Emptyable<string>;

        /**
         * Full name.
         */
        name?: string;

        /**
         * Billing phone number (including extension).
         */
        phone?: string;
      }

      export interface Blik {}

      export interface Boleto {
        /**
         * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
         */
        tax_id: string;
      }

      export interface CustomerBalance {}

      export interface Eps {
        /**
         * The customer's bank.
         */
        bank?: Eps.Bank;
      }

      export interface Fpx {
        /**
         * Account holder type for FPX transaction
         */
        account_holder_type?: Fpx.AccountHolderType;

        /**
         * The customer's bank.
         */
        bank: Fpx.Bank;
      }

      export interface Giropay {}

      export interface Grabpay {}

      export interface Ideal {
        /**
         * The customer's bank.
         */
        bank?: Ideal.Bank;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Customer's date of birth
         */
        dob?: Klarna.Dob;
      }

      export interface Konbini {}

      export interface Link {}

      export interface Oxxo {}

      export interface P24 {
        /**
         * The customer's bank.
         */
        bank?: P24.Bank;
      }

      export interface Paynow {}

      export interface Pix {}

      export interface Promptpay {}

      export interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      export interface SepaDebit {
        /**
         * IBAN of the bank account.
         */
        iban: string;
      }

      export interface Sofort {
        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: Sofort.Country;
      }

      export type Type =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay';

      export interface UsBankAccount {
        /**
         * Account holder type: individual or company.
         */
        account_holder_type?: UsBankAccount.AccountHolderType;

        /**
         * Account number of the bank account.
         */
        account_number?: string;

        /**
         * Account type: checkings or savings. Defaults to checking if omitted.
         */
        account_type?: UsBankAccount.AccountType;

        /**
         * The ID of a Financial Connections Account to use as a payment method.
         */
        financial_connections_account?: string;

        /**
         * Routing number of the bank account.
         */
        routing_number?: string;
      }

      export interface WechatPay {}

      namespace Eps {
        export type Bank =
          | 'arzte_und_apotheker_bank'
          | 'austrian_anadi_bank_ag'
          | 'bank_austria'
          | 'bankhaus_carl_spangler'
          | 'bankhaus_schelhammer_und_schattera_ag'
          | 'bawag_psk_ag'
          | 'bks_bank_ag'
          | 'brull_kallmus_bank_ag'
          | 'btv_vier_lander_bank'
          | 'capital_bank_grawe_gruppe_ag'
          | 'deutsche_bank_ag'
          | 'dolomitenbank'
          | 'easybank_ag'
          | 'erste_bank_und_sparkassen'
          | 'hypo_alpeadriabank_international_ag'
          | 'hypo_bank_burgenland_aktiengesellschaft'
          | 'hypo_noe_lb_fur_niederosterreich_u_wien'
          | 'hypo_oberosterreich_salzburg_steiermark'
          | 'hypo_tirol_bank_ag'
          | 'hypo_vorarlberg_bank_ag'
          | 'marchfelder_bank'
          | 'oberbank_ag'
          | 'raiffeisen_bankengruppe_osterreich'
          | 'schoellerbank_ag'
          | 'sparda_bank_wien'
          | 'volksbank_gruppe'
          | 'volkskreditbank_ag'
          | 'vr_bank_braunau';
      }

      namespace Fpx {
        export type AccountHolderType = 'company' | 'individual';

        export type Bank =
          | 'affin_bank'
          | 'agrobank'
          | 'alliance_bank'
          | 'ambank'
          | 'bank_islam'
          | 'bank_muamalat'
          | 'bank_rakyat'
          | 'bsn'
          | 'cimb'
          | 'deutsche_bank'
          | 'hong_leong_bank'
          | 'hsbc'
          | 'kfh'
          | 'maybank2e'
          | 'maybank2u'
          | 'ocbc'
          | 'pb_enterprise'
          | 'public_bank'
          | 'rhb'
          | 'standard_chartered'
          | 'uob';
      }

      namespace Ideal {
        export type Bank =
          | 'abn_amro'
          | 'asn_bank'
          | 'bunq'
          | 'handelsbanken'
          | 'ing'
          | 'knab'
          | 'moneyou'
          | 'rabobank'
          | 'regiobank'
          | 'revolut'
          | 'sns_bank'
          | 'triodos_bank'
          | 'van_lanschot';
      }

      namespace Klarna {
        export interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }
      }

      namespace P24 {
        export type Bank =
          | 'alior_bank'
          | 'bank_millennium'
          | 'bank_nowy_bfg_sa'
          | 'bank_pekao_sa'
          | 'banki_spbdzielcze'
          | 'blik'
          | 'bnp_paribas'
          | 'boz'
          | 'citi_handlowy'
          | 'credit_agricole'
          | 'envelobank'
          | 'etransfer_pocztowy24'
          | 'getin_bank'
          | 'ideabank'
          | 'ing'
          | 'inteligo'
          | 'mbank_mtransfer'
          | 'nest_przelew'
          | 'noble_pay'
          | 'pbac_z_ipko'
          | 'plus_bank'
          | 'santander_przelew24'
          | 'tmobile_usbugi_bankowe'
          | 'toyota_bank'
          | 'volkswagen_bank';
      }

      namespace Sofort {
        export type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
      }

      namespace UsBankAccount {
        export type AccountHolderType = 'company' | 'individual';

        export type AccountType = 'checking' | 'savings';
      }
    }

    namespace PaymentMethodOptions {
      export interface AcssDebit {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: AcssDebit.Currency;

        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Blik {
        /**
         * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
         */
        code?: string;
      }

      export interface Card {
        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options?: Card.MandateOptions;

        /**
         * When specified, this parameter signals that a card has been collected
         * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
         * parameter can only be provided during confirmation.
         */
        moto?: boolean;

        /**
         * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
         */
        network?: Card.Network;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;
      }

      export interface Link {
        /**
         * Token used for persistent Link logins.
         */
        persistent_token?: string;
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;
      }

      export interface UsBankAccount {
        /**
         * Additional fields for Financial Connections Session creation
         */
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Additional fields for network related functions
         */
        networks?: UsBankAccount.Networks;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      namespace AcssDebit {
        export type Currency = 'cad' | 'usd';

        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Stripe.Emptyable<string>;

          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<MandateOptions.DefaultFor>;

          /**
           * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description?: string;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule?: MandateOptions.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type?: MandateOptions.TransactionType;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type DefaultFor = 'invoice' | 'subscription';

          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Card {
        export interface MandateOptions {
          /**
           * Amount to be charged for future payments.
           */
          amount: number;

          /**
           * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
           */
          amount_type: MandateOptions.AmountType;

          /**
           * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A description of the mandate or subscription that is meant to be displayed to the customer.
           */
          description?: string;

          /**
           * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
           */
          end_date?: number;

          /**
           * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
           */
          interval: MandateOptions.Interval;

          /**
           * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
           */
          interval_count?: number;

          /**
           * Unique identifier for the mandate or subscription.
           */
          reference: string;

          /**
           * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
           */
          start_date: number;

          /**
           * Specifies the type of mandates supported. Possible values are `india`.
           */
          supported_types?: Array<'india'>;
        }

        export type Network =
          | 'amex'
          | 'cartes_bancaires'
          | 'diners'
          | 'discover'
          | 'interac'
          | 'jcb'
          | 'mastercard'
          | 'unionpay'
          | 'unknown'
          | 'visa';

        export type RequestThreeDSecure = 'any' | 'automatic';

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace SepaDebit {
        export interface MandateOptions {}
      }

      namespace UsBankAccount {
        export interface FinancialConnections {
          /**
           * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
           */
          permissions?: Array<FinancialConnections.Permission>;

          /**
           * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
           */
          return_url?: string;
        }

        export interface Networks {
          /**
           * Triggers validations to run across the selected networks
           */
          requested?: Array<Networks.Requested>;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace FinancialConnections {
          export type Permission =
            | 'balances'
            | 'ownership'
            | 'payment_method'
            | 'transactions';
        }

        namespace Networks {
          export type Requested = 'ach' | 'us_domestic_wire';
        }
      }
    }
  }

  export interface SetupIntentCreateParams {
    /**
     * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
     *
     * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
     */
    attach_to_self?: boolean;

    /**
     * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If the payment method attached is a card, a return_url may be provided in case additional authentication is required.
     */
    confirm?: boolean;

    /**
     * ID of the Customer this SetupIntent belongs to, if one exists.
     *
     * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
     */
    customer?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Indicates the directions of money movement for which this payment method is intended to be used.
     *
     * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
     */
    flow_directions?: Array<SetupIntentCreateParams.FlowDirection>;

    /**
     * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
     */
    mandate_data?: SetupIntentCreateParams.MandateData;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * The Stripe account ID for which this SetupIntent is created.
     */
    on_behalf_of?: string;

    /**
     * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
     */
    payment_method?: string;

    /**
     * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
     * value in the SetupIntent.
     */
    payment_method_data?: SetupIntentCreateParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration for this SetupIntent.
     */
    payment_method_options?: SetupIntentCreateParams.PaymentMethodOptions;

    /**
     * The list of payment method types (e.g. card) that this SetupIntent is allowed to use. If this is not provided, defaults to ["card"].
     */
    payment_method_types?: Array<string>;

    /**
     * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
     */
    return_url?: string;

    /**
     * If this hash is populated, this SetupIntent will generate a single_use Mandate on success.
     */
    single_use?: SetupIntentCreateParams.SingleUse;

    /**
     * Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.
     */
    usage?: SetupIntentCreateParams.Usage;
  }

  export interface SetupIntentRetrieveParams {
    /**
     * The client secret of the SetupIntent. Required if a publishable key is used to retrieve the SetupIntent.
     */
    client_secret?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace SetupIntentUpdateParams {
    export type FlowDirection = 'inbound' | 'outbound';

    export interface PaymentMethodData {
      /**
       * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
       */
      acss_debit?: PaymentMethodData.AcssDebit;

      /**
       * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
       */
      affirm?: PaymentMethodData.Affirm;

      /**
       * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
       */
      afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

      /**
       * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
       */
      alipay?: PaymentMethodData.Alipay;

      /**
       * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
       */
      au_becs_debit?: PaymentMethodData.AuBecsDebit;

      /**
       * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
       */
      bacs_debit?: PaymentMethodData.BacsDebit;

      /**
       * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
       */
      bancontact?: PaymentMethodData.Bancontact;

      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: PaymentMethodData.BillingDetails;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodData.Blik;

      /**
       * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
       */
      boleto?: PaymentMethodData.Boleto;

      /**
       * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
       */
      customer_balance?: PaymentMethodData.CustomerBalance;

      /**
       * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
       */
      eps?: PaymentMethodData.Eps;

      /**
       * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
       */
      fpx?: PaymentMethodData.Fpx;

      /**
       * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
       */
      giropay?: PaymentMethodData.Giropay;

      /**
       * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
       */
      grabpay?: PaymentMethodData.Grabpay;

      /**
       * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
       */
      ideal?: PaymentMethodData.Ideal;

      /**
       * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
       */
      interac_present?: PaymentMethodData.InteracPresent;

      /**
       * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
       */
      klarna?: PaymentMethodData.Klarna;

      /**
       * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
       */
      konbini?: PaymentMethodData.Konbini;

      /**
       * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
       */
      link?: PaymentMethodData.Link;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
       */
      oxxo?: PaymentMethodData.Oxxo;

      /**
       * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
       */
      p24?: PaymentMethodData.P24;

      /**
       * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
       */
      paynow?: PaymentMethodData.Paynow;

      /**
       * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
       */
      pix?: PaymentMethodData.Pix;

      /**
       * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
       */
      promptpay?: PaymentMethodData.Promptpay;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: PaymentMethodData.RadarOptions;

      /**
       * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
       */
      sepa_debit?: PaymentMethodData.SepaDebit;

      /**
       * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
       */
      sofort?: PaymentMethodData.Sofort;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type: PaymentMethodData.Type;

      /**
       * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
       */
      us_bank_account?: PaymentMethodData.UsBankAccount;

      /**
       * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
       */
      wechat_pay?: PaymentMethodData.WechatPay;
    }

    export interface PaymentMethodOptions {
      /**
       * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
       */
      acss_debit?: PaymentMethodOptions.AcssDebit;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodOptions.Blik;

      /**
       * Configuration for any card setup attempted on this SetupIntent.
       */
      card?: PaymentMethodOptions.Card;

      /**
       * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
       */
      link?: PaymentMethodOptions.Link;

      /**
       * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
       */
      sepa_debit?: PaymentMethodOptions.SepaDebit;

      /**
       * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
       */
      us_bank_account?: PaymentMethodOptions.UsBankAccount;
    }

    namespace PaymentMethodData {
      export interface AcssDebit {
        /**
         * Customer's bank account number.
         */
        account_number: string;

        /**
         * Institution number of the customer's bank.
         */
        institution_number: string;

        /**
         * Transit number of the customer's bank.
         */
        transit_number: string;
      }

      export interface Affirm {}

      export interface AfterpayClearpay {}

      export interface Alipay {}

      export interface AuBecsDebit {
        /**
         * The account number for the bank account.
         */
        account_number: string;

        /**
         * Bank-State-Branch number of the bank account.
         */
        bsb_number: string;
      }

      export interface BacsDebit {
        /**
         * Account number of the bank account that the funds will be debited from.
         */
        account_number?: string;

        /**
         * Sort code of the bank account. (e.g., `10-20-30`)
         */
        sort_code?: string;
      }

      export interface Bancontact {}

      export interface BillingDetails {
        /**
         * Billing address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * Email address.
         */
        email?: Stripe.Emptyable<string>;

        /**
         * Full name.
         */
        name?: string;

        /**
         * Billing phone number (including extension).
         */
        phone?: string;
      }

      export interface Blik {}

      export interface Boleto {
        /**
         * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
         */
        tax_id: string;
      }

      export interface CustomerBalance {}

      export interface Eps {
        /**
         * The customer's bank.
         */
        bank?: Eps.Bank;
      }

      export interface Fpx {
        /**
         * Account holder type for FPX transaction
         */
        account_holder_type?: Fpx.AccountHolderType;

        /**
         * The customer's bank.
         */
        bank: Fpx.Bank;
      }

      export interface Giropay {}

      export interface Grabpay {}

      export interface Ideal {
        /**
         * The customer's bank.
         */
        bank?: Ideal.Bank;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Customer's date of birth
         */
        dob?: Klarna.Dob;
      }

      export interface Konbini {}

      export interface Link {}

      export interface Oxxo {}

      export interface P24 {
        /**
         * The customer's bank.
         */
        bank?: P24.Bank;
      }

      export interface Paynow {}

      export interface Pix {}

      export interface Promptpay {}

      export interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      export interface SepaDebit {
        /**
         * IBAN of the bank account.
         */
        iban: string;
      }

      export interface Sofort {
        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: Sofort.Country;
      }

      export type Type =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay';

      export interface UsBankAccount {
        /**
         * Account holder type: individual or company.
         */
        account_holder_type?: UsBankAccount.AccountHolderType;

        /**
         * Account number of the bank account.
         */
        account_number?: string;

        /**
         * Account type: checkings or savings. Defaults to checking if omitted.
         */
        account_type?: UsBankAccount.AccountType;

        /**
         * The ID of a Financial Connections Account to use as a payment method.
         */
        financial_connections_account?: string;

        /**
         * Routing number of the bank account.
         */
        routing_number?: string;
      }

      export interface WechatPay {}

      namespace Eps {
        export type Bank =
          | 'arzte_und_apotheker_bank'
          | 'austrian_anadi_bank_ag'
          | 'bank_austria'
          | 'bankhaus_carl_spangler'
          | 'bankhaus_schelhammer_und_schattera_ag'
          | 'bawag_psk_ag'
          | 'bks_bank_ag'
          | 'brull_kallmus_bank_ag'
          | 'btv_vier_lander_bank'
          | 'capital_bank_grawe_gruppe_ag'
          | 'deutsche_bank_ag'
          | 'dolomitenbank'
          | 'easybank_ag'
          | 'erste_bank_und_sparkassen'
          | 'hypo_alpeadriabank_international_ag'
          | 'hypo_bank_burgenland_aktiengesellschaft'
          | 'hypo_noe_lb_fur_niederosterreich_u_wien'
          | 'hypo_oberosterreich_salzburg_steiermark'
          | 'hypo_tirol_bank_ag'
          | 'hypo_vorarlberg_bank_ag'
          | 'marchfelder_bank'
          | 'oberbank_ag'
          | 'raiffeisen_bankengruppe_osterreich'
          | 'schoellerbank_ag'
          | 'sparda_bank_wien'
          | 'volksbank_gruppe'
          | 'volkskreditbank_ag'
          | 'vr_bank_braunau';
      }

      namespace Fpx {
        export type AccountHolderType = 'company' | 'individual';

        export type Bank =
          | 'affin_bank'
          | 'agrobank'
          | 'alliance_bank'
          | 'ambank'
          | 'bank_islam'
          | 'bank_muamalat'
          | 'bank_rakyat'
          | 'bsn'
          | 'cimb'
          | 'deutsche_bank'
          | 'hong_leong_bank'
          | 'hsbc'
          | 'kfh'
          | 'maybank2e'
          | 'maybank2u'
          | 'ocbc'
          | 'pb_enterprise'
          | 'public_bank'
          | 'rhb'
          | 'standard_chartered'
          | 'uob';
      }

      namespace Ideal {
        export type Bank =
          | 'abn_amro'
          | 'asn_bank'
          | 'bunq'
          | 'handelsbanken'
          | 'ing'
          | 'knab'
          | 'moneyou'
          | 'rabobank'
          | 'regiobank'
          | 'revolut'
          | 'sns_bank'
          | 'triodos_bank'
          | 'van_lanschot';
      }

      namespace Klarna {
        export interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }
      }

      namespace P24 {
        export type Bank =
          | 'alior_bank'
          | 'bank_millennium'
          | 'bank_nowy_bfg_sa'
          | 'bank_pekao_sa'
          | 'banki_spbdzielcze'
          | 'blik'
          | 'bnp_paribas'
          | 'boz'
          | 'citi_handlowy'
          | 'credit_agricole'
          | 'envelobank'
          | 'etransfer_pocztowy24'
          | 'getin_bank'
          | 'ideabank'
          | 'ing'
          | 'inteligo'
          | 'mbank_mtransfer'
          | 'nest_przelew'
          | 'noble_pay'
          | 'pbac_z_ipko'
          | 'plus_bank'
          | 'santander_przelew24'
          | 'tmobile_usbugi_bankowe'
          | 'toyota_bank'
          | 'volkswagen_bank';
      }

      namespace Sofort {
        export type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
      }

      namespace UsBankAccount {
        export type AccountHolderType = 'company' | 'individual';

        export type AccountType = 'checking' | 'savings';
      }
    }

    namespace PaymentMethodOptions {
      export interface AcssDebit {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: AcssDebit.Currency;

        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Blik {
        /**
         * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
         */
        code?: string;
      }

      export interface Card {
        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options?: Card.MandateOptions;

        /**
         * When specified, this parameter signals that a card has been collected
         * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
         * parameter can only be provided during confirmation.
         */
        moto?: boolean;

        /**
         * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
         */
        network?: Card.Network;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;
      }

      export interface Link {
        /**
         * Token used for persistent Link logins.
         */
        persistent_token?: string;
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;
      }

      export interface UsBankAccount {
        /**
         * Additional fields for Financial Connections Session creation
         */
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Additional fields for network related functions
         */
        networks?: UsBankAccount.Networks;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      namespace AcssDebit {
        export type Currency = 'cad' | 'usd';

        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Stripe.Emptyable<string>;

          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<MandateOptions.DefaultFor>;

          /**
           * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description?: string;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule?: MandateOptions.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type?: MandateOptions.TransactionType;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type DefaultFor = 'invoice' | 'subscription';

          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Card {
        export interface MandateOptions {
          /**
           * Amount to be charged for future payments.
           */
          amount: number;

          /**
           * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
           */
          amount_type: MandateOptions.AmountType;

          /**
           * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A description of the mandate or subscription that is meant to be displayed to the customer.
           */
          description?: string;

          /**
           * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
           */
          end_date?: number;

          /**
           * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
           */
          interval: MandateOptions.Interval;

          /**
           * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
           */
          interval_count?: number;

          /**
           * Unique identifier for the mandate or subscription.
           */
          reference: string;

          /**
           * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
           */
          start_date: number;

          /**
           * Specifies the type of mandates supported. Possible values are `india`.
           */
          supported_types?: Array<'india'>;
        }

        export type Network =
          | 'amex'
          | 'cartes_bancaires'
          | 'diners'
          | 'discover'
          | 'interac'
          | 'jcb'
          | 'mastercard'
          | 'unionpay'
          | 'unknown'
          | 'visa';

        export type RequestThreeDSecure = 'any' | 'automatic';

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace SepaDebit {
        export interface MandateOptions {}
      }

      namespace UsBankAccount {
        export interface FinancialConnections {
          /**
           * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
           */
          permissions?: Array<FinancialConnections.Permission>;

          /**
           * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
           */
          return_url?: string;
        }

        export interface Networks {
          /**
           * Triggers validations to run across the selected networks
           */
          requested?: Array<Networks.Requested>;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace FinancialConnections {
          export type Permission =
            | 'balances'
            | 'ownership'
            | 'payment_method'
            | 'transactions';
        }

        namespace Networks {
          export type Requested = 'ach' | 'us_domestic_wire';
        }
      }
    }
  }

  export interface SetupIntentUpdateParams {
    /**
     * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
     *
     * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
     */
    attach_to_self?: boolean;

    /**
     * ID of the Customer this SetupIntent belongs to, if one exists.
     *
     * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
     */
    customer?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Indicates the directions of money movement for which this payment method is intended to be used.
     *
     * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
     */
    flow_directions?: Array<SetupIntentUpdateParams.FlowDirection>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
     */
    payment_method?: string;

    /**
     * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
     * value in the SetupIntent.
     */
    payment_method_data?: SetupIntentUpdateParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration for this SetupIntent.
     */
    payment_method_options?: SetupIntentUpdateParams.PaymentMethodOptions;

    /**
     * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up. If this is not provided, defaults to ["card"].
     */
    payment_method_types?: Array<string>;
  }

  export interface SetupIntentListParams extends PaginationParams {
    /**
     * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
     *
     * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
     */
    attach_to_self?: boolean;

    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Only return SetupIntents for the customer specified by this customer ID.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return SetupIntents associated with the specified payment method.
     */
    payment_method?: string;
  }

  namespace SetupIntentCancelParams {
    export type CancellationReason =
      | 'abandoned'
      | 'duplicate'
      | 'requested_by_customer';
  }

  export interface SetupIntentCancelParams {
    /**
     * Reason for canceling this SetupIntent. Possible values are `abandoned`, `requested_by_customer`, or `duplicate`
     */
    cancellation_reason?: SetupIntentCancelParams.CancellationReason;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace SetupIntentConfirmParams {
    export interface MandateData1 {
      /**
       * This hash contains details about the customer acceptance of the Mandate.
       */
      customer_acceptance: MandateData1.CustomerAcceptance;
    }

    export interface MandateData2 {
      /**
       * This hash contains details about the customer acceptance of the Mandate.
       */
      customer_acceptance: MandateData2.CustomerAcceptance;
    }

    export interface PaymentMethodData {
      /**
       * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
       */
      acss_debit?: PaymentMethodData.AcssDebit;

      /**
       * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
       */
      affirm?: PaymentMethodData.Affirm;

      /**
       * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
       */
      afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

      /**
       * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
       */
      alipay?: PaymentMethodData.Alipay;

      /**
       * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
       */
      au_becs_debit?: PaymentMethodData.AuBecsDebit;

      /**
       * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
       */
      bacs_debit?: PaymentMethodData.BacsDebit;

      /**
       * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
       */
      bancontact?: PaymentMethodData.Bancontact;

      /**
       * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
       */
      billing_details?: PaymentMethodData.BillingDetails;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodData.Blik;

      /**
       * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
       */
      boleto?: PaymentMethodData.Boleto;

      /**
       * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
       */
      customer_balance?: PaymentMethodData.CustomerBalance;

      /**
       * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
       */
      eps?: PaymentMethodData.Eps;

      /**
       * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
       */
      fpx?: PaymentMethodData.Fpx;

      /**
       * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
       */
      giropay?: PaymentMethodData.Giropay;

      /**
       * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
       */
      grabpay?: PaymentMethodData.Grabpay;

      /**
       * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
       */
      ideal?: PaymentMethodData.Ideal;

      /**
       * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
       */
      interac_present?: PaymentMethodData.InteracPresent;

      /**
       * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
       */
      klarna?: PaymentMethodData.Klarna;

      /**
       * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
       */
      konbini?: PaymentMethodData.Konbini;

      /**
       * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
       */
      link?: PaymentMethodData.Link;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
       */
      oxxo?: PaymentMethodData.Oxxo;

      /**
       * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
       */
      p24?: PaymentMethodData.P24;

      /**
       * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
       */
      paynow?: PaymentMethodData.Paynow;

      /**
       * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
       */
      pix?: PaymentMethodData.Pix;

      /**
       * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
       */
      promptpay?: PaymentMethodData.Promptpay;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: PaymentMethodData.RadarOptions;

      /**
       * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
       */
      sepa_debit?: PaymentMethodData.SepaDebit;

      /**
       * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
       */
      sofort?: PaymentMethodData.Sofort;

      /**
       * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
       */
      type: PaymentMethodData.Type;

      /**
       * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
       */
      us_bank_account?: PaymentMethodData.UsBankAccount;

      /**
       * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
       */
      wechat_pay?: PaymentMethodData.WechatPay;
    }

    export interface PaymentMethodOptions {
      /**
       * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
       */
      acss_debit?: PaymentMethodOptions.AcssDebit;

      /**
       * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
       */
      blik?: PaymentMethodOptions.Blik;

      /**
       * Configuration for any card setup attempted on this SetupIntent.
       */
      card?: PaymentMethodOptions.Card;

      /**
       * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
       */
      link?: PaymentMethodOptions.Link;

      /**
       * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
       */
      sepa_debit?: PaymentMethodOptions.SepaDebit;

      /**
       * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
       */
      us_bank_account?: PaymentMethodOptions.UsBankAccount;
    }

    namespace MandateData1 {
      export interface CustomerAcceptance {
        /**
         * The time at which the customer accepted the Mandate.
         */
        accepted_at?: number;

        /**
         * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
         */
        offline?: CustomerAcceptance.Offline;

        /**
         * If this is a Mandate accepted online, this hash contains details about the online acceptance.
         */
        online?: CustomerAcceptance.Online;

        /**
         * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
         */
        type: CustomerAcceptance.Type;
      }

      namespace CustomerAcceptance {
        export interface Offline {}

        export interface Online {
          /**
           * The IP address from which the Mandate was accepted by the customer.
           */
          ip_address: string;

          /**
           * The user agent of the browser from which the Mandate was accepted by the customer.
           */
          user_agent: string;
        }

        export type Type = 'offline' | 'online';
      }
    }

    namespace MandateData2 {
      export interface CustomerAcceptance {
        /**
         * If this is a Mandate accepted online, this hash contains details about the online acceptance.
         */
        online: CustomerAcceptance.Online;

        /**
         * The type of customer acceptance information included with the Mandate.
         */
        type: 'online';
      }

      namespace CustomerAcceptance {
        export interface Online {
          /**
           * The IP address from which the Mandate was accepted by the customer.
           */
          ip_address?: string;

          /**
           * The user agent of the browser from which the Mandate was accepted by the customer.
           */
          user_agent?: string;
        }
      }
    }

    namespace PaymentMethodData {
      export interface AcssDebit {
        /**
         * Customer's bank account number.
         */
        account_number: string;

        /**
         * Institution number of the customer's bank.
         */
        institution_number: string;

        /**
         * Transit number of the customer's bank.
         */
        transit_number: string;
      }

      export interface Affirm {}

      export interface AfterpayClearpay {}

      export interface Alipay {}

      export interface AuBecsDebit {
        /**
         * The account number for the bank account.
         */
        account_number: string;

        /**
         * Bank-State-Branch number of the bank account.
         */
        bsb_number: string;
      }

      export interface BacsDebit {
        /**
         * Account number of the bank account that the funds will be debited from.
         */
        account_number?: string;

        /**
         * Sort code of the bank account. (e.g., `10-20-30`)
         */
        sort_code?: string;
      }

      export interface Bancontact {}

      export interface BillingDetails {
        /**
         * Billing address.
         */
        address?: Stripe.Emptyable<Stripe.AddressParam>;

        /**
         * Email address.
         */
        email?: Stripe.Emptyable<string>;

        /**
         * Full name.
         */
        name?: string;

        /**
         * Billing phone number (including extension).
         */
        phone?: string;
      }

      export interface Blik {}

      export interface Boleto {
        /**
         * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
         */
        tax_id: string;
      }

      export interface CustomerBalance {}

      export interface Eps {
        /**
         * The customer's bank.
         */
        bank?: Eps.Bank;
      }

      export interface Fpx {
        /**
         * Account holder type for FPX transaction
         */
        account_holder_type?: Fpx.AccountHolderType;

        /**
         * The customer's bank.
         */
        bank: Fpx.Bank;
      }

      export interface Giropay {}

      export interface Grabpay {}

      export interface Ideal {
        /**
         * The customer's bank.
         */
        bank?: Ideal.Bank;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Customer's date of birth
         */
        dob?: Klarna.Dob;
      }

      export interface Konbini {}

      export interface Link {}

      export interface Oxxo {}

      export interface P24 {
        /**
         * The customer's bank.
         */
        bank?: P24.Bank;
      }

      export interface Paynow {}

      export interface Pix {}

      export interface Promptpay {}

      export interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      export interface SepaDebit {
        /**
         * IBAN of the bank account.
         */
        iban: string;
      }

      export interface Sofort {
        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: Sofort.Country;
      }

      export type Type =
        | 'acss_debit'
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'customer_balance'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'link'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'us_bank_account'
        | 'wechat_pay';

      export interface UsBankAccount {
        /**
         * Account holder type: individual or company.
         */
        account_holder_type?: UsBankAccount.AccountHolderType;

        /**
         * Account number of the bank account.
         */
        account_number?: string;

        /**
         * Account type: checkings or savings. Defaults to checking if omitted.
         */
        account_type?: UsBankAccount.AccountType;

        /**
         * The ID of a Financial Connections Account to use as a payment method.
         */
        financial_connections_account?: string;

        /**
         * Routing number of the bank account.
         */
        routing_number?: string;
      }

      export interface WechatPay {}

      namespace Eps {
        export type Bank =
          | 'arzte_und_apotheker_bank'
          | 'austrian_anadi_bank_ag'
          | 'bank_austria'
          | 'bankhaus_carl_spangler'
          | 'bankhaus_schelhammer_und_schattera_ag'
          | 'bawag_psk_ag'
          | 'bks_bank_ag'
          | 'brull_kallmus_bank_ag'
          | 'btv_vier_lander_bank'
          | 'capital_bank_grawe_gruppe_ag'
          | 'deutsche_bank_ag'
          | 'dolomitenbank'
          | 'easybank_ag'
          | 'erste_bank_und_sparkassen'
          | 'hypo_alpeadriabank_international_ag'
          | 'hypo_bank_burgenland_aktiengesellschaft'
          | 'hypo_noe_lb_fur_niederosterreich_u_wien'
          | 'hypo_oberosterreich_salzburg_steiermark'
          | 'hypo_tirol_bank_ag'
          | 'hypo_vorarlberg_bank_ag'
          | 'marchfelder_bank'
          | 'oberbank_ag'
          | 'raiffeisen_bankengruppe_osterreich'
          | 'schoellerbank_ag'
          | 'sparda_bank_wien'
          | 'volksbank_gruppe'
          | 'volkskreditbank_ag'
          | 'vr_bank_braunau';
      }

      namespace Fpx {
        export type AccountHolderType = 'company' | 'individual';

        export type Bank =
          | 'affin_bank'
          | 'agrobank'
          | 'alliance_bank'
          | 'ambank'
          | 'bank_islam'
          | 'bank_muamalat'
          | 'bank_rakyat'
          | 'bsn'
          | 'cimb'
          | 'deutsche_bank'
          | 'hong_leong_bank'
          | 'hsbc'
          | 'kfh'
          | 'maybank2e'
          | 'maybank2u'
          | 'ocbc'
          | 'pb_enterprise'
          | 'public_bank'
          | 'rhb'
          | 'standard_chartered'
          | 'uob';
      }

      namespace Ideal {
        export type Bank =
          | 'abn_amro'
          | 'asn_bank'
          | 'bunq'
          | 'handelsbanken'
          | 'ing'
          | 'knab'
          | 'moneyou'
          | 'rabobank'
          | 'regiobank'
          | 'revolut'
          | 'sns_bank'
          | 'triodos_bank'
          | 'van_lanschot';
      }

      namespace Klarna {
        export interface Dob {
          /**
           * The day of birth, between 1 and 31.
           */
          day: number;

          /**
           * The month of birth, between 1 and 12.
           */
          month: number;

          /**
           * The four-digit year of birth.
           */
          year: number;
        }
      }

      namespace P24 {
        export type Bank =
          | 'alior_bank'
          | 'bank_millennium'
          | 'bank_nowy_bfg_sa'
          | 'bank_pekao_sa'
          | 'banki_spbdzielcze'
          | 'blik'
          | 'bnp_paribas'
          | 'boz'
          | 'citi_handlowy'
          | 'credit_agricole'
          | 'envelobank'
          | 'etransfer_pocztowy24'
          | 'getin_bank'
          | 'ideabank'
          | 'ing'
          | 'inteligo'
          | 'mbank_mtransfer'
          | 'nest_przelew'
          | 'noble_pay'
          | 'pbac_z_ipko'
          | 'plus_bank'
          | 'santander_przelew24'
          | 'tmobile_usbugi_bankowe'
          | 'toyota_bank'
          | 'volkswagen_bank';
      }

      namespace Sofort {
        export type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
      }

      namespace UsBankAccount {
        export type AccountHolderType = 'company' | 'individual';

        export type AccountType = 'checking' | 'savings';
      }
    }

    namespace PaymentMethodOptions {
      export interface AcssDebit {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: AcssDebit.Currency;

        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Blik {
        /**
         * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
         */
        code?: string;
      }

      export interface Card {
        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options?: Card.MandateOptions;

        /**
         * When specified, this parameter signals that a card has been collected
         * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
         * parameter can only be provided during confirmation.
         */
        moto?: boolean;

        /**
         * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
         */
        network?: Card.Network;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;
      }

      export interface Link {
        /**
         * Token used for persistent Link logins.
         */
        persistent_token?: string;
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;
      }

      export interface UsBankAccount {
        /**
         * Additional fields for Financial Connections Session creation
         */
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Additional fields for network related functions
         */
        networks?: UsBankAccount.Networks;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      namespace AcssDebit {
        export type Currency = 'cad' | 'usd';

        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Stripe.Emptyable<string>;

          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<MandateOptions.DefaultFor>;

          /**
           * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description?: string;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule?: MandateOptions.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type?: MandateOptions.TransactionType;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type DefaultFor = 'invoice' | 'subscription';

          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Card {
        export interface MandateOptions {
          /**
           * Amount to be charged for future payments.
           */
          amount: number;

          /**
           * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
           */
          amount_type: MandateOptions.AmountType;

          /**
           * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A description of the mandate or subscription that is meant to be displayed to the customer.
           */
          description?: string;

          /**
           * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
           */
          end_date?: number;

          /**
           * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
           */
          interval: MandateOptions.Interval;

          /**
           * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
           */
          interval_count?: number;

          /**
           * Unique identifier for the mandate or subscription.
           */
          reference: string;

          /**
           * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
           */
          start_date: number;

          /**
           * Specifies the type of mandates supported. Possible values are `india`.
           */
          supported_types?: Array<'india'>;
        }

        export type Network =
          | 'amex'
          | 'cartes_bancaires'
          | 'diners'
          | 'discover'
          | 'interac'
          | 'jcb'
          | 'mastercard'
          | 'unionpay'
          | 'unknown'
          | 'visa';

        export type RequestThreeDSecure = 'any' | 'automatic';

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace SepaDebit {
        export interface MandateOptions {}
      }

      namespace UsBankAccount {
        export interface FinancialConnections {
          /**
           * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
           */
          permissions?: Array<FinancialConnections.Permission>;

          /**
           * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
           */
          return_url?: string;
        }

        export interface Networks {
          /**
           * Triggers validations to run across the selected networks
           */
          requested?: Array<Networks.Requested>;
        }

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace FinancialConnections {
          export type Permission =
            | 'balances'
            | 'ownership'
            | 'payment_method'
            | 'transactions';
        }

        namespace Networks {
          export type Requested = 'ach' | 'us_domestic_wire';
        }
      }
    }
  }

  export interface SetupIntentConfirmParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * This hash contains details about the Mandate to create
     */
    mandate_data?:
      | SetupIntentConfirmParams.MandateData1
      | SetupIntentConfirmParams.MandateData2;

    /**
     * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
     */
    payment_method?: string;

    /**
     * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
     * value in the SetupIntent.
     */
    payment_method_data?: SetupIntentConfirmParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration for this SetupIntent.
     */
    payment_method_options?: SetupIntentConfirmParams.PaymentMethodOptions;

    /**
     * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
     * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
     * This parameter is only used for cards and other redirect-based payment methods.
     */
    return_url?: string;
  }

  export interface SetupIntentVerifyMicrodepositsParams {
    /**
     * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
     */
    amounts?: Array<number>;

    /**
     * A six-character code starting with SM present in the microdeposit sent to the bank account.
     */
    descriptor_code?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface SetupIntentsResource {
    create:
      | ((
          params?: SetupIntentCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>)
      | ((
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>);

    retrieve:
      | ((
          id: string,
          params?: SetupIntentRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>);

    update: (
      id: string,
      params?: SetupIntentUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.SetupIntent>>;

    list:
      | ((
          params?: SetupIntentListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.SetupIntent>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.SetupIntent>);

    cancel:
      | ((
          id: string,
          params?: SetupIntentCancelParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>);

    confirm:
      | ((
          id: string,
          params?: SetupIntentConfirmParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>);

    verifyMicrodeposits:
      | ((
          id: string,
          params?: SetupIntentVerifyMicrodepositsParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.SetupIntent>>);
  }
}

const resource: SetupIntentsResource = StripeResource.extend({
  path: 'setup_intents',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{intent}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{intent}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),

  verifyMicrodeposits: stripeMethod({
    method: 'POST',
    path: '/{intent}/verify_microdeposits',
  }),
});

export = resource;
