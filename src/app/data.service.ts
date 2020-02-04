import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }


  getDownloadLogData() {
    return this._http.get("http://localhost:8080/api/v1/record");
  }


}


