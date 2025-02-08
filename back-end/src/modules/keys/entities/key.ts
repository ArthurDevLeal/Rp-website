import { randomUUID } from 'crypto';

interface KeyProps {
  keyValue: string;
  productId: string;
  isUsed: boolean;
}

export class Key {
  private props: KeyProps;
  _id: string;

  constructor(props: KeyProps, id?: string) {
    this.props = {
      ...props,
      isUsed: props.isUsed || false,
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get keyValue(): string {
    return this.props.keyValue;
  }

  set keyValue(keyValue: string) {
    this.props.keyValue = keyValue;
  }

  get productId(): string {
    return this.props.productId;
  }

  set productId(productId: string) {
    this.props.productId = productId;
  }

  get isUsed(): boolean {
    return this.props.isUsed;
  }

  markAsUsed() {
    this.props.isUsed = true;
  }
}
