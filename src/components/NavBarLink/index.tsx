'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"
import React from 'react'

interface LinkProps {
    label: string;
    url: string;
}
const NavBarLink = ({ label, url }: LinkProps) => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname

    return (
        <li className={`w-44 ${isActive(url) ? 'bg-solar-green-light' : 'bg-transparent'} shadow py-1 border border-solar-gray-light rounded`}>
            <Link
                href={`${url}`}
                className={`${isActive(url)} block text-center`}
            >
                <span className={`uppercase text-sm font-medium text-solar-gray-light drop-shadow ${isActive(url)} `}>{label}</span>
            </Link>
        </li>
    )
}

export default NavBarLink