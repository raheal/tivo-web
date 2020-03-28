import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { interval } from 'rxjs';
import { ManagementService } from '../management.service';
import { equalParamsAndUrlSegments } from '@angular/router/src/router_state';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  _previousSelectedElement : HTMLElement;

  downloadStatusData : any;

  constructor(private _dataService : DataService, private _managementService: ManagementService) { }


  runPolledStatus() {
    const source = interval(10000);
    source.subscribe(val => this._dataService.getDownloadStatusData().subscribe(data => {
      this.downloadStatusData = data;

      // if (this._previousSelectedElement != undefined) {
      //   console.log("Running in here id = "+this._previousSelectedElement.id);
      //   this._previousSelectedElement.style.backgroundColor="green";
      // }

    }));
  }

  ngOnInit() {


    this._dataService.getDownloadStatusData().subscribe(data => {
      this.downloadStatusData = data;
    });

    this.runPolledStatus();

  }

  setTaskId(taskId : string) {
    this._managementService.setSelectedTaskId(taskId);

    let element: HTMLElement = document.getElementById(taskId);


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

}
