import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventEmitter } from 'events';
import { FontSize, FontSizeClasses } from "../../constants/font-size.constants";
import { addClassToObject } from "../../util/config.util";
@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {

  /** INPUT FROM PARENT COMPONENT */
  @Input() btnLabel: string = 'Click Me..';
  @Input() isLabelOnly: boolean = true;
  @Input() isIconOnly: boolean = false;
  @Input() isIconActive: boolean = false;
  @Input() iconType: string = 'default';
  @Input() iconSize: string = 'MD';
  @Input() textColor: string = 'text-white';
  @Input() bgColor: string = 'bg-indigo-600';
  @Input() size: FontSize = FontSize.BASE;

  /** OUTPUT TO PARENT COMPONENT */
  @Output() onBtnClicked = new EventEmitter();

  /** LOCAL STATE OBJECTS */
  styleState: object = {};

  ngOnChanges(changes: SimpleChanges) {
    this.styleState = {};
    if (changes.textColor)
      addClassToObject(this.styleState, [this.textColor]);
    if (changes.bgColor)
      addClassToObject(this.styleState, [this.bgColor]);
    if (changes.size)
      addClassToObject(this.styleState, [FontSizeClasses[this.size]]);
  }

  /**
   * 
   * @param event 
   */
  btnClicked(event: any): void {
    this.onBtnClicked.emit(event);
  }

}
