import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Product } from 'src/modules/producuts/entities/product';
import { ProductRepository } from 'src/modules/producuts/repositories/producutRepository';
import { PrismaProductMapper } from '../mappers/prismaProductMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}
  async create(Product: Product, userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (user?.role === 'admin') {
      const productRaw = PrismaProductMapper.toPrisma(Product);
      await this.prisma.product.create({ data: productRaw });
    } else {
      throw new UnauthorizedException();
    }
  }
  async findById(id: string): Promise<Product | null> {
    const productRaw = await this.prisma.product.findUnique({ where: { id } });
    if (!productRaw) return null;
    return PrismaProductMapper.toDomain(productRaw);
  }
  async findByType(type: string): Promise<Product[] | null> {
    const productRaw = await this.prisma.product.findMany({ where: { type } });

    if (!productRaw) return null;

    return productRaw.map(PrismaProductMapper.toDomain);
  }
  async delete(id: string, userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (user?.role === 'admin') {
      await this.prisma.product.delete({
        where: { id },
      });
    } else {
      throw new UnauthorizedException();
    }
  }
  async save(Product: Product, userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (user?.role === 'admin') {
      const productRaw = PrismaProductMapper.toPrisma(Product);

      await this.prisma.product.update({
        data: productRaw,
        where: { id: productRaw.id },
      });
    } else {
      throw new UnauthorizedException();
    }
  }
  async findMany(currentPage: number, perPage: number): Promise<Product[]> {
    const productsRaw = await this.prisma.product.findMany({
      take: perPage,
      skip: (currentPage - 1) * perPage,
    });
    return productsRaw.map(PrismaProductMapper.toDomain);
  }
}
