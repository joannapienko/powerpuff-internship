import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Chart, ScriptableLineSegmentContext } from 'chart.js/auto';
import { ChartStatusComponent } from '../chart-status/chart-status.component';
import { ChartService } from '../../services/chart.service';
import { Status } from '../../../../core/enums/status.enum';
import { ChartDataModel } from '../../../../core/models/reactor.model';

@Component({
  selector: 'app-core-temperature-chart',
  standalone: true,
  imports: [ChartStatusComponent],
  templateUrl: './core-temperature-chart.component.html',
  styleUrl: './core-temperature-chart.component.scss',
})
export class CoreTemperatureChartComponent implements AfterViewInit {
  @Input() chartData: ChartDataModel[] | undefined;
  @Input() reactorId = '';
  @Input() reactorStatus = Status.inRange;
  chart: any = [];
  dataForChart!: { colors: string[]; labels: number[] };

  constructor(
    private chartService: ChartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const ctx = 'core-temperature-chart' + this.reactorId;
    this.dataForChart = this.chartService.getColorsAndLabelsForChart(
      this.chartData
    );
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.dataForChart.labels,
        datasets: [
          {
            label: 'Core temperature chart',
            data: this.chartData,
            pointBackgroundColor: this.dataForChart.colors,
            pointBorderColor: this.dataForChart.colors,
            // borderColor: function (context) {
            //   const chart = context.chart;
            //   const { ctx, chartArea } = chart;

            //   if (!chartArea) {
            //     // This case happens on initial chart load
            //     return;
            //   }
            //   return getSegmentColor2(ctx, chartArea);
            // },

            backgroundColor: this.dataForChart.colors,
            fill: false,
            tension: 0.2,
            segment: {
              backgroundColor: (ctx) =>
                getSegmentColor(ctx, this.dataForChart.colors),
              borderColor: (ctx) =>
                getSegmentColor(ctx, this.dataForChart.colors),
            },
          },
        ],
      },
      options: {
        layout: {
          padding: 20,
        },
        maintainAspectRatio: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'value',
        },
        scales: {
          x: {
            ticks: {
              color: '#000000',

              font: { family: 'Vattenfall Hall', size: 14 },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: '#000000',

              font: { family: 'Vattenfall Hall', size: 14 },
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: '#2071b5',
            titleAlign: 'center',
            bodyAlign: 'center',
            xAlign: 'center',
            yAlign: 'bottom',
            padding: 8,
            boxPadding: 3,
            callbacks: {
              title: function (tooltipItem) {
                return '';
              },
              label: function (tooltipItem) {
                return tooltipItem.formattedValue + ' ºC';
              },
            },
            footerFont: {
              family: 'Vattenfall Hall',
            },
          },
          title: {
            display: true,
            text: 'Core temperature',
            color: '#000000',
            align: 'start',
            padding: {
              bottom: 20,
            },
            font: {
              size: 17,
              weight: 'bold',
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });

    this.cdr.detectChanges();
  }
}
function getSegmentColor(
  ctx: ScriptableLineSegmentContext,
  dataForChart: string[]
): any {
  let point = ctx.p1;
  console.log(point);
  return dataForChart[point.parsed.x - 1];
}

function getSegmentColor2(ctx: any, chartArea: any): any {
  // const max = ctx.scales.y.max;
  const max = 1500;

  let width, height, gradient;

  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    const colors = {
      critical: '#f93b18',
      outOfRange: '#ffda00',
      inRange: '#2071b5',
    };
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(250 / max, colors.critical);
    gradient.addColorStop(400 / max, colors.outOfRange);
    gradient.addColorStop(800 / max, colors.inRange);
    gradient.addColorStop(950 / max, colors.outOfRange);
    gradient.addColorStop(1200 / max, colors.critical);
  }

  return gradient;
}
