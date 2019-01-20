import {
  CustomersComponent,
  CUSTOMER_SERVICE_TOKEN
} from "./customers.component";
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { HighlightDirective } from "../highlight.directive";
import { PwCTitleCasePipe } from "../title-case.pipe";
import { CustomerService } from "../customer.service";
import { CommonModule } from "@angular/common";

xdescribe("Customers Component Test Suite v1 - Real Component Tests", () => {
  let component: CustomersComponent;
  let componentFixture: ComponentFixture<CustomersComponent>;

  const DEFAULT_JASMINE_TIMEOUT = jasmine.DEFAULT_TIMEOUT_INTERVAL;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule],
      declarations: [CustomersComponent, HighlightDirective, PwCTitleCasePipe],
      providers: [
        {
          provide: CUSTOMER_SERVICE_TOKEN,
          useClass: CustomerService
        }
      ]
    }).compileComponents();
  });

  it("Should component initialize and set state properties", () => {
    fakeAsync(() => {
      componentFixture = TestBed.createComponent(CustomersComponent);
      component = componentFixture.componentInstance;
      componentFixture.detectChanges();

      expect(component).toBeTruthy();
      expect(component.isLoading).toBe(true);
      expect(component.errorMessage).toBe("");
      expect(component.customers.length).toBe(0);

      componentFixture.detectChanges();

      tick();

      expect(component.isLoading).toBe(false);
      expect(component.errorMessage).toBe("");
      expect(component.customers.length).toBe(53);
      expect(component.customers[0].customerName).toBe("Letisha Ollerenshaw");
    });
  });

  afterEach(() => {
    console.log("Test Cleanup Completed!");
  });

  afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = DEFAULT_JASMINE_TIMEOUT;
  });
});
