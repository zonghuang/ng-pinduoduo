import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .container {
        dispaly: flex;
        flex-direction: column;
        justify-content: start;
        align-items: stretch;
        height: 100%;
      }
    `,
  ],
})
export class DialogComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
