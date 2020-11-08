import { createReducer, on } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';
import * as customerActions from './../actions/customer.actions';

// ENTITIES

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface customerState extends EntityState<CustomerModel> {
  id: number | null;
  customer: CustomerModel;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const customerAdapter: EntityAdapter<CustomerModel> = createEntityAdapter<
  CustomerModel
>();

const initialState: customerState = customerAdapter.getInitialState({
  id: null,
  customer: null,
  loading: false,
  loaded: false,
  error: null,
});

const _customerReducer = createReducer(
  initialState,

  //LOAD

  on(customerActions.loadCustomer, (state, { id }) => ({
    ...state,
    id,
    loading: true,
    loaded: false,
  })),
  on(customerActions.loadCustomerSuccess, (state, { customer }) =>
    customerAdapter.setOne(customer, {
      ...state,
      id: customer.id,
      loading: false,
      loaded: true,
    })
  ),
  on(customerActions.loadCustomerError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  })),

  //CREATE

  on(
    customerActions.createCustomerSuccess,
    (state: customerState, { customer }) =>
      customerAdapter.addOne(customer, { ...state })
  )
);

on(
  customerActions.createCustomerError,
  (state: customerState, { payload }) => ({
    ...state,
    error: payload,
  })
);

//UPDATE

on(
  customerActions.updateCustomerSuccess,
  (state: customerState, { customer }) =>
    customerAdapter.updateOne(
      { id: customer.id, changes: customer },
      { ...state }
    )
);

on(
  customerActions.updateCustomerError,
  (state: customerState, { payload }) => ({
    ...state,
    error: payload,
  })
);

//DELETE

on(customerActions.deleteCustomerSuccess, (state: customerState, { id }) =>
  customerAdapter.removeOne(id, { ...state })
);
on(
  customerActions.deleteCustomerError,
  (state: customerState, { payload }) => ({
    ...state,
    error: payload,
  })
);

export function customerReducer(state, action) {
  return _customerReducer(state, action);
}
