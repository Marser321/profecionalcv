"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export function HeroOdontologo() {
  const { profession } = useProfession();

  // Animaciones de Entrada (Crisp & Clean)
  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  // Efecto de Escáner Láser
  const scannerAnimation: Variants = {
    initial: { top: "0%" },
    animate: {
      top: ["0%", "100%", "0%"],
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  const floatSubtle: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-6, 6, -6],
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Luces clínicas limpias (Cyan/Blanco) */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Copy Hyper-limpio */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-8"
          >
            <motion.div variants={fadeLeft} className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-transparent text-primary text-xs font-bold tracking-[0.2em] uppercase border-l-2 border-primary">
                {profession.hero.eyebrow}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                El Futuro de la <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80">
                  Odontología Digital
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
                {profession.hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeLeft} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-white text-black hover:bg-gray-200 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2">
                {profession.hero.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold border-primary/30 text-primary hover:bg-primary/10 rounded-lg backdrop-blur-md transition-all">
                Ver Instalaciones
              </Button>
            </motion.div>

            {/* Grid Estadísticas Estilo Tech */}
            <motion.div variants={fadeLeft} className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {profession.stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <div className="text-4xl font-bold font-mono text-white tracking-tighter">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <span className="text-primary font-bold text-xl">+</span>
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Mockup + Láser de Escaneo */}
          <motion.div variants={fadeRight} initial="hidden" animate="visible" className="relative h-[650px] w-full flex justify-center items-center perspective-[1000px]">
            {/* Contenedor Principal Flotante */}
            <motion.div 
              variants={floatSubtle}
              initial="initial"
              animate="animate"
              className="relative w-full h-[90%] max-w-[550px] mx-auto rounded-[2rem] glass-card border-[0.5px] border-white/20 p-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-10deg) rotateX(5deg)' }}
            >
              {/* Backlight de la propia pantalla */}
              <div className="absolute inset-0 bg-primary/10 opacity-50 blur-xl mix-blend-screen" />

              <div className="relative w-full h-full rounded-[1.5rem] bg-black overflow-hidden border border-white/5">
                <Image 
                  src={`/hero/${profession.id}.png`} 
                  alt={`Escáner Dental 3D ${profession.label}`}
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* --- EFECTO LÁSER DE ESCANEO --- */}
                <motion.div 
                  variants={scannerAnimation}
                  initial="initial"
                  animate="animate"
                  className="absolute left-0 right-0 h-48 z-20 pointer-events-none"
                  style={{ 
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.05) 50%, rgba(6, 182, 212, 0.4) 98%, rgba(255, 255, 255, 0.8) 100%)',
                    borderBottom: '2px solid rgba(6, 182, 212, 1)'
                  }}
                >
                  {/* Puntos de impacto del láser en los bordes */}
                  <div className="absolute bottom-[-3px] left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#06b6d4]" />
                  <div className="absolute bottom-[-3px] right-0 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#06b6d4]" />
                </motion.div>

                {/* HUD Tech Elements (Opaco y clínico) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30 pointer-events-none">
                   <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase tracking-widest text-primary font-mono flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                     Análisis 3D Activo
                   </div>
                   <div className="text-white/50 text-[10px] font-mono">
                     {new Date().toISOString().split('T')[0]}
                   </div>
                </div>

                {/* Retícula (Grid) encima de la imagen */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] opacity-50 z-10 pointer-events-none" />

              </div>
            </motion.div>

            {/* Elemento de UI secundario "flotando" fuera de la pantalla */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 -right-4 lg:-right-10 z-40 glass-card bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                 <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Escaneo Completo</div>
                <div className="text-muted-foreground text-xs mt-0.5">Precisión sub-milimétrica</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
