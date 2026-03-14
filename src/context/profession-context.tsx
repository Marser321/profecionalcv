"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROFESSIONS, ProfessionId, DEFAULT_PROFESSION } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfessionContextType {
  professionId: ProfessionId;
  setProfessionId: (id: ProfessionId) => void;
  profession: typeof PROFESSIONS[ProfessionId];
}

const ProfessionContext = createContext<ProfessionContextType | undefined>(undefined);

export function ProfessionProvider({ children }: { children: React.ReactNode }) {
  const [professionId, setProfessionId] = useState<ProfessionId>(DEFAULT_PROFESSION);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Efecto para actualizar el body class o variables si es necesario
  useEffect(() => {
    const prof = PROFESSIONS[professionId];
    document.documentElement.style.setProperty('--primary', hexToHSL(prof.accent));
    document.documentElement.style.setProperty('--background', hexToHSL(prof.bg));
    document.documentElement.style.setProperty('--card', hexToHSL(prof.bg));
  }, [professionId]);

  const handleSetProfession = (id: ProfessionId) => {
    if (id === professionId) return;
    setIsTransitioning(true);
    
    // Curtain animation timing
    setTimeout(() => {
      setProfessionId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsTransitioning(false), 600);
    }, 600);
  };

  return (
    <ProfessionContext.Provider value={{ 
      professionId, 
      setProfessionId: handleSetProfession, 
      profession: PROFESSIONS[professionId] 
    }}>
      <div className="dark min-h-screen bg-background text-foreground transition-colors duration-700 relative noise-bg overflow-x-hidden">
        <AnimatePresence>
          {isTransitioning && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
              className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-10"
            >
               <div className="flex flex-col items-center gap-8">
                  <div className="w-24 h-[1px] bg-black/20 animate-pulse" />
                  <span className="text-black font-black uppercase tracking-[1.5em] italic text-[10px] text-center ml-[1.5em]">Excelencia_En_Movimiento</span>
                  <div className="w-24 h-[1px] bg-black/20 animate-pulse" />
               </div>
            </motion.div>
          )}
        </AnimatePresence>
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
