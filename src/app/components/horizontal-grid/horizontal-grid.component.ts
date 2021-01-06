import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss'],
})
export class HorizontalGridComponent implements OnInit {
  // username = '';
  private _username = '';
  @Output() usernameChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(value);
  }
}
