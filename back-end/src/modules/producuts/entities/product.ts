import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface ProductProps {
  title: string;
  price: string;
  bannerSrc: string;
  createdAt: Date;
  type: string;
}

export class Product {
  private props: ProductProps;
  _id: string;

  constructor(props: Replace<ProductProps, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }
  get title(): string {
    return this.props.title;
  }
  set title(title: string) {
    this.props.title = title;
  }
  get type(): string {
    return this.props.type;
  }
  set type(type: string) {
    this.props.type = type;
  }
  get price(): string {
    return this.props.price;
  }
  set price(price: string) {
    this.props.price = price;
  }
  get bannerSrc(): string {
    return this.props.bannerSrc;
  }
  set bannerSrc(bannerSrc: string) {
    this.props.bannerSrc = bannerSrc;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
