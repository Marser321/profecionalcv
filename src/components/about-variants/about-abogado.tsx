"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfessionDetail } from '@/lib/constants';
import { Scale, BookOpen, Shield } from 'lucide-react';

// ==========================================
// ABOUT ABOGADO — Layout Biblioteca Clásica
// Personalidad: Sobriedad, autoridad, azul profundo.
// Estructura: Columnas con cita latina en latín, foto oscurecida
// ==========================================
export function AboutAbogado({ profession }: { profession: ProfessionDetail }) {
  if (!profession.about) return null;

  const LATIN_QUOTE = "Dura lex, sed lex.";

  return (
    <section id="about" className="py-24 bg-[#050810] relative overflow-hidden">
      {/* Patrón de papel grueso */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)" }}
      />

      {/* Gradiente lateral izquierdo dorado/azul */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ backgroundColor: profession.accent }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* HEADER con cita latina */}
        <div className="flex items-center gap-6 mb-20 pb-10 border-b border-white/10">
          <Scale size={28} style={{ color: profession.accent }} className="shrink-0" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">Principium Iuris</p>
            <p className="text-2xl font-serif italic text-white/80">{LATIN_QUOTE}</p>
          </div>
          <div className="ml-auto hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: profession.accent }}>
              Est. 2004
            </span>
          </div>
        </div>

        {/* CUERPO: 3 columnas tipo revista legal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Col 1: Foto con overlay oscuro + badge clásico */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                unoptimized
                src={profession.about.image}
                alt={profession.about.title}
                fill
                sizes="33vw"
                className="object-cover brightness-50 group-hover:brightness-75 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              {/* Badge número de matrícula */}
              <div className="absolute bottom-6 left-0 right-0 px-6">
                <div className="p-4 border border-white/20 rounded-xl bg-black/60 backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Matrícula IUDEP</p>
                  <p className="text-xl font-black text-white font-mono">N° 04.7821</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Col 2: Texto principal estilo artículo */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={14} style={{ color: profession.accent }} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: profession.accent }}>
                  Filosofía & Rigor
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                {profession.about.title}
              </h2>
              <p className="text-lg text-white/60 leading-relaxed font-light border-l-2 pl-6" style={{ borderColor: profession.accent + '60' }}>
                {profession.about.description}
              </p>
            </div>

            {/* Áreas de práctica como lista clásica */}
            <div className="space-y-0 divide-y divide-white/5">
              {profession.differentials.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 py-5 group"
                >
                  <span
                    className="text-xs font-black font-mono pt-1 shrink-0"
                    style={{ color: profession.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-white font-bold mb-1 group-hover:pl-1 transition-all">{d.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Firma */}
            {profession.about.signature && (
              <div className="pt-6 flex items-center gap-4">
                <Shield size={16} className="text-white/20" />
                <div>
                  <p className="text-white/80 font-serif italic text-lg">{profession.about.signature}</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mt-0.5">Firma de Autoridad</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
