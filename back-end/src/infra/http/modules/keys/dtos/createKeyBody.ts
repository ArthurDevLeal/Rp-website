import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKeyBody {
  @IsNotEmpty()
  @IsString()
  keyValue: string;

  @IsNotEmpty()
  @IsString()
  productId: string;
}
