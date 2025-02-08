import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface PurchaseProps {
  userId: string;
  productId: string;
  keyId: string;
  purchasedAt: Date;
}

export class Purchase {
  private props: PurchaseProps;
  _id: string;

  constructor(
    props: Replace<PurchaseProps, { purchasedAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      purchasedAt: props.purchasedAt || new Date(),
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this.props.userId;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }

  get productId(): string {
    return this.props.productId;
  }

  set productId(productId: string) {
    this.props.productId = productId;
  }

  get keyId(): string {
    return this.props.keyId;
  }

  set keyId(keyId: string) {
    this.props.keyId = keyId;
  }

  get purchasedAt(): Date {
    return this.props.purchasedAt;
  }
}
