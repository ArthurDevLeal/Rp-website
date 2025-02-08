import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  src: string;
}

interface ShopCartStore {
  items: CartItem[];
  addItem: (item: CartItem, showToast: (message: string) => void) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useShopCartStore = create<ShopCartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item, showToast) => {
        set((state) => ({ items: [...state.items, item] }));
        showToast(`${item.name} adicionado ao carrinho`);
      },
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => get().items.reduce((total, item) => total + item.price, 0),
    }),
    {
      name: "shop-cart-storage",
    }
  )
);
