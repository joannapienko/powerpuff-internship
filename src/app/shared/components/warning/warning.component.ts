import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from '../../../core/enums/status.enum';
import { SafetyStatusModel } from '../../../core/models/safetyStatus.model';
import { ReactorModel } from '../../../core/models/reactor.model';
import { WarningStyle } from '../../../core/enums/warningStyle.enum';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.scss',
})
export class WarningComponent implements OnInit {
  @Input() safetyStatus?: SafetyStatusModel;
  @Input() reactorStatus?: ReactorModel;
  @Input() warningStyle?: WarningStyle = WarningStyle.standard;
  @Output() scrollToElement = new EventEmitter<any>();
  typeOfError?: string;
  reactorName?: string;
  warningType: Status = Status.outOfRange;
  WarningStyle = WarningStyle;

  ngOnInit() {
    if (!!this.safetyStatus) {
      this.setStatus(
        this.safetyStatus.statusCoreTemperature,
        this.safetyStatus.statusPowerProduction
      );
    } else if (!!this.reactorStatus) {
      this.setStatus(
        this.reactorStatus?.status.coreTempStatus,
        this.reactorStatus?.status.powerProdStatus,
        this.reactorStatus.name
      );
    }
  }

  goToReactor(event: Event) {
    if (this.reactorStatus) {
      event.preventDefault();
      this.scrollToElement.emit(this.reactorStatus.id);
    }
  }

  setStatus(
    coreTempStatus: Status,
    powerProdStatus: Status,
    reactorName?: string
  ) {
    this.reactorName = reactorName;
    if (
      coreTempStatus !== Status.inRange &&
      powerProdStatus !== Status.inRange
    ) {
      this.typeOfError = 'Power production output and core temperature ';
      if ((coreTempStatus || powerProdStatus) == Status.critical) {
        this.warningType = Status.critical;
      } else {
        this.warningType = Status.outOfRange;
      }
    } else if (coreTempStatus !== Status.inRange) {
      this.typeOfError = 'Core temperature ';
      this.warningType = coreTempStatus;
    } else if (powerProdStatus !== Status.inRange) {
      this.typeOfError = 'Power production output ';
      this.warningType = powerProdStatus;
    } else {
      this.warningType = Status.inRange;
    }
  }
}
