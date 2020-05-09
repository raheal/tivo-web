import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { ManagementService } from '../management.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  fileset : Object;

  constructor(private _dataService : DataService) { }

  public getFileData(taskId : string) {
    this._dataService.getFileData(taskId).subscribe(data => {
      this.fileset = data;
    });
  }

  ngOnInit() {
  }

}
