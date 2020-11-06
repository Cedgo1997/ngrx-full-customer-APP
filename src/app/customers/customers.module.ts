import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//NGRX
import { customersReducer } from '../store/reducers/customers.reducer';

// COMPONENTS
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';

const CUSTOMERSROUTES: Routes = [
  { path: 'customers', component: CustomerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMERSROUTES),
    StoreModule.forFeature('customers', customersReducer),
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
  ],
})
export class CustomersModule {}
