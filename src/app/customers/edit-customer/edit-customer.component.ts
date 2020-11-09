import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer.model';

//NGRX
import { Store, select } from '@ngrx/store';
import * as customersReducer from './../../store/reducers/customers.reducer';
import * as customersActions from './../../store/actions/customers.actions';
import * as customersSelectors from '../../store/selectors/customers.selectors';

//RXJS
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private store: Store<customersReducer.customersState>,
    private fb: FormBuilder
  ) {}

  customer$: Observable<CustomerModel>

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      membership: ['', Validators.required],
    });

    this.store.pipe(select(customersSelectors.getCostumers));

    this.customer$.subscribe((currentCustomer) => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: currentCustomer.membership,
          id: currentCustomer.id,
        });
      }
    });
  }

  updateCustomer() {
    const { name, phone, address, membership } = this.customerForm.value;

    const customer = new CustomerModel(name, phone, address, membership);

    this.store.dispatch(customersActions.updateCustomer({ customer }));
    this.customerForm.reset();
  }
}
