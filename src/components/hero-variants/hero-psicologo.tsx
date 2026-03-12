"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export function HeroPsicologo() {
  const { profession } = useProfession();

  // Animaciones muy suaves y prolongadas (Sensación de "respiración")
  const fadeUpSlow: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const breathingAnimation: Variants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const floatSoft: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="relative min-h-screen py-32 overflow-hidden flex items-center justify-center bg-background">
      {/* Background decoration: Orbes de respiración (Zen vibe) */}
      <motion.div 
        variants={breathingAnimation} 
        initial="initial" 
        animate="animate" 
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-[120px] pointer-events-none" 
        style={{ mixBlendMode: 'screen' }}
      />
      
      <motion.div 
        variants={breathingAnimation} 
        initial="initial" 
        animate="animate" 
        transition={{ delay: 2, duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-[800px] h-[800px] bg-white/5 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-[150px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content - Organic spacing */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            className="flex flex-col items-start space-y-10 lg:pl-10"
          >
            <motion.div variants={fadeUpSlow} className="space-y-6">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 text-primary text-sm font-medium tracking-wide backdrop-blur-md border border-white/5">
                <span className="w-2 h-2 rounded-full bg-primary/80 mr-3 animate-pulse" />
                {profession.hero.eyebrow}
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-light tracking-tight leading-[1.1] text-white">
                <span className="font-semibold">{profession.hero.title.split(' ')[0]}</span><br/>
                <span className="text-white/70 italic">{profession.hero.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-muted-foreground/80 max-w-lg leading-relaxed font-light">
                {profession.hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeUpSlow} className="flex flex-col sm:flex-row gap-6 pt-4 w-full">
              <Button size="lg" className="h-16 px-10 text-lg font-normal bg-primary/90 text-primary-foreground hover:bg-primary rounded-3xl transition-all shadow-[0_0_30px_-5px] shadow-primary/30">
                {profession.hero.cta}
              </Button>
            </motion.div>

            {/* Estadísticas de manera sutil en la parte inferior */}
            <motion.div variants={fadeUpSlow} className="flex gap-12 pt-10">
              {profession.stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex flex-col gap-2 relative">
                   {/* Divider line instead of boxes */}
                   <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 to-transparent" />
                   <div className="text-4xl font-light text-white font-serif tracking-tight ml-2">
                     <AnimatedCounter value={stat.value} />
                   </div>
                   <div className="text-xs text-muted-foreground uppercase tracking-widest ml-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Asimétrico: Imagen Redondeada enorme y limpia */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="relative lg:h-[750px] flex items-center justify-center p-4 lg:p-0"
          >
            {/* Elemento de fondo asimétrico */}
            <div className="absolute inset-0 bg-primary/5 rounded-[4rem] transform rotate-3 scale-105 border border-white/5" />
            
            <motion.div 
              variants={floatSoft}
              initial="initial"
              animate="animate"
              className="relative w-full h-full max-h-[600px] lg:max-h-full rounded-[3rem] overflow-hidden shadow-2xl glass-card border border-white/10 z-10"
            >
              {/* Overlay sutil para oscurecer */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
              
              <Image 
                src={`/hero/${profession.id}.png`} 
                alt={`Pantalla de gestión de ${profession.label}`}
                fill
                className="object-cover opacity-90 transition-transform duration-[20s] ease-linear hover:scale-110"
                priority
              />

              {/* Botón flotante simulando una interacción amigable en la app */}
              <div className="absolute bottom-10 left-10 right-10 z-20 flex justify-between items-end">
                <div className="glass-card bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-w-[250px]">
                  <div className="flex gap-3 items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">Sesión Próxima</span>
                  </div>
                  <div className="text-lg text-white font-medium">Videollamada Programada</div>
                  <div className="text-sm text-primary mt-1">Ingresar ahora →</div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
