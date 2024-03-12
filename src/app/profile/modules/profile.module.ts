import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile.component';
import { WeatherForecastService } from 'src/app/weather-forecast/services/weather-forecast.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProfileRoutingModule
  ],
  providers: [
    WeatherForecastService
  ]
})
export class ProfileModule { }
