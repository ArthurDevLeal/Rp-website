import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SigninUseCase } from 'src/modules/auth/useCases/signinUseCase/signinUseCase';
import { Public } from './decorators/isPublic';
import { LocalAuthGuard } from './guards/localAuth.Guard';
import { AuthRequestModel } from './models/authRequestModel';
import { AuthenticatedRequestModel } from './models/authenticatedRequestModel';

@Controller()
export class AuthController {
  constructor(private singinUseCase: SigninUseCase) {}

  @Public()
  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() request: AuthRequestModel) {
    const access_token = await this.singinUseCase.execute({
      user: request.user,
    });
    return { access_token };
  }

  @Get('test')
  async Teste(@Request() request: AuthenticatedRequestModel) {
    return request.user;
  }
}
