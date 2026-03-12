"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function WorkAbogado() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const lineVariants: Variants = {
    hidden: { height: 0 },
    show: { 
      height: "100%", 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#050507]">
      {/* Fondo con textura de papel premium / columnas */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(to right, #007AFF 1px, transparent 1px)`, backgroundSize: '20%' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#007AFF] font-mono text-xs tracking-[0.5em] uppercase"
          >
            Protocolo de Actuación Jurídica
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            Nuestra <span className="font-serif italic text-[#007AFF]">Estrategia</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#007AFF]/30 mx-auto" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Línea de tiempo central solemne */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#007AFF]/20 to-transparent hidden md:block">
            <motion.div 
              variants={lineVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full bg-[#007AFF]/50 shadow-[0_0_15px_#007AFF]"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24"
          >
            {profession.workflow.map((step, i) => (
              <div key={i} className={`relative flex items-center justify-between md:justify-normal group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Lado del Contenido */}
                <div className="w-full md:w-[45%]">
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-10 bg-white/[0.02] border-l border-white/5 transition-all duration-500 group-hover:border-[#007AFF]/40 group-hover:bg-white/[0.04]"
                  >
                     <div className="space-y-4">
                        <span className="text-[10px] font-bold text-[#007AFF]/60 tracking-widest uppercase">Fase 0{i + 1}</span>
                        <h3 className="text-2xl font-light text-white group-hover:text-[#007AFF] transition-colors duration-500">
                          {step.title}
                        </h3>
                        <p className="text-neutral-400 font-light leading-relaxed text-lg italic font-serif">
                          "{step.description}"
                        </p>
                     </div>
                  </motion.div>
                </div>

                {/* Marcador Central */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050507] border border-[#007AFF]/50 z-20 hidden md:flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse" />
                </div>

                {/* Espaciador para desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sello de Autenticidad */}
        <div className="mt-32 flex justify-center opacity-10">
           <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
           </svg>
        </div>
      </div>
    </section>
  );
}
