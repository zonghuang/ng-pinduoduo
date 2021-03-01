import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConfirmOrderComponent, GroupItemComponent, GroupShortListComponent, PaymentComponent, ProductContainerComponent } from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ConfirmOrderComponent,
    PaymentComponent,
  ],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
