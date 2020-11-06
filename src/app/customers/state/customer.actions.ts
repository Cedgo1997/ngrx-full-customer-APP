import { createAction, props } from '@ngrx/store';
import { CustomerModel } from '../customer.model';

export const loadCustomer = createAction('[Customer] Load');
export const loadCustomerSuccess = createAction('[Customer] Load Success', props<{ customers: CustomerModel[] }>());
export const loadCustomerError = createAction('[Customer] Load Error', props<{payload: any}>());