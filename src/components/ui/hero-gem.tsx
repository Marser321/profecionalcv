"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface HeroGemProps {
  label: string;
  value: string;
  icon: string;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}

export function HeroGem({ label, value, icon, color, position, delay = 0 }: HeroGemProps) {
  // @ts-ignore
  const IconComponent = LucideIcons[icon] || LucideIcons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.5 + delay,
          ease: [0.23, 1, 0.32, 1]
        }
      }}
      className="absolute z-30 pointer-events-none hidden md:block"
      style={position}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2
        }}
        className="flex items-center gap-3 p-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl"
      >
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
        >
          <IconComponent size={20} style={{ color }} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">{label}</span>
          <span className="text-sm font-black text-white leading-none">{value}</span>
        </div>
        
        {/* Glow sutil */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none blur-xl"
          style={{ background: `radial-gradient(circle at center, ${color}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  );
}
