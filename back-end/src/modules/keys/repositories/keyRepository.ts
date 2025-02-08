import { Key } from '../entities/key';

export abstract class KeyRepository {
  abstract create(key: Key): Promise<Key>;
  abstract findUnusedKeyByProductId(productId: string): Promise<Key | null>;
}
