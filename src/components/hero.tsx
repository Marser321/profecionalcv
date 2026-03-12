"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { HeroMecanico } from './hero-variants/hero-mecanico';
import { HeroAbogado } from './hero-variants/hero-abogado';
import { HeroPsicologo } from './hero-variants/hero-psicologo';
import { HeroOdontologo } from './hero-variants/hero-odontologo';
import { HeroArquitecto } from './hero-variants/hero-arquitecto';
import { HeroEstetica } from './hero-variants/hero-estetica';

export function Hero() {
  const { profession } = useProfession();

  // Router de visualización del Hero basado en la profesión seleccionada
  switch (profession.id) {
    case 'abogado':
      return <HeroAbogado />;
    case 'psicologo':
      return <HeroPsicologo />;
    case 'odontologo':
      return <HeroOdontologo />;
    case 'arquitecto':
      return <HeroArquitecto />;
    case 'estetica':
      return <HeroEstetica />;
    // Más adelante se agregarán otras variantes
    case 'mecanico':
    default:
      // Fallback a Mecanico que funciona excelente para todas las profesiones (con su respectiva info)
      return <HeroMecanico />;
  }
}
