import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public profile: any;
  public profileName: string = 'John Smith';

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe(data => this.profile = data );
  }

  get profileUrl(): string {
    return `https://github.com/${this.profile?.nickname.toLowerCase()}`;
  }
}
