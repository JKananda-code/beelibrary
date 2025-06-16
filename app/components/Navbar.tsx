"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-cyan-200 text-black p-4">
      <div className="flex justify-between items-center py-4">
        <div className="w-1/4">
        <Link href="/">
           <Image src="/BeeLogo.jpeg"
                alt="Logo"
                height={50}
                width={50}
                />
        </Link>
       </div>
        <div className="flex justify-end space-x-4 text-2xl font-bold w-3/4">
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/location">Location</Link>
        </div>
        </div> 
    </nav>
  );
};

export default Navbar;
