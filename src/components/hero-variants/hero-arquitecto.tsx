"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/ui/animated-counter';

import { HeroGem } from '@/components/ui/hero-gem';

export function HeroArquitecto() {
  const { profession } = useProfession();
  const gems = profession.hero.gems || [];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 } }
  };

  // Animación continua y lenta simulando revisar un plano panorámico
  const panAnimation: Variants = {
    initial: { x: "0%" },
    animate: {
      x: ["-2%", "2%", "-2%"],
      transition: {
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0a0a09]">
      {/* Background Architectural Grid & Mesh Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] opacity-[0.1]"
          style={{ backgroundColor: profession.accent }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[180px] opacity-[0.05]"
          style={{ backgroundColor: profession.accent }}
        />
        
        {/* Grilla Arquitectónica de base */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0xdjM5SDFWMWgzOHoiIGZpbGw9InJnYmEoMjE4LDE2NSwzMiwwLjA0KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-40" />
      </div>
      
      {/* Líneas divisorias estéticas (Plomada/Nivel) */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-primary/10 pointer-events-none" />
      <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-primary/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Columna Izquierda: Copy Sofisticado & Serif */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="lg:w-5/12 space-y-10"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">
                {profession.hero.eyebrow}
              </p>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                {profession.hero.title.split(' ')[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-primary/60 font-sans italic font-light">
                  {profession.hero.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <div className="w-16 h-[1px] bg-primary/50" /> {/* Separador minimalista */}
              <p className="text-lg text-muted-foreground/90 max-w-md font-light leading-relaxed">
                {profession.hero.subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-6 pt-4">
              <Button size="lg" className="h-14 px-10 text-sm font-semibold tracking-widest uppercase bg-primary text-black hover:bg-primary/90 rounded-none transition-all">
                {profession.hero.cta}
              </Button>
            </motion.div>

            {/* Estadísticas estilo Ficha de Proyecto */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-12 gap-y-8 pt-10 border-t border-white/5">
              {profession.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xs text-primary/80 uppercase tracking-widest font-mono mb-2">0{i + 1} // {stat.label}</div>
                  <div className="text-3xl font-serif text-white tracking-wide">
                    <AnimatedCounter value={stat.value} />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Composición Expansiva "Plano / Render" */}
          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="lg:w-7/12 relative h-[700px] w-full mt-10 lg:mt-0">
            {/* Marco o "Canvas" dorado sutil */}
            <div className="absolute inset-0 border border-primary/20 bg-black/40 backdrop-blur-sm p-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)' }}>
              
              {/* Contenedor de la Imagen con Movimiento Panorámico */}
              <div className="relative w-full h-full overflow-hidden bg-black isolation-auto" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}>
                <motion.div
                  variants={panAnimation}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-[-10%] w-[120%] h-[120%]"
                >
                  <Image unoptimized 
                    src={profession.hero.image || `/hero/${profession.id}.png`} 
                    alt={`Render Mágnum de ${profession.label}`}
                    fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-80 mix-blend-screen scale-100 filter contrast-125 grayscale-[20%]"
                    priority
                  />
                  {/* Overlay gradiente arquitectónico */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-primary/10" />

                  {/* Inyección de Abundancia: Floating Gems */}
                  {gems.map((gem, i) => (
                    <HeroGem key={i} {...gem} delay={i * 0.2} />
                  ))}
                </motion.div>

                {/* Sellos / Marcas de Agua Arquitectónicas */}
                <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20 mix-blend-difference pointer-events-none">
                   <div className="w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center">
                     <div className="w-1 h-1 bg-white" />
                   </div>
                   <div>
                     <div className="text-white/60 font-mono text-[10px] tracking-[0.3em]">ESCALA 1:100</div>
                     <div className="text-white font-mono text-xs tracking-widest mt-1">PROYECTO APROBADO</div>
                   </div>
                </div>

                {/* Tarjeta de Materialidad Flotante (Glass) */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute top-10 right-10 z-30 glass-card bg-black/50 border border-primary/30 p-5 w-48 shadow-2xl backdrop-blur-xl"
                >
                  <div className="text-[10px] uppercase text-primary tracking-widest mb-3 border-b border-white/10 pb-2">Materialidad</div>
                  <div className="space-y-3">
                    {['Acero Corten', 'Hormigón Visto', 'Madera Nogal'].map((material, idx) => (
                       <div key={idx} className="flex justify-between items-center text-xs">
                         <span className="text-white/80">{material}</span>
                         <span className="w-2 h-2 rounded-full border border-primary" />
                       </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
