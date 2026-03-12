"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { FooterMecanico } from './footer-variants/footer-mecanico';
import { FooterAbogado } from './footer-variants/footer-abogado';
import { FooterPsicologo } from './footer-variants/footer-psicologo';
import { FooterOdontologo } from './footer-variants/footer-odontologo';
import { FooterArquitecto } from './footer-variants/footer-arquitecto';
import { FooterEstetica } from './footer-variants/footer-estetica';

export function Footer() {
  const { profession } = useProfession();

  switch (profession.id) {
    case 'mecanico':
      return <FooterMecanico />;
    case 'abogado':
      return <FooterAbogado />;
    case 'psicologo':
      return <FooterPsicologo />;
    case 'odontologo':
      return <FooterOdontologo />;
    case 'arquitecto':
      return <FooterArquitecto />;
    case 'estetica':
      return <FooterEstetica />;
    default:
      // Fallback al diseño original o a Mecánico por ahora
      return <FooterMecanico />;
  }
}
