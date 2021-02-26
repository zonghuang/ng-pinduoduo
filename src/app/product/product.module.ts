import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GroupItemComponent, GroupShortListComponent, ProductAmountComponent, ProductContainerComponent, ProductVariantDialogComponent } from './components';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
  ],
  imports: [SharedModule, ProductRoutingModule],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule {}
