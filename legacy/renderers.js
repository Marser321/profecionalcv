import { CONTACT } from "./data.js";
import { getValue } from "./utils.js";

const withParams = (raw, params) => {
  if (!raw) return "";
  return `${raw}${raw.includes("?") ? "&" : "?"}${params}`;
};

const buildImageSources = (image) => {
  if (!image) {
    return { avif: "", webp: "", jpg: "", fallback: "" };
  }
  if (image.base) {
    const sizes = image.sizes || [640, 1200];
    const srcset = (ext) =>
      sizes.map((size) => `${image.base}-${size}.${ext} ${size}w`).join(", ");
    return {
      avif: srcset("avif"),
      webp: srcset("webp"),
      jpg: srcset("jpg"),
      fallback: `${image.base}-${sizes[sizes.length - 1]}.jpg`,
    };
  }
  const width = image.width || 1200;
  const height = image.height || 800;
  const baseParams = `auto=format&fit=crop&w=${width}&h=${height}&q=80`;
  const jpgUrl = withParams(image.raw, `${baseParams}&fm=jpg`);
  return {
    avif: `${withParams(image.raw, `${baseParams}&fm=avif`)} ${width}w`,
    webp: `${withParams(image.raw, `${baseParams}&fm=webp`)} ${width}w`,
    jpg: `${jpgUrl} ${width}w`,
    fallback: jpgUrl,
  };
};

const applyText = (root, data) => {
  root.querySelectorAll("[data-text]").forEach((el) => {
    const value = getValue(data, el.dataset.text);
    if (value) {
      el.textContent = value;
    }
  });
};

const applyList = (root, data) => {
  root.querySelectorAll("[data-list]").forEach((el) => {
    const items = getValue(data, el.dataset.list);
    if (!items || !items.length) {
      el.style.display = "none";
      return;
    }
    el.innerHTML = items.map((item) => `<span>${item}</span>`).join("");
  });
};

const renderCards = (root, data) => {
  root.querySelectorAll("[data-cards]").forEach((el) => {
    const items = getValue(data, el.dataset.cards);
    if (!items || !items.length) {
      el.style.display = "none";
      return;
    }
    const cardClass = el.dataset.cardClass || "card";
    el.innerHTML = items
      .map(
        (item) =>
          `<article class="${cardClass}"><h3>${item.title}</h3><p>${item.copy}</p></article>`
      )
      .join("");
  });
};

const renderStats = (root, data) => {
  root.querySelectorAll("[data-stats]").forEach((el) => {
    const items = getValue(data, el.dataset.stats);
    if (!items || !items.length) {
      el.style.display = "none";
      return;
    }
    el.innerHTML = items
      .map(
        (item) =>
          `<div class="stat"><span class="stat-value">${item.value}</span><span class="stat-label">${item.label}</span></div>`
      )
      .join("");
  });
};

const renderSteps = (root, data) => {
  root.querySelectorAll("[data-steps]").forEach((el) => {
    const items = getValue(data, el.dataset.steps);
    if (!items || !items.length) {
      el.style.display = "none";
      return;
    }
    const stepClass = el.dataset.stepClass || "workflow-step";
    el.innerHTML = items
      .map(
        (item, index) =>
          `<article class="${stepClass}"><h4>${index + 1}. ${item.title}</h4><p>${item.copy}</p></article>`
      )
      .join("");
  });
};

const renderTags = (root, data) => {
  root.querySelectorAll("[data-tags]").forEach((el) => {
    const items = getValue(data, el.dataset.tags);
    if (!items || !items.length) {
      el.style.display = "none";
      return;
    }
    el.innerHTML = items.map((item) => `<span class="tag">${item}</span>`).join("");
  });
};

const renderQuote = (root, data) => {
  root.querySelectorAll("[data-quote]").forEach((el) => {
    const quote = getValue(data, el.dataset.quote);
    if (!quote || !quote.text) {
      el.style.display = "none";
      return;
    }
    const author = quote.author ? `<span class="quote-author">${quote.author}</span>` : "";
    el.innerHTML = `${quote.text}${author}`;
  });
};

const renderTiers = (root, data) => {
  root.querySelectorAll("[data-tiers]").forEach((el) => {
    const items = getValue(data, el.dataset.tiers);
    if (!items || !items.length) {
      el.style.display = "none";
      return;
    }
    el.innerHTML = items
      .map(
        (item) =>
          `<article class="tier-card"><h3>${item.title}</h3><span class="tier-price">${item.price}</span><p>${item.copy}</p></article>`
      )
      .join("");
  });
};

const renderImages = (root, data) => {
  root.querySelectorAll("[data-image]").forEach((el) => {
    const key = el.dataset.image;
    const image = data.images?.[key];
    if (!image) {
      el.style.display = "none";
      return;
    }
    const sources = buildImageSources(image);
    const eager = el.dataset.loading === "eager";
    const width = image.width || 1200;
    const height = image.height || 800;
    const sizesAttr = image.sizesAttr || "(min-width: 900px) 520px, 100vw";
    el.style.aspectRatio = `${width} / ${height}`;
    el.innerHTML = `
      <picture>
        <source type="image/avif" srcset="${sources.avif}" sizes="${sizesAttr}" />
        <source type="image/webp" srcset="${sources.webp}" sizes="${sizesAttr}" />
        <img src="${sources.fallback}" srcset="${sources.jpg}" sizes="${sizesAttr}" alt="${image.alt}" width="${width}" height="${height}" loading="${eager ? "eager" : "lazy"}" decoding="async" fetchpriority="${eager ? "high" : "auto"}" />
      </picture>
    `;
  });
};

const applyCtas = (root, data) => {
  root.querySelectorAll("[data-cta]").forEach((el) => {
    const type = el.dataset.cta;
    if (type === "whatsapp") {
      el.href = CONTACT.whatsapp;
      if (!el.dataset.text) {
        el.textContent = data.ctas?.whatsapp || "WhatsApp";
      }
    }
    if (type === "mailto") {
      el.href = CONTACT.mailto;
      if (!el.dataset.text) {
        el.textContent = data.ctas?.mailto || "Email";
      }
    }
  });
};

const renderFloatingCta = (data) => {
  const container = document.getElementById("floating-cta");
  if (!container) return;

  container.innerHTML = `
    <a href="${CONTACT.whatsapp}" class="cta floating whatsapp-luxe" target="_blank" aria-label="WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.284l-.569 2.103 2.141-.548c.954.555 1.954.858 3.152.859h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.375 8.203c-.147.415-.852.766-1.127.81-.274.045-.536.064-.997-.101-.237-.085-1.002-.418-1.928-1.242-.718-.641-1.201-1.432-1.341-1.673-.139-.241-.015-.372.106-.493.11-.109.241-.283.361-.424.12-.142.16-.241.24-.4.079-.16.039-.301-.02-.441s-.519-1.251-.711-1.71c-.185-.447-.373-.385-.512-.392-.128-.007-.275-.008-.423-.008s-.386.056-.588.274c-.201.218-.767.751-.767 1.83s.785 2.122.895 2.22c.11.109 1.547 2.361 3.748 3.313.523.226.932.36 1.251.463.524.167 1.002.143 1.379.088.42-.062 1.294-.529 1.474-1.042.18-.513.18-.953.126-1.042-.054-.089-.198-.142-.442-.239z"/>
      </svg>
      <span>Contactar</span>
    </a>
  `;
};

export const hydrate = (root, data) => {
  applyText(root, data);
  applyList(root, data);
  renderCards(root, data);
  renderStats(root, data);
  renderSteps(root, data);
  renderTags(root, data);
  renderQuote(root, data);
  renderTiers(root, data);
  renderImages(root, data);
  applyCtas(root, data);
  renderFloatingCta(data);
};
