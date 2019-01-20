import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrmsystemModule } from "./crmsystem/crmsystem.module";
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [AppComponent, DummyComponent],
  imports: [BrowserModule, AppRoutingModule, CrmsystemModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
