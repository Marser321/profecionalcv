"use client";

import React, { useRef } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import * as LucideIcons from 'lucide-react';

import { HeroGem } from '@/components/ui/hero-gem';

export function HeroAbogado() {
  const { profession } = useProfession();
  const gems = profession.hero.gems || [];
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

  return (
    <section ref={containerRef} className="relative min-h-[120vh] pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Fondos dinámicos: Mesh Gradient Legal */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-20%] w-[60%] h-[50%] rounded-full blur-[150px] opacity-[0.08]"
          style={{ backgroundColor: profession.accent }}
        />
        <div 
          className="absolute bottom-[-5%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-[0.05]"
          style={{ backgroundColor: profession.accent }}
        />
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, ${profession.accent} 1px, transparent 1px), linear-gradient(to bottom, ${profession.accent} 1px, transparent 1px)`,
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

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
            <Image unoptimized 
              src={profession.hero.image || `/hero/${profession.id}.png`} 
              alt={`Dashboard Legal de ${profession.label}`}
              fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-90 scale-100 mix-blend-screen"
              priority
            />

            {/* Inyección de Abundancia: Floating Gems */}
            {gems.map((gem, i) => (
              <HeroGem key={i} {...gem} delay={i * 0.2} />
            ))}
          </motion.div>

          {/* Estadísticas como Badges de Confianza (Pequeños y técnicos) */}
          <div className="absolute inset-x-0 -bottom-12 flex justify-center gap-4 pointer-events-none z-20">
            {profession.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-card bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <LucideIcons.Check size={14} />
                </div>
                <div>
                  <div className="text-xl font-black text-white font-mono tracking-tight leading-none">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] text-primary/70 uppercase font-bold tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
