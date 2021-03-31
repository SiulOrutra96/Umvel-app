import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(48,175,12,0.3)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(66,138,21,0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];

  lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.graphService.fetchData().subscribe(res => {
      this.lineChartLabels = res.map(sale => sale.car_make);
      let data = res.map(sale => sale.quantity);
      this.lineChartData = [{ data, label: 'Ventas' }];
    });
  }
}
