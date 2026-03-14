"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProfessionDetail } from '@/lib/constants';
import { Heart } from 'lucide-react';

// ==========================================
// ABOUT PSICÓLOGO — Layout Orgánico con Orbes
// Personalidad: Cálido, orgánico, verde suave.
// Estructura: Orbes de gradiente flotantes, foto suavemente iluminada
// ==========================================
export function AboutPsicologo({ profession }: { profession: ProfessionDetail }) {
  if (!profession.about) return null;

  return (
    <section id="about" className="py-32 bg-[#050A06] relative overflow-hidden">
      {/* Orbes orgánicos de fondo */}
      {[
        { top: '10%', left: '-5%', size: 600, opacity: 0.06 },
        { top: '50%', right: '-10%', size: 500, opacity: 0.05 },
        { bottom: '5%', left: '30%', size: 400, opacity: 0.04 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            width: orb.size,
            height: orb.size,
            backgroundColor: profession.accent,
            opacity: orb.opacity,
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [orb.opacity, orb.opacity * 1.5, orb.opacity],
          }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Layout asimétrico centrado */}
        <div className="max-w-5xl mx-auto">
          {/* Header centrado */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 mb-6"
            >
              <Heart size={12} style={{ color: profession.accent }} className="fill-current" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">Espacio Seguro</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]">
              {profession.about.title.split(' ').slice(0, 2).join(' ')}{' '}
              <em className="font-serif italic" style={{ color: profession.accent }}>
                {profession.about.title.split(' ').slice(2).join(' ')}
              </em>
            </h2>
          </div>

          {/* Foto grande centrada > descripción */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-full overflow-hidden max-w-sm mx-auto">
                <Image
                  unoptimized
                  src={profession.about.image}
                  alt={profession.about.title}
                  fill
                  sizes="384px"
                  className="object-cover brightness-90"
                />
                {/* Borde con gradiente */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `inset 0 0 0 3px ${profession.accent}40`,
                  }}
                />
              </div>

              {/* Stats flotantes en torno a la foto */}
              {profession.stats.map((s, i) => {
                const positions = [
                  'top-4 -right-6',
                  'bottom-16 -right-8',
                  'bottom-4 -left-6',
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    viewport={{ once: true }}
                    className={`absolute ${positions[i]} bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl text-center hidden md:block`}
                  >
                    <p className="text-xl font-black" style={{ color: profession.accent }}>{s.value}</p>
                    <p className="text-[9px] text-white/50 uppercase tracking-widest">{s.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Columna derecha: texto + diferenciales suaves */}
            <div className="space-y-8">
              <p className="text-xl text-white/70 leading-relaxed font-light">
                {profession.about.description}
              </p>

              <div className="space-y-4">
                {profession.differentials.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: profession.accent }} />
                      <h4 className="text-white font-semibold text-sm">{d.title}</h4>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed pl-4">{d.description}</p>
                  </motion.div>
                ))}
              </div>

              {profession.about.signature && (
                <div className="pt-4 flex items-baseline gap-3">
                  <div className="w-8 h-px" style={{ backgroundColor: profession.accent }} />
                  <p className="font-serif italic text-white/60 text-lg">{profession.about.signature}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
