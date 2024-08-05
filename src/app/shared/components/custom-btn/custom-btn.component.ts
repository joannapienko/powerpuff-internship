import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '../../../core/enums/buttonType.enum';

@Component({
  selector: 'custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrl: './custom-btn.component.scss',
})
export class CustomBtnComponent {
  @Input() label: string = '';
  @Input() type: ButtonType = ButtonType.standard;

  @Output() onClick = new EventEmitter<any>();
  ButtonType = ButtonType;
  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
