import { Action, createReducer, on } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';
import * as customersActions from './../actions/customers.actions';

export interface State {
  customers: CustomerModel[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  customers: [
    {
      name: 'John Doe',
      phone: '9182398214216',
      address: '123 Sun Street',
      membership: 'Platinum',
      id: 1,
    },
  ],
  loading: false,
  loaded: true,
};

export const customersReducer = createReducer(
  initialState,
  on(customersActions.loadCustomers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
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
    loaded: true,
    error: payload,
  }))
);

export function reducer(state = initialState, action: Action) {
  return customersReducer(state, action);
}
