import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { ManagementService } from '../management.service';
import { discardPeriodicTasks } from '@angular/core/testing';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  fileset : Object;

  constructor(private _dataService : DataService, private _managementService : ManagementService) { }

  getFileData(taskId : string) {
    this._dataService.getFileData(taskId).subscribe(data => {
      this.fileset = data;
    });
  }

  ngOnInit() {
    this._managementService.data.subscribe(data => {
      if (data != undefined) {
        console.log("Subscribe : "+data.id);
        this.getFileData(data.id);
      }
    });
  }

}
