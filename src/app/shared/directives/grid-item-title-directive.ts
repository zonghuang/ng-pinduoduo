import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective {
  @HostBinding('style.grid-area') @Input() appGridItemTitle = '0.5rem';
  @HostBinding('style.font-size') area = 'title';
  @HostBinding('style.white-space') wrap = 'nowrap';
}
