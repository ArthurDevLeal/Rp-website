import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../repositories/producutRepository';

interface DeleteProducutRequest {
  productId: string;
  userId: string;
}
@Injectable()
export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ productId, userId }: DeleteProducutRequest) {
    const product = await this.productRepository.findById(productId);
    if (!product) throw new NotFoundException();
    await this.productRepository.delete(productId, userId);
  }
}
