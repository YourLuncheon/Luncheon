import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HeaderComponent,
    IconComponent
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
