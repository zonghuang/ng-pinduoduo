import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeAuxComponent,
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
} from './components';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
  ],
  // providers: [PurchaseOeder],
  // providers: [
  //   {
  //     provide: Product,
  //     useFactory: () => {
  //       return new Product('小米手机', '黑色');
  //     },
  //     deps: [],
  //   },
  // ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
