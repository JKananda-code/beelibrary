"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-cyan-400 text-black p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">BeeLibrary</h1>
        </Link>
        <div className="space-x-4 text-2xl font-bold">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
