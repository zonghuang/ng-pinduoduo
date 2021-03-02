import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Ad, Channel, ImageSlider, Product } from 'src/app/shared';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  selectedTabLink$: Observable<string>;
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private service: HomeService) {}

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter((params) => params.has('tabLink')),
      map((params) => params.get('tabLink'))
    );
    this.sub = this.route.queryParamMap.subscribe((params) => {
      console.log('查询参数：', params);
    });
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap((tab) => this.service.getAdByTab(tab)),
      filter((ads) => ads.length > 0),
      map((ads) => ads[0])
    );
    this.products$ = this.selectedTabLink$.pipe(
      switchMap((tab) => this.service.getProductByTab(tab))
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
