import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'red' }
   // ,{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: 'blue' }
  ];

  ngOnInit() {

  }

}
