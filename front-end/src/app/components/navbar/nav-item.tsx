"use client";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
type NavItemProps = {
  Icon: IconType;
  name: string;
  target: string;
  isActive: boolean;
};
export default function NavItem({ Icon, name, target, isActive }: NavItemProps) {
  const router = useRouter();
  return (
    <div
      className={`flex items-center gap-2 hover:text-red-500 transition-colors ${
        isActive ? "text-red-500" : ""
      }`}
    >
      <Icon size={20} />
      <button
        onClick={() => router.push(`/shop/${target}`)}
        className="font-bold uppercase text-[16px] opacity-90"
      >
        {name}
      </button>
    </div>
  );
}
