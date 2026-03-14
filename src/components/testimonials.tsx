"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useProfession } from '@/context/profession-context';
import { Quote, CheckCircle2, Star } from 'lucide-react';
import { PartnerWordmark } from '@/components/partner-wordmark';

export function Testimonials() {
  const { profession } = useProfession();
  
  if (!profession.testimonials) return null;

  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden">
      {/* Fondos decorativos sutiles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: `${profession.accent}20` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Social Proof Elite</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Voces de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Autoridad</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl font-light">
            La confianza se construye con resultados. Conoce la experiencia de quienes ya han confiado en nuestra metodología.
          </p>
        </div>

        {/* Grid de Testimonios Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
          {profession.testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 backdrop-blur-md group hover:bg-neutral-900/60 transition-colors"
            >
              <Quote 
                className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity" 
                size={80} 
                style={{ color: profession.accent }}
              />
              
              <div className="space-y-8 relative z-10">
                <div className="flex gap-1">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-2xl text-white/90 font-light leading-relaxed tracking-tight italic">
                  "{t.text}"
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    {t.image ? (
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <Image unoptimized 
                          src={t.image} 
                          alt={t.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-black text-xl">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-white font-bold text-lg">{t.name}</p>
                        {t.verified && (
                          <CheckCircle2 size={16} style={{ color: profession.accent }} className="fill-current/10" />
                        )}
                      </div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  
                  {t.verified && (
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="text-[9px] font-black uppercase tracking-tighter text-white/30">Verified Impact</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN DE PARTNERS (Trust Logos) */}
        {profession.partners && (
          <div className="pt-24 border-t border-white/5">
            <div className="text-center mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                Alianzas Estratégicas & Marcas Certificadas
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               {profession.partners.map((partner, pIdx) => (
                 <motion.div
                    key={pIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: pIdx * 0.1 }}
                    viewport={{ once: true }}
                 >
                    <PartnerWordmark name={partner.name} accent={profession.accent} />
                 </motion.div>
               ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
