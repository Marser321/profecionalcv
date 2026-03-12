"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion } from 'framer-motion';

export function BookingEstetica() {
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
      <section className="py-32 bg-[#0a0508] min-h-[600px] flex items-center justify-center relative overflow-hidden">
        {/* Glamour Aura background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-purple-500/10 blur-[120px] rounded-full opacity-40" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-16 bg-white/[0.01] border border-pink-500/20 text-center space-y-8 rounded-[4rem] backdrop-blur-3xl relative z-10"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 text-pink-400 border border-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_20px_40px_rgba(236,72,153,0.15)]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
          </div>
          <h2 className="text-3xl font-light text-white tracking-[0.1em] italic font-serif">Ritual Confirmado</h2>
          <p className="text-neutral-400 font-serif italic text-lg leading-relaxed">
            "Su espacio de bienestar ha sido reservado. Nos prepararemos para brindarle una experiencia inolvidable."
          </p>
          <Button onClick={() => setSuccess(false)} variant="ghost" className="text-pink-400 hover:bg-pink-500/5 hover:text-pink-300 rounded-full px-10 h-12 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-700">Nueva Reserva</Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#0a0508] relative overflow-hidden" id="reservar">
      {/* Background Decor - Pink/Purple Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="px-6 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-[10px] font-bold tracking-[0.4em] uppercase">Private Access</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-light text-white leading-[0.9] tracking-tighter">
                    Inicia tu <br />
                    <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-200">Ritual</span>
                  </h2>
                  <p className="text-xl text-neutral-400 font-light leading-relaxed font-serif italic max-w-sm">
                     "Regálate el momento que mereces. Nuestra agenda es tan exclusiva como tu tratamiento."
                  </p>
                </div>
                
                <div className="space-y-10">
                    {[
                      { t: "Experiencia Sensorial", d: "Atención personalizada diseñada para despertar tus sentidos." },
                      { t: "Entorno de Privacidad", d: "Espacios de atención resguardados con el máximo refinamiento." },
                      { t: "Coordinación VIP", d: "Gestión de turnos con confirmación de alta prioridad." }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-6 group">
                          <div className="w-px h-16 bg-gradient-to-b from-pink-500/50 to-transparent group-hover:from-pink-400 transition-all duration-1000" />
                          <div className="space-y-1">
                            <span className="block text-white font-medium text-lg tracking-wide uppercase text-sm">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-light italic font-serif leading-relaxed block">{feature.d}</span>
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
                <Card className="rounded-[4rem] bg-white/[0.01] border-white/5 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden">
                    {/* Inner Glass Glow */}
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-pink-500/[0.03] to-transparent pointer-events-none" />

                    <CardHeader className="p-16 text-center border-b border-white/5 relative">
                        <CardTitle className="text-3xl font-light text-white tracking-[0.1em] font-serif italic">Reserva de Tratamiento</CardTitle>
                        <CardDescription className="text-pink-400/40 uppercase tracking-[0.2em] text-[9px] mt-4">Servicio Seleccionado: <span className="text-white">{profession.label}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="p-16">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.4em] ml-2">Nombre y Apellido</label>
                                    <Input name="name" placeholder="Invitado/a" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-pink-400 text-lg font-light transition-all duration-1000 px-2 italic font-serif" required />
                                </div>
                                
                                <div className="space-y-4">
                                    <label className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.4em] ml-2">Contacto Privado</label>
                                    <Input name="contact" placeholder="Email o Teléfono" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-pink-400 text-lg font-light transition-all duration-1000 px-2 italic font-serif" required />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.4em] ml-2">Día Sugerido</label>
                                    <Input name="date" type="date" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-pink-400 text-lg font-light transition-all duration-1000 px-2 [color-scheme:dark]" required />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.4em] ml-2">Preferencia Horaria</label>
                                    <Input name="time" type="time" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-pink-400 text-lg font-light transition-all duration-1000 px-2 [color-scheme:dark]" required />
                                </div>
                            </div>

                            {error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-pink-500/5 border border-pink-500/10 text-pink-400 text-xs font-serif italic text-center rounded-3xl">
                                    Lo sentimos: {error}
                                </motion.div>
                            )}

                            <div className="pt-8">
                              <Button 
                                  type="submit" 
                                  className="w-full h-16 text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-all duration-1000 rounded-[2rem] uppercase tracking-[0.4em] shadow-[0_20px_40px_rgba(236,72,153,0.3)] border-0"
                                  disabled={loading}
                              >
                                  {loading ? 'Preparando Ritual...' : 'Solicitar Acceso'}
                              </Button>
                              <div className="mt-8 flex items-center justify-center gap-4 opacity-20">
                                 <div className="h-px w-8 bg-white" />
                                 <p className="text-[8px] text-white uppercase tracking-widest whitespace-nowrap italic font-serif">Luxury Experience Assured</p>
                                 <div className="h-px w-8 bg-white" />
                              </div>
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
