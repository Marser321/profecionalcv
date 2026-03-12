"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { DiffMecanico } from './differentials-variants/diff-mecanico';
import { DiffAbogado } from './differentials-variants/diff-abogado';
import { DiffPsicologo } from './differentials-variants/diff-psicologo';
import { DiffOdontologo } from './differentials-variants/diff-odontologo';
import { DiffArquitecto } from './differentials-variants/diff-arquitecto';
import { DiffEstetica } from './differentials-variants/diff-estetica';

export function Differentials() {
  const { profession } = useProfession();

  switch (profession.id) {
    case 'mecanico':
      return <DiffMecanico />;
    case 'abogado':
      return <DiffAbogado />;
    case 'psicologo':
      return <DiffPsicologo />;
    case 'odontologo':
      return <DiffOdontologo />;
    case 'arquitecto':
      return <DiffArquitecto />;
    case 'estetica':
      return <DiffEstetica />;
    default:
      // Fallback a Mecánico por ahora mientras desarrollamos el resto
      return <DiffMecanico />;
  }
}
