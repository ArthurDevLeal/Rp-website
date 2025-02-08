import { CartItem, useShopCartStore } from "@/app/store/shop-cart-store";
import { FaTrashCan } from "react-icons/fa6";

export default function ShopCartProduct({ id, name, price, src }: CartItem) {
  const removeItem = useShopCartStore((state) => state.removeItem);

  return (
    <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-md p-2">
      <div className="flex items-center gap-2">
        <img src={src || "/placeholder.svg"} alt={name} className="size-16 object-cover rounded-md" />
        <div className="flex flex-col gap-1 justify-center">
          <p className="font-semibold">{name}</p>
          <p className="opacity-80">R$ {price.toFixed(2)}</p>
        </div>
      </div>
      <button
        className="flex size-10 rounded-md border border-neutral-800 items-center justify-center opacity-80 hover:bg-neutral-800 transition-colors"
        onClick={() => removeItem(id)}
      >
        <FaTrashCan size={20} />
      </button>
    </div>
  );
}
