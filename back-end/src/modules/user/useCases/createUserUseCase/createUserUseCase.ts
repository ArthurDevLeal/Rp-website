import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private UserRepository: UserRepository) {}
  async execute({ email, name, password }: CreateUserRequest) {
    const user = new User({
      name,
      email,
      password: await hash(password, 10),
      role: 'user',
    });
    await this.UserRepository.create(user);
    return user;
  }
}
