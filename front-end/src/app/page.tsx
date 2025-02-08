"use client";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaInstagram, FaUsers, FaYoutube } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import { SiCashapp, SiOpslevel } from "react-icons/si";
import Footer from "./components/footer/footer";
import { NavBar } from "./components/navbar";

const navData = [
  { Icon: RiVipDiamondFill, name: "Vips", target: "vip", isActive: false },
  { Icon: SiOpslevel, name: "Leveis", target: "level", isActive: false },
  { Icon: SiCashapp, name: "Dinheiro", target: "dinheiro", isActive: false },
  { Icon: FaUsers, name: "Corp/Fac", target: "corp-fac", isActive: false },
];

export default function Home() {
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

      <div className="px-6 md:mx-20">
        <main className="max-w-[1280px] mx-auto min-h-[calc(100vh-100px)] flex flex-col md:flex-row gap-8 md:justify-between md:items-center py-8 md:py-0">
          <img
            src="Logo.webp"
            className="flex-1 object-cover size-[600px] rounded-xl"
            alt="Placeholder"
          />

          <div className="flex flex-col justify-center flex-1 gap-4 md:gap-2">
            <p className="text-xl font-semibold">Nossas</p>
            <h1 className="text-3xl font-semibold text-white">Redes sociais</h1>
            <p>Sigam-nos nas redes sociais e fique por dentro de todas as novidades da MainStreet</p>
            <div className="grid grid-cols-3 gap-4 md:gap-2">
              <Link href={"#"} className="aspect-square">
                <div className="flex items-center justify-center h-full rounded-lg group bg-neutral-900 hover:bg-neutral-800 transition-colors outline outline-neutral-800 outline-1">
                  <FaDiscord size={32} className="group-hover:text-red-500 transition-colors md:size-24" />
                </div>
              </Link>
              <Link href={"#"} className="aspect-square">
                <div className="flex items-center justify-center h-full rounded-lg group bg-neutral-900 hover:bg-neutral-800 transition-colors outline outline-neutral-800 outline-1">
                  <FaInstagram size={32} className="group-hover:text-red-500 transition-colors md:size-24" />
                </div>
              </Link>
              <Link href={"#"} className="aspect-square">
                <div className="flex items-center justify-center h-full rounded-lg group bg-neutral-900 hover:bg-neutral-800 transition-colors outline outline-neutral-800 outline-1">
                  <FaYoutube size={32} className="group-hover:text-red-500 transition-colors md:size-24" />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </React.Fragment>
  );
}
