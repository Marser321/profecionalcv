"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion } from 'framer-motion';

export function FooterOdontologo() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#05080a] pt-32 pb-12 border-t border-white/5 overflow-hidden font-mono">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
        
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
                        <div className="w-16 h-16 bg-black border border-cyan-500/40 flex items-center justify-center font-mono text-cyan-500 text-2xl font-black shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                          {profession.shortName}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black tracking-widest text-4xl text-white uppercase italic leading-none">
                              {profession.brandName}
                            </span>
                            <span className="text-cyan-500 font-mono text-[9px] tracking-[0.5em] uppercase mt-2">High-Precision Dental Systems</span>
                        </div>
                    </motion.div>
                    
                    <p className="text-neutral-500 text-lg md:text-xl leading-relaxed uppercase tracking-widest text-[10px] font-black max-w-md italic">
                        "En {profession.brandName}, la tecnología es el lenguaje de la perfección solar. Elevando la estética con biotecnología 3D."
                    </p>

                    <div className="flex gap-4">
                        {Object.entries(profession.socials || {}).map(([platform, handle]) => (
                            <motion.a 
                                key={platform}
                                whileHover={{ scale: 1.1, y: -5 }}
                                href={`https://${platform}.com/${handle}`}
                                className="w-12 h-12 bg-white/3 border border-white/10 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                            >
                                <span className="font-mono italic text-[10px] uppercase font-black">{platform.slice(0, 2)}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="lg:col-span-3 space-y-10">
                    <h4 className="text-white font-black tracking-[0.4em] text-xs uppercase italic border-l-2 border-cyan-500 pl-4 py-1">System_Nodes</h4>
                    <ul className="space-y-6">
                        {['Portal_Paciente', 'Clinical_Log', 'Reserve_Scan', 'Bio_Protocol'].map((item) => (
                            <li key={item}>
                                <a href="#" className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-colors">
                                    <div className="w-1 h-1 bg-cyan-500 scale-0 group-hover:scale-100 transition-transform" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 group-hover:opacity-100">{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location & Map Block */}
                <div className="lg:col-span-4 space-y-10">
                    <h4 className="text-white font-black tracking-[0.4em] text-xs uppercase italic border-l-2 border-cyan-500 pl-4 py-1">Clinical_Geo</h4>
                    <div className="space-y-6">
                        <div className="p-6 bg-white/2 border border-white/10 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 border border-cyan-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white text-sm font-black uppercase tracking-widest">{profession.location?.address || 'Montevideo, Uruguay'}</p>
                                        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-black">{profession.location?.city || 'Montevideo'}</p>
                                    </div>
                                </div>
                                <a 
                                    href={profession.location?.mapUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-cyan-400 font-mono text-[9px] uppercase tracking-[0.3em] font-black hover:text-white transition-colors"
                                >
                                    OPEN_COORDINATES [GPS] →
                                </a>
                            </div>
                        </div>

                        {/* Minimalist Map Visual Representation */}
                        <div className="h-24 w-full bg-[#030608] border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0,198,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,.1) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                            <div className="w-1.5 h-1.5 bg-cyan-500 relative z-10 shadow-[0_0_10px_#00c6ff]">
                                <div className="absolute inset-0 bg-cyan-500 animate-ping opacity-75" />
                            </div>
                             <span className="relative z-10 ml-4 font-mono text-[8px] text-neutral-600 uppercase tracking-[0.5em]">DATALINK_{(profession.location?.city || 'MVD').toUpperCase().slice(0,3)}_ST01</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <p className="text-neutral-700 text-[9px] uppercase tracking-[0.5em] font-black">
                        © {new Date().getFullYear()} {profession.brandName} OS. All Actions Precise.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-end">
                        <span className="text-neutral-600 text-[8px] font-black uppercase tracking-widest">Core_Interface</span>
                        <span className="text-neutral-400 text-[9px] font-black uppercase italic tracking-widest">Antigravity_Elite_Partner</span>
                    </div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                        <span className="text-white text-[10px] font-black italic">AV</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
