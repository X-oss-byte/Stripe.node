// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace BillingPortal {
      export /**
       * A portal configuration describes the functionality and behavior of a portal session.
       */
      interface Configuration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing_portal.configuration';

        /**
         * Whether the configuration is active and can be used to create portal sessions.
         */
        active: boolean;

        /**
         * ID of the Connect Application that created the configuration.
         */
        application:
          | string
          | Stripe.Application
          | Stripe.DeletedApplication
          | null;

        business_profile: Configuration.BusinessProfile;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
         */
        default_return_url: string | null;

        features: Configuration.Features;

        /**
         * Whether the configuration is the default. If `true`, this configuration can be managed in the Dashboard and portal sessions will use this configuration unless it is overriden when creating the session.
         */
        is_default: boolean;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        login_page: Configuration.LoginPage;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Time at which the object was last updated. Measured in seconds since the Unix epoch.
         */
        updated: number;
      }

      namespace Configuration {
        export interface BusinessProfile {
          /**
           * The messaging shown to customers in the portal.
           */
          headline: string | null;

          /**
           * A link to the business's publicly available privacy policy.
           */
          privacy_policy_url: string | null;

          /**
           * A link to the business's publicly available terms of service.
           */
          terms_of_service_url: string | null;
        }

        export interface Features {
          customer_update: Features.CustomerUpdate;

          invoice_history: Features.InvoiceHistory;

          payment_method_update: Features.PaymentMethodUpdate;

          subscription_cancel: Features.SubscriptionCancel;

          subscription_pause: Features.SubscriptionPause;

          subscription_update: Features.SubscriptionUpdate;
        }

        export interface LoginPage {
          /**
           * If `true`, a shareable `url` will be generated that will take your customers to a hosted login page for the customer portal.
           *
           * If `false`, the previously generated `url`, if any, will be deactivated.
           */
          enabled: boolean;

          /**
           * A shareable URL to the hosted portal login page. Your customers will be able to log in with their [email](https://stripe.com/docs/api/customers/object#customer_object-email) and receive a link to their customer portal.
           */
          url: string | null;
        }

        namespace Features {
          export interface CustomerUpdate {
            /**
             * The types of customer updates that are supported. When empty, customers are not updateable.
             */
            allowed_updates: Array<CustomerUpdate.AllowedUpdate>;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface InvoiceHistory {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface PaymentMethodUpdate {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface SubscriptionCancel {
            cancellation_reason: SubscriptionCancel.CancellationReason;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * Whether to cancel subscriptions immediately or at the end of the billing period.
             */
            mode: SubscriptionCancel.Mode;

            /**
             * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`.
             */
            proration_behavior: SubscriptionCancel.ProrationBehavior;
          }

          export interface SubscriptionPause {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface SubscriptionUpdate {
            /**
             * The types of subscription updates that are supported for items listed in the `products` attribute. When empty, subscriptions are not updateable.
             */
            default_allowed_updates: Array<
              SubscriptionUpdate.DefaultAllowedUpdate
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * The list of products that support subscription updates.
             */
            products: Array<SubscriptionUpdate.Product> | null;

            /**
             * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`.
             */
            proration_behavior: SubscriptionUpdate.ProrationBehavior;
          }

          namespace CustomerUpdate {
            export type AllowedUpdate =
              | 'address'
              | 'email'
              | 'phone'
              | 'shipping'
              | 'tax_id';
          }

          namespace SubscriptionCancel {
            export interface CancellationReason {
              /**
               * Whether the feature is enabled.
               */
              enabled: boolean;

              /**
               * Which cancellation reasons will be given as options to the customer.
               */
              options: Array<CancellationReason.Option>;
            }

            export type Mode = 'at_period_end' | 'immediately';

            export type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';

            namespace CancellationReason {
              export type Option =
                | 'customer_service'
                | 'low_quality'
                | 'missing_features'
                | 'other'
                | 'switched_service'
                | 'too_complex'
                | 'too_expensive'
                | 'unused';
            }
          }

          namespace SubscriptionUpdate {
            export type DefaultAllowedUpdate =
              | 'price'
              | 'promotion_code'
              | 'quantity';

            export interface Product {
              /**
               * The list of price IDs which, when subscribed to, a subscription can be updated.
               */
              prices: Array<string>;

              /**
               * The product ID.
               */
              product: string;
            }

            export type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';
          }
        }
      }

      export interface ConfigurationCreateParams {
        /**
         * The business information shown to customers in the portal.
         */
        business_profile: ConfigurationCreateParams.BusinessProfile;

        /**
         * Information about the features available in the portal.
         */
        features: ConfigurationCreateParams.Features;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
         */
        default_return_url?: Stripe.Emptyable<string>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
         */
        login_page?: ConfigurationCreateParams.LoginPage;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace ConfigurationCreateParams {
        export interface BusinessProfile {
          /**
           * The messaging shown to customers in the portal.
           */
          headline?: string;

          /**
           * A link to the business's publicly available privacy policy.
           */
          privacy_policy_url?: string;

          /**
           * A link to the business's publicly available terms of service.
           */
          terms_of_service_url?: string;
        }

        export interface Features {
          /**
           * Information about updating the customer details in the portal.
           */
          customer_update?: Features.CustomerUpdate;

          /**
           * Information about showing the billing history in the portal.
           */
          invoice_history?: Features.InvoiceHistory;

          /**
           * Information about updating payment methods in the portal.
           */
          payment_method_update?: Features.PaymentMethodUpdate;

          /**
           * Information about canceling subscriptions in the portal.
           */
          subscription_cancel?: Features.SubscriptionCancel;

          /**
           * Information about pausing subscriptions in the portal.
           */
          subscription_pause?: Features.SubscriptionPause;

          /**
           * Information about updating subscriptions in the portal.
           */
          subscription_update?: Features.SubscriptionUpdate;
        }

        export interface LoginPage {
          /**
           * Set to `true` to generate a shareable URL [`login_page.url`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-login_page-url) that will take your customers to a hosted login page for the customer portal.
           */
          enabled: boolean;
        }

        namespace Features {
          export interface CustomerUpdate {
            /**
             * The types of customer updates that are supported. When empty, customers are not updateable.
             */
            allowed_updates?: Stripe.Emptyable<
              Array<CustomerUpdate.AllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface InvoiceHistory {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface PaymentMethodUpdate {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface SubscriptionCancel {
            /**
             * Whether the cancellation reasons will be collected in the portal and which options are exposed to the customer
             */
            cancellation_reason?: SubscriptionCancel.CancellationReason;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * Whether to cancel subscriptions immediately or at the end of the billing period.
             */
            mode?: SubscriptionCancel.Mode;

            /**
             * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`, which is only compatible with `mode=immediately`. No prorations are generated when canceling a subscription at the end of its natural billing period.
             */
            proration_behavior?: SubscriptionCancel.ProrationBehavior;
          }

          export interface SubscriptionPause {
            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;
          }

          export interface SubscriptionUpdate {
            /**
             * The types of subscription updates that are supported. When empty, subscriptions are not updateable.
             */
            default_allowed_updates: Stripe.Emptyable<
              Array<SubscriptionUpdate.DefaultAllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * The list of products that support subscription updates.
             */
            products: Stripe.Emptyable<Array<SubscriptionUpdate.Product>>;

            /**
             * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`.
             */
            proration_behavior?: SubscriptionUpdate.ProrationBehavior;
          }

          namespace CustomerUpdate {
            export type AllowedUpdate =
              | 'address'
              | 'email'
              | 'phone'
              | 'shipping'
              | 'tax_id';
          }

          namespace SubscriptionCancel {
            export interface CancellationReason {
              /**
               * Whether the feature is enabled.
               */
              enabled: boolean;

              /**
               * Which cancellation reasons will be given as options to the customer.
               */
              options: Stripe.Emptyable<Array<CancellationReason.Option>>;
            }

            export type Mode = 'at_period_end' | 'immediately';

            export type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';

            namespace CancellationReason {
              export type Option =
                | 'customer_service'
                | 'low_quality'
                | 'missing_features'
                | 'other'
                | 'switched_service'
                | 'too_complex'
                | 'too_expensive'
                | 'unused';
            }
          }

          namespace SubscriptionUpdate {
            export type DefaultAllowedUpdate =
              | 'price'
              | 'promotion_code'
              | 'quantity';

            export interface Product {
              /**
               * The list of price IDs for the product that a subscription can be updated to.
               */
              prices: Array<string>;

              /**
               * The product id.
               */
              product: string;
            }

            export type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';
          }
        }
      }

      export interface ConfigurationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      export interface ConfigurationUpdateParams {
        /**
         * Whether the configuration is active and can be used to create portal sessions.
         */
        active?: boolean;

        /**
         * The business information shown to customers in the portal.
         */
        business_profile?: ConfigurationUpdateParams.BusinessProfile;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
         */
        default_return_url?: Stripe.Emptyable<string>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Information about the features available in the portal.
         */
        features?: ConfigurationUpdateParams.Features;

        /**
         * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
         */
        login_page?: ConfigurationUpdateParams.LoginPage;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      namespace ConfigurationUpdateParams {
        export interface BusinessProfile {
          /**
           * The messaging shown to customers in the portal.
           */
          headline?: string;

          /**
           * A link to the business's publicly available privacy policy.
           */
          privacy_policy_url?: Stripe.Emptyable<string>;

          /**
           * A link to the business's publicly available terms of service.
           */
          terms_of_service_url?: Stripe.Emptyable<string>;
        }

        export interface Features {
          /**
           * Information about updating the customer details in the portal.
           */
          customer_update?: Features.CustomerUpdate;

          /**
           * Information about showing the billing history in the portal.
           */
          invoice_history?: Features.InvoiceHistory;

          /**
           * Information about updating payment methods in the portal.
           */
          payment_method_update?: Features.PaymentMethodUpdate;

          /**
           * Information about canceling subscriptions in the portal.
           */
          subscription_cancel?: Features.SubscriptionCancel;

          /**
           * Information about pausing subscriptions in the portal.
           */
          subscription_pause?: Features.SubscriptionPause;

          /**
           * Information about updating subscriptions in the portal.
           */
          subscription_update?: Features.SubscriptionUpdate;
        }

        export interface LoginPage {
          /**
           * Set to `true` to generate a shareable URL [`login_page.url`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-login_page-url) that will take your customers to a hosted login page for the customer portal.
           *
           * Set to `false` to deactivate the `login_page.url`.
           */
          enabled: boolean;
        }

        namespace Features {
          export interface CustomerUpdate {
            /**
             * The types of customer updates that are supported. When empty, customers are not updateable.
             */
            allowed_updates?: Stripe.Emptyable<
              Array<CustomerUpdate.AllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;
          }

          export interface InvoiceHistory {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface PaymentMethodUpdate {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          export interface SubscriptionCancel {
            /**
             * Whether the cancellation reasons will be collected in the portal and which options are exposed to the customer
             */
            cancellation_reason?: SubscriptionCancel.CancellationReason;

            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;

            /**
             * Whether to cancel subscriptions immediately or at the end of the billing period.
             */
            mode?: SubscriptionCancel.Mode;

            /**
             * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`, which is only compatible with `mode=immediately`. No prorations are generated when canceling a subscription at the end of its natural billing period.
             */
            proration_behavior?: SubscriptionCancel.ProrationBehavior;
          }

          export interface SubscriptionPause {
            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;
          }

          export interface SubscriptionUpdate {
            /**
             * The types of subscription updates that are supported. When empty, subscriptions are not updateable.
             */
            default_allowed_updates?: Stripe.Emptyable<
              Array<SubscriptionUpdate.DefaultAllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;

            /**
             * The list of products that support subscription updates.
             */
            products?: Stripe.Emptyable<Array<SubscriptionUpdate.Product>>;

            /**
             * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`.
             */
            proration_behavior?: SubscriptionUpdate.ProrationBehavior;
          }

          namespace CustomerUpdate {
            export type AllowedUpdate =
              | 'address'
              | 'email'
              | 'phone'
              | 'shipping'
              | 'tax_id';
          }

          namespace SubscriptionCancel {
            export interface CancellationReason {
              /**
               * Whether the feature is enabled.
               */
              enabled: boolean;

              /**
               * Which cancellation reasons will be given as options to the customer.
               */
              options?: Stripe.Emptyable<Array<CancellationReason.Option>>;
            }

            export type Mode = 'at_period_end' | 'immediately';

            export type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';

            namespace CancellationReason {
              export type Option =
                | 'customer_service'
                | 'low_quality'
                | 'missing_features'
                | 'other'
                | 'switched_service'
                | 'too_complex'
                | 'too_expensive'
                | 'unused';
            }
          }

          namespace SubscriptionUpdate {
            export type DefaultAllowedUpdate =
              | 'price'
              | 'promotion_code'
              | 'quantity';

            export interface Product {
              /**
               * The list of price IDs for the product that a subscription can be updated to.
               */
              prices: Array<string>;

              /**
               * The product id.
               */
              product: string;
            }

            export type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';
          }
        }
      }

      export interface ConfigurationListParams extends PaginationParams {
        /**
         * Only return configurations that are active or inactive (e.g., pass `true` to only list active configurations).
         */
        active?: boolean;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return the default or non-default configurations (e.g., pass `true` to only list the default configuration).
         */
        is_default?: boolean;
      }

      class ConfigurationsResource {
        /**
         * Creates a configuration that describes the functionality and behavior of a PortalSession
         */
        create(
          params: ConfigurationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;

        /**
         * Retrieves a configuration that describes the functionality of the customer portal.
         */
        retrieve(
          id: string,
          params?: ConfigurationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;

        /**
         * Updates a configuration that describes the functionality of the customer portal.
         */
        update(
          id: string,
          params?: ConfigurationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;

        /**
         * Returns a list of configurations that describe the functionality of the customer portal.
         */
        list(
          params?: ConfigurationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.BillingPortal.Configuration>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.BillingPortal.Configuration>;
      }
    }
  }
}
