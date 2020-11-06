import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { CustomerModel } from "./../models/customer.model";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private customersUrl = "http://localhost:3000/customers";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.customersUrl);
  }

  getCustomerById(id: number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${this.customersUrl}/${id}`);
  }

  createCustomer(payload: CustomerModel): Observable<CustomerModel> {
    return this.http.post<CustomerModel>(this.customersUrl, payload);
  }

  updateCustomer(customer: CustomerModel): Observable<CustomerModel> {
    return this.http.patch<CustomerModel>(
      `${this.customersUrl}/${customer.id}`,
      customer
    );
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}