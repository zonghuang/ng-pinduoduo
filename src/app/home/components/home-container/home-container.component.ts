import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TopMenu } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;

  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter((params) => params.has('tabLink')),
      map((params) => params.get('tabLink'))
    );
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
