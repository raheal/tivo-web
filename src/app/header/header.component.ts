import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ManagementService } from '../management.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exploreButtonStatus : boolean;

  response : any;
  
  sourceUrl : string;

  outputName : string;

  constructor(private _dataService : DataService, private _managementService : ManagementService, private _toastrService : ToastrService) { }

  title="Tivo Management Console"

  setExploreButtonStatus() {
    if (this.exploreButtonStatus) {
      this.exploreButtonStatus = false;
      this._managementService.setExploreButtonStatus(false);
    } else {
      this.exploreButtonStatus = true;
      this._managementService.setExploreButtonStatus(true);
    }
  }

  submitDownload() {
    this._dataService.submitDownloadRequest(this.sourceUrl, this.outputName).subscribe(data => {
      this.response = data;
    })
    this._toastrService.success("Downloading "+ this.outputName); 
    this.resetFields();
  }

  resetFields() {
    this.sourceUrl = "";
    this.outputName = "";
  }


  eraseStreamData() : Boolean {
    let task : any = this._managementService.getSelectedTask();
    console.log("Are you sure you want to delete stream data for [" + task.request.outputFileName + "] ?");
    let deleteSuccessful : Boolean;
    this._dataService.deleteDownloadDirectory(task.id).subscribe(data =>{
      deleteSuccessful = data;
      if (deleteSuccessful) {
        this._toastrService.success(task.request.outputFileName + " has been deleted successfully");
      } else {
        this._toastrService.error("An error occured whilst trying to delete "+task.request.outputFileName);
      }
    });
    console.log("success deleting it? "+deleteSuccessful);
    return deleteSuccessful;
  }


  ngOnInit() {
  }




}
