import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollableTabComponent {
  @Input() selectedTabLink: string;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  constructor() {
    console.log('组件构造调用');
  }

  handleSelection(index: number) {
    this.tabSelected.emit(this.menus[index]);
  }
}
