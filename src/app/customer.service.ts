import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICustomerService } from "./icustomer-service";
import { Observable } from "rxjs";
import { Customer } from "./customer";
import { environment } from "src/environments/environment";

@Injectable()
export class CustomerService implements ICustomerService {
  constructor(private httpClient: HttpClient) {
    if (this.httpClient === null) {
      throw new Error("Invalid Http Client Service Provided!");
    }
  }

  getCustomers(): Observable<Customer[]> {
    const serviceUrl = `${environment.serviceUrl}/api/customers`;

    console.log(serviceUrl);

    return this.httpClient.get<Customer[]>(serviceUrl);
  }
}
