import { FaCopyright } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="w-full border-t border-neutral-900 mt-16 px-20 py-8">
      <div className="flex items-center gap-1">
        <FaCopyright size={20} />
        <p className="text-xl">2025 - Mainstreet Roleplay direitos reservados</p>
      </div>
      <p className="max-w-[500px] opacity-80 mt-4 text-sm">
        O MAINSTREET ROLEPLAY não é, de maneira alguma, afiliado à ou endossado pela Rockstar Games. Os
        seguintes produtos tem duração de 1 mês (VIP Start, VIP Semi, VIP Pro, Facção, Corporação, JBL,
        Personagem Privado e Veículo Privado).
      </p>
      <p className="text-lg font-semibold mt-4">
        Após a ativação de qualquer produto da loja não existe mais reembolso!
      </p>
    </footer>
  );
}