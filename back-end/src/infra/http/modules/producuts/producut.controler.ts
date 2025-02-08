import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { CreateProductUseCase } from 'src/modules/producuts/useCases/createProductUseCase/createProductUseCase';
import { DeleteProductUseCase } from 'src/modules/producuts/useCases/deleteProductUseCase/deleteProductUseCase';
import { EditProductUseCase } from 'src/modules/producuts/useCases/editProductUseCase/editProductUseCase';
import { GetManyProductUseCase } from 'src/modules/producuts/useCases/getManyProductUseCase/getManyProductUseCase';
import { GetProductByTypeUseCase } from 'src/modules/producuts/useCases/getProductByTypeUseCase/getProductUseCase';
import { GetProductUseCase } from 'src/modules/producuts/useCases/getProductUseCase/getProductUseCase';
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { CreateProductBody } from './dtos/CreateProductBody';
import { EditProductBody } from './dtos/EditProducutBody';
import { ProductViewModel } from './viewModels/productViewModel';

@Controller('Products')
export class ProducutController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private editProductUseCase: EditProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
    private getProductUseCase: GetProductUseCase,
    private getManyProductUseCase: GetManyProductUseCase,
    private getProductByTypeUseCase: GetProductByTypeUseCase,
  ) {}

  @Post()
  async createProducut(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateProductBody,
  ) {
    const { bannerSrc, price, title, type, userId } = body;
    const product = await this.createProductUseCase.execute({
      title,
      price,
      bannerSrc,
      type,
      userId,
    });

    return ProductViewModel.toHttp(product);
  }

  @Put(':productId')
  async editProduct(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: EditProductBody,
    @Param('productId') productId: string,
  ) {
    const { bannerSrc, price, title, userId } = body;
    const product = await this.editProductUseCase.execute({
      productId,
      title,
      price,
      bannerSrc,
      userId,
    });

    return ProductViewModel.toHttp(product);
  }
  @Delete(':productId')
  async deleteProduct(
    @Request() request: AuthenticatedRequestModel,
    @Param('productId') productId: string,
    @Body() userId: string,
  ) {
    await this.deleteProductUseCase.execute({
      productId,
      userId,
    });
  }
  @Get('list')
  async getManyProducts(
    @Request() request: AuthenticatedRequestModel,
    @Param('productId') productId: string,
    @Query('page') page: string,
    @Query('perPage') perPage: string,
  ) {
    const products = await this.getManyProductUseCase.execute({
      productId,
      page,
      perPage,
    });

    return products.map(ProductViewModel.toHttp);
  }
  @Get('byType')
  async getProductsByType(
    @Request() request: AuthenticatedRequestModel,
    @Query('type') type: string,
  ) {
    const products = await this.getProductByTypeUseCase.execute({
      type,
    });

    return products.map(ProductViewModel.toHttp);
  }

  @Get(':productId')
  async getProduct(
    @Request() request: AuthenticatedRequestModel,
    @Param('productId') productId: string,
  ) {
    const product = await this.getProductUseCase.execute({
      productId,
    });

    return ProductViewModel.toHttp(product);
  }
}
