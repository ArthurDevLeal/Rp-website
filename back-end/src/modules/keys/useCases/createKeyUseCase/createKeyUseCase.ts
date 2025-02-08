import { Injectable } from '@nestjs/common';
import { Key } from '../../entities/key';
import { KeyRepository } from '../../repositories/keyRepository';

interface CreateKeyRequest {
  keyValue: string;
  productId: string;
}

@Injectable()
export class CreateKeyUseCase {
  constructor(private keyRepository: KeyRepository) {}

  async execute({ keyValue, productId }: CreateKeyRequest) {
    if (!keyValue || !productId) {
      throw new Error('keyValue e productId são obrigatórios.');
    }

    const key = new Key({
      keyValue,
      productId,
      isUsed: false,
    });

    try {
      await this.keyRepository.create(key);
    } catch (error) {
      throw new Error('Erro ao criar a chave: ' + error.message);
    }

    return key;
  }
}
