import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerState, customerAdapter } from './../reducers/customer.reducer';

const getCustomerFeatureState = createFeatureSelector<customerState>(
  'customer'
);

export const getCustomerId = createSelector(
  getCustomerFeatureState,
  (state: customerState) => state.selectedCustomerId
);

export const getCustomer = createSelector(
  getCustomerFeatureState,
  getCustomerId,
  (state: customerState) => state.entities[state.selectedCustomerId]
);
