import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/modules/producuts/repositories/producutRepository';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaProductRepository } from './prisma/repositories/prismaProductRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { PrismaKeyRepository } from './prisma/repositories/prismaKeyRepository';
import { PrismaPurchaseRepository } from './prisma/repositories/prismaPurchaceRepository';
import { KeyRepository } from 'src/modules/keys/repositories/keyRepository';
import { PurchaseRepository } from 'src/modules/purchases/repositories/purchaceRepository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: ProductRepository, useClass: PrismaProductRepository },
    { provide: KeyRepository, useClass: PrismaKeyRepository },
    { provide: PurchaseRepository, useClass: PrismaPurchaseRepository },
  ],
  exports: [
    UserRepository,
    ProductRepository,
    KeyRepository,
    PurchaseRepository,
  ],
})
export class DataBaseModule {}
