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
      mediaMetadata : null,
      resumeDownload : false, // to be handled later
      taskId : "",
      processingPlan : "STRAIGHT_THROUGH"
    })
  }

  deleteDownloadDirectory(_taskId) {
    return this._http.put<Boolean>('http://localhost:8080/api/v1/settings/delete/' + _taskId, {});
  }

  submitCustomDownloadRequest(_url, _outputFileName, _startFileNumber, _endFileNumber, _isStream, _processPlan) {
    console.log("Process plan = "+_processPlan);
    return this._http.post<any>('http://localhost:8080/api/v1/download', 
    {
      url : _url,
      outputFileName : _outputFileName,
      startFileNumber : _startFileNumber,
      endFileNumber : _endFileNumber,
      isStream : _isStream,
      mediaMetadata : null,
      processingPlan : _processPlan,
      taskId : ""
    })
  }





}


