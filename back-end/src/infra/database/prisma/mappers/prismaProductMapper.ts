import { Product as ProductRaw } from '@prisma/client';
import { Product } from 'src/modules/producuts/entities/product';
export class PrismaProductMapper {
  static toPrisma({
    id,
    bannerSrc,
    price,
    title,
    createdAt,
    type,
  }: Product): ProductRaw {
    return {
      id,
      bannerSrc,
      title,
      price,
      createdAt,
      type,
    };
  }
  static toDomain({ id, ...productData }: ProductRaw): Product {
    return new Product({ ...productData }, id);
  }
}
