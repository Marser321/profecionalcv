"use client";

import React, { useState } from 'react';
import { useProfession } from '@/context/profession-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { insforge } from '@/lib/insforge';
import { motion } from 'framer-motion';

export function BookingAbogado() {
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
      <section className="py-32 bg-[#050507] min-h-[600px] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full p-16 bg-white/[0.02] border border-white/5 text-center space-y-8 backdrop-blur-xl"
        >
          <div className="w-20 h-20 bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-3xl font-light text-white tracking-tight">Confirmación Recibida</h2>
          <p className="text-neutral-400 font-serif italic text-lg">
            "Su solicitud de consulta ha sido registrada. Un miembro de nuestro equipo legal se pondrá en contacto con usted a la brevedad."
          </p>
          <Button onClick={() => setSuccess(false)} variant="ghost" className="text-[#007AFF] hover:bg-[#007AFF]/10 font-medium tracking-widest uppercase text-xs">Agendar otra consulta</Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#050507] relative overflow-hidden" id="reservar">
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007AFF]/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
                <div className="space-y-6">
                  <p className="text-[#007AFF] font-mono text-xs tracking-[0.5em] uppercase">Protocolo Institucional</p>
                  <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
                    Solicitud de <br />
                    <span className="font-serif italic text-[#007AFF]">Consulta Privada</span>
                  </h2>
                  <div className="w-24 h-px bg-[#007AFF]/30" />
                </div>
                
                <div className="space-y-8">
                    {[
                      { t: "Confidencialidad Absoluta", d: "Tratamiento de datos bajo estándares de secreto profesional." },
                      { t: "Atención Prioritaria", d: "Gestión de agenda coordinada para evitar tiempos de espera." },
                      { t: "Respuesta Inmediata", d: "Confirmación formal vía canales institucionales en menos de 2h." }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-6 group">
                          <div className="w-px h-12 bg-[#007AFF]/20 group-hover:bg-[#007AFF] transition-colors duration-500" />
                          <div className="space-y-1">
                            <span className="block text-white font-light text-xl tracking-tight">{feature.t}</span>
                            <span className="text-neutral-500 text-sm font-light italic font-serif">{feature.d}</span>
                          </div>
                      </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <Card className="rounded-none bg-white/[0.01] border-white/5 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-4.514A11.952 11.952 0 0112 20.052c3.13-1.028 5.437-3.511 6.326-6.554m-9.474-2c0-2.206 1.794-4 4-4s4 1.794 4 4m-8 0a4 4 0 108 0m-5 4v3a2 2 0 11-4 0v-3m8 0v3a2 2 0 104 0v-3" />
                       </svg>
                    </div>

                    <CardHeader className="p-12 border-b border-white/5">
                        <CardTitle className="text-2xl font-light text-white tracking-widest lowercase italic font-serif">Formulario de Registro</CardTitle>
                        <CardDescription className="text-neutral-500 font-light mt-2 uppercase tracking-[0.2em] text-[10px]">Asunto: <span className="text-white">{profession.label}</span></CardDescription>
                    </CardHeader>
                    <CardContent className="p-12">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Nombre del Solicitante</label>
                                <Input name="name" placeholder="Escriba su nombre completo" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-[#007AFF] text-lg font-light transition-all px-0" required />
                            </div>
                            
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Contacto de Referencia</label>
                                <Input name="contact" placeholder="Email o Teléfono" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-[#007AFF] text-lg font-light transition-all px-0" required />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Fecha Propuesta</label>
                                    <Input name="date" type="date" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-[#007AFF] text-lg font-light transition-all px-0 [color-scheme:dark]" required />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Preferencia Horaria</label>
                                    <Input name="time" type="time" className="bg-transparent border-0 border-b border-white/10 rounded-none text-white h-12 focus-visible:ring-0 focus-visible:border-[#007AFF] text-lg font-light transition-all px-0 [color-scheme:dark]" required />
                                </div>
                            </div>

                            {error && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-red-500/5 border border-red-500/20 text-red-400 text-xs font-serif italic">
                                    {error}
                                </motion.div>
                            )}

                            <div className="pt-6">
                              <Button 
                                  type="submit" 
                                  className="w-full h-16 text-xs font-bold bg-[#007AFF] text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none uppercase tracking-[0.4em] shadow-[0_16px_32px_-8px_rgba(0,122,255,0.3)]"
                                  disabled={loading}
                              >
                                  {loading ? 'Procesando Solicitud...' : 'Enviar Solicitud'}
                              </Button>
                              <p className="mt-6 text-center text-[8px] text-neutral-600 uppercase tracking-widest">Al enviar, usted acepta nuestro protocolo de privacidad institucional.</p>
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
