"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingMecanico() {
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
      <section className="py-32 bg-[#050505] min-h-[700px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/[0.02] animate-pulse" />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full p-16 bg-[#0a0a0a] border border-red-600/30 text-center space-y-8 relative z-10 shadow-[0_0_100px_rgba(220,38,38,0.1)]"
        >
          <div className="w-24 h-24 bg-red-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(220,38,38,0.4)]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="square"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none">Ingreso Autorizado</h2>
            <p className="text-neutral-500 font-medium text-lg uppercase tracking-widest italic">Protocolo de servicio activado para su unidad.</p>
          </div>
          
          <div className="p-6 bg-white/5 border border-white/10 text-left font-mono text-[10px] space-y-2 uppercase tracking-widest text-neutral-400">
            <p className="text-red-500 font-black italic">Status: Confirmed_Entry</p>
            <p>Queue_ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
            <p>Location: Central_MVD_Grid</p>
          </div>

          <Button 
            onClick={() => { setSuccess(false); setStep(1); }} 
            className="w-full bg-white text-black hover:bg-red-600 hover:text-white font-black uppercase rounded-none h-16 text-lg tracking-tighter italic transition-all duration-300"
          >
            Registrar Nueva Unidad →
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="reservar">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
            {/* Context Side */}
            <div className="lg:col-span-5 space-y-16">
                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-red-600" />
                        <span className="text-red-600 font-black uppercase tracking-[0.6em] text-[10px] italic">Ingresos de Unidad</span>
                    </div>
                    <h2 className="text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase italic">
                        Reserve sus <br />
                        <span className="text-transparent border-text-red">Coordenadas</span>
                    </h2>
                    <p className="text-neutral-500 text-xl font-medium leading-relaxed max-w-md italic">
                        Sistema de agendamiento de alta precisión. Asegure su lugar en nuestra línea de producción de alto rendimiento.
                    </p>
                </motion.div>
                
                <div className="grid gap-8">
                    {[
                      { t: "Diagnóstico Computarizado", d: "Escaneo total de sistemas antes de la intervención." },
                      { t: "Tracking de Tiempo Real", d: "Notificaciones directas del estado de su servicio." }
                    ].map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex gap-6 p-8 bg-white/[0.02] border border-white/5 group hover:border-red-600/30 transition-colors"
                      >
                          <div className="text-red-600 font-black italic text-4xl opacity-20">0{idx + 1}</div>
                          <div>
                            <span className="block text-white font-black uppercase italic text-sm mb-2">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-medium leading-relaxed">{feature.d}</span>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-b from-red-600/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <Card className="rounded-none bg-[#0a0a0a] border border-white/10 shadow-3xl relative z-10 overflow-hidden">
                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-white/5 relative">
                            <motion.div 
                                animate={{ width: `${(step / 2) * 100}%` }}
                                className="absolute top-0 left-0 h-full bg-red-600 shadow-[0_0_10px_#dc2626]" 
                            />
                        </div>

                        <CardHeader className="p-12 pb-6">
                            <div className="flex justify-between items-center mb-4">
                                <CardTitle className="text-3xl text-white font-black italic uppercase italic tracking-tighter">Protocolo_Ingreso</CardTitle>
                                <span className="font-mono text-[10px] text-red-600 font-black uppercase tracking-widest bg-red-600/10 px-3 py-1">Step_0{step}</span>
                            </div>
                            <CardDescription className="text-neutral-500 font-medium text-xs uppercase tracking-[0.2em]">Configurando parámetros técnicos para {profession.label}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-12 pt-6">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div 
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">Nombre del Titular</label>
                                                    <Input name="name" placeholder="Ej: Perez_J" className="bg-[#121212] border-white/10 text-white h-16 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg uppercase font-black px-6 placeholder:text-neutral-800" required />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">Canal de Enlace</label>
                                                    <Input name="contact" placeholder="+598_XX" className="bg-[#121212] border-white/10 text-white h-16 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg uppercase font-black px-6 placeholder:text-neutral-800" required />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">Ciclo_Fecha</label>
                                                    <Input name="date" type="date" className="bg-[#121212] border-white/10 text-white h-16 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg font-black px-6 [color-scheme:dark]" required />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.4em]">Ciclo_Hora</label>
                                                    <Input name="time" type="time" className="bg-[#121212] border-white/10 text-white h-16 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg font-black px-6 [color-scheme:dark]" required />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-red-600/10 border border-red-600/50 text-red-500 text-[10px] font-black uppercase italic tracking-widest">
                                        SYSTEM_ERROR: {error}
                                    </motion.div>
                                )}

                                <div className="flex gap-4 pt-4">
                                    {step === 2 && (
                                        <Button 
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="h-16 px-10 border border-white/10 text-white hover:bg-white/5 rounded-none font-black uppercase italic text-xs tracking-widest"
                                        >
                                            Atrás
                                        </Button>
                                    )}
                                    <Button 
                                        type="submit" 
                                        className="flex-1 h-16 text-xl font-black bg-red-600 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none uppercase italic tracking-tighter"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sincronizando...' : step === 1 ? 'Siguiente Fase →' : 'Confirmar Registro'}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Industrial accents */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-8 border-b-8 border-red-600/20 pointer-events-none" />
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-l-8 border-t-8 border-red-600/20 pointer-events-none" />
                </motion.div>
            </div>
        </div>
      </div>

      <style jsx>{`
        .border-text-red {
          -webkit-text-stroke: 1px #dc2626;
        }
      `}</style>
    </section>
  );
}
