import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { UserController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserRepository } from 'src/infra/database/prisma/repositories/PrismaUserRepository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaService,
    CreateUserUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class UserModule {}
