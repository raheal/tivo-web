import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ManagementService } from '../management.service';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../settings.service';

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

  constructor(private _settingsService : SettingsService, private _dataService : DataService, private _managementService : ManagementService, private _toastrService : ToastrService) { }

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


  clearDashboardAndLogCache() {
    let dashboardCacheCleared : Boolean;
    let logCacheCleared : Boolean;

    this._settingsService.clearDashboardCache().subscribe(data => {
      dashboardCacheCleared = data;
      if (dashboardCacheCleared) {
        this._toastrService.success("Dashboard data is cleared");
      } else{
        this._toastrService.error("An error has occured whilst trying to clear the dashboard data");
      }
    });

    this._settingsService.clearLogCache().subscribe(data => {
      logCacheCleared = data;
      if (logCacheCleared) {
        this._toastrService.success("Log data is cleared");
      } else{
        this._toastrService.error("An error has occured whilst trying to clear the log data");
      }
    });

  }


  submitDownload() {
    this._dataService.submitDownloadRequest(this.sourceUrl, this.outputName).subscribe(data => {
      this.response = data;
    })
    this._toastrService.success("Downloading "+ this.outputName); 
    this.resetFields();
  }

  resumeDownload() {
    let task : any = this._managementService.getSelectedTask();
    console.log("URL = "+task.request.url+ ", "+task.request.outputFileName+", "+task.id);
    this._dataService.resumeDownloadRequest(task.request.url, task.request.outputFileName, task.id, "STRAIGHT_THROUGH").subscribe(data => {
      this.response = data;
    })
    this._toastrService.success("Resuming "+ task.request.outputFileName); 
  }

  runCustomDownload(processPlan : string) {
    let task : any = this._managementService.getSelectedTask();
    console.log("Running job with process plan = "+processPlan + " = "+task.request.url+ ", "+task.request.outputFileName+", "+task.id);
    this._dataService.resumeDownloadRequest(task.request.url, task.request.outputFileName, task.id, processPlan).subscribe(data => {
      this.response = data;
    })
    this._toastrService.success("Resuming "+ task.request.outputFileName);   
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
    this.exploreButtonStatus = false;
    this._managementService.setExploreButtonStatus(false);
  }




}
