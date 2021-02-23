import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

export interface ImageSlider {
  id: number;
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;

  constructor(private rd2: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.intervalBySeconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
    /*
    let i = 0;
    setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        ((++i % this.sliders.length) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds);
    */
  }

  // 处理数组越界
  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio =
      (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

  // 处理内存泄漏
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
