import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../repositories/producutRepository';

interface EditProduct {
  productId: string;
  title: string;
  price: string;
  bannerSrc: string;
  userId: string;
}
@Injectable()
export class EditProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ bannerSrc, price, productId, title, userId }: EditProduct) {
    const product = await this.productRepository.findById(productId);
    if (!product) throw new NotFoundException();
    product.title = title;
    product.bannerSrc = bannerSrc;
    product.price = price;

    await this.productRepository.save(product, userId);

    return product;
  }
}
