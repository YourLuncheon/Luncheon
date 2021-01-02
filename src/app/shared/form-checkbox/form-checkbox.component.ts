import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent extends BaseFormComponent {

  /** INPUT FROM PARENT COMPONENT */
  @Input() isLabelActive: boolean = true;

  /** OUTPUT TO PARENT COMPONENT */
  @Output() forCheckboxChange = new EventEmitter();

  /** [parameter] - Event
   * [What] Event Emitter triggerer for Chekbox change
   */
  checkboxChange(event: any) {
    this.forCheckboxChange.emit(event);
  }
}
