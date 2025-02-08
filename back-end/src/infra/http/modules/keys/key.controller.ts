import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';
import { CreateKeyUseCase } from 'src/modules/keys/useCases/createKeyUseCase/createKeyUseCase';
import { GetUnusedKeysByProductIdUseCase } from 'src/modules/keys/useCases/getUnusedKeyByProductIdUseCase/getUnusedKeyByProductIdUseCase';
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { CreateKeyBody } from './dtos/createKeyBody';
import { KeyViewModel } from './viewModel/keyViewModel';

@Controller('keys')
export class KeyController {
  constructor(
    private createKeyUseCase: CreateKeyUseCase,
    private getUnusedKeysByProductIdUseCase: GetUnusedKeysByProductIdUseCase,
  ) {}

  @Post()
  async createKey(
    @Request() request: AuthenticatedRequestModel,
    @Body() body: CreateKeyBody,
  ) {
    const key = await this.createKeyUseCase.execute({
      keyValue: body.keyValue,
      productId: body.productId,
    });

    return KeyViewModel.toHttp(key);
  }

  @Get('unused')
  async getUnusedKeys(
    @Request() request: AuthenticatedRequestModel,
    @Query('productId') productId: string,
  ) {
    const key = await this.getUnusedKeysByProductIdUseCase.execute({
      productId,
    });

    return KeyViewModel.toHttp(key);
  }
}
