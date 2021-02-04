import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad, Channel, ImageSlider, Product, TopMenu } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
  }

  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
  }

  getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
  }

  getAdByTab(tab: string) {
    return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
      params: { categories_like: tab },
    });
  }

  getProductByTab(tab: string) {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
      params: { categories_like: tab },
    });
  }
}
