import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
const baseUrl = environment.baseUrl;
import { HttpClient } from '@angular/common/http';
import { IDemoRequest, IDemoResponse } from '@app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private _http = inject(HttpClient);

  postDemo(user: IDemoRequest) {
    return this._http.post<IDemoResponse>(
      `${baseUrl}/demo-requests/public`,
      user,
    );
  }
}
