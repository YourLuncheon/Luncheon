import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ComponentsRoutingModule } from './components-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { from } from 'rxjs';
import { FoodChipComponent } from './food-chip/food-chip.component';


@NgModule({
  declarations: [SignInComponent, FoodChipComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ],
  exports:[
    SignInComponent,
    FoodChipComponent,

  ]
})
export class ComponentsModule { }
