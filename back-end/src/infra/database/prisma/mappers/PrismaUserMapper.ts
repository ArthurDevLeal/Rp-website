import { User as UserRaw } from '@prisma/client';
import { User } from 'src/modules/user/entities/User';
export class PrismaUserMapper {
  static toPrisma({
    email,
    name,
    password,
    id,
    createdAt,
    role,
  }: User): UserRaw {
    return {
      id,
      name,
      password,
      email,
      createdAt,
      role,
    };
  }
  static toDomain({ id, ...userData }: UserRaw): User {
    return new User({ ...userData }, id);
  }
}
