// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Subscription {
      export interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this subscription.
         */
        enabled: boolean;
      }

      export interface BillingThresholds {
        /**
         * Monetary threshold that triggers the subscription to create an invoice
         */
        amount_gte: number | null;

        /**
         * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
         */
        reset_billing_cycle_anchor: boolean | null;
      }

      export type CollectionMethod = 'charge_automatically' | 'send_invoice';

      export interface PauseCollection {
        /**
         * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
         */
        behavior: PauseCollection.Behavior;

        /**
         * The time after which the subscription will resume collecting payments.
         */
        resumes_at: number | null;
      }

      export interface PaymentSettings {
        /**
         * Payment-method-specific configuration to provide to invoices created by the subscription.
         */
        payment_method_options: PaymentSettings.PaymentMethodOptions | null;

        /**
         * The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types: Array<PaymentSettings.PaymentMethodType> | null;

        /**
         * Either `off`, or `on_subscription`. With `on_subscription` Stripe updates `subscription.default_payment_method` when a subscription payment succeeds.
         */
        save_default_payment_method: PaymentSettings.SaveDefaultPaymentMethod | null;
      }

      export interface PendingInvoiceItemInterval {
        /**
         * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: PendingInvoiceItemInterval.Interval;

        /**
         * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count: number;
      }

      export interface PendingUpdate {
        /**
         * If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
         */
        billing_cycle_anchor: number | null;

        /**
         * The point after which the changes reflected by this update will be discarded and no longer applied.
         */
        expires_at: number;

        /**
         * List of subscription items, each with an attached plan, that will be set if the update is applied.
         */
        subscription_items: Array<Stripe.SubscriptionItem> | null;

        /**
         * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
         */
        trial_end: number | null;

        /**
         * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
         */
        trial_from_plan: boolean | null;
      }

      export type Status =
        | 'active'
        | 'canceled'
        | 'incomplete'
        | 'incomplete_expired'
        | 'past_due'
        | 'trialing'
        | 'unpaid';

      export interface TransferData {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
         */
        amount_percent: number | null;

        /**
         * The account where funds from the payment will be transferred to upon payment success.
         */
        destination: string | Stripe.Account;
      }

      namespace PauseCollection {
        export type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
      }

      namespace PaymentSettings {
        export interface PaymentMethodOptions {
          /**
           * This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to invoices created by the subscription.
           */
          acss_debit: PaymentMethodOptions.AcssDebit | null;

          /**
           * This sub-hash contains details about the Bancontact payment method options to pass to invoices created by the subscription.
           */
          bancontact: PaymentMethodOptions.Bancontact | null;

          /**
           * This sub-hash contains details about the Card payment method options to pass to invoices created by the subscription.
           */
          card: PaymentMethodOptions.Card | null;

          /**
           * This sub-hash contains details about the Bank transfer payment method options to pass to invoices created by the subscription.
           */
          customer_balance: PaymentMethodOptions.CustomerBalance | null;

          /**
           * This sub-hash contains details about the Konbini payment method options to pass to invoices created by the subscription.
           */
          konbini: PaymentMethodOptions.Konbini | null;

          /**
           * This sub-hash contains details about the ACH direct debit payment method options to pass to invoices created by the subscription.
           */
          us_bank_account: PaymentMethodOptions.UsBankAccount | null;
        }

        export type PaymentMethodType =
          | 'ach_credit_transfer'
          | 'ach_debit'
          | 'acss_debit'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'boleto'
          | 'card'
          | 'customer_balance'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'konbini'
          | 'link'
          | 'paynow'
          | 'promptpay'
          | 'sepa_credit_transfer'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay';

        export type SaveDefaultPaymentMethod = 'off' | 'on_subscription';

        namespace PaymentMethodOptions {
          export interface AcssDebit {
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          export interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language: Bancontact.PreferredLanguage;
          }

          export interface Card {
            mandate_options?: Card.MandateOptions;

            /**
             * Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.
             */
            network: Card.Network | null;

            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure: Card.RequestThreeDSecure | null;
          }

          export interface CustomerBalance {
            bank_transfer?: CustomerBalance.BankTransfer;

            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type: 'bank_transfer' | null;
          }

          export interface Konbini {}

          export interface UsBankAccount {
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace AcssDebit {
            export interface MandateOptions {
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
              export type TransactionType = 'business' | 'personal';
            }
          }

          namespace Bancontact {
            export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
          }

          namespace Card {
            export interface MandateOptions {
              /**
               * Amount to be charged for future payments.
               */
              amount: number | null;

              /**
               * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
               */
              amount_type: MandateOptions.AmountType | null;

              /**
               * A description of the mandate or subscription that is meant to be displayed to the customer.
               */
              description: string | null;
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
            }
          }

          namespace CustomerBalance {
            export interface BankTransfer {
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
               */
              type: string | null;
            }

            namespace BankTransfer {
              export interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: EuBankTransfer.Country;
              }

              namespace EuBankTransfer {
                export type Country = 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
              }
            }
          }

          namespace UsBankAccount {
            export interface FinancialConnections {
              /**
               * The list of permissions to request. The `payment_method` permission must be included.
               */
              permissions?: Array<FinancialConnections.Permission>;
            }

            export type VerificationMethod =
              | 'automatic'
              | 'instant'
              | 'microdeposits';

            namespace FinancialConnections {
              export type Permission =
                | 'balances'
                | 'payment_method'
                | 'transactions';
            }
          }
        }
      }

      namespace PendingInvoiceItemInterval {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }

    export /**
     * Subscriptions allow you to charge a customer on a recurring basis.
     *
     * Related guide: [Creating Subscriptions](https://stripe.com/docs/billing/subscriptions/creating).
     */
    interface Subscription {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription';

      /**
       * ID of the Connect Application that created the subscription.
       */
      application:
        | string
        | Stripe.Application
        | Stripe.DeletedApplication
        | null;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.
       */
      application_fee_percent: number | null;

      automatic_tax: Subscription.AutomaticTax;

      /**
       * Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
       */
      billing_cycle_anchor: number;

      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
       */
      billing_thresholds: Subscription.BillingThresholds | null;

      /**
       * A date in the future at which the subscription will automatically get canceled
       */
      cancel_at: number | null;

      /**
       * If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.
       */
      cancel_at_period_end: boolean;

      /**
       * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
       */
      canceled_at: number | null;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
       */
      collection_method: Subscription.CollectionMethod;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
       */
      current_period_end: number;

      /**
       * Start of the current period that the subscription has been invoiced for.
       */
      current_period_start: number;

      /**
       * ID of the customer who owns the subscription.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
       */
      days_until_due: number | null;

      /**
       * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_payment_method: string | Stripe.PaymentMethod | null;

      /**
       * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_source: string | Stripe.CustomerSource | null;

      /**
       * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
       */
      default_tax_rates?: Array<Stripe.TaxRate> | null;

      /**
       * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.
       */
      description: string | null;

      /**
       * Describes the current discount applied to this subscription, if there is one. When billing, a discount applied to a subscription overrides a discount applied on a customer-wide basis.
       */
      discount: Stripe.Discount | null;

      /**
       * If the subscription has ended, the date the subscription ended.
       */
      ended_at: number | null;

      /**
       * List of subscription items, each with an attached price.
       */
      items: ApiList<Stripe.SubscriptionItem>;

      /**
       * The most recent invoice this subscription has generated.
       */
      latest_invoice: string | Stripe.Invoice | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
       */
      next_pending_invoice_item_invoice: number | null;

      /**
       * If specified, payment collection for this subscription will be paused.
       */
      pause_collection: Subscription.PauseCollection | null;

      /**
       * Payment settings passed on to invoices created by the subscription.
       */
      payment_settings: Subscription.PaymentSettings | null;

      /**
       * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
       */
      pending_invoice_item_interval: Subscription.PendingInvoiceItemInterval | null;

      /**
       * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
       */
      pending_setup_intent: string | Stripe.SetupIntent | null;

      /**
       * If specified, [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid.
       */
      pending_update: Subscription.PendingUpdate | null;

      /**
       * The schedule attached to the subscription
       */
      schedule: string | Stripe.SubscriptionSchedule | null;

      /**
       * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
       */
      start_date: number;

      /**
       * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.
       *
       * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.
       *
       * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
       *
       * If subscription `collection_method=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.
       *
       * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
       */
      status: Subscription.Status;

      /**
       * ID of the test clock this subscription belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;

      /**
       * The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
       */
      transfer_data: Subscription.TransferData | null;

      /**
       * If the subscription has a trial, the end of that trial.
       */
      trial_end: number | null;

      /**
       * If the subscription has a trial, the beginning of that trial.
       */
      trial_start: number | null;
    }

    namespace SubscriptionCreateParams {
      export interface AddInvoiceItem {
        /**
         * The ID of the price object.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
         */
        price_data?: AddInvoiceItem.PriceData;

        /**
         * Quantity for this item. Defaults to 1.
         */
        quantity?: number;

        /**
         * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      export interface AutomaticTax {
        /**
         * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
         */
        enabled: boolean;
      }

      export interface BillingThresholds {
        /**
         * Monetary threshold that triggers the subscription to advance to a new billing period
         */
        amount_gte?: number;

        /**
         * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
         */
        reset_billing_cycle_anchor?: boolean;
      }

      export type CollectionMethod = 'charge_automatically' | 'send_invoice';

      export interface Item {
        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<Item.BillingThresholds>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Plan ID for this item, as a string.
         */
        plan?: string;

        /**
         * The ID of the price object.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
         */
        price_data?: Item.PriceData;

        /**
         * Quantity for this item.
         */
        quantity?: number;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      export type PaymentBehavior =
        | 'allow_incomplete'
        | 'default_incomplete'
        | 'error_if_incomplete'
        | 'pending_if_incomplete';

      export interface PaymentSettings {
        /**
         * Payment-method-specific configuration to provide to invoices created by the subscription.
         */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;

        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types?: Stripe.Emptyable<
          Array<PaymentSettings.PaymentMethodType>
        >;

        /**
         * Either `off`, or `on_subscription`. With `on_subscription` Stripe updates `subscription.default_payment_method` when a subscription payment succeeds.
         */
        save_default_payment_method?: PaymentSettings.SaveDefaultPaymentMethod;
      }

      export interface PendingInvoiceItemInterval {
        /**
         * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: PendingInvoiceItemInterval.Interval;

        /**
         * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count?: number;
      }

      export type ProrationBehavior =
        | 'always_invoice'
        | 'create_prorations'
        | 'none';

      export interface TransferData {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }

      namespace AddInvoiceItem {
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

        namespace PriceData {
          export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      namespace Item {
        export interface BillingThresholds {
          /**
           * Usage threshold that triggers the subscription to advance to a new billing period
           */
          usage_gte: number;
        }

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

      namespace PaymentSettings {
        export interface PaymentMethodOptions {
          /**
           * This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
           */
          acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

          /**
           * This sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
           */
          bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

          /**
           * This sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
           */
          card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

          /**
           * This sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
           */
          customer_balance?: Stripe.Emptyable<
            PaymentMethodOptions.CustomerBalance
          >;

          /**
           * This sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
           */
          konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

          /**
           * This sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
           */
          us_bank_account?: Stripe.Emptyable<
            PaymentMethodOptions.UsBankAccount
          >;
        }

        export type PaymentMethodType =
          | 'ach_credit_transfer'
          | 'ach_debit'
          | 'acss_debit'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'boleto'
          | 'card'
          | 'customer_balance'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'konbini'
          | 'link'
          | 'paynow'
          | 'promptpay'
          | 'sepa_credit_transfer'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay';

        export type SaveDefaultPaymentMethod = 'off' | 'on_subscription';

        namespace PaymentMethodOptions {
          export interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Verification method for the intent
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          export interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
          }

          export interface Card {
            /**
             * Configuration options for setting up an eMandate for cards issued in India.
             */
            mandate_options?: Card.MandateOptions;

            /**
             * Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.
             */
            network?: Card.Network;

            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
          }

          export interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;

            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: string;
          }

          export interface Konbini {}

          export interface UsBankAccount {
            /**
             * Additional fields for Financial Connections Session creation
             */
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Verification method for the intent
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace AcssDebit {
            export interface MandateOptions {
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
              export type TransactionType = 'business' | 'personal';
            }
          }

          namespace Bancontact {
            export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
          }

          namespace Card {
            export interface MandateOptions {
              /**
               * Amount to be charged for future payments.
               */
              amount?: number;

              /**
               * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
               */
              amount_type?: MandateOptions.AmountType;

              /**
               * A description of the mandate or subscription that is meant to be displayed to the customer.
               */
              description?: string;
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
            }
          }

          namespace CustomerBalance {
            export interface BankTransfer {
              /**
               * Configuration for eu_bank_transfer funding type.
               */
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
               */
              type?: string;
            }

            namespace BankTransfer {
              export interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: string;
              }
            }
          }

          namespace UsBankAccount {
            export interface FinancialConnections {
              /**
               * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
               */
              permissions?: Array<FinancialConnections.Permission>;
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

      namespace PendingInvoiceItemInterval {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }

    export interface SubscriptionCreateParams {
      /**
       * The identifier of the customer to subscribe.
       */
      customer: string;

      /**
       * A list of prices and quantities that will generate invoice items appended to the next invoice for this subscription. You may pass up to 20 items.
       */
      add_invoice_items?: Array<SubscriptionCreateParams.AddInvoiceItem>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
       */
      application_fee_percent?: number;

      /**
       * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
       */
      automatic_tax?: SubscriptionCreateParams.AutomaticTax;

      /**
       * For new subscriptions, a past timestamp to backdate the subscription's start date to. If set, the first invoice will contain a proration for the timespan between the start date and the current time. Can be combined with trials and the billing cycle anchor.
       */
      backdate_start_date?: number;

      /**
       * A future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
       */
      billing_cycle_anchor?: number;

      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
       */
      billing_thresholds?: Stripe.Emptyable<
        SubscriptionCreateParams.BillingThresholds
      >;

      /**
       * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
       */
      cancel_at?: number;

      /**
       * Boolean indicating whether this subscription should cancel at the end of the current period.
       */
      cancel_at_period_end?: boolean;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
       */
      collection_method?: SubscriptionCreateParams.CollectionMethod;

      /**
       * The ID of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
       */
      coupon?: string;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
       */
      days_until_due?: number;

      /**
       * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_payment_method?: string;

      /**
       * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_source?: string;

      /**
       * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
       */
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of up to 20 subscription items, each with an attached price.
       */
      items?: Array<SubscriptionCreateParams.Item>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Indicates if a customer is on or off-session while an invoice payment is attempted.
       */
      off_session?: boolean;

      /**
       * Use `allow_incomplete` to create subscriptions with `status=incomplete` if the first invoice cannot be paid. Creating subscriptions with this status allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
       *
       * Use `default_incomplete` to create Subscriptions with `status=incomplete` when the first invoice requires payment, otherwise start as active. Subscriptions transition to `status=active` when successfully confirming the payment intent on the first invoice. This allows simpler management of scenarios where additional user actions are needed to pay a subscription's invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method. If the payment intent is not confirmed within 23 hours subscriptions transition to `status=incomplete_expired`, which is a terminal state.
       *
       * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's first invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not create a subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
       *
       * `pending_if_incomplete` is only used with updates and cannot be passed when creating a subscription.
       */
      payment_behavior?: SubscriptionCreateParams.PaymentBehavior;

      /**
       * Payment settings to pass to invoices created by the subscription.
       */
      payment_settings?: SubscriptionCreateParams.PaymentSettings;

      /**
       * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
       */
      pending_invoice_item_interval?: Stripe.Emptyable<
        SubscriptionCreateParams.PendingInvoiceItemInterval
      >;

      /**
       * The API ID of a promotion code to apply to this subscription. A promotion code applied to a subscription will only affect invoices created for that particular subscription.
       */
      promotion_code?: string;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) resulting from the `billing_cycle_anchor`. If no value is passed, the default is `create_prorations`.
       */
      proration_behavior?: SubscriptionCreateParams.ProrationBehavior;

      /**
       * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
       */
      transfer_data?: SubscriptionCreateParams.TransferData;

      /**
       * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
       */
      trial_end?: 'now' | number;

      /**
       * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
       */
      trial_from_plan?: boolean;

      /**
       * Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
       */
      trial_period_days?: number;
    }

    export interface SubscriptionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace SubscriptionUpdateParams {
      export interface AddInvoiceItem {
        /**
         * The ID of the price object.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
         */
        price_data?: AddInvoiceItem.PriceData;

        /**
         * Quantity for this item. Defaults to 1.
         */
        quantity?: number;

        /**
         * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      export interface AutomaticTax {
        /**
         * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
         */
        enabled: boolean;
      }

      export type BillingCycleAnchor = 'now' | 'unchanged';

      export interface BillingThresholds {
        /**
         * Monetary threshold that triggers the subscription to advance to a new billing period
         */
        amount_gte?: number;

        /**
         * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
         */
        reset_billing_cycle_anchor?: boolean;
      }

      export type CollectionMethod = 'charge_automatically' | 'send_invoice';

      export interface Item {
        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<Item.BillingThresholds>;

        /**
         * Delete all usage for a given subscription item. Allowed only when `deleted` is set to `true` and the current plan's `usage_type` is `metered`.
         */
        clear_usage?: boolean;

        /**
         * A flag that, if set to `true`, will delete the specified item.
         */
        deleted?: boolean;

        /**
         * Subscription item to update.
         */
        id?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * Plan ID for this item, as a string.
         */
        plan?: string;

        /**
         * The ID of the price object. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
         */
        price_data?: Item.PriceData;

        /**
         * Quantity for this item.
         */
        quantity?: number;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      export interface PauseCollection {
        /**
         * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
         */
        behavior: PauseCollection.Behavior;

        /**
         * The time after which the subscription will resume collecting payments.
         */
        resumes_at?: number;
      }

      export type PaymentBehavior =
        | 'allow_incomplete'
        | 'default_incomplete'
        | 'error_if_incomplete'
        | 'pending_if_incomplete';

      export interface PaymentSettings {
        /**
         * Payment-method-specific configuration to provide to invoices created by the subscription.
         */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;

        /**
         * The list of payment method types (e.g. card) to provide to the invoice's PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types?: Stripe.Emptyable<
          Array<PaymentSettings.PaymentMethodType>
        >;

        /**
         * Either `off`, or `on_subscription`. With `on_subscription` Stripe updates `subscription.default_payment_method` when a subscription payment succeeds.
         */
        save_default_payment_method?: PaymentSettings.SaveDefaultPaymentMethod;
      }

      export interface PendingInvoiceItemInterval {
        /**
         * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: PendingInvoiceItemInterval.Interval;

        /**
         * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count?: number;
      }

      export type ProrationBehavior =
        | 'always_invoice'
        | 'create_prorations'
        | 'none';

      export interface TransferData {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }

      namespace AddInvoiceItem {
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

        namespace PriceData {
          export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      namespace Item {
        export interface BillingThresholds {
          /**
           * Usage threshold that triggers the subscription to advance to a new billing period
           */
          usage_gte: number;
        }

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

      namespace PauseCollection {
        export type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
      }

      namespace PaymentSettings {
        export interface PaymentMethodOptions {
          /**
           * This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice's PaymentIntent.
           */
          acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

          /**
           * This sub-hash contains details about the Bancontact payment method options to pass to the invoice's PaymentIntent.
           */
          bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

          /**
           * This sub-hash contains details about the Card payment method options to pass to the invoice's PaymentIntent.
           */
          card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

          /**
           * This sub-hash contains details about the Bank transfer payment method options to pass to the invoice's PaymentIntent.
           */
          customer_balance?: Stripe.Emptyable<
            PaymentMethodOptions.CustomerBalance
          >;

          /**
           * This sub-hash contains details about the Konbini payment method options to pass to the invoice's PaymentIntent.
           */
          konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

          /**
           * This sub-hash contains details about the ACH direct debit payment method options to pass to the invoice's PaymentIntent.
           */
          us_bank_account?: Stripe.Emptyable<
            PaymentMethodOptions.UsBankAccount
          >;
        }

        export type PaymentMethodType =
          | 'ach_credit_transfer'
          | 'ach_debit'
          | 'acss_debit'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'boleto'
          | 'card'
          | 'customer_balance'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'konbini'
          | 'link'
          | 'paynow'
          | 'promptpay'
          | 'sepa_credit_transfer'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay';

        export type SaveDefaultPaymentMethod = 'off' | 'on_subscription';

        namespace PaymentMethodOptions {
          export interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Verification method for the intent
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          export interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
          }

          export interface Card {
            /**
             * Configuration options for setting up an eMandate for cards issued in India.
             */
            mandate_options?: Card.MandateOptions;

            /**
             * Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.
             */
            network?: Card.Network;

            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
          }

          export interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;

            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: string;
          }

          export interface Konbini {}

          export interface UsBankAccount {
            /**
             * Additional fields for Financial Connections Session creation
             */
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Verification method for the intent
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace AcssDebit {
            export interface MandateOptions {
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
              export type TransactionType = 'business' | 'personal';
            }
          }

          namespace Bancontact {
            export type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
          }

          namespace Card {
            export interface MandateOptions {
              /**
               * Amount to be charged for future payments.
               */
              amount?: number;

              /**
               * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
               */
              amount_type?: MandateOptions.AmountType;

              /**
               * A description of the mandate or subscription that is meant to be displayed to the customer.
               */
              description?: string;
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
            }
          }

          namespace CustomerBalance {
            export interface BankTransfer {
              /**
               * Configuration for eu_bank_transfer funding type.
               */
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
               */
              type?: string;
            }

            namespace BankTransfer {
              export interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: string;
              }
            }
          }

          namespace UsBankAccount {
            export interface FinancialConnections {
              /**
               * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
               */
              permissions?: Array<FinancialConnections.Permission>;
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

      namespace PendingInvoiceItemInterval {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }

    export interface SubscriptionUpdateParams {
      /**
       * A list of prices and quantities that will generate invoice items appended to the next invoice for this subscription. You may pass up to 20 items.
       */
      add_invoice_items?: Array<SubscriptionUpdateParams.AddInvoiceItem>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
       */
      application_fee_percent?: number;

      /**
       * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
       */
      automatic_tax?: SubscriptionUpdateParams.AutomaticTax;

      /**
       * Either `now` or `unchanged`. Setting the value to `now` resets the subscription's billing cycle anchor to the current time (in UTC). For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
       */
      billing_cycle_anchor?: SubscriptionUpdateParams.BillingCycleAnchor;

      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
       */
      billing_thresholds?: Stripe.Emptyable<
        SubscriptionUpdateParams.BillingThresholds
      >;

      /**
       * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
       */
      cancel_at?: Stripe.Emptyable<number>;

      /**
       * Boolean indicating whether this subscription should cancel at the end of the current period.
       */
      cancel_at_period_end?: boolean;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
       */
      collection_method?: SubscriptionUpdateParams.CollectionMethod;

      /**
       * The ID of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
       */
      coupon?: string;

      /**
       * Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
       */
      days_until_due?: number;

      /**
       * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_payment_method?: string;

      /**
       * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_source?: string;

      /**
       * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription. Pass an empty string to remove previously-defined tax rates.
       */
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of up to 20 subscription items, each with an attached price.
       */
      items?: Array<SubscriptionUpdateParams.Item>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Indicates if a customer is on or off-session while an invoice payment is attempted.
       */
      off_session?: boolean;

      /**
       * If specified, payment collection for this subscription will be paused.
       */
      pause_collection?: Stripe.Emptyable<
        SubscriptionUpdateParams.PauseCollection
      >;

      /**
       * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
       *
       * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription's invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
       *
       * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
       *
       * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
       */
      payment_behavior?: SubscriptionUpdateParams.PaymentBehavior;

      /**
       * Payment settings to pass to invoices created by the subscription.
       */
      payment_settings?: SubscriptionUpdateParams.PaymentSettings;

      /**
       * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
       */
      pending_invoice_item_interval?: Stripe.Emptyable<
        SubscriptionUpdateParams.PendingInvoiceItemInterval
      >;

      /**
       * The promotion code to apply to this subscription. A promotion code applied to a subscription will only affect invoices created for that particular subscription.
       */
      promotion_code?: string;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes.
       */
      proration_behavior?: SubscriptionUpdateParams.ProrationBehavior;

      /**
       * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint. It can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
       */
      proration_date?: number;

      /**
       * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges. This will be unset if you POST an empty value.
       */
      transfer_data?: Stripe.Emptyable<SubscriptionUpdateParams.TransferData>;

      /**
       * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`.
       */
      trial_end?: 'now' | number;

      /**
       * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
       */
      trial_from_plan?: boolean;
    }

    namespace SubscriptionListParams {
      export type CollectionMethod = 'charge_automatically' | 'send_invoice';

      export type Status =
        | 'active'
        | 'all'
        | 'canceled'
        | 'ended'
        | 'incomplete'
        | 'incomplete_expired'
        | 'past_due'
        | 'trialing'
        | 'unpaid';
    }

    export interface SubscriptionListParams extends PaginationParams {
      /**
       * The collection method of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.
       */
      collection_method?: SubscriptionListParams.CollectionMethod;

      created?: Stripe.RangeQueryParam | number;

      current_period_end?: Stripe.RangeQueryParam | number;

      current_period_start?: Stripe.RangeQueryParam | number;

      /**
       * The ID of the customer whose subscriptions will be retrieved.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The ID of the plan whose subscriptions will be retrieved.
       */
      plan?: string;

      /**
       * Filter for subscriptions that contain this recurring price ID.
       */
      price?: string;

      /**
       * The status of the subscriptions to retrieve. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Pass `ended` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses). Passing in a value of `all` will return subscriptions of all statuses. If no value is supplied, all subscriptions that have not been canceled are returned.
       */
      status?: SubscriptionListParams.Status;

      /**
       * Filter for subscriptions that are associated with the specified test clock. The response will not include subscriptions with test clocks if this and the customer parameter is not set.
       */
      test_clock?: string;
    }

    export interface SubscriptionCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
       */
      invoice_now?: boolean;

      /**
       * Will generate a proration invoice item that credits remaining unused time until the subscription period end.
       */
      prorate?: boolean;
    }

    export interface SubscriptionDeleteParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
       */
      invoice_now?: boolean;

      /**
       * Will generate a proration invoice item that credits remaining unused time until the subscription period end.
       */
      prorate?: boolean;
    }

    export interface SubscriptionDeleteDiscountParams {}

    export interface SubscriptionSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for subscriptions](https://stripe.com/docs/search#query-fields-for-subscriptions).
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

    class SubscriptionsResource {
      /**
       * Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.
       *
       * When you create a subscription with collection_method=charge_automatically, the first invoice is finalized as part of the request.
       * The payment_behavior parameter determines the exact behavior of the initial payment.
       *
       * To start subscriptions where the first invoice always begins in a draft status, use [subscription schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules#managing) instead.
       * Schedules provide the flexibility to model more complex billing configurations that change over time.
       */
      create(
        params: SubscriptionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;

      /**
       * Retrieves the subscription with the given ID.
       */
      retrieve(
        id: string,
        params?: SubscriptionRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;

      /**
       * Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the [upcoming invoice](https://stripe.com/docs/api#upcoming_invoice) endpoint.
       */
      update(
        id: string,
        params?: SubscriptionUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;

      /**
       * By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify status=canceled.
       */
      list(
        params?: SubscriptionListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Subscription>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Subscription>;

      /**
       * Cancels a customer's subscription immediately. The customer will not be charged again for the subscription.
       *
       * Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually [deleted](https://stripe.com/docs/api#delete_invoiceitem). If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.
       *
       * By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.
       */
      cancel(
        id: string,
        params?: SubscriptionCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;

      /**
       * Cancels a customer's subscription immediately. The customer will not be charged again for the subscription.
       *
       * Note, however, that any pending invoice items that you've created will still be charged for at the end of the period, unless manually [deleted](https://stripe.com/docs/api#delete_invoiceitem). If you've set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.
       *
       * By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.
       */
      del(
        id: string,
        params?: SubscriptionDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Subscription>>;

      /**
       * Removes the currently applied discount on a subscription.
       */
      deleteDiscount(
        id: string,
        params?: SubscriptionDeleteDiscountParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedDiscount>>;
      deleteDiscount(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedDiscount>>;

      /**
       * Search for subscriptions you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: SubscriptionSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Subscription>;
    }
  }
}
