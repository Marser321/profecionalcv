"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function DiffEstetica() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  const auraVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0b]">
      {/* Auras de luz sensoriales en el fondo */}
      <motion.div 
        variants={auraVariants}
        animate="animate"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" 
      />
      <motion.div 
        variants={auraVariants}
        animate="animate"
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-medium tracking-[0.3em] uppercase backdrop-blur-md"
          >
            Esencia de Perfección
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
            Ciencia y <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-300">Bienestar</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Combinamos aparatología de última generación con una experiencia sensorial diseñada para renovar tu confianza.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {profession.differentials.map((diff, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative h-[450px] flex flex-col justify-end p-10 overflow-hidden"
            >
              {/* Card Background con Glassmorphism extremo */}
              <div className="absolute inset-0 bg-white/[0.02] border border-white/5 backdrop-blur-2xl transition-all duration-700 group-hover:bg-white/[0.05] group-hover:border-primary/20 rounded-[3rem]" />
              
              {/* Brillo dinámico en hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="text-6xl font-serif italic text-white/[0.03] group-hover:text-primary transition-colors duration-700 absolute -top-12 -left-4">
                  0{i + 1}
                </div>
                
                <h3 className="text-3xl font-light text-white leading-tight group-hover:translate-x-2 transition-transform duration-700">
                  {diff.title}
                </h3>
                
                <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-1000" />
                
                <p className="text-muted-foreground text-lg font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
                  {diff.description}
                </p>

                {/* Símbolo de elegancia */}
                <div className="pt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary">
                     <span className="text-sm">✨</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre refinado */}
        <div className="mt-24 text-center">
           <p className="text-[10px] text-white/20 font-serif italic tracking-[0.4em] uppercase">
             Beauty Excellence · Aesthetic Innovation · Sensory Luxury
           </p>
        </div>
      </div>
    </section>
  );
}
