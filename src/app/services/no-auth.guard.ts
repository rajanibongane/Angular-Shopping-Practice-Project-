import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}

  canActivate(){
    if(this.auth.IsLoggedIn()){
      // this.router.canceledNavigationResolution = 'computed';
      this.router.navigate(['home']);
      alert("You have already logged In")
      return false;
      
    }
    
    return true;
  }

}
