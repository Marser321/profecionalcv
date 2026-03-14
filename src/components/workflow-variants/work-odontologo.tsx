"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function WorkOdontologo() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0c0d]">
      {/* Grilla técnica de fondo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(#00f2ff_1px,transparent_1px),linear-gradient(90deg,#00f2ff_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Brillos Cyan Quirúrgicos */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f2ff]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Watermark Gigante */}
      <div className="absolute -right-20 bottom-0 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[25rem] font-black italic uppercase leading-none text-white origin-bottom-right rotate-90 -translate-y-32">
          SMILE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-1 border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-[#00f2ff] text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            <div className="w-1.5 h-1.5 bg-[#00f2ff] rounded-sm animate-pulse" />
            Clinical Protocol v4.0
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">
            Alta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-white/70">Precisión</span> Clínica
          </h2>
          <p className="text-lg text-neutral-400 font-medium max-w-2xl">
            Metodología digital avanzada para resultados predecibles y mínimamente invasivos.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profession.workflow.map((step, i) => (
            <motion.div
              key={i}
              variants={stepVariants}
              className="group relative"
            >
              {/* Card Container HUD */}
              <div className="h-full bg-[#0d1113] border border-white/5 p-8 relative overflow-hidden transition-all duration-500 hover:border-[#00f2ff]/30 hover:bg-[#11171a]">
                
                {/* Marcadores de Esquina tipo Visor */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00f2ff]/0 group-hover:border-[#00f2ff]/50 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00f2ff]/0 group-hover:border-[#00f2ff]/50 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00f2ff]/0 group-hover:border-[#00f2ff]/50 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00f2ff]/0 group-hover:border-[#00f2ff]/50 transition-all duration-500" />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-[#00f2ff]/40">PHASE_SEQ // 0{i + 1}</div>
                    <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#00f2ff]/30 group-hover:text-[#00f2ff] group-hover:border-[#00f2ff]/40 transition-all duration-500">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" strokeWidth="0.5" />
                        <path d="M12 8v8M8 12h8" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    {step.title}
                  </h3>
                  
                  <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed font-medium">
                    {step.description}
                  </p>

                  {/* Scan line decorativo local */}
                  <div className="pt-4 h-[2px] w-full bg-white/5 relative overflow-hidden">
                    <motion.div 
                      initial={{ left: "-100%" }}
                      whileInView={{ left: "100%" }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-[#00f2ff]/20 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer info tech */}
        <div className="mt-20 flex justify-center">
           <div className="px-8 py-3 border border-white/5 bg-white/[0.02] rounded-full flex gap-12 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
             <span>Scan: Active</span>
             <span>Ref: CLINIC-VISOR-3D</span>
             <span>Auth: Certified</span>
           </div>
        </div>
      </div>
    </section>
  );
}
