import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductBody {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  price: string;
  @IsNotEmpty()
  @IsString()
  bannerSrc: string;
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
