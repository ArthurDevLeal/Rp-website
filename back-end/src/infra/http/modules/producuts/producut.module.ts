import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/infra/database/database.module';
import { CreateProductUseCase } from 'src/modules/producuts/useCases/createProductUseCase/createProductUseCase';
import { DeleteProductUseCase } from 'src/modules/producuts/useCases/deleteProductUseCase/deleteProductUseCase';
import { EditProductUseCase } from 'src/modules/producuts/useCases/editProductUseCase/editProductUseCase';
import { GetManyProductUseCase } from 'src/modules/producuts/useCases/getManyProductUseCase/getManyProductUseCase';
import { GetProductUseCase } from 'src/modules/producuts/useCases/getProductUseCase/getProductUseCase';
import { ProductViewModel } from './viewModels/productViewModel';
import { ProducutController } from './producut.controler';
import { GetProductByTypeUseCase } from 'src/modules/producuts/useCases/getProductByTypeUseCase/getProductUseCase';

@Module({
  controllers: [ProducutController],
  imports: [DataBaseModule],
  providers: [
    CreateProductUseCase,
    EditProductUseCase,
    DeleteProductUseCase,
    GetProductUseCase,
    GetManyProductUseCase,
    GetProductByTypeUseCase,
  ],
})
export class ProductModule {}
