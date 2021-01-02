import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormInputType } from "./form-input.model";
import { BaseFormComponent } from "../base-form/base-form.component";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent extends  BaseFormComponent{

  /** INPUT FROM PARENT COMPONENT */
  @Input() isBorder: boolean = true;
  @Input() isLabelActive: boolean = true;
  @Input() inputType: FormInputType = FormInputType.TEXT;
  @Input() placeholderText: string = 'Enter text here..';

  /** OUTPUT TO PARENT COMPONENT */
  @Output() forInputChange = new EventEmitter();

  /** [parameter] - Event
   * [What] Event Emitter triggerer for Select change
   */
  inputChange(event: any) {
    this.forInputChange.emit(event);
  }
}
