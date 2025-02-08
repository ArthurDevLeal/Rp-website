import { Injectable } from '@nestjs/common';
import { PurchaseRepository } from '../../repositories/purchaceRepository';

interface FindPurchasesByUserIdRequest {
  userId: string;
}
@Injectable()
export class FindPurchasesByUserIdUseCase {
  constructor(private purchaseRepository: PurchaseRepository) {}

  async execute({ userId }: FindPurchasesByUserIdRequest) {
    const purchases = await this.purchaseRepository.findByUserId(userId);
    return purchases;
  }
}
