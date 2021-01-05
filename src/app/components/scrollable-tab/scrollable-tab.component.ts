import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
})
export class ScrollableTabComponent implements OnInit, OnChanges, DoCheck {
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  constructor() {
    console.log('组件构造调用');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变', changes);
  }

  ngOnInit(): void {
    console.log('组件初始化');
  }

  ngDoCheck(): void {
    console.log('组件赃值检测');
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
