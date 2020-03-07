import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  downloadStatusData : any;

  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this._dataService.getDownloadStatusData().subscribe(data => {
      this.downloadStatusData = data;
    })
  }

}
