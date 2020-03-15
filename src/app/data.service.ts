import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }


  getDownloadLogData() {
    return this._http.get("http://localhost:8080/api/v1/download/log");
  }


  getDownloadStatusData() {
    return this._http.get("http://localhost:8080/api/v1/download/status/all");
  }

  submitDownloadRequest(_url, _outputFileName) {
    return this._http.post<any>('http://localhost:8080/api/v1/download', 
    {
      url : _url,
      outputFileName : _outputFileName,
      startFileNumber : 1,
      endFileNumber : 1000,
      isStream : true,
      mediaMetadata : null
    })
  }

}


