"use client";

import { useEffect } from 'react';
import { useProfession } from '@/context/profession-context';

export function DynamicMetadata() {
  const { profession } = useProfession();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Update Title
      const baseTitle = "Hub Profesional";
      const professionTitle = `${profession.brandName} | ${profession.label}`;
      document.title = `${professionTitle} — ${baseTitle}`;

      // Update Meta Description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Servicios premium de ${profession.label} en Montevideo. ${profession.brandName}: Excelencia y exclusividad garantizada.`);
      }

      // Update OG Title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', professionTitle);
      }
    }
  }, [profession]);

  return null;
}
