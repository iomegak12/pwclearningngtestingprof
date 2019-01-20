import { Component, OnInit, Inject, InjectionToken } from "@angular/core";
import { ICustomerService } from "../icustomer-service";
import { Customer } from "../customer";

export const CUSTOMER_SERVICE_TOKEN = new InjectionToken<ICustomerService>(
  "ICustomerService"
);

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  public isLoading = false;
  public customers: Customer[] = [];
  public errorMessage = "";

  constructor(
    @Inject(CUSTOMER_SERVICE_TOKEN)
    private customerService: ICustomerService
  ) {
    if (this.customerService === null) {
      throw new Error("Invalid Customer Service Specified!");
    }
  }

  ngOnInit() {
    this.isLoading = true;

    this.customerService
      .getCustomers()
      .subscribe(
        data => (this.customers = data),
        error => (this.errorMessage = "Error Occurred"),
        () => (this.isLoading = false)
      );
  }
}
