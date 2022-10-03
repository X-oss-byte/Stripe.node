// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace PaymentIntent {
    export interface AmountDetails {
      tip?: AmountDetails.Tip;
    }

    export interface AutomaticPaymentMethods {
      /**
       * Automatically calculates compatible payment methods
       */
      enabled: boolean;
    }

    export type CancellationReason =
      | 'abandoned'
      | 'automatic'
      | 'duplicate'
      | 'failed_invoice'
      | 'fraudulent'
      | 'requested_by_customer'
      | 'void_invoice';

    export type CaptureMethod = 'automatic' | 'manual';

    export type ConfirmationMethod = 'automatic' | 'manual';

    export interface LastPaymentError {
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
      type: LastPaymentError.Type;
    }

    export interface NextAction {
      alipay_handle_redirect?: NextAction.AlipayHandleRedirect;

      boleto_display_details?: NextAction.BoletoDisplayDetails;

      card_await_notification?: NextAction.CardAwaitNotification;

      display_bank_transfer_instructions?: NextAction.DisplayBankTransferInstructions;

      konbini_display_details?: NextAction.KonbiniDisplayDetails;

      oxxo_display_details?: NextAction.OxxoDisplayDetails;

      paynow_display_qr_code?: NextAction.PaynowDisplayQrCode;

      pix_display_qr_code?: NextAction.PixDisplayQrCode;

      promptpay_display_qr_code?: NextAction.PromptpayDisplayQrCode;

      redirect_to_url?: NextAction.RedirectToUrl;

      /**
       * Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
       */
      type: string;

      /**
       * When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
       */
      use_stripe_sdk?: NextAction.UseStripeSdk;

      verify_with_microdeposits?: NextAction.VerifyWithMicrodeposits;

      wechat_pay_display_qr_code?: NextAction.WechatPayDisplayQrCode;

      wechat_pay_redirect_to_android_app?: NextAction.WechatPayRedirectToAndroidApp;

      wechat_pay_redirect_to_ios_app?: NextAction.WechatPayRedirectToIosApp;
    }

    export interface PaymentMethodOptions {
      acss_debit?: PaymentMethodOptions.AcssDebit;

      affirm?: PaymentMethodOptions.Affirm;

      afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;

      alipay?: PaymentMethodOptions.Alipay;

      au_becs_debit?: PaymentMethodOptions.AuBecsDebit;

      bacs_debit?: PaymentMethodOptions.BacsDebit;

      bancontact?: PaymentMethodOptions.Bancontact;

      blik?: PaymentMethodOptions.Blik;

      boleto?: PaymentMethodOptions.Boleto;

      card?: PaymentMethodOptions.Card;

      card_present?: PaymentMethodOptions.CardPresent;

      customer_balance?: PaymentMethodOptions.CustomerBalance;

      eps?: PaymentMethodOptions.Eps;

      fpx?: PaymentMethodOptions.Fpx;

      giropay?: PaymentMethodOptions.Giropay;

      grabpay?: PaymentMethodOptions.Grabpay;

      ideal?: PaymentMethodOptions.Ideal;

      interac_present?: PaymentMethodOptions.InteracPresent;

      klarna?: PaymentMethodOptions.Klarna;

      konbini?: PaymentMethodOptions.Konbini;

      link?: PaymentMethodOptions.Link;

      oxxo?: PaymentMethodOptions.Oxxo;

      p24?: PaymentMethodOptions.P24;

      paynow?: PaymentMethodOptions.Paynow;

      pix?: PaymentMethodOptions.Pix;

      promptpay?: PaymentMethodOptions.Promptpay;

      sepa_debit?: PaymentMethodOptions.SepaDebit;

      sofort?: PaymentMethodOptions.Sofort;

      us_bank_account?: PaymentMethodOptions.UsBankAccount;

      wechat_pay?: PaymentMethodOptions.WechatPay;
    }

    export interface Processing {
      card?: Processing.Card;

      /**
       * Type of the payment method for which payment is in `processing` state, one of `card`.
       */
      type: 'card';
    }

    export type SetupFutureUsage = 'off_session' | 'on_session';

    export interface Shipping {
      address?: Stripe.Address;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string | null;

      /**
       * Recipient name.
       */
      name?: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string | null;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string | null;
    }

    export type Status =
      | 'canceled'
      | 'processing'
      | 'requires_action'
      | 'requires_capture'
      | 'requires_confirmation'
      | 'requires_payment_method'
      | 'succeeded';

    export interface TransferData {
      /**
       * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount?: number;

      /**
       * The account (if any) the payment will be attributed to for tax
       * reporting, and where funds from the payment will be transferred to upon
       * payment success.
       */
      destination: string | Stripe.Account;
    }

    namespace AmountDetails {
      export interface Tip {
        /**
         * Portion of the amount that corresponds to a tip.
         */
        amount?: number;
      }
    }

    namespace LastPaymentError {
      export type Type =
        | 'api_error'
        | 'card_error'
        | 'idempotency_error'
        | 'invalid_request_error';
    }

    namespace NextAction {
      export interface AlipayHandleRedirect {
        /**
         * The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App.
         */
        native_data: string | null;

        /**
         * The native URL you must redirect your customer to in order to authenticate the payment in an iOS App.
         */
        native_url: string | null;

        /**
         * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
         */
        return_url: string | null;

        /**
         * The URL you must redirect your customer to in order to authenticate the payment.
         */
        url: string | null;
      }

      export interface BoletoDisplayDetails {
        /**
         * The timestamp after which the boleto expires.
         */
        expires_at: number | null;

        /**
         * The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher.
         */
        hosted_voucher_url: string | null;

        /**
         * The boleto number.
         */
        number: string | null;

        /**
         * The URL to the downloadable boleto voucher PDF.
         */
        pdf: string | null;
      }

      export interface CardAwaitNotification {
        /**
         * The time that payment will be attempted. If customer approval is required, they need to provide approval before this time.
         */
        charge_attempt_at: number | null;

        /**
         * For payments greater than INR 15000, the customer must provide explicit approval of the payment with their bank. For payments of lower amount, no customer action is required.
         */
        customer_approval_required: boolean | null;
      }

      export interface DisplayBankTransferInstructions {
        /**
         * The remaining amount that needs to be transferred to complete the payment.
         */
        amount_remaining: number | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string | null;

        /**
         * A list of financial addresses that can be used to fund the customer balance
         */
        financial_addresses?: Array<
          DisplayBankTransferInstructions.FinancialAddress
        >;

        /**
         * A link to a hosted page that guides your customer through completing the transfer.
         */
        hosted_instructions_url: string | null;

        /**
         * A string identifying this payment. Instruct your customer to include this code in the reference or memo field of their bank transfer.
         */
        reference: string | null;

        /**
         * Type of bank transfer
         */
        type: DisplayBankTransferInstructions.Type;
      }

      export interface KonbiniDisplayDetails {
        /**
         * The timestamp at which the pending Konbini payment expires.
         */
        expires_at: number;

        /**
         * The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher.
         */
        hosted_voucher_url: string | null;

        stores: KonbiniDisplayDetails.Stores;
      }

      export interface OxxoDisplayDetails {
        /**
         * The timestamp after which the OXXO voucher expires.
         */
        expires_after: number | null;

        /**
         * The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher.
         */
        hosted_voucher_url: string | null;

        /**
         * OXXO reference number.
         */
        number: string | null;
      }

      export interface PaynowDisplayQrCode {
        /**
         * The raw data string used to generate QR code, it should be used together with QR code library.
         */
        data: string;

        /**
         * The image_url_png string used to render QR code
         */
        image_url_png: string;

        /**
         * The image_url_svg string used to render QR code
         */
        image_url_svg: string;
      }

      export interface PixDisplayQrCode {
        /**
         * The raw data string used to generate QR code, it should be used together with QR code library.
         */
        data?: string;

        /**
         * The date (unix timestamp) when the PIX expires.
         */
        expires_at?: number;

        /**
         * The URL to the hosted pix instructions page, which allows customers to view the pix QR code.
         */
        hosted_instructions_url?: string;

        /**
         * The image_url_png string used to render png QR code
         */
        image_url_png?: string;

        /**
         * The image_url_svg string used to render svg QR code
         */
        image_url_svg?: string;
      }

      export interface PromptpayDisplayQrCode {
        /**
         * The raw data string used to generate QR code, it should be used together with QR code library.
         */
        data: string;

        /**
         * The URL to the hosted PromptPay instructions page, which allows customers to view the PromptPay QR code.
         */
        hosted_instructions_url: string;

        /**
         * The image_url_png string used to render QR code, can be used as <img src="…" />
         */
        image_url_png: string;

        /**
         * The image_url_svg string used to render QR code, can be used as <img src="…" />
         */
        image_url_svg: string;
      }

      export interface RedirectToUrl {
        /**
         * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
         */
        return_url: string | null;

        /**
         * The URL you must redirect your customer to in order to authenticate the payment.
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

      export interface WechatPayDisplayQrCode {
        /**
         * The data being used to generate QR code
         */
        data: string;

        /**
         * The base64 image data for a pre-generated QR code
         */
        image_data_url: string;

        /**
         * The image_url_png string used to render QR code
         */
        image_url_png: string;

        /**
         * The image_url_svg string used to render QR code
         */
        image_url_svg: string;
      }

      export interface WechatPayRedirectToAndroidApp {
        /**
         * app_id is the APP ID registered on WeChat open platform
         */
        app_id: string;

        /**
         * nonce_str is a random string
         */
        nonce_str: string;

        /**
         * package is static value
         */
        package: string;

        /**
         * an unique merchant ID assigned by WeChat Pay
         */
        partner_id: string;

        /**
         * an unique trading ID assigned by WeChat Pay
         */
        prepay_id: string;

        /**
         * A signature
         */
        sign: string;

        /**
         * Specifies the current time in epoch format
         */
        timestamp: string;
      }

      export interface WechatPayRedirectToIosApp {
        /**
         * An universal link that redirect to WeChat Pay app
         */
        native_url: string;
      }

      namespace DisplayBankTransferInstructions {
        export interface FinancialAddress {
          /**
           * Iban Records contain E.U. bank account details per the SEPA format.
           */
          iban?: FinancialAddress.Iban;

          /**
           * Sort Code Records contain U.K. bank account details per the sort code format.
           */
          sort_code?: FinancialAddress.SortCode;

          /**
           * SPEI Records contain Mexico bank account details per the SPEI format.
           */
          spei?: FinancialAddress.Spei;

          /**
           * The payment networks supported by this FinancialAddress
           */
          supported_networks?: Array<FinancialAddress.SupportedNetwork>;

          /**
           * The type of financial address
           */
          type: FinancialAddress.Type;

          /**
           * Zengin Records contain Japan bank account details per the Zengin format.
           */
          zengin?: FinancialAddress.Zengin;
        }

        export type Type =
          | 'eu_bank_transfer'
          | 'gb_bank_transfer'
          | 'jp_bank_transfer'
          | 'mx_bank_transfer';

        namespace FinancialAddress {
          export interface Iban {
            /**
             * The name of the person or business that owns the bank account
             */
            account_holder_name: string;

            /**
             * The BIC/SWIFT code of the account.
             */
            bic: string;

            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string;

            /**
             * The IBAN of the account.
             */
            iban: string;
          }

          export interface SortCode {
            /**
             * The name of the person or business that owns the bank account
             */
            account_holder_name: string;

            /**
             * The account number
             */
            account_number: string;

            /**
             * The six-digit sort code
             */
            sort_code: string;
          }

          export interface Spei {
            /**
             * The three-digit bank code
             */
            bank_code: string;

            /**
             * The short banking institution name
             */
            bank_name: string;

            /**
             * The CLABE number
             */
            clabe: string;
          }

          export type SupportedNetwork =
            | 'bacs'
            | 'fps'
            | 'sepa'
            | 'spei'
            | 'zengin';

          export type Type = 'iban' | 'sort_code' | 'spei' | 'zengin';

          export interface Zengin {
            /**
             * The account holder name
             */
            account_holder_name: string | null;

            /**
             * The account number
             */
            account_number: string | null;

            /**
             * The bank account type. In Japan, this can only be `futsu` or `toza`.
             */
            account_type: string | null;

            /**
             * The bank code of the account
             */
            bank_code: string | null;

            /**
             * The bank name of the account
             */
            bank_name: string | null;

            /**
             * The branch code of the account
             */
            branch_code: string | null;

            /**
             * The branch name of the account
             */
            branch_name: string | null;
          }
        }
      }

      namespace KonbiniDisplayDetails {
        export interface Stores {
          /**
           * FamilyMart instruction details.
           */
          familymart: Stores.Familymart | null;

          /**
           * Lawson instruction details.
           */
          lawson: Stores.Lawson | null;

          /**
           * Ministop instruction details.
           */
          ministop: Stores.Ministop | null;

          /**
           * Seicomart instruction details.
           */
          seicomart: Stores.Seicomart | null;
        }

        namespace Stores {
          export interface Familymart {
            /**
             * The confirmation number.
             */
            confirmation_number?: string;

            /**
             * The payment code.
             */
            payment_code: string;
          }

          export interface Lawson {
            /**
             * The confirmation number.
             */
            confirmation_number?: string;

            /**
             * The payment code.
             */
            payment_code: string;
          }

          export interface Ministop {
            /**
             * The confirmation number.
             */
            confirmation_number?: string;

            /**
             * The payment code.
             */
            payment_code: string;
          }

          export interface Seicomart {
            /**
             * The confirmation number.
             */
            confirmation_number?: string;

            /**
             * The payment code.
             */
            payment_code: string;
          }
        }
      }

      namespace VerifyWithMicrodeposits {
        export type MicrodepositType = 'amounts' | 'descriptor_code';
      }
    }

    namespace PaymentMethodOptions {
      export interface AcssDebit {
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: AcssDebit.SetupFutureUsage;

        /**
         * Bank account verification method.
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Affirm {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface AfterpayClearpay {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Order identifier shown to the customer in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about
         * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
         */
        reference: string | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Alipay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Alipay.SetupFutureUsage;
      }

      export interface AuBecsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: AuBecsDebit.SetupFutureUsage;
      }

      export interface BacsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: BacsDebit.SetupFutureUsage;
      }

      export interface Bancontact {
        /**
         * Preferred language of the Bancontact authorization page that the customer is redirected to.
         */
        preferred_language: Bancontact.PreferredLanguage;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Bancontact.SetupFutureUsage;
      }

      export interface Blik {}

      export interface Boleto {
        /**
         * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time.
         */
        expires_after_days: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Boleto.SetupFutureUsage;
      }

      export interface Card {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Installment details for this payment (Mexico only).
         *
         * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
         */
        installments: Card.Installments | null;

        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options: Card.MandateOptions | null;

        /**
         * Selected network to process this payment intent on. Depends on the available networks of the card attached to the payment intent. Can be only set confirm-time.
         */
        network: Card.Network | null;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure: Card.RequestThreeDSecure | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Card.SetupFutureUsage;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
         */
        statement_descriptor_suffix_kana?: string;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
         */
        statement_descriptor_suffix_kanji?: string;
      }

      export interface CardPresent {
        /**
         * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
         */
        request_extended_authorization: boolean | null;

        /**
         * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
         */
        request_incremental_authorization_support: boolean | null;
      }

      export interface CustomerBalance {
        bank_transfer?: CustomerBalance.BankTransfer;

        /**
         * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
         */
        funding_type: 'bank_transfer' | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Eps {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Fpx {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Giropay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Grabpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Ideal {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Ideal.SetupFutureUsage;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Preferred locale of the Klarna checkout page that the customer is redirected to.
         */
        preferred_locale: string | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Konbini {
        /**
         * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores.
         */
        confirmation_number: string | null;

        /**
         * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST.
         */
        expires_after_days: number | null;

        /**
         * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
         */
        expires_at: number | null;

        /**
         * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
         */
        product_description: string | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Link {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: 'manual';

        /**
         * Token used for persistent Link logins.
         */
        persistent_token: string | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Link.SetupFutureUsage;
      }

      export interface Oxxo {
        /**
         * The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
         */
        expires_after_days: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface P24 {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Paynow {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface Pix {
        /**
         * The number of seconds (between 10 and 1209600) after which Pix payment will expire.
         */
        expires_after_seconds: number | null;

        /**
         * The timestamp at which the Pix expires.
         */
        expires_at: number | null;
      }

      export interface Promptpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      export interface SepaDebit {
        mandate_options?: SepaDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: SepaDebit.SetupFutureUsage;
      }

      export interface Sofort {
        /**
         * Preferred language of the SOFORT authorization page that the customer is redirected to.
         */
        preferred_language: Sofort.PreferredLanguage | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: Sofort.SetupFutureUsage;
      }

      export interface UsBankAccount {
        financial_connections?: UsBankAccount.FinancialConnections;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: UsBankAccount.SetupFutureUsage;

        /**
         * Bank account verification method.
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      export interface WechatPay {
        /**
         * The app ID registered with WeChat Pay. Only required when client is ios or android.
         */
        app_id: string | null;

        /**
         * The client type that the end customer will pay from
         */
        client: WechatPay.Client | null;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         */
        setup_future_usage?: 'none';
      }

      namespace AcssDebit {
        export interface MandateOptions {
          /**
           * A URL for custom mandate text
           */
          custom_mandate_url?: string;

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Alipay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace AuBecsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace BacsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Bancontact {
        export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Boleto {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Card {
        export interface Installments {
          /**
           * Installment plans that may be selected for this PaymentIntent.
           */
          available_plans: Array<Installments.AvailablePlan> | null;

          /**
           * Whether Installments are enabled for this PaymentIntent.
           */
          enabled: boolean;

          /**
           * Installment plan selected for this PaymentIntent.
           */
          plan: Installments.Plan | null;
        }

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        namespace Installments {
          export interface AvailablePlan {
            /**
             * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
             */
            count: number | null;

            /**
             * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
             * One of `month`.
             */
            interval: 'month' | null;

            /**
             * Type of installment plan, one of `fixed_count`.
             */
            type: 'fixed_count';
          }

          export interface Plan {
            /**
             * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
             */
            count: number | null;

            /**
             * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
             * One of `month`.
             */
            interval: 'month' | null;

            /**
             * Type of installment plan, one of `fixed_count`.
             */
            type: 'fixed_count';
          }
        }

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace CustomerBalance {
        export interface BankTransfer {
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          /**
           * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
           *
           * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
           */
          requested_address_types?: Array<BankTransfer.RequestedAddressType>;

          /**
           * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
           */
          type: BankTransfer.Type | null;
        }

        namespace BankTransfer {
          export interface EuBankTransfer {
            /**
             * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
             */
            country: EuBankTransfer.Country;
          }

          export type RequestedAddressType =
            | 'iban'
            | 'sepa'
            | 'sort_code'
            | 'spei'
            | 'zengin';

          export type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer';

          namespace EuBankTransfer {
            export type Country = 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
          }
        }
      }

      namespace Ideal {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Link {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace SepaDebit {
        export interface MandateOptions {}

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Sofort {
        export type PreferredLanguage =
          | 'de'
          | 'en'
          | 'es'
          | 'fr'
          | 'it'
          | 'nl'
          | 'pl';

        export type SetupFutureUsage = 'none' | 'off_session';
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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

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

      namespace WechatPay {
        export type Client = 'android' | 'ios' | 'web';
      }
    }

    namespace Processing {
      export interface Card {
        customer_notification?: Card.CustomerNotification;
      }

      namespace Card {
        export interface CustomerNotification {
          /**
           * Whether customer approval has been requested for this payment. For payments greater than INR 15000 or mandate amount, the customer must provide explicit approval of the payment with their bank.
           */
          approval_requested: boolean | null;

          /**
           * If customer approval is required, they need to provide approval before this time.
           */
          completes_at: number | null;
        }
      }
    }
  }

  export /**
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
  interface PaymentIntent {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'payment_intent';

    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;

    /**
     * Amount that can be captured from this PaymentIntent.
     */
    amount_capturable: number;

    amount_details?: PaymentIntent.AmountDetails;

    /**
     * Amount that was collected by this PaymentIntent.
     */
    amount_received: number;

    /**
     * ID of the Connect application that created the PaymentIntent.
     */
    application: string | Stripe.Application | null;

    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount: number | null;

    /**
     * Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods)
     */
    automatic_payment_methods: PaymentIntent.AutomaticPaymentMethods | null;

    /**
     * Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch.
     */
    canceled_at: number | null;

    /**
     * Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, or `automatic`).
     */
    cancellation_reason: PaymentIntent.CancellationReason | null;

    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method: PaymentIntent.CaptureMethod;

    /**
     * Charges that were created by this PaymentIntent, if any.
     */
    charges?: ApiList<Stripe.Charge>;

    /**
     * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key.
     *
     * The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
     *
     * Refer to our docs to [accept a payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements) and learn about how `client_secret` should be handled.
     */
    client_secret: string | null;

    confirmation_method: PaymentIntent.ConfirmationMethod;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * ID of the Customer this PaymentIntent belongs to, if one exists.
     *
     * Payment methods attached to other Customers cannot be used with this PaymentIntent.
     *
     * If present in combination with [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage), this PaymentIntent's payment method will be attached to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete.
     */
    customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * ID of the invoice that created this PaymentIntent, if it exists.
     */
    invoice: string | Stripe.Invoice | null;

    /**
     * The payment error encountered in the previous PaymentIntent confirmation. It will be cleared if the PaymentIntent is later updated for any reason.
     */
    last_payment_error: PaymentIntent.LastPaymentError | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. For more information, see the [documentation](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
     */
    metadata: Stripe.Metadata;

    /**
     * If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source.
     */
    next_action: PaymentIntent.NextAction | null;

    /**
     * The account (if any) for which the funds of the PaymentIntent are intended. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
     */
    on_behalf_of: string | Stripe.Account | null;

    /**
     * ID of the payment method used in this PaymentIntent.
     */
    payment_method: string | Stripe.PaymentMethod | null;

    /**
     * Payment-method-specific configuration for this PaymentIntent.
     */
    payment_method_options: PaymentIntent.PaymentMethodOptions | null;

    /**
     * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use.
     */
    payment_method_types: Array<string>;

    /**
     * If present, this property tells you about the processing state of the payment.
     */
    processing: PaymentIntent.Processing | null;

    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email: string | null;

    /**
     * ID of the review associated with this PaymentIntent, if any.
     */
    review: string | Stripe.Review | null;

    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
     *
     * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
     */
    setup_future_usage: PaymentIntent.SetupFutureUsage | null;

    /**
     * Shipping information for this PaymentIntent.
     */
    shipping: PaymentIntent.Shipping | null;

    /**
     * This is a legacy field that will be removed in the future. It is the ID of the Source object that is associated with this PaymentIntent, if one was supplied.
     */
    source:
      | string
      | Stripe.CustomerSource
      | Stripe.DeletedBankAccount
      | Stripe.DeletedCard
      | null;

    /**
     * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor: string | null;

    /**
     * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix: string | null;

    /**
     * Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses).
     */
    status: PaymentIntent.Status;

    /**
     * The data with which to automatically create a Transfer when the payment is finalized. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
     */
    transfer_data: PaymentIntent.TransferData | null;

    /**
     * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
     */
    transfer_group: string | null;
  }

  namespace PaymentIntentCreateParams {
    export interface AutomaticPaymentMethods {
      /**
       * Whether this feature is enabled.
       */
      enabled: boolean;
    }

    export type CaptureMethod = 'automatic' | 'manual';

    export type ConfirmationMethod = 'automatic' | 'manual';

    export interface MandateData {
      /**
       * This hash contains details about the customer acceptance of the Mandate.
       */
      customer_acceptance: MandateData.CustomerAcceptance;
    }

    export type OffSession = 'one_off' | 'recurring';

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
       * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
       */
      acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

      /**
       * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
       */
      affirm?: Stripe.Emptyable<PaymentMethodOptions.Affirm>;

      /**
       * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
       */
      afterpay_clearpay?: Stripe.Emptyable<
        PaymentMethodOptions.AfterpayClearpay
      >;

      /**
       * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
       */
      alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

      /**
       * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
       */
      au_becs_debit?: Stripe.Emptyable<PaymentMethodOptions.AuBecsDebit>;

      /**
       * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
       */
      bacs_debit?: Stripe.Emptyable<PaymentMethodOptions.BacsDebit>;

      /**
       * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
       */
      bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

      /**
       * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
       */
      blik?: Stripe.Emptyable<PaymentMethodOptions.Blik>;

      /**
       * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
       */
      boleto?: Stripe.Emptyable<PaymentMethodOptions.Boleto>;

      /**
       * Configuration for any card payments attempted on this PaymentIntent.
       */
      card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

      /**
       * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
       */
      card_present?: Stripe.Emptyable<PaymentMethodOptions.CardPresent>;

      /**
       * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
       */
      customer_balance?: Stripe.Emptyable<PaymentMethodOptions.CustomerBalance>;

      /**
       * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
       */
      eps?: Stripe.Emptyable<PaymentMethodOptions.Eps>;

      /**
       * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
       */
      fpx?: Stripe.Emptyable<PaymentMethodOptions.Fpx>;

      /**
       * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
       */
      giropay?: Stripe.Emptyable<PaymentMethodOptions.Giropay>;

      /**
       * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
       */
      grabpay?: Stripe.Emptyable<PaymentMethodOptions.Grabpay>;

      /**
       * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
       */
      ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

      /**
       * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
       */
      interac_present?: Stripe.Emptyable<PaymentMethodOptions.InteracPresent>;

      /**
       * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
       */
      klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

      /**
       * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
       */
      konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

      /**
       * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
       */
      link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

      /**
       * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
       */
      oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

      /**
       * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
       */
      p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

      /**
       * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
       */
      paynow?: Stripe.Emptyable<PaymentMethodOptions.Paynow>;

      /**
       * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
       */
      pix?: Stripe.Emptyable<PaymentMethodOptions.Pix>;

      /**
       * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
       */
      promptpay?: Stripe.Emptyable<PaymentMethodOptions.Promptpay>;

      /**
       * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
       */
      sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

      /**
       * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
       */
      sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

      /**
       * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
       */
      us_bank_account?: Stripe.Emptyable<PaymentMethodOptions.UsBankAccount>;

      /**
       * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
       */
      wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;
    }

    export interface RadarOptions {
      /**
       * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      session?: string;
    }

    export type SetupFutureUsage = 'off_session' | 'on_session';

    export interface Shipping {
      /**
       * Shipping address.
       */
      address: Stripe.AddressParam;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string;

      /**
       * Recipient name.
       */
      name: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string;
    }

    export interface TransferData {
      /**
       * The amount that will be transferred automatically when a charge succeeds.
       * The amount is capped at the total transaction amount and if no amount is set,
       * the full amount is transferred.
       *
       * If you intend to collect a fee and you need a more robust reporting experience, using
       * [application_fee_amount](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-application_fee_amount)
       * might be a better fit for your integration.
       */
      amount?: number;

      /**
       * If specified, successful charges will be attributed to the destination
       * account for tax reporting, and the funds from charges will be transferred
       * to the destination account. The ID of the resulting transfer will be
       * returned on the successful charge's `transfer` field.
       */
      destination: string;
    }

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
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Affirm {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface AfterpayClearpay {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Order identifier shown to the customer in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about
         * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
         */
        reference?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Alipay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
      }

      export interface AuBecsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<AuBecsDebit.SetupFutureUsage>;
      }

      export interface BacsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<BacsDebit.SetupFutureUsage>;
      }

      export interface Bancontact {
        /**
         * Preferred language of the Bancontact authorization page that the customer is redirected to.
         */
        preferred_language?: Bancontact.PreferredLanguage;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Bancontact.SetupFutureUsage>;
      }

      export interface Blik {
        /**
         * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
         */
        code?: string;
      }

      export interface Boleto {
        /**
         * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Boleto.SetupFutureUsage>;
      }

      export interface Card {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
         */
        cvc_token?: string;

        /**
         * Installment configuration for payments attempted on this PaymentIntent (Mexico Only).
         *
         * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
         */
        installments?: Card.Installments;

        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options?: Card.MandateOptions;

        /**
         * When specified, this parameter indicates that a transaction will be marked
         * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
         * parameter can only be provided during confirmation.
         */
        moto?: boolean;

        /**
         * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
         */
        network?: Card.Network;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Card.SetupFutureUsage>;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
         */
        statement_descriptor_suffix_kana?: Stripe.Emptyable<string>;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
         */
        statement_descriptor_suffix_kanji?: Stripe.Emptyable<string>;
      }

      export interface CardPresent {
        /**
         * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
         */
        request_extended_authorization?: boolean;

        /**
         * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
         */
        request_incremental_authorization_support?: boolean;
      }

      export interface CustomerBalance {
        /**
         * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
         */
        bank_transfer?: CustomerBalance.BankTransfer;

        /**
         * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
         */
        funding_type?: 'bank_transfer';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Eps {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Fpx {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Giropay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Grabpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Ideal {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Preferred language of the Klarna authorization page that the customer is redirected to
         */
        preferred_locale?: Klarna.PreferredLocale;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Konbini {
        /**
         * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
         */
        confirmation_number?: string;

        /**
         * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
         */
        expires_after_days?: Stripe.Emptyable<number>;

        /**
         * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
         */
        expires_at?: Stripe.Emptyable<number>;

        /**
         * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
         */
        product_description?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Link {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Token used for persistent Link logins.
         */
        persistent_token?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
      }

      export interface Oxxo {
        /**
         * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface P24 {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';

        /**
         * Confirm that the payer has accepted the P24 terms and conditions.
         */
        tos_shown_and_accepted?: boolean;
      }

      export interface Paynow {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Pix {
        /**
         * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
         */
        expires_after_seconds?: number;

        /**
         * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
         */
        expires_at?: number;
      }

      export interface Promptpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
      }

      export interface Sofort {
        /**
         * Language shown to the payer on redirect.
         */
        preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
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
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<UsBankAccount.SetupFutureUsage>;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      export interface WechatPay {
        /**
         * The app ID registered with WeChat Pay. Only required when client is ios or android.
         */
        app_id?: string;

        /**
         * The client type that the end customer will pay from
         */
        client: WechatPay.Client;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      namespace AcssDebit {
        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Stripe.Emptyable<string>;

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Alipay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace AuBecsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace BacsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Bancontact {
        export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Boleto {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Card {
        export interface Installments {
          /**
           * Setting to true enables installments for this PaymentIntent.
           * This will cause the response to contain a list of available installment plans.
           * Setting to false will prevent any selected plan from applying to a charge.
           */
          enabled?: boolean;

          /**
           * The selected installment plan to use for this payment attempt.
           * This parameter can only be provided during confirmation.
           */
          plan?: Stripe.Emptyable<Installments.Plan>;
        }

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        namespace Installments {
          export interface Plan {
            /**
             * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
             */
            count: number;

            /**
             * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
             * One of `month`.
             */
            interval: 'month';

            /**
             * Type of installment plan, one of `fixed_count`.
             */
            type: 'fixed_count';
          }
        }

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace CustomerBalance {
        export interface BankTransfer {
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          /**
           * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
           *
           * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
           */
          requested_address_types?: Array<BankTransfer.RequestedAddressType>;

          /**
           * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
           */
          type: BankTransfer.Type;
        }

        namespace BankTransfer {
          export interface EuBankTransfer {
            /**
             * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
             */
            country: string;
          }

          export type RequestedAddressType =
            | 'iban'
            | 'sepa'
            | 'sort_code'
            | 'spei'
            | 'zengin';

          export type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer';
        }
      }

      namespace Ideal {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Klarna {
        export type PreferredLocale =
          | 'da-DK'
          | 'de-AT'
          | 'de-CH'
          | 'de-DE'
          | 'en-AT'
          | 'en-AU'
          | 'en-BE'
          | 'en-CA'
          | 'en-CH'
          | 'en-DE'
          | 'en-DK'
          | 'en-ES'
          | 'en-FI'
          | 'en-FR'
          | 'en-GB'
          | 'en-IE'
          | 'en-IT'
          | 'en-NL'
          | 'en-NO'
          | 'en-NZ'
          | 'en-PL'
          | 'en-PT'
          | 'en-SE'
          | 'en-US'
          | 'es-ES'
          | 'es-US'
          | 'fi-FI'
          | 'fr-BE'
          | 'fr-CA'
          | 'fr-CH'
          | 'fr-FR'
          | 'it-CH'
          | 'it-IT'
          | 'nb-NO'
          | 'nl-BE'
          | 'nl-NL'
          | 'pl-PL'
          | 'pt-PT'
          | 'sv-FI'
          | 'sv-SE';
      }

      namespace Link {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace SepaDebit {
        export interface MandateOptions {}

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Sofort {
        export type PreferredLanguage =
          | 'de'
          | 'en'
          | 'es'
          | 'fr'
          | 'it'
          | 'nl'
          | 'pl';

        export type SetupFutureUsage = 'none' | 'off_session';
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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

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

      namespace WechatPay {
        export type Client = 'android' | 'ios' | 'web';
      }
    }
  }

  export interface PaymentIntentCreateParams {
    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: number;

    /**
     * When enabled, this PaymentIntent will accept payment methods that you have enabled in the Dashboard and are compatible with this PaymentIntent's other parameters.
     */
    automatic_payment_methods?: PaymentIntentCreateParams.AutomaticPaymentMethods;

    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: PaymentIntentCreateParams.CaptureMethod;

    /**
     * Set to `true` to attempt to [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent immediately. This parameter defaults to `false`. When creating and confirming a PaymentIntent at the same time, parameters available in the [confirm](https://stripe.com/docs/api/payment_intents/confirm) API may also be provided.
     */
    confirm?: boolean;

    confirmation_method?: PaymentIntentCreateParams.ConfirmationMethod;

    /**
     * ID of the Customer this PaymentIntent belongs to, if one exists.
     *
     * Payment methods attached to other Customers cannot be used with this PaymentIntent.
     *
     * If present in combination with [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage), this PaymentIntent's payment method will be attached to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete.
     */
    customer?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    error_on_requires_action?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * ID of the mandate to be used for this payment. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    mandate?: string;

    /**
     * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    mandate_data?: PaymentIntentCreateParams.MandateData;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * Set to `true` to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    off_session?: boolean | PaymentIntentCreateParams.OffSession;

    /**
     * The Stripe account ID for which these funds are intended. For details, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    on_behalf_of?: string;

    /**
     * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods#compatibility) object) to attach to this PaymentIntent.
     *
     * If neither the `payment_method` parameter nor the `source` parameter are provided with `confirm=true`, `source` will be automatically populated with `customer.default_source` to improve the migration experience for users of the Charges API. We recommend that you explicitly provide the `payment_method` going forward.
     */
    payment_method?: string;

    /**
     * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
     * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
     * property on the PaymentIntent.
     */
    payment_method_data?: PaymentIntentCreateParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration for this PaymentIntent.
     */
    payment_method_options?: PaymentIntentCreateParams.PaymentMethodOptions;

    /**
     * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. If this is not provided, defaults to ["card"]. Use automatic_payment_methods to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
     */
    payment_method_types?: Array<string>;

    /**
     * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
     */
    radar_options?: PaymentIntentCreateParams.RadarOptions;

    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: string;

    /**
     * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    return_url?: string;

    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
     *
     * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
     */
    setup_future_usage?: PaymentIntentCreateParams.SetupFutureUsage;

    /**
     * Shipping information for this PaymentIntent.
     */
    shipping?: PaymentIntentCreateParams.Shipping;

    /**
     * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string;

    /**
     * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix?: string;

    /**
     * The parameters used to automatically create a Transfer when the payment succeeds.
     * For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentCreateParams.TransferData;

    /**
     * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
     */
    transfer_group?: string;

    /**
     * Set to `true` only when using manual confirmation and the iOS or Android SDKs to handle additional authentication steps.
     */
    use_stripe_sdk?: boolean;
  }

  export interface PaymentIntentRetrieveParams {
    /**
     * The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
     */
    client_secret?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace PaymentIntentUpdateParams {
    export type CaptureMethod = 'automatic' | 'manual';

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
       * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
       */
      acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

      /**
       * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
       */
      affirm?: Stripe.Emptyable<PaymentMethodOptions.Affirm>;

      /**
       * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
       */
      afterpay_clearpay?: Stripe.Emptyable<
        PaymentMethodOptions.AfterpayClearpay
      >;

      /**
       * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
       */
      alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

      /**
       * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
       */
      au_becs_debit?: Stripe.Emptyable<PaymentMethodOptions.AuBecsDebit>;

      /**
       * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
       */
      bacs_debit?: Stripe.Emptyable<PaymentMethodOptions.BacsDebit>;

      /**
       * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
       */
      bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

      /**
       * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
       */
      blik?: Stripe.Emptyable<PaymentMethodOptions.Blik>;

      /**
       * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
       */
      boleto?: Stripe.Emptyable<PaymentMethodOptions.Boleto>;

      /**
       * Configuration for any card payments attempted on this PaymentIntent.
       */
      card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

      /**
       * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
       */
      card_present?: Stripe.Emptyable<PaymentMethodOptions.CardPresent>;

      /**
       * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
       */
      customer_balance?: Stripe.Emptyable<PaymentMethodOptions.CustomerBalance>;

      /**
       * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
       */
      eps?: Stripe.Emptyable<PaymentMethodOptions.Eps>;

      /**
       * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
       */
      fpx?: Stripe.Emptyable<PaymentMethodOptions.Fpx>;

      /**
       * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
       */
      giropay?: Stripe.Emptyable<PaymentMethodOptions.Giropay>;

      /**
       * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
       */
      grabpay?: Stripe.Emptyable<PaymentMethodOptions.Grabpay>;

      /**
       * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
       */
      ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

      /**
       * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
       */
      interac_present?: Stripe.Emptyable<PaymentMethodOptions.InteracPresent>;

      /**
       * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
       */
      klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

      /**
       * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
       */
      konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

      /**
       * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
       */
      link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

      /**
       * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
       */
      oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

      /**
       * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
       */
      p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

      /**
       * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
       */
      paynow?: Stripe.Emptyable<PaymentMethodOptions.Paynow>;

      /**
       * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
       */
      pix?: Stripe.Emptyable<PaymentMethodOptions.Pix>;

      /**
       * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
       */
      promptpay?: Stripe.Emptyable<PaymentMethodOptions.Promptpay>;

      /**
       * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
       */
      sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

      /**
       * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
       */
      sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

      /**
       * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
       */
      us_bank_account?: Stripe.Emptyable<PaymentMethodOptions.UsBankAccount>;

      /**
       * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
       */
      wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;
    }

    export type SetupFutureUsage = 'off_session' | 'on_session';

    export interface Shipping {
      /**
       * Shipping address.
       */
      address: Stripe.AddressParam;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string;

      /**
       * Recipient name.
       */
      name: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string;
    }

    export interface TransferData {
      /**
       * The amount that will be transferred automatically when a charge succeeds.
       */
      amount?: number;
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
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Affirm {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface AfterpayClearpay {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Order identifier shown to the customer in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about
         * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
         */
        reference?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Alipay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
      }

      export interface AuBecsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<AuBecsDebit.SetupFutureUsage>;
      }

      export interface BacsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<BacsDebit.SetupFutureUsage>;
      }

      export interface Bancontact {
        /**
         * Preferred language of the Bancontact authorization page that the customer is redirected to.
         */
        preferred_language?: Bancontact.PreferredLanguage;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Bancontact.SetupFutureUsage>;
      }

      export interface Blik {
        /**
         * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
         */
        code?: string;
      }

      export interface Boleto {
        /**
         * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Boleto.SetupFutureUsage>;
      }

      export interface Card {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
         */
        cvc_token?: string;

        /**
         * Installment configuration for payments attempted on this PaymentIntent (Mexico Only).
         *
         * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
         */
        installments?: Card.Installments;

        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options?: Card.MandateOptions;

        /**
         * When specified, this parameter indicates that a transaction will be marked
         * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
         * parameter can only be provided during confirmation.
         */
        moto?: boolean;

        /**
         * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
         */
        network?: Card.Network;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Card.SetupFutureUsage>;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
         */
        statement_descriptor_suffix_kana?: Stripe.Emptyable<string>;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
         */
        statement_descriptor_suffix_kanji?: Stripe.Emptyable<string>;
      }

      export interface CardPresent {
        /**
         * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
         */
        request_extended_authorization?: boolean;

        /**
         * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
         */
        request_incremental_authorization_support?: boolean;
      }

      export interface CustomerBalance {
        /**
         * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
         */
        bank_transfer?: CustomerBalance.BankTransfer;

        /**
         * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
         */
        funding_type?: 'bank_transfer';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Eps {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Fpx {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Giropay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Grabpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Ideal {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Preferred language of the Klarna authorization page that the customer is redirected to
         */
        preferred_locale?: Klarna.PreferredLocale;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Konbini {
        /**
         * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
         */
        confirmation_number?: string;

        /**
         * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
         */
        expires_after_days?: Stripe.Emptyable<number>;

        /**
         * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
         */
        expires_at?: Stripe.Emptyable<number>;

        /**
         * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
         */
        product_description?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Link {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Token used for persistent Link logins.
         */
        persistent_token?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
      }

      export interface Oxxo {
        /**
         * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface P24 {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';

        /**
         * Confirm that the payer has accepted the P24 terms and conditions.
         */
        tos_shown_and_accepted?: boolean;
      }

      export interface Paynow {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Pix {
        /**
         * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
         */
        expires_after_seconds?: number;

        /**
         * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
         */
        expires_at?: number;
      }

      export interface Promptpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
      }

      export interface Sofort {
        /**
         * Language shown to the payer on redirect.
         */
        preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
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
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<UsBankAccount.SetupFutureUsage>;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      export interface WechatPay {
        /**
         * The app ID registered with WeChat Pay. Only required when client is ios or android.
         */
        app_id?: string;

        /**
         * The client type that the end customer will pay from
         */
        client: WechatPay.Client;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      namespace AcssDebit {
        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Stripe.Emptyable<string>;

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Alipay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace AuBecsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace BacsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Bancontact {
        export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Boleto {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Card {
        export interface Installments {
          /**
           * Setting to true enables installments for this PaymentIntent.
           * This will cause the response to contain a list of available installment plans.
           * Setting to false will prevent any selected plan from applying to a charge.
           */
          enabled?: boolean;

          /**
           * The selected installment plan to use for this payment attempt.
           * This parameter can only be provided during confirmation.
           */
          plan?: Stripe.Emptyable<Installments.Plan>;
        }

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        namespace Installments {
          export interface Plan {
            /**
             * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
             */
            count: number;

            /**
             * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
             * One of `month`.
             */
            interval: 'month';

            /**
             * Type of installment plan, one of `fixed_count`.
             */
            type: 'fixed_count';
          }
        }

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace CustomerBalance {
        export interface BankTransfer {
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          /**
           * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
           *
           * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
           */
          requested_address_types?: Array<BankTransfer.RequestedAddressType>;

          /**
           * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
           */
          type: BankTransfer.Type;
        }

        namespace BankTransfer {
          export interface EuBankTransfer {
            /**
             * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
             */
            country: string;
          }

          export type RequestedAddressType =
            | 'iban'
            | 'sepa'
            | 'sort_code'
            | 'spei'
            | 'zengin';

          export type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer';
        }
      }

      namespace Ideal {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Klarna {
        export type PreferredLocale =
          | 'da-DK'
          | 'de-AT'
          | 'de-CH'
          | 'de-DE'
          | 'en-AT'
          | 'en-AU'
          | 'en-BE'
          | 'en-CA'
          | 'en-CH'
          | 'en-DE'
          | 'en-DK'
          | 'en-ES'
          | 'en-FI'
          | 'en-FR'
          | 'en-GB'
          | 'en-IE'
          | 'en-IT'
          | 'en-NL'
          | 'en-NO'
          | 'en-NZ'
          | 'en-PL'
          | 'en-PT'
          | 'en-SE'
          | 'en-US'
          | 'es-ES'
          | 'es-US'
          | 'fi-FI'
          | 'fr-BE'
          | 'fr-CA'
          | 'fr-CH'
          | 'fr-FR'
          | 'it-CH'
          | 'it-IT'
          | 'nb-NO'
          | 'nl-BE'
          | 'nl-NL'
          | 'pl-PL'
          | 'pt-PT'
          | 'sv-FI'
          | 'sv-SE';
      }

      namespace Link {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace SepaDebit {
        export interface MandateOptions {}

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Sofort {
        export type PreferredLanguage =
          | 'de'
          | 'en'
          | 'es'
          | 'fr'
          | 'it'
          | 'nl'
          | 'pl';

        export type SetupFutureUsage = 'none' | 'off_session';
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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

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

      namespace WechatPay {
        export type Client = 'android' | 'ios' | 'web';
      }
    }
  }

  export interface PaymentIntentUpdateParams {
    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount?: number;

    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: Stripe.Emptyable<number>;

    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: PaymentIntentUpdateParams.CaptureMethod;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * ID of the Customer this PaymentIntent belongs to, if one exists.
     *
     * Payment methods attached to other Customers cannot be used with this PaymentIntent.
     *
     * If present in combination with [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage), this PaymentIntent's payment method will be attached to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete.
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
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
     */
    payment_method?: string;

    /**
     * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
     * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
     * property on the PaymentIntent.
     */
    payment_method_data?: PaymentIntentUpdateParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration for this PaymentIntent.
     */
    payment_method_options?: PaymentIntentUpdateParams.PaymentMethodOptions;

    /**
     * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. Use automatic_payment_methods to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
     */
    payment_method_types?: Array<string>;

    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: Stripe.Emptyable<string>;

    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
     *
     * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
     *
     * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
     */
    setup_future_usage?: Stripe.Emptyable<
      PaymentIntentUpdateParams.SetupFutureUsage
    >;

    /**
     * Shipping information for this PaymentIntent.
     */
    shipping?: Stripe.Emptyable<PaymentIntentUpdateParams.Shipping>;

    /**
     * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string;

    /**
     * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix?: string;

    /**
     * The parameters used to automatically create a Transfer when the payment succeeds. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentUpdateParams.TransferData;

    /**
     * A string that identifies the resulting payment as part of a group. `transfer_group` may only be provided if it has not been set. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
     */
    transfer_group?: string;
  }

  export interface PaymentIntentListParams extends PaginationParams {
    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Only return PaymentIntents for the customer specified by this customer ID.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface PaymentIntentApplyCustomerBalanceParams {
    /**
     * Amount intended to be applied to this PaymentIntent from the customer's cash balance.
     *
     * A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency).
     *
     * The maximum amount is the amount of the PaymentIntent.
     *
     * When omitted, the amount defaults to the remaining amount requested on the PaymentIntent.
     */
    amount?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace PaymentIntentCancelParams {
    export type CancellationReason =
      | 'abandoned'
      | 'duplicate'
      | 'fraudulent'
      | 'requested_by_customer';
  }

  export interface PaymentIntentCancelParams {
    /**
     * Reason for canceling this PaymentIntent. Possible values are `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
     */
    cancellation_reason?: PaymentIntentCancelParams.CancellationReason;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace PaymentIntentCaptureParams {
    export interface TransferData {
      /**
       * The amount that will be transferred automatically when a charge succeeds.
       */
      amount?: number;
    }
  }

  export interface PaymentIntentCaptureParams {
    /**
     * The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Any additional amount will be automatically refunded. Defaults to the full `amount_capturable` if not provided.
     */
    amount_to_capture?: number;

    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string;

    /**
     * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
     */
    statement_descriptor_suffix?: string;

    /**
     * The parameters used to automatically create a Transfer when the payment
     * is captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentCaptureParams.TransferData;
  }

  namespace PaymentIntentConfirmParams {
    export type CaptureMethod = 'automatic' | 'manual';

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

    export type OffSession = 'one_off' | 'recurring';

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
       * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
       */
      acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

      /**
       * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
       */
      affirm?: Stripe.Emptyable<PaymentMethodOptions.Affirm>;

      /**
       * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
       */
      afterpay_clearpay?: Stripe.Emptyable<
        PaymentMethodOptions.AfterpayClearpay
      >;

      /**
       * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
       */
      alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

      /**
       * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
       */
      au_becs_debit?: Stripe.Emptyable<PaymentMethodOptions.AuBecsDebit>;

      /**
       * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
       */
      bacs_debit?: Stripe.Emptyable<PaymentMethodOptions.BacsDebit>;

      /**
       * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
       */
      bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

      /**
       * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
       */
      blik?: Stripe.Emptyable<PaymentMethodOptions.Blik>;

      /**
       * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
       */
      boleto?: Stripe.Emptyable<PaymentMethodOptions.Boleto>;

      /**
       * Configuration for any card payments attempted on this PaymentIntent.
       */
      card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

      /**
       * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
       */
      card_present?: Stripe.Emptyable<PaymentMethodOptions.CardPresent>;

      /**
       * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
       */
      customer_balance?: Stripe.Emptyable<PaymentMethodOptions.CustomerBalance>;

      /**
       * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
       */
      eps?: Stripe.Emptyable<PaymentMethodOptions.Eps>;

      /**
       * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
       */
      fpx?: Stripe.Emptyable<PaymentMethodOptions.Fpx>;

      /**
       * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
       */
      giropay?: Stripe.Emptyable<PaymentMethodOptions.Giropay>;

      /**
       * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
       */
      grabpay?: Stripe.Emptyable<PaymentMethodOptions.Grabpay>;

      /**
       * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
       */
      ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

      /**
       * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
       */
      interac_present?: Stripe.Emptyable<PaymentMethodOptions.InteracPresent>;

      /**
       * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
       */
      klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

      /**
       * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
       */
      konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

      /**
       * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
       */
      link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

      /**
       * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
       */
      oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

      /**
       * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
       */
      p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

      /**
       * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
       */
      paynow?: Stripe.Emptyable<PaymentMethodOptions.Paynow>;

      /**
       * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
       */
      pix?: Stripe.Emptyable<PaymentMethodOptions.Pix>;

      /**
       * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
       */
      promptpay?: Stripe.Emptyable<PaymentMethodOptions.Promptpay>;

      /**
       * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
       */
      sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

      /**
       * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
       */
      sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

      /**
       * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
       */
      us_bank_account?: Stripe.Emptyable<PaymentMethodOptions.UsBankAccount>;

      /**
       * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
       */
      wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;
    }

    export interface RadarOptions {
      /**
       * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      session?: string;
    }

    export type SetupFutureUsage = 'off_session' | 'on_session';

    export interface Shipping {
      /**
       * Shipping address.
       */
      address: Stripe.AddressParam;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string;

      /**
       * Recipient name.
       */
      name: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string;
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
         * Additional fields for Mandate creation
         */
        mandate_options?: AcssDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

        /**
         * Verification method for the intent
         */
        verification_method?: AcssDebit.VerificationMethod;
      }

      export interface Affirm {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface AfterpayClearpay {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Order identifier shown to the customer in Afterpay's online portal. We recommend using a value that helps you answer any questions a customer might have about
         * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
         */
        reference?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Alipay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
      }

      export interface AuBecsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<AuBecsDebit.SetupFutureUsage>;
      }

      export interface BacsDebit {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<BacsDebit.SetupFutureUsage>;
      }

      export interface Bancontact {
        /**
         * Preferred language of the Bancontact authorization page that the customer is redirected to.
         */
        preferred_language?: Bancontact.PreferredLanguage;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Bancontact.SetupFutureUsage>;
      }

      export interface Blik {
        /**
         * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
         */
        code?: string;
      }

      export interface Boleto {
        /**
         * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Boleto.SetupFutureUsage>;
      }

      export interface Card {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
         */
        cvc_token?: string;

        /**
         * Installment configuration for payments attempted on this PaymentIntent (Mexico Only).
         *
         * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
         */
        installments?: Card.Installments;

        /**
         * Configuration options for setting up an eMandate for cards issued in India.
         */
        mandate_options?: Card.MandateOptions;

        /**
         * When specified, this parameter indicates that a transaction will be marked
         * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
         * parameter can only be provided during confirmation.
         */
        moto?: boolean;

        /**
         * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
         */
        network?: Card.Network;

        /**
         * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
         */
        request_three_d_secure?: Card.RequestThreeDSecure;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Card.SetupFutureUsage>;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
         */
        statement_descriptor_suffix_kana?: Stripe.Emptyable<string>;

        /**
         * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
         */
        statement_descriptor_suffix_kanji?: Stripe.Emptyable<string>;
      }

      export interface CardPresent {
        /**
         * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
         */
        request_extended_authorization?: boolean;

        /**
         * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
         */
        request_incremental_authorization_support?: boolean;
      }

      export interface CustomerBalance {
        /**
         * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
         */
        bank_transfer?: CustomerBalance.BankTransfer;

        /**
         * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
         */
        funding_type?: 'bank_transfer';

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Eps {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Fpx {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Giropay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Grabpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Ideal {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
      }

      export interface InteracPresent {}

      export interface Klarna {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Preferred language of the Klarna authorization page that the customer is redirected to
         */
        preferred_locale?: Klarna.PreferredLocale;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Konbini {
        /**
         * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
         */
        confirmation_number?: string;

        /**
         * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
         */
        expires_after_days?: Stripe.Emptyable<number>;

        /**
         * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
         */
        expires_at?: Stripe.Emptyable<number>;

        /**
         * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
         */
        product_description?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Link {
        /**
         * Controls when the funds will be captured from the customer's account.
         *
         * If provided, this parameter will override the top-level `capture_method` when finalizing the payment with this payment method type.
         *
         * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
         */
        capture_method?: Stripe.Emptyable<'manual'>;

        /**
         * Token used for persistent Link logins.
         */
        persistent_token?: string;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
      }

      export interface Oxxo {
        /**
         * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
         */
        expires_after_days?: number;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface P24 {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';

        /**
         * Confirm that the payer has accepted the P24 terms and conditions.
         */
        tos_shown_and_accepted?: boolean;
      }

      export interface Paynow {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface Pix {
        /**
         * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
         */
        expires_after_seconds?: number;

        /**
         * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
         */
        expires_at?: number;
      }

      export interface Promptpay {
        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      export interface SepaDebit {
        /**
         * Additional fields for Mandate creation
         */
        mandate_options?: SepaDebit.MandateOptions;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
      }

      export interface Sofort {
        /**
         * Language shown to the payer on redirect.
         */
        preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
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
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: Stripe.Emptyable<UsBankAccount.SetupFutureUsage>;

        /**
         * Verification method for the intent
         */
        verification_method?: UsBankAccount.VerificationMethod;
      }

      export interface WechatPay {
        /**
         * The app ID registered with WeChat Pay. Only required when client is ios or android.
         */
        app_id?: string;

        /**
         * The client type that the end customer will pay from
         */
        client: WechatPay.Client;

        /**
         * Indicates that you intend to make future payments with this PaymentIntent's payment method.
         *
         * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
         *
         * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
         *
         * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
         */
        setup_future_usage?: 'none';
      }

      namespace AcssDebit {
        export interface MandateOptions {
          /**
           * A URL for custom mandate text to render during confirmation step.
           * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
           * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
           */
          custom_mandate_url?: Stripe.Emptyable<string>;

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        export type VerificationMethod =
          | 'automatic'
          | 'instant'
          | 'microdeposits';

        namespace MandateOptions {
          export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          export type TransactionType = 'business' | 'personal';
        }
      }

      namespace Alipay {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace AuBecsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace BacsDebit {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Bancontact {
        export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Boleto {
        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Card {
        export interface Installments {
          /**
           * Setting to true enables installments for this PaymentIntent.
           * This will cause the response to contain a list of available installment plans.
           * Setting to false will prevent any selected plan from applying to a charge.
           */
          enabled?: boolean;

          /**
           * The selected installment plan to use for this payment attempt.
           * This parameter can only be provided during confirmation.
           */
          plan?: Stripe.Emptyable<Installments.Plan>;
        }

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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

        namespace Installments {
          export interface Plan {
            /**
             * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
             */
            count: number;

            /**
             * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
             * One of `month`.
             */
            interval: 'month';

            /**
             * Type of installment plan, one of `fixed_count`.
             */
            type: 'fixed_count';
          }
        }

        namespace MandateOptions {
          export type AmountType = 'fixed' | 'maximum';

          export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
        }
      }

      namespace CustomerBalance {
        export interface BankTransfer {
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          /**
           * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
           *
           * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
           */
          requested_address_types?: Array<BankTransfer.RequestedAddressType>;

          /**
           * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
           */
          type: BankTransfer.Type;
        }

        namespace BankTransfer {
          export interface EuBankTransfer {
            /**
             * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
             */
            country: string;
          }

          export type RequestedAddressType =
            | 'iban'
            | 'sepa'
            | 'sort_code'
            | 'spei'
            | 'zengin';

          export type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer';
        }
      }

      namespace Ideal {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace Klarna {
        export type PreferredLocale =
          | 'da-DK'
          | 'de-AT'
          | 'de-CH'
          | 'de-DE'
          | 'en-AT'
          | 'en-AU'
          | 'en-BE'
          | 'en-CA'
          | 'en-CH'
          | 'en-DE'
          | 'en-DK'
          | 'en-ES'
          | 'en-FI'
          | 'en-FR'
          | 'en-GB'
          | 'en-IE'
          | 'en-IT'
          | 'en-NL'
          | 'en-NO'
          | 'en-NZ'
          | 'en-PL'
          | 'en-PT'
          | 'en-SE'
          | 'en-US'
          | 'es-ES'
          | 'es-US'
          | 'fi-FI'
          | 'fr-BE'
          | 'fr-CA'
          | 'fr-CH'
          | 'fr-FR'
          | 'it-CH'
          | 'it-IT'
          | 'nb-NO'
          | 'nl-BE'
          | 'nl-NL'
          | 'pl-PL'
          | 'pt-PT'
          | 'sv-FI'
          | 'sv-SE';
      }

      namespace Link {
        export type SetupFutureUsage = 'none' | 'off_session';
      }

      namespace SepaDebit {
        export interface MandateOptions {}

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
      }

      namespace Sofort {
        export type PreferredLanguage =
          | 'de'
          | 'en'
          | 'es'
          | 'fr'
          | 'it'
          | 'nl'
          | 'pl';

        export type SetupFutureUsage = 'none' | 'off_session';
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

        export type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

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

      namespace WechatPay {
        export type Client = 'android' | 'ios' | 'web';
      }
    }
  }

  export interface PaymentIntentConfirmParams {
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: PaymentIntentConfirmParams.CaptureMethod;

    /**
     * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication).
     */
    error_on_requires_action?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * ID of the mandate to be used for this payment.
     */
    mandate?: string;

    /**
     * This hash contains details about the Mandate to create
     */
    mandate_data?:
      | PaymentIntentConfirmParams.MandateData1
      | PaymentIntentConfirmParams.MandateData2;

    /**
     * Set to `true` to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards).
     */
    off_session?: boolean | PaymentIntentConfirmParams.OffSession;

    /**
     * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
     */
    payment_method?: string;

    /**
     * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
     * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
     * property on the PaymentIntent.
     */
    payment_method_data?: PaymentIntentConfirmParams.PaymentMethodData;

    /**
     * Payment-method-specific configuration for this PaymentIntent.
     */
    payment_method_options?: PaymentIntentConfirmParams.PaymentMethodOptions;

    /**
     * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
     */
    radar_options?: PaymentIntentConfirmParams.RadarOptions;

    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: Stripe.Emptyable<string>;

    /**
     * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
     * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
     * This parameter is only used for cards and other redirect-based payment methods.
     */
    return_url?: string;

    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
     *
     * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
     *
     * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
     */
    setup_future_usage?: Stripe.Emptyable<
      PaymentIntentConfirmParams.SetupFutureUsage
    >;

    /**
     * Shipping information for this PaymentIntent.
     */
    shipping?: Stripe.Emptyable<PaymentIntentConfirmParams.Shipping>;

    /**
     * Set to `true` only when using manual confirmation and the iOS or Android SDKs to handle additional authentication steps.
     */
    use_stripe_sdk?: boolean;
  }

  namespace PaymentIntentIncrementAuthorizationParams {
    export interface TransferData {
      /**
       * The amount that will be transferred automatically when a charge succeeds.
       */
      amount?: number;
    }
  }

  export interface PaymentIntentIncrementAuthorizationParams {
    /**
     * The updated total amount you intend to collect from the cardholder. This amount must be greater than the currently authorized amount.
     */
    amount: number;

    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: number;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * For non-card charges, you can use this value as the complete description that appears on your customers' statements. Must contain at least one letter, maximum 22 characters.
     */
    statement_descriptor?: string;

    /**
     * The parameters used to automatically create a Transfer when the payment is captured.
     * For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentIncrementAuthorizationParams.TransferData;
  }

  export interface PaymentIntentSearchParams {
    /**
     * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).
     */
    query: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
     */
    page?: string;
  }

  export interface PaymentIntentVerifyMicrodepositsParams {
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

  export interface PaymentIntentsResource {
    create: (
      params: PaymentIntentCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.PaymentIntent>>;

    retrieve:
      | ((
          id: string,
          params?: PaymentIntentRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>);

    update: (
      id: string,
      params?: PaymentIntentUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.PaymentIntent>>;

    list:
      | ((
          params?: PaymentIntentListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.PaymentIntent>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.PaymentIntent>);

    applyCustomerBalance:
      | ((
          id: string,
          params?: PaymentIntentApplyCustomerBalanceParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>);

    cancel:
      | ((
          id: string,
          params?: PaymentIntentCancelParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>);

    capture:
      | ((
          id: string,
          params?: PaymentIntentCaptureParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>);

    confirm:
      | ((
          id: string,
          params?: PaymentIntentConfirmParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>);

    incrementAuthorization: (
      id: string,
      params: PaymentIntentIncrementAuthorizationParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.PaymentIntent>>;

    search: (
      params: PaymentIntentSearchParams,
      options?: RequestOptions
    ) => ApiSearchResultPromise<Stripe.PaymentIntent>;

    verifyMicrodeposits:
      | ((
          id: string,
          params?: PaymentIntentVerifyMicrodepositsParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentIntent>>);
  }
}

const resource: PaymentIntentsResource = StripeResource.extend({
  path: 'payment_intents',

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

  applyCustomerBalance: stripeMethod({
    method: 'POST',
    path: '/{intent}/apply_customer_balance',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),

  incrementAuthorization: stripeMethod({
    method: 'POST',
    path: '/{intent}/increment_authorization',
  }),

  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),

  verifyMicrodeposits: stripeMethod({
    method: 'POST',
    path: '/{intent}/verify_microdeposits',
  }),
});

export = resource;
