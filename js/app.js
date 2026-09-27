/* DOUGH LAB — interactions. No framework. Restrained, cinematic. */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* Year + config placeholders */
  try {
    $$("[data-config-year]").forEach((el) => (el.textContent = SITE_CONFIG.YEAR));
    const setHref = (sel, val) => $$("[data-config-href='" + sel + "']").forEach((a) => (a.href = val));
    const setText = (sel, val) => $$("[data-config-text='" + sel + "']").forEach((el) => (el.textContent = val));
    setText("address", SITE_CONFIG.ADDRESS + " · " + SITE_CONFIG.CITY);
    setText("phone", SITE_CONFIG.PHONE);
    setText("email", SITE_CONFIG.EMAIL);
    setText("hours", SITE_CONFIG.HOURS);
    setText("instagram", SITE_CONFIG.INSTAGRAM);
    setHref("maps", SITE_CONFIG.MAPS_URL);
    setHref("order", SITE_CONFIG.ORDER_URL);
    setHref("call", SITE_CONFIG.PHONE_LINK);
    setHref("whatsapp", SITE_CONFIG.WHATSAPP_LINK);
    setHref("instagram", SITE_CONFIG.INSTAGRAM_URL);
  } catch (e) {}

  /* Sticky nav state */
  const nav = $("#nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  const mmenu = $("#mmenu");
  $$("[data-open-menu]").forEach((b) => b.addEventListener("click", () => { mmenu.classList.add("open"); document.body.style.overflow = "hidden"; }));
  $$("[data-close-menu]").forEach((b) => b.addEventListener("click", () => { mmenu.classList.remove("open"); document.body.style.overflow = ""; }));
  $$(".mmenu a.big").forEach((a) => a.addEventListener("click", () => { mmenu.classList.remove("open"); document.body.style.overflow = ""; }));

  /* Scroll reveal */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  $$(".reveal, .reveal-line").forEach((el) => io.observe(el));

  /* Subtle hero parallax (desktop only, restrained) */
  const heroImg = $("#heroImg");
  if (heroImg && matchMedia("(min-width: 1020px)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", () => {
      const y = Math.min(window.scrollY, window.innerHeight);
      heroImg.style.translate = "0 " + y * 0.08 + "px";
    }, { passive: true });
  }

  /* Menu tabs */
  const tabsWrap = $("#menuTabs");
  const list = $("#menuList");
  const note = $("#menuNote");
  const count = $("#menuCount");
  const sheet = $("#sheet");
  const backdrop = $("#sheetBackdrop");

  const tagClass = (t) => {
    if (t === "SPICY") return "mini-tag spicy";
    if (t === "JAIN") return "mini-tag jain";
    if (t === "SIGNATURE" || t === "POPULAR") return "mini-tag sig";
    return "mini-tag";
  };
  const fmtPrice = (p) => (typeof p === "number" ? "₹" + p : "₹" + p);
  const isSpicy = (tags) => tags.includes("SPICY");
  const isJain = (tags) => tags.includes("JAIN");

  function renderTabs(active) {
    if (!tabsWrap) return;
    tabsWrap.innerHTML = "";
    Object.entries(MENU_DATA).forEach(([key, cat]) => {
      const b = document.createElement("button");
      b.className = "tab";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", key === active ? "true" : "false");
      b.textContent = cat.label;
      b.addEventListener("click", () => renderMenu(key));
      tabsWrap.appendChild(b);
    });
  }

  function renderMenu(key) {
    const cat = MENU_DATA[key];
    if (!cat) return;
    renderTabs(key);
    if (note) note.textContent = cat.note || "";
    if (count) count.textContent = cat.items.length + (cat.items.length === 1 ? " item" : " items");
    if (!list) return;
    list.innerHTML = "";
    cat.items.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "menu-item";
      btn.setAttribute("aria-label", item.name + " — " + fmtPrice(item.price) + ". View details.");
      const tags = (item.tags || []).map((t) => '<span class="' + tagClass(t) + '">' + (t === "SPICY" ? "● " : "") + t + "</span>").join("");
      btn.innerHTML =
        "<h3>" + item.name + " " + tags + "</h3>" +
        '<span class="pr">' + fmtPrice(item.price) + (String(item.price).includes("/") ? "<small>MED / LARGE</small>" : "") + "</span>" +
        (item.desc ? '<p class="desc">' + item.desc + "</p>" : "");
      btn.addEventListener("click", () => openSheet(item, cat.label));
      list.appendChild(btn);
    });
  }

  function openSheet(item, catLabel) {
    if (!sheet) return;
    $("#sheetName").textContent = item.name;
    $("#sheetCat").textContent = catLabel;
    $("#sheetDesc").textContent = item.desc || "Freshly prepared at Dough Lab.";
    $("#sheetPrice").textContent = fmtPrice(item.price);
    const tagsEl = $("#sheetTags");
    tagsEl.innerHTML = (item.tags || []).map((t) => '<span class="mini-tag' + (t === "SPICY" ? " spicy" : t === "JAIN" ? " jain" : t === "SIGNATURE" || t === "POPULAR" ? " sig" : "") + '">' + t + "</span>").join("");
    $("#sheetMeta").textContent =
      (isSpicy(item.tags || []) ? "Spicy — marked with ● and text, never colour alone. " : "") +
      (isJain(item.tags || []) ? "Jain preparation — Jain pizza sauce, no root vegetables. " : "") +
      "Vegetarian. Sourdough where listed.";
    sheet.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeSheet() {
    if (!sheet) return;
    sheet.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (backdrop) backdrop.addEventListener("click", closeSheet);
  const sheetClose = $("#sheetClose");
  if (sheetClose) sheetClose.addEventListener("click", closeSheet);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeSheet(); if (mmenu) mmenu.classList.remove("open"); document.body.style.overflow = ""; } });

  renderMenu("signature-sourdough");

  /* Contact form — no backend: compose WhatsApp + mailto */
  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const msg =
        "Hi Dough Lab!%0A" +
        "Name: " + encodeURIComponent(fd.get("name") || "") + "%0A" +
        "Phone: " + encodeURIComponent(fd.get("phone") || "") + "%0A" +
        "Topic: " + encodeURIComponent(fd.get("topic") || "") + "%0A" +
        "Message: " + encodeURIComponent(fd.get("message") || "");
      window.open(SITE_CONFIG.WHATSAPP_LINK.split("?")[0] + "?text=" + msg, "_blank");
      const done = $("#formDone");
      if (done) { done.hidden = false; done.focus(); }
      form.reset();
    });
  }

  /* Dynamic open indicator — only if real hours supplied later; placeholder stays neutral */
  const openBadge = $("#openBadge");
  if (openBadge && SITE_CONFIG.HOURS.startsWith("[ADD")) {
    openBadge.innerHTML = '<span class="pulse" style="background:#D8B65D;box-shadow:0 0 0 5px rgba(216,182,93,.2)"></span> Hours on request — call ahead';
  }
})();
