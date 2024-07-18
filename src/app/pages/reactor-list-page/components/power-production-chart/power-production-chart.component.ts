import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Status } from "../../../../shared/models/status.enum";
import { Chart } from "chart.js/auto";
import { ChartStatusComponent } from "../chart-status/chart-status.component";

@Component({
  selector: 'app-power-production-chart',
  standalone: true,
  imports: [
    ChartStatusComponent
  ],
  templateUrl: './power-production-chart.component.html',
  styleUrl: './power-production-chart.component.scss'
})
export class PowerProductionChartComponent implements AfterViewInit{
  @Input() chartData: { time: number; value: number; status: Status }[] | undefined = [];
  @Input() reactorId ='';
  @Input() reactorStatus = Status.inRange;

  title = 'ng-chart';
  chart: any = [];
  colors: string [] =[]

  constructor() {}

  ngAfterViewInit() {
    this.getColorsForChart();
    this.chart = new Chart('powerProductionChart'+this.reactorId, {
      type: 'bar',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15],
        datasets: [
          {
            label: 'Power production chart',
            data: this.chartData,
            borderWidth: 1,
            backgroundColor: this.colors,
          },
        ],
      },
      options: {
        layout: {
          padding: 20
        },
        maintainAspectRatio: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'value'
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Power production output" ,
            color: '#000000',
            align: 'start',
            padding: {
              bottom: 20,
            },
            font: {
              size: 17,
              weight: "bold"
            }
          },
          legend: {
            display: false
          }
        },
      },
    });
  }

  getColorsForChart(): void{
    if(this.chartData){
      for (var i = 0; i < this.chartData?.length; i++) {
        var color;
        switch (this.chartData ? this.chartData[i].status : []) {
          case Status.critical:
            color = '#f93b18';
            break;
          case Status.outOfRange:
            color = '#ffda00';
            break;
          case Status.inRange:
            color = '#2071b5';
            break;
        }
        this.colors.push(color!);
      }
    }

}


}
