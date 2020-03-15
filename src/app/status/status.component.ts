import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  downloadStatusData : any;

  constructor(private _dataService : DataService) { }

  ngOnInit() {

    const source = interval(10000);
    source.subscribe(val => this._dataService.getDownloadStatusData().subscribe(data => {
      this.downloadStatusData = data;
    }));

    // this._dataService.getDownloadStatusData().subscribe(data => {
    //   this.downloadStatusData = data;
    // });

  }






}
