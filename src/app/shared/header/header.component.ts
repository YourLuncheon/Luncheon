import { Component, Input, OnChanges } from '@angular/core';

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
  @Input() textAlign: string;

  private classObj: object = {};

  constructor() { }

  ngOnChanges(): void {
    this.color?this.classObj[this.color] = true: delete this.classObj[this.color];
    this.size?this.classObj[this.size] = true: delete this.classObj[this.size];
    this.fontWeight?this.classObj[this.fontWeight] = true: delete this.classObj[this.fontWeight];
    this.bgColor?this.classObj[this.bgColor] = true: delete this.classObj[this.bgColor];
    this.textAlign?this.classObj[this.textAlign] = true: delete this.classObj[this.textAlign];
  }

  getClasses(): object{
    return this.classObj;
  }

}
