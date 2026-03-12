"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function WorkPsicologo() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 }
    }
  };

  const bubbleVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#070908]">
      {/* Elementos orgánicos de fondo */}
      <motion.div 
        variants={bubbleVariants}
        animate="animate"
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        variants={bubbleVariants}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-[0.2em] uppercase"
          >
            Un Proceso de Transformación
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
            Tu Camino al <span className="font-serif italic text-emerald-300/80">Equilibrio</span>
          </h2>
          <p className="text-lg text-neutral-400 font-light max-w-xl mx-auto italic">
            "El crecimiento es un proceso de apertura constante, paso a paso, con respeto y contención."
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {profession.workflow.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
              }}
              className="group relative"
            >
              {/* Card Orgánica */}
              <div className="relative z-10 p-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-700 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 rounded-[3rem]">
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  {/* Marcador de Fase Suave */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 font-serif italic text-3xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-700">
                    {i + 1}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-white tracking-wide group-hover:text-emerald-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed font-light text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Línea de conexión fluida (solo para desktop) */}
                {i < profession.workflow.length - 1 && (
                  <div className="absolute left-1/2 md:left-20 top-full h-12 w-[1px] bg-gradient-to-b from-emerald-500/30 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre Zen Leaf */}
        <div className="mt-24 flex justify-center opacity-20">
           <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
             <circle cx="12" cy="12" r="3" />
           </svg>
        </div>
      </div>
    </section>
  );
}
