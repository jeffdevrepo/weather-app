import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoaderService } from '../components/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService {

  constructor(
    private _auth: AuthService,
    private router: Router,
    private loader: LoaderService) {}

  canActivate() {
    this.loader.setStatus(true);

    this._auth.isAuthenticated$.subscribe(auth => {
      if(auth) {
        this.loader.setStatus(false);
        this.router.navigate(['/profile']);
        return false;
      }
      else {
        this.loader.setStatus(false);
        return true;
      }
    });
  }
}
