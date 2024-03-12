import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public profile: any;
  public city: string = "";

  constructor(
    public auth: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe(data => this.profile = data );
  }

  get profileUrl(): string {
    return `https://github.com/${this.profile?.nickname.toLowerCase()}`;
  }

  setQueryParameters(city: any) {
    this.router.navigate(['/weather-forecast/', city.toLowerCase()])
  }
}
