import { Purchase as PurchaseRaw } from '@prisma/client';
import { Purchase } from 'src/modules/purchases/entities/purchace';

export class PrismaPurchaseMapper {
  static toPrisma({
    id,
    userId,
    productId,
    keyId,
    purchasedAt,
  }: Purchase): PurchaseRaw {
    return {
      id,
      userId,
      productId,
      keyId,
      purchasedAt,
    };
  }

  static toDomain({ id, ...purchaseData }: PurchaseRaw): Purchase {
    return new Purchase({ ...purchaseData }, id);
  }
}
