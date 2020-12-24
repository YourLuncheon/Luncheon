import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { addClassToObject } from 'src/app/util/config.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  @Input() headerText: string;
  @Input() color: string = 'text-indigo-700';
  @Input() size: string;
  @Input() fontWeight: string;
  @Input() bgColor: string;
  @Input() textAlign: string;

  @Input() default: boolean = false;

  private defaultStyes: Array<string> = [
    'text-indigo-700',
    'lg:text-2xl',
    'font-normal',
    'bg-gray-100',
    'text-left',
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
      if (changes.bgColor) {
        addClassToObject(this.styles, ['lg:' + this.bgColor]);
      }
      if (changes.fontWeight) {
        addClassToObject(this.styles, ['lg:' + this.bgColor]);
      }
      if (changes.textAlign) {
        addClassToObject(this.styles, ['lg:' + this.bgColor]);
      }
    }
  }

  getClasses(): object {
    return this.styles;
  }
}
