import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidadeUserUseCase } from '../useCases/validadeUserUseCase/validadeUserUseCase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validadeUserUseCase: ValidadeUserUseCase) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    return await this.validadeUserUseCase.execute({ email, password });
  }
}
