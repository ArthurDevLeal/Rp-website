import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { DataBaseModule } from './infra/database/database.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.Guard';
import { UserModule } from './infra/http/modules/user/user.module';
import { ProductModule } from './infra/http/modules/producuts/producut.module';
import { KeyModule } from './infra/http/modules/keys/key.module';
import { PurchaseModule } from './infra/http/modules/purchace/purchase.module';

@Module({
  imports: [
    UserModule,
    DataBaseModule,
    AuthModule,
    ProductModule,
    KeyModule,
    PurchaseModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
