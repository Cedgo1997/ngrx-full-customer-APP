import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as customersReducer from './../../store/reducers/customers.reducer';
import * as customersActions from './../../store/actions/customers.actions';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private store: Store<customersReducer.custmersAppState>,
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      membership: ['', Validators.required],
    });
  }

  createCustomer() {
    const { name, phone, address, membership } = this.customerForm.value;

    const customer = new CustomerModel(name, phone, address, membership);

    this.customerService.createCustomer(customer);

    this.store.dispatch(customersActions.createCustomer({ customer }));

    this.customerForm.reset();
  }
}
