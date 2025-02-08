"use client";
import { usePathname, useRouter } from "next/navigation";

export default function NavLogo() {
  const pathname = usePathname();

  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <img src="/Logo.webp" alt="" className="w-14 h-14 rounded-xl " />

      <h2
        onClick={() => router.push("/")}
        className={`text-[22px] uppercase font-bold cursor-pointer hover:text-red-500 transition-colors ${
          pathname === "/" ? "text-red-500" : ""
        }`}
      >
        Mainstreet
      </h2>
    </div>
  );
}
