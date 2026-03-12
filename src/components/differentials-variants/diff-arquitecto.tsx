"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function DiffArquitecto() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#070705]">
      {/* Líneas de plomada / Grilla arquitectónica de fondo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #b87333 1px, transparent 1px), linear-gradient(to bottom, #b87333 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }} 
      />
      
      {/* Brillos Dorados Profundos */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#b87333]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-amber-500/50" />
            <span className="text-amber-500/80 text-[10px] font-bold tracking-[0.5em] uppercase">Estructura y Visión</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tighter">
            Diseñando el <br />
            <span className="font-serif italic text-amber-200/90">Espacio del Mañana</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl border-l border-amber-500/20 pl-8 mt-8">
            Cada diferencial es un cimiento sobre el cual construimos identidades visuales sólidas y duraderas.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {profession.differentials.map((diff, i) => {
            // Diseño Masonry falso usando col-spans variados
            let colSpan = "md:col-span-2";
            if (i === 0) colSpan = "md:col-span-4 lg:col-span-3";
            else if (i === 1) colSpan = "md:col-span-2 lg:col-span-3";
            else if (i === 2) colSpan = "md:col-span-2 lg:col-span-2";
            else colSpan = "md:col-span-2 lg:col-span-2";

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative overflow-hidden bg-[#0a0a08] border border-white/5 p-10 flex flex-col justify-between min-h-[350px] transition-all duration-500 hover:border-amber-500/30 ${colSpan}`}
              >
                {/* Elemento de diseño de regla / escala */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-500/20 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 h-12 w-[1px] bg-gradient-to-b from-amber-500/20 to-transparent" />

                <div className="relative z-10 space-y-8">
                  <div className="text-4xl font-serif italic text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
                    0{i + 1}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-light text-white leading-tight group-hover:text-amber-200 transition-colors">
                      {diff.title}
                    </h3>
                    <div className="w-12 h-[2px] bg-amber-500/30 group-hover:w-full transition-all duration-700" />
                    <p className="text-muted-foreground text-lg font-light leading-relaxed group-hover:text-white/80 transition-colors">
                      {diff.description}
                    </p>
                  </div>
                </div>

                {/* Símbolo arquitectónico decorativo */}
                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                     <path d="M3 3L21 21M21 3L3 21" strokeWidth="0.5" />
                     <circle cx="12" cy="12" r="9" strokeWidth="0.5" />
                   </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coordenadas técnicas sutiles */}
        <div className="mt-20 flex justify-between text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">
           <span>lat: -34.6037 / long: -58.3816</span>
           <span>Project_Ref: ARQ-V2-GOLD</span>
        </div>
      </div>
    </section>
  );
}
