import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customersState } from './../reducers/customers.reducer';

const getCustomersFeatureState = createFeatureSelector<customersState>(
  'customers'
);

export const getCostumers = createSelector(
  getCustomersFeatureState,
  (state: customersState) => state.customers
);

export const getCostumersLoading = createSelector(
  getCustomersFeatureState,
  (state: customersState) => state.loading
);

export const getCostumersLoaded = createSelector(
  getCustomersFeatureState,
  (state: customersState) => state.loaded
);

export const getCostumersError = createSelector(
  getCustomersFeatureState,
  (state: customersState) => state.error
);
