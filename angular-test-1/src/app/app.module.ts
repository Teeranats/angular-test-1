import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilingTypeComponent } from './components/filing-type/filing-type.component';
import { MonthComponent } from './components/month/month.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { YearComponent } from './components/year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    YearComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
