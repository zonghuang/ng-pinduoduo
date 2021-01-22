import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Channel, ImageSlider } from 'src/app/shared/components';
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
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}

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
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
