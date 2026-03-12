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
import { Search, Filter, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BookingsManagementPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await insforge.database
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setBookings(data);
    setLoading(false);
  };

  const filteredBookings = bookings.filter(b => {
    const matchesFilter = filter === 'all' || b.profession_id === filter;
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || 
                          b.contact.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await insforge.database
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', id);
      
      if (!error) {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta reserva?')) return;
    try {
      const { error } = await insforge.database
        .from('bookings')
        .delete()
        .eq('id', id);
      
      if (!error) {
        setBookings(prev => prev.filter(b => b.id !== id));
      }
    } catch (err) {
      console.error('Error deleting booking:', err);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Fecha Alta', 'Cliente', 'Contacto', 'Profesión', 'Fecha Turno', 'Hora', 'Estado'];
    const rows = filteredBookings.map(b => [
      b.id,
      new Date(b.created_at).toLocaleDateString(),
      b.name,
      b.contact,
      b.profession_id,
      b.appointment_date,
      b.appointment_time,
      b.status || 'pending'
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `reservas_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-2">Management</p>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Gestión de Reservas</h1>
        </div>
        <div className="flex gap-4">
             <button onClick={fetchBookings} className="text-[10px] font-black text-white uppercase tracking-widest border border-white/10 px-4 py-2 hover:bg-white/5 transition-all">Sincronizar [F5]</button>
             <button 
               onClick={exportToCSV}
               className="text-[10px] font-black bg-white text-black uppercase tracking-widest px-4 py-2 hover:bg-neutral-200 transition-all flex items-center gap-2"
             >
               <Download size={14} /> Exportar CSV
             </button>
        </div>
      </div>

      <Card className="bg-[#0a0a0a] border-white/5 rounded-none overflow-hidden">
        <CardHeader className="p-6 border-b border-white/5 bg-white/[0.01]">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <Input 
                placeholder="Buscar por cliente o contacto..." 
                className="bg-[#121212] border-white/5 rounded-none pl-10 h-11 text-sm uppercase font-bold italic focus-visible:ring-red-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 text-neutral-500">
                <Filter size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Filtrar:</span>
              </div>
              <Select value={filter} onValueChange={(value) => setFilter(value || 'all')}>
                <SelectTrigger className="w-[180px] bg-[#121212] border-white/5 rounded-none h-11 text-[10px] font-black uppercase tracking-widest">
                  <SelectValue placeholder="Todos los Rubros" />
                </SelectTrigger>
                <SelectContent className="bg-[#121212] border-white/5 text-white rounded-none">
                  <SelectItem value="all" className="uppercase text-[10px] font-black">Todos los Rubros</SelectItem>
                  <SelectItem value="mecanico" className="uppercase text-[10px] font-black">Mecánico</SelectItem>
                  <SelectItem value="abogado" className="uppercase text-[10px] font-black">Abogado</SelectItem>
                  <SelectItem value="psicologo" className="uppercase text-[10px] font-black">Psicólogo</SelectItem>
                  <SelectItem value="odontologo" className="uppercase text-[10px] font-black">Odontólogo</SelectItem>
                  <SelectItem value="arquitecto" className="uppercase text-[10px] font-black">Arquitecto</SelectItem>
                  <SelectItem value="estetica" className="uppercase text-[10px] font-black">Estética</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-white/[0.02]">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">ID / Fecha Alta</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Cliente</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Servicio</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Turno</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Estado</TableHead>
                <TableHead className="text-right text-[10px] font-black uppercase tracking-widest text-neutral-500 py-4 px-6">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-20 text-neutral-600 font-mono italic">
                    [QUERYING_DATABASE...]
                  </TableCell>
                </TableRow>
              ) : filteredBookings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-20 text-neutral-600 font-mono italic uppercase">
                    No se encontraron registros para la búsqueda actual
                  </TableCell>
                </TableRow>
              ) : (
                filteredBookings.map((booking) => (
                  <TableRow key={booking.id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <TableCell className="px-6 py-4">
                      <div className="text-[9px] font-mono text-neutral-600 uppercase">ID_{booking.id.slice(0, 8)}</div>
                      <div className="text-[10px] text-neutral-500">{new Date(booking.created_at).toLocaleDateString()}</div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <div className="font-bold uppercase italic text-white">{booking.name}</div>
                      <div className="text-[10px] text-neutral-500 font-mono">{booking.contact}</div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      <span className={cn("text-[10px] font-black uppercase italic tracking-widest border-l-2 pl-2 border-current", getProfessionColor(booking.profession_id))}>
                        {booking.profession_id}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4 font-mono text-xs text-neutral-400">
                      <div className="text-white font-bold">{booking.appointment_date}</div>
                      <div className="text-[10px]">{booking.appointment_time} HS</div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                      {getStatusBadge(booking.status || 'pending')}
                    </TableCell>
                     <TableCell className="px-6 py-4 text-right">
                       <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Select onValueChange={(value: string | null) => { if (value) updateStatus(String(booking.id), value); }}>
                           <SelectTrigger className="h-8 w-24 bg-white/5 border-white/10 text-[9px] font-black uppercase">
                             <SelectValue placeholder="Estado" />
                           </SelectTrigger>
                           <SelectContent className="bg-[#121212] border-white/10 text-white">
                             <SelectItem value="pending" className="text-[9px] uppercase font-bold">Pendiente</SelectItem>
                             <SelectItem value="completed" className="text-[9px] uppercase font-bold">Completado</SelectItem>
                             <SelectItem value="cancelled" className="text-[9px] uppercase font-bold text-red-500">Cancelado</SelectItem>
                           </SelectContent>
                         </Select>
                         <button 
                           onClick={() => deleteBooking(booking.id)}
                           className="h-8 w-8 bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-neutral-500"
                           title="Eliminar Reserva"
                         >
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                         </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
