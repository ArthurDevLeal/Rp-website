import { Key } from 'src/modules/keys/entities/key';

export class KeyViewModel {
  static toHttp({ id, keyValue, productId, isUsed }: Key) {
    return {
      id,
      keyValue,
      productId,
      isUsed,
    };
  }
}
