import { formatDate } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, AfterViewChecked {
  _title;
  _time;
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;

  constructor(private ngZone: NgZone, private rd: Renderer2) {
    this._title = 'hi';
  }

  ngOnInit() {}

  public get title(): string {
    console.log('赃值检测');
    return this._title;
  }

  public get time(): number {
    return this._time;
  }

  ngAfterViewChecked(): void {
    // this._title = '您好';  // 报错
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this._title = '您好';
        this._time = Date.now();
        // this.timeRef.nativeElement.innerText = Date.now();
        this.rd.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          // Date.now(),
          formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans')
        );
      }, 100);
    });
  }

  handleClick() {}
}
