// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      export /**
       * A Financial Connections Account represents an account that exists outside of Stripe, to which you have been granted some degree of access.
       */
      interface Account {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.account';

        /**
         * The account holder that this account belongs to.
         */
        account_holder: Account.AccountHolder | null;

        /**
         * The most recent information about the account's balance.
         */
        balance: Account.Balance | null;

        /**
         * The state of the most recent attempt to refresh the account balance.
         */
        balance_refresh: Account.BalanceRefresh | null;

        /**
         * The type of the account. Account category is further divided in `subcategory`.
         */
        category: Account.Category;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
         */
        display_name: string | null;

        /**
         * The name of the institution that holds this account.
         */
        institution_name: string;

        /**
         * The last 4 digits of the account number. If present, this will be 4 numeric characters.
         */
        last4: string | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The most recent information about the account's owners.
         */
        ownership: string | Stripe.FinancialConnections.AccountOwnership | null;

        /**
         * The state of the most recent attempt to refresh the account owners.
         */
        ownership_refresh: Account.OwnershipRefresh | null;

        /**
         * The list of permissions granted by this account.
         */
        permissions: Array<Account.Permission> | null;

        /**
         * The status of the link to the account.
         */
        status: Account.Status;

        /**
         * If `category` is `cash`, one of:
         *
         *  - `checking`
         *  - `savings`
         *  - `other`
         *
         * If `category` is `credit`, one of:
         *
         *  - `mortgage`
         *  - `line_of_credit`
         *  - `credit_card`
         *  - `other`
         *
         * If `category` is `investment` or `other`, this will be `other`.
         */
        subcategory: Account.Subcategory;

        /**
         * The [PaymentMethod type](https://stripe.com/docs/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.
         */
        supported_payment_method_types: Array<
          Account.SupportedPaymentMethodType
        >;
      }

      namespace Account {
        export interface AccountHolder {
          /**
           * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
           */
          account?: string | Stripe.Account;

          /**
           * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
           */
          customer?: string | Stripe.Customer;

          /**
           * Type of account holder that this account belongs to.
           */
          type: AccountHolder.Type;
        }

        export interface Balance {
          /**
           * The time that the external institution calculated this balance. Measured in seconds since the Unix epoch.
           */
          as_of: number;

          cash?: Balance.Cash;

          credit?: Balance.Credit;

          /**
           * The balances owed to (or by) the account holder.
           *
           * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
           *
           * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
           */
          current: {
            [key: string]: number;
          };

          /**
           * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
           */
          type: Balance.Type;
        }

        export interface BalanceRefresh {
          /**
           * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
           */
          last_attempted_at: number;

          /**
           * The status of the last refresh attempt.
           */
          status: BalanceRefresh.Status;
        }

        export type Category = 'cash' | 'credit' | 'investment' | 'other';

        export interface OwnershipRefresh {
          /**
           * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
           */
          last_attempted_at: number;

          /**
           * The status of the last refresh attempt.
           */
          status: OwnershipRefresh.Status;
        }

        export type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        export type Status = 'active' | 'disconnected' | 'inactive';

        export type Subcategory =
          | 'checking'
          | 'credit_card'
          | 'line_of_credit'
          | 'mortgage'
          | 'other'
          | 'savings';

        export type SupportedPaymentMethodType = 'link' | 'us_bank_account';

        namespace AccountHolder {
          export type Type = 'account' | 'customer';
        }

        namespace Balance {
          export interface Cash {
            /**
             * The funds available to the account holder. Typically this is the current balance less any holds.
             *
             * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
             *
             * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
             */
            available: {
              [key: string]: number;
            } | null;
          }

          export interface Credit {
            /**
             * The credit that has been used by the account holder.
             *
             * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
             *
             * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
             */
            used: {
              [key: string]: number;
            } | null;
          }

          export type Type = 'cash' | 'credit';
        }

        namespace BalanceRefresh {
          export type Status = 'failed' | 'pending' | 'succeeded';
        }

        namespace OwnershipRefresh {
          export type Status = 'failed' | 'pending' | 'succeeded';
        }
      }

      export interface AccountRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      export interface AccountListParams extends PaginationParams {
        /**
         * If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
         */
        account_holder?: AccountListParams.AccountHolder;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If present, only return accounts that were collected as part of the given session.
         */
        session?: string;
      }

      namespace AccountListParams {
        export interface AccountHolder {
          /**
           * The ID of the Stripe account whose accounts will be retrieved.
           */
          account?: string;

          /**
           * The ID of the Stripe customer whose accounts will be retrieved.
           */
          customer?: string;
        }
      }

      export interface AccountDisconnectParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      export interface AccountListOwnersParams extends PaginationParams {
        /**
         * The ID of the ownership object to fetch owners from.
         */
        ownership: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      export interface AccountRefreshParams {
        /**
         * The list of account features that you would like to refresh.
         */
        features: Array<AccountRefreshParams.Feature>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace AccountRefreshParams {
        export type Feature = 'balance' | 'ownership';
      }

      class AccountsResource {
        /**
         * Retrieves the details of an Financial Connections Account.
         */
        retrieve(
          id: string,
          params?: AccountRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Account>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Account>>;

        /**
         * Returns a list of Financial Connections Account objects.
         */
        list(
          params?: AccountListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.FinancialConnections.Account>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.FinancialConnections.Account>;

        /**
         * Disables your access to a Financial Connections Account. You will no longer be able to access data associated with the account (e.g. balances, transactions).
         */
        disconnect(
          id: string,
          params?: AccountDisconnectParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Account>>;
        disconnect(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Account>>;

        /**
         * Lists all owners for a given Account
         */
        listOwners(
          id: string,
          params: AccountListOwnersParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.FinancialConnections.AccountOwner>;

        /**
         * Refreshes the data associated with a Financial Connections Account.
         */
        refresh(
          id: string,
          params: AccountRefreshParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Account>>;
      }
    }
  }
}
