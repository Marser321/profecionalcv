"use client";

import React, { useRef } from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';
import Image from 'next/image';

// Subcomponente Tilt Card interactiva
const TiltCard = ({ children, className, isLarge = false }: { children: React.ReactNode, className?: string, isLarge?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`glass-card rounded-2xl relative group overflow-hidden border border-white/5 transition-colors duration-500 hover:border-primary/40 shadow-2xl ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full w-full">
         {children}
      </div>
    </motion.div>
  );
};

export function DiffMecanico() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background radial rojo neón */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
      
      {/* Textura industrial estática sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded bg-white/5 border border-primary/20 text-primary font-bold text-xs tracking-[0.2em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2 shadow-[0_0_10px_#ef4444]" />
            Ingeniería de Precisión
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase italic">
            Potencia tu <span className="text-primary">Taller</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Beneficios diseñados como herramientas de diagnóstico avanzado.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]"
        >
          {profession.differentials.map((diff, i) => {
            // El primer elemento es muy ancho (Span 8)
            // El segundo es Span 4
            // El tercero y cuarto ocupan 6 y 6
            let colSpan = "md:col-span-12";
            if (i === 0) colSpan = "md:col-span-8";
            else if (i === 1) colSpan = "md:col-span-4";
            else colSpan = "md:col-span-6";

            const isLarge = i === 0;

            return (
              <motion.div key={i} variants={itemVariants} className={`h-full ${colSpan} perspective-[1000px]`}>
                <TiltCard className="h-full w-full p-8 flex flex-col justify-between" isLarge={isLarge}>
                  
                  {/* Grid Tech Metálico de fondo por tarjeta */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-0" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-4xl font-black text-white/5 font-mono italic">
                        0{i + 1}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                      {diff.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                      {diff.description}
                    </p>
                  </div>

                  {isLarge && (
                    <div className="relative h-20 mt-6 w-full rounded border border-white/5 bg-black/40 overflow-hidden flex items-end justify-between px-4 pb-2">
                       {/* Barras de 'Revoluciones por minuto' falsas */}
                       {[30, 50, 40, 70, 60, 90, 80, 100, 70].map((h, idx) => (
                         <div key={idx} className="w-4 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm" style={{ height: `${h}%` }} />
                       ))}
                    </div>
                  )}

                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
