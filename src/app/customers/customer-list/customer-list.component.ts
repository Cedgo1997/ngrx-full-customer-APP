import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerModel } from 'src/app/models/customer.model';
import { AppState } from './../../store/app.reducers';
import * as customersActions from './../../store/actions/customers.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: CustomerModel[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('customers')
      .subscribe(({ customers, loading, error }) => {
        this.customers = customers;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(customersActions.loadCustomers());
  }
}
