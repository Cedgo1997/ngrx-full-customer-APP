import { createAction, props } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';

export const loadCustomers = createAction('[Customers] Load');
export const loadCustomersSuccess = createAction(
  '[Customers] Load Success',
  props<{ customers: CustomerModel[] }>()
);
export const loadCustomersError = createAction(
  '[Customers] Load Error',
  props<{ payload: any }>()
);
