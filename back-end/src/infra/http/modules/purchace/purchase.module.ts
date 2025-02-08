import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/infra/database/database.module';
import { CreatePurchaseUseCase } from 'src/modules/purchases/useCases/createPurchaceUseCase/createPurchaceUseCase';
import { FindPurchasesByUserIdUseCase } from 'src/modules/purchases/useCases/getUserPurchaceUsecase/getUserPurchaceUseCase';
import { PurchaseController } from './purchace.controller';

@Module({
  controllers: [PurchaseController],
  imports: [DataBaseModule],
  providers: [CreatePurchaseUseCase, FindPurchasesByUserIdUseCase],
})
export class PurchaseModule {}
