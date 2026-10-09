import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-600 flex justify-between items-center flex-wrap gap-2">
      <Link href={"/"} className="text-lg font-semibold">
        ⛷️ Dev-Story
      </Link>

      <nav className="space-x-4">
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
