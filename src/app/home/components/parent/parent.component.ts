import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
  constructor() {}

  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev: any) =>
      console.log(ev.target.value)
    );
    console.log('hello');
  }

  handleClick() {}
}
