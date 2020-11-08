import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as customerActions from './../actions/customer.actions';
import { CustomerService } from './../../services/customer.service';
import { CustomerModel } from './../../models/customer.model';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  //LOAD

  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.loadCustomer),
      mergeMap((action) =>
        this.customerService.getCustomerById(action.id).pipe(
          map((customer: CustomerModel) =>
            customerActions.loadCustomerSuccess({ customer })
          ),
          catchError((err) =>
            of(customerActions.loadCustomerError({ payload: err }))
          )
        )
      )
    )
  );

  //CREATE

  createCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.createCustomer),
      mergeMap((action) =>
        this.customerService.createCustomer(action.customer).pipe(
          map((customer: CustomerModel) =>
            customerActions.createCustomerSuccess({ customer })
          ),
          catchError((err) =>
            of(customerActions.createCustomerError({ payload: err }))
          )
        )
      )
    )
  );

  //UPDATE

  updateCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.updateCustomer),
      mergeMap((action) =>
        this.customerService.updateCustomer(action.customer).pipe(
          map((customer: CustomerModel) =>
            customerActions.updateCustomerSuccess({
              customer: { ...customer },
            })
          ),
          catchError((err) =>
            of(customerActions.updateCustomerError({ payload: err }))
          )
        )
      )
    )
  );

  //DELETE

  deleteCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerActions.deleteCustomer),
      mergeMap((action) =>
        this.customerService.deleteCustomer(action.id).pipe(
          map(() =>
            customerActions.deleteCustomerSuccess({
              id: action.id,
            })
          ),
          catchError((err) =>
            of(customerActions.deleteCustomerError({ payload: err }))
          )
        )
      )
    )
  );
}
