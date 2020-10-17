import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { interval } from 'rxjs';
import { ManagementService } from '../management.service';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  response : any;
  
  sourceUrl : string;

  outputName : string;

  _previousSelectedElement : HTMLElement;

  downloadStatusData : any;

  statusFilterValue : string;

  constructor(private _dataService : DataService, private _managementService: ManagementService, private _toastrService : ToastrService) { }


  runPolledStatus() {
    
    this._managementService.statusFilterObservable.subscribe(s => {
      if (s!= undefined) {
        this.statusFilterValue = s;
      }
    });

    const source = interval(10000);
    source.subscribe(val => this._dataService.getDownloadStatusData().subscribe(data => {
      this.downloadStatusData = data;
    }));
  }

  ngOnInit() {


    this._dataService.getDownloadStatusData().subscribe(data => {
      this.downloadStatusData = data;
    });

    this.runPolledStatus();


  }

  setTaskId(task : any) {

    this._managementService.setSelectedTask(task);
    let element: HTMLElement = document.getElementById(task.id);
    if (this._previousSelectedElement != undefined) {
      this._previousSelectedElement.classList.remove("bg-primary");
      this._previousSelectedElement.style.color = "black";
    }
    if (element.classList.contains("bg-primary")) {
      element.classList.remove("bg-primary");
      element.style.color = "black";
    } else {
      element.classList.add("bg-primary");
      element.style.color = "white";
    }
    this.setPreviousSelectedRow(element);
  }

  setPreviousSelectedRow(element : HTMLElement) : void  {
    this._previousSelectedElement = element;
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
}
