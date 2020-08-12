import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router, public route: ActivatedRoute) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      const expectedRole = next.data.expectedRole;
      try {
        if (
          !this.auth.isAuth() ||
          this.auth.getRole() !== expectedRole
        ) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      } catch (err) {
        this.router.navigate(['/login']);
      }

  }
}
