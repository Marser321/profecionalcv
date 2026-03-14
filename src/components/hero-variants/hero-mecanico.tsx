"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

import { HeroGem } from '@/components/ui/hero-gem';

export function HeroMecanico() {
  const { profession } = useProfession();
  const gems = profession.hero.gems || [];

  // Físicas 3D para la imagen del Hero
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
      x.set(0);
      y.set(0);
  }

  // Animaciones reutilizables
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Background decoration: Ambient Mesh & Grids */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ backgroundColor: profession.accent }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: profession.accent }}
        />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, ${profession.accent} 1px, transparent 1px), linear-gradient(to bottom, ${profession.accent} 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda: Texto Principal */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide border border-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                {profession.hero.eyebrow}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-gradient">{profession.hero.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
                {profession.hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl transition-all hover:scale-[1.02]">
                {profession.hero.cta}
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/10 bg-white/5 hover:bg-white/10 rounded-xl backdrop-blur-md transition-all">
                Conocer Más
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-8 pt-8 border-t border-white/5">
              {profession.stats.map((stat, i) => (
                <div key={i} className="space-y-1 group">
                  <div className="text-3xl font-bold font-mono text-white tracking-tighter group-hover:text-primary transition-colors">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Bento Grid Visual (Mockup Interactivo 3D) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-7 perspective-[1500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative grid grid-cols-2 gap-4 h-[600px] p-2 transition-transform duration-200 ease-out"
            >
              <div className="col-span-2 row-span-2 glass-card rounded-3xl primary-glow group relative overflow-hidden" style={{ transform: "translateZ(50px)" }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 z-10 pointer-events-none" />
                 
                 {/* Imagen Real del Mockup Generado */}
                 <div className="relative w-full h-full bg-[#050505]">
                    {/* Glow ambiental que reacciona al mouse */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-700" />
                    
                    <Image unoptimized 
                      src={profession.hero.image || `/hero/${profession.id}.png`} 
                      alt={`Dashboard de ${profession.label}`}
                      fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-90 mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-[1500ms] ease-out pointer-events-none"
                    />

                    {/* Fragmentación de UI: Floating Gems */}
                    {gems.map((gem, i) => (
                      <HeroGem key={i} {...gem} delay={i * 0.2} />
                    ))}

                    {/* Gradient Overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                 </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
