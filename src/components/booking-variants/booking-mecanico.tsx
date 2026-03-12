"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion } from 'framer-motion';

export function BookingMecanico() {
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
      <section className="py-32 bg-[#0a0a0a] min-h-[600px] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 bg-[#121212] border-2 border-red-600/30 text-center space-y-6 rounded-none relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
          <div className="w-20 h-20 bg-red-600/10 text-red-600 border border-red-600/20 rounded-none flex items-center justify-center mx-auto mb-6 rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <svg className="-rotate-45" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Turno Registrado</h2>
          <p className="text-neutral-400 font-medium">
            Prepararemos el elevador. Nos vemos pronto para potenciar tu vehículo.
          </p>
          <Button onClick={() => setSuccess(false)} className="bg-red-600 hover:bg-white hover:text-black text-white font-bold uppercase rounded-none px-8 h-12">Nuevo Agendamiento</Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" id="reservar">
      {/* Background Industrial Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ff0000 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
      />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#121212] p-12 border-l-4 border-red-600 flex flex-col justify-center space-y-10"
            >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase italic tracking-widest">
                    Service Booking
                  </div>
                  <h2 className="text-6xl font-black tracking-tighter text-white leading-none uppercase italic">
                    Agenda tu <br />
                    <span className="text-red-600">Mantenimiento</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                    {[
                      { t: "Confirmación Directa", d: "WhatsApp para coordinación rápida." },
                      { t: "Cero Esperas", d: "Turnos exactos con puntualidad alemana." },
                      { t: "Equipo Profesional", d: "Mecánicos certificados en alta gama." }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 bg-red-600/20 border border-red-600/30 flex items-center justify-center shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 bg-red-600" />
                          </div>
                          <div>
                            <span className="block text-white font-bold uppercase italic text-sm">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-medium">{feature.d}</span>
                          </div>
                      </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5">
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">System Status: [Ready_for_input]</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <Card className="rounded-none bg-[#1a1a1a] border-white/5 shadow-2xl relative z-10">
                    <CardHeader className="p-10 border-b border-white/5 bg-gradient-to-r from-red-600/5 to-transparent">
                        <CardTitle className="text-3xl text-white font-black italic uppercase italic tracking-tighter">Protocolo de Turno</CardTitle>
                        <CardDescription className="text-neutral-500 font-medium mt-2">Cargando parámetros para: <span className="text-red-500 uppercase">{profession.label}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="p-10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Nombre del Titular</label>
                                    <Input name="name" placeholder="JUAN PEREZ" className="bg-[#121212] border-white/5 text-white h-14 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg uppercase font-bold px-6" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Contacto Directo</label>
                                    <Input name="contact" placeholder="+598 9X XXX XXX" className="bg-[#121212] border-white/5 text-white h-14 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg uppercase font-bold px-6" required />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Fecha Programada</label>
                                    <Input name="date" type="date" className="bg-[#121212] border-white/5 text-white h-14 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg font-bold px-6 [color-scheme:dark]" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.3em]">Hora de Ingreso</label>
                                    <Input name="time" type="time" className="bg-[#121212] border-white/5 text-white h-14 rounded-none focus-visible:ring-red-600 focus-visible:border-red-600 text-lg font-bold px-6 [color-scheme:dark]" required />
                                </div>
                            </div>

                            {error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-600/10 border border-red-600/50 text-red-500 text-xs font-bold uppercase italic rounded-none">
                                    Error: {error}
                                </motion.div>
                            )}

                            <Button 
                                type="submit" 
                                className="w-full h-16 text-xl font-black bg-red-600 text-white hover:bg-white hover:text-black mt-4 transition-all duration-300 rounded-none uppercase italic tracking-tighter shadow-lg shadow-red-600/20"
                                disabled={loading}
                            >
                                {loading ? 'PROCESANDO...' : 'CONFIRMAR INGRESO'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
