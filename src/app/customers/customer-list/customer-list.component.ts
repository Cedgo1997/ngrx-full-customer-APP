import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerModel } from 'src/app/models/customer.model';
import { AppState } from './../../store/app.reducers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: CustomerModel[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('customers')
      .subscribe(({ customers }) => (this.customers = customers));
  }
}
