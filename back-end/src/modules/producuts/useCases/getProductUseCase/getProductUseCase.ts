import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../repositories/producutRepository';

interface GetProduct {
  productId: string;
}
@Injectable()
export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ productId }: GetProduct) {
    const product = await this.productRepository.findById(productId);
    if (!product) throw new NotFoundException();

    return product;
  }
}
