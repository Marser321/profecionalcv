"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { WorkMecanico } from './workflow-variants/work-mecanico';
import { WorkAbogado } from './workflow-variants/work-abogado';
import { WorkPsicologo } from './workflow-variants/work-psicologo';
import { WorkOdontologo } from './workflow-variants/work-odontologo';
import { WorkArquitecto } from './workflow-variants/work-arquitecto';
import { WorkEstetica } from './workflow-variants/work-estetica';

export function Workflow() {
  const { profession } = useProfession();

  switch (profession.id) {
    case 'mecanico':
      return <WorkMecanico />;
    case 'abogado':
      return <WorkAbogado />;
    case 'psicologo':
      return <WorkPsicologo />;
    case 'odontologo':
      return <WorkOdontologo />;
    case 'arquitecto':
      return <WorkArquitecto />;
    case 'estetica':
      return <WorkEstetica />;
    default:
      // Fallback al diseño original o a Mecánico por ahora
      return <WorkMecanico />;
  }
}
