'use client';
import React, { useEffect, useState } from 'react';
import NavBarLink from '../NavBarLink';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // useEffect(() => {
  //     console.log(pathname);
  //     const timeout = setTimeout(() => {
  //         switch (pathname) {
  //             case '/': return router.push("/resumo");
  //             case '/resumo': return router.push("/vendasdia");
  //             case '/vendasdia': return router.push("/vendasmes");
  //             case '/vendasmes': return router.push("/vendasano");
  //             case '/vendasano': return router.push("/evolucao");
  //             case '/evolucao': return router.push("/");
  //             default: return false;
  //         };
  //     }, 15000);
  //     return () => clearTimeout(timeout);
  // }, [pathname])

  return (
    <div className="border-b border-b-white">
      <div className="container m-auto flex items-center justify-between h-14">
        <div className="w-28">
          <Link href="/">
            <Image src="/apptv/logo/logo_solar.png" width="100" height="40" alt="" />
          </Link>
        </div>
        <ul className="flex-1 ml-4 gap-4 flex items-center justify-start">
          <NavBarLink label="Acompanhamento" url="/resumo" />
          <NavBarLink label="Vendas dia" url="/vendasdia" />
          <NavBarLink label="Vendas mês" url="/vendasmes" />
          <NavBarLink label="Vendas ano" url="/vendasano" />
          <NavBarLink label="Evolução do Mês" url="/evolucao" />
        </ul>
        <div className="border-2 border-solar-green-light rounded px-4 py-1">
          <p className="text-base font-medium text-solar-gray-light drop-shadow">
            Acompanhamento de Vendas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
