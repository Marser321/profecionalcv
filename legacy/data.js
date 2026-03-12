export const CONTACT = {
  whatsapp: "https://wa.me/0000000000",
  mailto: "mailto:hola@tuempresa.com",
};

export const TYPOGRAPHY = {
  editorial: { display: "var(--font-display)", body: "var(--font-body)" },
  modern: { display: "var(--font-display)", body: "var(--font-body)" },
  contrast: { display: "var(--font-display)", body: "var(--font-body)" },
};

export const SHARED_COPY = {
  disruptive: {
    title: "Su profesion no esta en la lista?",
    copy: "La incorporamos con una experiencia hiper personal. Definimos una propuesta unica.",
    cta: "Pedir personalizacion",
  },
  form: {
    title: "Solicitá tu propuesta gratuita.",
    subtitle: "Completá estos 3 datos y nos pondremos en contacto en 24hs.",
    button: "Obtener mi propuesta",
  },
};

export const PROFESSIONS = {
  abogado: {
    label: "Abogado",
    layout: "abogado",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.editorial,
    hero: {
      eyebrow: "Defensa estrategica",
      title: "Convierte consultas legales en confianza inmediata.",
      subtitle:
        "Una landing sobria y premium para estudios y especialistas legales. Claridad, autoridad y accion directa.",
      proof: ["Respuesta en minutos", "Agenda clara", "Confianza juridica"],
    },
    ctas: {
      whatsapp: "Consulta legal inmediata",
      mailto: "Agendar llamada",
    },
    sections: {
      timeline: {
        title: "Linea de accion legal",
        subtitle: "Del primer contacto a la resolucion con foco en claridad.",
      },
      proof: {
        title: "Indicadores de credibilidad",
        subtitle: "Datos que refuerzan autoridad desde el primer vistazo.",
      },
    },
    differentials: [
      { title: "Analisis rapido", copy: "Diagnostico claro en el primer contacto." },
      { title: "Estrategia documentada", copy: "Plan legal entendible para el cliente." },
      { title: "Seguimiento continuo", copy: "Actualizaciones con lenguaje simple." },
    ],
    stats: [
      { value: "24h", label: "Primera respuesta" },
      { value: "+38%", label: "Consultas calificadas" },
      { value: "4.9/5", label: "Percepcion de confianza" },
    ],
    workflow: {
      title: "Flujo legal con narrativa clara",
      subtitle: "Cada etapa reduce incertidumbre y acelera decisiones.",
      steps: [
        { title: "Contacto", copy: "Primer mensaje con contexto y urgencia." },
        { title: "Diagnostico", copy: "Escucha activa y resumen del caso." },
        { title: "Estrategia", copy: "Ruta legal explicada con claridad." },
        { title: "Resolucion", copy: "Seguimiento y cierre profesional." },
      ],
    },
    quote: {
      text: "Orden, claridad y accion desde la primera consulta.",
      author: "Estudio legal premium",
    },
    images: {
      profile: {
        base: "assets/images/abogado/profile",
        alt: "Retrato de abogado",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/abogado/context",
        alt: "Sala de reuniones legal",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
    signals: [],
    highlights: [],
    tiers: [],
  },
  electricista: {
    label: "Electricista",
    layout: "electricista",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.modern,
    hero: {
      eyebrow: "Energia segura",
      title: "Servicios electricos con respuesta instantanea.",
      subtitle:
        "Presenta instalaciones, urgencias y mantenimiento con claridad visual y accion inmediata.",
      proof: ["Turnos rapidos", "Seguridad visible", "Mobile-first"],
    },
    ctas: {
      whatsapp: "Solicitar asistencia",
      mailto: "Enviar detalles",
    },
    sections: {
      diff: {
        title: "Servicios con foco en urgencia",
        subtitle: "Todo lo necesario para elegirte en segundos.",
      },
      proof: {
        title: "Seguridad y confianza visible",
        subtitle: "Indicadores que reducen dudas en el primer clic.",
      },
    },
    differentials: [
      { title: "Urgencias 24/7", copy: "Respuesta inmediata para incidentes criticos." },
      { title: "Instalaciones seguras", copy: "Diagnostico claro y soluciones seguras." },
      { title: "Garantia visible", copy: "Proceso y soporte explicados con transparencia." },
    ],
    stats: [
      { value: "30 min", label: "Tiempo medio de contacto" },
      { value: "90 dias", label: "Garantia en servicio" },
      { value: "+42%", label: "Conversion en mobile" },
    ],
    workflow: {
      title: "Flujo electrico sin friccion",
      subtitle: "Un proceso claro que evita perdida de tiempo.",
      steps: [
        { title: "Diagnostico", copy: "Detectamos el problema en minutos." },
        { title: "Presupuesto", copy: "Precio claro antes de intervenir." },
        { title: "Intervencion", copy: "Solucion rapida con foco en seguridad." },
        { title: "Garantia", copy: "Seguimiento y mantenimiento programado." },
      ],
    },
    signals: ["Equipos certificados", "Respuesta inmediata", "Instalaciones seguras"],
    highlights: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/electricista/profile",
        alt: "Retrato de electricista",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/electricista/context",
        alt: "Electricista trabajando",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  plomero: {
    label: "Plomero",
    layout: "plomero",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.modern,
    hero: {
      eyebrow: "Soluciones urgentes",
      title: "Gana llamadas con una presencia clara y confiable.",
      subtitle:
        "Disenado para emergencias y mantenimientos con conversion inmediata.",
      proof: ["CTA visibles", "Procesos claros", "Friccion cero"],
    },
    ctas: {
      whatsapp: "Pedir asistencia",
      mailto: "Cotizar servicio",
    },
    sections: {
      alert: "Emergencias listas en menos de 30 minutos.",
      steps: {
        title: "Ruta de respuesta inmediata",
        subtitle: "Un recorrido simple que reduce urgencia y dudas.",
      },
      proof: {
        title: "Confianza en cada visita",
        subtitle: "Indicadores que transmiten control desde el primer clic.",
      },
    },
    differentials: [
      { title: "Llegada rapida", copy: "Rutas claras y comunicacion constante." },
      { title: "Solucion definitiva", copy: "Reparacion con garantia real." },
      { title: "Diagnostico claro", copy: "Explicacion simple antes de intervenir." },
    ],
    highlights: [
      { title: "Antes y despues", copy: "Muestra resultados en segundos." },
      { title: "Equipos listos", copy: "Herramientas preparadas para urgencias." },
      { title: "Cierre simple", copy: "Pago y seguimiento sin friccion." },
    ],
    stats: [
      { value: "30 min", label: "Tiempo medio de llegada" },
      { value: "+35%", label: "Conversion en urgencias" },
      { value: "4.8/5", label: "Satisfaccion percibida" },
    ],
    workflow: {
      title: "Flujo de reparacion eficiente",
      subtitle: "Cada paso reduce ansiedad y acelera decisiones.",
      steps: [
        { title: "Llamada", copy: "Recibimos el problema y ubicacion." },
        { title: "Diagnostico", copy: "Evaluacion rapida y transparente." },
        { title: "Reparacion", copy: "Solucion inmediata con foco en seguridad." },
        { title: "Seguimiento", copy: "Confirmacion y mantenimiento." },
      ],
    },
    signals: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/plomero/profile",
        alt: "Retrato de plomero",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/plomero/context",
        alt: "Plomero en reparacion",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  psicologo: {
    label: "Psicologo",
    layout: "psicologo",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.contrast,
    hero: {
      eyebrow: "Cuidado humano",
      title: "Convierte la empatia en nuevas sesiones.",
      subtitle:
        "Una pagina sobria y calida que invita a dar el primer paso.",
      proof: ["Tono calido", "Confidencialidad", "Accion suave"],
    },
    ctas: {
      whatsapp: "Hablar en confianza",
      mailto: "Pedir orientacion",
    },
    sections: {
      pillars: {
        title: "Pilares del acompanamiento",
        subtitle: "Tres ejes que transmiten seguridad y cercania.",
      },
      proof: {
        title: "Calma desde el primer clic",
        subtitle: "Se transmite contencion con lenguaje simple.",
      },
    },
    highlights: [
      { title: "Escucha activa", copy: "Primer contacto con foco en contencion." },
      { title: "Plan claro", copy: "Objetivos y pasos entendibles." },
      { title: "Seguimiento real", copy: "Progreso visible para el paciente." },
    ],
    stats: [
      { value: "100%", label: "Confidencialidad" },
      { value: "Online", label: "Sesiones flexibles" },
      { value: "+28%", label: "Solicitudes de primera vez" },
    ],
    workflow: {
      title: "Flujo de sesiones con claridad emocional",
      subtitle: "Un recorrido que reduce barreras para iniciar terapia.",
      steps: [
        { title: "Primer contacto", copy: "Se define el motivo de consulta." },
        { title: "Evaluacion", copy: "Se comprende el contexto completo." },
        { title: "Plan", copy: "Se disena un camino terapeutico claro." },
        { title: "Seguimiento", copy: "Se mide el progreso con cuidado." },
      ],
    },
    quote: {
      text: "Una presencia calma mejora la disposicion a iniciar terapia.",
      author: "Psicologia clinica",
    },
    differentials: [],
    signals: [],
    tiers: [],
    images: {
      profile: {
        base: "assets/images/psicologo/profile",
        alt: "Retrato de psicologo",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/psicologo/context",
        alt: "Sesion de terapia",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  economista: {
    label: "Economista",
    layout: "economista",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.editorial,
    hero: {
      eyebrow: "Vision financiera",
      title: "Datos claros para decisiones estrategicas.",
      subtitle:
        "Posiciona tu consultoria con un enfoque analitico y directo.",
      proof: ["Insight rapido", "Credibilidad", "Conversion B2B"],
    },
    ctas: {
      whatsapp: "Agendar consultoria",
      mailto: "Enviar consulta",
    },
    sections: {
      diff: {
        title: "Insight que cambia decisiones",
        subtitle: "Analisis visual que reduce tiempo de aprobacion.",
      },
    },
    differentials: [
      { title: "Modelos claros", copy: "Escenarios explicados en lenguaje simple." },
      { title: "Forecasts accionables", copy: "Decisiones basadas en datos reales." },
      { title: "Reportes ejecutivos", copy: "Resumen que acelera cierres." },
    ],
    stats: [
      { value: "+18%", label: "Decision mas rapida" },
      { value: "3 dias", label: "Tiempo medio de analisis" },
      { value: "100%", label: "Datos auditables" },
    ],
    workflow: {
      title: "Flujo consultivo con foco en ROI",
      subtitle: "Del brief al informe en pasos claros.",
      steps: [
        { title: "Brief", copy: "Objetivos y datos disponibles." },
        { title: "Analisis", copy: "Modelos y escenarios." },
        { title: "Modelo", copy: "Sintesis ejecutiva." },
        { title: "Recomendacion", copy: "Plan accionable." },
      ],
    },
    signals: [],
    highlights: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/economista/profile",
        alt: "Retrato de economista",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/economista/context",
        alt: "Reunion financiera",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  contador: {
    label: "Contador",
    layout: "contador",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.modern,
    hero: {
      eyebrow: "Orden contable",
      title: "Convierte la confianza en nuevos clientes.",
      subtitle:
        "Landing para servicios contables con claridad y precision.",
      proof: ["Claridad fiscal", "Respuesta inmediata", "Sin friccion"],
    },
    ctas: {
      whatsapp: "Consultar disponibilidad",
      mailto: "Recibir propuesta",
    },
    sections: {
      checklist: {
        title: "Checklist contable sin friccion",
        subtitle: "Todo lo que la empresa necesita en una sola pagina.",
      },
      tiers: {
        title: "Paquetes de gestion",
        subtitle: "Opciones claras con foco en valor mensual.",
      },
    },
    highlights: [
      { title: "Declaraciones al dia", copy: "Calendario fiscal claro." },
      { title: "Reportes mensuales", copy: "Resultados listos para decidir." },
      { title: "Soporte continuo", copy: "Acompanamiento constante." },
    ],
    tiers: [
      { title: "Start", price: "Basico", copy: "Orden y cumplimiento inicial." },
      { title: "Growth", price: "Pro", copy: "Reportes y seguimiento mensual." },
      { title: "CFO", price: "Elite", copy: "Analisis financiero continuo." },
    ],
    workflow: {
      title: "Onboarding contable sin demoras",
      subtitle: "Un flujo simple que evita perdida de tiempo.",
      steps: [
        { title: "Relevamiento", copy: "Recolectamos datos clave." },
        { title: "Ordenamiento", copy: "Estructura fiscal clara." },
        { title: "Declaraciones", copy: "Cumplimiento completo." },
        { title: "Reporte", copy: "Resumen ejecutivo." },
      ],
    },
    stats: [],
    differentials: [],
    signals: ["Agenda fiscal", "Cumplimiento total", "Reportes claros"],
    quote: null,
    images: {
      profile: {
        base: "assets/images/contador/profile",
        alt: "Retrato de contador",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/contador/context",
        alt: "Mesa contable con documentos",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  "corredor-inmobiliario": {
    label: "Corredor Inmobiliario",
    layout: "corredor-inmobiliario",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.editorial,
    hero: {
      eyebrow: "Experiencia premium",
      title: "Cierra mas propiedades con una presencia impecable.",
      subtitle:
        "Landing modular que se adapta al rubro en segundos. Disenada para conversiones B2B y velocidad total en mobile.",
      proof: ["Core Web Vitals 100", "Diseno mobile-native", "Sin backends pesados"],
    },
    ctas: {
      whatsapp: "Escribir por WhatsApp",
      mailto: "Enviar correo",
    },
    sections: {
      diff: {
        title: "Diferenciales que venden propiedades",
        subtitle: "Argumentos claros que aceleran cierres.",
      },
    },
    differentials: [
      { title: "Listado premium", copy: "Presentacion visual lista para cerrar." },
      { title: "Visitas guiadas", copy: "Proceso claro para no perder leads." },
      { title: "Cierre asistido", copy: "Seguimiento continuo y profesional." },
    ],
    highlights: [
      { title: "Vistas clave", copy: "Lo mas relevante del inmueble al inicio." },
      { title: "Lead calificado", copy: "Mensajes claros para filtrar." },
      { title: "Seguimiento", copy: "Comunica cada avance." },
    ],
    stats: [
      { value: "+35%", label: "Leads calificados" },
      { value: "14 dias", label: "Tiempo medio de cierre" },
      { value: "4.9/5", label: "Experiencia percibida" },
    ],
    workflow: {
      title: "Pipeline inmobiliario con foco en conversion",
      subtitle: "Cada etapa acelera decisiones y reduce indecision.",
      steps: [
        { title: "Captacion", copy: "Inmuebles alineados al perfil." },
        { title: "Publicacion", copy: "Listados con narrativa premium." },
        { title: "Visitas", copy: "Agenda optimizada y guiada." },
        { title: "Cierre", copy: "Negociacion y firma sin friccion." },
      ],
    },
    signals: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/corredor-inmobiliario/profile",
        alt: "Retrato de corredor inmobiliario",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/corredor-inmobiliario/context",
        alt: "Reunion inmobiliaria",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  "asistente-virtual": {
    label: "Asistente Virtual",
    layout: "asistente-virtual",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.modern,
    hero: {
      eyebrow: "Productividad remota",
      title: "Delegar tareas nunca fue tan facil.",
      subtitle:
        "Landing enfocada en eficiencia, claridad y respuesta inmediata.",
      proof: ["Organizacion inmediata", "Soporte remoto", "Conversion rapida"],
    },
    ctas: {
      whatsapp: "Quiero soporte",
      mailto: "Enviar requerimiento",
    },
    sections: {
      diff: {
        title: "Delegacion que libera agenda",
        subtitle: "Servicios definidos para cada necesidad diaria.",
      },
    },
    differentials: [
      { title: "Inbox zero", copy: "Gestion diaria de correos y agenda." },
      { title: "Soporte operativo", copy: "Tareas y seguimiento continuo." },
      { title: "Reportes claros", copy: "Resumen diario y prioridades." },
    ],
    stats: [
      { value: "48h", label: "Onboarding completo" },
      { value: "24/5", label: "Disponibilidad" },
      { value: "+32%", label: "Tiempo liberado" },
    ],
    workflow: {
      title: "Flujo remoto con foco en velocidad",
      subtitle: "Del brief a la ejecucion en pasos cortos.",
      steps: [
        { title: "Brief", copy: "Definimos tareas y prioridades." },
        { title: "Asignacion", copy: "Equipo listo para ejecutar." },
        { title: "Ejecucion", copy: "Resultados en tiempo real." },
        { title: "Reporte", copy: "Resumen semanal y ajustes." },
      ],
    },
    signals: ["Agenda ordenada", "Soporte remoto", "Procesos claros"],
    highlights: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/asistente-virtual/profile",
        alt: "Retrato de asistente virtual",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/asistente-virtual/context",
        alt: "Espacio de trabajo remoto",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  "entrenador-personal": {
    label: "Entrenador Personal",
    layout: "entrenador-personal",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.contrast,
    hero: {
      eyebrow: "Rendimiento real",
      title: "Convierte metas en planes medibles.",
      subtitle:
        "Landing con energia, disciplina y accion inmediata.",
      proof: ["Planes claros", "Seguimiento real", "Contacto directo"],
    },
    ctas: {
      whatsapp: "Iniciar entrenamiento",
      mailto: "Solicitar plan",
    },
    sections: {
      timeline: {
        title: "Transformacion guiada",
        subtitle: "Etapas claras para alcanzar objetivos.",
      },
      diff: {
        title: "Programas con foco en resultado",
        subtitle: "Cada bloque orientado a conversion y disciplina.",
      },
    },
    differentials: [
      { title: "Planes personalizados", copy: "Rutinas segun nivel y objetivos." },
      { title: "Seguimiento semanal", copy: "Correcciones en tiempo real." },
      { title: "Metricas visibles", copy: "Progreso claro para el cliente." },
    ],
    highlights: [
      { title: "Evaluacion inicial", copy: "Baseline y objetivos reales." },
      { title: "Rutina activa", copy: "Ejecucion guiada." },
      { title: "Feedback constante", copy: "Ajustes segun progreso." },
    ],
    stats: [
      { value: "+41%", label: "Retencion de alumnos" },
      { value: "12 sem", label: "Plan de transformacion" },
      { value: "4.9/5", label: "Motivacion percibida" },
    ],
    workflow: {
      title: "Flujo de entrenamiento eficiente",
      subtitle: "De la evaluacion a la evolucion sin friccion.",
      steps: [
        { title: "Evaluacion", copy: "Objetivos y contexto inicial." },
        { title: "Plan", copy: "Rutina y nutricion integrada." },
        { title: "Entrenamiento", copy: "Ejecucion guiada." },
        { title: "Seguimiento", copy: "Metricas y ajustes." },
      ],
    },
    signals: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/entrenador-personal/profile",
        alt: "Retrato de entrenador personal",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/entrenador-personal/context",
        alt: "Entrenamiento en gimnasio",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  nutricionista: {
    label: "Nutricionista",
    layout: "nutricionista",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.editorial,
    hero: {
      eyebrow: "Bienestar guiado",
      title: "Convierte objetivos de salud en planes reales.",
      subtitle:
        "Un recorrido claro para iniciar tratamientos nutricionales.",
      proof: ["Habitos claros", "Contacto amable", "Mobile-first"],
    },
    ctas: {
      whatsapp: "Quiero un plan",
      mailto: "Enviar consulta",
    },
    sections: {
      pillars: {
        title: "Metodo nutricional claro",
        subtitle: "Pilares que transmiten confianza desde el inicio.",
      },
    },
    highlights: [
      { title: "Diagnostico", copy: "Contexto, habitos y objetivos." },
      { title: "Plan practico", copy: "Comidas simples y sostenibles." },
      { title: "Ajustes", copy: "Seguimiento y resultados." },
    ],
    stats: [
      { value: "+29%", label: "Planes renovados" },
      { value: "7 dias", label: "Primer avance" },
      { value: "4.8/5", label: "Satisfaccion del paciente" },
    ],
    workflow: {
      title: "Flujo nutricional sin friccion",
      subtitle: "Del diagnostico al plan en pasos simples.",
      steps: [
        { title: "Evaluacion", copy: "Analisis de habitos." },
        { title: "Plan", copy: "Comidas y objetivos." },
        { title: "Ajustes", copy: "Correcciones semanales." },
        { title: "Seguimiento", copy: "Resultados visibles." },
      ],
    },
    differentials: [],
    signals: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/nutricionista/profile",
        alt: "Retrato de nutricionista",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/nutricionista/context",
        alt: "Preparacion de comida saludable",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  arquitecto: {
    label: "Arquitecto",
    layout: "arquitecto",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.contrast,
    hero: {
      eyebrow: "Arquitectura Premium",
      title: "Diseño que trasciende el tiempo.",
      subtitle:
        "Proyectos con alma, pensados para la vida moderna y la eficiencia absoluta.",
      proof: [],
    },
    ctas: {
      whatsapp: "Consultar proyecto",
      mailto: "Recibir propuesta",
    },
    sections: {
      timeline: {
        title: "Fases del proyecto",
        subtitle: "Metodologia clara para avanzar sin sorpresas.",
      },
      diff: {
        title: "Valor diferencial del estudio",
        subtitle: "Detalles que transmiten confianza premium.",
      },
    },
    differentials: [
      { title: "Concepto unico", copy: "Identidad y narrativa del proyecto." },
      { title: "Documentacion clara", copy: "Planos y entregables listos." },
      { title: "Obra controlada", copy: "Seguimiento y entregas." },
    ],
    stats: [
      { value: "+22%", label: "Proyectos cerrados" },
      { value: "6 fases", label: "Proceso transparente" },
      { value: "4.9/5", label: "Satisfaccion del cliente" },
    ],
    workflow: {
      title: "Flujo arquitectonico con narrativa visual",
      subtitle: "Cada etapa muestra progreso tangible.",
      steps: [
        { title: "Concepto", copy: "Brief y direccion creativa." },
        { title: "Anteproyecto", copy: "Volumetria y layout." },
        { title: "Documentacion", copy: "Planos listos para obra." },
        { title: "Obra", copy: "Seguimiento y control." },
      ],
    },
    signals: [],
    highlights: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/arquitecto/profile",
        alt: "Retrato de arquitecto",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/arquitecto/context",
        alt: "Planos arquitectonicos",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  "consultor-marketing": {
    label: "Consultor de Marketing",
    layout: "consultor-marketing",
    palette: {
      accent: "#e63946",
      accentSoft: "rgba(230, 57, 70, 0.12)",
      bg: "#0a0a0a",
      tint: "rgba(230, 57, 70, 0.2)",
    },
    typography: TYPOGRAPHY.modern,
    hero: {
      eyebrow: "Crecimiento medible",
      title: "Convierte estrategia en resultados visibles.",
      subtitle:
        "Landing orientada a performance, analitica y accion.",
      proof: ["Conversion B2B", "Estrategia clara", "Resultados rapidos"],
    },
    ctas: {
      whatsapp: "Quiero resultados",
      mailto: "Solicitar auditoria",
    },
    sections: {
      proof: {
        title: "KPI que importan",
        subtitle: "Datos listos para tomar decisiones hoy.",
      },
      diff: {
        title: "Diferenciales de crecimiento",
        subtitle: "Focus total en performance y conversion.",
      },
    },
    differentials: [
      { title: "Embudo claro", copy: "Leads con contexto y prioridad." },
      { title: "Experimentos rapidos", copy: "Iteracion semanal." },
      { title: "ROI visible", copy: "Reportes con metricas reales." },
    ],
    stats: [
      { value: "+52%", label: "Leads calificados" },
      { value: "2 semanas", label: "Primeros resultados" },
      { value: "4.8/5", label: "Satisfaccion ejecutiva" },
    ],
    workflow: {
      title: "Sprint de marketing con foco en conversion",
      subtitle: "Diagnostico, estrategia y ejecucion sin friccion.",
      steps: [
        { title: "Diagnostico", copy: "Mapa de objetivos y audiencia." },
        { title: "Estrategia", copy: "Hipotesis y prioridades." },
        { title: "Ejecucion", copy: "Campanas y creatividades." },
        { title: "Optimizar", copy: "Mejora continua." },
      ],
    },
    signals: ["Growth sprint", "Performance", "Optimizar"],
    highlights: [],
    tiers: [],
    quote: null,
    images: {
      profile: {
        base: "assets/images/consultor-marketing/profile",
        alt: "Retrato de consultor de marketing",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/consultor-marketing/context",
        alt: "Reunion de estrategia de marketing",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
  mecanico: {
    label: "Mecánico",
    layout: "electricista", 
    palette: {
      accent: "#FF3B30",
      accentSoft: "rgba(255, 59, 48, 0.12)",
      bg: "#000000",
      tint: "rgba(255, 59, 48, 0.2)",
    },
    typography: TYPOGRAPHY.modern,
    hero: {
      eyebrow: "Ingeniería de Precisión",
      title: "Cuidado artesanal para vehículos de alta gama.",
      subtitle:
        "Especialistas en mecánica preventiva y correctiva con tecnología de última generación. Transparencia total en cada reparación.",
      proof: ["Diagnóstico Computarizado", "Garantía Escrita", "Repuestos Originales"],
    },
    ctas: {
      whatsapp: "Reservar Turno",
      mailto: "Consultar Presupuesto",
    },
    sections: {
      diff: {
        title: "Por qué confiar su vehículo con nosotros",
        subtitle: "Estándares de concesionario oficial con atención personalizada.",
      },
      proof: {
        title: "Compromiso con la Excelencia",
        subtitle: "Métricas que avalan nuestra trayectoria en el taller.",
      },
    },
    differentials: [
      { title: "Tecnología Bosch", copy: "Escaneo completo de sistemas electrónicos." },
      { title: "Mecánica Preventiva", copy: "Evite sorpresas con mantenimientos programados." },
      { title: "Tiempos Record", copy: "Entregas en el día para mantenimientos básicos." },
    ],
    stats: [
      { value: "100%", label: "Garantía de Satisfacción" },
      { value: "+500", label: "Vehículos Atendidos" },
      { value: "4.9/5", label: "Puntaje en Google Maps" },
    ],
    workflow: {
      title: "Proceso de Servicio Transparente",
      subtitle: "Usted sabrá exactamente qué se le hace a su auto en cada paso.",
      steps: [
        { title: "Recepción", copy: "Inspección visual y toma de datos del síntoma." },
        { title: "Diagnóstico", copy: "Presupuesto detallado antes de iniciar el trabajo." },
        { title: "Ejecución", copy: "Técnicos certificados trabajando en su unidad." },
        { title: "Control", copy: "Prueba de ruta y limpieza para la entrega." },
      ],
    },
    signals: ["Taller Certificado", "Atención Multimarca", "Seguridad Total"],
    highlights: [],
    tiers: [],
    quote: {
      text: "La seguridad de su familia empieza en el estado de su vehículo.",
      author: "Ing. Juan Pérez • Director Técnico",
    },
    images: {
      profile: {
        base: "assets/images/mecanico/profile",
        alt: "Mecánico especializado",
        width: 1200,
        height: 1500,
      },
      context: {
        base: "assets/images/mecanico/context",
        alt: "Taller de mecánica premium",
        width: 1200,
        height: 800,
      },
    },
    disruptive: SHARED_COPY.disruptive,
    form: SHARED_COPY.form,
  },
};
