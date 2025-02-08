import { KeyRepository } from 'src/modules/keys/repositories/keyRepository';
import { Purchase } from '../../entities/purchace';
import { PurchaseRepository } from '../../repositories/purchaceRepository';
import { Injectable } from '@nestjs/common';

interface CreatePurchaseRequest {
  userId: string;
  productId: string;
}

@Injectable()
export class CreatePurchaseUseCase {
  constructor(
    private purchaseRepository: PurchaseRepository,
    private keyRepository: KeyRepository,
  ) {}

  async execute({ userId, productId }: CreatePurchaseRequest) {
    const availableKey = await this.keyRepository.findUnusedKeyByProductId(productId);

    if (!availableKey) {
      throw new Error('No available keys for this product');
    }

    availableKey.markAsUsed();

    const purchase = new Purchase({
      userId,
      productId,
      keyId: availableKey.id,
    });

    try {
      await this.purchaseRepository.create(purchase, userId);
    } catch (error) {
      throw new Error('Erro ao criar a compra: ' + error.message);
    }

    return purchase;
  }
}
