import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';


@NgModule({
  declarations: [CustomButtonComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ], 
  exports: [
    CustomButtonComponent
  ]
})
export class SharedModule { }
