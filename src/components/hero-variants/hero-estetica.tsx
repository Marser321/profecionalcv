"use client";

import React, { useEffect, useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

import { HeroGem } from '@/components/ui/hero-gem';

export function HeroEstetica() {
  const { profession } = useProfession();
  const gems = profession.hero.gems || [];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: "easeOut", delay: 0.2 } }
  };

  // Animación atmosférica flotante de Glows (Auras de luz suave)
  const auraFloat1: Variants = {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -40, 20, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: { duration: 15, ease: "easeInOut", repeat: Infinity }
    }
  };

  const auraFloat2: Variants = {
    animate: {
      x: [0, -40, 30, 0],
      y: [0, 30, -40, 0],
      scale: [1, 0.9, 1.2, 1],
      transition: { duration: 18, ease: "easeInOut", repeat: Infinity, delay: 2 }
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0a0508]">
      
      {/* Background Decorativo: Sensory Mesh & Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            <motion.div 
              variants={auraFloat1}
              animate="animate"
              className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-[0.15]"
            />
            <motion.div 
              variants={auraFloat2}
              animate="animate"
              className="absolute bottom-[10%] right-[10%] w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[180px] mix-blend-screen opacity-[0.1]"
            />
          </>
        )}
        {/* Grilla orgánica suave */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, ${profession.accent} 1px, transparent 1px)`,
            backgroundSize: '120px 120px' 
          }} 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Columna Izquierda: Copy Glamuroso & Lujoso */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="lg:w-1/2 space-y-8 z-20"
          >
            <motion.div variants={slideUp} className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shadow-[0_0_10px_currentColor]" />
                {profession.hero.eyebrow}
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
                {profession.hero.title.split(' ').map((word, i, arr) => {
                  if (i === arr.length - 1) {
                    return (
                      <span key={i} className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-300">
                        {word}
                      </span>
                    );
                  }
                  return <span key={i} className="font-medium">{word} </span>;
                })}
              </h1>
              <p className="text-lg text-muted-foreground max-w-md font-light leading-relaxed">
                {profession.hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" className="h-[60px] px-10 text-base font-medium rounded-full bg-white text-black hover:bg-gray-100 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-105">
                {profession.hero.cta}
              </Button>
              <Button size="lg" variant="ghost" className="h-[60px] px-10 text-base font-medium rounded-full text-white hover:bg-white/10 transition-all flex items-center gap-2 group">
                Explorar Tratamientos
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </motion.div>

            {/* Estadísticas de Resultados */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-x-12 gap-y-6 pt-10">
              {profession.stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <div className="text-4xl font-light text-white tracking-tighter group-hover:text-primary transition-colors">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity -mb-1">+</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Composición de Lujo Fluida */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 relative w-full h-[600px] lg:h-[750px] flex items-center justify-center perspective-[1200px]"
          >
            {/* Elemento de Cristal Frontal (Tarjeta Interactiva de Resultados) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="absolute top-1/4 -left-8 lg:-left-20 z-30 glass-card bg-white/5 border border-white/20 p-5 rounded-3xl w-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-xs text-white/80 font-medium font-serif italic">Análisis Dérmico</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-pink-400 p-[1px]">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    <span>Hidratación</span>
                    <span className="text-primary">98%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '98%' }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-pink-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                    <span>Firmeza</span>
                    <span className="text-primary">92%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '92%' }}
                      transition={{ delay: 1.7, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-pink-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Imagen Principal Central con borde y brillo sutil */}
            <div className="relative w-[90%] h-[90%] rounded-[3rem] overflow-hidden glass-card border border-white/10 shadow-2xl z-20 group">
              <Image unoptimized 
                src={profession.hero.image || `/hero/${profession.id}.png`} 
                alt={`Tratamientos Premium - ${profession.label}`}
                fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[10s] group-hover:scale-105 opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-primary/10 mix-blend-overlay" />

              {/* Inyección de Abundancia: Floating Gems */}
              {gems.map((gem, i) => (
                <HeroGem key={i} {...gem} delay={i * 0.2} />
              ))}
            </div>

            {/* Floating Element: Sello de Calidad / Ingrediente */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -right-5 z-30 w-32 h-32 rounded-full border border-primary/30 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.2)]"
            >
              <div className="text-2xl mb-1">✨</div>
              <div className="text-[10px] font-bold text-white tracking-widest uppercase text-center leading-tight">Clínica<br/><span className="text-primary font-serif italic text-xs normal-case">Certificada</span></div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
