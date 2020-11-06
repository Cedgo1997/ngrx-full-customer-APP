import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as customersActions from './../actions/customers.actions';
import { CustomerService } from './../../services/customer.service';

@Injectable()
export class CustomersEffects {
  constructor(
    private actions$: Actions,
    private customersService: CustomerService
  ) {}

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customersActions.loadCustomers),
      mergeMap(() =>
        this.customersService.getCustomers().pipe(
          map((customers) =>
            customersActions.loadCustomersSuccess({ customers })
          ),
          catchError((err) =>
            of(customersActions.loadCustomersError({ payload: err }))
          )
        )
      )
    )
  );
}
