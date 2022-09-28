import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { KurtisComponent } from './kurtis/kurtis.component';

import { SareesComponent } from './sarees/sarees.component';
import { SareesdealsComponent } from './sarees/sareesdeals/sareesdeals.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { RegisterComponent } from './register/register.component';
import { TopsComponent } from './tops/tops.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DealsComponent } from './deals/deals.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    KurtisComponent,
    SareesComponent,
    SareesdealsComponent,
    AllproductsComponent,
    AdvertisementComponent,
    FooterComponent,
    CounterComponent,
    CounterchildComponent,
    RegisterComponent,
    TopsComponent,
    ContactusComponent,
    ProductdetailsComponent,
    LoginComponent,
    CartItemsComponent,
    DealsComponent,
    AmazondealsComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

