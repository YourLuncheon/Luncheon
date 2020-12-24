import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { addClassToObject } from 'src/app/util/config.util';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnChanges {
  @Input() descText: string = 'This is a description...';
  @Input() color: string;
  @Input() size: string;
  @Input() default: boolean = false;

  private defaultStyes: Array<string> = [
    'text-gray-400',
    'lg:text-base',
    'bg-gray-100',
  ];

  private styles: object = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.default) {
      addClassToObject(this.styles, [...this.defaultStyes]);
    } else {
      if (changes.color) {
        addClassToObject(this.styles, [this.color]);
      }
      if (changes.size) {
        addClassToObject(this.styles, ['lg:' + this.size]);
      }
    }
  }

  /**
   * Returns style classes
   */
  getClasses(): object {
    return this.styles;
  }
}
