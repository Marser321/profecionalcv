"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingOdontologo() {
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
      <section className="py-32 bg-[#05080a] min-h-[700px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/[0.03] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full p-16 bg-[#0a0f12] border border-cyan-500/30 text-center space-y-10 relative overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.1)]"
        >
          {/* HUD scanlines success */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,0,0.02),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
          
          <div className="w-24 h-24 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6 relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-black text-white tracking-widest uppercase italic">Turno Asignado</h2>
            <p className="text-cyan-500 font-mono text-sm uppercase leading-relaxed tracking-wider">
              Sistema de diagnóstico clínico preparado. Protocolo de atención activado.
            </p>
          </div>

          <div className="py-6 border-y border-cyan-500/10 font-mono text-[9px] text-cyan-500/40 uppercase tracking-[0.4em] space-y-2">
            <p>Clinical_ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
            <p>Status: Synchronized</p>
          </div>

          <Button 
            onClick={() => { setSuccess(false); setStep(1); }} 
            className="w-full bg-cyan-500 hover:bg-white hover:text-cyan-950 text-cyan-950 font-black uppercase tracking-[0.3em] h-16 rounded-none transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Nueva Consulta Clínica →
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#05080a] relative overflow-hidden font-mono" id="reservar">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }} 
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-stretch">
            {/* Context Block */}
            <div className="lg:col-span-5 space-y-16 flex flex-col justify-center">
                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="space-y-10"
                >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="w-16 h-[2px] bg-cyan-500" />
                        <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.6em] italic">Interface de Reserva</span>
                      </div>
                      <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                        Visita de <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #22d3ee' }}>Alta Precisión</span>
                      </h2>
                    </div>
                </motion.div>
                
                <div className="grid gap-10">
                    {[
                      { t: "Análisis Biométrico", d: "Sincronización de datos clínicos previos al ingreso." },
                      { t: "Slot de Alta Prioridad", d: "Gestión de agenda optimizada para flujo ininterrumpido." }
                    ].map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex gap-8 group"
                      >
                          <div className="w-16 h-16 bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:border-cyan-400 transition-all duration-500">
                              <span className="text-cyan-500 font-mono text-xl font-black">0{idx + 1}</span>
                          </div>
                          <div>
                            <span className="block text-white font-black uppercase text-sm tracking-widest mb-1">{feature.t}</span>
                            <span className="text-cyan-500/40 text-[10px] uppercase tracking-widest leading-relaxed">System_Brief:// {feature.d}</span>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>

            {/* Form Block */}
            <div className="lg:col-span-7">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Card className="rounded-none bg-[#0a0f12] border border-cyan-500/20 shadow-[0_0_80px_rgba(6,182,212,0.1)] relative z-10 overflow-hidden">
                        {/* HUD Scanline */}
                        <div className="h-1 w-full bg-cyan-500/5 absolute top-0 left-0">
                            <motion.div 
                                animate={{ width: `${(step / 2) * 100}%` }}
                                className="h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]" 
                            />
                        </div>

                        <CardHeader className="p-16 pb-8 border-b border-cyan-500/10 bg-cyan-500/[0.01]">
                            <div className="flex justify-between items-center mb-4">
                               <CardTitle className="text-3xl text-white font-black uppercase tracking-widest italic leading-none">Registro_Clínico</CardTitle>
                               <div className="px-3 py-1 border border-cyan-500/30 text-cyan-400 text-[9px] font-black uppercase tracking-widest animate-pulse">Phase_0{step}</div>
                            </div>
                            <CardDescription className="text-cyan-500/40 font-mono text-[10px] uppercase tracking-widest">Procedimiento: <span className="text-cyan-400">{profession.label}</span></CardDescription>
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
                                                <label className="text-[9px] font-black text-cyan-500/50 uppercase tracking-[0.6em]">Paciente_Full_Name</label>
                                                <Input name="name" placeholder="> INPUT_IDENTIFICATION" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-20 rounded-none focus-visible:ring-cyan-500/30 focus-visible:border-cyan-500 text-2xl font-black placeholder:text-cyan-900 px-8 uppercase shadow-inner" required />
                                            </div>
                                            
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-cyan-500/50 uppercase tracking-[0.6em]">Contact_Relay_Channel</label>
                                                <Input name="contact" placeholder="> DATA_LINK_MOBILE_OR_NET" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-20 rounded-none focus-visible:ring-cyan-500/30 focus-visible:border-cyan-500 text-2xl font-black placeholder:text-cyan-900 px-8 uppercase shadow-inner" required />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="grid grid-cols-2 gap-12"
                                        >
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-cyan-500/50 uppercase tracking-[0.6em]">Execution_Date</label>
                                                <Input name="date" type="date" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-20 rounded-none focus-visible:ring-cyan-500/30 focus-visible:border-cyan-500 text-2xl font-black px-8 shadow-inner [color-scheme:dark]" required />
                                            </div>
                                            <div className="space-y-6">
                                                <label className="text-[9px] font-black text-cyan-500/50 uppercase tracking-[0.6em]">Time_Frequency</label>
                                                <Input name="time" type="time" className="bg-black/40 border-cyan-500/20 text-cyan-400 h-20 rounded-none focus-visible:ring-cyan-500/30 focus-visible:border-cyan-500 text-2xl font-black px-8 shadow-inner [color-scheme:dark]" required />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-cyan-950/30 border border-cyan-500/40 text-cyan-500 text-[10px] font-black uppercase tracking-widest text-center italic">
                                        SYSTEM_FAILURE_LOG: {error}
                                    </motion.div>
                                )}

                                <div className="flex gap-8 pt-6">
                                    {step === 2 && (
                                        <Button 
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="h-20 px-10 border border-cyan-500/20 text-cyan-500 hover:bg-cyan-500/5 rounded-none font-black uppercase italic tracking-widest text-xs"
                                        >
                                            Back
                                        </Button>
                                    )}
                                    <Button 
                                        type="submit" 
                                        className="flex-1 h-20 text-2xl font-black bg-cyan-500 text-cyan-950 hover:bg-white transition-all duration-300 rounded-none uppercase tracking-[0.2em] relative overflow-hidden group/btn"
                                        disabled={loading}
                                    >
                                        <span className="relative z-10">{loading ? 'Synthesizing...' : step === 1 ? 'Phase_Next >>' : 'Secure_Assignment'}</span>
                                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-cyan-300 opacity-60 shadow-[0_0_20px_cyan]" />
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Industrial HUD Accents */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyan-500/20 pointer-events-none" />
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyan-500/20 pointer-events-none" />
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
