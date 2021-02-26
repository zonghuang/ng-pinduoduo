import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components';

export * from './components';
export * from './services';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class DialogModule {}

