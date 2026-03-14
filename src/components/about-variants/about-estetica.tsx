"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfessionDetail } from '@/lib/constants';
import { Sparkles, Star } from 'lucide-react';

// ==========================================
// ABOUT ESTÉTICA — Editorial Full-Bleed Glassmorphism
// Personalidad: Elegante, editorial, premium magazine.
// Estructura: Foto full-bleed con overlay + glassmorphism cards flotantes
// ==========================================
export function AboutEstetica({ profession }: { profession: ProfessionDetail }) {
  if (!profession.about) return null;

  return (
    <section id="about" className="py-0 bg-black relative overflow-hidden">
      {/* Full-bleed imagen de fondo */}
      <div className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            unoptimized
            src={profession.about.image}
            alt={profession.about.title}
            fill
            sizes="100vw"
            className="object-cover brightness-40"
          />
          {/* Overlay gradiente editorial */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: `linear-gradient(135deg, ${profession.accent}20 0%, transparent 70%)` }}
          />
        </div>

        {/* Contenido superpuesto */}
        <div className="relative z-10 w-full container mx-auto px-4 md:px-8 pb-20 pt-40">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-8"
          >
            <Sparkles size={12} style={{ color: profession.accent }} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
              Belleza de Alta Gama
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-12 max-w-5xl"
          >
            {profession.about.title}
          </motion.h2>

          {/* Grid de glassmorphism cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Card principal: descripción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl"
            >
              <p className="text-xl text-white/80 leading-relaxed font-light">
                {profession.about.description}
              </p>
              {profession.about.signature && (
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-px" style={{ backgroundColor: profession.accent }} />
                  <p className="font-serif italic text-white/60">{profession.about.signature}</p>
                </div>
              )}
            </motion.div>

            {/* Card lateral: stats + stars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ color: profession.accent }} className="fill-current" />)}
              </div>
              <div className="space-y-4">
                {profession.stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-black" style={{ color: profession.accent }}>{s.value}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3 cards de diferenciales en fila inferior */}
            {profession.differentials.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-5 h-[2px] mb-4 rounded-full" style={{ backgroundColor: profession.accent }} />
                <h4 className="text-white font-bold mb-2 text-sm">{d.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
