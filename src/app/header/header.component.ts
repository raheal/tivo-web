import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  response : any;
  
  sourceUrl : string;

  outputName : string;

  constructor(private _dataService : DataService) { }

  title="Tivo Management Console"

  submitDownload() {
    this._dataService.submitDownloadRequest(this.sourceUrl, this.outputName).subscribe(data => {
      this.response = data;
    })
    this.resetFields();   
  }

  resetFields() {
    this.sourceUrl = "";
    this.outputName = "";
  }

  



  ngOnInit() {
  }




}
