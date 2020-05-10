import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  showExplorePane(turnOn : boolean) : void {
    let divElement = document.getElementById("explorePane");
    if (turnOn) {
      divElement.style.display = "table-cell";
    } else {
      divElement.style.display = "none";      
    }
  }




}
