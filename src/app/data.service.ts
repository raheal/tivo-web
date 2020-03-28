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
      endFileNumber : 2000,
      isStream : true,
      mediaMetadata : null
    })
  }



  submitCustomDownloadRequest(_url, _outputFileName, _startFileNumber, _endFileNumber, _isStream) {
    //console.log(_url + ", "+ _outputFileName + ", "+_startFileNumber + ", "+ _endFileNumber + ", " + _isStream);
    return this._http.post<any>('http://localhost:8080/api/v1/download', 
    {
      url : _url,
      outputFileName : _outputFileName,
      startFileNumber : _startFileNumber,
      endFileNumber : _endFileNumber,
      isStream : _isStream,
      mediaMetadata : null
    })
  }





}


