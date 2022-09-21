import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
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
import { RegisterformComponent } from './registerform/registerform.component';
import { TopsComponent } from './tops/tops.component';
import { ContactusComponent } from './contactus/contactus.component';


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
    RegisterformComponent,
    TopsComponent,
    ContactusComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

