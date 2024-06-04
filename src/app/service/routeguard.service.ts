// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
// import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RouteguardService implements CanActivateChildFn {

//   constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService) { }


//   canActivateChild(
//          route: ActivatedRouteSnapshot,
//          state: RouterStateSnapshot): Observable<boolean | UrlTree> {
//     if(this.hardcodedAuthenticationService.isUserLoggedIn()){
//       return true;
//     }
//     return false;
//   }

// }


import { Injectable } from '@angular/core';
import { CanActivateChildFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mapTo, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Assuming you have an AuthService (replace with your actual service)
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    let isLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
    if (isLoggedIn){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
