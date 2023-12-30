"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Import Menu and X icons from Lucide

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`bg-white shadow-md p-4 sticky top-0 transition-all duration-300 flex justify-between items-center z-50`}>
            <Link href={'/'} className="text-black font-roboto text-2xl md:font-bold">
                <Image
                    alt='logo'
                    height={400}
                    width={400}
                    src={'/logo.jpg'}
                />
            </Link>
            <div className="flex items-center">
                <div
                    className={`md:hidden cursor-pointer ml-auto`}
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <X
                            className={`w-6 h-6 text-black`}
                        />
                    ) : (
                        <Menu
                            className={`w-6 h-6 text-black`}
                        />
                    )}
                </div>
                <div
                    className={`md:flex flex-col items-center justify-center md:flex-row gap-4 mt-4 md:mt-0 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                >
                    <Link href={'/'}>
                        <div className="text-black hover:border-b font-semibold hover:rounded-md
                            hover:border-blue-500
                            px-3 py-2 rounded-sm cursor-pointer">
                            Home
                        </div>
                    </Link>
                    <Link href={'/products'}>
                        <div className="text-black hover:border-b font-semibold hover:rounded-md
                            hover:border-blue-500
                            px-3 py-2 rounded-md cursor-pointer">
                            Products
                        </div>
                    </Link>
                    <Link href={'/about'}>
                        <div className="text-black hover:border-b font-semibold hover:rounded-md
                            hover:border-blue-500
                            px-3 py-2 rounded-md cursor-pointer">
                            About us
                        </div>
                    </Link>
                    <Link href={'/services'}>
                        <div className="text-black hover:border-b font-semibold hover:rounded-md
                            hover:border-blue-500
                            px-3 py-2 rounded-md cursor-pointer">
                            Services
                        </div>
                    </Link>
                    <Link href={'/contact'}>
                        <div className="text-black hover:border-b font-semibold hover:rounded-md
                            hover:border-blue-500
                            px-3 py-2 rounded-md cursor-pointer">
                            Contact Us
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
