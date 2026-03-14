"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingEstetica() {
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
      <section className="py-32 bg-[#0a0508] min-h-[700px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-500/[0.04] blur-[150px] rounded-full opacity-40 animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full p-20 bg-white/[0.02] border border-pink-500/10 text-center space-y-12 rounded-[5rem] backdrop-blur-3xl relative z-10 shadow-[0_60px_120px_rgba(0,0,0,0.4)]"
        >
          <div className="w-28 h-28 bg-white/[0.03] border border-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-10 relative shadow-[0_0_60px_rgba(244,114,182,0.15)]">
              <div className="absolute inset-[-10px] border border-pink-500/5 rounded-full animate-spin-slow" />
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-pink-400"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-light text-white tracking-[0.2em] font-serif uppercase italic leading-none">Ritual Confirmado</h2>
            <p className="text-neutral-500 font-serif italic text-xl leading-relaxed max-w-sm mx-auto opacity-70">
              "Su espacio de bienestar ha sido preservado. Prepárese para una experiencia de transformación sensorial única."
            </p>
          </div>
          
          <div className="py-8 border-y border-white/5 space-y-2">
            <p className="text-[10px] font-serif uppercase tracking-[0.6em] text-neutral-600">Session_Identity: {Math.random().toString(36).substring(7).toUpperCase()}</p>
            <p className="text-[9px] font-serif uppercase tracking-[0.8em] text-pink-500/40 italic">Signature_Lumiere_Care</p>
          </div>

          <Button 
            onClick={() => { setSuccess(false); setStep(1); }} 
            className="text-pink-400 hover:text-white bg-pink-500/5 hover:bg-pink-500/20 rounded-full px-14 h-16 transition-all duration-1000 font-serif italic text-lg border border-pink-500/10 tracking-widest"
          >
            Solicitar Nuevo Ritual
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-40 bg-[#0a0508] relative overflow-hidden font-serif" id="reservar">
      {/* Background Decor - Sensorial */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-pink-500/[0.05] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-purple-500/[0.04] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
            {/* Descriptive side */}
            <div className="lg:col-span-5 space-y-20 flex flex-col justify-center">
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="space-y-12"
                >
                    <div className="space-y-10">
                      <div className="flex items-center gap-6">
                         <div className="w-16 h-16 rounded-full border border-pink-500/10 flex items-center justify-center p-3">
                            <div className="w-full h-full border border-pink-500/30 rounded-full animate-pulse" />
                         </div>
                         <span className="text-pink-400/50 uppercase font-serif tracking-[0.8em] text-[10px] italic leading-none">Protocolo de Armonía</span>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-light text-white leading-[0.9] tracking-tight">
                        Solicite su <br />
                        <span className="italic text-pink-400">Momento VIP</span>
                      </h2>
                      <p className="text-2xl text-neutral-500 font-light leading-relaxed italic max-w-sm">
                         "La belleza exterior comienza con el tiempo que te dedicas en nuestro santuario."
                      </p>
                    </div>
                </motion.div>
                
                <div className="space-y-16">
                    {[
                      { t: "Experiencia Sensorial", d: "Ambiente diseñado para la relajación profunda antes del tratamiento." },
                      { t: "Concierge Personal", d: "Tratamiento personalizado coordinado según su perfil estético." }
                    ].map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        key={idx} 
                        className="flex gap-10 group"
                      >
                          <div className="w-20 h-20 rounded-[3rem] bg-pink-500/[0.03] border border-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/10 transition-all duration-1000 group-hover:rotate-[15deg]">
                              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_10px_pink]" />
                          </div>
                          <div className="space-y-3">
                             <span className="block text-white font-light text-2xl tracking-wide italic opacity-90 group-hover:opacity-100 transition-opacity">“{feature.t}”</span>
                             <span className="text-neutral-500 text-lg font-light italic leading-relaxed block">{feature.d}</span>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group/card"
                >
                    <div className="absolute -inset-10 bg-pink-500/5 blur-[100px] rounded-full opacity-60 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                    <Card className="rounded-[5rem] bg-white/[0.01] border-white/5 backdrop-blur-3xl shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden">
                        {/* Elegant Progress Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                            <motion.div 
                                animate={{ x: step === 1 ? '-40%' : '0%' }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="w-[200%] h-full bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60" 
                            />
                        </div>

                        <CardHeader className="p-20 pb-10 text-center border-b border-white/5">
                            <div className="flex flex-col items-center gap-6">
                               <CardTitle className="text-4xl font-light text-white tracking-[0.1em] italic leading-tight uppercase">Reserva de Ritual</CardTitle>
                               <div className="flex items-center gap-4">
                                  <div className={`h-1 w-8 rounded-full transition-all duration-700 ${step >= 1 ? 'bg-pink-500' : 'bg-white/10'}`} />
                                  <div className={`h-1 w-8 rounded-full transition-all duration-700 ${step >= 2 ? 'bg-pink-500' : 'bg-white/10'}`} />
                               </div>
                               <span className="text-[10px] font-serif uppercase tracking-[0.8em] text-neutral-500 italic">Instancia_Identidad_0{step}</span>
                            </div>
                        </CardHeader>
                        
                        <CardContent className="p-20 pt-16">
                            <form onSubmit={handleSubmit} className="space-y-16">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div 
                                            key="step1"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="grid grid-cols-1 gap-14"
                                        >
                                            <div className="space-y-8">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.6em] text-neutral-600 ml-10 italic">Su nombre para la recepción</label>
                                                <Input name="name" placeholder="Escriba su firma de belleza..." className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-pink-500 text-3xl font-light italic transition-all px-0 placeholder:opacity-10 text-center" required />
                                            </div>
                                            
                                            <div className="space-y-8">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.6em] text-neutral-600 ml-10 italic">Su canal privado de coordinación</label>
                                                <Input name="contact" placeholder="Email o Celular VIP..." className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-pink-500 text-3xl font-light italic transition-all px-0 placeholder:opacity-10 text-center" required />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="step2"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-16"
                                        >
                                            <div className="space-y-8">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.6em] text-neutral-600 ml-10 italic">Día del Ritual</label>
                                                <Input name="date" type="date" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-pink-500 text-2xl font-light italic transition-all px-0 [color-scheme:dark] text-center" required />
                                            </div>
                                            <div className="space-y-8">
                                                <label className="text-[10px] font-serif uppercase tracking-[0.6em] text-neutral-600 ml-10 italic">Momento Sugerido</label>
                                                <Input name="time" type="time" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-20 focus-visible:ring-0 focus-visible:border-pink-500 text-2xl font-light italic transition-all px-0 [color-scheme:dark] text-center" required />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 bg-pink-500/5 border border-pink-500/10 text-pink-400 text-sm italic text-center rounded-[3rem]">
                                        {error}
                                    </motion.div>
                                )}

                                <div className="pt-10 flex flex-col items-center gap-10">
                                    <Button 
                                        type="submit" 
                                        className="w-full h-24 text-2xl font-light bg-pink-500/90 text-white hover:bg-pink-400 transition-all duration-1000 rounded-full shadow-[0_20px_60px_rgba(244,114,182,0.3)] italic tracking-widest"
                                        disabled={loading}
                                    >
                                        {loading ? 'Preparando su llegada...' : step === 1 ? 'Continuar al Siguiente Nivel →' : 'Confirmar Registro Sensorial'}
                                    </Button>
                                    {step === 2 && (
                                        <button 
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-neutral-600 hover:text-pink-400 transition-colors uppercase text-[9px] tracking-[0.8em] italic border-b border-transparent hover:border-pink-500/30 pb-1"
                                        >
                                            ← Revisar Datos de Identidad
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
