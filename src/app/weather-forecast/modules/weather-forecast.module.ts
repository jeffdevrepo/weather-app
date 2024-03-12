import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherForecastRoutingModule } from './weather-forecast-routing.module';
import { WeatherForecastComponent } from '../weather-forecast.component';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherForecastRoutingModule
  ],
  providers: [
    WeatherForecastService
  ]
})
export class WeatherForecastModule { }
