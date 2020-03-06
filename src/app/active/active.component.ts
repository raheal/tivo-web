import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {


  private diskSpaceMetrics : Object;

  private numberOfFilesInStorage : Object;

  constructor() { }



  ngOnInit() {
    this.diskSpaceMetrics = { total : 100, used : 50, free : 50};
  }

}
