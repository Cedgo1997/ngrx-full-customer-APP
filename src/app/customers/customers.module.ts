import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//NGRX
import { customersReducer } from '../store/reducers/customers.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from '../store/effects';

// COMPONENTS
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';

const CUSTOMERSROUTES: Routes = [
  { path: 'customers', component: CustomerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CUSTOMERSROUTES),
    StoreModule.forFeature('customers', customersReducer),
    EffectsModule.forFeature(EffectsArray),
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
  ],
})
export class CustomersModule {}
