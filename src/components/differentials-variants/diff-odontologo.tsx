"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function DiffOdontologo() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#05080a]">
      {/* Grid de fondo tipo laboratorio/clínico */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00f2ff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Brillos Cyan sutiles */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#00f2ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#00f2ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1 rounded border border-[#00f2ff]/30 bg-[#00f2ff]/5 text-[#00f2ff] text-[10px] font-bold tracking-[0.3em] uppercase"
          >
            Sistemas de Precisión Avanzada
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic">
            Tecnología que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-white/70">Transforma</span>
          </h2>
          <div className="w-16 h-1 bg-[#00f2ff] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Innovación clínica aplicada para resultados exactos y mínimamente invasivos.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {profession.differentials.map((diff, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Container tipo HUD */}
              <div className="h-full bg-[#0a0f12] border border-white/5 p-8 relative overflow-hidden transition-all duration-300 group-hover:border-[#00f2ff]/40 group-hover:bg-[#0c1418]">
                
                {/* Bordes neón tipo escáner */}
                <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 left-0 h-2 w-[1px] bg-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 h-2 w-[1px] bg-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#00f2ff]/50 px-2 group-hover:text-[#00f2ff] transition-colors">
                       {/* Icono animado tipo retícula */}
                       <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                         <circle cx="12" cy="12" r="9" strokeWidth="0.5" strokeDasharray="2 2" />
                         <path d="M12 3V21M3 12H21" strokeWidth="0.5" />
                         <rect x="10" y="10" width="4" height="4" strokeWidth="1" />
                       </svg>
                    </div>
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-[#00f2ff]/40 tracking-widest">
                      ID-{800 + i * 24}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                    {diff.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium pb-4">
                    {diff.description}
                  </p>

                  {/* Dataplot / Scan line decorativa */}
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                    <motion.div 
                      initial={{ left: "-100%" }}
                      whileInView={{ left: "100%" }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 w-1/4 h-full bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent shadow-[0_0_8px_#00f2ff]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer info tech */}
        <div className="mt-20 flex flex-wrap justify-between items-center gap-6 pt-8 border-t border-white/5">
          <div className="flex gap-12">
             <div className="space-y-1">
               <p className="text-[9px] text-white/40 uppercase tracking-[0.3em]">Calibración</p>
               <p className="text-xs font-mono text-[#00f2ff]">STATUS: OPTIMAL</p>
             </div>
             <div className="space-y-1">
               <p className="text-[9px] text-white/40 uppercase tracking-[0.3em]">Diagnóstico</p>
               <p className="text-xs font-mono text-[#00f2ff]">AI-ENABLED</p>
             </div>
          </div>
          <div className="text-[9px] text-white/20 font-mono">SCAN_REF: CLN-Z-2024-X</div>
        </div>
      </div>
    </section>
  );
}
