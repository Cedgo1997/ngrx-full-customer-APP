import { createReducer, on } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';
import * as customersActions from './../actions/customers.actions';

// ENTITIES
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AppState } from '../app.reducers';

export interface customersState extends EntityState<CustomerModel> {
  id: number;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const customersAdapter: EntityAdapter<CustomerModel> = createEntityAdapter<
  CustomerModel
>();

export interface custmersAppState extends AppState {
  customers: customersState;
}

export const defaultCustomers: customersState = {
  ids: [],
  entities: {},
  id: null,
  loading: false,
  loaded: false,
  error: null,
};

export const initialState: customersState = customersAdapter.getInitialState(
  defaultCustomers
);

export const _customersReducer = createReducer(
  initialState,

  on(customersActions.loadCustomersSuccess, (state, { customers }) =>
    customersAdapter.setAll(customers, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),

  on(customersActions.loadCustomersError, (state, { payload }) => ({
    ...state,
    entities: {},
    loading: false,
    loaded: false,
    error: payload,
  }))
);

//LOAD

on(
  customersActions.loadCustomerSuccess,
  (state: customersState, { customer }) =>
    customersAdapter.addOne(customer, {
      ...state,
      id: customer.id,
      loading: false,
      loaded: true,
    })
),
  on(
    customersActions.loadCustomerError,
    (state: customersState, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: payload,
    })
  ),
  //CREATE

  on(
    customersActions.createCustomerSuccess,
    (state: customersState, { customer }) =>
      customersAdapter.addOne(customer, state)
  );

on(
  customersActions.createCustomerError,
  (state: customersState, { payload }) => ({
    ...state,
    error: payload,
  })
);

//UPDATE

on(
  customersActions.updateCustomerSuccess,
  (state: customersState, { customer }) =>
    customersAdapter.updateOne(
      { id: customer.id, changes: customer },
      { ...state }
    )
);

on(
  customersActions.updateCustomerError,
  (state: customersState, { payload }) => ({
    ...state,
    error: payload,
  })
);

//DELETE

on(customersActions.deleteCustomerSuccess, (state: customersState, { id }) =>
  customersAdapter.removeOne(id, { ...state })
);
on(
  customersActions.deleteCustomerError,
  (state: customersState, { payload }) => ({
    ...state,
    error: payload,
  })
);

export function customersReducer(state, action) {
  return _customersReducer(state, action);
}
