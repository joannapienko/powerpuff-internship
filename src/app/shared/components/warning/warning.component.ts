import { Component, Input, OnInit } from '@angular/core';
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
  typeOfError?: string;
  reactorName?: string;
  warningType: Status = Status.outOfRange;
  WarningStyle = WarningStyle;
  ngOnInit() {
    console.log(this.safetyStatus);
    if (!!this.safetyStatus) {
      this.reactorName = this.safetyStatus.extendedStatus?.name;
      if (this.safetyStatus.statusCoreTemperature !== Status.inRange) {
        this.typeOfError = 'Core temperature ';
        this.warningType = this.safetyStatus.statusCoreTemperature;
      } else {
        this.typeOfError = 'Power production output ';
        this.warningType = this.safetyStatus.statusPowerProduction;
      }
    } else if (!!this.reactorStatus) {
      this.reactorName = this.reactorStatus.name;
      if (this.reactorStatus?.status.coreTempStatus !== Status.inRange) {
        this.typeOfError = 'Core temperature ';
        this.warningType = this.reactorStatus.status.coreTempStatus;
      } else {
        this.typeOfError = 'Power production output ';
        this.warningType = this.reactorStatus.status.powerProdStatus;
      }
    }
  }
}
