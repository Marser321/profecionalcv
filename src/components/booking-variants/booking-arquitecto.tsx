"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingArquitecto() {
  const { profession } = useProfession();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 2) {
        setStep(2);
        return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      contact: formData.get('contact') as string,
      profession_id: profession.id,
      appointment_date: formData.get('date') as string,
      appointment_time: formData.get('time') as string,
    };

    try {
      const { error: insforgeError } = await insforge.database
        .from('bookings')
        .insert([data]);

      if (insforgeError) {
        if (insforgeError.message.includes('unique')) {
          throw new Error('Lo sentimos, este horario ya está reservado. Por favor elige otro.');
        }
        throw insforgeError;
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error al procesar tu reserva.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="py-40 bg-[#0a0a05] min-h-[700px] flex items-center justify-center relative">
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
         <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full p-20 bg-[#12120a] border border-amber-500/20 text-center space-y-10 rounded-none relative shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute top-8 right-8 font-mono text-[9px] text-amber-500/40 uppercase tracking-[0.5em]">Proj_Ref: {Math.random().toString(36).substring(7).toUpperCase()}</div>
          
          <div className="w-28 h-28 bg-transparent border border-amber-500/40 flex items-center justify-center mx-auto mb-10 relative group">
              <div className="absolute inset-[-8px] border border-amber-500/10 scale-100 group-hover:scale-110 transition-transform duration-1000" />
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-light text-white tracking-[0.3em] uppercase italic font-sans leading-none">Sitio Consolidado</h2>
            <p className="text-amber-500/60 font-serif italic text-xl leading-relaxed max-w-sm mx-auto">
              "Su lugar en la agenda proyectual ha sido reservado. Iniciamos el proceso de conceptualización técnica."
            </p>
          </div>

          <Button 
            onClick={() => { setSuccess(false); setStep(1); }} 
            className="w-full bg-amber-500 hover:bg-white hover:text-amber-950 text-amber-950 font-black uppercase tracking-[0.5em] px-10 h-20 rounded-none transition-all duration-700 text-sm shadow-xl"
          >
            Iniciar Nuevo Proyecto →
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#0a0a05] relative overflow-hidden" id="reservar">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }} 
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
            {/* Descriptive Side */}
            <div className="lg:col-span-5 space-y-20">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="space-y-12"
                >
                    <div className="space-y-10">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-[1px] bg-amber-500 opacity-60" />
                        <span className="text-amber-400 uppercase tracking-[0.8em] text-[10px] font-bold italic font-sans">Estatuto de Autoría</span>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-light text-white leading-[0.95] tracking-tight font-sans">
                        Reserve su <br />
                        <span className="font-serif italic text-amber-500">Plan Director</span>
                      </h2>
                      <p className="text-2xl text-neutral-500 font-light italic font-serif leading-relaxed max-w-sm">
                        "La arquitectura comienza donde termina el agendamiento y empieza la visión."
                      </p>
                    </div>
                </motion.div>
                
                <div className="space-y-12">
                    {[
                      { t: "Configuración Espacial", d: "Determinación de tiempos técnicos para la conceptualización de su idea." },
                      { t: "Dirección de Autor", d: "Asegure un estudio directo con el responsable táctico del proyecto." }
                    ].map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex gap-10 group"
                      >
                          <div className="text-amber-500/20 font-mono text-5xl font-light group-hover:text-amber-500 transition-all duration-1000">0{idx + 1}</div>
                          <div className="space-y-2 border-l border-amber-500/10 pl-10 group-hover:border-amber-400/30 transition-all duration-1000">
                            <span className="block text-white font-bold uppercase text-sm tracking-[0.2em] font-sans opacity-80 group-hover:opacity-100">{feature.t}</span>
                            <span className="text-neutral-500 text-lg font-light italic font-serif leading-relaxed block">{feature.d}</span>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-8 border border-amber-500/5 pointer-events-none scale-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Card className="rounded-none bg-[#12120a] border border-amber-500/20 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden">
                        {/* Ruler Progress Effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-amber-500/10 flex flex-col justify-between py-12 opacity-30">
                           {[...Array(12)].map((_, i) => (
                             <div key={i} className={`h-px bg-amber-500 transition-all duration-1000 ${i <= (step * 6) ? 'w-full opacity-60' : 'w-1/2 ml-auto opacity-10'}`} />
                           ))}
                        </div>

                        <CardHeader className="p-16 pb-10 pl-24 border-b border-amber-500/10 bg-amber-500/[0.01]">
                            <div className="flex justify-between items-end mb-4">
                               <CardTitle className="text-3xl font-light text-white tracking-[0.3em] uppercase font-sans">Plano_Reserva</CardTitle>
                               <span className="font-mono text-[10px] text-amber-500/50 tracking-[0.5em] uppercase">E_0{step}</span>
                            </div>
                            <CardDescription className="text-amber-500/40 uppercase tracking-[0.4em] text-[9px] italic font-serif">Escala 1:1 / Obra: <span className="text-white opacity-60 underline underline-offset-8 decoration-amber-500/30">{profession.label}</span></CardDescription>
                        </CardHeader>

                        <CardContent className="p-16 pl-24">
                            <form onSubmit={handleSubmit} className="space-y-16">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div 
                                            key="step1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-12"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-amber-500/40 uppercase tracking-[0.6em] font-sans">Propiedad_Identidad</label>
                                                <Input name="name" placeholder="Ej: TITULAR_PROYECTO_ALPHA" className="bg-transparent border-0 border-b border-amber-500/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-amber-500 text-3xl font-light transition-all px-0 placeholder:opacity-10 font-sans tracking-tight" required />
                                            </div>
                                            
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-amber-500/40 uppercase tracking-[0.6em] font-sans">Nexo_Coordinación</label>
                                                <Input name="contact" placeholder="DATOS_CONTACTO_DIRECTO" className="bg-transparent border-0 border-b border-amber-500/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-amber-500 text-3xl font-light transition-all px-0 placeholder:opacity-10 font-sans tracking-tight" required />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="step2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-16"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-amber-500/40 uppercase tracking-[0.6em] font-sans">Inicio_Etapa</label>
                                                <Input name="date" type="date" className="bg-transparent border-0 border-b border-amber-500/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-amber-500 text-2xl font-light transition-all px-0 [color-scheme:dark] font-sans" required />
                                            </div>
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-amber-500/40 uppercase tracking-[0.6em] font-sans">Slot_Técnico</label>
                                                <Input name="time" type="time" className="bg-transparent border-0 border-b border-amber-500/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-amber-500 text-2xl font-light transition-all px-0 [color-scheme:dark] font-sans" required />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 bg-amber-900/10 border border-amber-500/20 text-amber-400 text-[10px] font-sans uppercase tracking-widest text-center italic">
                                        ARCH_SYSTEM_ERR: {error}
                                    </motion.div>
                                )}

                                <div className="flex gap-10 pt-6 items-center">
                                    {step === 2 && (
                                        <button 
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-neutral-600 hover:text-amber-500 transition-colors uppercase text-[9px] tracking-[0.6em] font-sans italic"
                                        >
                                            ← Corregir Cota
                                        </button>
                                    )}
                                    <Button 
                                        type="submit" 
                                        className="flex-1 h-20 text-sm font-black bg-amber-500 text-amber-950 hover:bg-white transition-all duration-700 rounded-none uppercase tracking-[0.6em] shadow-2xl relative z-10"
                                        disabled={loading}
                                    >
                                        {loading ? 'AUTORIZANDO...' : step === 1 ? 'Phase_Proyectual' : 'Sellar Proyecto'}
                                    </Button>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[130%] border border-amber-500/5 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
