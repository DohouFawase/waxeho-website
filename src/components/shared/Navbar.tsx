'use client'
import Link from "next/link";

import { useState } from "react";
import { Navlink } from "@/mocks/data";

export default function NavBar() {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    function toggleMobileMenu() {
        setOpenMobileMenu(!openMobileMenu);
    }

    return (
        <div className="">
            <div className="relative w-full">
                <div className="flex  bg-black py-6 text-white justify-between items-center p-3.5 px-8 text-lg w-full ">
                    <div className="Logo">
                        Hello
                    </div>

                    <div className="Webnavigation">
                        <ul className="hidden md:flex items-center gap-8">
                            {Navlink.map((nav) => (
                                <li className="font-medium" key={nav.id}>
                                    <Link href={nav.url}>{nav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:block">
                            <Link href="">Contact</Link>
                        </div>

                        <div className="md:hidden block">
                            <button onClick={toggleMobileMenu} className="z-50 relative">
                                {openMobileMenu ? '<X />' : '<AlignRight />'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile - Slide depuis la gauche */}
                <div className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-40
          transform transition-transform duration-300 ease-in-out
          ${openMobileMenu ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}>
                    <div className="pt-20 px-6">
                        <ul className="flex flex-col gap-6">
                            {Navlink.map((nav) => (
                                <li className="font-medium text-xl" key={nav.id}>
                                    <Link
                                        href={nav.url}
                                        onClick={() => setOpenMobileMenu(false)}
                                        className="block py-2 hover:text-blue-600 transition-colors"
                                    >
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="font-medium text-xl pt-4 border-t">
                                <Link
                                    href=""
                                    onClick={() => setOpenMobileMenu(false)}
                                    className="block py-2 hover:text-blue-600 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Overlay pour fermer le menu */}
                {openMobileMenu && (
                    <div
                        className="fixed inset-0 bg-transparent bg-opacity-50 z-30 md:hidden"
                        onClick={() => setOpenMobileMenu(false)}
                    ></div>
                )}
            </div>
        </div>
    );
}