import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ], 
  exports: [
    CustomButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
