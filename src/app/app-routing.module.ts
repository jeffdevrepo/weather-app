import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardService } from './guard/app-guard.service';
import { AuthGuardService } from './guard/auth-guard.service';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./welcome/modules/welcome.module').then(m => m.WelcomeModule), canActivate: [AppGuardService]},
  { path: 'profile', loadChildren: () => import('./profile/modules/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuardService] },
  { path: 'weather-forecast', loadChildren: () => import('./weather-forecast/modules/weather-forecast.module').then(m => m.WeatherForecastModule), canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '*', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppGuardService,
    AuthGuardService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
