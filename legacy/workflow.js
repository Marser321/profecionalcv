import { getValue } from "./utils.js";

const SHARED_DIMENSIONS = { width: 520, height: 240 };
const pointsCache = new Map();
const pathCache = new Map();

const getCacheKey = (style, count) => `${style}|${count}`;

const getPoints = (style, count) => {
  const key = getCacheKey(style, count);
  if (pointsCache.has(key)) {
    return pointsCache.get(key);
  }
  let points = [];
  if (style === "orbit") {
    const cx = 260;
    const cy = 120;
    const radius = 70;
    points = Array.from({ length: count }, (_, index) => {
      const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
      return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
    });
  } else if (style === "zigzag") {
    const startX = 60;
    const startY = 60;
    const stepX = 120;
    const stepY = 60;
    points = Array.from({ length: count }, (_, index) => ({
      x: startX + stepX * index,
      y: startY + (index % 2 === 0 ? 0 : stepY),
    }));
  } else {
    const startX = 60;
    const startY = 120;
    const stepX = 140;
    points = Array.from({ length: count }, (_, index) => ({
      x: startX + stepX * index,
      y: startY,
    }));
  }
  pointsCache.set(key, points);
  return points;
};

const getPath = (style, count, points) => {
  const key = getCacheKey(style, count);
  if (pathCache.has(key)) {
    return pathCache.get(key);
  }
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`)
    .join(" ");
  pathCache.set(key, path);
  return path;
};

const buildWorkflowSvg = (style, stepsCount, accent) => {
  const count = Math.max(3, stepsCount || 4);
  const points = getPoints(style, count);
  const path = getPath(style, count, points);
  const nodes = points
    .map(
      (point) =>
        `<circle cx="${point.x}" cy="${point.y}" r="6" fill="${accent}" />`
    )
    .join("");

  return `
    <svg viewBox="0 0 ${SHARED_DIMENSIONS.width} ${SHARED_DIMENSIONS.height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <path d="${path}" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="svg-line" />
      ${nodes}
    </svg>
  `;
};

export const createWorkflowController = ({ reduceMotion = false } = {}) => {
  let workflowScenes = [];
  let rafId = null;
  let motionReduced = Boolean(reduceMotion);
  let observer = null;
  let activeScenes = new Set();

  const resetOffsets = () => {
    workflowScenes.forEach(({ lines }) => {
      lines.forEach(({ el, length }) => {
        el.style.strokeDasharray = length;
        el.style.strokeDashoffset = motionReduced ? 0 : length;
      });
    });
  };

  const register = (root, data) => {
    workflowScenes = [];
    activeScenes = new Set();
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    root.querySelectorAll("[data-workflow]").forEach((section) => {
      const style = section.dataset.flow || "linear";
      const stepsPath = section.dataset.steps || "workflow.steps";
      const steps = getValue(data, stepsPath) || [];
      const svgContainer = section.querySelector("[data-workflow-svg]");
      if (!svgContainer) return;
      svgContainer.innerHTML = buildWorkflowSvg(style, steps.length, data.palette.accent);
      const lines = Array.from(svgContainer.querySelectorAll(".svg-line")).filter(
        (node) => typeof node.getTotalLength === "function"
      );
      const cachedLines = lines.map((line) => {
        const length = line.getTotalLength();
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = motionReduced ? 0 : length;
        return { el: line, length };
      });
      workflowScenes.push({ section, lines: cachedLines, lastProgress: null });
    });

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const scene = workflowScenes.find((item) => item.section === entry.target);
            if (!scene) return;
            if (entry.isIntersecting) {
              activeScenes.add(scene);
            } else {
              activeScenes.delete(scene);
            }
          });
        },
        { root: null, rootMargin: "100px 0px", threshold: 0 }
      );
      workflowScenes.forEach((scene) => observer.observe(scene.section));
      activeScenes = new Set(workflowScenes);
    } else {
      workflowScenes.forEach((scene) => activeScenes.add(scene));
    }
  };

  const onScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      if (motionReduced) return;
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      activeScenes.forEach((scene) => {
        const { section, lines } = scene;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          Math.max((viewport - rect.top) / (viewport + rect.height), 0),
          1
        );
        if (scene.lastProgress === progress) return;
        scene.lastProgress = progress;
        lines.forEach(({ el, length }) => {
          el.style.strokeDashoffset = length - length * progress;
        });
      });
    });
  };

  const setReduceMotion = (value) => {
    motionReduced = Boolean(value);
  };

  return { register, onScroll, setReduceMotion, resetOffsets };
};
