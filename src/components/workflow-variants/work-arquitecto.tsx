"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function WorkArquitecto() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a09]">
      {/* Grilla técnica dorada sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #b87333 1px, transparent 1px), linear-gradient(to bottom, #b87333 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }} 
      />
      
      {/* Brillos Ambar Profundos */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b87333]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-amber-500/50" />
            <span className="text-amber-500/80 text-[10px] font-bold tracking-[0.5em] uppercase">Estructura de Trabajo</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tighter">
            De la Idea a la <br />
            <span className="font-serif italic text-amber-200/90">Ejecución Maestra</span>
          </h2>
          <p className="text-lg text-neutral-500 font-light max-w-xl">
            Cada fase de nuestro proceso es un bloque fundamental en la construcción de tu proyecto.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-1"
        >
          {profession.workflow.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative flex flex-col md:flex-row items-stretch"
            >
              {/* Etiqueta de Fase Vertical */}
              <div className="md:w-32 bg-[#121210] border-r border-white/5 flex items-center justify-center p-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
                <span className="text-xs font-mono text-amber-500/40 group-hover:text-amber-500 tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
                  Phase_0{i + 1}
                </span>
              </div>

              {/* Contenido de la Tarjeta Estructural */}
              <div className="flex-grow bg-[#151512] border-y border-white/5 p-12 transition-all duration-500 group-hover:bg-[#1a1a15] group-hover:border-amber-500/20 group-hover:translate-x-2">
                <div className="max-w-3xl space-y-6">
                  <h3 className="text-3xl font-light text-white tracking-wide group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-1 bg-amber-500/20 h-full self-stretch group-hover:bg-amber-500 transition-colors" />
                    <p className="text-neutral-400 text-xl font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Detalle de plano / coordenadas */}
                  <div className="pt-8 flex gap-8 text-[9px] font-mono text-white/10 group-hover:text-white/20 uppercase tracking-[0.2em] transition-colors">
                     <span>X-Coord: {100 + i * 25}.4</span>
                     <span>Y-Coord: {200 - i * 15}.8</span>
                     <span>Elevation: Optimal</span>
                  </div>
                </div>
              </div>

              {/* Símbolo decorativo de ángulo */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                 <svg className="w-16 h-16 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 20L20 4M4 4h16v16" strokeWidth="0.5" />
                 </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre Técnico */}
        <div className="mt-32 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">
           <span>blueprint_v2.max</span>
           <div className="flex gap-8">
              <span>certified_architect</span>
              <span>2024_gold_edition</span>
           </div>
        </div>
      </div>
    </section>
  );
}
