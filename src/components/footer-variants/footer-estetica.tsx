"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion } from 'framer-motion';

export function FooterEstetica() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#0a0508] pt-32 pb-12 border-t border-white/5 overflow-hidden font-serif">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/3 blur-[120px] pointer-events-none rounded-full" />
        
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
                        <div className="w-16 h-16 bg-white/[0.03] border border-pink-500/20 rounded-full flex items-center justify-center font-serif text-pink-400 text-2xl italic font-bold shadow-[0_0_40px_rgba(236,72,153,0.1)]">
                          {profession.shortName}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-light tracking-[0.2em] text-4xl text-white uppercase italic leading-none">
                              {profession.brandName}
                            </span>
                            <span className="text-pink-500/60 font-serif text-[9px] tracking-[0.5em] uppercase mt-2 italic">Sensory Aesthetics & Wellness Sanctuary</span>
                        </div>
                    </motion.div>
                    
                    <p className="text-neutral-500 text-lg md:text-xl leading-relaxed italic max-w-md opacity-80">
                        "En {profession.brandName}, la belleza es un ritual de amor propio. Elevando la fisionomía con la máxima sofisticación y biotecnología dermal."
                    </p>

                    <div className="flex gap-4">
                        {Object.entries(profession.socials || {}).map(([platform, handle]) => (
                            <motion.a 
                                key={platform}
                                whileHover={{ scale: 1.1, y: -5 }}
                                href={`https://${platform}.com/${handle}`}
                                className="w-12 h-12 bg-white/3 border border-pink-500/10 rounded-full flex items-center justify-center text-white hover:text-pink-400 hover:border-pink-400 transition-all duration-300"
                            >
                                <span className="font-serif italic text-[10px] uppercase">{platform.slice(0, 2)}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="lg:col-span-3 space-y-10">
                    <h4 className="text-white font-light tracking-[0.4em] text-xs uppercase border-l-2 border-pink-500/20 pl-4 py-1 italic">Experiencias_Luxe</h4>
                    <ul className="space-y-6">
                        {['Catálogo_De_Lujo', 'Rituales_Dermales', 'Solicitar_Encuentro', 'Pureza_Protocolo'].map((item) => (
                            <li key={item}>
                                <a href="#" className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-colors">
                                    <div className="w-1 h-1 bg-pink-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                                    <span className="text-xs font-serif italic opacity-70 group-hover:opacity-100 uppercase tracking-widest leading-none">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location & Map Block */}
                <div className="lg:col-span-4 space-y-10">
                    <h4 className="text-white font-light tracking-[0.4em] text-xs uppercase border-l-2 border-pink-500/20 pl-4 py-1 italic">Santuario_Local</h4>
                    <div className="space-y-6">
                        <div className="p-6 bg-white/[0.03] border border-white/10 rounded-[40px] relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-2xl group-hover:bg-pink-500/10 transition-colors" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full border border-pink-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white text-sm font-light italic leading-tight">{profession.location?.address || 'Montevideo, Uruguay'}</p>
                                        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] italic">{profession.location?.city || 'Montevideo'}</p>
                                    </div>
                                </div>
                                <a 
                                    href={profession.location?.mapUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-pink-400 font-serif italic text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Abrir Mapa Sensorial [MAP] →
                                </a>
                            </div>
                        </div>

                        {/* Minimalist Map Visual Representation */}
                        <div className="h-24 w-full bg-[#0a0508] border border-white/5 rounded-[40px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
                            <div className="w-2 h-2 bg-pink-500 rounded-full relative z-10 shadow-[0_0_15px_#ec4899]">
                                <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-75" />
                            </div>
                             <span className="relative z-10 ml-4 font-mono text-[8px] text-neutral-600 uppercase tracking-[0.6em]">ZEN_POINT: {(profession.location?.city || 'MVD').toUpperCase().slice(0,3)}v2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <p className="text-neutral-700 text-[10px] uppercase tracking-[0.5em] font-serif italic">
                        © {new Date().getFullYear()} {profession.brandName} Sensory Protocol. Beyond Beauty.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-end text-neutral-600 font-serif italic uppercase">
                        <span className="text-[8px] tracking-[0.3em]">Signature_Care</span>
                        <span className="text-[9px] tracking-[0.5em] text-neutral-500">Socio_Certificado</span>
                    </div>
                    <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-serif italic">AV</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
