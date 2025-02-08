"use client";

import { useShopCartStore } from "@/app/store/shop-cart-store";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { FaPix } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SiMercadopago } from "react-icons/si";
import ShopCartProduct from "./shop-cart-product";

export default function ShopCartRoot({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { items, getTotalPrice, clearCart } = useShopCartStore();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isCartOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-end pb-16 justify-center bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.5, opacity: 0, translateY: -40 }}
            animate={{ scale: 1, opacity: 1, translateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, translateY: -40 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col p-4 border border-neutral-900 rounded-lg bg-[#080810] max-w-md w-full mx-4 z-50"
          >
            <div className="flex justify-between items-center gap-8">
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold">Carrinho</p>
                <p className="text-lg text-red-500 font-semibold">({items.length}) Produtos</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="flex size-8 rounded-md border border-neutral-900 items-center justify-center opacity-80 hover:bg-neutral-900 transition-colors"
              >
                <IoClose size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-2 py-2 mt-4 border-y border-neutral-900">
              {items.map((item) => (
                <ShopCartProduct key={item.id} {...item} />
              ))}

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Resumo</p>
                  <p className="opacity-80">Valor dos produtos:</p>
                </div>

                <p className="text-lg font-semibold text-red-500 self-end">R$ {getTotalPrice().toFixed(2)}</p>
              </div>
            </div>

            <div className="flex flex-col pt-2">
              <p className="text-lg font-semibold">Métodos de pagamento</p>
              <p className="opacity-80">Selecione seu método de pagamento:</p>

              <div className="flex items-center gap-2 justify-between mt-2">
                <button className="flex flex-1 py-2 items-center justify-center rounded-md group bg-neutral-900 border transition-colors border-neutral-800 hover:bg-neutral-800 cursor-pointer">
                  <FaPix size={22} className="group-hover:text-red-500 transition-colors" />
                </button>
                <button className="flex flex-1 py-2 items-center justify-center rounded-md group bg-neutral-900 border transition-colors border-neutral-800 hover:bg-neutral-800 cursor-pointer">
                  <SiMercadopago size={22} className="group-hover:text-red-500 transition-colors" />
                </button>
              </div>

              <button
                className="w-full flex items-center justify-center py-2 bg-red-500 text-lg font-bold mt-2 rounded-md hover:bg-red-600 transition-colors"
                onClick={clearCart}
              >
                Finalizar compra
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
