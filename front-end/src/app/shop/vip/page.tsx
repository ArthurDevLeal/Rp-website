"use client";
import Footer from "@/app/components/footer/footer";
import { NavBar } from "@/app/components/navbar";
import { useToast } from "@/app/components/toast/toast-provider";
import { useShopCartStore } from "@/app/store/shop-cart-store";
import React from "react";
import { FaShoppingBag, FaUsers } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import { SiCashapp, SiOpslevel } from "react-icons/si";
import { products } from "../corp-fac/page";
type Products = {
  id: string;
  name: string;
  bannerId: string;
  discount: number;
  price: number;
  category: string;
};

const navData = [
  { Icon: RiVipDiamondFill, name: "Vips", target: "vip", isActive: true },
  { Icon: SiOpslevel, name: "Leveis", target: "level", isActive: false },
  { Icon: SiCashapp, name: "Dinheiro", target: "dinheiro", isActive: false },
  { Icon: FaUsers, name: "Corp/Fac", target: "corp-fac", isActive: false },
];
export default function Vip() {
  const { addItem } = useShopCartStore();
  const { showToast } = useToast();

  return (
    <React.Fragment>
      <NavBar.Root>
        <NavBar.Logo />

        <div className="hidden md:flex items-center gap-8">
          {navData.map((item, index) => (
            <NavBar.Item key={index} {...item} />
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <NavBar.Buttons />
        </div>
      </NavBar.Root>

      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mt-6 md:mt-10 mb-6 md:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {products.map((product: any) => (
            <div key={product.id} className="flex flex-col rounded p-4 md:p-6 lg:p-8 bg-[#0f0f0f]">
              <img
                src={product.bannerId}
                alt={product.name}
                className="object-cover w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-md"
              />

              <div className="flex items-center gap-2 mt-4 md:mt-6 rounded bg-zinc-900 py-1.5 w-fit px-4">
                <RiVipDiamondFill size={14} />
                <span className="uppercase font-bold opacity-80 text-[14px]">{product.category}</span>
              </div>

              <h1 className="text-[20px] md:text-[24px] font-bold mt-3 mb-4">{product.name}</h1>

              {product.discount > 0 && (
                <span className="text-neutral-600 uppercase font-bold text-sm md:text-base">
                  De <span className="line-through">R$ {product.discount}</span> por:
                </span>
              )}

              <h2 className="font-bold text-[22px] md:text-[26px] mt-2">R$ {product.price}</h2>

              <button
                onClick={() =>
                  addItem(
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      src: product.bannerId,
                    },
                    showToast
                  )
                }
                className="flex w-full opacity-80 mt-4 md:mt-6 items-center gap-3 justify-center px-4 md:px-6 rounded bg-indigo-900 hover:bg-indigo-700 hover:opacity-100 transition-colors py-3 group"
              >
                <FaShoppingBag size={18} className="group-hover:text-white transition-colors" />
                <p className="font-bold uppercase text-[14px] md:text-[15px] group-hover:text-white transition-colors">
                  Adicionar
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
