import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot , Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseloginService } from './firebaselogin.service';



@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private service: FirebaseloginService , private router:Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const token = localStorage.getItem('token');
  if (token && this.service.validarToken()) {
    return true;
    
  }else{
    this.router.navigate(['login']),{queryParams:{return: state.url}}
    return false;
  }
}

}
