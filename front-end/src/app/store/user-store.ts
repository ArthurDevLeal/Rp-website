import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  role: "user" | "admin";
}

interface UserStore {
  createUser: (
    email: string,
    name: string,
    password: string
  ) =>
    | { id: string; name: string; email: string; createdAt: string }
    | { statusCode: number; message: string };

  signIn: (
    email: string,
    password: string
  ) => { access_token: string } | { message: string; error: string; statusCode: string };
}

export const useShopCartStore = create<UserStore>((set, get) => ({
  user: {},
}));
