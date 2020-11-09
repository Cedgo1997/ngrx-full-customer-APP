import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { AppState } from './../../store/app.reducers';
import * as customersActions from './../../store/actions/customers.actions';

// Selectors
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as customersSelectors from '../../store/selectors/customers.selectors';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<CustomerModel[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(customersActions.loadCustomers());

    this.customers$ = this.store.pipe(select(customersSelectors.getCostumers));
  }

  editCustomer(customer: CustomerModel) {
    this.store.dispatch(customersActions.loadCustomer({ id: customer.id }));
  }

  deleteCustomer(customer: CustomerModel) {
    if (confirm('Do you really want to delete this customer?')) {
      this.store.dispatch(customersActions.deleteCustomer({ id: customer.id }));
    }
  }
}
