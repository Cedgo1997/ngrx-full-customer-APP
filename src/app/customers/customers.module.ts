import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';



@NgModule({
  declarations: [CustomerComponent, AddCustomerComponent, EditCustomerComponent, CustomerListComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
