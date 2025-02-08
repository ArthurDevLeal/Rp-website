import { Product } from 'src/modules/producuts/entities/product';

export class ProductViewModel {
  static toHttp({ bannerSrc, createdAt, id, price, title, type }: Product) {
    return {
      id,
      bannerSrc,
      title,
      price,
      type,
      createdAt,
    };
  }
}
