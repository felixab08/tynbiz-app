import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // SHARED, REACTIVE and STORED DATA
  // We need share, react and store at each data change,
  // If we need update yours states, we need make a new request
  // to the service and all subscribers will react at this change.

  isAlertSubject = new BehaviorSubject<boolean>(false);
}
