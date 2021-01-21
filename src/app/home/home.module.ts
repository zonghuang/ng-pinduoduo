import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  ChildComponent,
  HomeAuxComponent,
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  ParentComponent,
} from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ChildComponent,
    ParentComponent,
  ],
  // providers: [HomeService, { provide: token, useValue: 'http://local.dev' }],
  providers: [{ provide: token, useValue: 'http://local.dev' }],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
