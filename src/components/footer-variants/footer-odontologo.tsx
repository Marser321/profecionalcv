"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';

export function FooterOdontologo() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#05080a] pt-24 pb-12 border-t border-white/5 overflow-hidden">
        {/* Glow de fondo Cyan Clínico */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-t-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-black border border-cyan-500/30 flex items-center justify-center font-mono text-cyan-500 text-xl font-black shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                          DH
                        </div>
                        <span className="font-black tracking-widest text-3xl text-white uppercase italic">
                          Dental<span className="text-cyan-500">Hub</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 w-full md:w-3/4 leading-relaxed font-mono text-xs uppercase tracking-widest opacity-80">
                        Elevando la precisión odontológica con tecnología de vanguardia. La suite clínica definitiva para {profession.label.toLowerCase()}s de nueva generación.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-black tracking-[0.3em] text-[10px] uppercase italic border-b border-cyan-500/20 pb-2 inline-block">Sistemas_Navegación</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-cyan-500 transition-colors text-[10px] font-mono uppercase tracking-widest">Dash_Main</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-cyan-500 transition-colors text-[10px] font-mono uppercase tracking-widest">Clinical_Log</a></li>
                        <li><a href="#reservar" className="text-neutral-500 hover:text-cyan-500 transition-colors text-[10px] font-mono uppercase tracking-widest">Reserve_Scan</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-black tracking-[0.3em] text-[10px] uppercase italic border-b border-cyan-500/20 pb-2 inline-block">Contacto_Canal</h4>
                    <ul className="space-y-4 text-[10px] font-mono uppercase text-neutral-600">
                        <li>ID: +598 90 000 000</li>
                        <li>NET: support@dentalhub.uy</li>
                        <li>GEO: MVD, URU [LAT]</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-700 font-mono text-[9px] uppercase tracking-[0.4em]">
                    © {new Date().getFullYear()} DentalHub Clinical Interface. Precise_Action.
                </p>
                <div className="flex gap-6">
                    {['IG', 'IN'].map((social) => (
                      <a key={social} href="#" className="text-neutral-600 hover:text-cyan-500 transition-all font-mono text-[10px] font-black italic">
                        {social}_OS
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
