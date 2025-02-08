import { Purchase } from 'src/modules/purchases/entities/purchace';

export class PurchaseViewModel {
  static toHttp({ id, userId, productId, keyId, purchasedAt }: Purchase) {
    return {
      id,
      userId,
      productId,
      keyId,
      purchasedAt,
    };
  }
}
