import { Key as KeyRaw } from '@prisma/client';
import { Key } from 'src/modules/keys/entities/key';

export class PrismaKeyMapper {
  static toPrisma({ id, keyValue, productId, isUsed }: Key): KeyRaw {
    return {
      id,
      keyValue,
      productId,
      isUsed,
    };
  }

  static toDomain({ id, ...keyData }: KeyRaw): Key {
    return new Key({ ...keyData }, id);
  }
}
