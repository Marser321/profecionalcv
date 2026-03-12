"use client";

import React, { useRef } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export function HeroAbogado() {
  const { profession } = useProfession();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax con Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[120vh] pt-32 pb-20 overflow-hidden bg-background">
      {/* Luces y sombras elegantes (Estilo Legal) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Tipografía Monumental y Centrada */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="text-center max-w-4xl mx-auto space-y-8 mb-20"
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase border border-primary/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 animate-pulse" />
              {profession.hero.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-white">
              {profession.hero.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-primary">
                {profession.hero.title.split(' ').slice(-1)}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              {profession.hero.subtitle}
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px] shadow-primary/40 rounded-full transition-all hover:scale-105">
              {profession.hero.cta}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-white/20 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md transition-all">
              Agendar Asesoría
            </Button>
          </motion.div>
        </motion.div>

        {/* Imagen del Dashboard con Parallax y Badges Flotantes */}
        <div className="relative w-full max-w-6xl mt-10">
          <motion.div 
            style={{ y: imageY, scale: imageScale }}
            className="relative w-full aspect-[16/9] rounded-[2rem] border border-white/10 glass-card overflow-hidden shadow-2xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
            <Image 
              src={`/hero/${profession.id}.png`} 
              alt={`Dashboard Legal de ${profession.label}`}
              fill
              className="object-cover opacity-90 scale-100 mix-blend-screen"
              priority
            />
          </motion.div>

          {/* Badges Flotantes (Stats) */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {profession.stats.map((stat, i) => {
              // Posicionar aleatoriamente los badges alrededor de la imagen
              const positions = [
                "top-10 -left-10 md:-left-20",
                "bottom-20 -right-10 md:-right-20",
                "-top-8 right-10 md:right-32",
              ];
              
              return (
                <motion.div 
                  key={i}
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: i * 0.5 }}
                  className={`absolute ${positions[i % positions.length]} glass-card bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white font-mono tracking-tight">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs text-primary/80 uppercase font-bold tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
