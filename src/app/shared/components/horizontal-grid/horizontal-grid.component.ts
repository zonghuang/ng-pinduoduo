import { Component, OnInit} from '@angular/core';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss'],
})
export class HorizontalGridComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
