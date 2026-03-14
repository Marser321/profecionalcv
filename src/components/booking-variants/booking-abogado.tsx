"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingAbogado() {
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
      <section className="py-32 bg-[#050507] min-h-[700px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/[0.02] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full p-16 bg-white/[0.02] border border-white/10 text-center space-y-10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
        >
          <div className="w-24 h-24 bg-transparent border-2 border-blue-500/30 flex items-center justify-center mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl font-serif italic" />
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative z-10 text-blue-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-light text-white tracking-tight uppercase font-serif italic">Protocolo Autorizado</h2>
            <p className="text-neutral-500 font-serif italic text-lg leading-relaxed max-w-sm mx-auto">
              "Su solicitud de consulta ha sido registrada bajo estricto secreto profesional. Un consejero legal se pondrá en contacto pronto."
            </p>
          </div>
          
          <div className="py-6 border-y border-white/5 space-y-2">
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.4em]">REF_CODE: LEX_{Math.random().toString(36).substring(7).toUpperCase()}</p>
            <p className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.4em]">Confidencialidad_Nivel_A</p>
          </div>

          <Button 
            onClick={() => { setSuccess(false); setStep(1); }} 
            variant="ghost" 
            className="text-blue-500 hover:text-white hover:bg-blue-600/10 font-serif italic tracking-widest uppercase text-xs"
          >
            Nueva Consulta de Gabinete
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#050507] relative overflow-hidden" id="reservar">
      {/* Background Institutional Decor */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
            {/* Context Block */}
            <div className="lg:col-span-5 space-y-16">
                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="space-y-10"
                >
                    <div className="space-y-6">
                      <div className="flex items-center gap-5">
                          <div className="w-10 h-[1px] bg-blue-500" />
                          <p className="text-blue-500 font-mono text-[9px] tracking-[0.6em] uppercase">Estatuto de Atención</p>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-light text-white leading-tight tracking-tight">
                        Gestión de <br />
                        <span className="font-serif italic text-blue-500">Patrimonio Legal</span>
                      </h2>
                    </div>
                </motion.div>
                
                <div className="space-y-12">
                    {[
                      { t: "Rigurosidad Judicial", d: "Agendamiento con espacios para análisis profundo del caso." },
                      { t: "Gabinete de Crisis", d: "Prioridad inmediata para asuntos de alta relevancia constitucional." }
                    ].map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex gap-8 group"
                      >
                          <div className="text-blue-600/20 font-serif italic text-5xl group-hover:text-blue-600 transition-colors duration-700">0{idx + 1}</div>
                          <div className="space-y-2 border-l border-white/5 pl-8">
                            <span className="block text-white font-light text-xl tracking-tight uppercase font-serif italic opacity-90 group-hover:opacity-100 transition-opacity">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-light italic font-serif leading-relaxed block">{feature.d}</span>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>

            {/* Form Block */}
            <div className="lg:col-span-7">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Card className="rounded-none bg-white/[0.01] border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden">
                        {/* Progress Indicator */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
                            <motion.div 
                                animate={{ width: `${(step / 2) * 100}%` }}
                                className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" 
                            />
                        </div>

                        <CardHeader className="p-16 pb-8 border-b border-white/5">
                            <div className="flex justify-between items-end mb-4">
                               <CardTitle className="text-4xl font-light text-white tracking-widest lowercase italic font-serif">Solicitud_Gabinete</CardTitle>
                               <span className="font-mono text-[9px] text-blue-500 tracking-[0.4em] uppercase">Phase_0{step}</span>
                            </div>
                            <CardDescription className="text-neutral-500 font-light uppercase tracking-[0.2em] text-[10px] font-serif italic">Referencia: <span className="text-white opacity-60 underline underline-offset-4 decoration-blue-500/30">{profession.label}</span></CardDescription>
                        </CardHeader>
                        <CardContent className="p-16">
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div 
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-10"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em] font-serif italic">Nombre y Títulos del Solicitante</label>
                                                <Input name="name" placeholder="Escriba aquí su identificación legal" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-16 focus-visible:ring-0 focus-visible:border-blue-500 text-2xl font-light transition-all px-0 placeholder:opacity-20 font-serif italic" required />
                                            </div>
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em] font-serif italic">Enlace de Identidad</label>
                                                <Input name="contact" placeholder="Email o Canal Directo de Comunicación" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-16 focus-visible:ring-0 focus-visible:border-blue-500 text-2xl font-light transition-all px-0 placeholder:opacity-20 font-serif italic" required />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="grid grid-cols-2 gap-16"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em] font-serif italic">Calendario_Gabinete</label>
                                                <Input name="date" type="date" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-16 focus-visible:ring-0 focus-visible:border-blue-500 text-2xl font-light transition-all px-0 [color-scheme:dark] font-serif italic" required />
                                            </div>
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.4em] font-serif italic">Preferencia_Horaria</label>
                                                <Input name="time" type="time" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-16 focus-visible:ring-0 focus-visible:border-blue-500 text-2xl font-light transition-all px-0 [color-scheme:dark] font-serif italic" required />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-red-500/5 border border-red-500/10 text-red-400 text-xs font-serif italic">
                                        RECHAZO_SISTEMA: {error}
                                    </motion.div>
                                )}

                                <div className="flex gap-8 pt-8 items-center">
                                    {step === 2 && (
                                        <button 
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-neutral-600 hover:text-white transition-colors uppercase text-[9px] tracking-[0.5em] font-serif italic"
                                        >
                                            ← Regresar
                                        </button>
                                    )}
                                    <Button 
                                        type="submit" 
                                        className="flex-1 h-20 text-xs font-bold bg-[#007AFF] text-white hover:bg-white hover:text-black transition-all duration-700 rounded-none uppercase tracking-[0.5em] shadow-3xl"
                                        disabled={loading}
                                    >
                                        {loading ? 'ENVIANDO PROTOCOLO...' : step === 1 ? 'Siguiente Fase' : 'Sellar Solicitud'}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    {/* Architectural Accent */}
                    <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 border-l-[1px] border-b-[1px] border-blue-500/20 pointer-events-none" />
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
