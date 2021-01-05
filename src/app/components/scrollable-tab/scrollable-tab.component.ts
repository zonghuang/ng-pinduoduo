import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
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
})
export class ScrollableTabComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
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

  ngAfterContentInit(): void {
    console.log('组件内容初始化');
  }

  ngAfterContentChecked(): void {
    console.log('组件内容赃值检测');
  }

  ngAfterViewInit(): void {
    console.log('组件视图初始化');
  }

  ngAfterViewChecked(): void {
    console.log('组件视图赃值检测');
  }

  ngOnDestroy(): void {
    console.log('组件销毁');
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
