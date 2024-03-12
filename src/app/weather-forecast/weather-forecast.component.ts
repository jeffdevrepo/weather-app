import { Component } from '@angular/core';
import { WeatherForecastService } from './services/weather-forecast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  public forecast: any = {};
  public city: any;

  constructor(
    private service: WeatherForecastService,
    private activatedRoute: ActivatedRoute) {
      this.service.weather.subscribe(data => {
        this.forecast = data;
      });
  }

  ngOnInit() {
    this.city = this.activatedRoute.snapshot.paramMap.get('city');
    this.service.getCity(this.city);
  }
}
