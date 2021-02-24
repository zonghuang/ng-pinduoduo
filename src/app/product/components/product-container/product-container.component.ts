import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { OrderService } from '../../services';
// import { DialogService } from 'src/app/dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  subs: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: OrderService,
    // private dialogService: DialogService
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter((params) => params.has('productId')),
      map((params) => params.get('productId'))
    );
    this.variants$ = productId$.pipe(
      switchMap((productId) =>
        this.service.getProductVariantsByProductId(productId)
      )
    );
  }

  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    /*
    const top = 40;
    // 传入 Output，EventEmitter 其实就是一个 Subject
    const formSubmitted = new EventEmitter();
    this.subs.push(
      formSubmitted.subscribe((ev) => {
        this.dialogService.saveData(ev);
        this.router.navigate(['/orders', 'confirm']);
      })
    );
    const selected = new EventEmitter<number>();
    this.subs.push(
      selected.subscribe((idx) => {
        console.log(idx);
        this.selectedIndex = idx;
      })
    );
    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex,
      },
      outputs: { formSubmitted, selected },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`,
      },
    });
    */
  }

}
