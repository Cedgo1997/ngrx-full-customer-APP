import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerModel } from './../models/customer.model';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  getCustomers() {
    return this.http.get(`${this.customersUrl}`);
  }

  getCustomerById(id: number) {
    return this.http.get(`${this.customersUrl}/${id}`);
  }

  createCustomer(customer: CustomerModel) {
    return this.http.post(this.customersUrl, customer);
  }

  updateCustomer(customer: CustomerModel) {
    return this.http.patch(`${this.customersUrl}/${customer.id}`, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.customersUrl}/${id}`);
  }
}
