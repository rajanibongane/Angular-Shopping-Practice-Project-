import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrackComponent } from './components/track/track.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'home', component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'wishlist', component:WishlistComponent
  },
  {
    path:'orders', component:OrdersComponent
  },
  {
    path:'track', component:TrackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
