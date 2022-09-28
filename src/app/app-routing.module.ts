import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { KurtisComponent } from './kurtis/kurtis.component';
import { SareesComponent } from './sarees/sarees.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { RegisterComponent } from './register/register.component';
import { TopsComponent } from './tops/tops.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'kurtis',component:KurtisComponent},
  {path:'sarees',component:SareesComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'advertisement',component:AdvertisementComponent},
  {path:'register',component:RegisterComponent},
  {path:'tops',component:TopsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'deals',component:AmazondealsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
