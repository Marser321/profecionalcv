"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function DiffPsicologo() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.34, 1.56, 0.64, 1] 
      } 
    }
  };

  // Animación suave de "respiración" para los fondos orgánicos
  const breatheVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#080a09]">
      {/* Elementos decorativos zen de fondo */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-widest uppercase"
          >
            Espacio de Contención
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight">
            Un Camino hacia el <br />
            <span className="font-serif italic text-emerald-300/80">Bienestar Integral</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Abordamos cada proceso desde la empatía, con herramientas diseñadas para tu crecimiento personal.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {profession.differentials.map((diff, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative h-[320px] flex items-center p-8 md:p-12"
            >
              {/* Fondo asimétrico y orgánico */}
              <motion.div 
                variants={breatheVariants}
                animate="animate"
                className={`absolute inset-0 bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm transition-colors duration-700 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30
                  ${i % 2 === 0 
                    ? "rounded-[4rem_2rem_5rem_3rem]" 
                    : "rounded-[2rem_5rem_3rem_4rem]"
                  }`}
              />

              <div className="relative z-10 flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-serif italic text-emerald-400/60 uppercase tracking-widest">Pilar 0{i+1}</span>
                  <h3 className="text-2xl font-light text-white group-hover:text-emerald-300 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light font-sans group-hover:text-white/80 transition-colors">
                    {diff.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decoración Zen Leaf */}
        <div className="mt-20 flex justify-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
           <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12,2C12,2 12,9 3,12C12,15 12,22 12,22C12,22 12,15 21,12C12,9 12,2 12,2Z" />
           </svg>
        </div>
      </div>
    </section>
  );
}
