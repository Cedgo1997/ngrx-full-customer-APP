import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//NGRX
import { Store } from '@ngrx/store';
import * as customersReducer from './../../store/reducers/customers.reducer';
import * as customersActions from './../../store/actions/customers.actions';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private store: Store<customersReducer.customersState>,
    private fb: FormBuilder
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
    if (this.customerForm.invalid) {
      return;
    }

    const { name, phone, address, membership } = this.customerForm.value;

    const customer = new CustomerModel(name, phone, address, membership);

    this.store.dispatch(customersActions.createCustomer({ customer }));
    this.customerForm.reset();
  }
}
