"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, Users, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Calendar, label: 'Reservas', href: '/admin/bookings' },
  { icon: Users, label: 'Clientes', href: '/admin/clients' },
  { icon: Settings, label: 'Configuración', href: '/admin/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col">
      <div className="p-8 border-b border-white/5">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">
          Gestión <span className="text-red-600">Taller</span>
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase italic tracking-widest transition-all rounded-none",
                isActive 
                  ? "bg-red-600 text-white" 
                  : "text-neutral-500 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase italic tracking-widest text-red-600 hover:bg-red-600/10 w-full transition-all">
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
