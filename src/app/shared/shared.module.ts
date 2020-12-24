import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './icon/icon.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    CustomButtonComponent,
    HeaderComponent,
    IconComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ], 
  exports: [
    CustomButtonComponent,
    HeaderComponent,
    DescriptionComponent
  ]
})
export class SharedModule { }
