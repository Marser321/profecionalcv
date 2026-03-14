"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useProfession } from "@/context/profession-context";
import { X, Maximize2, ArrowRight, ArrowLeft } from "lucide-react";

export function WorkGallery() {
  const { profession } = useProfession();
  const gallery = profession.gallery || [];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (gallery.length === 0) return null;

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-32 relative overflow-hidden bg-black">
      {/* Fondos decorativos atmosféricos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
          style={{ backgroundColor: profession.accent }}
        />
        <div 
          className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: profession.accent }}
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px]" style={{ backgroundColor: profession.accent }} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: profession.accent }}>
                Portafolio de Excelencia
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              Casos de <span className="text-white/20 italic font-light italic">Éxito Real</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-2xl">
              La evidencia tangible de nuestro rigor técnico. Cada imagen representa un desafío resuelto con los más altos estándares del rubro.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <p className="text-white font-bold text-2xl">{gallery.length}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Activos Verificados</p>
             </div>
             <div className="w-px h-12 bg-white/10 hidden md:block" />
          </div>
        </div>

        {/* Grid de Galería Dinámica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5 cursor-pointer 
                ${index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/5]'}`}
            >
              <Image unoptimized
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              {/* Overlay de información rápida */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/10 text-white/70 backdrop-blur-md mb-3 border border-white/10">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    <Maximize2 size={12} style={{ color: profession.accent }} />
                    <span>Click para expandir</span>
                  </div>
                </div>
              </div>

              {/* Borde reactivo */}
              <div 
                className="absolute inset-x-0 bottom-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                style={{ backgroundColor: profession.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE PREVISUALIZACIÓN PREMIUM */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
          >
            {/* Controles del Modal */}
            <div className="absolute top-10 right-10 z-[110] flex items-center gap-6">
               <div className="text-white/40 text-sm font-mono tracking-tighter">
                  {selectedImage + 1} / {gallery.length}
               </div>
               <button 
                onClick={() => setSelectedImage(null)}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
               >
                 <X size={24} />
               </button>
            </div>

            {/* Navegación */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[110]"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[110]"
            >
              <ArrowRight size={24} />
            </button>

            {/* Imagen Principal del Modal */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              key={selectedImage}
              className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[80vh] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10"
            >
               <Image unoptimized
                src={gallery[selectedImage].image}
                alt={gallery[selectedImage].title}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain md:object-cover"
                priority
              />
              
              {/* Pie de imagen en modal */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: profession.accent }}>
                          {gallery[selectedImage].category}
                       </span>
                       <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                          {gallery[selectedImage].title}
                       </h2>
                    </div>
                    <button 
                      className="px-8 py-4 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                      style={{ backgroundColor: profession.accent, color: 'white' }}
                    >
                      Solicitar Información
                    </button>
                 </div>
              </div>
            </motion.div>

            {/* Overlay para cerrar al hacer click fuera */}
            <div 
              className="absolute inset-0 z-0" 
              onClick={() => setSelectedImage(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
