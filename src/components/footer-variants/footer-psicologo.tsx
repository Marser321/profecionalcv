"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';

export function FooterPsicologo() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#080a09] pt-24 pb-12 border-t border-white/5 overflow-hidden">
        {/* Glow de fondo Verde Esmeralda */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-t-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center font-serif text-emerald-400 text-xl italic font-bold">
                          MH
                        </div>
                        <span className="font-light tracking-tight text-3xl text-white">
                          Mind<span className="text-emerald-400 font-serif italic">Hub</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 w-full md:w-3/4 leading-relaxed font-serif italic text-lg opacity-80">
                        Cuidando el bienestar y el desarrollo humano. La plataforma de acompañamiento diseñada para {profession.label.toLowerCase()}s y el crecimiento de sus consultantes.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-emerald-500/10 pb-2 inline-block">Bienestar</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-emerald-400 transition-colors text-sm font-serif italic">Espacio Personal</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-emerald-400 transition-colors text-sm font-serif italic">Recursos</a></li>
                        <li><a href="#reservar" className="text-neutral-500 hover:text-emerald-400 transition-colors text-sm font-serif italic">Agendar Encuentro</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-emerald-500/10 pb-2 inline-block">Contacto</h4>
                    <ul className="space-y-4 text-sm font-serif italic text-neutral-600">
                        <li>Tel: +598 90 000 000</li>
                        <li>Email: holis@mindhub.uy</li>
                        <li>Espacio: Montevideo, Uruguay</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-700 text-xs font-serif italic">
                    © {new Date().getFullYear()} MindHub Companion. Un primer paso hacia la calma.
                </p>
                <div className="flex gap-6">
                    {['Instagram', 'Podcast'].map((social) => (
                      <a key={social} href="#" className="text-neutral-600 hover:text-emerald-400 transition-all font-serif italic text-sm">
                        {social}
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
