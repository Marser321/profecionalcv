"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfessionDetail } from '@/lib/constants';

// ==========================================
// ABOUT ARQUITECTO — Plano Blueprint Animado
// Personalidad: Geométrico, dorado, estructural.
// Estructura: Layout tipo plano técnico con líneas animadas
// ==========================================
export function AboutArquitecto({ profession }: { profession: ProfessionDetail }) {
  if (!profession.about) return null;

  return (
    <section id="about" className="py-24 bg-[#050506] relative overflow-hidden">
      {/* Blueprint grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="bp-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={profession.accent} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid)" />
      </svg>

      {/* Líneas de plano animadas */}
      {[20, 40, 60, 80].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute h-px pointer-events-none"
          style={{
            top: `${pos}%`,
            backgroundColor: profession.accent,
            opacity: 0.06,
          }}
          initial={{ width: 0, left: '50%' }}
          whileInView={{ width: '100%', left: 0 }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          viewport={{ once: true }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Coordenadas de plano */}
        <div className="flex items-center justify-between mb-16 text-[10px] font-mono text-white/20 uppercase tracking-widest">
          <span>LAT: -34.9032 / LONG: -56.1906</span>
          <span style={{ color: profession.accent }}>PROYECTO_ELITE_V2.ARQD</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto: bloques de especificaciones técnicas */}
          <div className="space-y-10">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-px h-16 shrink-0" style={{ backgroundColor: profession.accent }} />
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85]">
                  {profession.about.title}
                </h2>
              </div>
              <p className="text-lg text-white/50 leading-relaxed font-light border-l pl-5 border-white/10">
                {profession.about.description}
              </p>
            </div>

            {/* Especificaciones técnicas como tabla de plano */}
            <div className="space-y-0">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-3">
                <span className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: profession.accent }}>
                  Especificaciones del Estudio
                </span>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {profession.differentials.map((d, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12 }}
                      viewport={{ once: true }}
                      className="border-b border-white/5 group"
                    >
                      <td className="py-4 pr-4 w-8">
                        <span className="text-xs font-mono" style={{ color: profession.accent }}>
                          {String.fromCharCode(65 + i)}
                        </span>
                      </td>
                      <td className="py-4 pr-6 text-white font-bold group-hover:pl-1 transition-all">{d.title}</td>
                      <td className="py-4 text-white/40 font-light">{d.description}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Firma */}
            {profession.about.signature && (
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Firmado por</span>
                <span className="font-serif italic text-white/70">{profession.about.signature}</span>
              </div>
            )}
          </div>

          {/* Imagen con marco tipo plano */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Marco exterior de plano */}
            <div
              className="absolute -inset-4 border pointer-events-none rounded-2xl"
              style={{ borderColor: profession.accent + '30' }}
            />
            {/* Marcas de esquina */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-4 h-4 border-white/30`} style={{
                borderTopWidth: i < 2 ? '2px' : 0,
                borderBottomWidth: i >= 2 ? '2px' : 0,
                borderLeftWidth: i % 2 === 0 ? '2px' : 0,
                borderRightWidth: i % 2 === 1 ? '2px' : 0,
              }} />
            ))}

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                unoptimized
                src={profession.about.image}
                alt={profession.about.title}
                fill
                sizes="50vw"
                className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(45deg, ${profession.accent}30 0%, transparent 60%)`,
                }}
              />
            </div>

            {/* Stats debajo de la foto */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {profession.stats.map((s, i) => (
                <div key={i} className="border border-white/10 p-3 rounded-xl text-center bg-white/[0.02]">
                  <p className="text-lg font-black font-mono" style={{ color: profession.accent }}>{s.value}</p>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
