export interface ProfessionDetail {
  id: string;
  label: string;
  brandName: string;
  shortName: string;
  accent: string;
  bg: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    image?: string;
    gems?: Array<{
      label: string;
      value: string;
      icon: string;
      color: string;
      position: { top?: string; bottom?: string; left?: string; right?: string };
    }>;
  };
  about?: {
    title: string;
    description: string;
    image: string;
    detailImages?: string[];
    signature?: string;
  };
  differentials: Array<{ title: string; description: string }>;
  fullServices?: Array<{ title: string; description: string; icon: string }>;
  stats: Array<{ value: string; label: string }>;
  testimonials?: Array<{ name: string; role: string; text: string; image?: string; verified?: boolean; rating?: number }>;
  partners?: Array<{ name: string; logo: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  workflow: Array<{ title: string; description: string }>;
  gallery?: Array<{ image: string; title: string; category: string }>;
  quote: {
    text: string;
    author: string;
  };
  socials?: { instagram?: string; linkedin?: string; whatsapp?: string };
  location?: { city?: string; address?: string; mapUrl?: string };
}

export const PROFESSIONS: Record<string, ProfessionDetail> = {
  mecanico: {
    id: "mecanico",
    label: "Mecánico",
    brandName: "Mecánica Premium",
    shortName: "MP",
    accent: "#FF3B30",
    bg: "#000000",
    hero: {
      eyebrow: "Ingeniería de Precisión",
      title: "Cuidado artesanal para vehículos de alta gama.",
      subtitle: "Especialistas en mecánica preventiva y correctiva con tecnología de última generación. Transparencia total en cada reparación.",
      cta: "Reservar Turno Ahora",
      image: "/images/profiles/mecanico/hero.png",
      gems: [
        { label: "Performance", value: "98%", icon: "Zap", color: "#FF3B30", position: { top: "10%", left: "-15%" } },
        { label: "Diagnóstico", value: "Bosch", icon: "Settings", color: "#FF3B30", position: { bottom: "20%", right: "-10%" } },
        { label: "Service", value: "45m", icon: "Clock", color: "#FF3B30", position: { top: "40%", right: "-15%" } },
      ]
    },
    about: {
      title: "Más de 20 años de pasión por los fierros",
      description: "En Mecánica Premium no solo arreglamos autos, los cuidamos como si fueran nuestros. Nacimos en un pequeño garage familiar y hoy somos referentes en tecnología de diagnóstico Bosch en la región. Nuestro compromiso no es solo reparar, sino educar al cliente: ves cada pieza que cambiamos y entendés exactamente el porqué de cada procedimiento.",
      image: "/images/profiles/mecanico/about.png",
      detailImages: [
        "/images/profiles/mecanico/detail_1.png",
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      signature: "Ing. Roberto Sosa • Jefe de Taller"
    },
    differentials: [
      { title: "Tecnología Bosch", description: "Escaneo completo de todos los módulos electrónicos con reportes digitales enviados a tu celular." },
      { title: "Mecánica Preventiva", description: "Evitá roturas costosas y viajes en grúa con nuestros planes de mantenimiento predictivo programado." },
      { title: "Garantía Escritura", description: "Cada reparación cuenta con un respaldo documental de 12 meses sobre mano de obra y repuestos." },
    ],
    fullServices: [
      { title: "Mantenimiento Programado", description: "Servicio oficial multimarca. Realizamos cambio de aceite sintético de alta viscosidad, sustitución de filtros de aire, habitáculo y combustible, y revisión de más de 40 puntos críticos de seguridad mediante check-list digital.", icon: "Settings" },
      { title: "Seguridad y Frenado", description: "Diagnóstico computarizado del sistema ABS/ESP. Rectificación de discos con precisión micrométrica, cambio de pastillas cerámicas y purgado electrónico del sistema hidráulico con fluido DOT 5.1.", icon: "ShieldCheck" },
      { title: "Inyección Electrónica", description: "Optimización de la unidad de control (ECU). Limpieza de inyectores por tina de ultrasonido, calibración de mariposa electrónica y diagnóstico de sensores MAF/O2 para maximizar el rendimiento y reducir emisiones.", icon: "Zap" },
      { title: "Sistemas de Confort", description: "Especialistas en climatización bi-zona. Carga de gas R134a/R1234yf con detección de fugas por nitrógeno y trazado UV. Reparación de techos solares, vidrios eléctricos y sistemas de audio premium.", icon: "Wind" },
    ],
    stats: [
      { value: "100%", label: "Garantía Real" },
      { value: "+1200", label: "Vehículos Atendidos" },
      { value: "4.9/5", label: "Puntaje en Google" },
    ],
    testimonials: [
      { name: "Juan Manuel Galván", role: "Empresario • BMW Serie 3", text: "Honestamente, el mejor taller que conocí. La transparencia es total, te pasan fotos de los repuestos viejos y los nuevos por WhatsApp. Muy recomendables.", image: "/images/testimonials/mecanico/juan_manuel.png", verified: true, rating: 5 },
      { name: "Silvina Rodríguez", role: "Arquitecta • Honda CR-V", text: "Llevé el auto por un ruido que nadie encontraba. En 20 minutos de escaneo me dieron el diagnóstico exacto. Cumplen con los tiempos de entrega.", image: "/images/testimonials/mecanico/silvina.png", verified: true, rating: 5 },
    ],
    partners: [
      { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1024px-Bosch-logo.svg.png" },
      { name: "Mobil 1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mobil_1_Logo.svg/1024px-Mobil_1_Logo.svg.png" },
      { name: "Brembo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brembo_Logo.svg/1024px-Brembo_Logo.svg.png" },
      { name: "Pirelli", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pirelli_Logo.svg/1024px-Pirelli_Logo.svg.png" },
    ],
    faqs: [
      { question: "¿Hacen presupuestos por WhatsApp?", answer: "Podemos darte un estimado basado en síntomas, pero el presupuesto final se entrega luego del diagnóstico presencial con scanner para asegurar precisión absoluta." },
      { question: "¿Trabajan con repuestos alternativos?", answer: "Priorizamos siempre repuestos originales. En casos específicos, ofrecemos alternativas de calidad OEM que cumplan con las normas del fabricante." },
    ],
    workflow: [
      { title: "Ingreso", description: "Check-list digital del estado del vehículo al recibirlo en recepción." },
      { title: "Diagnóstico", description: "Escaneo computarizado y reporte técnico detallado enviado al cliente." },
      { title: "Presupuesto", description: "Aprobación de costos y tiempos de entrega de forma digital." },
      { title: "Control Final", description: "Prueba de calle, control de niveles y lavado de motor bonificado." },
    ],
    socials: { instagram: "mecahub.uy", linkedin: "mecahub-systems", whatsapp: "+59890000000" },
    location: { city: "Montevideo", address: "Av. Italia 4500", mapUrl: "https://goo.gl/maps/example1" },
    gallery: [
      { image: "/images/profiles/mecanico/detail_1.png", title: "Rectificación de Motor V8", category: "Mecánica Compleja" },
      { image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Sistema de Escape Titanium", category: "Performance" },
      { image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Diagnóstico Computarizado", category: "Tecnología" },
      { image: "/images/gallery/mecanico/frenos_ceramicos.png", title: "Frenos Cerámicos", category: "Seguridad" },
      { image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Ajuste de Chasis", category: "Geometría" },
      { image: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Inyección Electrónica", category: "Motor" },
      { image: "https://images.pexels.com/photos/4116211/pexels-photo-4116211.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Caja de Cambios", category: "Transmisión" },
      { image: "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Preparación de Pista", category: "Sports" },
    ],
    quote: {
      text: "La tranquilidad del conductor es el resultado de la precisión del mecánico. No hay margen para el error.",
      author: "Ing. Roberto Sosa • Jefe de Taller",
    }
  },
  abogado: {
    id: "abogado",
    label: "Abogado",
    brandName: "García & Asociados",
    shortName: "GA",
    accent: "#007AFF",
    bg: "#0A0A0A",
    hero: {
      eyebrow: "Sólida Trayectoria Legal",
      title: "Soluciones jurídicas estratégicas para proteger tu futuro.",
      subtitle: "Especialistas en Derecho Civil, Comercial y de Familia. Combinamos rigor académico con una visión moderna para resolver casos complejos con agilidad.",
      cta: "Consultar Caso Ahora",
      image: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800",
      gems: [
        { label: "Trust Score", value: "A+", icon: "ShieldCheck", color: "#EAB308", position: { top: "10%", left: "-15%" } },
        { label: "Victoria", value: "95%", icon: "Gavel", color: "#EAB308", position: { bottom: "25%", right: "-10%" } },
        { label: "Respuesta", value: "< 2h", icon: "Zap", color: "#EAB308", position: { top: "40%", right: "-15%" } },
      ]
    },
    about: {
      title: "Compromiso Inquebrantable con la Justicia",
      description: "Fundado bajo el pilar de la ética profesional, nuestro estudio se dedica a brindar una defensa integral. Entendemos que detrás de cada caso hay una persona o una empresa buscando seguridad. Por eso, no solo litigamos; asesoramos preventivamente para evitar conflictos futuros, utilizando las últimas herramientas en jurisprudencia digital y procesal.",
      image: "/images/profiles/abogado/about.png",
      detailImages: [
        "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600",
        "/images/profiles/abogado/hero.png"
      ],
      signature: "Dr. Roberto García • Socio Fundador"
    },
    differentials: [
      { title: "Atención 24/7", description: "Asesoría de emergencia para casos penales o detenciones imprevistas en cualquier momento del día." },
      { title: "Estrategia Ganadora", description: "Análisis profundo de probabilidades y riesgos antes de iniciar cualquier acción judicial, sin promesas falsas." },
      { title: "Claridad Procesal", description: "Explicamos lo complejo en términos simples. Vas a saber siempre en qué etapa está tu causa y qué esperar." },
    ],
    fullServices: [
      { title: "Litigio de Alta Complejidad", description: "Representación en juicios civiles y comerciales con estrategias de defensa agresivas. Especialistas en resolución de conflictos societarios y daños contractuales.", icon: "Gavel" },
      { title: "Derecho Laboral Corporativo", description: "Auditoría de riesgos laborales, gestión de despidos de alto rango y negociación colectiva. Blindaje legal para directivos y empresas frente a reclamos sistémicos.", icon: "Briefcase" },
      { title: "Patrimonio y Sucesiones", description: "Planificación sucesoria compleja, fideicomisos y protección de activos internacionales. Mediación técnica en particiones hereditarias conflictivas.", icon: "Shield" },
      { title: "Derecho Digital & IA", description: "Asesoría en protección de datos, propiedad intelectual en la era de la IA y litigios por ciberseguridad. Pioneros en jurisprudencia tecnológica en la región.", icon: "Globe" },
    ],
    stats: [
      { value: "95%", label: "Éxito Judicial" },
      { value: "+20", label: "Años de Rigor" },
      { value: "50+", label: "Grandes Cuentas" },
    ],
    testimonials: [
      { name: "Dra. Isabel Larrañaga", role: "Directora Ejecutiva de Finanzas Global", text: "García & Asociados no solo brinda asesoría legal; ofrecen tranquilidad estratégica. Su capacidad para anticipar movimientos de la contraparte es simplemente excepcional.", image: "/images/testimonials/abogado/isabel.png", verified: true, rating: 5 },
      { name: "Ing. Jorge Batlle h.", role: "Socio Fundador Desarrollos Uy", text: "En cada negociación compleja, su presencia en la mesa es nuestra mayor ventaja competitiva. Claridad, ética y resultados contundentes.", image: "/images/testimonials/abogado/jorge.png", verified: true, rating: 5 },
    ],
    partners: [
      { name: "Thomson Reuters", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Thomson_Reuters_Logo.svg/1024px-Thomson_Reuters_Logo.svg.png" },
      { name: "LexisNexis", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/LexisNexis_Logo.svg/1024px-LexisNexis_Logo.svg.png" },
      { name: "LawGeex", logo: "https://global-uploads.webflow.com/6001a1db393b8908f515764d/6141c7b520d2d64f0f7f34c2_LawGeex-Logo.svg" },
      { name: "Clio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Clio_logo.svg/1024px-Clio_logo.svg.png" },
    ],
    faqs: [
      { question: "¿Cómo es el proceso de contratación?", answer: "Iniciamos con un diagnóstico situacional profundo bajo estricto acuerdo de confidencialidad, seguido de una propuesta de honorarios estructurada por objetivos." },
      { question: "¿Manejan casos con jurisdicción internacional?", answer: "Contamos con una red de corresponsalías en las principales plazas financieras de Europa y EE.UU., permitiéndonos litigar y ejecutar sentencias fuera de Uruguay." },
    ],
    workflow: [
      { title: "Diagnóstico", description: "Auditoría de hechos y análisis prospectivo de riesgos procesales." },
      { title: "Estrategia", description: "Diseño de la teoría del caso y selección de mecanismos de resolución (judicial o arbitral)." },
      { title: "Ejecución", description: "Despliegue de acciones legales con monitoreo en tiempo real del estado procesal." },
      { title: "Resolución", description: "Cierre de expediente con enfoque en la maximización del beneficio para el cliente." },
    ],
    socials: { instagram: "garcia.asociados", linkedin: "garcia-asociados-legal", whatsapp: "+59891000000" },
    location: { city: "Montevideo", address: "Rincón 487, Ciudad Vieja", mapUrl: "https://goo.gl/maps/example2" },
    gallery: [
      { image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Equipo Senior", category: "Capital Humano" },
      { image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Auditoría Legal", category: "Corporativo" },
      { image: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Defensa Criminal", category: "Litigio" },
      { image: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Propiedad Intelectual", category: "Tech" },
      { image: "https://images.pexels.com/photos/5668835/pexels-photo-5668835.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Conciliación Privada", category: "Mediación" },
    ],
    quote: {
      text: "La ley es el escudo de los ciudadanos. Nuestra labor es asegurar que ese escudo nunca falle.",
      author: "Dr. Roberto García • Socio Fundador",
    }
  },
  psicologo: {
    id: "psicologo",
    label: "Psicólogo",
    brandName: "Lic. Andrea Paz",
    shortName: "AP",
    accent: "#32D74B",
    bg: "#0A0A0A",
    hero: {
      eyebrow: "Salud Mental y Bienestar Emocional",
      title: "Un espacio de seguridad para transformar tu realidad.",
      subtitle: "Psicoterapia clínica avanzada para adultos. Especialistas en ansiedad, trauma y procesos de autoafirmación. Un enfoque humano que combina rigor científico con profunda empatía.",
      cta: "Iniciar Sesión de Diagnóstico",
      image: "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=800",
      gems: [
        { label: "Safe Space", value: "100%", icon: "Heart", color: "#32D74B", position: { top: "15%", left: "-12%" } },
        { label: "Rating", value: "5/5", icon: "Star", color: "#32D74B", position: { bottom: "20%", right: "-10%" } },
        { label: "Pacientes", value: "+1.2k", icon: "Users", color: "#32D74B", position: { top: "45%", right: "-15%" } },
      ]
    },
    about: {
      title: "Acompañando tu Evolución Interna",
      description: "Entiendo la terapia como un puente hacia la libertad emocional. En mi consulta, el silencio es tan importante como la palabra. Trabajamos bajó un marco de confidencialidad absoluta y ética profesional inquebrantable, utilizando técnicas de última generación en neurobiología del apego y terapia focalizada en la solución.",
      image: "/images/profiles/psicologo/about_hq.png",
      detailImages: [
        "https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3958418/pexels-photo-3958418.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      signature: "Lic. Andrea Paz • Psicóloga MP: 4521"
    },
    differentials: [
      { title: "Atención Telepsicológica", description: "Plataformas de videollamada de grado médico con encriptación de extremo a extremo para tu total privacidad." },
      { title: "Evidencia Científica", description: "Protocolos terapéuticos basados en las últimas investigaciones de la APA y enfoques validados por resultados." },
      { title: "Cero Lista de Espera", description: "Gestión eficiente de turnos que garantiza que tu proceso no se detenga y que siempre tengas un espacio disponible." },
    ],
    fullServices: [
      { title: "Psicoterapia Individual", description: "Abordaje profundo de trastornos del estado de ánimo, crisis de identidad y cuadros complejos de estrés postraumático.", icon: "Heart" },
      { title: "Terapia de Pareja Vincular", description: "Reconfiguración de la comunicación y resolución de conflictos de apego para construir relaciones más sanas y conscientes.", icon: "Users" },
      { title: "Entrenamiento en Mindfulness", description: "Protocolos de reducción de estrés basados en la atención plena para ejecutivos y profesionales de alta exigencia.", icon: "Zap" },
      { title: "Coaching de Vida Senior", description: "Orientación estratégica para transiciones vitales importantes y desbloqueo del potencial creativo y emocional.", icon: "Star" },
    ],
    stats: [
      { value: "MP 4521", label: "Registro Profesional" },
      { value: "+12", label: "Años de Clínica" },
      { value: "4.9/5", label: "Satisfacción Paciente" },
    ],
    testimonials: [
      { name: "Martín R.", role: "CEO Tech Corp", text: "La Lic. Andrea Paz cambió mi forma de entender el liderazgo desde la gestión emocional. Una profesional de una agudeza clínica impresionante.", image: "/images/testimonials/psicologo/martin.png", verified: true, rating: 5 },
      { name: "Lucía M.", role: "Artista Visual", text: "Encontré un refugio donde pude desarmar mis miedos más profundos. Hoy vivo con una liviandad que no creía posible.", image: "/images/testimonials/psicologo/lucia.png", verified: true, rating: 5 },
    ],
    partners: [
      { name: "APA", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/American_Psychological_Association_logo.svg/1200px-American_Psychological_Association_logo.svg.png" },
      { name: "Mindful", logo: "https://www.mindful.org/wp-content/themes/mindful/assets/img/mindful-logo.svg" },
      { name: "Headspace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Headspace_logo.svg/1024px-Headspace_logo.svg.png" },
      { name: "Zencare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Zencare_logo.svg/1024px-Zencare_logo.svg.png" },
    ],
    faqs: [
      { question: "¿Cómo se coordinan los turnos?", answer: "Contamos con una plataforma de autogestión 24/7 donde puedes elegir el horario que mejor se adapte a tu rutina semanal." },
      { question: "¿Cuál es la frecuencia recomendada?", answer: "Iniciamos con sesiones semanales para establecer el vínculo terapéutico y luego ajustamos según la evolución clínica de cada paciente." },
    ],
    workflow: [
      { title: "Apertura", description: "Encuadre terapéutico y establecimiento de objetivos de mutuo acuerdo." },
      { title: "Exploración", description: "Identificación de patrones inconscientes y nodos de conflicto emocional." },
      { title: "Sanación", description: "Implementación de herramientas de regulación y reestructuración cognitiva." },
      { title: "Autonomía", description: "Consolidación de cambios y cierre del proceso con herramientas de prevención." },
    ],
    socials: { instagram: "lic.andreapaz", linkedin: "andrea-paz-psico", whatsapp: "+59892000000" },
    location: { city: "Punta Carretas", address: "Miñones 450", mapUrl: "https://goo.gl/maps/example3" },
    gallery: [
      { image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Espacio de Terapia", category: "Consultorio" },
      { image: "https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Técnicas Zen", category: "Mindfulness" },
      { image: "https://images.pexels.com/photos/3958418/pexels-photo-3958418.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Análisis Mental", category: "Ciencia" },
      { image: "https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Grupos de Apoyo", category: "Comunidad" },
      { image: "https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Neurobiología", category: "Investigación" },
      { image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Atención Empática", category: "Vínculo" },
      { image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Paz Interior", category: "Resultados" },
      { image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Espacio de Meditación", category: "Zen" },
    ],
    quote: {
      text: "El autoconocimiento es el camino más corto hacia la paz interior. Nadie sana en el mismo entorno que lo enfermó.",
      author: "Lic. Andrea Paz • Psicóloga MP: 4521",
    }
  },
  odontologo: {
    id: "odontologo",
    label: "Odontólogo",
    brandName: "Clínica Dental Advanced",
    shortName: "CDA",
    accent: "#00C6FF",
    bg: "#020813",
    hero: {
      eyebrow: "Alta Odontología Digital",
      title: "Tu mejor sonrisa, diseñada con precisión quirúrgica.",
      subtitle: "Especialistas en rehabilitación oral computerizada, implantes de carga inmediata y estética avanzada. Tecnología 3D para resultados predecibles y una experiencia libre de estrés.",
      cta: "Agendar Escaneo Diagnóstico",
      image: "/images/profiles/odontologo/hero_3d.png",
      gems: [
        { label: "3D Scan", value: "Ready", icon: "Zap", color: "#00C6FF", position: { top: "10%", left: "-15%" } },
        { label: "Hygiene", value: "MAX", icon: "Shield", color: "#00C6FF", position: { bottom: "25%", right: "-10%" } },
        { label: "Painless", value: "Active", icon: "Heart", color: "#00C6FF", position: { top: "40%", right: "-15%" } },
      ]
    },
    about: {
      title: "Excelencia Clínica y Calidez Humana",
      description: "En nuestra clínica no solo tratamos dientes, cuidamos personas. Integramos escáneres intraorales de última generación que eliminan las pastas molestas, permitiéndonoz diseñar tu tratamiento en una pantalla gigante antes de tocar una sola pieza. Nuestro compromiso es brindarte una atención boutique, donde la puntualidad y la bioseguridad son pilares innegociables.",
      image: "https://images.pexels.com/photos/3845800/pexels-photo-3845800.jpeg?auto=compress&cs=tinysrgb&w=800",
      detailImages: [
        "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      signature: "Dra. Elena Méndez • Directora Médica"
    },
    differentials: [
      { title: "Odontología Sin Dolor", description: "Protocolos de sedación consciente y anestesia computarizada para que tu única preocupación sea disfrutar del resultado." },
      { title: "Diseño Digital 3D", description: "Visualiza el resultado final de tu ortodoncia o carillas antes de iniciar. Precisión absoluta en cada micrón." },
      { title: "Garantía de Por Vida", description: "Utilizamos materiales de grado premium (Zirconio y Titanio) con certificados de calidad internacionales." },
    ],
    fullServices: [
      { title: "Implantes de Carga Inmediata", description: "Recupera tus piezas dentales en una sola sesión con guías quirúrgicas 3D y prótesis biocompatibles.", icon: "Gavel" },
      { title: "Ortodoncia Invisible Pro", description: "Alineadores de alta transparencia con monitoreo remoto para corregir tu mordida sin afectar tu estética.", icon: "Briefcase" },
      { title: "Carillas de Porcelana High-End", description: "Transformación radical de la sonrisa con láminas ultrafinas de cerámica que imitan la perfección natural del esmalte.", icon: "Shield" },
      { title: "Odontopediatría Lúdica", description: "Especialistas en los más pequeños, creando una base de salud bucal sólida sin traumas ni miedos desde la infancia.", icon: "Globe" },
    ],
    stats: [
      { value: "100%", label: "Bioseguridad" },
      { value: "+15k", label: "Pacientes Felices" },
      { value: "3D", label: "Diagnóstico" },
    ],
    testimonials: [
      { name: "Esteban Quiroga", role: "CEO AgroIndustria", text: "La tecnología que tienen es de otro planeta. Me hicieron una rehabilitación completa y el proceso fue sorprendentemente rápido y cómodo.", image: "/images/testimonials/odontologo/esteban.png", verified: true, rating: 5 },
      { name: "Verónica Salas", role: "Empresaria", text: "Mis carillas quedaron tan naturales que nadie nota que son prótesis. La atención de la Dra. Méndez es de un nivel superior.", image: "/images/testimonials/odontologo/veronica.png", verified: true, rating: 5 },
    ],
    partners: [
      { name: "Nobel Biocare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nobel_Biocare_Logo.svg/1024px-Nobel_Biocare_Logo.svg.png" },
      { name: "Straumann", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Straumann_Logo.svg/1024px-Straumann_Logo.svg.png" },
      { name: "Invisalign", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Invisalign_Logo.svg/1200px-Invisalign_Logo.svg.png" },
      { name: "3Shape", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/3Shape_Logo.svg/1024px-3Shape_Logo.svg.png" },
    ],
    faqs: [
      { question: "¿Aceptan planes de financiación?", answer: "Ofrecemos planes de cuotas sin interés y convenios corporativos para que el costo no sea una barrera para tu salud." },
      { question: "¿Cuánto dura el blanqueamiento?", answer: "Con nuestra tecnología láser de última generación, los resultados se mantienen por años con mínimos cuidados preventivos." },
    ],
    workflow: [
      { title: "Escaneo", description: "Digitalización 3D completa de tu boca sin moldes de pasta." },
      { title: "Planificación", description: "Diseño virtual del tratamiento y presentación del presupuesto." },
      { title: "Intervención", description: "Procedimientos optimizados con tecnología para minimizar tiempos." },
      { title: "Mantenimiento", description: "Seguimiento preventivo para asegurar la longevidad del tratamiento." },
    ],
    socials: { instagram: "advanced.dental", linkedin: "advanced-dental-clinic", whatsapp: "+59893000000" },
    location: { city: "Carrasco", address: "Arocena 1600", mapUrl: "https://goo.gl/maps/example4" },
    gallery: [
      { image: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Tecnología 3D", category: "Equipamiento" },
      { image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Sala de Espera", category: "Confort" },
      { image: "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Cirugía Guiada", category: "Precisión" },
      { image: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Resultados Reales", category: "Casos" },
      { image: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Esterilización", category: "Bioseguridad" },
      { image: "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Diseño de Sonrisa", category: "Estética" },
      { image: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Laboratorio Propio", category: "Prótesis" },
      { image: "https://images.pexels.com/photos/3845957/pexels-photo-3845957.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Análisis Digital", category: "Innovación" },
    ],
    quote: {
      text: "Una sonrisa sana es la mejor carta de presentación. La tecnología es nuestra aliada, pero la ética es nuestra guía.",
      author: "Dra. Elena Méndez • Directora Médica",
    }
  },
  arquitecto: {
    id: "arquitecto",
    label: "Arquitecto",
    brandName: "Silva Arquitectura",
    shortName: "SA",
    accent: "#EAB308",
    bg: "#0A0A09", 
    hero: {
      eyebrow: "Arquitectura de Autor & Diseño Premium",
      title: "Espacios que materializan visiones extraordinarias.",
      subtitle: "Estudio boutique especializado en residencias de lujo y desarrollos urbanos de alto impacto. Fusionamos la pureza de los materiales con la innovación tecnológica para crear hábitats atemporales.",
      cta: "Iniciar Sesión de Consultoría",
      image: "/images/profiles/arquitecto/hero_hq.png",
      gems: [
        { label: "Render", value: "Active", icon: "Zap", color: "#EAB308", position: { top: "12%", left: "-18%" } },
        { label: "Efficiency", value: "AA+", icon: "Wind", color: "#EAB308", position: { bottom: "20%", right: "-8%" } },
        { label: "Blueprint", value: "Verify", icon: "FileText", color: "#EAB308", position: { top: "45%", right: "-12%" } },
      ]
    },
    about: {
      title: "Innovación, Matericidad y Luz Natural",
      description: "Para nosotros, la arquitectura es la intersección entre el arte y la ingeniería. Cada proyecto es una pieza única, diseñada para dialogar con su entorno. Con más de 15 años de trayectoria en Uruguay y el exterior, nos especializamos en materiales nobles como el hormigón, la madera nacional y el cristal estructural, aplicando siempre principios de eficiencia energética Passivhaus.",
      image: "/images/profiles/arquitecto/about_hq.png",
      detailImages: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      signature: "Arq. Gastón Silva • Director de Silva Arquitectura"
    },
    differentials: [
      { title: "Inmersión 3D Real", description: "Utilizamos realidad virtual de última generación para que vivas tu casa antes de que se coloque el primer ladrillo." },
      { title: "Eficiencia AA+", description: "Diseños que reducen el consumo energético hasta un 70% mediante ventilación cruzada y aislación térmica superior." },
      { title: "Gestión Integral 'Elite'", description: "Nos encargamos de todo: desde el permiso municipal más complejo hasta la selección del último tirador de mueble." },
    ],
    fullServices: [
      { title: "Residencial de Alta Gama", description: "Proyectos llave en mano con dirección de obra personalizada y reporte semanal de avances digitales.", icon: "Home" },
      { title: "Architecture Tech", description: "Modernización de edificios antiguos con integración de domótica avanzada y eficiencia termo-acústica.", icon: "Zap" },
      { title: "Interiorismo Proyectual", description: "Diseño de mobiliario exclusivo, curaduría de iluminación y selección de materialidades para locales y residencias.", icon: "Layers" },
      { title: "Paisajismo Sustentable", description: "Diseño de entornos naturales que interactúan armónicamente con la obra, utilizando especies nativas y riego inteligente.", icon: "Globe" },
    ],
    stats: [
      { value: "48", label: "Premios Recibidos" },
      { value: "0", label: "Desvíos en Plazos" },
      { value: "+$10M", label: "Activos Diseñados" },
    ],
    testimonials: [
      { name: "Gustavo Bauer", role: "Inversor inmobiliario", text: "Gastón tiene la capacidad de transformar m2 en experiencias de lujo. Su manejo de la luz y las proporciones es de nivel mundial.", image: "/images/testimonials/arquitecto/gustavo.png", verified: true, rating: 5 },
      { name: "Laura Conti", role: "Directora en Galería Sur", text: "El estudio Silva rediseñó nuestro espacio principal y el resultado superó todas las expectativas. Puntualidad y excelencia sueca.", image: "/images/testimonials/arquitecto/laura.png", verified: true, rating: 5 },
    ],
    partners: [
      { name: "Autodesk", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Autodesk_logo.svg/1024px-Autodesk_logo.svg.png" },
      { name: "Lutron", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lutron_Logo.svg/1024px-Lutron_Logo.svg.png" },
      { name: "Knoll", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Knoll_Logo.svg/1024px-Knoll_Logo.svg.png" },
      { name: "Vray", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vray_logo.svg/1024px-Vray_logo.svg.png" },
    ],
    faqs: [
      { question: "¿Cómo es el proceso de presupuesto?", answer: "Realizamos una tasación paramétrica inicial basada en el anteproyecto para evitar sorpresas y garantizar la viabilidad del sueño del cliente." },
      { question: "¿Realizan proyectos fuera de la capital?", answer: "Sí, operamos en todo el Mercosur con un equipo logístico que asegura la misma calidad constructiva en cualquier coordenada." },
    ],
    workflow: [
      { title: "Briefing", description: "Auditoría de necesidades y análisis de normativa del terreno." },
      { title: "Concepto", description: "Desarrollo de la idea rectora, modelado 3D y visualización fotorrealista." },
      { title: "Proyecto", description: "Documentación técnica exhaustiva para ejecución de obra sin errores." },
      { title: "Obra", description: "Dirección táctica y administrativa hasta la entrega final de llaves." },
    ],
    socials: { instagram: "estudiosilva.arch", linkedin: "estudio-silva-architecture", whatsapp: "+59894000000" },
    location: { city: "Montevideo", address: "Bv. España 2500", mapUrl: "https://goo.gl/maps/example5" },
    gallery: [
      { image: "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Residencia Bosque", category: "Viviendas" },
      { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Loft Industrial", category: "Reformas" },
      { image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Edificio Gaia", category: "Corporativo" },
      { image: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Interior Lujo", category: "Decoración" },
      { image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Materialidad Noble", category: "Detalle" },
      { image: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Estructura Vista", category: "Ingeniería" },
      { image: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Lucarna Minimalista", category: "Luz" },
      { image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Espacio Público", category: "Urbanismo" },
    ],
    quote: {
      text: "La arquitectura debe ser la respuesta silenciosa a las necesidades del alma humana. No construimos casas, creamos refugios.",
      author: "Arq. Gastón Silva • Director de Silva Arquitectura",
    }
  },
  estetica: {
    id: "estetica",
    label: "Centro de Estética",
    brandName: "Lumiére Estética",
    shortName: "LE",
    accent: "#FF2D55",
    bg: "#11050A",
    hero: {
      eyebrow: "Dermoestética de Alta Gama",
      title: "La ciencia al servicio de tu armonía natural.",
      subtitle: "Protocolos personalizados basados en biotecnología FDA. Resultados visibles, seguros y duraderos para quienes buscan la excelencia en el cuidado de su piel y bienestar corporal.",
      cta: "Agendar Evaluación Táctica",
      image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
      gems: [
        { label: "FDA", value: "Approved", icon: "ShieldCheck", color: "#FF2D55", position: { top: "8%", left: "-15%" } },
        { label: "Treatment", value: "Zen", icon: "Sparkles", color: "#FF2D55", position: { bottom: "22%", right: "-12%" } },
        { label: "Biotec", value: "Active", icon: "Zap", color: "#FF2D55", position: { top: "40%", right: "-18%" } },
      ]
    },
    about: {
      title: "Vanguardia, Ética y Belleza Real",
      description: "En Lumiére Estética fusionamos la aparatología de última generación con una visión holística de la belleza. No creemos en resultados artificiales; trabajamos para potenciar tu fisionomía mediante protocolos médicos estéticos de mínima invasión. Nuestra clínica es un santuario de calma donde la tecnología más avanzada se encuentra con un servicio de guante blanco.",
      image: "/images/profiles/estetica/about_hq.png",
      detailImages: [
        "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      signature: "Dra. Carolina Pazos • Especialista en Medicina Estética"
    },
    differentials: [
      { title: "Tecnología FDA Gold", description: "Equipamiento de vanguardia certificado internacionalmente para garantizar seguridad clínica y resultados medibles." },
      { title: "Bio-Plan Personal", description: "No vendemos paquetes de sesiones; diseñamos una hoja de ruta biológica adaptada a tu metabolismo y metas personales." },
      { title: "Skin-Check Digital", description: "Diagnóstico profundo con escáner cutáneo para detectar necesidades invisibles al ojo humano antes de cualquier tratamiento." },
    ],
    fullServices: [
      { title: "Hidrafacial Profundo", description: "Renovación celular instantánea con infusión de sueros antioxidantes y péptidos de alta concentración.", icon: "Sparkles" },
      { title: "Láser Soprano Pro", description: "Depilación definitiva con tecnología de enfriamiento constante. Eficacia total en todas las estaciones del año.", icon: "Zap" },
      { title: "Body Sculpting 4D", description: "Tratamiento no invasivo para tonificación muscular y reducción de tejido adiposo mediante ondas electromagnéticas.", icon: "UserCheck" },
      { title: "Armonización Facial", description: "Protocolos de bioestimulación y rellenos de alta pureza para restaurar volúmenes y luz natural sin cirugías.", icon: "Star" },
    ],
    stats: [
      { value: "Pureza", label: "Activos Médicos" },
      { value: "Zero", label: "Tiempos Down" },
      { value: "4.9/5", label: "Beauty Score" },
    ],
    testimonials: [
      { name: "Adriana S.", role: "CEO Luxe Brands", text: "El nivel de personalización de Lumiére es inigualable. Los resultados de mi tratamiento facial son naturales y mi piel se ve 10 años más joven.", image: "/images/testimonials/estetica/adriana.png", verified: true, rating: 5 },
      { name: "Valentina P.", role: "Influencer Lifestyle", text: "Mi refugio favorito en Montevideo. La tecnología es increíble y el equipo te hace sentir como en un spa de 5 estrellas en Suiza.", image: "/images/testimonials/estetica/valentina.png", verified: true, rating: 5 },
    ],
    partners: [
      { name: "Lumenis", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Lumenis_Logo.svg/1200px-Lumenis_Logo.svg.png" },
      { name: "SkinCeuticals", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SkinCeuticals_Logo.svg/1024px-SkinCeuticals_Logo.svg.png" },
      { name: "Allergan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Allergan_Aesthetics_Logo.svg/1024px-Allergan_Aesthetics_Logo.svg.png" },
      { name: "Hydrafacial", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/HydraFacial_Logo.svg/1024px-HydraFacial_Logo.svg.png" },
    ],
    faqs: [
      { question: "¿Los tratamientos duelen?", answer: "Nuestra tecnología es de última generación, diseñada para ser indolora y permitirte reincorporarte a tu vida social de inmediato." },
      { question: "¿Cómo reservo una evaluación?", answer: "Puedes hacerlo vía WhatsApp o a través de nuestro concierge digital integrado en esta plataforma para una atención prioritaria." },
    ],
    workflow: [
      { title: "Scanner", description: "Diagnóstico digital profundo del estado de la dermis y tejidos." },
      { title: "Diseño", description: "Creación del protocolo de tratamiento a medida por nuestro equipo médico." },
      { title: "Sesión", description: "Aplicación de tecnología y activos bajo estrictos estándares clínicos." },
      { title: "Control", description: "Seguimiento post-tratamiento para asegurar la longevidad del brillo." },
    ],
    socials: { instagram: "lumiere.estetica", linkedin: "lumiere-wellness", whatsapp: "+59895000000" },
    location: { city: "Pocitos", address: "Benito Blanco 1200", mapUrl: "https://goo.gl/maps/example6" },
    gallery: [
      { image: "https://images.pexels.com/photos/3998394/pexels-photo-3998394.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Tratamiento VIP", category: "Servicios" },
      { image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Tecnología Láser", category: "Equipos" },
      { image: "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Ambiente Zen", category: "Clínica" },
      { image: "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Bioactivos", category: "Productos" },
      { image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Dermoestética", category: "Cuidado" },
      { image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Armonización Facial", category: "Inyectables" },
      { image: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Ritual Lumiére", category: "Spa" },
      { image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Microblading", category: "Perfilado" },
    ],
    quote: {
      text: "La verdadera estética no cambia quién eres, revela la luz que ya tienes. El cuidado de la piel es una forma de amor propio.",
      author: "Dra. Carolina Pazos • Especialista en Medicina Estética",
    }
  }
};

export type ProfessionId = keyof typeof PROFESSIONS;
export const DEFAULT_PROFESSION: ProfessionId = "mecanico";
