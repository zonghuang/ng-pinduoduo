import { ImageSlider, Product } from 'src/app/shared';

export interface ProductVariant {
  id: number;
  product: Product;
  name: string;
  price: number;
  listPrice: number;
  productVariantImages: ImageSlider;
}
