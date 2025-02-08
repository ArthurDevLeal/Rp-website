import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repositories/producutRepository';

interface GetManyProduct {
  productId: string;
  page?: string;
  perPage?: string;
}
@Injectable()
export class GetManyProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ productId, page, perPage }: GetManyProduct) {
    const DEFAULT_PAGE = 1;
    const DEFAULT_PER_PAGE = 20;
    const currentPage = Number(page) || DEFAULT_PAGE;
    const currentPerPage = Number(perPage) || DEFAULT_PER_PAGE;

    const products = await this.productRepository.findMany(
      currentPage,
      currentPerPage,
    );
    return products;
  }
}
