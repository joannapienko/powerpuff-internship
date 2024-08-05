import { Component, Input } from '@angular/core';
import { PowerProductionChartComponent } from '../power-production-chart/power-production-chart.component';
import { CoreTemperatureChartComponent } from '../core-temperature-chart/core-temperature-chart.component';
import { ChartStatusComponent } from '../chart-status/chart-status.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UsefulLinksComponent } from '../useful-links/useful-links.component';
import { ReactorModel } from '../../../../core/models/reactor.model';

@Component({
  selector: 'app-reactor-component',
  standalone: true,
  imports: [
    PowerProductionChartComponent,
    CoreTemperatureChartComponent,
    ChartStatusComponent,
    SharedModule,
    UsefulLinksComponent,
  ],
  templateUrl: './reactor-component.component.html',
  styleUrl: './reactor-component.component.scss',
})
export class ReactorComponentComponent {
  @Input() reactorModel!: ReactorModel;
}
