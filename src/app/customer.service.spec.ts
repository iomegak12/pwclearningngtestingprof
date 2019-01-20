import { CustomerService } from "./customer.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';

xdescribe("Customer Service Test Suite v1 - with REST Services", () => {
  let customerService: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it("Should getCustomers() return actual results from Service", done => {
    customerService = TestBed.get(CustomerService);

    expect(customerService).toBeTruthy();

    customerService.getCustomers().subscribe(results => {
      const expectedNoOfCustomers = 53;

      expect(results).toBeTruthy();
      expect(results.length).toBe(expectedNoOfCustomers);

      done();
    });
  });

  afterEach(() => {
    console.log("Test Cleanup Completed!");
  });
});
