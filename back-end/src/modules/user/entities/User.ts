import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface UserScheama {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  role: string;
}
export class User {
  props: UserScheama;
  _id: string;

  constructor(props: Replace<UserScheama, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }
  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.props.email = email;
  }

  get role(): string {
    return this.props.role;
  }
  set role(role: string) {
    this.props.role = role;
  }
  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.props.password = password;
  }
  get name(): string {
    return this.props.name;
  }
  set name(name: string) {
    this.props.name = name;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
