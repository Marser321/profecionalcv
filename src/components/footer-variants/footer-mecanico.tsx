"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion } from 'framer-motion';

export function FooterMecanico() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 border-t border-white/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                {/* Branding Block */}
                <div className="lg:col-span-5 space-y-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-5"
                    >
                        <div className="w-16 h-16 bg-red-600 flex items-center justify-center font-black text-white italic text-2xl tracking-tighter shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                          {profession.shortName}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black tracking-tighter text-4xl text-white uppercase italic leading-none">
                              {profession.brandName}
                            </span>
                            <span className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase mt-1">Engineered Excellence</span>
                        </div>
                    </motion.div>
                    
                    <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-medium max-w-md italic">
                        "En {profession.brandName}, la precisión no es un objetivo, es nuestro estándar absoluto. Redefiniendo la mecánica de alto rendimiento desde Montevideo."
                    </p>

                    <div className="flex gap-4">
                        {Object.entries(profession.socials || {}).map(([platform, handle], idx) => (
                            <motion.a 
                                key={platform}
                                whileHover={{ scale: 1.1, y: -5 }}
                                href={`https://${platform}.com/${handle}`}
                                className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                            >
                                <span className="font-black italic text-[10px] uppercase">{platform.slice(0, 2)}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="lg:col-span-3 space-y-10">
                    <h4 className="text-white font-black tracking-[0.4em] text-xs uppercase italic border-l-4 border-red-600 pl-4 py-1">Navegación_Core</h4>
                    <ul className="space-y-6">
                        {['Protocolos', 'UnidadesAtendidas', 'Agendar_Ingreso', 'Manuales_Técnicos'].map((item) => (
                            <li key={item}>
                                <a href="#" className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-colors">
                                    <div className="w-1 h-1 bg-red-600 scale-0 group-hover:scale-100 transition-transform" />
                                    <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location & Map Block */}
                <div className="lg:col-span-4 space-y-10">
                    <h4 className="text-white font-black tracking-[0.4em] text-xs uppercase italic border-l-4 border-red-600 pl-4 py-1">Sede_Central</h4>
                    <div className="space-y-6">
                        <div className="p-6 bg-white/5 border border-white/10 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-2xl group-hover:bg-red-600/10 transition-colors" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white font-bold uppercase italic text-sm">{profession.location?.address || 'Montevideo, Uruguay'}</p>
                                        <p className="text-neutral-500 font-medium text-xs uppercase tracking-widest">{profession.location?.city || 'Montevideo'}, URUGUAY</p>
                                    </div>
                                </div>
                                <a 
                                    href={profession.location?.mapUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Abrir en Coordenadas GPS [MAP] →
                                </a>
                            </div>
                        </div>

                        {/* Minimalist Map Visual Representation */}
                        <div className="h-24 w-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                            <div className="w-2 h-2 bg-red-600 rounded-full relative z-10">
                                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75" />
                            </div>
                            <span className="relative z-10 ml-4 font-mono text-[8px] text-neutral-600 uppercase tracking-widest">LOC_TRACKER: 34.9011° S, 56.1645° W</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <p className="text-neutral-700 text-[10px] font-black uppercase tracking-[0.5em] italic">
                        © {new Date().getFullYear()} {profession.brandName} Systems. Built for High-Performance.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-end">
                        <span className="text-neutral-600 text-[9px] font-bold uppercase tracking-widest">System_Auth</span>
                        <span className="text-neutral-400 text-[10px] font-black uppercase italic tracking-widest">Antigravity_Elite_Partner</span>
                    </div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                        <span className="text-white font-black text-xs italic">AV</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
