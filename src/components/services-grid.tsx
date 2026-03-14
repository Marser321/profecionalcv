"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useProfession } from '@/context/profession-context';
import * as Icons from 'lucide-react';

export function ServicesGrid() {
  const { profession } = useProfession();
  
  if (!profession.fullServices) return null;

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px" style={{ backgroundColor: profession.accent }} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: profession.accent }}>
                Especialidades & Soluciones
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Servicios <span className="text-white/20 italic font-light">Elite</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              Despliegue táctico de soluciones avanzadas con rigor técnico y tecnología de última generación.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 text-white/20 select-none">
              <span className="text-8xl font-black leading-none">03</span>
              <div className="h-20 w-px bg-white/10" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {profession.fullServices.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Settings;
            const stepNumber = (index + 1).toString().padStart(2, '0');
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden min-h-[320px] flex flex-col justify-between"
              >
                {/* ÍNDICE MONUMENTAL DE FONDO */}
                <div className="absolute -bottom-10 -right-6 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-700">
                  {stepNumber}
                </div>

                {/* GLOW REACTIVO */}
                <div 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-10 transition duration-700 blur-3xl"
                  style={{ backgroundColor: profession.accent }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-start justify-between">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center bg-black border border-white/10 shadow-2xl"
                      style={{ color: profession.accent }}
                    >
                      <IconComponent size={32} strokeWidth={1.5} />
                    </motion.div>
                    
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                      Srv_{stepNumber}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {service.title}
                    </h3>
                    <p className="text-lg text-white/40 leading-relaxed font-light max-w-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-8 flex items-center justify-between">
                  <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors mr-8" />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all"
                  >
                    <span>Detalles</span>
                    <Icons.Plus size={14} style={{ color: profession.accent }} />
                  </motion.button>
                </div>

                {/* Borde sutil acentuado al hover */}
                <div 
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                  style={{ backgroundColor: profession.accent }}
                />
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to action secundario */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-white/30 uppercase tracking-[0.3em] font-medium">
            ¿Necesitas un servicio a medida? 
            <button className="ml-4 text-white hover:underline transition-all" style={{ color: profession.accent }}>
              Consultar con un experto
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
