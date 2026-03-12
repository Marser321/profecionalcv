"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { PROFESSIONS, ProfessionId } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function NavBar() {
  const { professionId, setProfessionId } = useProfession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/40 backdrop-blur-2xl border-b border-white/10 transition-colors duration-500">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 border border-white/20">
          AH
        </div>
        <span className="font-extrabold tracking-tighter text-2xl hidden sm:inline-block text-white">
          AutoHub
        </span>
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[50%] sm:max-w-none p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
        {(Object.keys(PROFESSIONS) as ProfessionId[]).map((id) => (
          <button
            key={id}
            onClick={() => setProfessionId(id)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap",
              professionId === id 
                ? "bg-primary text-white shadow-md shadow-primary/30" 
                : "text-muted-foreground hover:text-white hover:bg-white/5"
            )}
          >
            {PROFESSIONS[id].label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground hover:text-white hover:bg-white/5 rounded-full px-6">
          Ingresar
        </Button>
        <Button size="sm" className="bg-white text-black hover:bg-neutral-200 rounded-full px-6 font-bold transition-transform hover:scale-105">
          Agendar Cita
        </Button>
      </div>
    </header>
  );
}
