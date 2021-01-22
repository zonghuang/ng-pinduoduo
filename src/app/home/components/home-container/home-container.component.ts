import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ImageSliderComponent, TopMenu } from 'src/app/shared/components';
import { token } from '../../services';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  topMenus: TopMenu[] = [];

  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string
  ) {
    this.service.getTabs().subscribe((tabs) => {
      this.topMenus = tabs;
    });
    console.log(this.baseUrl);
  }

  ngOnInit(): void {}

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
