"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { PROFESSIONS, ProfessionId } from '@/lib/constants';
import { useProfession } from '@/context/profession-context';
import Image from 'next/image';
import { ExternalLink, CheckCircle2, ArrowRight, Layout, Zap, Smartphone, MousePointer2, Hammer, Gavel, Heart, Stethoscope, Compass, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Componente para el fondo de malla animado
const MeshBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px] animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-purple-600/5 blur-[100px] animate-pulse [animation-delay:4s]"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default function ShowcasePage() {
  const { setProfessionId } = useProfession();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  const benefits = [
    { icon: <Layout size={24} />, title: "Diseño Premium", description: "Estética Dark Mode de alta gama para destacar en el mercado." },
    { icon: <Smartphone size={24} />, title: "Mobile First", description: "Optimizada para la conversión desde cualquier dispositivo." },
    { icon: <Zap size={24} />, title: "Velocidad Extrema", description: "Next.js 15 para una experiencia de usuario instantánea." },
  ];

  const getProfessionIcon = (id: string) => {
    switch (id) {
      case 'mecanico': return <Hammer size={32} />;
      case 'abogado': return <Gavel size={32} />;
      case 'psicologo': return <Heart size={32} />;
      case 'odontologo': return <Stethoscope size={32} />;
      case 'arquitecto': return <Compass size={32} />;
      case 'estetica': return <Sparkles size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-red-500/30 relative">
      <MeshBackground />
      
      {/* Hero Section del Showcase */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY, opacity }}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-red-500 text-xs font-black uppercase tracking-[0.2em]">Showcase Live</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black leading-none tracking-tighter"
            >
              EL ESTÁNDAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 animate-gradient-x">PROFESIONAL</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              No creamos sitios web. Construimos herramientas de autoridad diseñadas para convertir el tráfico en clientes recurrentes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <div className="flex flex-col items-center gap-2">
                <MousePointer2 className="text-white/20 animate-bounce" />
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Scroll para explorar</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Beneficios Core con Parallax sutil */}
      <section className="py-32 border-y border-white/5 bg-neutral-950/30 backdrop-blur-sm relative overflow-hidden">
        {/* Glow decorativo */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-500">
                  {b.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">{b.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Perfiles con Reveal Animation */}
      <section className="py-40 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[150px] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">ELEGÍ TU <br />ESPECIALIDAD</h2>
              <p className="text-neutral-500 max-w-md">Cada plantilla ha sido diseñada para las necesidades específicas de cada rubro, optimizando la psicología del cliente.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/5 to-white/20 mx-12 mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.values(PROFESSIONS).map((prof, i) => (
              <motion.div
                key={prof.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -20 }}
                className="group relative rounded-[40px] overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-700 backdrop-blur-md"
              >
                {/* Visual Depth Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0"></div>

                {/* Background Image with Cinematic Hover */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={prof.hero.image || (prof.about && prof.about.image) || ''}
                    alt={prof.label}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                    unoptimized
                  />
                  {/* Custom Depth Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                <div className="p-10 space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div 
                      className="w-16 h-16 rounded-[24px] flex items-center justify-center bg-white/5 border border-white/10 group-hover:rotate-6 transition-transform duration-500 backdrop-blur-xl shadow-xl shadow-black/50"
                      style={{ color: prof.accent }}
                    >
                      {getProfessionIcon(prof.id)}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest text-neutral-400 backdrop-blur-md">
                      Standard Version
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black tracking-tighter group-hover:text-white transition-colors uppercase italic">{prof.label}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium">{prof.hero.title}</p>
                  </div>

                  <div className="h-px w-full bg-white/10"></div>

                  <div className="grid grid-cols-2 gap-4">
                    {prof.differentials.slice(0, 2).map((d, di) => (
                      <div key={di} className="space-y-1">
                        <div className="flex items-center text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                          <CheckCircle2 size={12} className="mr-2" style={{ color: prof.accent }} />
                          {d.title}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/"
                    onClick={() => {
                      setProfessionId(prof.id as ProfessionId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-block w-full"
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-full px-8 py-5 rounded-2xl bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-2xl shadow-black relative overflow-hidden group/btn"
                      style={{ 
                        backgroundColor: prof.id === 'arquitecto' ? '#EAB308' : prof.accent,
                        color: 'white'
                      }}
                    >
                      <span className="relative z-10">Previsualizar</span>
                      <ArrowRight size={20} className="ml-3 group-hover/btn:translate-x-2 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                    </motion.div>
                  </Link>
                </div>
                
                {/* Accent Border Bottom */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 z-20"
                  style={{ backgroundColor: prof.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer del Showcase con gradiente */}
      <footer className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em]">
            © 2026 Antigravity Professionals • Built for Excellence
          </p>
          <div className="flex justify-center gap-6 text-white/20">
            <span className="hover:text-red-500 cursor-pointer transition-colors uppercase text-[8px] font-black tracking-widest">Privacy</span>
            <span className="hover:text-red-500 cursor-pointer transition-colors uppercase text-[8px] font-black tracking-widest">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
