import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  customersAdapter,
  customersState,
} from '../reducers/customers.reducer';

const getCustomersFeatureState = createFeatureSelector<customersState>(
  'customers'
);

export const getCostumers = createSelector(
  getCustomersFeatureState,
  customersAdapter.getSelectors().selectAll
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
