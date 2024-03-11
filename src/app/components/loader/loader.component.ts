import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  public loading: boolean = false;

  constructor(private service: LoaderService) {
    this.service.status.subscribe(load => this.loading = load);
  }
}
