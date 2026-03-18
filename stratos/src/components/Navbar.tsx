"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 z-50 w-full bg-cyber-bg/60 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex justify-between items-center shadow-2xl">
      <div className="text-3xl font-black text-cyber tracking-tighter italic">
        STRATOS
      </div>
      <div className="flex items-center gap-6">
        {session ? (
          <>
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
              User // <span className="text-white">{session.user?.name}</span>
            </span>
            <button
              onClick={() => signOut()}
              className="cyber-button text-xs py-2 px-6"
            >
              Terminate Session
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="cyber-button text-xs py-2 px-6"
          >
            Access System
          </Link>
        )}
      </div>
    </nav>
  );
};
