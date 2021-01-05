import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
