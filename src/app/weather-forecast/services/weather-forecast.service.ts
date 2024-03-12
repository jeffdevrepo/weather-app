import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private _store = { weather: undefined };
  public weather = new Subject<any>();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getCity(city: string) {
    const url = `${environment.api.url}/geo/1.0/direct?q=${city}&appid=${environment.api.key}`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.getWeather(data[0].lon, data[0].lat);
      }
    )
  }

  getWeather(long: string, lat: string) {
    const url = `${environment.api.url}/data/2.5/forecast?lat=${lat}&lon=${long}&limit=5&appid=${environment.api.key}`;

    const queryParams = {
      long: long,
      lat: lat
    };

    this.http.get(url).subscribe(
      (data: any) => {
        this._store.weather = data;
        this.weather.next(this._store.weather);
      }
    )
  }
}
