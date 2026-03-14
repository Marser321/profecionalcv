"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingPsicologo() {
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
      <section className="py-32 bg-[#080a09] min-h-[700px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/[0.03] blur-[150px] rounded-full opacity-30 animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full p-20 bg-white/[0.02] border border-emerald-500/10 text-center space-y-10 rounded-[4rem] backdrop-blur-3xl relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
        >
          <div className="w-28 h-28 bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(52,211,153,0.1)]">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-light text-white tracking-tight font-serif italic">Tu espacio te espera</h2>
            <p className="text-neutral-500 font-serif italic text-lg leading-relaxed max-w-sm mx-auto">
              "Hemos recibido tu intención de encuentro. Pronto coordinaremos el inicio de este viaje hacia tu equilibrio interior."
            </p>
          </div>
          
          <Button 
            onClick={() => { setSuccess(false); setStep(1); }} 
            className="text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-full px-12 h-16 transition-all duration-700 font-serif italic text-lg border border-emerald-500/20"
          >
            Volver a respirar
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#080a09] relative overflow-hidden font-serif" id="reservar">
      {/* Background Decor - Orgánico */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-emerald-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
            {/* Legend Side */}
            <div className="lg:col-span-5 space-y-16">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="space-y-12"
                >
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                         </div>
                         <span className="text-emerald-400/60 uppercase font-serif tracking-[0.4em] text-[10px] italic">Presencia Consciente</span>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-light text-white leading-[1] tracking-tight">
                        Inicia tu <br />
                        <span className="italic text-emerald-400">Reencuentro</span>
                      </h2>
                      <p className="text-2xl text-neutral-500 font-light leading-relaxed italic max-w-md">
                         "Toda gran transformación comienza con la decisión silenciosa de ser escuchado."
                      </p>
                    </div>
                </motion.div>
                
                <div className="space-y-12">
                    {[
                      { t: "Vínculo de Confianza", d: "Un espacio diseñado para que puedas ser tú, sin máscaras." },
                      { t: "Gestión Armonizada", d: "Coordinamos tu primer encuentro con total discreción y fluidez." }
                    ].map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex gap-8 group"
                      >
                          <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-all duration-1000">
                              <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                          </div>
                          <div className="space-y-2">
                             <span className="block text-white font-light text-2xl tracking-tight italic opacity-90 group-hover:opacity-100 transition-opacity">{feature.t}</span>
                             <span className="text-neutral-500 text-lg font-light italic leading-relaxed block">{feature.d}</span>
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
                    className="relative group"
                >
                    <div className="absolute -inset-10 bg-emerald-500/5 blur-[80px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
                    <Card className="rounded-[4rem] bg-white/[0.01] border-white/5 backdrop-blur-3xl shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden">
                        {/* Soft Progress Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                            <motion.div 
                                animate={{ x: step === 1 ? '-50%' : '0%' }}
                                className="w-[200%] h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" 
                            />
                        </div>

                        <CardHeader className="p-16 pb-8 text-center border-b border-white/5">
                            <div className="flex flex-col items-center gap-4">
                               <CardTitle className="text-3xl font-light text-white tracking-wide italic">Abrir el Espacio</CardTitle>
                               <div className="px-4 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
                                  <span className="text-[10px] font-serif uppercase tracking-[0.4em] text-emerald-400 opacity-60">Instancia_0{step} de 02</span>
                               </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-16">
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div 
                                            key="step1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="grid grid-cols-1 gap-12"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.4em] text-neutral-600 ml-6">¿Cómo deseas que te llamemos?</label>
                                                <Input name="name" placeholder="Tu nombre o pseudónimo..." className="bg-white/[0.02] border-white/5 rounded-full text-white h-20 focus-visible:ring-emerald-500/10 focus-visible:border-emerald-500/30 text-2xl font-light italic transition-all px-10 placeholder:opacity-20" required />
                                            </div>
                                            
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.4em] text-neutral-600 ml-6">Tu medio de contacto preferido</label>
                                                <Input name="contact" placeholder="Email o Teléfono para coordinar..." className="bg-white/[0.02] border-white/5 rounded-full text-white h-20 focus-visible:ring-emerald-500/10 focus-visible:border-emerald-500/30 text-2xl font-light italic transition-all px-10 placeholder:opacity-20" required />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="step2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-12"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.4em] text-neutral-600 ml-6">Un día posible</label>
                                                <Input name="date" type="date" className="bg-white/[0.02] border-white/5 rounded-full text-white h-20 focus-visible:ring-emerald-500/10 focus-visible:border-emerald-500/30 text-xl font-light italic transition-all px-10 [color-scheme:dark]" required />
                                            </div>
                                            <div className="space-y-6">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.4em] text-neutral-600 ml-6">Un horario sugerido</label>
                                                <Input name="time" type="time" className="bg-white/[0.02] border-white/5 rounded-full text-white h-20 focus-visible:ring-emerald-500/10 focus-visible:border-emerald-500/30 text-xl font-light italic transition-all px-10 [color-scheme:dark]" required />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-red-500/5 border border-red-500/10 text-red-400 text-sm italic text-center rounded-3xl">
                                        {error}
                                    </motion.div>
                                )}

                                <div className="pt-8 flex flex-col items-center gap-8">
                                    <Button 
                                        type="submit" 
                                        className="w-full h-20 text-xl font-light bg-emerald-500/90 text-white hover:bg-emerald-400 transition-all duration-1000 rounded-full shadow-2xl shadow-emerald-500/20 italic"
                                        disabled={loading}
                                    >
                                        {loading ? 'Preparando el espacio...' : step === 1 ? 'Continuar el proceso →' : 'Confirmar Primer Paso'}
                                    </Button>
                                    {step === 2 && (
                                        <button 
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-neutral-600 hover:text-emerald-400 transition-colors uppercase text-[9px] tracking-[0.5em] italic"
                                        >
                                            ← Revisar datos
                                        </button>
                                    )}
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
