import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Status } from '../../../../core/enums/status.enum';

@Component({
  selector: 'app-chart-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-status.component.html',
  styleUrl: './chart-status.component.scss',
})
export class ChartStatusComponent {
  @Input() title!: string;
  @Input() status!: Status;
  statuses = Status;
}
