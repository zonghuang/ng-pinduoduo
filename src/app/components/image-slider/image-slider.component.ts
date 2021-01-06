import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider);
  }

  ngAfterViewInit(): void {
    console.log('ngOnInit', this.imgs);
    // this.imgs.forEach(item => item.nativeElement.style.height='100px');
    this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px')
    });
  }

}
