import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  selectedTabLink;

  constructor(private route: ActivatedRoute, private service: HomeService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log('路径参数：', params);
      this.selectedTabLink = params.get('tabLink');
    });
    this.route.queryParamMap.subscribe((params) => {
      console.log('查询参数：', params);
    });
    this.imageSliders = this.service.getBanners();
    this.channels = this.service.getChannels();
  }
}
