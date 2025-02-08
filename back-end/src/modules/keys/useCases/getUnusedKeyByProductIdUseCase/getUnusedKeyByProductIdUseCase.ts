import { Injectable } from '@nestjs/common';
import { KeyRepository } from '../../repositories/keyRepository';

interface GetUnusedKeysByProductIdRequest {
  productId: string;
}
@Injectable()
export class GetUnusedKeysByProductIdUseCase {
  constructor(private keyRepository: KeyRepository) {}

  async execute({ productId }: GetUnusedKeysByProductIdRequest) {
    const key = await this.keyRepository.findUnusedKeyByProductId(productId);

    if (!key) {
      throw new Error('No unused keys available for this product');
    }

    return key;
  }
}
