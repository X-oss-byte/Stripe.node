// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Radar {
    export /**
     * Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
     *
     * Related guide: [Managing List Items](https://stripe.com/docs/radar/lists#managing-list-items).
     */
    interface ValueListItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.value_list_item';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The name or email address of the user who added this item to the value list.
       */
      created_by: string;

      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The value of the item.
       */
      value: string;

      /**
       * The identifier of the value list this item belongs to.
       */
      value_list: string;
    }

    export /**
     * The DeletedValueListItem object.
     */
    interface DeletedValueListItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.value_list_item';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    export interface ValueListItemCreateParams {
      /**
       * The value of the item (whose type must match the type of the parent value list).
       */
      value: string;

      /**
       * The identifier of the value list which the created item will be added to.
       */
      value_list: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface ValueListItemRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface ValueListItemListParams extends PaginationParams {
      /**
       * Identifier for the parent value list this item belongs to.
       */
      value_list: string;

      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
       */
      value?: string;
    }

    export interface ValueListItemDeleteParams {}

    export interface ValueListItemsResource {
      create: (
        params: ValueListItemCreateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;

      retrieve:
        | ((
            id: string,
            params?: ValueListItemRetrieveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Radar.ValueListItem>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Radar.ValueListItem>>);

      list: (
        params: ValueListItemListParams,
        options?: RequestOptions
      ) => ApiListPromise<Stripe.Radar.ValueListItem>;

      del:
        | ((
            id: string,
            params?: ValueListItemDeleteParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Radar.DeletedValueListItem>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Radar.DeletedValueListItem>>);
    }
  }
}

const resource: ValueListItemsResource = StripeResource.extend({
  path: 'radar/value_list_items',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{item}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{item}',
  }),
});

export = resource;
