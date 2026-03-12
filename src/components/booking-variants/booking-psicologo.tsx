"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion } from 'framer-motion';

export function BookingPsicologo() {
  const { profession } = useProfession();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <section className="py-32 bg-[#080a09] min-h-[600px] flex items-center justify-center relative overflow-hidden">
        {/* Glow de éxito */}
        <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full opacity-30" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 bg-white/[0.02] border border-emerald-500/10 text-center space-y-8 rounded-[3rem] backdrop-blur-xl relative z-10"
        >
          <div className="w-24 h-24 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(50,215,75,0.1)]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          </div>
          <h2 className="text-3xl font-light text-white tracking-tight">Tu espacio está listo</h2>
          <p className="text-neutral-400 font-serif italic text-lg leading-relaxed">
            "Hemos recibido tu solicitud. Pronto daremos el primer paso juntos hacia tu bienestar."
          </p>
          <Button onClick={() => setSuccess(false)} variant="ghost" className="text-emerald-400 hover:bg-emerald-500/5 hover:text-emerald-300 rounded-full px-8 h-12 transition-all duration-500">Volver a agendar</Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#080a09] relative overflow-hidden" id="reservar">
      {/* Background Decor - Formas orgánicas */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="space-y-12 bg-white/[0.01] p-12 rounded-[4rem] border border-white/5 backdrop-blur-sm"
            >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                     <span className="text-emerald-400/80 text-[10px] uppercase font-bold tracking-widest">Acompañamiento Humano</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
                    Inicia tu <br />
                    <span className="font-serif italic text-emerald-400">Transformación</span>
                  </h2>
                  <p className="text-xl text-neutral-400 font-light leading-relaxed font-serif italic max-w-md">
                     "El primer paso es el más valiente. Reserva un momento para ti, en un entorno de escucha y respeto."
                  </p>
                </div>
                
                <div className="space-y-8">
                    {[
                      { t: "Espacio de Escucha", d: "Atención centrada en tus tiempos y necesidades emocionales." },
                      { t: "Vínculo de Seguridad", d: "Confidencialidad absoluta y un entorno libre de juicios." },
                      { t: "Gestión Simple", d: "Confirmamos tu turno de forma clara y sin presiones." }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-6 group">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
                              <svg className="w-5 h-5 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                              </svg>
                          </div>
                          <div>
                            <span className="block text-white font-medium text-lg tracking-tight">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-light italic font-serif">{feature.d}</span>
                          </div>
                      </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none scale-90" />
                <Card className="rounded-[3rem] bg-white/[0.02] border-white/5 backdrop-blur-2xl shadow-2xl relative z-10 overflow-hidden">
                    <CardHeader className="p-12 text-center border-b border-white/5">
                        <CardTitle className="text-2xl font-light text-white tracking-wide">Agendar Encuentro</CardTitle>
                        <CardDescription className="text-emerald-500/60 font-serif italic mt-2">Modalidad: <span className="text-emerald-400">{profession.label}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="p-12">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] font-sans ml-4">Tu Nombre</label>
                                    <Input name="name" placeholder="Ej: Sofía Martínez" className="bg-white/[0.03] border-white/5 rounded-full text-white h-14 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 text-lg transition-all duration-500 px-8" required />
                                </div>
                                
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] font-sans ml-4">Medio de Contacto</label>
                                    <Input name="contact" placeholder="+598 9X XXX XXX" className="bg-white/[0.03] border-white/5 rounded-full text-white h-14 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 text-lg transition-all duration-500 px-8" required />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] font-sans ml-4">Día de Preferencia</label>
                                    <Input name="date" type="date" className="bg-white/[0.03] border-white/5 rounded-full text-white h-14 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 text-lg transition-all duration-500 px-8 [color-scheme:dark]" required />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] font-sans ml-4">Horario Sugerido</label>
                                    <Input name="time" type="time" className="bg-white/[0.03] border-white/5 rounded-full text-white h-14 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 text-lg transition-all duration-500 px-8 [color-scheme:dark]" required />
                                </div>
                            </div>

                            {error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 bg-red-500/5 border border-red-500/10 text-red-400 text-sm font-serif italic text-center rounded-2xl">
                                    {error}
                                </motion.div>
                            )}

                            <div className="pt-6">
                              <Button 
                                  type="submit" 
                                  className="w-full h-16 text-lg font-medium bg-emerald-500/90 text-white hover:bg-emerald-400 transition-all duration-1000 rounded-full shadow-lg shadow-emerald-500/20"
                                  disabled={loading}
                              >
                                  {loading ? 'Preparando Espacio...' : 'Confirmar Primer Paso'}
                              </Button>
                              <p className="mt-6 text-center text-[9px] text-neutral-600 uppercase tracking-widest leading-relaxed max-w-xs mx-auto">Tus datos están protegidos por el código de ética profesional.</p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
