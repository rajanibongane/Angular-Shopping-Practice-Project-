import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrackComponent } from './components/track/track.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AuthGuard } from './services/auth.guard';
import { NoAuthGuard } from './services/no-auth.guard';




const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent,canActivate:[NoAuthGuard]
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'home', component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'cart', component:CartComponent,canActivate:[AuthGuard]
  },
  {
    path:'wishlist', component:WishlistComponent,canActivate:[AuthGuard]
  },
  {
    path:'orders', component:OrdersComponent,canActivate:[AuthGuard]
  },
  {
    path:'track', component:TrackComponent,canActivate:[AuthGuard]
  },
  {
    path:'**', component:NoPageComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
