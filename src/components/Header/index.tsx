'use client';
import React, { useContext, useEffect } from 'react';
import NavBarLink from '../NavBarLink';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import Profile from "../profile";
import { useAuthContext } from "@/contexts/AuthContext";
import { IoHome, IoHomeOutline } from "react-icons/io5";

const Header = () => {
  const { user } = useAuthContext();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (pathname) {
        case '/': return router.push("/resumo");
        case '/resumo': return router.push("/vendasdia");
        case '/vendasdia': return router.push("/vendasmes");
        case '/vendasmes': return router.push("/vendasano");
        case '/vendasano': return router.push("/evolucao");
        case '/evolucao': return router.push("/");
        default: return false;
      };
    }, 15000);
    return () => clearTimeout(timeout);
  }, [pathname, router]);

  const linkPortal = user?.folders?.length;

  return (
    <div className="border-b border-b-white">
      <div className="container m-auto flex items-center justify-between h-14">
        <div className="w-28">
          <Link href="/">
            <Image src="/apptv/logo/logo_solar.png" width="100" height="40" alt="" />
          </Link>
        </div>
        <ul className="flex-1 ml-4 gap-4 flex items-center justify-start">
          {linkPortal > 1 &&
            <Link
              className="flex flex-col items-center justify-center bg-solar-blue-dark border border-x-solar-gray-light p-1.5 rounded text-solar-gray-light shadow"
              title="Retornar ao Portal"
              href="http://portal.gruposolar.com.br/"
            >
              <IoHome size={22} />
            </Link>
          }
          <NavBarLink label="Acompanhamento" url="/resumo" />
          <NavBarLink label="Vendas dia" url="/vendasdia" />
          <NavBarLink label="Vendas mês" url="/vendasmes" />
          <NavBarLink label="Vendas ano" url="/vendasano" />
          <NavBarLink label="Evolução do Mês" url="/evolucao" />
        </ul>
        <div className="border-2 border-solar-green-light rounded pl-4 py-1 flex">
          <p className="text-base font-medium text-solar-gray-light drop-shadow">
            Acompanhamento de Vendas
          </p>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
