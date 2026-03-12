"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function WorkEstetica() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const auraVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0508]">
      {/* Auras de Lujo Sensorial */}
      <motion.div 
        variants={auraVariants}
        animate="animate"
        className="absolute -top-24 -left-24 w-[800px] h-[800px] bg-magenta-500/5 rounded-full blur-[180px] pointer-events-none" 
        style={{ backgroundColor: 'rgba(255, 0, 128, 0.05)' }}
      />
      <motion.div 
        variants={auraVariants}
        animate="animate"
        className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" 
        style={{ backgroundColor: 'rgba(147, 51, 234, 0.05)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-32 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="px-6 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-[10px] font-bold tracking-[0.5em] uppercase backdrop-blur-sm">
               The Ritual Experience
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-light text-white leading-[0.9] tracking-tighter">
            Tratamiento <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200">Exclusivo</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent mx-auto" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {profession.workflow.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.98, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] } }
              }}
              className="group relative"
            >
              {/* Card de "Alta Costura" */}
              <div className="h-full p-12 bg-white/[0.01] border border-white/5 rounded-[4rem] flex flex-col items-center text-center space-y-8 group-hover:bg-white/[0.03] group-hover:border-pink-500/20 transition-all duration-1000 overflow-hidden">
                
                {/* Glow de fondo interactivo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,128,0.15),transparent_70%)] transition-opacity duration-1000" />

                {/* Número Elegante */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white/20 font-serif italic text-4xl group-hover:text-pink-300 group-hover:border-pink-500/30 transition-all duration-1000">
                    {i + 1}
                  </div>
                  {/* Destello sutil */}
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 blur-sm rounded-full"
                  />
                </div>

                <div className="space-y-6 relative z-10">
                  <h3 className="text-3xl font-light text-white tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-xl leading-relaxed italic font-serif">
                    {step.description}
                  </p>
                </div>

                {/* Micro-scroll decorativo */}
                <div className="pt-8 opacity-20 group-hover:opacity-50 transition-opacity">
                   <div className="w-[1px] h-12 bg-gradient-to-b from-pink-500/50 to-transparent mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre Sensorial */}
        <div className="mt-32 flex flex-col items-center space-y-6 opacity-30">
           <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
           <p className="font-serif italic text-white/50 tracking-widest text-[10px] uppercase.">Luxury Restored</p>
        </div>
      </div>
    </section>
  );
}
