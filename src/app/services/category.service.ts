import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
const baseUrl = environment.baseUrl;
export interface ICategory {
  value: number;
  label: string;
}
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _http = inject(HttpClient);

  getCategories() {
    return this._http.get<ICategory[]>(`${baseUrl}/options/store-categories`);
  }

  getSubscriptionsPlans() {
    return this._http.get<any[]>(`${baseUrl}/public/subscriptions/plans`);
  }
}
