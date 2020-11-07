import { createAction, props } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';
import { Update } from '@ngrx/entity';

//LOAD
export const loadCustomer = createAction(
  '[Customer] Load',
  props<{ id: number }>()
);
export const loadCustomerSuccess = createAction(
  '[Customer] Load Success',
  props<{ customer: CustomerModel }>()
);
export const loadCustomerError = createAction(
  '[Customer] Load Error',
  props<{ payload: any }>()
);

//CREATE
export const createCustomer = createAction(
  '[Customer] Load',
  props<{ customer: CustomerModel }>()
);

export const createCustomerSuccess = createAction(
  '[Customer] Load Success',
  props<{ customer: CustomerModel }>()
);
export const createCustomerError = createAction(
  '[Customer] Load Error',
  props<{ payload: any }>()
);

//UPDATE
export const updateCustomer = createAction(
  '[Customer] Load',
  props<{ customer: CustomerModel }>()
);

export const updateCustomerSuccess = createAction(
  '[Customer] Load Success',
  props<{ customer: Update<CustomerModel> }>()
);
export const updateCustomerError = createAction(
  '[Customer] Load Error',
  props<{ payload: any }>()
);
//DELETE
export const deleteCustomer = createAction(
  '[Customer] Load',
  props<{ id: number }>()
);

export const deleteCustomerSuccess = createAction(
  '[Customer] Load Success',
  props<{ id: number }>()
);
export const deleteCustomerError = createAction(
  '[Customer] Load Error',
  props<{ payload: any }>()
);
