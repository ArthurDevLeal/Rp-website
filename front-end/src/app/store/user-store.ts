import { create } from "zustand";
import axios from "axios";

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface UserStore {
  user: User | null;
  token: string | null;
  createUser: (email: string, name: string, password: string) => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,

  createUser: async (email, name, password) => {
    try {
      const { data } = await axios.post<User>("/users", { email, name, password });

      set({ user: data });
      return data;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return null;
    }
  },

  signIn: async (email, password) => {
    try {
      const { data } = await axios.post<{ access_token: string }>("/signin", { email, password });

      set({ token: data.access_token });

      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  },

  logout: () => {
    set({ user: null, token: null });
  },
}));
