import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public store = { status: false };
  public status = new Subject<boolean>()

  constructor() { }

  setStatus(isLoading: boolean) {
    this.store.status = isLoading;
    this.status.next(this.store.status);
  }
}
