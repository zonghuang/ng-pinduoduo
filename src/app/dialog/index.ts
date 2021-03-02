import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components';
import { CloseDialogDirective } from './directives';

export * from './components';
export * from './services';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, CloseDialogDirective],
  exports: [DialogComponent, CloseDialogDirective],
})
export class DialogModule {}
