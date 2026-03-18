"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
        Stratos
      </div>
      <div className="flex items-center gap-4">
        {session ? (
          <>
            <span className="text-white/80">Hello, {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
