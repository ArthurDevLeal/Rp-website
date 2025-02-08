import { Product } from '../entities/product';

export abstract class ProductRepository {
  abstract create(Product: Product, userId: string): Promise<void>;
  abstract findById(id: string): Promise<Product | null>;
  abstract findByType(type: string): Promise<Product[] | null>;
  abstract delete(id: string, userId: string): Promise<void>;
  abstract save(Product: Product, userId: string): Promise<void>;
  abstract findMany(currentPage: number, perPage: number): Promise<Product[]>;
}
