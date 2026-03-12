export const PROFESSIONS = {
  mecanico: {
    id: "mecanico",
    label: "Mecánico",
    accent: "#FF3B30",
    bg: "#000000",
    hero: {
      eyebrow: "Ingeniería de Precisión",
      title: "Cuidado artesanal para vehículos de alta gama.",
      subtitle: "Especialistas en mecánica preventiva y correctiva con tecnología de última generación. Transparencia total en cada reparación.",
      cta: "Reservar Turno Ahora",
    },
    differentials: [
      { title: "Tecnología Bosch", description: "Escaneo completo de sistemas electrónicos." },
      { title: "Mecánica Preventiva", description: "Evite sorpresas con mantenimientos programados." },
      { title: "Entrega en el día", description: "Entregas en el día para mantenimientos básicos." },
    ],
    stats: [
      { value: "100%", label: "Garantía" },
      { value: "+500", label: "Clientes" },
      { value: "4.9/5", label: "Puntaje Maps" },
    ],
    workflow: [
      { title: "Recepción", description: "Inspección visual y toma de datos." },
      { title: "Diagnóstico", description: "Presupuesto detallado antes de iniciar." },
      { title: "Ejecución", description: "Técnicos certificados trabajando." },
      { title: "Control", description: "Prueba de ruta y limpieza final." },
    ],
    quote: {
      text: "La seguridad de su familia empieza en el estado de su vehículo.",
      author: "Juan Pérez • Dir. Técnico",
    }
  },
  abogado: {
    id: "abogado",
    label: "Abogado",
    accent: "#007AFF",
    bg: "#0A0A0A",
    hero: {
      eyebrow: "Defensa Estratégica",
      title: "Convierte consultas legales en confianza inmediata.",
      subtitle: "Una landing sobria y premium para estudios y especialistas legales. Claridad, autoridad y acción directa.",
      cta: "Agendar Llamada Legal",
    },
    differentials: [
      { title: "Análisis Rápido", description: "Diagnóstico claro en el primer contacto." },
      { title: "Estrategia Documentada", description: "Plan legal entendible para el cliente." },
      { title: "Seguimiento Continuo", description: "Actualizaciones con lenguaje simple." },
    ],
    stats: [
      { value: "24h", label: "Respuesta" },
      { value: "+38%", label: "Eficiencia" },
      { value: "4.9/5", label: "Confianza" },
    ],
    workflow: [
      { title: "Contacto", description: "Primer mensaje con contexto legal." },
      { title: "Diagnóstico", description: "Escucha activa y resumen del caso." },
      { title: "Estrategia", description: "Ruta legal explicada con claridad." },
      { title: "Resolución", description: "Seguimiento y cierre profesional." },
    ]
  },
  psicologo: {
    id: "psicologo",
    label: "Psicólogo",
    accent: "#32D74B",
    bg: "#0A0A0A",
    hero: {
      eyebrow: "Cuidado Humano",
      title: "Convierte la empatía en nuevas sesiones.",
      subtitle: "Una página sobria y cálida que invita a dar el primer paso hacia el bienestar emocional.",
      cta: "Hablar en Confianza",
    },
    differentials: [
      { title: "Escucha Activa", description: "Primer contacto con foco en contención." },
      { title: "Plan Claro", description: "Objetivos y pasos terapéuticos entendibles." },
      { title: "Seguimiento Real", description: "Progreso visible para el paciente." },
    ],
    stats: [
      { value: "100%", label: "Confidencial" },
      { value: "Online", label: "Sesiones" },
      { value: "4.8/5", label: "Empatía" },
    ],
    workflow: [
      { title: "Contacto", description: "Se define el motivo de consulta." },
      { title: "Evaluación", description: "Se comprende el contexto emocional." },
      { title: "Plan", description: "Se diseña un camino claro." },
      { title: "Seguimiento", description: "Se mide el progreso con cuidado." },
    ]
  },
  odontologo: {
    id: "odontologo",
    label: "Odontólogo",
    accent: "#00C6FF", // Azul claro brillante
    bg: "#020813", // Azul ultra oscuro
    hero: {
      eyebrow: "Sonrisas Perfectas",
      title: "Tecnología dental al servicio de tu confianza.",
      subtitle: "Clínica de especialidades odontológicas avanzadas. Tratamientos indoloros y estética dental de precisión.",
      cta: "Reservar Evaluación",
    },
    differentials: [
      { title: "Escáner 3D", description: "Diagnóstico digital sin moldes incómodos." },
      { title: "Diseño de Sonrisa", description: "Visualización previa del resultado final." },
      { title: "Clínica Indolora", description: "Protocolos de sedación y confort." },
    ],
    stats: [
      { value: "+10k", label: "Pacientes" },
      { value: "100%", label: "Digital" },
      { value: "4.9/5", label: "Opiniones" },
    ],
    workflow: [
      { title: "Evaluación", description: "Diagnóstico con radiografía intraoral." },
      { title: "Plan", description: "Presupuesto y tiempos detallados." },
      { title: "Tratamiento", description: "Ejecución con mínima invasión." },
      { title: "Alta", description: "Mantenimiento preventivo anual." },
    ]
  },
  arquitecto: {
    id: "arquitecto",
    label: "Arquitecto",
    accent: "#EAB308", // Amarillo/Dorado
    bg: "#0A0A09", 
    hero: {
      eyebrow: "Diseño Atemporal",
      title: "Espacios que inspiran y elevan la calidad de vida.",
      subtitle: "Estudio de arquitectura interior y exterior. De la conceptualización a la dirección de obra llave en mano.",
      cta: "Iniciar Proyecto",
    },
    differentials: [
      { title: "Renders Fotorrealistas", description: "Camina por tu casa antes de construirla." },
      { title: "Control de Costos", description: "Presupuestos blindados sin desvíos." },
      { title: "Llave en Mano", description: "Gestión integral de todos los gremios." },
    ],
    stats: [
      { value: "+50", label: "Obras" },
      { value: "15", label: "Años Exp." },
      { value: "0", label: "Retrasos" },
    ],
    workflow: [
      { title: "Anteproyecto", description: "Bocetos y distribución espacial." },
      { title: "Proyecto Ejecutivo", description: "Planos técnicos e ingenierías." },
      { title: "Licitación", description: "Selección de contratistas." },
      { title: "Dirección", description: "Supervisión diaria hasta la entrega." },
    ]
  },
  estetica: {
    id: "estetica",
    label: "Centro de Estética",
    accent: "#FF2D55", // Magenta/Rosa vibrante
    bg: "#11050A", // Fondo con tinte rosado oscuro
    hero: {
      eyebrow: "Belleza Vanguardista",
      title: "Realza tu belleza natural con aparotología premium.",
      subtitle: "Tratamientos faciales y corporales no invasivos. Resultados visibles desde la primera sesión.",
      cta: "Agendar Turno",
    },
    differentials: [
      { title: "Equipos FDA", description: "Tecnología médica avalada intencionalmente." },
      { title: "Diagnóstico Facial", description: "Análisis profundo de la piel." },
      { title: "Protocolos Únicos", description: "Tratamientos personalizados según tu biotipo." },
    ],
    stats: [
      { value: "TOP 1", label: "Aparatología" },
      { value: "+5k", label: "Cambios" },
      { value: "4.9/5", label: "Satisfacción" },
    ],
    workflow: [
      { title: "Asesoría", description: "Evaluación corporal o facial inicial." },
      { title: "Protocolo", description: "Diseño del tratamiento a medida." },
      { title: "Sesiones", description: "Aplicación de tecnología y activos." },
      { title: "Mantenimiento", description: "Rutinas para prolongar resultados." },
    ]
  }
};

export type ProfessionId = keyof typeof PROFESSIONS;
export const DEFAULT_PROFESSION: ProfessionId = "mecanico";
