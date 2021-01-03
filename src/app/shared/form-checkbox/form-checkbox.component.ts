import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { addClassToObject } from 'src/app/util/config.util';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormCheckboxColorClasses, FormCheckboxColors } from "./form-checkbox-color.model";
@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent extends BaseFormComponent {

  /** INPUT FROM PARENT COMPONENT */
  @Input() isLabelActive: boolean = true;
  @Input() checkBoxColor: FormCheckboxColors = FormCheckboxColors.INDIGO600;

  /** OUTPUT TO PARENT COMPONENT */
  @Output() forCheckboxChange = new EventEmitter();

  /** LOCAL STATE OBJECTS */
  styleState: object = {};

  ngOnChanges(changes: SimpleChanges) {
    console.log("New called");
    if (this.checkBoxColor)
      addClassToObject(this.styleState, [FormCheckboxColorClasses[this.checkBoxColor]]);
  }

  /** [parameter] - Event
   * [What] Event Emitter triggerer for Chekbox change
   */
  checkboxChange(event: any) {
    this.forCheckboxChange.emit(event);
  }
}
