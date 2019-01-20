import {
  CustomersComponent,
  CUSTOMER_SERVICE_TOKEN
} from "./customers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Customer } from "../customer";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { PwCTitleCasePipe } from "../title-case.pipe";
import { HighlightDirective } from "../highlight.directive";
import { HttpClientModule } from "@angular/common/http";
import { ICustomerService } from "../icustomer-service";
import { By } from "@angular/platform-browser";

class MockCustomerService implements ICustomerService {
  public customerRecords: Customer[] = [];

  getCustomers(): Observable<Customer[]> {
    const observable = Observable.create((observer: any) => {
      observer.next(this.customerRecords);
      observer.complete();
    });

    return observable;
  }
}

describe("Customers Component Test Suite v2 - with Mock Customer Services and Spy", () => {
  let component: CustomersComponent;
  let componentFixture: ComponentFixture<CustomersComponent>;
  let mockCustomerServiceInstance: MockCustomerService;

  const JASMINE_TIMEOUT = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  const mockCustomers = [
    new Customer(
      1,
      "ABC",
      "Bangalore",
      12000,
      true,
      "info@email.com",
      "080-398498343",
      "Simple"
    ),
    new Customer(
      2,
      "ABC",
      "Bangalore",
      12000,
      true,
      "info@email.com",
      "080-398498343",
      "Simple"
    ),
    new Customer(
      3,
      "ABC",
      "Bangalore",
      12000,
      true,
      "info@email.com",
      "080-398498343",
      "Simple"
    )
  ];

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule],
      declarations: [CustomersComponent, PwCTitleCasePipe, HighlightDirective],
      providers: [
        {
          provide: CUSTOMER_SERVICE_TOKEN,
          useClass: MockCustomerService
        }
      ]
    });
  });

  it("Should component initialize, set state properties and behavior work correctly", () => {
    TestBed.compileComponents().then(() => {
      componentFixture = TestBed.createComponent(CustomersComponent);
      component = componentFixture.componentInstance;

      mockCustomerServiceInstance = componentFixture.debugElement.injector.get<
        MockCustomerService
      >(CUSTOMER_SERVICE_TOKEN);

      mockCustomerServiceInstance.customerRecords = mockCustomers;
      spyOn(mockCustomerServiceInstance, "getCustomers").and.callThrough();

      componentFixture.detectChanges();

      expect(component).toBeTruthy();
      expect(component.isLoading).toBe(false);
      expect(component.errorMessage).toBe("");

      componentFixture.detectChanges();

      expect(component.isLoading).toBe(false);
      expect(component.customers).toBeTruthy();
      expect(component.customers.length).toBe(3);
      expect(component.customers[0].customerName).toBe("ABC");
      expect(mockCustomerServiceInstance.getCustomers).toHaveBeenCalledTimes(1);
      expect(component.errorMessage).toBe("");
    });
  });

  it("Should component render expected markup", () => {
    TestBed.compileComponents().then(() => {
      componentFixture = TestBed.createComponent(CustomersComponent);
      component = componentFixture.componentInstance;
      mockCustomerServiceInstance = componentFixture.debugElement.injector.get<
        MockCustomerService
      >(CUSTOMER_SERVICE_TOKEN);

      mockCustomerServiceInstance.customerRecords = mockCustomers;
      spyOn(mockCustomerServiceInstance, "getCustomers").and.callThrough();

      componentFixture.detectChanges();

      expect(component).toBeTruthy();
      expect(component.isLoading).toBe(false);
      expect(component.errorMessage).toBe("");

      componentFixture.detectChanges();

      const renderedElements = componentFixture.debugElement.queryAll(
        By.css(".highlight")
      );

      expect(renderedElements.length).toBe(3);

      const directiveRenderedElements = componentFixture.debugElement.queryAll(
        By.directive(HighlightDirective)
      );

      expect(directiveRenderedElements.length).toBe(3);

      const firstLiElement = componentFixture.debugElement.queryAll(
        By.directive(HighlightDirective)
      )[0];

      console.log(firstLiElement.nativeElement);

      expect(firstLiElement.nativeElement.textContent).toBe("Abc");
    });
  });

  afterEach(() => {
    console.log("Test Cleanup Completed!");
  });

  afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = JASMINE_TIMEOUT;
  });
});
