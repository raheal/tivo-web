import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  response : any;
  
  sourceUrl : string;

  outputName : string;

  constructor(private _dataService : DataService, private _managementService : ManagementService) { }

  title="Tivo Management Console"

  submitDownload() {
    this._dataService.submitDownloadRequest(this.sourceUrl, this.outputName).subscribe(data => {
      this.response = data;
    })
    this.resetFields();   
  }

  resetFields() {
    this.sourceUrl = "";
    this.outputName = "";
  }


  eraseStreamData() {
    let taskId = this._managementService.getSelectedTaskId();
    console.log("Are you sure you want to delete stream data for [" + taskId + "] ?");
  }


  ngOnInit() {
  }




}
