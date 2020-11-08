import { createAction, props } from '@ngrx/store';
import { CustomerModel } from '../../models/customer.model';


// LOAD ALL

export const loadCustomers = createAction('[Customers] Load');
export const loadCustomersSuccess = createAction(
  '[Customers] Load Success',
  props<{ customers: CustomerModel[] }>()
);
export const loadCustomersError = createAction(
  '[Customers] Load Error',
  props<{ payload: any }>()
);


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
  '[Customer] Create',
  props<{ customer: CustomerModel }>()
);

export const createCustomerSuccess = createAction(
  '[Customer] Create Success',
  props<{ customer: CustomerModel }>()
);
export const createCustomerError = createAction(
  '[Customer] Create Error',
  props<{ payload: any }>()
);

//UPDATE
export const updateCustomer = createAction(
  '[Customer] Update',
  props<{ customer: CustomerModel }>()
);

export const updateCustomerSuccess = createAction(
  '[Customer] Update Success',
  props<{ customer: CustomerModel }>()
);
export const updateCustomerError = createAction(
  '[Customer] Update Error',
  props<{ payload: any }>()
);
//DELETE
export const deleteCustomer = createAction(
  '[Customer] Delete',
  props<{ id: number }>()
);

export const deleteCustomerSuccess = createAction(
  '[Customer] Delete Success',
  props<{ id: number }>()
);
export const deleteCustomerError = createAction(
  '[Customer] Delete Error',
  props<{ payload: any }>()
);
