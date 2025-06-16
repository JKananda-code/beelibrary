"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-cyan-100 text-black p-4">
      <div className="container mx-auto flex justify-between">
        <div>
        <Link href="/">
           <Image src="/BeeLogo.jpeg"
                alt="Logo"
                height={150}
                width={100}
                />
        </Link>
        </div>
        <div className="space-x-4 text-xl font-bold m-auto">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/location">Location</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
