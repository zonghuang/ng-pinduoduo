import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupItemComponent implements OnInit {
  @Input() order: GroupOrder;
  startDate: Date;
  futureDate: Date;

  constructor() {}

  ngOnInit() {
    this.startDate = this.order.startAt;
    this.futureDate = new Date(this.startDate.getTime() + 24 * 3600 * 1000);
  }
}
