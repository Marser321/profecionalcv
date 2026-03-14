"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfessionDetail } from '@/lib/constants';
import { Gauge, Wrench, Zap, ShieldCheck } from 'lucide-react';

// ==========================================
// ABOUT MECÁNICO — Layout Industrial Diagonal
// Personalidad: Cruda, técnica, potente.
// Estructura: División diagonal, stats holográficos flotantes
// ==========================================
export function AboutMecanico({ profession }: { profession: ProfessionDetail }) {
  if (!profession.about) return null;
  const ICONS = [Gauge, Wrench, Zap, ShieldCheck];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Diagonal slash de fondo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, black 50%, ${profession.accent}08 100%)`,
        }}
      />
      {/* Líneas de velocidad */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
          style={{
            top: `${15 + i * 14}%`,
            left: 0,
            right: 0,
            transform: `skewY(-3deg)`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-[2px]" style={{ backgroundColor: profession.accent }} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: profession.accent }}>
            El Taller • La Filosofía
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Título técnico - gran espacio */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
              {profession.about.title.split(' ').slice(0, 3).join(' ')}
              <br />
              <span style={{ color: profession.accent }}>
                {profession.about.title.split(' ').slice(3).join(' ')}
              </span>
            </h2>

            {/* Stats holográficos */}
            <div className="grid grid-cols-3 gap-3 pt-6">
              {profession.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm text-center relative overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                    style={{ backgroundColor: profession.accent }}
                  />
                  <p className="text-2xl font-black" style={{ color: profession.accent }}>{s.value}</p>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest mt-1 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Firma */}
            {profession.about.signature && (
              <div className="pt-4 border-t border-white/10">
                <p className="text-lg font-mono text-white/70 tracking-tight">{profession.about.signature}</p>
              </div>
            )}
          </div>

          {/* Imagen + descripción */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 group"
            >
              <Image
                unoptimized
                src={profession.about.image}
                alt={profession.about.title}
                fill
                sizes="60vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75"
              />
              {/* Overlay diagonal */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${profession.accent}40 0%, transparent 60%)`,
                }}
              />
              {/* Badge técnico */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: profession.accent }} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Sistema Activo</span>
              </div>
            </motion.div>

            <p className="text-lg text-white/60 leading-relaxed font-light">
              {profession.about.description}
            </p>

            {/* Diferenciales como fichas técnicas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profession.differentials.map((d, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.02]"
                  >
                    <Icon size={18} className="mt-0.5 shrink-0" style={{ color: profession.accent }} />
                    <div>
                      <h4 className="text-white font-bold text-sm">{d.title}</h4>
                      <p className="text-white/40 text-xs mt-1 leading-relaxed">{d.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
