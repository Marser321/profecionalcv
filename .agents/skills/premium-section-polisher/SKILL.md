---
name: premium-section-polisher
description: Habilidad maestra para el refinamiento atómico y arquitectónico de secciones de la Landing Page, creando variantes premium Dark Mode específicas para cada profesión.
---

# Premium Section Polisher (Pulidor de Secciones Premium)

## Objetivo
Esta habilidad define exhaustivamente el flujo de trabajo que debe seguir un agente autónomo para **refactorizar una sección** ("Diferenciales", "Testimonios", "Precios", etc.) de la landing page principal, transformándola en un componente inteligente que renderiza **Arquitecturas Visuales Únicas (Variantes)** según la profesión seleccionada por el usuario.

El modelo debe actuar como un Arquitecto de Software Full Stack y un Diseñador UI/UX de vanguardia, comunicándose en Español (Rioplatense).

## 1. Patrón Arquitectónico de Variantes

Nunca escribas un componente monolítico gigante lleno de condicionales. **Usa el patrón de enrutador:**
1. Convierte el componente base (ej. `differentials.tsx`) en un **Client Component Renderizador** (`"use client"`).
2. Lee el contexto de la profesión (`useProfession`).
3. Retorna un sub-componente específico (ej. `<DifferentialsArquitecto />`) basado en un `switch(profession.id)`.
4. Crea la carpeta `[componentName]-variants` (ej. `differentials-variants/`) y aloja allí los archivos individuales por rubro.

## 2. Metodología "Divide y Vencerás" (Iteraciones Atómicas)

Si se te pide "pulir" una sección entera para todos los rubros, **NO LO HAGAS EN UN SOLO PASO**.
Debes aplicar la técnica de Iteraciones:
- **Iteración 1:** Crea e implementa únicamente el rubro `Mecánico`. Ejecuta compilación, haz capturas con el Subagente Web. Informa al usuario.
- **Iteración 2:** Solo si se aprueba el paso 1, procede con `Abogado`. Ejecuta test, informa.
- ...Y así sucesivamente hasta finalizar todos los rubros.
- Esto evita sobrecargas cognitivas y previene pérdida masiva de código por errores, obteniendo *mejores resultados de parte de los modelos.*

## 3. Guía de Estilos Premium (Dark Mode) y Rubros

Todos los diseños deben construirse bajo la premisa "Mobile-First" y "Dark Mode" (fondos negros u oscuros premium como `#0a0a09`), usando Glassmorphism y bordes sutiles de alto contraste (`border-white/10`).

Debes mantener estricta fidelidad a las identidades de cada rubro:

| Rubro             | Identidad Visual & Componentes UI Sugeridos                                                                 | Color Acento       |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------ |
| **Mecánico**      | Robustez, Tilt 3D (Framer), Contadores agresivos, Motores/Talleres Neón.                                  | `Rojo Neón`        |
| **Abogado**       | Monumentalismo, Scroll Parallax, Tipografía Serif Gigante, Badges Legales flotantes.                      | `Azul Eléctrico`   |
| **Psicólogo**     | Asimetría, Bordes extremadamente redondeados (`rounded-[60%_40%...]`), Animación Breathing (Lenta y Zen).| `Verde Esmeralda`  |
| **Odontólogo**    | Altísima Tecnología, HUD Clínico, Escáneres estilo Láser holográfico (Framer), Blancos/Cyan Limpios.      | `Cyan Brillante`   |
| **Arquitecto**    | Lujo Relajado, Planos Panorámicos en Movimiento Constante, Mampostería (Masonry), Líneas de Plomada finas.| `Dorado Profundo`  |
| **Estética**      | Lujo Sensorial, Auras/Glows Atmosféricos Flotantes, HUD Interactivo Cosmético, Tipografía Haute Couture.  | `Magenta / Rosa`   |

## 4. Requisitos Técnicos Obligatorios

*   **Framer Motion:** Es obligatorio instanciar físicas fluidas, stagger, fadeUps, interacciones al hacer hover y variantes de scroll (`whileInView`). Nada puede ser estático.
*   **Imágenes:** Emplear las imágenes en la carpeta `public/` (ej. `/hero/mecanico.png`). Ajustarlas con `next/image` y capas de mezcla (`mix-blend-mode`, `contrast`, `grayscale`) para integrarlas dramáticamente en el fondo oscuro.
*   **Compilación Estricta:** Antes de dar por cerrada una iteración, se debe ejecutar silenciosamente `npx tsc --noEmit` para garantizar la estabilidad del proyecto.

## 5. Instrucciones de Ejecución

Cuando el usuario te diga "Aplica el polisher a la sección X", tú debes responder:
> "He comprendido el reto. Procederé a refactorizar el componente base en formato de Enrutador y comenzaré de inmediato con la **Iteración 1 (Mecánica)**. Crearé la variante, la verificaré en el navegador y te enviaré la prueba visual antes de avanzar al siguiente rubro."
