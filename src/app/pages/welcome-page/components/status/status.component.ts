import { Component, Input } from '@angular/core';
import { SafetyStatusModel } from '../../../../core/models/safetyStatus.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
})
export class StatusComponent {
  @Input() status!: SafetyStatusModel;
}
