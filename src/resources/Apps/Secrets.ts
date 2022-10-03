// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Apps {
    export /**
     * Secret Store is an API that allows Stripe Apps developers to securely persist secrets for use by UI Extensions and app backends.
     *
     * The primary resource in Secret Store is a `secret`. Other apps can't view secrets created by an app. Additionally, secrets are scoped to provide further permission control.
     *
     * All Dashboard users and the app backend share `account` scoped secrets. Use the `account` scope for secrets that don't change per-user, like a third-party API key.
     *
     * A `user` scoped secret is accessible by the app backend and one specific Dashboard user. Use the `user` scope for per-user secrets like per-user OAuth tokens, where different users might have different permissions.
     *
     * Related guide: [Store data between page reloads](https://stripe.com/docs/stripe-apps/store-auth-data-custom-objects).
     */
    interface Secret {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'apps.secret';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * If true, indicates that this secret has been deleted
       */
      deleted?: boolean;

      /**
       * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
       */
      expires_at: number | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * A name for the secret that's unique within the scope.
       */
      name: string;

      /**
       * The plaintext secret value to be stored.
       */
      payload: string | null;

      scope: Secret.Scope;
    }

    namespace Secret {
      export interface Scope {
        /**
         * The secret scope type.
         */
        type: Scope.Type;

        /**
         * The user ID, if type is set to "user"
         */
        user?: string;
      }

      namespace Scope {
        export type Type = 'account' | 'user';
      }
    }

    export interface SecretCreateParams {
      /**
       * A name for the secret that's unique within the scope.
       */
      name: string;

      /**
       * The plaintext secret value to be stored.
       */
      payload: string;

      /**
       * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
       */
      scope: SecretCreateParams.Scope;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
       */
      expires_at?: number;
    }

    namespace SecretCreateParams {
      export interface Scope {
        /**
         * The secret scope type.
         */
        type: Scope.Type;

        /**
         * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
         */
        user?: string;
      }

      namespace Scope {
        export type Type = 'account' | 'user';
      }
    }

    export interface SecretListParams extends PaginationParams {
      /**
       * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
       */
      scope: SecretListParams.Scope;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace SecretListParams {
      export interface Scope {
        /**
         * The secret scope type.
         */
        type: Scope.Type;

        /**
         * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
         */
        user?: string;
      }

      namespace Scope {
        export type Type = 'account' | 'user';
      }
    }

    export interface SecretDeleteWhereParams {
      /**
       * A name for the secret that's unique within the scope.
       */
      name: string;

      /**
       * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
       */
      scope: SecretDeleteWhereParams.Scope;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace SecretDeleteWhereParams {
      export interface Scope {
        /**
         * The secret scope type.
         */
        type: Scope.Type;

        /**
         * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
         */
        user?: string;
      }

      namespace Scope {
        export type Type = 'account' | 'user';
      }
    }

    export interface SecretFindParams {
      /**
       * A name for the secret that's unique within the scope.
       */
      name: string;

      /**
       * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
       */
      scope: SecretFindParams.Scope;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace SecretFindParams {
      export interface Scope {
        /**
         * The secret scope type.
         */
        type: Scope.Type;

        /**
         * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
         */
        user?: string;
      }

      namespace Scope {
        export type Type = 'account' | 'user';
      }
    }

    export interface SecretsResource {
      create: (
        params: SecretCreateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Apps.Secret>>;

      list: (
        params: SecretListParams,
        options?: RequestOptions
      ) => ApiListPromise<Stripe.Apps.Secret>;

      deleteWhere: (
        params: SecretDeleteWhereParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Apps.Secret>>;

      find: (
        params: SecretFindParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Apps.Secret>>;
    }
  }
}

const resource: SecretsResource = StripeResource.extend({
  path: 'apps/secrets',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  deleteWhere: stripeMethod({
    method: 'POST',
    path: '/delete',
  }),

  find: stripeMethod({
    method: 'GET',
    path: '/find',
  }),
});

export = resource;
