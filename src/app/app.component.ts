import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link: string;
}

interface AddFunc {
  (x: number, y: number): number;
}

interface Dict {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '拼多多';
  menus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    }
  ];

  constructor() {
    this.test();
  }

  add: AddFunc = (x, y) => x + y;

  dict: Dict = {
    a: '1',
    b: '2'
  }

  test() {
    console.log(this.dict['a']);
  }

}
