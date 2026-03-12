/**
 * ThemeManager.js
 * Centraliza la inyección de variables CSS y la gestión de temas
 * para asegurar escalabilidad infinita y cambios instantáneos.
 */

const CSS_VARIABLE_MAP = {
  "--accent": "palette.accent",
  "--accent-soft": "palette.accentSoft",
  "--font-display": "typography.display",
  "--font-body": "typography.body",
  "--photo-tint": "palette.tint",
};

export const createThemeManager = () => {
  const root = document.body;
  const isDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  /**
   * Aplica dinámicamente las variables CSS mapeadas desde el objeto de profesión.
   * @param {Object} data - Datos de la profesión seleccionada
   */
  const injectStyles = (data) => {
    // 1. Inyectar variables del mapa centralizado
    Object.entries(CSS_VARIABLE_MAP).forEach(([cssVar, dataPath]) => {
      const value = dataPath.split('.').reduce((acc, part) => acc?.[part], data);
      
      if (value) {
        const finalValue = cssVar.includes("font") ? `"${value}"` : value;
        root.style.setProperty(cssVar, finalValue);
      }
    });

    // 2. Lógica especial de Background (depende del esquema de color)
    const bgColor = isDarkMode() ? "#161412" : (data.palette.bg || "#fcf7ef");
    root.style.setProperty("--bg", bgColor);

    // 3. Metadatos de la página
    root.dataset.profession = data.layout;
    document.title = `Landing Modular B2B | ${data.label}`;
  };

  return { injectStyles };
};
