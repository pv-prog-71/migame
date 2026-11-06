/* mi.Game Learn — app engine.
   You normally don't need to edit this file: lessons live in /content.
   See README.md for how to add or change a module. */
(function () {
  "use strict";

  var MG = (window.MG = window.MG || {});
  MG.stages = MG.stages || [];
  MG.modules = MG.modules || {};
  MG.placement = MG.placement || null;

  /* ---------- content registration (called by files in /content) ---------- */
  MG.course = function (c) {
    MG.stages = c.stages || [];
    MG.placement = c.placement || null;
    MG.contentPath = c.contentPath || "content/";
    MG.homeUrl = c.homeUrl || "/";
  };
  MG.module = function (m) { MG.modules[m.id] = m; };

  /* ---------- interface text (3 languages) ---------- */
  var UI = {
    en: {
      tagline: "learn", heroHi: "Hi, {name}!", heroWelcome: "Ready to build something?",
      heroText: "Three stages, one journey: Explorer, Apprentice, Inventor. Learn, test yourself, practise, then beat the challenge to move on.",
      continue: "Continue", start: "Start", placementBtn: "Find my level", placementRetake: "Retake the level quiz",
      level: "Level", xpToNext: "{n} XP to level {l}", stageLocked: "Locked", stageOpen: "Open", stageDone: "Complete",
      soon: "Coming soon", locked: "Locked", done: "Done", inProgress: "{p}% done", notStarted: "Not started",
      learn: "Learn", quiz: "Quiz", practice: "Practice", challenge: "Challenge",
      back: "← Map", check: "Check", next: "Next", prev: "Back", hint: "Hint", showAnswer: "Show the answer",
      correct: "Correct!", wrong: "Not yet. Look again and try once more.", chooseFirst: "Pick an answer first.",
      fillFirst: "Fill in every blank first.", revealed: "Here is the answer.", alreadySolved: "Already solved. You can try it again for practice.",
      goQuiz: "Start the quiz", goPractice: "Go to practice", goChallenge: "Take the challenge", finishModule: "Finish module",
      sectionDone: "Section complete", sectionDoneText: "Nice work. On to the next part.",
      modDoneTitle: "Module complete!", modDoneText: "You earned the badge {b} and {x} bonus XP.",
      nextModule: "Next module", backMap: "Back to the map",
      kind_choice: "Choose", kind_predict: "Predict the output", kind_order: "Put in order", kind_fill: "Fill the blanks",
      kind_bug: "Find the bug", kind_trace: "Trace the values", kind_match: "Match",
      typeOutput: "Type exactly what the program prints…", yourProgram: "Your program", pieces: "Pieces (tap to move)",
      tapToAdd: "Tap the pieces below in the right order.", empty: "Nothing here", choose: "Choose…",
      variables: "Variables", objects: "Objects", noObjects: "No objects yet", step: "Step {i} of {n}", restart: "Restart", stepFwd: "Run line",
      profile: "My profile", nickname: "Nickname", nicknameHelp: "Just a nickname. No email or real name needed.",
      color: "Colour", language: "Language", save: "Save", saved: "Saved",
      badges: "Badges", history: "History", noHistory: "Your achievements will show up here.",
      statsXp: "XP", statsLevel: "Level", statsModules: "Modules",
      moveTitle: "Use another device", moveText: "Your progress is saved in this browser only. To continue on a phone or another computer, copy this code and paste it there.",
      copy: "Copy code", copied: "Copied", importLabel: "Paste a code from another device", importBtn: "Load progress",
      importOk: "Progress loaded.", importBad: "That code doesn't look right. Copy it again and paste the whole thing.",
      resetTitle: "Start over", resetText: "Deletes all progress in this browser.", resetBtn: "Delete my progress",
      resetSure: "This can't be undone. Delete everything?", resetYes: "Yes, delete", cancel: "Cancel",
      placeTitle: "Find your level", placeIntro: "Eight short questions. No pressure: it only tells you where to start. Skip any you don't know.",
      placeSubmit: "See my result", placeScore: "correct answers", placeStart: "Start here", placeRec: "We suggest you start with",
      placeSoon: "Lessons for this stage are being prepared. Meanwhile you can explore the stages that are already open.",
      placeDontKnow: "I don't know",
      newBadge: "New badge", levelUp: "Level up!", levelUpText: "You reached level {l}",
      footer: "Your progress stays in this browser.", site: "mi.Game lessons",
      modulesCount: "{n} modules", ofTotal: "{a} of {b}"
    },
    es: {
      tagline: "aprende", heroHi: "¡Hola, {name}!", heroWelcome: "¿Listo para crear algo?",
      heroText: "Tres etapas, un solo viaje: Explorador, Aprendiz, Inventor. Aprende, ponte a prueba, practica y supera el desafío para avanzar.",
      continue: "Continuar", start: "Empezar", placementBtn: "Descubre tu nivel", placementRetake: "Repetir el test de nivel",
      level: "Nivel", xpToNext: "{n} XP para el nivel {l}", stageLocked: "Bloqueada", stageOpen: "Abierta", stageDone: "Completada",
      soon: "Próximamente", locked: "Bloqueado", done: "Hecho", inProgress: "{p}% hecho", notStarted: "Sin empezar",
      learn: "Aprende", quiz: "Quiz", practice: "Práctica", challenge: "Desafío",
      back: "← Mapa", check: "Comprobar", next: "Siguiente", prev: "Atrás", hint: "Pista", showAnswer: "Ver la respuesta",
      correct: "¡Correcto!", wrong: "Todavía no. Míralo otra vez e inténtalo de nuevo.", chooseFirst: "Primero elige una respuesta.",
      fillFirst: "Primero rellena todos los huecos.", revealed: "Esta es la respuesta.", alreadySolved: "Ya resuelto. Puedes repetirlo para practicar.",
      goQuiz: "Empezar el quiz", goPractice: "Ir a la práctica", goChallenge: "Afrontar el desafío", finishModule: "Terminar módulo",
      sectionDone: "Sección completada", sectionDoneText: "Buen trabajo. Vamos a la siguiente parte.",
      modDoneTitle: "¡Módulo completado!", modDoneText: "Has ganado la insignia {b} y {x} XP extra.",
      nextModule: "Siguiente módulo", backMap: "Volver al mapa",
      kind_choice: "Elige", kind_predict: "Adivina la salida", kind_order: "Ordena", kind_fill: "Rellena los huecos",
      kind_bug: "Encuentra el error", kind_trace: "Sigue los valores", kind_match: "Relaciona",
      typeOutput: "Escribe exactamente lo que imprime el programa…", yourProgram: "Tu programa", pieces: "Piezas (toca para mover)",
      tapToAdd: "Toca las piezas de abajo en el orden correcto.", empty: "Vacío", choose: "Elige…",
      variables: "Variables", objects: "Objetos", noObjects: "Aún no hay objetos", step: "Paso {i} de {n}", restart: "Reiniciar", stepFwd: "Ejecutar línea",
      profile: "Mi perfil", nickname: "Apodo", nicknameHelp: "Solo un apodo. No hace falta email ni nombre real.",
      color: "Color", language: "Idioma", save: "Guardar", saved: "Guardado",
      badges: "Insignias", history: "Historial", noHistory: "Aquí aparecerán tus logros.",
      statsXp: "XP", statsLevel: "Nivel", statsModules: "Módulos",
      moveTitle: "Usar otro dispositivo", moveText: "Tu progreso se guarda solo en este navegador. Para seguir en el móvil u otro ordenador, copia este código y pégalo allí.",
      copy: "Copiar código", copied: "Copiado", importLabel: "Pega un código de otro dispositivo", importBtn: "Cargar progreso",
      importOk: "Progreso cargado.", importBad: "Ese código no parece correcto. Cópialo de nuevo y pégalo entero.",
      resetTitle: "Empezar de cero", resetText: "Borra todo el progreso de este navegador.", resetBtn: "Borrar mi progreso",
      resetSure: "No se puede deshacer. ¿Borrar todo?", resetYes: "Sí, borrar", cancel: "Cancelar",
      placeTitle: "Descubre tu nivel", placeIntro: "Ocho preguntas cortas. Sin presión: solo sirve para saber por dónde empezar. Salta las que no sepas.",
      placeSubmit: "Ver mi resultado", placeScore: "respuestas correctas", placeStart: "Empezar aquí", placeRec: "Te sugerimos empezar por",
      placeSoon: "Las lecciones de esta etapa se están preparando. Mientras tanto puedes explorar las etapas ya abiertas.",
      placeDontKnow: "No lo sé",
      newBadge: "Nueva insignia", levelUp: "¡Subes de nivel!", levelUpText: "Has llegado al nivel {l}",
      footer: "Tu progreso se queda en este navegador.", site: "Clases de mi.Game",
      modulesCount: "{n} módulos", ofTotal: "{a} de {b}"
    },
    it: {
      tagline: "impara", heroHi: "Ciao, {name}!", heroWelcome: "Pronto a creare qualcosa?",
      heroText: "Tre tappe, un solo viaggio: Esploratore, Apprendista, Inventore. Impara, mettiti alla prova, esercitati e supera la sfida per andare avanti.",
      continue: "Continua", start: "Inizia", placementBtn: "Scopri il tuo livello", placementRetake: "Rifai il test di livello",
      level: "Livello", xpToNext: "{n} XP al livello {l}", stageLocked: "Bloccata", stageOpen: "Aperta", stageDone: "Completata",
      soon: "In arrivo", locked: "Bloccato", done: "Fatto", inProgress: "{p}% fatto", notStarted: "Da iniziare",
      learn: "Impara", quiz: "Quiz", practice: "Esercizi", challenge: "Sfida",
      back: "← Mappa", check: "Verifica", next: "Avanti", prev: "Indietro", hint: "Suggerimento", showAnswer: "Mostra la risposta",
      correct: "Giusto!", wrong: "Non ancora. Guarda di nuovo e riprova.", chooseFirst: "Prima scegli una risposta.",
      fillFirst: "Prima completa tutti gli spazi.", revealed: "Ecco la risposta.", alreadySolved: "Già risolto. Puoi rifarlo per esercitarti.",
      goQuiz: "Inizia il quiz", goPractice: "Vai agli esercizi", goChallenge: "Affronta la sfida", finishModule: "Completa il modulo",
      sectionDone: "Sezione completata", sectionDoneText: "Ottimo lavoro. Passiamo alla parte successiva.",
      modDoneTitle: "Modulo completato!", modDoneText: "Hai guadagnato il badge {b} e {x} XP bonus.",
      nextModule: "Modulo successivo", backMap: "Torna alla mappa",
      kind_choice: "Scegli", kind_predict: "Prevedi l'output", kind_order: "Metti in ordine", kind_fill: "Completa gli spazi",
      kind_bug: "Trova il bug", kind_trace: "Segui i valori", kind_match: "Abbina",
      typeOutput: "Scrivi esattamente cosa stampa il programma…", yourProgram: "Il tuo programma", pieces: "Pezzi (tocca per spostare)",
      tapToAdd: "Tocca i pezzi qui sotto nell'ordine giusto.", empty: "Vuoto", choose: "Scegli…",
      variables: "Variabili", objects: "Oggetti", noObjects: "Ancora nessun oggetto", step: "Passo {i} di {n}", restart: "Ricomincia", stepFwd: "Esegui riga",
      profile: "Il mio profilo", nickname: "Nickname", nicknameHelp: "Solo un nickname. Non servono email o nome vero.",
      color: "Colore", language: "Lingua", save: "Salva", saved: "Salvato",
      badges: "Badge", history: "Storico", noHistory: "Qui compariranno i tuoi traguardi.",
      statsXp: "XP", statsLevel: "Livello", statsModules: "Moduli",
      moveTitle: "Usa un altro dispositivo", moveText: "I progressi sono salvati solo in questo browser. Per continuare sul telefono o su un altro computer, copia questo codice e incollalo lì.",
      copy: "Copia codice", copied: "Copiato", importLabel: "Incolla un codice da un altro dispositivo", importBtn: "Carica progressi",
      importOk: "Progressi caricati.", importBad: "Il codice non sembra giusto. Copialo di nuovo e incollalo tutto.",
      resetTitle: "Ricomincia da zero", resetText: "Cancella tutti i progressi in questo browser.", resetBtn: "Cancella i miei progressi",
      resetSure: "Non si può annullare. Cancellare tutto?", resetYes: "Sì, cancella", cancel: "Annulla",
      placeTitle: "Scopri il tuo livello", placeIntro: "Otto domande brevi. Nessuna pressione: serve solo a capire da dove partire. Salta quelle che non sai.",
      placeSubmit: "Vedi il risultato", placeScore: "risposte giuste", placeStart: "Inizia da qui", placeRec: "Ti consigliamo di partire da",
      placeSoon: "Le lezioni di questa tappa sono in preparazione. Intanto puoi esplorare le tappe già aperte.",
      placeDontKnow: "Non lo so",
      newBadge: "Nuovo badge", levelUp: "Livello su!", levelUpText: "Hai raggiunto il livello {l}",
      footer: "I tuoi progressi restano in questo browser.", site: "Lezioni mi.Game",
      modulesCount: "{n} moduli", ofTotal: "{a} di {b}"
    }
  };
  var LANGS = ["en", "es", "it"];

  /* ---------- storage ---------- */
  var KEY = "migame-learn-v1";
  function detectLang() {
    var l = ((navigator.language || "en") + "").slice(0, 2).toLowerCase();
    return LANGS.indexOf(l) >= 0 ? l : "en";
  }
  function fresh() {
    return { v: 1, name: "", color: 0, lang: detectLang(), xp: 0, items: {}, learn: {}, modules: {}, badges: {}, history: [], placement: null, pos: {} };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var s = JSON.parse(raw); if (s && s.v === 1) return Object.assign(fresh(), s); }
    } catch (e) {}
    return fresh();
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- helpers ---------- */
  function t(k, vars) {
    var s = (UI[S.lang] && UI[S.lang][k]) || UI.en[k] || k;
    if (vars) Object.keys(vars).forEach(function (v) { s = s.split("{" + v + "}").join(vars[v]); });
    return s;
  }
  function tr(x) {
    if (x == null) return "";
    if (typeof x === "string") return x;
    return x[S.lang] || x.en || "";
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function mdInline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }
  function md(s) {
    var blocks = String(s || "").trim().split(/\n\s*\n/);
    return blocks.map(function (b) {
      var lines = b.split("\n");
      if (lines.every(function (l) { return /^\s*- /.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + mdInline(l.replace(/^\s*- /, "")) + "</li>"; }).join("") + "</ul>";
      }
      return "<p>" + lines.map(mdInline).join("<br>") + "</p>";
    }).join("");
  }
  function h(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function btn(label, cls, fn) {
    var b = h("button", "btn " + (cls || "btn-ghost"), label);
    b.type = "button";
    if (fn) b.addEventListener("click", fn);
    return b;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  function fmtDate(ts) {
    try { return new Date(ts).toLocaleDateString(S.lang, { day: "numeric", month: "short" }); } catch (e) { return ""; }
  }

  /* ---------- Java-style syntax highlighting ---------- */
  var KW = ("class extends implements interface new return this super if else for while do switch case break continue " +
    "public private protected static final abstract void int double float long boolean char byte short var " +
    "true false null import package instanceof try catch throw throws").split(" ");
  var KWSET = {}; KW.forEach(function (k) { KWSET[k] = 1; });
  function hl(line) {
    var re = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)')|(@[A-Za-z]+)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_]\w*\b)/g;
    var out = "", last = 0, m;
    while ((m = re.exec(line))) {
      out += esc(line.slice(last, m.index));
      var tok = m[0], cls = null;
      if (m[1]) cls = "c";
      else if (m[2] || m[3]) cls = "s";
      else if (m[4]) cls = "a";
      else if (m[5]) cls = "n";
      else if (KWSET[tok]) cls = "k";
      else if (/^[A-Z]/.test(tok)) cls = "t";
      out += cls ? '<span class="' + cls + '">' + esc(tok) + "</span>" : esc(tok);
      last = m.index + tok.length;
    }
    return out + esc(line.slice(last));
  }
  function codeLines(code) { return String(code).replace(/\s+$/, "").split("\n"); }
  function codeBlock(code, opts) {
    opts = opts || {};
    var box = h("div", "code");
    codeLines(code).forEach(function (line, i) {
      var l = h(opts.clickable ? "button" : "div", "l", hl(line) || " ");
      if (opts.clickable) l.type = "button";
      l.dataset.n = i + 1;
      if (opts.hl === i + 1) l.classList.add("hl");
      box.appendChild(l);
    });
    return box;
  }

  /* ---------- badges & glyphs ---------- */
  var GLYPH = {
    spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    coin: '<circle cx="12" cy="12" r="8"/><path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 010 3h-3a1.5 1.5 0 000 3h4"/>',
    crown: '<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/>',
    blueprint: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 10v10"/>',
    tree: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
    key: '<circle cx="8" cy="12" r="4"/><path d="M12 12h9M18 12v3M21 12v2"/>',
    flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>'
  };
  function medal(glyph, small) {
    return '<span class="medal' + (small ? " sm" : "") + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (GLYPH[glyph] || GLYPH.spark) + "</svg></span>";
  }
  var BASE_BADGES = [
    { id: "first", glyph: "spark", name: { en: "First step", es: "Primer paso", it: "Primo passo" }, desc: { en: "Solve your first exercise", es: "Resuelve tu primer ejercicio", it: "Risolvi il tuo primo esercizio" } },
    { id: "compass", glyph: "compass", name: { en: "Compass", es: "Brújula", it: "Bussola" }, desc: { en: "Take the level quiz", es: "Haz el test de nivel", it: "Fai il test di livello" } },
    { id: "clean", glyph: "bolt", name: { en: "Clean run", es: "Sin fallos", it: "Percorso netto" }, desc: { en: "Beat a challenge with no hints and no mistakes", es: "Supera un desafío sin pistas ni errores", it: "Supera una sfida senza suggerimenti né errori" } },
    { id: "xp250", glyph: "coin", name: { en: "Collector", es: "Coleccionista", it: "Collezionista" }, desc: { en: "Earn 250 XP", es: "Gana 250 XP", it: "Guadagna 250 XP" } },
    { id: "xp1000", glyph: "flag", name: { en: "Treasure", es: "Tesoro", it: "Tesoro" }, desc: { en: "Earn 1000 XP", es: "Gana 1000 XP", it: "Guadagna 1000 XP" } }
  ];
  function allBadges() {
    var list = BASE_BADGES.slice();
    MG.stages.forEach(function (st) {
      st.modules.forEach(function (e) {
        var m = MG.modules[e.id];
        if (m && m.badge) list.push({ id: "mod-" + m.id, glyph: m.badge.glyph, name: m.badge.name, desc: { en: "Complete " + tr(m.title), es: "Completa " + tr(m.title), it: "Completa " + tr(m.title) } });
      });
      if (st.badge) list.push({ id: "stage-" + st.id, glyph: st.badge.glyph, name: st.badge.name, desc: st.badge.desc || st.name });
    });
    return list;
  }
  function findBadge(id) { return allBadges().filter(function (b) { return b.id === id; })[0]; }
  function award(id) {
    if (S.badges[id]) return;
    S.badges[id] = Date.now();
    var b = findBadge(id);
    if (b) { log("badge", tr(b.name)); toast(medal(b.glyph, true), t("newBadge"), tr(b.name)); }
    save();
  }
  function log(kind, text) {
    S.history.unshift({ t: Date.now(), k: kind, x: text });
    S.history = S.history.slice(0, 60);
  }

  /* ---------- XP & levels ---------- */
  function levelOf(xp) { var n = 1; while (xp >= 50 * (n + 1) * n) n++; return n; }
  function levelFloor(n) { return 50 * n * (n - 1); }
  function addXP(n) {
    if (!n) return;
    var before = levelOf(S.xp);
    S.xp += n;
    var after = levelOf(S.xp);
    if (after > before) { log("level", t("levelUpText", { l: after })); toast(medal("crown", true), t("levelUp"), t("levelUpText", { l: after })); }
    if (S.xp >= 250) award("xp250");
    if (S.xp >= 1000) award("xp1000");
    save();
    renderTopbar();
  }

  /* ---------- course logic ---------- */
  var SECTIONS = ["learn", "quiz", "practice", "challenge"];
  function itemKey(m, it) { return m.id + ":" + it.id; }
  function sectionItems(m, sec) { return m[sec] || []; }
  function sectionDone(m, sec) {
    if (sec === "learn") return !!S.learn[m.id];
    return sectionItems(m, sec).every(function (it) { return S.items[itemKey(m, it)]; });
  }
  function sectionOpen(m, i) { return i === 0 || sectionDone(m, SECTIONS[i - 1]); }
  function moduleDone(m) { return SECTIONS.every(function (s) { return sectionDone(m, s); }); }
  function moduleProgress(m) {
    var total = 1, got = S.learn[m.id] ? 1 : 0;
    ["quiz", "practice", "challenge"].forEach(function (s) {
      sectionItems(m, s).forEach(function (it) { total++; if (S.items[itemKey(m, it)]) got++; });
    });
    return Math.round((got / total) * 100);
  }
  function stageOf(moduleId) {
    for (var i = 0; i < MG.stages.length; i++) {
      if (MG.stages[i].modules.some(function (e) { return e.id === moduleId; })) return i;
    }
    return -1;
  }
  function stageComplete(i) {
    var st = MG.stages[i];
    return st.modules.every(function (e) { var m = MG.modules[e.id]; return !m || moduleDone(m); });
  }
  function stageUnlocked(i) {
    if (i <= 0) return true;
    if (S.placement && S.placement.stage >= i) return true;
    return stageUnlocked(i - 1) && stageComplete(i - 1);
  }
  function moduleUnlocked(id) {
    var si = stageOf(id);
    if (si < 0 || !stageUnlocked(si)) return false;
    var mods = MG.stages[si].modules;
    for (var i = 0; i < mods.length; i++) {
      if (mods[i].id === id) return true;
      var m = MG.modules[mods[i].id];
      if (m && !moduleDone(m)) return false;
    }
    return false;
  }
  function nextTarget() {
    for (var i = 0; i < MG.stages.length; i++) {
      var mods = MG.stages[i].modules;
      for (var j = 0; j < mods.length; j++) {
        var m = MG.modules[mods[j].id];
        if (m && moduleUnlocked(m.id) && !moduleDone(m)) return m;
      }
    }
    return null;
  }
  function nextModuleAfter(m) {
    var flat = [];
    MG.stages.forEach(function (st) { st.modules.forEach(function (e) { if (MG.modules[e.id]) flat.push(MG.modules[e.id]); }); });
    var i = flat.indexOf(m);
    return flat[i + 1] && moduleUnlocked(flat[i + 1].id) ? flat[i + 1] : null;
  }

  /* ---------- toasts ---------- */
  var toastBox;
  function toast(icon, title, sub) {
    if (!toastBox) { toastBox = h("div", "toasts"); toastBox.setAttribute("aria-live", "polite"); document.body.appendChild(toastBox); }
    var e = h("div", "toast", icon + "<div><b>" + esc(title) + "</b><small>" + esc(sub || "") + "</small></div>");
    toastBox.appendChild(e);
    setTimeout(function () { e.remove(); }, 3600);
  }

  /* ---------- layout ---------- */
  var topbar, main;
  function avatarHtml(big) {
    var letter = (S.name || "?").trim().charAt(0).toUpperCase() || "?";
    return '<span class="avatar rc' + (S.color % 5) + (big ? " big" : "") + '" style="--av: var(--rc)">' + esc(letter) + "</span>";
  }
  function renderTopbar() {
    if (!topbar) return;
    topbar.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="#home"><b>mi.Game</b><span>/' + esc(t("tagline")) + "</span></a>" +
      '<div class="langs" role="group" aria-label="' + esc(t("language")) + '">' +
      LANGS.map(function (l) { return '<button type="button" data-lang="' + l + '" aria-pressed="' + (S.lang === l) + '">' + l.toUpperCase() + "</button>"; }).join("") +
      "</div>" +
      '<a class="chip-xp" href="#profile" title="' + esc(t("level")) + " " + levelOf(S.xp) + '"><i class="coin"></i>' + S.xp + " XP</a>" +
      '<a href="#profile" aria-label="' + esc(t("profile")) + '" style="text-decoration:none">' + avatarHtml() + "</a>" +
      "</div>";
    topbar.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { S.lang = b.dataset.lang; save(); document.documentElement.lang = S.lang; render(); });
    });
  }

  /* ---------- views ---------- */
  function viewHome() {
    var lvl = levelOf(S.xp), lo = levelFloor(lvl), hi = levelFloor(lvl + 1);
    var pct = Math.round(((S.xp - lo) / (hi - lo)) * 100);
    var target = nextTarget();
    var wrap = h("div");

    var hero = h("section", "hero");
    var hm = h("div", "hero-main");
    hm.innerHTML = "<h1>" + esc(S.name ? t("heroHi", { name: S.name }) : t("heroWelcome")) + "</h1><p>" + esc(t("heroText")) + "</p>";
    var actions = h("div", "row");
    if (target) actions.appendChild(btn((S.pos[target.id] ? t("continue") : t("start")) + ": " + esc(tr(target.title)), "btn-primary", function () { location.hash = "m-" + target.id; }));
    if (MG.placement) actions.appendChild(btn(S.placement ? t("placementRetake") : t("placementBtn"), "btn-ghost", function () { location.hash = "placement"; }));
    hm.appendChild(actions);
    hero.appendChild(hm);

    var earned = allBadges().filter(function (b) { return S.badges[b.id]; });
    var pl = h("div", "player");
    pl.innerHTML =
      '<div class="player-top">' + avatarHtml(true) + '<div><div class="eyebrow">' + esc(t("level")) + '</div><div class="lvl">' + lvl + "</div></div></div>" +
      '<div><div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div>' +
      '<div class="bar-legend"><span>' + S.xp + ' XP</span><span>' + esc(t("xpToNext", { n: hi - S.xp, l: lvl + 1 })) + "</span></div></div>" +
      '<div><div class="eyebrow" style="margin-bottom:6px">' + esc(t("badges")) + " · " + earned.length + "/" + allBadges().length + '</div><div class="mini-badges">' +
      (earned.length ? earned.slice(0, 8).map(function (b) { return '<span title="' + esc(tr(b.name)) + '">' + medal(b.glyph, true) + "</span>"; }).join("") : '<span class="muted" style="font-size:var(--s-sm)">' + esc(t("noHistory")) + "</span>") +
      "</div></div>";
    hero.appendChild(pl);
    wrap.appendChild(hero);

    var map = h("div", "map");
    MG.stages.forEach(function (st, i) {
      var open = stageUnlocked(i);
      var avail = st.modules.filter(function (e) { return MG.modules[e.id]; });
      var complete = avail.length > 0 && stageComplete(i) && avail.length === st.modules.length;
      var sec = h("section", "stage");
      sec.dataset.i = i;
      var state = complete ? '<span class="pill done">' + esc(t("stageDone")) + "</span>" : open ? '<span class="pill on">' + esc(t("stageOpen")) + "</span>" : '<span class="pill">' + esc(t("stageLocked")) + "</span>";
      sec.innerHTML = '<div class="stage-head"><div class="stage-num">' + (i + 1) + '</div><div class="txt"><h2>' + esc(tr(st.name)) + "</h2><p>" + esc(tr(st.blurb)) + "</p></div>" + state + "</div>";
      var ol = h("ol", "trail");
      st.modules.forEach(function (e, j) {
        var m = MG.modules[e.id];
        var li = h("li");
        var title = tr(m ? m.title : e.title);
        if (!m) {
          li.innerHTML = '<div class="node soon"><div class="ring"><span>' + (j + 1) + '</span></div><div class="node-title">' + esc(title) + '</div><div class="node-sub">' + esc(t("soon")) + "</div></div>";
        } else if (!moduleUnlocked(m.id)) {
          li.innerHTML = '<div class="node locked"><div class="ring"><span>' + (j + 1) + '</span></div><div class="node-title">' + esc(title) + '</div><div class="node-sub">' + esc(t("locked")) + "</div></div>";
        } else {
          var p = moduleProgress(m), d = moduleDone(m);
          li.innerHTML = '<a class="node' + (d ? " done" : "") + '" href="#m-' + esc(m.id) + '"><div class="ring" style="--p:' + p + '"><span>' + (d ? "✓" : j + 1) + '</span></div><div class="node-title">' + esc(title) + '</div><div class="node-sub">' + esc(d ? t("done") : p ? t("inProgress", { p: p }) : t("notStarted")) + "</div></a>";
        }
        ol.appendChild(li);
      });
      sec.appendChild(ol);
      map.appendChild(sec);
    });
    wrap.appendChild(map);
    return wrap;
  }

  /* ---------- placement quiz ---------- */
  function viewPlacement() {
    var P = MG.placement, wrap = h("div");
    if (!P) return wrap;
    wrap.innerHTML = '<div class="mod-head"><a class="back" href="#home">' + esc(t("back")) + "</a><h1>" + esc(t("placeTitle")) + "</h1><p>" + esc(t("placeIntro")) + "</p></div>";
    var panel = h("div", "panel");
    var answers = {};
    P.questions.forEach(function (q, qi) {
      var box = h("div", "pq");
      box.innerHTML = '<div class="eyebrow">' + (qi + 1) + " / " + P.questions.length + '</div><div class="ex-q prose">' + md(tr(q.q)) + "</div>";
      if (q.code) box.appendChild(codeBlock(q.code));
      var opts = h("div", "opts");
      var labels = q.options.map(tr).concat([t("placeDontKnow")]);
      var bs = labels.map(function (o, i) {
        var b = h("button", "opt", '<span class="opt-key">' + "ABCDEFG"[i] + "</span><span>" + mdInline(o) + "</span>");
        b.type = "button";
        b.addEventListener("click", function () {
          answers[qi] = i;
          bs.forEach(function (x, j) { x.classList.toggle("sel", i === j); x.setAttribute("aria-pressed", i === j); });
          submit.disabled = Object.keys(answers).length < P.questions.length;
        });
        opts.appendChild(b);
        return b;
      });
      box.appendChild(opts);
      panel.appendChild(box);
    });
    var foot = h("div", "panel-foot");
    var submit = btn(t("placeSubmit"), "btn-primary", function () {
      var score = 0;
      P.questions.forEach(function (q, qi) { if (answers[qi] === q.answer) score++; });
      var stage = 0;
      (P.bands || []).forEach(function (b) { if (score >= b.min) stage = b.stage; });
      S.placement = { score: score, total: P.questions.length, stage: stage, t: Date.now() };
      log("placement", tr(MG.stages[stage].name) + " (" + score + "/" + P.questions.length + ")");
      save();
      award("compass");
      showResult(score, stage);
    });
    submit.disabled = true;
    foot.appendChild(submit);
    panel.appendChild(foot);
    wrap.appendChild(panel);

    function showResult(score, stage) {
      var st = MG.stages[stage];
      var first = st.modules.map(function (e) { return MG.modules[e.id]; }).filter(Boolean)[0];
      panel.innerHTML = '<div class="result"><div class="big">' + score + "/" + P.questions.length + '</div><div class="muted">' + esc(t("placeScore")) + "</div><h2>" + esc(t("placeRec")) + '</h2><span class="stage-tag" data-i="' + stage + '">' + esc(tr(st.name)) + '</span><p class="prose" style="margin:16px auto">' + esc(tr(st.blurb)) + "</p></div>";
      var row = h("div", "row");
      row.style.justifyContent = "center";
      if (first) row.appendChild(btn(t("placeStart"), "btn-primary", function () { location.hash = "m-" + first.id; }));
      else { var p = h("p", "muted", esc(t("placeSoon"))); p.style.textAlign = "center"; panel.appendChild(p); }
      row.appendChild(btn(t("backMap"), "btn-ghost", function () { location.hash = "home"; }));
      panel.appendChild(row);
      window.scrollTo(0, 0);
    }
    return wrap;
  }

  /* ---------- module view ---------- */
  var ui = { mod: null, sec: "learn", slide: 0, idx: 0 };
  function enterModule(m) {
    if (ui.mod !== m.id) {
      var pos = S.pos[m.id];
      ui = { mod: m.id, sec: "learn", slide: 0, idx: 0 };
      if (pos) { ui.sec = pos.sec; ui.slide = pos.slide || 0; ui.idx = pos.idx || 0; }
      else { for (var i = 0; i < SECTIONS.length; i++) { if (!sectionDone(m, SECTIONS[i])) { ui.sec = SECTIONS[i]; break; } } }
    }
  }
  function remember(m) { S.pos[m.id] = { sec: ui.sec, slide: ui.slide, idx: ui.idx }; save(); }

  function viewModule(m) {
    enterModule(m);
    var wrap = h("div");
    var si = stageOf(m.id);
    var head = h("div", "mod-head");
    head.innerHTML = '<a class="back" href="#home">' + esc(t("back")) + '</a><div class="row"><span class="stage-tag" data-i="' + si + '" style="font-size:var(--s-sm);padding:3px 12px">' + esc(tr(MG.stages[si].name)) + "</span></div><h1>" + esc(tr(m.title)) + "</h1><p>" + esc(tr(m.summary)) + "</p>";
    wrap.appendChild(head);

    var tabs = h("div", "tabs");
    tabs.setAttribute("role", "tablist");
    SECTIONS.forEach(function (s, i) {
      var b = h("button", "tab" + (sectionDone(m, s) ? " done" : ""), '<span class="n">' + (i + 1) + "</span>" + esc(t(s)));
      b.type = "button";
      b.setAttribute("aria-current", ui.sec === s);
      if (!sectionOpen(m, i)) b.disabled = true;
      b.addEventListener("click", function () { ui.sec = s; ui.idx = firstUnsolved(m, s); remember(m); render(); });
      tabs.appendChild(b);
    });
    wrap.appendChild(tabs);

    var body = h("div", "panel");
    if (ui.sec === "learn") renderLearn(body, m);
    else renderItems(body, m, ui.sec);
    wrap.appendChild(body);
    return wrap;
  }
  function firstUnsolved(m, sec) {
    var items = sectionItems(m, sec);
    for (var i = 0; i < items.length; i++) if (!S.items[itemKey(m, items[i])]) return i;
    return 0;
  }

  function renderLearn(body, m) {
    var slides = m.learn || [];
    ui.slide = Math.min(ui.slide, slides.length - 1);
    var sl = slides[ui.slide];
    var head = h("div", "panel-head", "<h2>" + esc(tr(sl.title)) + '</h2><span class="counter">' + (ui.slide + 1) + " / " + slides.length + "</span>");
    body.appendChild(head);
    body.appendChild(h("div", "prose", md(tr(sl.text))));
    if (sl.viz && sl.viz.type === "memory") body.appendChild(memoryViz(sl.code, sl.viz));
    else {
      if (sl.code) body.appendChild(codeBlock(sl.code));
      if (sl.viz && sl.viz.type === "tree") body.appendChild(treeViz(sl.viz));
    }
    if (sl.after) body.appendChild(h("div", "prose", md(tr(sl.after))));
    var foot = h("div", "panel-foot");
    if (ui.slide > 0) foot.appendChild(btn(t("prev"), "btn-ghost", function () { ui.slide--; remember(m); render(); }));
    foot.appendChild(h("span", "spacer"));
    if (ui.slide < slides.length - 1) foot.appendChild(btn(t("next") + " →", "btn-primary", function () { ui.slide++; remember(m); render(); }));
    else foot.appendChild(btn(t("goQuiz") + " →", "btn-primary", function () {
      if (!S.learn[m.id]) { S.learn[m.id] = Date.now(); addXP(10); }
      ui.sec = "quiz"; ui.idx = firstUnsolved(m, "quiz"); remember(m); render();
      checkModuleDone(m);
    }));
    body.appendChild(foot);
  }

  function renderItems(body, m, sec) {
    var items = sectionItems(m, sec);
    if (!items.length) { body.appendChild(h("p", "muted", esc(t("soon")))); return; }
    ui.idx = Math.min(ui.idx, items.length - 1);
    var it = items[ui.idx];
    var dots = items.map(function (x, i) {
      return "<i class=\"" + (S.items[itemKey(m, x)] ? "ok" : "") + (i === ui.idx ? " cur" : "") + "\"></i>";
    }).join("");
    body.appendChild(h("div", "panel-head", '<div class="dots" aria-hidden="true">' + dots + '</div><span class="spacer"></span><span class="counter">' + (ui.idx + 1) + " / " + items.length + "</span>"));
    var foot = h("div", "panel-foot");
    var prev = btn(t("prev"), "btn-ghost", function () { ui.idx--; remember(m); render(); });
    if (ui.idx === 0) prev.disabled = true;
    exercise(body, it, m, sec, function () {
      foot.innerHTML = "";
      foot.appendChild(prev);
      foot.appendChild(h("span", "spacer"));
      if (ui.idx < items.length - 1) {
        foot.appendChild(btn(t("next") + " →", "btn-primary", function () { ui.idx++; remember(m); render(); }));
      } else if (sectionDone(m, sec)) {
        var si = SECTIONS.indexOf(sec);
        if (si < SECTIONS.length - 1) {
          var lbl = { quiz: t("goPractice"), practice: t("goChallenge") }[sec];
          foot.appendChild(btn(lbl + " →", "btn-primary", function () { ui.sec = SECTIONS[si + 1]; ui.idx = firstUnsolved(m, ui.sec); remember(m); render(); }));
        } else {
          foot.appendChild(btn(t("finishModule"), "btn-primary", function () { checkModuleDone(m, true); }));
        }
      } else {
        foot.appendChild(btn(t("next") + " →", "btn-primary", function () { ui.idx = firstUnsolved(m, sec); remember(m); render(); }));
      }
    });
    if (!foot.childNodes.length) { foot.appendChild(prev); }
    body.appendChild(foot);
  }

  function checkModuleDone(m, show) {
    if (!moduleDone(m)) return;
    var first = !S.modules[m.id];
    if (first) {
      S.modules[m.id] = Date.now();
      log("module", tr(m.title));
      addXP(50);
      award("mod-" + m.id);
      var clean = sectionItems(m, "challenge").every(function (it) { var r = S.items[itemKey(m, it)]; return r && r.perfect; });
      if (clean) award("clean");
      var si = stageOf(m.id);
      if (MG.stages[si].badge && MG.stages[si].modules.every(function (e) { return MG.modules[e.id] && moduleDone(MG.modules[e.id]); })) award("stage-" + MG.stages[si].id);
      save();
    }
    if (show || first) celebrate(m);
  }
  function celebrate(m) {
    var b = findBadge("mod-" + m.id) || BASE_BADGES[0];
    main.innerHTML = "";
    var w = h("div", "wrap");
    var p = h("div", "panel");
    p.innerHTML = '<div class="celebrate">' + medal(b.glyph) + "<h2>" + esc(t("modDoneTitle")) + '</h2><p class="prose">' + esc(t("modDoneText", { b: tr(b.name), x: 50 })) + "</p></div>";
    var row = h("div", "row");
    row.style.justifyContent = "center";
    var nx = nextModuleAfter(m);
    if (nx) row.appendChild(btn(t("nextModule") + ": " + esc(tr(nx.title)), "btn-primary", function () { location.hash = "m-" + nx.id; }));
    row.appendChild(btn(t("backMap"), nx ? "btn-ghost" : "btn-primary", function () { location.hash = "home"; render(); }));
    p.appendChild(row);
    w.appendChild(p);
    main.appendChild(w);
    window.scrollTo(0, 0);
  }

  /* ---------- exercise runner ---------- */
  function exercise(host, ex, m, sec, onSolved) {
    var key = itemKey(m, ex);
    var st = { fails: 0, hint: false, revealed: false, done: false };
    var box = h("div", "ex");
    box.innerHTML = '<div class="ex-kind">' + esc(t("kind_" + ex.type)) + '</div><div class="ex-q prose">' + md(tr(ex.q)) + "</div>";
    var body = h("div", "ex-body");
    box.appendChild(body);
    var impl = TYPES[ex.type](body, ex);
    var hintBox = h("div", "hint");
    hintBox.hidden = true;
    box.appendChild(hintBox);
    var actions = h("div", "ex-actions");
    var fb = h("div", "feedback");
    fb.setAttribute("aria-live", "polite");
    var checkBtn = btn(t("check"), "btn-primary", doCheck);
    actions.appendChild(checkBtn);
    if (ex.hint) {
      var hb = btn(t("hint"), "btn-ghost", function () { st.hint = true; hintBox.innerHTML = md(tr(ex.hint)); hintBox.hidden = false; hb.disabled = true; });
      actions.appendChild(hb);
    }
    var revealBtn = btn(t("showAnswer"), "btn-quiet", doReveal);
    revealBtn.hidden = true;
    actions.appendChild(revealBtn);
    box.appendChild(actions);
    box.appendChild(fb);
    host.appendChild(box);

    if (S.items[key]) {
      fb.className = "feedback info";
      fb.innerHTML = '<div class="fb-title">✓ ' + esc(t("alreadySolved")) + "</div>";
      setTimeout(function () { onSolved(); }, 0);
    }

    function doCheck() {
      if (st.done) return;
      var r = impl.check();
      if (r === null) { fb.className = "feedback info"; fb.innerHTML = '<div class="fb-title">' + esc(t(ex.type === "fill" || ex.type === "trace" || ex.type === "match" ? "fillFirst" : "chooseFirst")) + "</div>"; return; }
      if (r) {
        st.done = true;
        var gained = 0;
        if (!S.items[key]) {
          var base = sec === "challenge" ? 20 : 10;
          gained = st.fails ? Math.ceil(base / 2) : base;
          if (st.hint) gained = Math.max(2, gained - 3);
          S.items[key] = { xp: gained, perfect: !st.fails && !st.hint, t: Date.now() };
          save();
          award("first");
          addXP(gained);
        }
        fb.className = "feedback ok";
        fb.innerHTML = '<div class="fb-title">' + esc(t("correct")) + (gained ? ' <span class="xp-pop">+' + gained + " XP</span>" : "") + "</div>" + (ex.explain ? '<div class="prose">' + md(tr(ex.explain)) + "</div>" : "");
        lock();
        onSolved();
      } else {
        st.fails++;
        fb.className = "feedback bad";
        fb.innerHTML = '<div class="fb-title">' + esc(t("wrong")) + "</div>";
        if (st.fails >= 2) revealBtn.hidden = false;
      }
    }
    function doReveal() {
      st.revealed = true; st.done = true;
      impl.reveal();
      if (!S.items[key]) { S.items[key] = { xp: 0, perfect: false, t: Date.now() }; save(); }
      fb.className = "feedback info";
      fb.innerHTML = '<div class="fb-title">' + esc(t("revealed")) + "</div>" + (ex.explain ? '<div class="prose">' + md(tr(ex.explain)) + "</div>" : "");
      lock();
      onSolved();
    }
    function lock() { checkBtn.disabled = true; revealBtn.hidden = true; if (impl.lock) impl.lock(); }
  }

  /* ---------- exercise types ---------- */
  var TYPES = {
    choice: function (body, ex) {
      if (ex.code) body.appendChild(codeBlock(ex.code));
      var sel = -1, locked = false, list = h("div", "opts");
      var bs = ex.options.map(function (o, i) {
        var b = h("button", "opt", '<span class="opt-key">' + "ABCDEFG"[i] + "</span><span>" + mdInline(tr(o)) + "</span>");
        b.type = "button";
        b.addEventListener("click", function () {
          if (locked) return;
          sel = i;
          bs.forEach(function (x, j) { x.classList.remove("bad"); x.classList.toggle("sel", i === j); x.setAttribute("aria-pressed", i === j); });
        });
        list.appendChild(b);
        return b;
      });
      body.appendChild(list);
      return {
        check: function () { if (sel < 0) return null; var ok = sel === ex.answer; bs[sel].classList.add(ok ? "good" : "bad"); return ok; },
        reveal: function () { bs.forEach(function (x) { x.classList.remove("sel", "bad"); }); bs[ex.answer].classList.add("good"); },
        lock: function () { locked = true; }
      };
    },

    predict: function (body, ex) {
      body.appendChild(codeBlock(ex.code));
      var ta = h("textarea", "out");
      ta.placeholder = t("typeOutput");
      ta.spellcheck = false;
      ta.setAttribute("autocapitalize", "off");
      ta.setAttribute("aria-label", t("typeOutput"));
      body.appendChild(ta);
      function norm(s) { return String(s).replace(/\r/g, "").split("\n").map(function (l) { return l.replace(/\s+$/, ""); }).join("\n").trim(); }
      return {
        check: function () { if (!ta.value.trim()) return null; return norm(ta.value) === norm(ex.answer); },
        reveal: function () { ta.value = ex.answer; },
        lock: function () { ta.readOnly = true; }
      };
    },

    order: function (body, ex) {
      var lines = ex.lines.slice();
      var all = lines.concat(ex.extra || []).map(function (text, i) { return { text: text, i: i }; });
      var pool = shuffle(all), picked = [], locked = false;
      if (pool.length > 1) {
        var tries = 0;
        while (tries++ < 10 && pool.slice(0, lines.length).every(function (p, i) { return p.text === lines[i]; })) pool = shuffle(all);
      }
      body.appendChild(h("div", "zone-label", esc(t("yourProgram"))));
      var target = h("div", "zone target");
      body.appendChild(target);
      body.appendChild(h("div", "zone-label", esc(t("pieces"))));
      var poolEl = h("div", "zone pool");
      body.appendChild(poolEl);
      function draw() {
        target.innerHTML = ""; poolEl.innerHTML = "";
        if (!picked.length) target.appendChild(h("div", "empty", esc(t("tapToAdd"))));
        if (!pool.length) poolEl.appendChild(h("div", "empty", esc(t("empty"))));
        picked.forEach(function (p, i) { target.appendChild(chunk(p, function () { if (locked) return; picked.splice(i, 1); pool.push(p); draw(); })); });
        pool.forEach(function (p, i) { poolEl.appendChild(chunk(p, function () { if (locked) return; pool.splice(i, 1); picked.push(p); draw(); })); });
      }
      function chunk(p, fn) { var b = h("button", "chunk", hl(p.text) || " "); b.type = "button"; b.addEventListener("click", fn); return b; }
      draw();
      return {
        check: function () {
          if (!picked.length) return null;
          return picked.length === lines.length && picked.every(function (p, i) { return p.text === lines[i]; });
        },
        reveal: function () {
          picked = lines.map(function (text) { return { text: text }; });
          pool = (ex.extra || []).map(function (text) { return { text: text }; });
          draw();
        },
        lock: function () { locked = true; }
      };
    },

    fill: function (body, ex) {
      var box = h("div", "code"), inputs = [];
      codeLines(ex.code).forEach(function (line, i) {
        var l = h("div", "l");
        l.dataset.n = i + 1;
        var parts = line.split(/\[\[(.+?)\]\]/);
        parts.forEach(function (part, pi) {
          if (pi % 2 === 0) { if (part) l.appendChild(h("span", null, hl(part))); }
          else {
            var answers = part.split("|");
            var inp = h("input", "blank");
            inp.setAttribute("autocapitalize", "off");
            inp.setAttribute("autocomplete", "off");
            inp.spellcheck = false;
            inp.setAttribute("aria-label", "blank " + (inputs.length + 1));
            inp.style.width = Math.max(4, answers[0].length + 2) + "ch";
            inp._answers = answers;
            inputs.push(inp);
            l.appendChild(inp);
          }
        });
        if (!l.childNodes.length) l.innerHTML = " ";
        box.appendChild(l);
      });
      body.appendChild(box);
      return {
        check: function () {
          if (inputs.some(function (x) { return !x.value.trim(); })) return null;
          var ok = true;
          inputs.forEach(function (x) {
            var good = x._answers.indexOf(x.value.trim()) >= 0;
            x.classList.toggle("good", good); x.classList.toggle("bad", !good);
            if (!good) ok = false;
          });
          return ok;
        },
        reveal: function () { inputs.forEach(function (x) { x.value = x._answers[0]; x.classList.remove("bad"); x.classList.add("good"); }); },
        lock: function () { inputs.forEach(function (x) { x.readOnly = true; }); }
      };
    },

    bug: function (body, ex) {
      var box = codeBlock(ex.code, { clickable: true }), sel = -1, locked = false;
      var ls = Array.prototype.slice.call(box.children);
      ls.forEach(function (l, i) {
        l.addEventListener("click", function () {
          if (locked) return;
          sel = i + 1;
          ls.forEach(function (x, j) { x.classList.remove("bad"); x.classList.toggle("pick", j === i); });
        });
      });
      body.appendChild(box);
      return {
        check: function () { if (sel < 0) return null; var ok = sel === ex.line; ls[sel - 1].classList.remove("pick"); ls[sel - 1].classList.add(ok ? "good" : "bad"); return ok; },
        reveal: function () { ls.forEach(function (x) { x.classList.remove("pick", "bad"); }); ls[ex.line - 1].classList.add("good"); },
        lock: function () { locked = true; }
      };
    },

    trace: function (body, ex) {
      if (ex.code) body.appendChild(codeBlock(ex.code));
      var grid = h("div", "trace-grid"), inputs = [];
      ex.rows.forEach(function (r, i) {
        var id = "tr-" + ex.id + "-" + i;
        var lab = h("label", null, mdInline(tr(r.label)));
        lab.htmlFor = id;
        var inp = h("input");
        inp.id = id;
        inp.setAttribute("autocapitalize", "off");
        inp.setAttribute("autocomplete", "off");
        inp.spellcheck = false;
        inp._answers = String(r.answer).split("|");
        grid.appendChild(lab); grid.appendChild(inp);
        inputs.push(inp);
      });
      body.appendChild(grid);
      function norm(v) { return v.trim().replace(/^"(.*)"$/, "$1"); }
      return {
        check: function () {
          if (inputs.some(function (x) { return !x.value.trim(); })) return null;
          var ok = true;
          inputs.forEach(function (x) {
            var good = x._answers.map(norm).indexOf(norm(x.value)) >= 0;
            x.classList.toggle("good", good); x.classList.toggle("bad", !good);
            if (!good) ok = false;
          });
          return ok;
        },
        reveal: function () { inputs.forEach(function (x) { x.value = x._answers[0]; x.classList.remove("bad"); x.classList.add("good"); }); },
        lock: function () { inputs.forEach(function (x) { x.readOnly = true; }); }
      };
    },

    match: function (body, ex) {
      if (ex.code) body.appendChild(codeBlock(ex.code));
      var list = h("div", "match"), sels = [];
      ex.items.forEach(function (it, i) {
        var row = h("div", "match-row");
        var id = "mt-" + ex.id + "-" + i;
        var lab = h("label", null, mdInline(tr(it.left)));
        lab.htmlFor = id;
        var s = h("select");
        s.id = id;
        s.innerHTML = '<option value="">' + esc(t("choose")) + "</option>" + ex.options.map(function (o) { return '<option value="' + esc(tr(o)) + '">' + esc(tr(o)) + "</option>"; }).join("");
        s._answer = tr(it.answer);
        row.appendChild(lab); row.appendChild(s);
        list.appendChild(row);
        sels.push(s);
      });
      body.appendChild(list);
      var after = null;
      return {
        check: function () {
          if (sels.some(function (s) { return !s.value; })) return null;
          var ok = true;
          sels.forEach(function (s) { var g = s.value === s._answer; s.classList.toggle("good", g); s.classList.toggle("bad", !g); if (!g) ok = false; });
          return ok;
        },
        reveal: function () { sels.forEach(function (s) { s.value = s._answer; s.classList.remove("bad"); s.classList.add("good"); }); },
        lock: function () {
          sels.forEach(function (s) { s.disabled = true; });
          if (ex.tree && !after) { after = treeViz(ex.tree); body.appendChild(after); }
        }
      };
    }
  };

  /* ---------- visualizations ---------- */
  function refClass(v) { var n = parseInt(String(v).slice(1), 10) || 1; return "rc" + ((n - 1) % 5); }
  function valHtml(v) {
    if (v === null || v === undefined) return '<span class="muted">null</span>';
    var s = String(v);
    if (/^@\d+$/.test(s)) return '<span class="ref ' + refClass(s) + '">' + esc(s) + "</span>";
    return esc(s);
  }
  function memoryViz(code, viz) {
    var steps = viz.steps, i = 0;
    var root = h("div", "mem");
    var codeHost = h("div");
    var side = h("div", "mem-side");
    var note = h("div", "mem-note");
    note.setAttribute("aria-live", "polite");
    var vars = h("div", "mem-box");
    var objs = h("div", "mem-box");
    var cons = h("div", "console");
    side.appendChild(note); side.appendChild(vars); side.appendChild(objs); side.appendChild(cons);
    var ctrl = h("div", "mem-ctrl");
    var prev = btn("◀", "btn-ghost", function () { if (i > 0) { i--; draw(); } });
    prev.setAttribute("aria-label", t("prev"));
    var next = btn(t("stepFwd") + " ▶", "btn-primary", function () { if (i < steps.length - 1) { i++; draw(); } });
    var reset = btn(t("restart"), "btn-quiet", function () { i = 0; draw(); });
    var count = h("span", "counter");
    ctrl.appendChild(prev); ctrl.appendChild(next); ctrl.appendChild(count); ctrl.appendChild(h("span", "spacer")); ctrl.appendChild(reset);
    root.appendChild(codeHost); root.appendChild(side); root.appendChild(ctrl);

    function draw() {
      var s = steps[i], p = steps[i - 1] || {};
      codeHost.innerHTML = "";
      codeHost.appendChild(codeBlock(code, { hl: s.line }));
      note.innerHTML = mdInline(tr(s.note || ""));
      var frames = s.frames || [];
      var pframes = {};
      (p.frames || []).forEach(function (f) { pframes[f.name] = f.vars || {}; });
      vars.innerHTML = "<h4>" + esc(t("variables")) + "</h4>" + (frames.length ? frames.map(function (f, fi) {
        var pv = pframes[f.name] || {};
        var keys = Object.keys(f.vars || {});
        return '<div class="frame' + (fi === frames.length - 1 ? " top" : "") + '"><div class="frame-name">' + esc(f.name) + "</div>" +
          (keys.length ? keys.map(function (k) {
            var chg = i > 0 && pv[k] !== f.vars[k];
            return '<div class="kv' + (chg ? " chg" : "") + '"><b>' + esc(k) + "</b><span>" + valHtml(f.vars[k]) + "</span></div>";
          }).join("") : '<div class="empty-note">—</div>') + "</div>";
      }).join("") : '<div class="empty-note">—</div>');
      var pheap = {};
      (p.heap || []).forEach(function (o) { pheap[o.id] = o.fields || {}; });
      var heap = s.heap || [];
      objs.innerHTML = "<h4>" + esc(t("objects")) + "</h4>" + (heap.length ? '<div class="objs">' + heap.map(function (o) {
        var pf = pheap[o.id];
        return '<div class="obj ' + refClass(o.id) + '"><div class="obj-head"><span>' + esc(o.cls) + "</span><span>" + esc(o.id) + "</span></div>" +
          Object.keys(o.fields || {}).map(function (k) {
            var chg = i > 0 && (!pf || pf[k] !== o.fields[k]);
            return '<div class="kv' + (chg ? " chg" : "") + '"><b>' + esc(k) + "</b><span>" + valHtml(o.fields[k]) + "</span></div>";
          }).join("") + "</div>";
      }).join("") + "</div>" : '<div class="empty-note">' + esc(t("noObjects")) + "</div>");
      cons.textContent = (s.out || []).join("\n");
      count.textContent = t("step", { i: i + 1, n: steps.length });
      prev.disabled = i === 0;
      next.disabled = i === steps.length - 1;
    }
    draw();
    return root;
  }

  function treeViz(viz) {
    var nodes = viz.nodes || [];
    function kids(name) { return nodes.filter(function (n) { return (n.parent || null) === name; }); }
    function li(n) {
      var e = h("li");
      var members = (n.members || []).map(function (mb) {
        var ov = mb.charAt(0) === "^";
        return "<li><span>" + esc(ov ? mb.slice(1) : mb) + "</span>" + (ov ? '<span class="tag-ov">override</span>' : "") + "</li>";
      }).join("");
      e.innerHTML = '<div class="cls"><div class="cls-name">' + esc(n.name) + (n.parent ? " <small>extends " + esc(n.parent) + "</small>" : "") + "</div>" + (members ? "<ul>" + members + "</ul>" : "") + "</div>";
      var ch = kids(n.name);
      if (ch.length) { var ul = h("ul"); ch.forEach(function (c) { ul.appendChild(li(c)); }); e.appendChild(ul); }
      return e;
    }
    var root = h("ul", "tree");
    nodes.filter(function (n) { return !n.parent || !nodes.some(function (x) { return x.name === n.parent; }); }).forEach(function (n) { root.appendChild(li(n)); });
    return root;
  }

  /* ---------- profile ---------- */
  function viewProfile() {
    var wrap = h("div");
    wrap.innerHTML = '<div class="mod-head"><a class="back" href="#home">' + esc(t("back")) + "</a><h1>" + esc(t("profile")) + "</h1></div>";
    var grid = h("div", "prof");

    var me = h("div", "card");
    var doneMods = Object.keys(S.modules).length;
    me.innerHTML =
      '<div class="row" style="margin-bottom:16px">' + avatarHtml(true) + '<div><h2 style="margin:0">' + esc(S.name || "—") + '</h2><div class="muted">' + esc(t("level")) + " " + levelOf(S.xp) + "</div></div></div>" +
      '<div class="field"><label for="pf-name">' + esc(t("nickname")) + '</label><input id="pf-name" maxlength="24" autocomplete="off" value="' + esc(S.name) + '"><small class="muted">' + esc(t("nicknameHelp")) + "</small></div>" +
      '<div class="field"><span style="font-weight:700;font-size:var(--s-sm)">' + esc(t("color")) + '</span><div class="swatches">' +
      [0, 1, 2, 3, 4].map(function (c) { return '<button type="button" class="rc' + c + '" style="background:var(--rc)" data-c="' + c + '" aria-pressed="' + (S.color % 5 === c) + '" aria-label="' + esc(t("color")) + " " + (c + 1) + '"></button>'; }).join("") +
      "</div></div>" +
      '<div class="field"><label for="pf-lang">' + esc(t("language")) + '</label><select id="pf-lang">' +
      [["en", "English"], ["es", "Español"], ["it", "Italiano"]].map(function (l) { return '<option value="' + l[0] + '"' + (S.lang === l[0] ? " selected" : "") + ">" + l[1] + "</option>"; }).join("") + "</select></div>";
    var saveBtn = btn(t("save"), "btn-primary", function () {
      S.name = me.querySelector("#pf-name").value.trim().slice(0, 24);
      S.lang = me.querySelector("#pf-lang").value;
      document.documentElement.lang = S.lang;
      save(); render(); toast(medal("spark", true), t("saved"), "");
    });
    me.appendChild(saveBtn);
    me.appendChild(h("div", "stats",
      '<div class="stat"><b>' + S.xp + "</b><span>" + esc(t("statsXp")) + '</span></div><div class="stat"><b>' + levelOf(S.xp) + "</b><span>" + esc(t("statsLevel")) + '</span></div><div class="stat"><b>' + doneMods + "</b><span>" + esc(t("statsModules")) + "</span></div>"));
    me.querySelectorAll("[data-c]").forEach(function (b) {
      b.addEventListener("click", function () { S.color = +b.dataset.c; save(); render(); });
    });
    grid.appendChild(me);

    var right = h("div", "stack");
    var bc = h("div", "card");
    bc.innerHTML = "<h2>" + esc(t("badges")) + '</h2><div class="badges">' + allBadges().map(function (b) {
      return '<div class="badge' + (S.badges[b.id] ? "" : " off") + '">' + medal(b.glyph) + "<b>" + esc(tr(b.name)) + "</b><span>" + esc(tr(b.desc)) + "</span></div>";
    }).join("") + "</div>";
    right.appendChild(bc);

    var hc = h("div", "card");
    hc.innerHTML = "<h2>" + esc(t("history")) + "</h2>" + (S.history.length ? '<ul class="hist">' + S.history.slice(0, 20).map(function (e) {
      var label = e.k === "badge" ? t("newBadge") + ": " : e.k === "level" ? "" : e.k === "module" ? "✓ " : e.k === "placement" ? t("placeTitle") + ": " : "";
      return "<li><span>" + esc(label + e.x) + "</span><time>" + esc(fmtDate(e.t)) + "</time></li>";
    }).join("") + "</ul>" : '<p class="muted">' + esc(t("noHistory")) + "</p>");
    right.appendChild(hc);

    var mc = h("div", "card");
    var code = exportCode();
    mc.innerHTML = "<h2>" + esc(t("moveTitle")) + '</h2><p class="muted" style="margin-top:0">' + esc(t("moveText")) + '</p><div class="field"><textarea id="pf-code" readonly>' + esc(code) + "</textarea></div>";
    var copyBtn = btn(t("copy"), "btn-ghost", function () {
      var ta = mc.querySelector("#pf-code");
      function fallback() { ta.focus(); ta.select(); }
      try {
        navigator.clipboard.writeText(code).then(function () { copyBtn.textContent = t("copied"); }, fallback);
      } catch (e) { fallback(); }
    });
    mc.appendChild(copyBtn);
    var imp = h("div", "field", '<label for="pf-import" style="margin-top:16px">' + esc(t("importLabel")) + '</label><textarea id="pf-import"></textarea>');
    mc.appendChild(imp);
    var msg = h("p", "muted");
    mc.appendChild(btn(t("importBtn"), "btn-primary", function () {
      var ok = importCode(mc.querySelector("#pf-import").value);
      if (ok) { render(); toast(medal("spark", true), t("importOk"), ""); }
      else msg.textContent = t("importBad");
    }));
    mc.appendChild(msg);
    right.appendChild(mc);

    var rc = h("div", "card");
    rc.innerHTML = "<h2>" + esc(t("resetTitle")) + '</h2><p class="muted" style="margin-top:0">' + esc(t("resetText")) + "</p>";
    var conf = h("div", "confirm");
    conf.hidden = true;
    conf.innerHTML = "<p style=\"margin:0 0 10px\">" + esc(t("resetSure")) + "</p>";
    var crow = h("div", "row");
    crow.appendChild(btn(t("resetYes"), "btn-primary", function () {
      var lang = S.lang; S = fresh(); S.lang = lang; save(); ui = { mod: null, sec: "learn", slide: 0, idx: 0 }; location.hash = "home"; render();
    }));
    crow.appendChild(btn(t("cancel"), "btn-ghost", function () { conf.hidden = true; }));
    conf.appendChild(crow);
    rc.appendChild(btn(t("resetBtn"), "btn-ghost", function () { conf.hidden = false; }));
    rc.appendChild(conf);
    right.appendChild(rc);

    grid.appendChild(right);
    wrap.appendChild(grid);
    return wrap;
  }
  function exportCode() {
    try { return "MG1:" + btoa(unescape(encodeURIComponent(JSON.stringify(S)))); } catch (e) { return ""; }
  }
  function importCode(txt) {
    try {
      var s = String(txt || "").trim();
      if (s.indexOf("MG1:") !== 0) return false;
      var data = JSON.parse(decodeURIComponent(escape(atob(s.slice(4)))));
      if (!data || data.v !== 1 || typeof data.xp !== "number") return false;
      S = Object.assign(fresh(), data);
      save();
      ui = { mod: null, sec: "learn", slide: 0, idx: 0 };
      return true;
    } catch (e) { return false; }
  }

  /* ---------- router ---------- */
  function render() {
    renderTopbar();
    var hash = (location.hash || "").replace(/^#/, "") || "home";
    var view;
    if (hash === "profile") view = viewProfile();
    else if (hash === "placement") view = viewPlacement();
    else if (hash.indexOf("m-") === 0 && MG.modules[hash.slice(2)] && moduleUnlocked(hash.slice(2))) view = viewModule(MG.modules[hash.slice(2)]);
    else view = viewHome();
    main.innerHTML = "";
    var w = h("div", "wrap");
    w.appendChild(view);
    main.appendChild(w);
    var foot = document.querySelector("footer.site .wrap");
    if (foot) foot.innerHTML = "<span>" + esc(t("footer")) + '</span><a href="' + esc(MG.homeUrl || "/") + '">' + esc(t("site")) + " ↗</a>";
  }

  /* ---------- boot ---------- */
  function loadContent(done) {
    var pending = [];
    MG.stages.forEach(function (st) { st.modules.forEach(function (e) { if (!e.soon && !MG.modules[e.id]) pending.push(e.id); }); });
    if (!pending.length) return done();
    var left = pending.length;
    pending.forEach(function (id) {
      var s = document.createElement("script");
      s.src = (MG.contentPath || "content/") + id + ".js";
      s.onload = s.onerror = function () { if (--left === 0) done(); };
      document.head.appendChild(s);
    });
  }
  MG.start = function () {
    document.documentElement.lang = S.lang;
    topbar = document.querySelector(".topbar");
    main = document.querySelector("main");
    loadContent(function () {
      render();
      window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
    });
  };
})();
