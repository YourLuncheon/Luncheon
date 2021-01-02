import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { DescriptionComponent } from './description/description.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormValidationErrorsComponent } from './form-validation-errors/form-validation-errors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChipsComponent } from './chips/chips.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HeaderComponent,
    IconComponent,
    DescriptionComponent,
    FormInputComponent,
    FormValidationErrorsComponent,
    ChipsComponent,
    FormCheckboxComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CustomButtonComponent,
    HeaderComponent,
    DescriptionComponent,
    FormInputComponent,
    FormValidationErrorsComponent,
    ChipsComponent,
    FormCheckboxComponent
  ]
})
export class SharedModule { }
