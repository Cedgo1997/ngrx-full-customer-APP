import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const CUSTOMERSROUTES: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(CUSTOMERSROUTES)],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
  ],
})
export class CustomersModule {}
