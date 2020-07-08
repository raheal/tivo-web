import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private _http : HttpClient) { }

  clearDashboardCache() {
    return this._http.post<Boolean>('http://localhost:8080/api/v1/settings/cache/clear/status', {});
  }

  clearLogCache() {
    return this._http.post<Boolean>('http://localhost:8080/api/v1/settings/cache/clear/log', {});
  }

}
