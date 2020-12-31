import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {FontSize,FontSizeClasses} from '../../constants/font-size.constants'
import { ChipsColorClass } from './chips-color.model';
import {addClassToObject} from '../../util/config.util';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

@Input() label:string="Khabar";
@Input() size:FontSize=FontSize.SM;
@Input() bgColor:ChipsColorClass.BLUE


styleState:object={};
/**
   *
   * @param changes
   */
ngOnChanges(changes:SimpleChanges){
  if(changes.size)
    addClassToObject(this.styleState,[FontSizeClasses[this.size]])
  if(changes.bgColor)
    addClassToObject(this.styleState,[ChipsColorClass[this.bgColor]])


}

getClasses(): object {
  return this.styleState;
}
}

