import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent{

  constructor(private _dataService : DataService) { }

  url : string;

  outputFileName : string;

  startFileNumber : number;

  endFileNumber : number;

  isStream : boolean;

  submitDownload() {
    this._dataService.submitCustomDownloadRequest(this.url, this.outputFileName,this.startFileNumber, this.endFileNumber, this.isStream).subscribe(data => {
    });

    this.resetFields();   
  }


  resetFields() {
    this.url = "";
    this.outputFileName = "";
    this.endFileNumber = null;
    this.startFileNumber = null;
    this.isStream = false;
  }



}
