import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DialogService } from './dialog';
import { TabItem } from './shared/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '拼多多';
  selectedIndex$: Observable<number>;
  data$: Observable<any>;

  constructor(private router: Router, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map((tab) => this.getSelectedIndex(tab))
    );
    this.data$ = this.dialogService.getData();
  }

  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }

  getSelectedIndex(tab: string) {
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0;
  }

  removeDialog() {
    this.dialogService.close();
  }
}
