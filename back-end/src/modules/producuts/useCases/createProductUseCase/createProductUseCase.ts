import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductRepository } from '../../repositories/producutRepository';

interface CreateProducutRequest {
  title: string;
  price: string;
  bannerSrc: string;
  type: string;
  userId: string;
}
@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    title,
    price,
    bannerSrc,
    type,
    userId,
  }: CreateProducutRequest) {
    const product = new Product({
      type,
      title,
      price,
      bannerSrc,
    });
    await this.productRepository.create(product, userId);
    return product;
  }
}
