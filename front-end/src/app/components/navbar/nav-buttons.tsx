"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { SiRockstargames } from "react-icons/si";
import ShopCartRoot from "../shop-cart/shop-cart-root";

export default function NavButtons({ mobileView = false }) {
  const [cartOpen, setCartOpen] = useState(false);

  const buttonClasses = mobileView ? "w-full justify-center" : "";

  return (
    <div className={`flex ${mobileView ? "flex-col space-y-4" : "items-center gap-2"}`}>
      <button
        onClick={() => setCartOpen(true)}
        className={`flex items-center gap-3 justify-center px-6 rounded border border-neutral-800 hover:bg-neutral-800 transition-colors py-3 ${buttonClasses}`}
      >
        <FaShoppingCart size={16} />
        <p className="font-semibold uppercase text-[16px] opacity-90">Carrinho</p>
      </button>
      <button
        className={`flex items-center gap-3 justify-center px-6 rounded bg-gradient-to-br from-red-800 hover:bg-red-800/60 transition-colors py-3 ${buttonClasses}`}
      >
        <SiRockstargames size={20} />
        <p className="font-bold uppercase text-[16px] opacity-90">Jogar agora</p>
      </button>
      <div
        className={`flex items-center gap-3 justify-center px-6 rounded-md hover:text-red-500 transition-colors py-3 ${buttonClasses}`}
      >
        <button className="font-semibold uppercase text-[16px] opacity-90">Entrar</button>
      </div>
      <ShopCartRoot isCartOpen={cartOpen} setIsCartOpen={setCartOpen} />
    </div>
  );
}
