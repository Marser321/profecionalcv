const buildHeroSvg = () => `
  <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style="opacity: 0.15">
    <path class="hero-svg-line" d="M0 180 L 160 180 L 160 60 L 320 60 L 320 140 L 520 140" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="inherit" />
  </svg>
`;

export const createHeroScrollAnimator = ({ root, reduceMotion = false } = {}) => {
  let rafId = null;
  let isVisible = false;
  let scrollY = window.scrollY;
  let targetProgress = 0;
  let currentProgress = 0;
  let start = 0;
  let end = 1;
  let motionReduced = Boolean(reduceMotion);
  
  const hero = root?.closest(".hero") || root;

  const measure = () => {
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const currentScroll = window.scrollY;
    const offset = window.innerHeight * 0.2;
    start = rect.top + currentScroll - offset;
    end = rect.bottom + currentScroll - offset;
  };

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  const update = () => {
    if (!isVisible || motionReduced) {
      rafId = null;
      return;
    }

    // Suavizado (Lerp) para una sensación más premium
    currentProgress = lerp(currentProgress, targetProgress, 0.06);
    
    // Aplicar al DOM solo si hay un cambio significativo (> 0.0001)
    if (Math.abs(currentProgress - targetProgress) > 0.0001) {
      root.style.setProperty("--progress", currentProgress.toFixed(4));
      rafId = requestAnimationFrame(update);
    } else {
      currentProgress = targetProgress;
      root.style.setProperty("--progress", currentProgress.toFixed(4));
      rafId = null;
    }
  };

  const onScroll = () => {
    if (!isVisible || motionReduced) return;
    
    scrollY = window.scrollY;
    const progress = (scrollY - start) / (end - start || 1);
    targetProgress = Math.min(Math.max(progress, 0), 1);

    if (!rafId) {
      rafId = requestAnimationFrame(update);
    }
  };

  const init = () => {
    if (!root) return;
    root.innerHTML = buildHeroSvg();
    const path = root.querySelector(".hero-svg-line");
    if (!path || typeof path.getTotalLength !== "function") return;
    
    const length = path.getTotalLength();
    root.style.setProperty("--path-length", length);
    
    measure();

    // IntersectionObserver para evitar procesar si no es visible
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        measure();
        onScroll();
      }
    }, { threshold: 0.1 });

    observer.observe(hero);

    if (motionReduced) {
      currentProgress = targetProgress = 1;
      root.style.setProperty("--progress", "1");
    }
  };

  const onResize = () => {
    measure();
    onScroll();
  };

  const setReduceMotion = (value) => {
    motionReduced = Boolean(value);
    if (motionReduced) {
      currentProgress = targetProgress = 1;
      root.style.setProperty("--progress", "1");
    } else {
      onScroll();
    }
  };

  return { init, onScroll, onResize, setReduceMotion };
};
