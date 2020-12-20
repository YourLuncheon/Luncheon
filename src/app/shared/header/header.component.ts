import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {

  @Input() headerText: string = "Place header here..!";
  @Input() color: string;
  @Input() size: string;
  @Input() fontWeight: string;
  @Input() bgColor: string;
  @Input() textAlign: string = "text-left";

  private classObj: object;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.classObj = {};
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change:SimpleChange = changes[propName];
        switch (propName) {
          case 'color':
            this.classObj[this.color] = change.currentValue ? true : '';
          case 'size':
            this.classObj["lg:"+this.size] = change.currentValue ? true : '';
          case 'bgColor':
            this.classObj[this.bgColor] = change.currentValue ? true : '';
          case 'fontWeight':
            this.classObj[this.fontWeight] = change.currentValue ? true : '';
          case 'textAlign': 
            this.classObj[this.textAlign] = change.currentValue ? true : '';
        }
      }
    }
  }

  getClasses(): object{
    return this.classObj;
  }

}
