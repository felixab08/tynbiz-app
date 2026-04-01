import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISuscriptionReq } from '@app/interfaces';
import { IErrorResponse } from '@app/interfaces/error-response.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class SuscriptionService {
  private _http = inject(HttpClient);

  postSuscription(
    sub: ISuscriptionReq,
  ): Observable<ISuscriptionReq | IErrorResponse> {
    return this._http.post<ISuscriptionReq | IErrorResponse>(
      `${baseUrl}/public/subscriptions`,
      sub,
    );
  }
}
