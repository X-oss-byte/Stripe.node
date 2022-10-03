// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    export /**
     * A test clock enables deterministic control over objects in testmode. With a test clock, you can create
     * objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances,
     * you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
     */
    interface TestClock {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'test_helpers.test_clock';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      deleted?: void;

      /**
       * Time at which this clock is scheduled to auto delete.
       */
      deletes_after: number;

      /**
       * Time at which all objects belonging to this clock are frozen.
       */
      frozen_time: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The custom name supplied at creation.
       */
      name: string | null;

      /**
       * The status of the Test Clock.
       */
      status: TestClock.Status;
    }

    namespace TestClock {
      export type Status = 'advancing' | 'internal_failure' | 'ready';
    }

    export /**
     * The DeletedTestClock object.
     */
    interface DeletedTestClock {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'test_helpers.test_clock';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    export interface TestClockCreateParams {
      /**
       * The initial frozen time for this test clock.
       */
      frozen_time: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The name for this test clock.
       */
      name?: string;
    }

    export interface TestClockRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface TestClockListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface TestClockDeleteParams {}

    export interface TestClockAdvanceParams {
      /**
       * The time to advance the test clock. Must be after the test clock's current frozen time. Cannot be more than two intervals in the future from the shortest subscription in this test clock. If there are no subscriptions in this test clock, it cannot be more than two years in the future.
       */
      frozen_time: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface TestClocksResource {
      create: (
        params: TestClockCreateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>;

      retrieve:
        | ((
            id: string,
            params?: TestClockRetrieveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>);

      list:
        | ((
            params?: TestClockListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.TestHelpers.TestClock>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.TestHelpers.TestClock>);

      del:
        | ((
            id: string,
            params?: TestClockDeleteParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.TestHelpers.DeletedTestClock>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.TestHelpers.DeletedTestClock>>);

      advance: (
        id: string,
        params: TestClockAdvanceParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.TestHelpers.TestClock>>;
    }
  }
}

const resource: TestClocksResource = StripeResource.extend({
  path: 'test_helpers/test_clocks',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{testClock}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{testClock}',
  }),

  advance: stripeMethod({
    method: 'POST',
    path: '/{testClock}/advance',
  }),
});

export = resource;
