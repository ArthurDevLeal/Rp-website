import { Purchase } from '../entities/purchace';

export abstract class PurchaseRepository {
  abstract create(purchase: Purchase, userId: string): Promise<void>;
  abstract findByUserId(userId: string): Promise<Purchase[]>;
}
