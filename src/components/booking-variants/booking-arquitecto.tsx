"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion } from 'framer-motion';

export function BookingArquitecto() {
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
      <section className="py-32 bg-[#0a0a05] min-h-[600px] flex items-center justify-center relative">
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
         <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 bg-[#12120a] border border-amber-500/20 text-center space-y-8 rounded-none relative"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-amber-500/30 uppercase tracking-widest">Project_ID: AX-2026</div>
          
          <div className="w-20 h-20 bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto mb-6 relative group">
              <div className="absolute inset-0 border border-amber-500/40 scale-110 group-hover:scale-125 transition-transform duration-700" />
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-3xl font-light text-white tracking-[0.2em] uppercase italic">Sitio Asignado</h2>
          <p className="text-amber-500/60 font-serif italic text-lg leading-relaxed">
            "Su espacio en la agenda técnica ha sido reservado. Coordinaremos los detalles del proyecto a la brevedad."
          </p>
          <Button onClick={() => setSuccess(false)} className="bg-amber-500 hover:bg-white hover:text-amber-900 text-amber-950 font-bold uppercase tracking-widest px-10 h-14 rounded-none transition-all duration-500">
            Nuevo Proyecto
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#0a0a05] relative overflow-hidden" id="reservar">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }} 
      />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-amber-500/30 flex items-center justify-center text-amber-500 font-mono text-xs">A-01</div>
                    <span className="text-amber-400 uppercase tracking-[0.6em] text-[10px] font-bold">Reserva Estructural</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tight">
                    Planifica tu <br />
                    <span className="font-serif italic text-amber-500">Próxima Obra</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 gap-10">
                    {[
                      { t: "Cálculo de Tiempos", d: "Agendamiento con margen técnico para revisiones exhaustivas." },
                      { t: "Desarrollo de Planos", d: "Espacios de consulta diseñados para la visualización creativa." },
                      { t: "Dirección Técnica", d: "Atención directa con el arquitecto responsable del proyecto." }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-8 group">
                          <div className="text-amber-500/20 font-mono text-4xl font-light group-hover:text-amber-500 transition-colors duration-700">0{idx + 1}</div>
                          <div className="space-y-1 border-l border-amber-500/10 pl-8 group-hover:border-amber-500 transition-all duration-700">
                            <span className="block text-white font-bold uppercase text-[11px] tracking-widest">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-light italic font-serif leading-relaxed block">{feature.d}</span>
                          </div>
                      </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute -inset-4 border border-amber-500/5 pointer-events-none scale-[1.05]" />
                <Card className="rounded-none bg-[#12120a] border-amber-500/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden">
                    {/* Architectural Ruler Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-amber-500/10 flex flex-col justify-between py-8 opacity-20">
                       {[...Array(10)].map((_, i) => (
                         <div key={i} className={`h-px bg-amber-500 ${i % 2 === 0 ? 'w-full' : 'w-1/2 ml-auto'}`} />
                       ))}
                    </div>

                    <CardHeader className="p-12 border-b border-amber-500/10 pl-20">
                        <CardTitle className="text-3xl font-light text-white tracking-widest uppercase">Plano de Turno</CardTitle>
                        <CardDescription className="text-amber-500/40 uppercase tracking-[0.3em] text-[10px] mt-2 italic font-serif">Escala 1:1 / Proyecto: <span className="text-white">{profession.label}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="p-12 pl-20">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.4em]">Propiedad_Titular</label>
                                <Input name="name" placeholder="Ej: Residencia Valdés" className="bg-transparent border-0 border-b border-amber-500/20 rounded-none text-white h-14 focus-visible:ring-0 focus-visible:border-amber-500 text-xl font-light transition-all px-0" required />
                            </div>
                            
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.4em]">Canal_Comunicación</label>
                                <Input name="contact" placeholder="+598 9X XXX XXX / Email" className="bg-transparent border-0 border-b border-amber-500/20 rounded-none text-white h-14 focus-visible:ring-0 focus-visible:border-amber-500 text-xl font-light transition-all px-0" required />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.4em]">Fecha_Inicio</label>
                                    <Input name="date" type="date" className="bg-transparent border-0 border-b border-amber-500/20 rounded-none text-white h-14 focus-visible:ring-0 focus-visible:border-amber-500 text-xl font-light transition-all px-0 [color-scheme:dark]" required />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.4em]">Slot_Horario</label>
                                    <Input name="time" type="time" className="bg-transparent border-0 border-b border-amber-500/20 rounded-none text-white h-14 focus-visible:ring-0 focus-visible:border-amber-500 text-xl font-light transition-all px-0 [color-scheme:dark]" required />
                                </div>
                            </div>

                            {error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-amber-900/10 border border-amber-500/20 text-amber-400 text-xs font-serif italic text-center">
                                    Error de sistema: {error}
                                </motion.div>
                            )}

                            <div className="pt-8 relative group">
                              <Button 
                                  type="submit" 
                                  className="w-full h-16 text-xs font-black bg-amber-500 text-amber-950 hover:bg-white transition-all duration-700 rounded-none uppercase tracking-[0.5em] shadow-2xl relative z-10"
                                  disabled={loading}
                              >
                                  {loading ? 'MODIFICANDO PLANOS...' : 'AUTORIZAR PROYECTO'}
                              </Button>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] border border-amber-500/5 pointer-events-none group-hover:scale-x-110 transition-transform duration-700" />
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
