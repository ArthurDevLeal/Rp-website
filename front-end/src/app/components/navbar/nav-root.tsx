"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import { SiCashapp, SiOpslevel } from "react-icons/si";
import { NavBar } from ".";

const navData = [
  { Icon: RiVipDiamondFill, name: "Vips", target: "vip" },
  { Icon: SiOpslevel, name: "Leveis", target: "level" },
  { Icon: SiCashapp, name: "Dinheiro", target: "dinheiro" },
  { Icon: FaUsers, name: "Corp/Fac", target: "corp-fac" },
];

export default function NavBarRoot({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navDataWithActive = navData.map((item) => ({
    ...item,
    isActive: pathname.includes(item.target),
  }));

  return (
    <nav className="w-full py-4 px-6 md:px-20 border-b border-neutral-900">
      <div className="flex justify-between items-center">
        {children}

        <button
          className="md:hidden p-2 hover:text-red-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[85px] bg-neutral-900 border-b border-neutral-800 shadow-lg z-50">
          <div className="flex flex-col p-6 space-y-6">
            {navDataWithActive.map((item, index) => (
              <NavBar.Item key={index} {...item} />
            ))}
            <div className="pt-6 border-t border-neutral-900">
              <NavBar.Buttons mobileView={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
