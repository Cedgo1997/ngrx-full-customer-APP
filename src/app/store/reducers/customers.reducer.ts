import { createReducer, on } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';
import * as customersActions from './../actions/customers.actions';

// ENTITIES
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface customersState extends EntityState<CustomerModel> {
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const customersAdapter: EntityAdapter<CustomerModel> = createEntityAdapter<
  CustomerModel
>();

export const defaultCustomers: customersState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export const initialState: customersState = customersAdapter.getInitialState(
  defaultCustomers
);

export const _customersReducer = createReducer(
  initialState,
  on(customersActions.loadCustomers, (state) => ({
    ...state,
    loading: true,
  })),

  on(customersActions.loadCustomersSuccess, (state, { customers }) =>
    customersAdapter.setAll(customers, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(customersActions.loadCustomersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function customersReducer(state, action) {
  return _customersReducer(state, action);
}
