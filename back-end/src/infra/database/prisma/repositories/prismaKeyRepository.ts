import { Injectable } from '@nestjs/common';
import { Key } from 'src/modules/keys/entities/key';
import { KeyRepository } from 'src/modules/keys/repositories/keyRepository';
import { PrismaKeyMapper } from '../mappers/prismaKeyMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaKeyRepository implements KeyRepository {
  constructor(private prisma: PrismaService) {}

  async create(key: Key): Promise<Key> {
    const keyRaw = PrismaKeyMapper.toPrisma(key);
    await this.prisma.key.create({
      data: keyRaw,
    });

    return PrismaKeyMapper.toDomain(keyRaw);
  }

  async findUnusedKeyByProductId(productId: string): Promise<Key | null> {
    try {
      const keyRaw = await this.prisma.key.findFirst({
        where: {
          productId,
          isUsed: false,
        },
      });

      if (!keyRaw) return null;

      return PrismaKeyMapper.toDomain(keyRaw);
    } catch (error) {
      throw new Error('Erro ao buscar chave não utilizada: ' + error.message);
    }
  }
}
