import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss'],
})
export class HomeGrandComponent implements OnInit {
  obj = { productId: 2, productName: 'xx手机', model: 's', type: '全面屏' };
  date: Date;
  price: number;
  data = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {
    // this.date = new Date();
    this.date = this.minusDays(new Date(), 2);
    this.price = 123.32;
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
