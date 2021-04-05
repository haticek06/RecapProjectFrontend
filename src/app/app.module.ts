import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';
import { MainComponent } from './components/main/main.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';

import { ToastrModule } from "ngx-toastr";
import { FilterComponent } from './components/filter/filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    UserComponent,
    RentalComponent,
    MainComponent,
    CarDetailComponent,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    FilterComponent,
    PaymentComponent,
    BrandAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
