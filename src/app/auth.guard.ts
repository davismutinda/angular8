import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild  {
 
  constructor(private service: ServiceService,private router: Router) {}
  canActivate() {
    console.log('AlwaysAuthGuard');
    if (this.service.isAuthenticated()) {
      return true;
    } else {
      window.alert('You dont have permission to view this page');
      this.router.navigateByUrl('/login');
      return false;
    }

  }
  canActivateChild(){
    console.log('AlwaysAuthGuard');
    if (this.service.isAuthenticated()) {
      return true;
    } else {
      window.alert('You dont have permission to view this page');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
