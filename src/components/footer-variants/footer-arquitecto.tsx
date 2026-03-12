"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';

export function FooterArquitecto() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#0a0a05] pt-24 pb-12 border-t border-white/5 overflow-hidden">
        {/* Glow de fondo Ámbar Estructural */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-t-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-transparent border border-amber-500/30 flex items-center justify-center font-mono text-amber-500 text-xs font-bold">
                          AH-0
                        </div>
                        <span className="font-light tracking-[0.1em] text-3xl text-white uppercase italic">
                          Archi<span className="text-amber-500 font-serif">Hub</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 w-full md:w-3/4 leading-relaxed font-serif italic text-lg opacity-80">
                        Construyendo la arquitectura del mañana. La plataforma de gestión estructural diseñada para {profession.label.toLowerCase()}s y estudios de alto nivel creativo.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-amber-500/20 pb-2 inline-block">Proyectos</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-amber-500 transition-colors text-sm font-serif italic">Estudio Central</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-amber-500 transition-colors text-sm font-serif italic">Maquetas Digitales</a></li>
                        <li><a href="#reservar" className="text-neutral-500 hover:text-amber-500 transition-colors text-sm font-serif italic">Autorizar Plano</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-amber-500/20 pb-2 inline-block">Coordinación</h4>
                    <ul className="space-y-4 text-sm font-serif italic text-neutral-600">
                        <li>Oficina: +598 90 000 000</li>
                        <li>Email: studio@archihub.uy</li>
                        <li>Sede: Montevideo, Uruguay</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-700 text-[10px] font-mono uppercase tracking-[0.5em]">
                    © {new Date().getFullYear()} ArchiHub Structural Designs. Project_Finalized.
                </p>
                <div className="flex gap-6">
                    {['Pinterest', 'Behance'].map((social) => (
                      <a key={social} href="#" className="text-neutral-600 hover:text-amber-500 transition-all font-serif italic text-sm">
                        {social}
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
