"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { insforge } from '@/lib/insforge';
import { Calendar, Users, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await insforge.database
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) setBookings(data);
      setLoading(false);
    };

    fetchBookings();
  }, []);

  const stats = [
    { label: 'Total Reservas', value: bookings.length, icon: Calendar, color: 'text-red-600' },
    { label: 'Clientes Nuevos', value: '12', icon: Users, color: 'text-blue-600' },
    { label: 'Crecimiento', value: '+24%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Pendientes', value: bookings.filter(b => b.status === 'pending').length, icon: Clock, color: 'text-yellow-600' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending': 
        return <Badge className="bg-yellow-600/20 text-yellow-600 border-yellow-600/20 uppercase text-[10px] italic font-black">Pendiente</Badge>;
      case 'completed': 
        return <Badge className="bg-green-600/20 text-green-600 border-green-600/20 uppercase text-[10px] italic font-black">Completado</Badge>;
      default: 
        return <Badge className="bg-neutral-600/20 text-neutral-600 border-neutral-600/20 uppercase text-[10px] italic font-black">{status}</Badge>;
    }
  };

  const getProfessionColor = (id: string) => {
    switch (id) {
      case 'mecanico': return 'text-red-500';
      case 'abogado': return 'text-blue-500';
      case 'psicologo': return 'text-green-500';
      case 'odontologo': return 'text-cyan-500';
      case 'arquitecto': return 'text-amber-500';
      case 'estetica': return 'text-pink-500';
      default: return 'text-white';
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-2">Control Panel</p>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Dashboard</h1>
        </div>
        <div className="text-right">
          <p className="text-neutral-500 text-sm font-medium uppercase italic">Bienvenido, Admin</p>
          <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">System Status: [OK]</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-[#0a0a0a] border-white/5 rounded-none overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-[10px] font-black uppercase italic tracking-widest text-neutral-500">
                  {stat.label}
                </CardTitle>
                <stat.icon size={16} className={stat.color} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black italic">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bookings Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-[#0a0a0a] border-white/5 rounded-none overflow-hidden">
          <CardHeader className="border-b border-white/5 bg-gradient-to-r from-red-600/5 to-transparent p-6">
            <div className="flex justify-between items-center">
               <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Reservas Recientes</CardTitle>
               <button className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] border border-red-600/30 px-3 py-1 hover:bg-red-600 hover:text-white transition-all">Ver todas</button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/[0.02]">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Cliente</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Servicio / Rubro</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Fecha y Hora</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Estado</TableHead>
                  <TableHead className="text-right text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-20 text-neutral-600 font-mono italic">
                      [DATA_ACCESS_PENDING...]
                    </TableCell>
                  </TableRow>
                ) : bookings.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-20 text-neutral-600 font-mono italic">
                      NO HAY RESERVAS DISPONIBLES
                    </TableCell>
                  </TableRow>
                ) : (
                  bookings.map((booking) => (
                    <TableRow key={booking.id} className="border-white/5 hover:bg-white/[0.02] transition-colors">
                      <TableCell className="px-6 py-4">
                        <div className="font-bold uppercase italic text-white">{booking.name}</div>
                        <div className="text-xs text-neutral-500">{booking.contact}</div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <span className={cn("text-xs font-black uppercase italic tracking-tighter", getProfessionColor(booking.profession_id))}>
                          {booking.profession_id}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4 font-mono text-xs text-neutral-400">
                        {new Date(booking.appointment_date + 'T' + booking.appointment_time).toLocaleString('es-UY', {
                          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {getStatusBadge(booking.status || 'pending')}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-right">
                        <button className="text-[10px] font-black text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Detalles</button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
