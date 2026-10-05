(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Mobile menu
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("in"));
  }

  // Life page: category filters
  const filterButtons = document.querySelectorAll(".filters button");
  const photos = document.querySelectorAll(".gallery .photo");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      photos.forEach((p) => { p.hidden = !(cat === "all" || p.dataset.cat === cat); });
    });
  });

  // Life page: if a photo file hasn't been added yet, show a placeholder
  // that tells you which file name to drop into assets/images/life/
  const ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 17-5-5-8 7"/></svg>';
  const toPlaceholder = (img) => {
    const btn = img.closest("button");
    if (!btn || btn.dataset.missing) return;
    btn.dataset.missing = "1";
    const ph = document.createElement("div");
    ph.className = "photo-placeholder";
    if (img.dataset.ar) ph.style.setProperty("--ar", img.dataset.ar);
    ph.innerHTML = `<div>${ICON}Photo coming soon<br><code>${img.getAttribute("src")}</code></div>`;
    btn.replaceWith(ph);
  };
  document.querySelectorAll(".gallery .photo img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) toPlaceholder(img);
    else img.addEventListener("error", () => toPlaceholder(img));
  });

  // Life page: lightbox
  const box = document.querySelector(".lightbox");
  if (box && typeof box.showModal === "function") {
    const img = box.querySelector("img");
    const cap = box.querySelector("p");
    document.querySelectorAll(".gallery .photo button").forEach((b) => {
      b.addEventListener("click", () => {
        const src = b.querySelector("img");
        img.src = src.currentSrc || src.src;
        img.alt = src.alt;
        cap.textContent = b.closest(".photo").querySelector("figcaption b")?.textContent || src.alt;
        box.showModal();
      });
    });
    box.querySelector(".close").addEventListener("click", () => box.close());
    box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  }
})();
