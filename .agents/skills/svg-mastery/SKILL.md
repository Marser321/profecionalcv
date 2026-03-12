---
name: svg-mastery
description: Instrucciones expertas para crear animaciones SVG de alta gama, scrollytelling y microinteracciones para sitios web de servicios profesionales.
---
# Dominio de Animaciones SVG y Narrativa Visual

## Cuándo usar esta skill
Úsala cada vez que el usuario te pida animar un proceso de trabajo, ilustrar un rubro profesional (ej. abogados, electricistas) o agregar microinteracciones al diseño.

## Instrucciones de Desarrollo
1. Utiliza siempre gráficos vectoriales escalables (SVG) estructurados semánticamente con IDs y clases claras.
2. Scrollytelling: Para animaciones ligadas al scroll, sincroniza propiedades geométricas o el progreso del trazado (`stroke-dashoffset`) estrictamente con la posición vertical del scroll del usuario. Si el usuario hace scroll hacia arriba, la animación debe retroceder en reversa.
3. Mantén el peso de cada archivo/bloque SVG optimizado por debajo de los 10 kilobytes.
4. Aplica "easing functions" (ej. `cubic-bezier`) para asegurar que las transiciones o microinteracciones (como botones que reaccionan al pasar el cursor) se sientan fluidas y naturales.
5. Accesibilidad obligatoria: Incluye siempre la directiva de CSS `@media (prefers-reduced-motion: reduce)` para desactivar o simplificar las animaciones si el sistema operativo del usuario lo solicita.
