"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROFESSIONS, ProfessionId, DEFAULT_PROFESSION } from '@/lib/constants';

interface ProfessionContextType {
  professionId: ProfessionId;
  setProfessionId: (id: ProfessionId) => void;
  profession: typeof PROFESSIONS[ProfessionId];
}

const ProfessionContext = createContext<ProfessionContextType | undefined>(undefined);

export function ProfessionProvider({ children }: { children: React.ReactNode }) {
  const [professionId, setProfessionId] = useState<ProfessionId>(DEFAULT_PROFESSION);

  // Efecto para actualizar el body class o variables si es necesario
  useEffect(() => {
    const prof = PROFESSIONS[professionId];
    document.documentElement.style.setProperty('--primary', hexToHSL(prof.accent));
    document.documentElement.style.setProperty('--background', hexToHSL(prof.bg));
    document.documentElement.style.setProperty('--card', hexToHSL(prof.bg)); // Mantenemos coherencia
  }, [professionId]);

  return (
    <ProfessionContext.Provider value={{ 
      professionId, 
      setProfessionId, 
      profession: PROFESSIONS[professionId] 
    }}>
      <div className="dark min-h-screen bg-background text-foreground transition-colors duration-500">
        {children}
      </div>
    </ProfessionContext.Provider>
  );
}

export function useProfession() {
  const context = useContext(ProfessionContext);
  if (!context) throw new Error('useProfession must be used within a ProfessionProvider');
  return context;
}

// Helper simple para convertir hex a HSL (formato esperado por Tailwind variables)
function hexToHSL(hex: string): string {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  
   r /= 255; g /= 255; b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
