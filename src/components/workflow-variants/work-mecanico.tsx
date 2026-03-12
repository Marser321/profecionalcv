"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion, Variants } from 'framer-motion';

export function WorkMecanico() {
  const { profession } = useProfession();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Elementos industriales de fondo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ff0000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0000]/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1 border-l-2 border-red-600 bg-red-600/10 text-red-500 text-xs font-bold tracking-widest uppercase italic">
                Protocolo de Servicio
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
                El Camino a la <br />
                <span className="text-red-600">Potencia</span>
              </h2>
              <p className="text-lg text-neutral-400 font-medium leading-relaxed max-w-sm">
                Nuestra metodología garantiza que cada vehículo reciba un tratamiento de competición, desde el diagnóstico hasta la entrega final.
              </p>
              
              <div className="flex gap-4">
                <div className="h-10 w-1 bg-red-600/20" />
                <p className="text-xs text-neutral-600 font-mono uppercase tracking-tighter">
                  Verificado por <br /> Standard ISO-9001
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {profession.workflow.map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative flex items-stretch gap-8 p-1 bg-[#121212] border border-white/5 transition-all duration-300 hover:border-red-600/30"
                >
                  {/* Número Gigante Estructural */}
                  <div className="flex-shrink-0 w-24 bg-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-red-600 transition-colors duration-500">
                    <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors duration-500 relative z-10">
                      0{i + 1}
                    </span>
                    <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,0.1)_5px,rgba(255,255,255,0.1)_10px)]" />
                  </div>

                  <div className="flex-grow p-8 py-10 space-y-4">
                    <h3 className="text-2xl font-bold text-white uppercase italic tracking-wide group-hover:text-red-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed font-medium group-hover:text-neutral-200 transition-colors">
                      {step.description}
                    </p>
                    
                    {/* Barra de progreso decorativa tipo taller */}
                    <div className="h-[2px] w-full bg-white/5 mt-6 relative overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "100%" }}
                         transition={{ duration: 1, delay: i * 0.2 }}
                         className="absolute h-full bg-red-600/50"
                       />
                    </div>
                  </div>

                  {/* Icono decorativo de hardware */}
                  <div className="absolute top-2 right-2 text-white/5 group-hover:text-red-600/20 transition-colors">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.97 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.53,21.58C9.57,21.82 9.78,22 10.03,22H14.03C14.28,22 14.49,21.82 14.53,21.58L14.9,18.93C15.53,18.68 16.07,18.34 16.59,17.94L19.08,18.95C19.3,19.03 19.57,18.95 19.69,18.73L21.69,15.27C21.82,15.05 21.76,14.78 21.57,14.63L19.43,12.97Z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
