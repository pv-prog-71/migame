/* mi.Game — shared header, footer, language and the Bit mascot.
   Used by the home page (index.html) and by Play & learn (learn/index.html). */
(function () {
  "use strict";
  var KEY = "migame-lang", LANGS = ["it", "es", "en"];
  var listeners = [];

  function detect() {
    try { var l = localStorage.getItem(KEY); if (LANGS.indexOf(l) >= 0) return l; } catch (e) {}
    var n = ((navigator.language || "it") + "").slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) >= 0 ? n : "it";
  }
  var lang = detect();

  /* Set to true when "Play & learn" is ready to be shown on the site.
     While false, the app still works at learn/index.html (for tests) but no link points to it. */
  var SHOW_LEARN = true;

  /* Site version: kept in the footer data-version attribute. Keep it equal to the VERSION file. */
  var VERSION = "1.6";

  var NAV = {
    it: { lessons: "Le lezioni", how: "Come funziona", play: "Gioca e impara", contact: "Contatti", menu: "Menu", lang: "Lingua", foot: "Lezioni online individuali di programmazione per bambini." },
    es: { lessons: "Las clases", how: "Cómo funciona", play: "Juega y aprende", contact: "Contacto", menu: "Menú", lang: "Idioma", foot: "Clases individuales online de programación para niños." },
    en: { lessons: "Lessons", how: "How it works", play: "Play & learn", contact: "Contact", menu: "Menu", lang: "Language", foot: "One-to-one online coding lessons for children." }
  };

  /* Bit, the mascot / the player's robot.
     color = any CSS colour.
     opts.parts = { legs, arms, antenna, jet, visor, helmet } → tier 0 bronze, 1 silver, 2 gold.
     Each mission completed in Play & learn adds one of these parts. */
  var TIER = ["#e0884a", "#cfdde6", "#ffd02f"];
  function bit(color, opts) {
    opts = opts || {};
    var c = color || "#58dce0", o = "#174e70", P = opts.parts || {};
    var has = function (k) { return P[k] !== undefined && P[k] !== null; };
    var tc = function (k) { return TIER[P[k]] || TIER[0]; };
    var sv = '<svg viewBox="0 0 64 64" aria-hidden="true" class="' + (opts.cls || "") + '">';
    /* rockets (behind the body) */
    if (has("jet")) sv +=
      '<path d="M5 50 L8.5 60 L12 50Z M52 50 L55.5 60 L59 50Z" fill="#ff8a3d" stroke="' + o + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<rect x="3" y="34" width="11" height="17" rx="4" fill="' + tc("jet") + '" stroke="' + o + '" stroke-width="2.5"/>' +
      '<rect x="50" y="34" width="11" height="17" rx="4" fill="' + tc("jet") + '" stroke="' + o + '" stroke-width="2.5"/>';
    /* antenna */
    sv += '<line x1="32" y1="5" x2="32" y2="14" stroke="' + o + '" stroke-width="3" stroke-linecap="round"/>';
    if (has("antenna")) sv += '<path d="M32 0.5 L34 4.6 L38.5 5.2 L35.2 8.3 L36 12.8 L32 10.6 L28 12.8 L28.8 8.3 L25.5 5.2 L30 4.6Z" fill="' + tc("antenna") + '" stroke="' + o + '" stroke-width="2" stroke-linejoin="round"/>';
    else sv += '<circle cx="32" cy="6" r="4.5" fill="#ffd02f" stroke="' + o + '" stroke-width="2.5"/>';
    /* arms or the plain side ears */
    if (has("arms")) sv +=
      '<rect x="1" y="22" width="9" height="17" rx="4.5" fill="' + tc("arms") + '" stroke="' + o + '" stroke-width="2.5"/>' +
      '<path d="M2 39 v4 a3.5 3.5 0 0 0 7 0 v-4" fill="none" stroke="' + o + '" stroke-width="2.5" stroke-linecap="round"/>' +
      '<rect x="54" y="22" width="9" height="17" rx="4.5" fill="' + tc("arms") + '" stroke="' + o + '" stroke-width="2.5"/>' +
      '<path d="M55 39 v4 a3.5 3.5 0 0 0 7 0 v-4" fill="none" stroke="' + o + '" stroke-width="2.5" stroke-linecap="round"/>';
    else sv += '<rect x="4" y="25" width="7" height="13" rx="3" fill="' + o + '"/><rect x="53" y="25" width="7" height="13" rx="3" fill="' + o + '"/>';
    /* body and face */
    sv += '<rect x="9" y="14" width="46" height="36" rx="15" fill="' + c + '" stroke="' + o + '" stroke-width="3"/>' +
      '<rect x="15" y="20" width="34" height="22" rx="10" fill="#ffffff" stroke="' + o + '" stroke-width="2"/>' +
      '<circle cx="25" cy="30" r="4.2" fill="' + o + '"/><circle cx="39" cy="30" r="4.2" fill="' + o + '"/>' +
      '<circle cx="26.4" cy="28.6" r="1.4" fill="#fff"/><circle cx="40.4" cy="28.6" r="1.4" fill="#fff"/>' +
      '<path d="M27 35.5 Q32 39.5 37 35.5" fill="none" stroke="' + o + '" stroke-width="2.5" stroke-linecap="round"/>' +
      '<circle cx="19.5" cy="36" r="2.4" fill="#ff8cc6"/><circle cx="44.5" cy="36" r="2.4" fill="#ff8cc6"/>';
    if (has("visor")) sv += '<rect x="16" y="24.5" width="32" height="11" rx="5.5" fill="' + o + '"/><rect x="18" y="26.5" width="28" height="7" rx="3.5" fill="' + tc("visor") + '" opacity=".9"/><path d="M21 28.5 h6" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>';
    if (has("helmet")) sv += '<path d="M14 21 Q14 12.5 32 12.5 Q50 12.5 50 21 Z" fill="' + tc("helmet") + '" stroke="' + o + '" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="17" r="2.4" fill="#ff8cc6" stroke="' + o + '" stroke-width="1.5"/>';
    /* tracks or the plain base */
    if (has("legs")) sv += '<rect x="13" y="49" width="38" height="12" rx="6" fill="' + tc("legs") + '" stroke="' + o + '" stroke-width="3"/>' +
      '<circle cx="21" cy="55" r="2.6" fill="' + o + '"/><circle cx="32" cy="55" r="2.6" fill="' + o + '"/><circle cx="43" cy="55" r="2.6" fill="' + o + '"/>';
    else sv += '<rect x="20" y="50" width="24" height="10" rx="5" fill="' + c + '" stroke="' + o + '" stroke-width="3"/>';
    return sv + "</svg>";
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* opts.root: path to the site root ("" on home, "../" in learn)
     opts.active: "home" | "learn"
     opts.extra: HTML for the right side (XP chip, avatar) */
  function header(el, opts) {
    opts = opts || {};
    var r = opts.root || "", n = NAV[lang], home = r + "index.html";
    var onHome = opts.active === "home";
    var a = function (hash) { return onHome ? "#" + hash : home + "#" + hash; };
    el.className = "site-head";
    el.innerHTML = '<div class="wrap">' +
      '<a class="logo" href="' + (onHome ? "#" : home) + '"><img src="' + r + 'assets/img/logo-light.png" alt="mi.Game" width="150" height="43"></a>' +
      '<nav class="nav" id="site-nav" aria-label="mi.Game">' +
      '<a href="' + a("lezioni") + '" data-sec="lezioni">' + esc(n.lessons) + "</a>" +
      '<a href="' + a("metodo") + '" data-sec="metodo">' + esc(n.how) + "</a>" +
      (SHOW_LEARN ? '<a href="' + r + 'learn/index.html" data-sec="gioca"' + (opts.active === "learn" ? ' aria-current="page"' : "") + ">" + esc(n.play) + "</a>" : "") +
      '<a href="' + a("contatti") + '" data-sec="contatti">' + esc(n.contact) + "</a>" +
      (opts.noLang ? "" : '<label class="nav-lang"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>' +
        '<select class="lang-select" aria-label="' + esc(n.lang) + '">' +
        [["it", "Italiano"], ["es", "Español"], ["en", "English"]].map(function (l) { return '<option value="' + l[0] + '"' + (lang === l[0] ? " selected" : "") + ">" + l[1] + "</option>"; }).join("") +
        "</select></label>") +
      "</nav>" +
      '<div class="head-right">' + (opts.extra || "") +
      '<button type="button" class="menu-toggle" aria-controls="site-nav" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg><span class="menu-label">' + esc(n.menu) + "</span></button>" +
      "</div></div>";
    var sel = el.querySelector(".lang-select");
    if (sel) sel.addEventListener("change", function (e) { setLang(e.target.value); });
    var nav = el.querySelector(".nav"), tog = el.querySelector(".menu-toggle");
    tog.addEventListener("click", function () { var o = nav.classList.toggle("is-open"); tog.setAttribute("aria-expanded", String(o)); });
    nav.querySelectorAll("a").forEach(function (x) { x.addEventListener("click", function () { nav.classList.remove("is-open"); tog.setAttribute("aria-expanded", "false"); }); });
  }

  function footer(el, opts) {
    opts = opts || {};
    var r = opts.root || "", n = NAV[lang], home = r + "index.html";
    el.className = "site-foot";
    el.innerHTML = '<div class="wrap"><a class="logo" href="' + home + '"><img src="' + r + 'assets/img/logo-light.png" alt="mi.Game" width="130" height="38"></a>' +
      "<span>" + esc(n.foot) + "</span></div>";
    el.setAttribute("data-version", VERSION);
  }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    listeners.forEach(function (fn) { fn(l); });
  }

  document.documentElement.lang = lang;
  window.MGSite = {
    LANGS: LANGS,
    lang: function () { return lang; },
    setLang: setLang,
    onLang: function (fn) { listeners.push(fn); },
    showLearn: SHOW_LEARN,
    version: VERSION,
    header: header,
    footer: footer,
    bit: bit
  };
})();
