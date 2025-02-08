import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/entities/User';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { PrismaUserMapper } from '../mappers/PrismaUserMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !email) return null;
    return PrismaUserMapper.toDomain(user);
  }
  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    await this.prisma.user.create({ data: userRaw });
  }
}
