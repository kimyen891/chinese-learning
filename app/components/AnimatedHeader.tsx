'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Avatar,
} from "@nextui-org/react";
import Link from 'next/link'
import { useReducer } from 'react';

export default function AnimatedHeader() {
    const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false)
    const menuItems = [
        { name: "Trang chủ", href: "/" },
        { name: "Tra cứu", href: "/search" },
        { name: "Lộ trình", href: "/roadmap" },
        { name: "Du học", href: "/study-abroad" },
    ];

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={"fixed w-full top-0 z-50"}
        >
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className="bg-[#689F38]"
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden text-white"
                    />
                    <NavbarBrand>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_PATH_IMG}/logo.svg`}
                            alt="Panda Logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <p className="text-white text-2xl font-bold ml-4">HSK Panda</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden lg:flex gap-4" justify="center">
                    {menuItems.map((item) => (
                        <NavbarItem key={item.name}>
                            <Link href={item.href} className="text-white hover:text-green-200">
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end" className="gap-4">
                    <NavbarItem className="flex items-center gap-2">
                        <Avatar
                            name="Student"
                            size="sm"
                            src="https://i.pravatar.cc/150"
                            className="cursor-pointer hidden lg:block"
                        />
                        <span className="text-white hidden lg:block">Student</span>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/upgrade"
                            className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-bold hover:bg-yellow-300"
                        >
                            Nâng cấp
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className="bg-[#83a862]">
                    {menuItems.map((item) => (
                        <NavbarMenuItem key={item.name}>
                            <Link
                                href={item.href}
                                className="w-full text-white py-2 block border-b border-white"
                                onClick={() => setIsMenuOpen()}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem className="flex items-center gap-2 py-2 border-b border-white">
                        <Avatar
                            name="Student"
                            size="sm"
                            src="https://i.pravatar.cc/150"
                        />
                        <span className="text-white">Student</span>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </motion.div>
    );
}