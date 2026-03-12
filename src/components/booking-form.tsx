"use client";

import React from 'react';
import { useProfession } from '@/context/profession-context';
import { BookingMecanico } from './booking-variants/booking-mecanico';
import { BookingAbogado } from './booking-variants/booking-abogado';
import { BookingPsicologo } from './booking-variants/booking-psicologo';
import { BookingOdontologo } from './booking-variants/booking-odontologo';
import { BookingArquitecto } from './booking-variants/booking-arquitecto';
import { BookingEstetica } from './booking-variants/booking-estetica';

export function BookingForm() {
  const { profession } = useProfession();

  switch (profession.id) {
    case 'mecanico':
      return <BookingMecanico />;
    case 'abogado':
      return <BookingAbogado />;
    case 'psicologo':
      return <BookingPsicologo />;
    case 'odontologo':
      return <BookingOdontologo />;
    case 'arquitecto':
      return <BookingArquitecto />;
    case 'estetica':
      return <BookingEstetica />;
    default:
      // Fallback al diseño original o a Mecánico por ahora
      return <BookingMecanico />;
  }
}
