import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  selectedTabLink;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log('路径参数：', params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    });
    this.route.queryParamMap.subscribe((params) => {
      console.log('查询参数：', params);
    });
    this.service.getBanners().subscribe((banners) => {
      this.imageSliders = banners;
      this.cd.markForCheck();
    });
    this.service.getChannels().subscribe((channels) => {
      this.channels = channels;
      this.cd.markForCheck();
    });
  }
}
