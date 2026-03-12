import { PROFESSIONS } from "./data.js";
import { hydrate } from "./renderers.js";
import { createWorkflowController } from "./workflow.js";
import { createThemeManager } from "./theme-manager.js";

const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const state = {
  active: "corredor-inmobiliario",
  reduceMotion: motionQuery.matches,
  currentLayout: null, // Track layout for optimization
};

const selectors = {
  body: document.body,
  layoutRoot: document.getElementById("layout-root"),
  chips: document.querySelectorAll(".profession-chip"),
};

const workflowController = createWorkflowController({ reduceMotion: state.reduceMotion });
const themeManager = createThemeManager();
let heroAnimator = null;

const onScroll = () => {
  workflowController.onScroll();
  if (heroAnimator) {
    heroAnimator.onScroll();
  }
};

const onResize = () => {
  workflowController.onScroll();
  if (heroAnimator) {
    heroAnimator.onResize();
  }
};

const renderLayout = (key) => {
  const data = PROFESSIONS[key];
  if (!data) return;

  // 1. Optimización: Solo clonar template si el layout cambia
  if (state.currentLayout !== data.layout) {
    const template = document.getElementById(`layout-${data.layout}`);
    if (!template) return;
    
    selectors.layoutRoot.innerHTML = "";
    selectors.layoutRoot.appendChild(template.content.cloneNode(true));
    state.currentLayout = data.layout;
  }

  // 2. Aplicar tema y datos instantáneamente
  themeManager.injectStyles(data);
  hydrate(selectors.layoutRoot, data);

  // 3. Pre-seleccionar servicio en el formulario (Zero Friction)
  const serviceSelect = document.getElementById("form-service");
  if (serviceSelect) {
    serviceSelect.value = data.layout;
  }

  // 4. Reinicializar controladores de animación
  workflowController.register(selectors.layoutRoot, data);
  workflowController.onScroll();

  const heroSvg = selectors.layoutRoot.querySelector("[data-hero-svg]");
  if (heroSvg) {
    heroAnimator = createHeroScrollAnimator({
      root: heroSvg,
      reduceMotion: state.reduceMotion,
    });
    heroAnimator.init();
  } else {
    heroAnimator = null;
  }
};

const onMotionChange = () => {
  state.reduceMotion = motionQuery.matches;
  workflowController.setReduceMotion(state.reduceMotion);
  workflowController.resetOffsets();
  workflowController.onScroll();
  if (heroAnimator) {
    heroAnimator.setReduceMotion(state.reduceMotion);
  }
};

const onColorSchemeChange = () => {
  updateTheme(PROFESSIONS[state.active]);
};

export const init = () => {
  selectors.chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      selectors.chips.forEach((button) =>
        button.classList.toggle("is-active", button === chip)
      );
      state.active = chip.dataset.profession;
      renderLayout(state.active);
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener("change", onMotionChange);
  } else if (motionQuery.addListener) {
    motionQuery.addListener(onMotionChange);
  }

  if (colorSchemeQuery.addEventListener) {
    colorSchemeQuery.addEventListener("change", onColorSchemeChange);
  } else if (colorSchemeQuery.addListener) {
    colorSchemeQuery.addListener(onColorSchemeChange);
  }

  renderLayout(state.active);
};
