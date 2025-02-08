import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../repositories/producutRepository';

interface GetProduct {
  type: string;
}
@Injectable()
export class GetProductByTypeUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ type }: GetProduct) {
    const products = await this.productRepository.findByType(type);
    if (!products) throw new NotFoundException();

    return products;
  }
}
