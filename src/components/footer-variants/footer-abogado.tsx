"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';

export function FooterAbogado() {
  const { profession } = useProfession();

  return (
    <footer className="relative bg-[#050508] pt-24 pb-12 border-t border-white/5 overflow-hidden">
        {/* Glow de fondo Azul Lex */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-t-full" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-transparent border border-blue-500/30 flex items-center justify-center font-serif text-blue-500 text-xl italic font-bold shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                          LH
                        </div>
                        <span className="font-serif tracking-tight text-3xl text-white italic">
                          Lex<span className="text-blue-500">Hub</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 w-full md:w-3/4 leading-relaxed font-serif italic text-lg opacity-80">
                        Preservando la integridad y la excelencia jurídica. La solución de gestión de alto nivel para {profession.label.toLowerCase()}s y firmas de prestigio.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-blue-500/20 pb-2 inline-block">Directorio</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-neutral-500 hover:text-blue-500 transition-colors text-sm font-serif italic">Portal Principal</a></li>
                        <li><a href="#" className="text-neutral-500 hover:text-blue-500 transition-colors text-sm font-serif italic">Jurisprudencia</a></li>
                        <li><a href="#reservar" className="text-neutral-500 hover:text-blue-500 transition-colors text-sm font-serif italic">Agendar Consulta Privada</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-serif italic tracking-widest text-sm border-b border-blue-500/20 pb-2 inline-block">Contacto</h4>
                    <ul className="space-y-4 text-sm font-serif italic text-neutral-600">
                        <li>Teléfono: +598 90 000 000</li>
                        <li>Email: gabinete@lexhub.uy</li>
                        <li>Ubicación: Montevideo, Uruguay</li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-700 text-xs font-serif italic">
                    © {new Date().getFullYear()} LexHub Institutional Systems. Confidencialidad Garantizada.
                </p>
                <div className="flex gap-6">
                    {['Instagram', 'LinkedIn'].map((social) => (
                      <a key={social} href="#" className="text-neutral-600 hover:text-blue-500 transition-all font-serif italic text-sm">
                        {social}
                      </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
}
