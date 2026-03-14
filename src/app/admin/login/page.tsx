"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, User } from 'lucide-react';

export default function AdminLoginPage() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de credenciales fijas para demo
    if (user === 'admin' && pass === 'autohub2024') {
      localStorage.setItem('admin_session', 'active');
      router.push('/admin');
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 border border-red-600/30 bg-red-600/5 text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
               Restricted Access
            </div>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">Admin<span className="text-red-600">Sync</span></h1>
            <p className="text-neutral-500 text-sm mt-2 font-medium italic uppercase tracking-widest">Admin Control Center</p>
        </div>

        <Card className="bg-[#0a0a0a] border-white/5 rounded-none overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          
          <CardHeader className="pt-10 pb-6 px-10">
            <CardTitle className="text-xl font-black italic uppercase tracking-tighter text-white flex items-center gap-3">
              <ShieldAlert className="text-red-600" size={20} />
              Identificación
            </CardTitle>
          </CardHeader>

          <CardContent className="px-10 pb-12">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Usuario</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                  <Input 
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="ADMIN_USER"
                    className="bg-[#121212] border-white/5 rounded-none h-12 pl-10 text-sm font-bold uppercase italic focus-visible:ring-red-600 transition-all"
                  />
                </div>
              </div>

              {/* ... rest of the form ... */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                  <Input 
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="••••••••"
                    className="bg-[#121212] border-white/5 rounded-none h-12 pl-10 text-sm font-bold focus-visible:ring-red-600 transition-all"
                  />
                </div>
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] font-black uppercase text-red-600 text-center tracking-widest"
                >
                  [ERROR: Credenciales Inválidas]
                </motion.p>
              )}

              <Button 
                type="submit"
                className="w-full h-12 bg-white text-black rounded-none font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all mt-4 group"
              >
                Acceder al Sistema
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-[10px] text-neutral-600 font-mono mt-8 uppercase tracking-[0.3em]">
          Powered by Taller Digital Engine v1.0.2
        </p>

      </motion.div>
    </div>
  );
}
