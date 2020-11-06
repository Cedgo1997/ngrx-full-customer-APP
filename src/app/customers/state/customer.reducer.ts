import { Action, createReducer, on } from '@ngrx/store';
import { CustomerModel } from './../customer.model';
import * as customerActions from './customer.actions';

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

const customerReducer = createReducer(
  initialState,
  on(customerActions.loadCustomer, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(customerActions.loadCustomerSuccess, (state, { customers }) => ({
    ...state,
    loading: false,
    loaded: true,
    customers,
  }))
  on(customerActions.loadCustomerError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);

export function reducer(state = initialState, action: Action) {
  return customerReducer(state, action);
}
