import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { CreatePurchaseUseCase } from 'src/modules/purchases/useCases/createPurchaceUseCase/createPurchaceUseCase';
import { FindPurchasesByUserIdUseCase } from 'src/modules/purchases/useCases/getUserPurchaceUsecase/getUserPurchaceUseCase';
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { CreatePurchaseBody } from './dtos/createPurchaceBody';
import { PurchaseViewModel } from './viewModel/purchaceViewModel';

@Controller('purchases')
export class PurchaseController {
  constructor(
    private createPurchaseUseCase: CreatePurchaseUseCase,
    private findPurchasesByUserIdUseCase: FindPurchasesByUserIdUseCase,
  ) {}

  @Post()
  async createPurchase(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreatePurchaseBody,
  ) {
    const { productId } = body;
    const { user } = request;

    try {
      const purchase = await this.createPurchaseUseCase.execute({
        userId: user.id,
        productId,
      });
      return PurchaseViewModel.toHttp(purchase);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('my-purchases')
  async getMyPurchases(@Request() request: AuthenticatedRequestModel) {
    const { user } = request;

    try {
      const purchases = await this.findPurchasesByUserIdUseCase.execute({
        userId: user.id,
      });
      return purchases.map(PurchaseViewModel.toHttp);
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar compras do usuário: ' + error.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
