import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { SigninBody } from '../dtos/SinginBody';

@Injectable()
export class SigninDtoValidadeMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    const signinBody = new SigninBody();
    signinBody.email = body.email;
    signinBody.password = body.password;

    const validations = await validate(signinBody);
    if (validations.length) {
      throw new BadRequestException(validations);
    }
    next();
  }
}
