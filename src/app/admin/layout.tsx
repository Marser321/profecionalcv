"use client";

import React, { useEffect, useState } from 'react';
import { Sidebar } from '@/components/admin/sidebar';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Si estamos en la página de login, no verificar auth para evitar bucle
    if (pathname === '/admin/login') {
      setIsAuth(true);
      return;
    }

    const session = localStorage.getItem('admin_session');
    if (!session) {
      router.push('/admin/login');
    } else {
      setIsAuth(true);
    }
  }, [pathname, router]);

  if (!isAuth) {
    return (
      <div className="h-screen w-screen bg-[#050505] flex items-center justify-center">
        <div className="text-red-600 font-black uppercase tracking-[0.5em] animate-pulse">
           [Verifying_Access...]
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#050505] text-white">
      {pathname !== '/admin/login' && <Sidebar />}
      <main className={pathname === '/admin/login' ? "flex-1" : "flex-1 overflow-y-auto p-8"}>
        {children}
      </main>
    </div>
  );
}
