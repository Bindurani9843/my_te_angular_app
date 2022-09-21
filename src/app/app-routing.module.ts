import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { KurtisComponent } from './kurtis/kurtis.component';
import { SareesComponent } from './sarees/sarees.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { TopsComponent } from './tops/tops.component';
import { ContactusComponent } from './contactus/contactus.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'kurtis',component:KurtisComponent},
  {path:'sarees',component:SareesComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'advertisement',component:AdvertisementComponent},
  {path:'registerform',component:RegisterformComponent},
  {path:'tops',component:TopsComponent},
  {path:'contactus',component:ContactusComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
