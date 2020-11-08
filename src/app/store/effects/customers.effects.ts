import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as customersActions from './../actions/customers.actions';
import { CustomerService } from './../../services/customer.service';
import { CustomerModel } from 'src/app/models/customer.model';

@Injectable()
export class CustomersEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customersActions.loadCustomers),
      mergeMap(() =>
        this.customerService.getCustomers().pipe(
          map((customers: CustomerModel[]) =>
            customersActions.loadCustomersSuccess({ customers })
          ),
          catchError((err) =>
            of(customersActions.loadCustomersError({ payload: err }))
          )
        )
      )
    )
  );

  //LOAD

  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customersActions.loadCustomer),
      mergeMap((action) =>
        this.customerService.getCustomerById(action.id).pipe(
          map((customer: CustomerModel) =>
            customersActions.loadCustomerSuccess({ customer })
          ),
          catchError((err) =>
            of(customersActions.loadCustomerError({ payload: err }))
          )
        )
      )
    )
  );

  //CREATE

  createCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customersActions.createCustomer),
      mergeMap((action) =>
        this.customerService.createCustomer(action.customer).pipe(
          map((customer: CustomerModel) =>
            customersActions.createCustomerSuccess({ customer })
          ),
          catchError((err) =>
            of(customersActions.createCustomerError({ payload: err }))
          )
        )
      )
    )
  );

  //UPDATE

  updateCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customersActions.updateCustomer),
      mergeMap((action) =>
        this.customerService.updateCustomer(action.customer).pipe(
          map((customer: CustomerModel) =>
            customersActions.updateCustomerSuccess({
              customer: { ...customer },
            })
          ),
          catchError((err) =>
            of(customersActions.updateCustomerError({ payload: err }))
          )
        )
      )
    )
  );

  //DELETE

  deleteCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customersActions.deleteCustomer),
      mergeMap((action) =>
        this.customerService.deleteCustomer(action.id).pipe(
          map(() =>
            customersActions.deleteCustomerSuccess({
              id: action.id,
            })
          ),
          catchError((err) =>
            of(customersActions.deleteCustomerError({ payload: err }))
          )
        )
      )
    )
  );
}
