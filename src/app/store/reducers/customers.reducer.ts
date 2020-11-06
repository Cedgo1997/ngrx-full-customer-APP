import { Action, createReducer, on } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';
import * as customersActions from './../actions/customers.actions';

export interface State {
  customers: CustomerModel[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: State = {
  customers: [],
  loading: false,
  loaded: false,
  error: null,
};

export const _customersReducer = createReducer(
  initialState,
  on(customersActions.loadCustomers, (state) => ({
    ...state,
    loading: true,
  })),
  on(customersActions.loadCustomersSuccess, (state, { customers }) => ({
    ...state,
    loading: false,
    loaded: true,
    customers,
  })),
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
