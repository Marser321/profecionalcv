"use client";

// Reemplaza logos externos con wordmarks tipográficas premium — sin dependencia de imágenes
interface PartnerWordmarkProps {
  name: string;
  accent?: string;
}

const BRAND_STYLES: Record<string, { font: string; weight: string; letterSpacing: string; transform?: string }> = {
  // Mecánico
  "Bosch":    { font: "serif",          weight: "900", letterSpacing: "0.05em",  transform: "uppercase" },
  "Mobil 1":  { font: "sans-serif",     weight: "900", letterSpacing: "-0.02em", transform: "uppercase" },
  "Brembo":   { font: "sans-serif",     weight: "700", letterSpacing: "0.15em",  transform: "uppercase" },
  "Pirelli":  { font: "serif",          weight: "800", letterSpacing: "0.1em",   transform: "uppercase" },
  // Abogado
  "Thomson Reuters": { font: "serif",   weight: "400", letterSpacing: "0.08em",  transform: "uppercase" },
  "LexisNexis":      { font: "serif",   weight: "700", letterSpacing: "0.06em"  },
  "LawGeex":         { font: "sans-serif", weight: "800", letterSpacing: "-0.03em" },
  "Clio":            { font: "sans-serif", weight: "900", letterSpacing: "0.2em",  transform: "uppercase" },
  // Psicólogo
  "APA":      { font: "serif",          weight: "700", letterSpacing: "0.3em",   transform: "uppercase" },
  "Mindful":  { font: "serif",          weight: "400", letterSpacing: "0.05em"  },
  "Headspace":{ font: "sans-serif",     weight: "700", letterSpacing: "-0.02em" },
  "Zencare":  { font: "sans-serif",     weight: "600", letterSpacing: "0.05em"  },
  // Odontólogo
  "Dentsply": { font: "sans-serif",     weight: "700", letterSpacing: "0.1em",  transform: "uppercase" },
  "3M ESPE":  { font: "sans-serif",     weight: "900", letterSpacing: "0.05em", transform: "uppercase" },
  "Straumann":{ font: "serif",          weight: "400", letterSpacing: "0.12em"  },
  "Carestream":{ font: "sans-serif",    weight: "700", letterSpacing: "-0.01em" },
  // Arquitecto
  "Autodesk": { font: "sans-serif",     weight: "700", letterSpacing: "0.04em"  },
  "BIM 360":  { font: "sans-serif",     weight: "900", letterSpacing: "-0.02em" },
  "Revit":    { font: "serif",          weight: "800", letterSpacing: "0.06em"  },
  "SketchUp": { font: "sans-serif",     weight: "600", letterSpacing: "0.02em"  },
  // Estética
  "L'Oréal":  { font: "serif",          weight: "400", letterSpacing: "0.12em",  transform: "uppercase" },
  "Dermalogica":{ font: "sans-serif",   weight: "300", letterSpacing: "0.08em",  transform: "uppercase" },
  "Guinot":   { font: "serif",          weight: "700", letterSpacing: "0.18em",  transform: "uppercase" },
  "Environ":  { font: "sans-serif",     weight: "800", letterSpacing: "0.1em",   transform: "uppercase" },
};

export function PartnerWordmark({ name, accent = "#ffffff" }: PartnerWordmarkProps) {
  const style = BRAND_STYLES[name] || { font: "sans-serif", weight: "600", letterSpacing: "0.05em", transform: "uppercase" };

  return (
    <div
      className="flex items-center justify-center px-4 py-2 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0"
      title={name}
    >
      <span
        style={{
          fontFamily: style.font,
          fontWeight: style.weight,
          letterSpacing: style.letterSpacing,
          textTransform: (style.transform as "uppercase" | "none") || "none",
          color: "#ffffff",
          fontSize: "clamp(0.75rem, 1.5vw, 1.1rem)",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        {name}
      </span>
    </div>
  );
}
