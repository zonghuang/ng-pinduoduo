import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, AfterViewChecked {
  _title;

  constructor() {
    this._title = 'hi';
  }

  ngOnInit() {}

  public get title(): string {
    console.log('赃值检测');
    return this._title;
  }

  ngAfterViewChecked(): void {
    // this._title = '您好';  // 报错
  }
}
