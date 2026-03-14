"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion } from 'framer-motion';

export function FooterArquitecto() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#0a0a05] pt-32 pb-12 border-t border-white/5 overflow-hidden font-sans">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/3 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                {/* Branding Block */}
                <div className="lg:col-span-5 space-y-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6"
                    >
                        <div className="w-16 h-16 bg-transparent border border-amber-500/30 flex items-center justify-center font-mono text-amber-500 text-xs font-bold shadow-[0_0_40px_rgba(234,179,8,0.1)]">
                          {profession.shortName}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-light tracking-[0.1em] text-4xl text-white uppercase italic leading-none">
                              {profession.brandName}
                            </span>
                            <span className="text-amber-500/60 font-mono text-[9px] tracking-[0.6em] uppercase mt-2">Architecture & Spatial Design studio</span>
                        </div>
                    </motion.div>
                    
                    <p className="text-neutral-500 text-lg md:text-xl leading-relaxed italic max-w-md opacity-80 font-serif">
                        "En {profession.brandName}, diseñamos el espacio donde la luz y la materia dialogan. Arquitectura atemporal para visiones sofisticadas."
                    </p>

                    <div className="flex gap-4">
                        {Object.entries(profession.socials || {}).map(([platform, handle]) => (
                            <motion.a 
                                key={platform}
                                whileHover={{ scale: 1.1, y: -5 }}
                                href={`https://${platform}.com/${handle}`}
                                className="w-12 h-12 bg-white/3 border border-white/10 flex items-center justify-center text-white hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                            >
                                <span className="font-sans italic text-[10px] uppercase font-bold">{platform.slice(0, 2)}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="lg:col-span-3 space-y-10">
                    <h4 className="text-white font-light tracking-[0.4em] text-xs uppercase border-l border-amber-500 pl-4 py-1 italic">Estudio_Navegación</h4>
                    <ul className="space-y-6">
                        {['Estudio_Central', 'Maquetas_Digitales', 'Autorizar_Plano', 'Legado_Silva'].map((item) => (
                            <li key={item}>
                                <a href="#" className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-colors">
                                    <div className="w-[1px] h-3 bg-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                                    <span className="text-xs font-light uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 italic font-serif">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location & Map Block */}
                <div className="lg:col-span-4 space-y-10">
                    <h4 className="text-white font-light tracking-[0.4em] text-xs uppercase border-l border-amber-500 pl-4 py-1 italic">Ubicación_Sede</h4>
                    <div className="space-y-6">
                        <div className="p-6 bg-white/[0.02] border border-white/5 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-colors" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-[1px] bg-amber-500/30 mt-3 shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-white text-sm font-light uppercase tracking-[0.1em]">{profession.location?.address || 'Montevideo, Uruguay'}</p>
                                        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] italic font-serif">{profession.location?.city || 'Montevideo'}</p>
                                    </div>
                                </div>
                                <a 
                                    href={profession.location?.mapUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-amber-500 font-light text-[9px] uppercase tracking-[0.3em] hover:text-white transition-colors italic font-serif"
                                >
                                    VER PLANO DE ACCESO [MAP] →
                                </a>
                            </div>
                        </div>

                        {/* Minimalist Map Visual Representation */}
                        <div className="h-24 w-full bg-[#0a0a05] border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(234,179,8,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,.05) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                            <div className="w-[20%] h-[1px] bg-amber-500/20 absolute top-1/2 left-1/2 -translate-x-1/2" />
                            <div className="h-[20%] w-[1px] bg-amber-500/20 absolute top-1/2 left-1/2 -translate-y-1/2" />
                            <div className="w-1.5 h-1.5 bg-amber-500 relative z-10 opacity-70">
                                <div className="absolute inset-0 bg-amber-500 animate-ping opacity-75" />
                            </div>
                             <span className="relative z-10 ml-4 font-mono text-[8px] text-neutral-600 uppercase tracking-[0.5em]">STRU_LINK_{(profession.location?.city || 'MVD').toUpperCase().slice(0,3)}_SA</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <p className="text-neutral-700 text-[9px] uppercase tracking-[0.5em] font-light italic font-serif">
                        © {new Date().getFullYear()} {profession.brandName} Structural Studio. All Rights Reserved.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-end text-neutral-600 font-light uppercase italic">
                        <span className="text-[8px] tracking-[0.2em]">Design_Audit</span>
                        <span className="text-[9px] tracking-[0.4em] text-neutral-500">Socio_Certificado</span>
                    </div>
                    <div className="w-10 h-10 border border-white/5 flex items-center justify-center">
                        <span className="text-white text-[10px] font-light">AV</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
