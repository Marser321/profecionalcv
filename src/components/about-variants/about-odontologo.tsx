"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfessionDetail } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

// ==========================================
// ABOUT ODONTÓLOGO — Grid Clínico Asimétrico
// Personalidad: Limpio, clínico, blanco/cyan.
// Estructura: Split asimétrico 40/60, porcentajes animados
// ==========================================
export function AboutOdontologo({ profession }: { profession: ProfessionDetail }) {
  if (!profession.about) return null;

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Fondo clínico: rejilla sutil */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch min-h-[70vh]">
          {/* Columna izquierda angosta: estadísticas verticales */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles size={14} style={{ color: profession.accent }} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: profession.accent }}>
                  Clínica & Tecnología
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                {profession.about.title}
              </h2>
              <p className="text-white/50 text-base leading-relaxed font-light">
                {profession.about.description}
              </p>
            </div>

            {/* Stats verticales con barra animada */}
            <div className="space-y-5">
              {profession.stats.map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-end justify-between">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</span>
                    <span className="text-xl font-black" style={{ color: profession.accent }}>{s.value}</span>
                  </div>
                  <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: profession.accent }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${60 + i * 15}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Firma */}
            {profession.about.signature && (
              <div className="pt-4 border-t border-white/10">
                <p className="font-mono text-white/60 text-sm tracking-tight">
                  <span style={{ color: profession.accent }}>+</span> {profession.about.signature}
                </p>
              </div>
            )}
          </div>

          {/* Columna derecha: Imagen grande + 2 fichas de detalle */}
          <div className="lg:col-span-3 grid grid-rows-3 gap-4">
            {/* Imagen principal: 2/3 de la altura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="row-span-2 relative rounded-3xl overflow-hidden border border-white/10 group"
            >
              <Image
                unoptimized
                src={profession.about.image}
                alt={profession.about.title}
                fill
                sizes="60vw"
                className="object-cover brightness-80 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
              <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                <span className="text-[10px] font-black uppercase tracking-widest text-white">ISO Certificado</span>
              </div>
            </motion.div>

            {/* Fila inferior: 2 tarjetas de diferenciales */}
            <div className="row-span-1 grid grid-cols-2 gap-4">
              {profession.differentials.slice(0, 2).map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col justify-between"
                >
                  <div
                    className="w-6 h-1 rounded-full mb-3"
                    style={{ backgroundColor: profession.accent }}
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{d.title}</h4>
                    <p className="text-white/40 text-xs leading-snug">{d.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
