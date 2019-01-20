import { CustomerService } from "./customer.service";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { Customer } from "./customer";

xdescribe("Customer Service Test Suite v2 - with Mock REST Services", () => {
  let service: CustomerService;
  let httpTestController: HttpTestingController;
  const mockCustomers = [
    new Customer(
      11,
      "Northwind",
      "BLR",
      23000,
      true,
      "info@email.com",
      "080-398493843",
      "Simple"
    ),
    new Customer(
      12,
      "Northwind",
      "BLR",
      23000,
      true,
      "info@email.com",
      "080-398493843",
      "Simple"
    ),
    new Customer(
      13,
      "Northwind",
      "BLR",
      23000,
      true,
      "info@email.com",
      "080-398493843",
      "Simple"
    )
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(CustomerService);
    httpTestController = TestBed.get(HttpTestingController);
  });

  it("Should getCustomers() return mock results", () => {
    fakeAsync(() => {
      const result = service.getCustomers();
      const req = httpTestController.expectOne(
        "http://localhost:9090/api/customers"
      );

      expect(req.request.method).toBe("GET");

      req.flush(mockCustomers);

      tick();

      result.subscribe(data => {
        expect(data).toBeTruthy();
        expect(data.length).toBe(3);
        expect(data[0].customerName).toBe("Northwind");
      });
    });
  });

  afterEach(() => {});
});
