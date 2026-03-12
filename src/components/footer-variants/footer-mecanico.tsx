"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { motion } from 'framer-motion';

export function FooterMecanico() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 border-t border-white/5 overflow-hidden">
        {/* Glow de fondo Rojo Taller */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none rounded-t-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-600 border border-red-500/30 flex items-center justify-center font-black text-white italic tracking-tighter shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                          MH
                        </div>
                        <span className="font-black tracking-tighter text-3xl text-white uppercase italic">
                          Meca<span className="text-red-600">Hub</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 w-full md:w-3/4 leading-relaxed font-medium text-lg uppercase italic text-xs tracking-widest">
                        Potenciando el estándar de servicio automotriz. La plataforma de gestión definitiva para {profession.label.toLowerCase()}s de alto rendimiento.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-black tracking-[0.3em] text-[10px] uppercase italic border-b border-red-600/30 pb-2 inline-block">Navegación</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-red-600 transition-colors text-xs font-bold uppercase tracking-widest">Panel_Inicio</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-red-600 transition-colors text-xs font-bold uppercase tracking-widest">Protocolos</a></li>
                        <li><a href="#reservar" className="text-neutral-500 hover:text-red-600 transition-colors text-xs font-bold uppercase tracking-widest">Agendar_Ingreso</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-black tracking-[0.3em] text-[10px] uppercase italic border-b border-red-600/30 pb-2 inline-block">Soporte_Técnico</h4>
                    <ul className="space-y-4 font-mono text-[10px] uppercase text-neutral-600">
                        <li className="flex items-center gap-2 italic"><span className="w-1 h-1 bg-red-600" /> Tel: +598 90 000 000</li>
                        <li className="flex items-center gap-2 italic"><span className="w-1 h-1 bg-red-600" /> Log: help@mecahub.uy</li>
                        <li className="flex items-center gap-2 italic"><span className="w-1 h-1 bg-red-600" /> Loc: MVD, URU [LAT]</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-700 text-[9px] font-black uppercase tracking-[0.4em] italic">
                    © {new Date().getFullYear()} MecaHub Systems. Precision_Engineered.
                </p>
                <div className="flex gap-6">
                    {['IG', 'IN', 'YT'].map((social) => (
                      <a key={social} href="#" className="text-neutral-600 hover:text-red-600 transition-all font-black italic text-xs tracking-tighter">
                        {social}_
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
