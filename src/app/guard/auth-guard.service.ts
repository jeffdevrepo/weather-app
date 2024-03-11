import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _auth: AuthService,
    private router: Router) {}

  canActivate() {
    this._auth.isAuthenticated$.subscribe(auth => {
      if(auth) return true;

      this.router.navigate(['/welcome']);
      return false;
    });
  }
}
