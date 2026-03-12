"use client";

import React, { useRef } from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export function DiffAbogado() {
  const { profession } = useProfession();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#070708]">
      {/* Background sutil con líneas clásicas/columnas */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(to right, #007AFF 1px, transparent 1px)`, backgroundSize: '10%' }} 
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#007AFF]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y: titleY, opacity }}
          className="text-center mb-24 space-y-6"
        >
          <div className="inline-block px-6 py-1 border border-[#007AFF]/30 rounded-sm text-[#007AFF] text-xs font-bold tracking-[0.4em] uppercase">
            Pilares de Confianza
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
            Nuestra <span className="font-serif italic font-medium">Excelencia Jurídica</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#007AFF]/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {profession.differentials.map((diff, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Card Container con estética monumental */}
              <div className="h-full bg-gradient-to-b from-white/[0.03] to-transparent border-l border-white/5 p-10 transition-all duration-700 group-hover:bg-white/[0.05] group-hover:border-l-[#007AFF]/50">
                
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-[#007AFF] transition-all duration-500">
                  <span className="text-6xl font-serif italic">{i + 1}</span>
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#007AFF] group-hover:border-[#007AFF]/40 transition-all duration-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-light text-white tracking-wide leading-snug group-hover:translate-x-2 transition-transform duration-500">
                    {diff.title}
                  </h3>
                  
                  <div className="w-8 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-[#007AFF]/30 transition-all duration-700" />

                  <p className="text-muted-foreground text-lg leading-relaxed font-light font-sans group-hover:text-white/80 transition-colors duration-500">
                    {diff.description}
                  </p>
                </div>
              </div>

              {/* Decoración clásica sutil */}
              <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-white/5" />
              <div className="absolute top-0 left-0 w-1 h-8 bg-white/5" />
            </motion.div>
          ))}
        </div>

        {/* Cita de cierre con estilo legal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-white/5 text-center"
        >
          <p className="text-[#007AFF]/40 font-mono text-xs tracking-widest uppercase">
            Protocolo de Calidad ISO 9001 // Registro Civil de Prestadores
          </p>
        </motion.div>
      </div>
    </section>
  );
}
