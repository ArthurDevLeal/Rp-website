import { Purchase } from 'src/modules/purchases/entities/purchace';
import { PrismaService } from '../prisma.service';
import { PurchaseRepository } from 'src/modules/purchases/repositories/purchaceRepository';
import { PrismaPurchaseMapper } from '../mappers/prismaPurchaceMapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPurchaseRepository implements PurchaseRepository {
  constructor(private prisma: PrismaService) {}

  async create(purchase: Purchase): Promise<void> {
    const purchaseRaw = PrismaPurchaseMapper.toPrisma(purchase);
    await this.prisma.purchase.create({ data: purchaseRaw });
  }

  async findByUserId(userId: string): Promise<Purchase[]> {
    const purchasesRaw = await this.prisma.purchase.findMany({
      where: { userId },
    });

    return purchasesRaw.map(PrismaPurchaseMapper.toDomain);
  }
}
