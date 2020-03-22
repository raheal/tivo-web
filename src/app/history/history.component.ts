import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  downloadLogData : any;

  search: string;

  constructor(private _dataService : DataService) { }

  ngOnInit() {
     this._dataService.getDownloadLogData().subscribe(data => {
       this.downloadLogData = data;
     })
  }


  



}
