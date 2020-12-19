import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ComponentsRoutingModule } from './components-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ],
  exports:[
    SignInComponent
  ]
})
export class ComponentsModule { }
