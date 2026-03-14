"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfession } from '@/context/profession-context';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQAccordion() {
  const { profession } = useProfession();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  if (!profession.faqs) return null;

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black">
      {/* Decoraciones de Fondo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: profession.accent }} 
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <HelpCircle className="mx-auto" size={40} style={{ color: profession.accent }} />
          <h2 className="text-3xl md:text-5xl font-bold text-white">Preguntas Frecuentes</h2>
          <p className="text-white/50">
            Todo lo que necesitás saber antes de agendar tu turno.
          </p>
        </div>

        <div className="space-y-4">
          {profession.faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              style={{ backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.03)' : 'transparent' }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white/90 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-white/40" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
