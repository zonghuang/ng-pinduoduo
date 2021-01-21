import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeAuxComponent,
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
} from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
  ],
  // providers: [HomeService, { provide: token, useValue: 'http://local.dev' }],
  providers: [{ provide: token, useValue: 'http://local.dev' }],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
