import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/infra/database/database.module';
import { CreateKeyUseCase } from 'src/modules/keys/useCases/createKeyUseCase/createKeyUseCase';
import { GetUnusedKeysByProductIdUseCase } from 'src/modules/keys/useCases/getUnusedKeyByProductIdUseCase/getUnusedKeyByProductIdUseCase';
import { KeyController } from './key.controller';

@Module({
  controllers: [KeyController],
  imports: [DataBaseModule],
  providers: [CreateKeyUseCase, GetUnusedKeysByProductIdUseCase],
})
export class KeyModule {}
