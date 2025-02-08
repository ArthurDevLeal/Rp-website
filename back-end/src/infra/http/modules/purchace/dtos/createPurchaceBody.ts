import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePurchaseBody {
  @IsNotEmpty()
  @IsString()
  productId: string;
}
