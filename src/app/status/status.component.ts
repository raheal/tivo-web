import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { interval } from 'rxjs';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  downloadStatusData : any;

  constructor(private _dataService : DataService, private _managementService: ManagementService) { }


  runPolledStatus() {
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

  setTaskId(taskId : string) {
    this._managementService.setSelectedTaskId(taskId);

    // change the css colour property for selecting the row

    let element = document.getElementById(taskId);


  }





}
