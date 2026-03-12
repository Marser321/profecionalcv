"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';

export function FooterEstetica() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#0a0508] pt-24 pb-12 border-t border-white/5 overflow-hidden">
        {/* Glow de fondo Magenta Glam */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pink-500/5 blur-[150px] pointer-events-none rounded-t-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/[0.03] border border-pink-500/20 rounded-full flex items-center justify-center font-serif text-pink-400 text-2xl italic font-bold">
                          G
                        </div>
                        <span className="font-light tracking-[0.2em] text-3xl text-white uppercase italic font-serif">
                          Glam<span className="text-pink-400">Hub</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 w-full md:w-3/4 leading-relaxed font-serif italic text-lg opacity-80">
                        Elevando el bienestar con la máxima sofisticación sensorial. La experiencia de lujo definitiva para {profession.label.toLowerCase()}s y la belleza de quienes confían en ellas.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-pink-500/10 pb-2 inline-block">Experiencias</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-pink-400 transition-colors text-sm font-serif italic">Catálogo de Lujo</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-pink-400 transition-colors text-sm font-serif italic">Tratamientos</a></li>
                        <li><a href="#reservar" className="text-neutral-500 hover:text-pink-400 transition-colors text-sm font-serif italic">Solicitar Ritual</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-pink-500/10 pb-2 inline-block">Privacidad</h4>
                    <ul className="space-y-4 text-sm font-serif italic text-neutral-600">
                        <li>Concierge: +598 90 000 000</li>
                        <li>Email: vip@glamhub.uy</li>
                        <li>Espacio: Montevideo, Uruguay</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-700 text-xs font-serif italic">
                    © {new Date().getFullYear()} GlamHub Sensory Systems. Todo es un ritual.
                </p>
                <div className="flex gap-6">
                    {['Instagram', 'TikTok'].map((social) => (
                      <a key={social} href="#" className="text-neutral-600 hover:text-pink-400 transition-all font-serif italic text-sm">
                        {social}
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
