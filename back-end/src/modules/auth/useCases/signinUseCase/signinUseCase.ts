import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/entities/User';
import { UserPayload } from '../../models/UserPayload';

interface SigninRequest {
  user: User;
}

@Injectable()
export class SigninUseCase {
  constructor(private jwtService: JwtService) {}
  async execute({ user }: SigninRequest) {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt.toJSON(),
    };

    const jwtToken = this.jwtService.sign(payload);
    return jwtToken;
  }
}
