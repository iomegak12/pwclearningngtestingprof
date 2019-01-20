import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent, CUSTOMER_SERVICE_TOKEN } from "../customers/customers.component";
import { HighlightDirective } from "../highlight.directive";
import { PwCTitleCasePipe } from "../title-case.pipe";
import { HttpClientModule } from "@angular/common/http";
import { CustomerService } from '../customer.service';

@NgModule({
  declarations: [CustomersComponent, HighlightDirective, PwCTitleCasePipe],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: CUSTOMER_SERVICE_TOKEN,
      useClass: CustomerService
    }
  ],
})
export class CrmsystemModule {}
