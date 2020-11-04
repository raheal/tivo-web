import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ToastrService } from 'ngx-toastr';
import { ManagementService } from 'src/app/management.service';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent{

  constructor(private _dataService : DataService, private _toastrService : ToastrService, private _managementService : ManagementService) { }

  url : string;

  outputFileName : string;

  startFileNumber : number;

  endFileNumber : number;

  isStream : boolean;

  processPlan : string = "STRAIGHT_THROUGH";

  submitDownload() {
    this._dataService.submitCustomDownloadRequest(this.url, this.outputFileName,this.startFileNumber, this.endFileNumber, this.isStream, this.processPlan, this._managementService.getAutoRestartSwitch()).subscribe(data => {
    });
    this._toastrService.success("Downloading "+ this.outputFileName); 
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
