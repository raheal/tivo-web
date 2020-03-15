import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit {

  constructor(private _dataService : DataService) { }

  url : string;

  outputFileName : string;

  startFileNumber : number;

  endFileNumber : number;

  isStream : boolean;

  ngOnInit() {
  }


  submitDownload() {
    //this._dataService.submitCustomDownloadRequest(this.url, this.outputFileName,this.startFileNumber, this.endFileNumber, this.isStream);

    console.log("stream? " + this.isStream);
  }



}
