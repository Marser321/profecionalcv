"use client";

import { useProfession } from '@/context/profession-context';
import { AboutMecanico } from './about-variants/about-mecanico';
import { AboutAbogado } from './about-variants/about-abogado';
import { AboutPsicologo } from './about-variants/about-psicologo';
import { AboutOdontologo } from './about-variants/about-odontologo';
import { AboutArquitecto } from './about-variants/about-arquitecto';
import { AboutEstetica } from './about-variants/about-estetica';

// Dispatcher que selecciona la plantilla de About correcta según la profesión activa
export function AboutSection() {
  const { profession } = useProfession();

  switch (profession.id) {
    case 'mecanico':    return <AboutMecanico profession={profession} />;
    case 'abogado':     return <AboutAbogado profession={profession} />;
    case 'psicologo':   return <AboutPsicologo profession={profession} />;
    case 'odontologo':  return <AboutOdontologo profession={profession} />;
    case 'arquitecto':  return <AboutArquitecto profession={profession} />;
    case 'estetica':    return <AboutEstetica profession={profession} />;
    default:            return <AboutMecanico profession={profession} />;
  }
}
