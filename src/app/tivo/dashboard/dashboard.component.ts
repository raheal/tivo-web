import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _managementService : ManagementService) { }

  ngOnInit() {
    this._managementService.exploreStatusObservable.subscribe(data => {
      if (data != undefined) {
        console.log("int")
        this.showExplorePane(data);
      }
    });
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
