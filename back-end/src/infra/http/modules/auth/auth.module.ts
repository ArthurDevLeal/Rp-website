import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DataBaseModule } from 'src/infra/database/database.module';
import { JwtStrategy } from 'src/modules/auth/strategies/jwt.strategy';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { SigninUseCase } from 'src/modules/auth/useCases/signinUseCase/signinUseCase';
import { ValidadeUserUseCase } from 'src/modules/auth/useCases/validadeUserUseCase/validadeUserUseCase';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { SigninDtoValidadeMiddleware } from './middleware/signinDtoValidade.middleware';

@Module({
  imports: [
    UserModule,
    DataBaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, ValidadeUserUseCase, SigninUseCase],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SigninDtoValidadeMiddleware).forRoutes('/signin');
  }
}
