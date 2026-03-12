"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion } from 'framer-motion';

export function BookingOdontologo() {
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
      <section className="py-32 bg-[#05080a] min-h-[600px] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 bg-[#0a0f12] border border-cyan-500/30 text-center space-y-6 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          {/* HUD scanlines success */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          
          <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-500" />
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-widest uppercase italic">Turno Asignado</h2>
          <p className="text-cyan-500/60 font-mono text-sm uppercase">
            Sistema de diagnóstico preparado para su llegada.
          </p>
          <Button onClick={() => setSuccess(false)} className="bg-cyan-500 hover:bg-white hover:text-cyan-900 text-cyan-950 font-bold uppercase tracking-widest px-8 h-12 rounded-none transition-all duration-300">
            Nueva Consulta
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#05080a] relative overflow-hidden" id="reservar">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#0a0f12] p-12 border border-cyan-500/20 relative flex flex-col justify-center space-y-12"
            >
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/40" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/40" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-[1px] bg-cyan-500" />
                    <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em]">Clinical Visor</span>
                  </div>
                  <h2 className="text-6xl font-black tracking-tight text-white leading-none uppercase">
                    Visita de <br />
                    <span className="text-cyan-500 font-light tracking-[0.1em]">Precisión</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                    {[
                      { t: "Escaneo Digital", d: "Diagnóstico inicial avanzado asistido por IA." },
                      { t: "Sincronización Clínica", d: "Recordatorios de alta prioridad y flujo sin demoras." },
                      { t: "Entorno Estéril", d: "Protocolos de bioseguridad de última generación." }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center shrink-0">
                              <span className="text-cyan-500 font-mono text-[10px]">{String(idx + 1).padStart(2, '0')}</span>
                          </div>
                          <div>
                            <span className="block text-white font-bold uppercase text-xs tracking-widest">{feature.t}</span>
                            <span className="text-cyan-500/40 text-[11px] font-mono leading-relaxed mt-1 block uppercase">Description:// {feature.d}</span>
                          </div>
                      </div>
                    ))}
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-cyan-500/10">
                   <div className="flex gap-1">
                      <div className="w-1 h-3 bg-cyan-500" />
                      <div className="w-1 h-3 bg-cyan-500/50" />
                      <div className="w-1 h-3 bg-cyan-500/20" />
                   </div>
                   <p className="text-[10px] font-mono text-cyan-500/30 uppercase tracking-widest">System_Auth: [Verified]</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <Card className="rounded-none bg-[#0a0f12] border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.05)] relative z-10 overflow-hidden">
                    {/* Scanner Line Effect */}
                    <motion.div 
                        animate={{ top: ['-10%', '110%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-px bg-cyan-500/20 z-20"
                    />

                    <CardHeader className="p-10 border-b border-cyan-500/10 bg-cyan-500/[0.02]">
                        <div className="flex justify-between items-start mb-4">
                           <CardTitle className="text-2xl text-white font-bold uppercase tracking-wider">Registro Clínico</CardTitle>
                           <div className="px-2 py-0.5 border border-cyan-500 text-cyan-500 text-[8px] font-black uppercase">Reserved</div>
                        </div>
                        <CardDescription className="text-cyan-500/40 font-mono text-[10px] uppercase">Paciente_Ref: <span className="text-cyan-400">{profession.label}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="p-10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[9px] font-black text-cyan-500/60 uppercase tracking-[0.4em]">Full_Name_Entry</label>
                                <Input name="name" placeholder="> AGREGAR NOMBRE" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-14 rounded-none focus-visible:ring-cyan-500 focus-visible:border-cyan-500 text-lg font-mono placeholder:text-cyan-900 px-6 uppercase shadow-inner" required />
                            </div>
                            
                            <div className="space-y-3">
                                <label className="text-[9px] font-black text-cyan-500/60 uppercase tracking-[0.4em]">Contact_Channel</label>
                                <Input name="contact" placeholder="> PREFERENCIA WHATSAPP" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-14 rounded-none focus-visible:ring-cyan-500 focus-visible:border-cyan-500 text-lg font-mono placeholder:text-cyan-900 px-6 uppercase shadow-inner" required />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black text-cyan-500/60 uppercase tracking-[0.4em]">Scheduled_Date</label>
                                    <Input name="date" type="date" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-14 rounded-none focus-visible:ring-cyan-500 focus-visible:border-cyan-500 text-lg font-mono px-6 shadow-inner [color-scheme:dark]" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black text-cyan-500/60 uppercase tracking-[0.4em]">Time_Slot</label>
                                    <Input name="time" type="time" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-14 rounded-none focus-visible:ring-cyan-500 focus-visible:border-cyan-500 text-lg font-mono px-6 shadow-inner [color-scheme:dark]" required />
                                </div>
                            </div>

                            {error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-cyan-950/20 border border-cyan-500/30 text-cyan-500 text-[10px] font-mono uppercase tracking-widest text-center">
                                    Error_Log: {error}
                                </motion.div>
                            )}

                            <Button 
                                type="submit" 
                                className="w-full h-16 text-xl font-black bg-cyan-500 text-cyan-950 hover:bg-white transition-all duration-300 rounded-none uppercase tracking-[0.2em] relative overflow-hidden group/btn"
                                disabled={loading}
                            >
                                <span className="relative z-10">{loading ? 'Processing...' : 'Secure Appointment'}</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-300 opacity-50 shadow-[0_0_15px_cyan]" />
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
