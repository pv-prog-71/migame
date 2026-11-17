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
      missionN: "Mission {n}", lineHint: "Not yet: the values are right, but with println, unlike print, the program prints on a new line.", markedWrong: "Not yet: check the parts marked with ✗.", caseHint: "Remember: words must be written exactly as expected, capital and small letters included.", newPart: "New part for your robot", parts: "Robot parts", partsHow: "Every mission you complete adds a part to your robot.", partFrom: "{l} · mission {n}", medalsHow: "Medals give you extra experience.", xpExp: "Experience", nextTitle: "Next mission", demoProgram: "Example program: press Play to watch it", loginTitle: "Enter your area", loginText: "Your teacher gave you a nickname and a secret code.", loginCode: "Secret code", loginShow: "Show code", loginBtn: "Enter", loginHelp: "Lost your code? Ask your teacher.", teacherLink: "I'm the teacher →", logout: "Log out", logoutTitle: "Leave", logoutText: "Your progress is saved. Log out if someone else uses this device.", badLogin: "Nickname or code not right. Check them and try again.", tooMany: "Too many tries. Wait a few minutes and try again.", network: "No connection. Check the internet and try again.", generic: "Something went wrong. Try again.", notActive: "This account is not active. Ask your teacher.", loadingTxt: "Loading…", nickFixed: "Your teacher chose your nickname.", resetTextCloud: "Deletes all your progress, on every device.", memArrow: "**→ Dog 1** means: this variable points to the object *Dog 1* (same colour).", worldN: "Level {n}", nextCard: "Next step", lockedWorld: "Finish {w} to unlock this level, or take the level test.", startHere: "Start here!", starsLabel: "Stars", levelsDone: "Missions",
      yourRobot: "Your robot", memStart: "Ready! The program hasn't started yet. Press **Next line ▶** to run the first line.", memNext: "Next line", memMain: "Program", memTemp: "temporary: they disappear at the end", memNoVars: "no variables yet", memOut: "What the program prints",
      starsText: "{n} of 3 stars", starsHow: "1 star: finish the mission. 2 stars: without using “Show the answer”. 3 stars: beat the boss with no mistakes and no hints.", placeUnlocked: "Unlocked levels",
      run: "Run ▶", play: "Play", clear: "Clear", blocksLabel: "Blocks: tap to add", dropMain: "Tap a block above to start", dropInside: "Tap a block to put it inside", addHere: "New blocks go here",
      addBlocks: "Add some blocks first.", w_move: "move forward", w_turnLeft: "turn left", w_turnRight: "turn right", w_repeat: "repeat {n} times", words: "Words",
      res_wall: "Ouch! Bit bumped into a wall.", res_noflag: "Bit stopped before the flag.", res_stars: "Bit reached the flag but missed some stars.",
      tooMany: "Bit made it! Now do it with at most {n} blocks.", maxBlocks: "max {n} blocks", blocksCount: "{a} blocks", demoOk: "Bit made it!", kind_grid: "Program Bit",
      tagline: "learn", heroHi: "Hi, {name}!", heroWelcome: "Ready to play?",
      heroText: "Learn to code one step at a time. Complete missions, upgrade your robot and gain experience.",
      continue: "Continue", start: "Start", placementBtn: "Find your level", placementRetake: "Retake the level test",
      stageLocked: "Locked", stageOpen: "Open", stageDone: "Complete",
      soon: "Coming soon", locked: "Locked", done: "Done", inProgress: "{p}% done", notStarted: "Not started",
      learn: "Learn", quiz: "Quiz", practice: "Practice", challenge: "Boss",
      back: "← Map", check: "Check", next: "Next", prev: "Back", hint: "Hint", showAnswer: "Show the answer",
      correct: "Correct!", wrong: "Not yet. Look again and try once more.", chooseFirst: "Pick an answer first.",
      fillFirst: "Fill in every blank first.", revealed: "Here is the answer.", alreadySolved: "Already solved. You can try it again for practice.",
      goQuiz: "Start the quiz", goPractice: "Go to practice", goChallenge: "Face the boss", finishModule: "Finish the mission",
      sectionDone: "Section complete", sectionDoneText: "Nice work. On to the next part.",
      modDoneTitle: "Mission complete!", modDoneText: "New part for your robot: {b}. +{x} XP.",
      nextModule: "Next mission", backMap: "Back to the map",
      kind_choice: "Choose", kind_predict: "Predict the output", kind_order: "Put in order", kind_fill: "Fill the blanks",
      kind_bug: "Find the bug", kind_trace: "Trace the values", kind_match: "Match",
      typeOutput: "Type exactly what the program prints…", yourProgram: "Your program", pieces: "Pieces (tap to move)",
      tapToAdd: "Tap the pieces below in the right order.", empty: "Nothing here", choose: "Choose…",
      variables: "Variables", objects: "Objects", noObjects: "No objects yet", step: "{i} / {n}", restart: "Restart", stepFwd: "Run line",
      profile: "My profile", nickname: "Nickname", nicknameHelp: "Just a nickname. No email or real name needed.",
      color: "Colour", language: "Language", save: "Save", saved: "Saved",
      badges: "Medals", history: "History", noHistory: "Your achievements will show up here.",
      statsXp: "Experience", statsModules: "Missions",
      resetTitle: "Start over", resetText: "Deletes all progress in this browser.", resetBtn: "Delete my progress",
      resetSure: "This can't be undone. Delete everything?", resetYes: "Yes, delete", cancel: "Cancel",
      placeTitle: "Find your level", placeIntro: "Eight short questions. No pressure: it only tells you where to start. Skip any you don't know.",
      placeSubmit: "See my result", placeScore: "correct answers", placeStart: "Start here", placeRec: "We suggest you start with",
      placeSoon: "The missions of this level are being prepared. Meanwhile you can play the levels that are already open.",
      placeDontKnow: "I don't know",
      newBadge: "New medal", footer: "Your progress stays in this browser.", site: "mi.Game lessons",
      modulesCount: "{n} missions", ofTotal: "{a} of {b}"
    },
    es: {
      missionN: "Misión {n}", lineHint: "Todavía no: los valores son correctos, pero con println, a diferencia de print, el programa escribe en una línea nueva.", markedWrong: "Todavía no: revisa las partes marcadas con ✗.", caseHint: "Recuerda: las palabras se escriben exactamente como se espera, distinguiendo mayúsculas y minúsculas.", newPart: "Pieza nueva para tu robot", parts: "Piezas del robot", partsHow: "Cada misión que completas añade una pieza a tu robot.", partFrom: "{l} · misión {n}", medalsHow: "Las medallas te dan experiencia extra.", xpExp: "Experiencia", nextTitle: "Próxima misión", demoProgram: "Programa de ejemplo: pulsa Reproducir para verlo", loginTitle: "Entra en tu área", loginText: "Tu profe te ha dado un apodo y un código secreto.", loginCode: "Código secreto", loginShow: "Ver el código", loginBtn: "Entrar", loginHelp: "¿Has perdido el código? Pídeselo a tu profe.", teacherLink: "Soy el profe →", logout: "Salir", logoutTitle: "Salir", logoutText: "Tu progreso está guardado. Sal si otra persona usa este dispositivo.", badLogin: "El apodo o el código no son correctos. Revísalos y vuelve a intentarlo.", tooMany: "Demasiados intentos. Espera unos minutos y vuelve a intentarlo.", network: "No hay conexión. Revisa internet y vuelve a intentarlo.", generic: "Algo ha ido mal. Vuelve a intentarlo.", notActive: "Esta cuenta no está activa. Pregunta a tu profe.", loadingTxt: "Cargando…", nickFixed: "Tu apodo lo elige tu profe.", resetTextCloud: "Borra todo tu progreso, en todos los dispositivos.", memArrow: "**→ Dog 1** significa: esta variable apunta al objeto *Dog 1* (mismo color).", worldN: "Nivel {n}", nextCard: "Siguiente paso", lockedWorld: "Termina {w} para desbloquear este nivel, o haz el test de nivel.", startHere: "¡Empieza aquí!", starsLabel: "Estrellas", levelsDone: "Misiones",
      yourRobot: "Tu robot", memStart: "¡Listo! El programa todavía no ha empezado. Pulsa **Siguiente línea ▶** para ejecutar la primera línea.", memNext: "Siguiente línea", memMain: "Programa", memTemp: "temporales: desaparecen al final", memNoVars: "aún no hay variables", memOut: "Lo que imprime el programa",
      starsText: "{n} de 3 estrellas", starsHow: "1 estrella: terminas la misión. 2 estrellas: sin usar “Ver la respuesta”. 3 estrellas: vences al jefe sin errores ni pistas.", placeUnlocked: "Niveles desbloqueados",
      run: "Ejecutar ▶", play: "Reproducir", clear: "Borrar todo", blocksLabel: "Bloques: toca para añadir", dropMain: "Toca un bloque de arriba para empezar", dropInside: "Toca un bloque para meterlo dentro", addHere: "Los bloques nuevos van aquí",
      addBlocks: "Primero añade algunos bloques.", w_move: "avanzar", w_turnLeft: "girar a la izquierda", w_turnRight: "girar a la derecha", w_repeat: "repetir {n} veces", words: "Palabras",
      res_wall: "¡Ay! Bit se ha chocado con una pared.", res_noflag: "Bit se ha parado antes de la bandera.", res_stars: "Bit llegó a la bandera, pero le faltan estrellas.",
      tooMany: "¡Bit lo logró! Ahora hazlo con {n} bloques como máximo.", maxBlocks: "máx. {n} bloques", blocksCount: "{a} bloques", demoOk: "¡Bit lo consiguió!", kind_grid: "Programa a Bit",
      tagline: "aprende", heroHi: "¡Hola, {name}!", heroWelcome: "¿Listo para jugar?",
      heroText: "Aprende a programar paso a paso. Completa misiones, mejora tu robot y gana experiencia.",
      continue: "Continuar", start: "Empezar", placementBtn: "Descubre tu nivel", placementRetake: "Repetir el test de nivel",
      stageLocked: "Bloqueada", stageOpen: "Abierta", stageDone: "Completada",
      soon: "Próximamente", locked: "Bloqueado", done: "Hecho", inProgress: "{p}% hecho", notStarted: "Sin empezar",
      learn: "Aprende", quiz: "Quiz", practice: "Práctica", challenge: "Jefe",
      back: "← Mapa", check: "Comprobar", next: "Siguiente", prev: "Atrás", hint: "Pista", showAnswer: "Ver la respuesta",
      correct: "¡Correcto!", wrong: "Todavía no. Míralo otra vez e inténtalo de nuevo.", chooseFirst: "Primero elige una respuesta.",
      fillFirst: "Primero rellena todos los huecos.", revealed: "Esta es la respuesta.", alreadySolved: "Ya resuelto. Puedes repetirlo para practicar.",
      goQuiz: "Empezar el quiz", goPractice: "Ir a la práctica", goChallenge: "Enfréntate al jefe", finishModule: "Terminar la misión",
      sectionDone: "Sección completada", sectionDoneText: "Buen trabajo. Vamos a la siguiente parte.",
      modDoneTitle: "¡Misión cumplida!", modDoneText: "Pieza nueva para tu robot: {b}. +{x} XP.",
      nextModule: "Siguiente misión", backMap: "Volver al mapa",
      kind_choice: "Elige", kind_predict: "Adivina la salida", kind_order: "Ordena", kind_fill: "Rellena los huecos",
      kind_bug: "Encuentra el error", kind_trace: "Sigue los valores", kind_match: "Relaciona",
      typeOutput: "Escribe exactamente lo que imprime el programa…", yourProgram: "Tu programa", pieces: "Piezas (toca para mover)",
      tapToAdd: "Toca las piezas de abajo en el orden correcto.", empty: "Vacío", choose: "Elige…",
      variables: "Variables", objects: "Objetos", noObjects: "Aún no hay objetos", step: "{i} / {n}", restart: "Reiniciar", stepFwd: "Ejecutar línea",
      profile: "Mi perfil", nickname: "Apodo", nicknameHelp: "Solo un apodo. No hace falta email ni nombre real.",
      color: "Color", language: "Idioma", save: "Guardar", saved: "Guardado",
      badges: "Medallas", history: "Historial", noHistory: "Aquí aparecerán tus logros.",
      statsXp: "Experiencia", statsModules: "Misiones",
      resetTitle: "Empezar de cero", resetText: "Borra todo el progreso de este navegador.", resetBtn: "Borrar mi progreso",
      resetSure: "No se puede deshacer. ¿Borrar todo?", resetYes: "Sí, borrar", cancel: "Cancelar",
      placeTitle: "Descubre tu nivel", placeIntro: "Ocho preguntas cortas. Sin presión: solo sirve para saber por dónde empezar. Salta las que no sepas.",
      placeSubmit: "Ver mi resultado", placeScore: "respuestas correctas", placeStart: "Empezar aquí", placeRec: "Te sugerimos empezar por",
      placeSoon: "Las misiones de este nivel se están preparando. Mientras tanto puedes jugar los niveles ya abiertos.",
      placeDontKnow: "No lo sé",
      newBadge: "Nueva medalla", footer: "Tu progreso se queda en este navegador.", site: "Clases de mi.Game",
      modulesCount: "{n} misiones", ofTotal: "{a} de {b}"
    },
    it: {
      missionN: "Missione {n}", lineHint: "Non ancora: i valori sono giusti, ma con println, invece di print, il programma stampa su una riga nuova.", markedWrong: "Non ancora: rivedi le parti segnate con ✗.", caseHint: "Ricorda: le parole vanno scritte esattamente come previsto, distinguendo maiuscole e minuscole.", newPart: "Nuovo pezzo per il tuo robot", parts: "Pezzi del robot", partsHow: "Ogni missione completata aggiunge un pezzo al tuo robot.", partFrom: "{l} · missione {n}", medalsHow: "Le medaglie ti danno esperienza in più.", xpExp: "Esperienza", nextTitle: "Prossima missione", demoProgram: "Programma di esempio: premi Avvia per vederlo", loginTitle: "Entra nella tua area", loginText: "Il tuo insegnante ti ha dato un nickname e un codice segreto.", loginCode: "Codice segreto", loginShow: "Mostra il codice", loginBtn: "Entra", loginHelp: "Hai perso il codice? Chiedilo al tuo insegnante.", teacherLink: "Sono l'insegnante →", logout: "Esci", logoutTitle: "Esci", logoutText: "I tuoi progressi sono salvati. Esci se qualcun altro usa questo dispositivo.", badLogin: "Nickname o codice non giusti. Controllali e riprova.", tooMany: "Troppi tentativi. Aspetta qualche minuto e riprova.", network: "Nessuna connessione. Controlla internet e riprova.", generic: "Qualcosa è andato storto. Riprova.", notActive: "Questo account non è attivo. Chiedi al tuo insegnante.", loadingTxt: "Caricamento…", nickFixed: "Il nickname lo sceglie il tuo insegnante.", resetTextCloud: "Cancella tutti i tuoi progressi, su tutti i dispositivi.", memArrow: "**→ Dog 1** vuol dire: questa variabile indica l'oggetto *Dog 1* (stesso colore).", worldN: "Livello {n}", nextCard: "Prossimo passo", lockedWorld: "Completa {w} per sbloccare questo livello, oppure fai il test di livello.", startHere: "Inizia qui!", starsLabel: "Stelle", levelsDone: "Missioni",
      yourRobot: "Il tuo robot", memStart: "Pronti! Il programma non è ancora partito. Premi **Riga successiva ▶** per eseguire la prima riga.", memNext: "Riga successiva", memMain: "Programma", memTemp: "temporanee: spariscono alla fine", memNoVars: "ancora nessuna variabile", memOut: "Cosa stampa il programma",
      starsText: "{n} stelle su 3", starsHow: "1 stella: completi la missione. 2 stelle: senza usare “Mostra la risposta”. 3 stelle: batti il boss senza errori né suggerimenti.", placeUnlocked: "Livelli sbloccati",
      run: "Esegui ▶", play: "Avvia", clear: "Cancella tutto", blocksLabel: "Blocchi: tocca per aggiungere", dropMain: "Tocca un blocco qui sopra per iniziare", dropInside: "Tocca un blocco per metterlo dentro", addHere: "I nuovi blocchi vanno qui",
      addBlocks: "Prima aggiungi qualche blocco.", w_move: "vai avanti", w_turnLeft: "gira a sinistra", w_turnRight: "gira a destra", w_repeat: "ripeti {n} volte", words: "Parole",
      res_wall: "Ahi! Bit ha sbattuto contro un muro.", res_noflag: "Bit si è fermato prima della bandiera.", res_stars: "Bit è arrivato alla bandiera, ma ha perso qualche stella.",
      tooMany: "Bit ce l'ha fatta! Ora fallo con al massimo {n} blocchi.", maxBlocks: "max {n} blocchi", blocksCount: "{a} blocchi", demoOk: "Bit ce l'ha fatta!", kind_grid: "Programma Bit",
      tagline: "impara", heroHi: "Ciao, {name}!", heroWelcome: "Pronto a giocare?",
      heroText: "Impara a programmare un passo alla volta. Completa le missioni, potenzia il tuo robot e guadagna esperienza.",
      continue: "Continua", start: "Inizia", placementBtn: "Scopri il tuo livello", placementRetake: "Rifai il test di livello",
      stageLocked: "Bloccata", stageOpen: "Aperta", stageDone: "Completata",
      soon: "In arrivo", locked: "Bloccato", done: "Fatto", inProgress: "{p}% fatto", notStarted: "Da iniziare",
      learn: "Impara", quiz: "Quiz", practice: "Esercizi", challenge: "Boss",
      back: "← Mappa", check: "Verifica", next: "Avanti", prev: "Indietro", hint: "Suggerimento", showAnswer: "Mostra la risposta",
      correct: "Giusto!", wrong: "Non ancora. Guarda di nuovo e riprova.", chooseFirst: "Prima scegli una risposta.",
      fillFirst: "Prima completa tutti gli spazi.", revealed: "Ecco la risposta.", alreadySolved: "Già risolto. Puoi rifarlo per esercitarti.",
      goQuiz: "Inizia il quiz", goPractice: "Vai agli esercizi", goChallenge: "Affronta il boss", finishModule: "Completa la missione",
      sectionDone: "Sezione completata", sectionDoneText: "Ottimo lavoro. Passiamo alla parte successiva.",
      modDoneTitle: "Missione compiuta!", modDoneText: "Nuovo pezzo per il tuo robot: {b}. +{x} XP.",
      nextModule: "Prossima missione", backMap: "Torna alla mappa",
      kind_choice: "Scegli", kind_predict: "Prevedi l'output", kind_order: "Metti in ordine", kind_fill: "Completa gli spazi",
      kind_bug: "Trova il bug", kind_trace: "Segui i valori", kind_match: "Abbina",
      typeOutput: "Scrivi esattamente cosa stampa il programma…", yourProgram: "Il tuo programma", pieces: "Pezzi (tocca per spostare)",
      tapToAdd: "Tocca i pezzi qui sotto nell'ordine giusto.", empty: "Vuoto", choose: "Scegli…",
      variables: "Variabili", objects: "Oggetti", noObjects: "Ancora nessun oggetto", step: "{i} / {n}", restart: "Ricomincia", stepFwd: "Esegui riga",
      profile: "Il mio profilo", nickname: "Nickname", nicknameHelp: "Solo un nickname. Non servono email o nome vero.",
      color: "Colore", language: "Lingua", save: "Salva", saved: "Salvato",
      badges: "Medaglie", history: "Storico", noHistory: "Qui compariranno i tuoi traguardi.",
      statsXp: "Esperienza", statsModules: "Missioni",
      resetTitle: "Ricomincia da zero", resetText: "Cancella tutti i progressi in questo browser.", resetBtn: "Cancella i miei progressi",
      resetSure: "Non si può annullare. Cancellare tutto?", resetYes: "Sì, cancella", cancel: "Annulla",
      placeTitle: "Scopri il tuo livello", placeIntro: "Otto domande brevi. Nessuna pressione: serve solo a capire da dove partire. Salta quelle che non sai.",
      placeSubmit: "Vedi il risultato", placeScore: "risposte giuste", placeStart: "Inizia da qui", placeRec: "Ti consigliamo di partire da",
      placeSoon: "Le missioni di questo livello sono in preparazione. Intanto puoi giocare i livelli già aperti.",
      placeDontKnow: "Non lo so",
      newBadge: "Nuova medaglia", footer: "I tuoi progressi restano in questo browser.", site: "Lezioni mi.Game",
      modulesCount: "{n} missioni", ofTotal: "{a} di {b}"
    }
  };
  var LANGS = ["en", "es", "it"];

  /* ---------- storage ---------- */
  var KEY = "migame-learn-v1";
  function detectLang() { return window.MGSite ? MGSite.lang() : "es"; }
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
  S.lang = detectLang();
  /* cloud mode (student accounts): see cloud.js and firebase-config.js */
  var cloud = window.MGCloud && MGCloud.enabled ? MGCloud : null;
  var cloudUid = null, cloudReady = !cloud, cloudTimer = null, loginError = "";
  function save() {
    if (cloudUid) { clearTimeout(cloudTimer); cloudTimer = setTimeout(pushCloud, 1200); return; }
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  }
  function pushCloud() {
    if (!cloudUid) return;
    clearTimeout(cloudTimer); cloudTimer = null;
    var st = JSON.parse(JSON.stringify(S));
    delete st.lang;
    return cloud.saveMine({ color: S.color || 0, state: JSON.stringify(st), xp: S.xp, done: Object.keys(S.modules) }).catch(function () {});
  }

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
  function codeLines(code) { return String(tr(code)).replace(/\s+$/, "").split("\n"); }
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
    { id: "first", xp: 10, glyph: "spark", name: { en: "First step", es: "Primer paso", it: "Primo passo" }, desc: { en: "Solve your first exercise", es: "Resuelve tu primer ejercicio", it: "Risolvi il tuo primo esercizio" } },
    { id: "compass", xp: 20, glyph: "compass", name: { en: "Compass", es: "Brújula", it: "Bussola" }, desc: { en: "Take the level test", es: "Haz el test de nivel", it: "Fai il test di livello" } },
    { id: "clean", xp: 30, glyph: "bolt", name: { en: "Clean run", es: "Sin fallos", it: "Percorso netto" }, desc: { en: "Beat a boss with no hints and no mistakes", es: "Vence a un jefe sin pistas ni errores", it: "Batti un boss senza suggerimenti né errori" } },
    { id: "xp250", glyph: "coin", name: { en: "Collector", es: "Coleccionista", it: "Collezionista" }, desc: { en: "Earn 250 XP", es: "Gana 250 XP", it: "Guadagna 250 XP" } },
    { id: "xp1000", glyph: "flag", name: { en: "Treasure", es: "Tesoro", it: "Tesoro" }, desc: { en: "Earn 1000 XP", es: "Gana 1000 XP", it: "Guadagna 1000 XP" } }
  ];
  /* Medals: special achievements, each one gives bonus XP. */
  function allBadges() {
    var list = BASE_BADGES.slice();
    MG.stages.forEach(function (st) {
      if (st.badge) list.push({ id: "stage-" + st.id, xp: 100, glyph: st.badge.glyph, name: st.badge.name, desc: st.badge.desc || st.name });
    });
    return list;
  }
  function findBadge(id) { return allBadges().filter(function (b) { return b.id === id; })[0]; }

  /* Robot parts: every mission adds one. Mission n of a level gives slot n, in that level's metal. */
  var SLOTS = ["legs", "arms", "antenna", "jet", "visor", "helmet"];
  var PART_NAME = {
    legs: { en: "tracks", es: "Orugas", it: "Cingoli" }, arms: { en: "robot arms", es: "Brazos mecánicos", it: "Braccia meccaniche" },
    antenna: { en: "star antenna", es: "Antena estrella", it: "Antenna stella" }, jet: { en: "rockets", es: "Cohetes", it: "Razzi" },
    visor: { en: "visor", es: "Visor", it: "Visore" }, helmet: { en: "helmet", es: "Casco", it: "Casco" }
  };
  var METAL = [{ en: "Bronze", es: "de bronce", it: "di bronzo" }, { en: "Silver", es: "de plata", it: "d'argento" }, { en: "Gold", es: "de oro", it: "d'oro" }];
  function partName(slot, tier) {
    var l = S.lang, n = PART_NAME[slot][l] || PART_NAME[slot].en, mt = METAL[Math.min(tier, 2)][l] || METAL[Math.min(tier, 2)].en;
    return l === "en" ? mt + " " + n : n + " " + mt;
  }
  function allParts() {
    var list = [];
    MG.stages.forEach(function (st, si) {
      st.modules.forEach(function (e, j) {
        var slot = SLOTS[j % SLOTS.length], tier = Math.min(si, 2);
        list.push({ id: "mod-" + e.id, mod: e.id, slot: slot, tier: tier, si: si, n: j + 1, name: partName(slot, tier), ready: !!MG.modules[e.id] });
      });
    });
    return list;
  }
  function robotParts() {
    var out = {};
    allParts().forEach(function (p) { if (S.badges[p.id] && (out[p.slot] === undefined || p.tier > out[p.slot])) out[p.slot] = p.tier; });
    return out;
  }
  function robotSvg(color, cls) { return MGSite.bit(color || robotColor(), { parts: robotParts(), cls: cls }); }
  function partIcon(p) { var o = {}; o[p.slot] = p.tier; return MGSite.bit("#e3ecf1", { parts: o }); }
  function award(id) {
    if (S.badges[id]) return;
    S.badges[id] = Date.now();
    var part = allParts().filter(function (p) { return p.id === id; })[0];
    if (part) { log("part", part.name); save(); return; }
    var b = findBadge(id);
    if (b) {
      log("badge", tr(b.name));
      toast(medal(b.glyph, true), t("newBadge"), tr(b.name) + (b.xp ? " · +" + b.xp + " XP" : ""));
      if (b.xp) addXP(b.xp);
    }
    save();
  }
  function log(kind, text) {
    S.history.unshift({ t: Date.now(), k: kind, x: text });
    S.history = S.history.slice(0, 60);
  }

  /* ---------- XP ---------- */
  function addXP(n) {
    if (!n) return;
    S.xp += n;
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
    return st.modules.length > 0 && st.modules.every(function (e) { var m = MG.modules[e.id]; return m && moduleDone(m); });
  }
  function levelCode(id) {
    var si = stageOf(id);
    if (si < 0) return "";
    var j = MG.stages[si].modules.map(function (e) { return e.id; }).indexOf(id);
    return t("missionN", { n: j + 1 });
  }
  function starsOf(m) {
    if (!m || !moduleDone(m)) return 0;
    var n = 1, all = [];
    ["quiz", "practice", "challenge"].forEach(function (sec) { sectionItems(m, sec).forEach(function (it) { all.push(S.items[itemKey(m, it)]); }); });
    if (all.every(function (r) { return r && r.xp > 0; })) n++;
    if (sectionItems(m, "challenge").every(function (it) { var r = S.items[itemKey(m, it)]; return r && r.perfect; })) n++;
    return n;
  }
  function stageUnlocked(i) {
    if (i <= 0) return true;
    if (S.placement && S.placement.stage >= i) return true;
    return stageUnlocked(i - 1) && stageComplete(i - 1);
  }
  function moduleUnlocked(id) {
    var si = stageOf(id);
    if (si < 0 || !stageUnlocked(si)) return false;
    /* worlds below the level test result: every level is open, in any order */
    if (S.placement && si < S.placement.stage) return !!MG.modules[id];
    var mods = MG.stages[si].modules;
    for (var i = 0; i < mods.length; i++) {
      if (mods[i].id === id) return true;
      var m = MG.modules[mods[i].id];
      if (m && !moduleDone(m)) return false;
    }
    return false;
  }
  function nextTarget() {
    /* start from the world suggested by the level test, then the others */
    var p = S.placement ? Math.min(S.placement.stage, MG.stages.length - 1) : 0, order = [];
    for (var k = p; k < MG.stages.length; k++) order.push(k);
    for (k = 0; k < p; k++) order.push(k);
    for (var o = 0; o < order.length; o++) {
      var i = order[o];
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
  var ROBOT = ["#58dce0", "#ffd02f", "#42c83d", "#ffae16", "#ff8cc6", "#c9472f"];
  function robotColor() { return ROBOT[(S.color || 0) % ROBOT.length]; }
  function avatarHtml(big) { return '<span class="avatar' + (big ? " big" : "") + '">' + robotSvg() + "</span>"; }
  var STAR = '<path d="M12 2.8l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="#ffc93c" stroke="#174e70" stroke-width="1.8" stroke-linejoin="round"/>';
  function starSvg(on) { return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (on ? "" : ' class="s-off"') + ">" + STAR + "</svg>"; }
  var LOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';
  function starsHtml(n) { return '<div class="stars" role="img" aria-label="' + esc(t("starsText", { n: n })) + '">' + [0, 1, 2].map(function (i) { return starSvg(i < n); }).join("") + "</div>"; }
  function renderTopbar() {
    if (!topbar) return;
    MGSite.header(topbar, {
      root: "../", active: "learn",
      extra: (cloud && !cloudUid) ? "" : '<a class="chip-xp" href="#profile" title="' + esc(t("xpExp")) + '"><span class="coin">★</span>' + S.xp + " XP</a>" +
        '<a class="avatar" href="#profile" aria-label="' + esc(t("profile")) + '">' + robotSvg() + "</a>"
    });
  }

  /* Right/wrong is shown with a ✓ / ✗ mark next to the field, not only with colour
     (easier for colour-blind players). */
  function markField(el, good) {
    var m = el.nextSibling;
    if (!(m && m.classList && m.classList.contains("mk"))) { m = document.createElement("span"); el.parentNode.insertBefore(m, el.nextSibling); }
    m.className = "mk " + (good ? "ok" : "no");
    m.textContent = good ? "✓" : "✗";
    el.classList.toggle("good", good); el.classList.toggle("bad", !good);
  }
  function clearMark(el) {
    el.classList.remove("good", "bad");
    var m = el.nextSibling;
    if (m && m.classList && m.classList.contains("mk")) m.remove();
  }

  /* ---------- views ---------- */
  function viewHome() {
    var target = nextTarget();
    var wrap = h("div", "home");

    var stars = 0;
    Object.keys(MG.modules).forEach(function (id) { stars += starsOf(MG.modules[id]); });
    var earned = allBadges().filter(function (b) { return S.badges[b.id]; }).length;
    /* the level the player is in now: the one of the next mission, or the last one */
    var curStage = MG.stages.length - 1;
    if (target) MG.stages.forEach(function (st, si) { if (st.modules.some(function (e) { return e.id === target.id; })) curStage = si; });
    var pl = h("aside", "player card");
    pl.innerHTML =
      '<div class="player-top">' + avatarHtml(true) + "<div><h1>" + esc(S.name ? t("heroHi", { name: S.name }) : t("heroWelcome")) + '</h1><span class="lvl-badge">' + esc(t("worldN", { n: curStage + 1 }) + " · " + tr(MG.stages[curStage].name)) + "</span></div></div>" +
      '<div class="tally"><div><b>' + S.xp + "</b><span>" + esc(t("statsXp")) + " (XP)</span></div><div><b>" + stars + "</b><span>" + esc(t("starsLabel")) + "</span></div><div><b>" + earned + "</b><span>" + esc(t("badges")) + "</span></div><div><b>" + Object.keys(S.modules).length + "</b><span>" + esc(t("levelsDone")) + "</span></div></div>";
    if (target) pl.appendChild(btn(esc((S.pos[target.id] ? t("continue") : t("start")) + ": " + tr(target.title)), "btn-primary btn-big", function () { location.hash = "m-" + target.id; }));
    if (MG.placement) pl.appendChild(btn(esc(S.placement ? t("placementRetake") : t("placementBtn")), "btn-ghost", function () { location.hash = "placement"; }));
    wrap.appendChild(pl);

    var ws = h("div", "worlds");
    MG.stages.forEach(function (st, i) {
      var open = stageUnlocked(i), complete = stageComplete(i);
      var sec = h("section", "world" + (open ? "" : " locked"));
      sec.dataset.i = i;
      var state = complete ? '<span class="wstate">' + starSvg(true) + esc(t("stageDone")) + "</span>" : open ? "" : '<span class="wstate">' + LOCK + esc(t("stageLocked")) + "</span>";
      sec.innerHTML = '<div class="world-head"><span class="wnum">' + (i + 1) + '</span><div class="txt"><small>' + esc(t("worldN", { n: i + 1 })) + "</small><h2>" + esc(tr(st.name)) + "</h2><p>" + esc(tr(st.blurb)) + "</p></div>" + state + "</div>";
      if (!open) {
        var lb = h("div", "lockbar", LOCK + "<span>" + esc(t("lockedWorld", { w: tr(MG.stages[i - 1].name) })) + "</span>");
        if (MG.placement) lb.appendChild(btn(esc(t("placementBtn")), "btn-sun", function () { location.hash = "placement"; }));
        sec.appendChild(lb);
      }
      sec.appendChild(pathEl(st, i, open, target));
      ws.appendChild(sec);
    });
    wrap.appendChild(ws);
    return wrap;
  }

  function pathEl(st, si, open, target) {
    var n = st.modules.length, ROW = 136, TOP = 104, xs = [50, 74, 50, 26];
    var H = TOP + (n - 1) * ROW + 130;
    var pts = st.modules.map(function (e, j) { return { x: xs[j % 4], y: TOP + j * ROW }; });
    var d = "M" + pts[0].x + " " + pts[0].y;
    for (var j = 1; j < n; j++) d += " C" + pts[j - 1].x + " " + (pts[j - 1].y + ROW / 2) + " " + pts[j].x + " " + (pts[j].y - ROW / 2) + " " + pts[j].x + " " + pts[j].y;
    var box = h("div", "path");
    box.style.height = H + "px";
    box.innerHTML = '<svg class="road" viewBox="0 0 100 ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="r1" d="' + d + '" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/>' +
      '<path class="r2" d="' + d + '" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>';
    st.modules.forEach(function (e, j) {
      var m = MG.modules[e.id], code = String(j + 1), p = pts[j];
      var avail = !!m && open && moduleUnlocked(m.id), done = !!m && moduleDone(m);
      var el = h(avail ? "a" : "div", "lvl" + (done ? " done" : "") + (avail ? "" : " off") + (avail && target === m ? " cur" : ""));
      if (avail) el.href = "#m-" + m.id;
      el.style.left = p.x + "%";
      el.style.top = p.y + "px";
      var sub = !m ? t("soon") : !avail ? t("locked") : moduleProgress(m) ? t("inProgress", { p: moduleProgress(m) }) : t("startHere");
      el.innerHTML = (avail && target === m ? '<span class="here">' + robotSvg() + "</span>" : "") +
        '<span class="lvl-btn">' + (m && !avail ? LOCK : esc(code)) + "</span>" +
        '<span class="lvl-name">' + esc(tr(m ? m.title : e.title)) + "</span>" +
        (done ? starsHtml(starsOf(m)) : '<span class="lvl-sub">' + esc(sub) + "</span>");
      box.appendChild(el);
    });
    return box;
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
      var unl = MG.stages.slice(0, stage + 1).map(function (x, i) { return '<span class="wtag" data-i="' + i + '">' + esc(tr(x.name)) + "</span>"; }).join("");
      var first = st.modules.map(function (e) { return MG.modules[e.id]; }).filter(Boolean)[0] || nextTarget();
      panel.innerHTML = '<div class="result">' + avatarHtml(true) + '<div class="big">' + score + "/" + P.questions.length + '</div><div class="muted"><b>' + esc(t("placeScore")) + "</b></div><h2>" + esc(t("placeUnlocked")) + '</h2><div class="unl">' + unl + '</div><p class="prose">' + esc(t("placeRec")) + " <b>" + esc(tr(st.name)) + "</b>.</p>" +
        (st.modules.some(function (e) { return MG.modules[e.id]; }) ? "" : '<p class="prose muted">' + esc(t("placeSoon")) + "</p>") + "</div>";
      var row = h("div", "row");
      row.style.justifyContent = "center";
      if (first) row.appendChild(btn(esc(t("placeStart") + ": " + tr(first.title)), "btn-primary", function () { location.hash = "m-" + first.id; }));
      row.appendChild(btn(esc(t("backMap")), "btn-ghost", function () { location.hash = "home"; }));
      panel.appendChild(row);
      renderTopbar();
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
    head.dataset.i = si;
    head.innerHTML = '<a class="back" href="#home">' + esc(t("back")) + '</a><span class="lvl-tag">' + esc(t("worldN", { n: si + 1 }) + " · " + tr(MG.stages[si].name) + " · " + levelCode(m.id)) + "</span><h1>" + esc(tr(m.title)) + "</h1><p>" + esc(tr(m.summary)) + "</p>";
    wrap.appendChild(head);

    var tabs = h("div", "tabs");
    tabs.setAttribute("role", "tablist");
    SECTIONS.forEach(function (s, i) {
      var b = h("button", "tab" + (sectionDone(m, s) ? " done" : ""), '<span class="n">' + (sectionDone(m, s) ? "✓" : i + 1) + "</span>" + esc(t(s)));
      b.type = "button";
      b.dataset.sec = s;
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
    else if (sl.viz && sl.viz.type === "grid") body.appendChild(gridDemo(sl.viz));
    else {
      if (sl.code) body.appendChild(codeBlock(sl.code));
      if (sl.viz && sl.viz.type === "tree") body.appendChild(treeViz(sl.viz));
    }
    if (sl.after) body.appendChild(h("div", "prose", md(tr(sl.after))));
    var foot = h("div", "panel-foot");
    if (ui.slide > 0) foot.appendChild(btn(t("prev"), "btn-ghost", function () { ui.slide--; remember(m); render(); }));
    foot.appendChild(h("span", "spacer"));
    if (ui.slide < slides.length - 1) foot.appendChild(btn(esc(t("nextCard")) + " →", "btn-primary", function () { ui.slide++; remember(m); render(); }));
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
    var part = allParts().filter(function (x) { return x.mod === m.id; })[0];
    var n = starsOf(m);
    main.innerHTML = "";
    var w = h("div", "wrap");
    var p = h("div", "panel");
    p.innerHTML = '<div class="celebrate">' + robotSvg(null, "hero-bit") + '<div class="big-stars">' + [0, 1, 2].map(function (i) { return starSvg(i < n); }).join("") + "</div><h2>" + esc(t("modDoneTitle")) + '</h2><p class="prose"><b>' + esc(t("starsText", { n: n })) + "</b> · " + esc(part ? t("modDoneText", { b: part.name, x: 50 }) : "+50 XP") + '</p><p class="prose muted">' + esc(t("starsHow")) + "</p></div>";
    var row = h("div", "row");
    row.style.justifyContent = "center";
    var nx = nextModuleAfter(m);
    if (nx) row.appendChild(btn(esc(t("nextModule") + ": " + tr(nx.title)), "btn-primary btn-big", function () { location.hash = "m-" + nx.id; }));
    row.appendChild(btn(esc(t("backMap")), nx ? "btn-ghost" : "btn-primary btn-big", function () { location.hash = "home"; render(); }));
    p.appendChild(row);
    w.appendChild(p);
    main.appendChild(w);
    renderTopbar();
    window.scrollTo(0, 0);
  }

  /* ---------- exercise runner ---------- */
  function exercise(host, ex, m, sec, onSolved) {
    var key = itemKey(m, ex);
    var st = { fails: 0, hint: false, revealed: false, done: false };
    var box = h("div", "ex");
    box.dataset.sec = sec;
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
    var checkBtn = btn(impl.checkLabel || t("check"), "btn-primary", doCheck);
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
      if (st.done || st.busy) return;
      var r0 = impl.check();
      if (r0 === null) { fb.className = "feedback info"; fb.innerHTML = '<div class="fb-title">' + esc(impl.emptyMsg || t(ex.type === "fill" || ex.type === "trace" || ex.type === "match" ? "fillFirst" : "chooseFirst")) + "</div>"; return; }
      st.busy = true; checkBtn.disabled = true; fb.className = "feedback"; fb.innerHTML = "";
      Promise.resolve(r0).then(function (r) {
      st.busy = false; checkBtn.disabled = false;
      var ok = r === true || !!(r && r.ok);
      if (ok) {
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
        fb.innerHTML = '<div class="fb-title">' + esc((r && r.msg) || t("wrong")) + "</div>";
        if (st.fails >= 2) revealBtn.hidden = false;
      }
      });
    }
    function doReveal() {
      if (st.busy) return;
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
        check: function () {
          if (!ta.value.trim()) return null;
          var mine = norm(ta.value), right = norm(ex.answer);
          if (mine === right) return true;
          /* same values, different line breaks (e.g. "6 7" instead of "6" and "7" on two lines) */
          var flat = function (x) { return x.split(/[\s,;]+/).filter(Boolean).join(" "); };
          if (flat(mine) === flat(right)) return { ok: false, msg: t("lineHint") };
          if (mine.toLowerCase() === right.toLowerCase()) return { ok: false, msg: t("caseHint") };
          return false;
        },
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
            inp.addEventListener("input", function () { clearMark(inp); });
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
          /* right word with wrong capitals (e.g. "string" for "String") counts as right, with a note */
          var ok = true, caseOf = null;
          inputs.forEach(function (x) {
            var v = x.value.trim(), good = x._answers.indexOf(v) >= 0;
            /* right word, wrong capitals (e.g. "string" for "String"): still wrong, but we add a reminder */
            if (!good && x._answers.some(function (a) { return a.toLowerCase() === v.toLowerCase(); })) caseOf = true;
            markField(x, good);
            if (!good) ok = false;
          });
          return ok ? true : { ok: false, msg: t("markedWrong") + (caseOf ? " " + t("caseHint") : "") };
        },
        reveal: function () { inputs.forEach(function (x) { x.value = x._answers[0]; markField(x, true); }); },
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
            markField(x, good);
            if (!good) ok = false;
          });
          return ok || { ok: false, msg: t("markedWrong") };
        },
        reveal: function () { inputs.forEach(function (x) { x.value = x._answers[0]; markField(x, true); }); },
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
          sels.forEach(function (s) { var g = s.value === s._answer; markField(s, g); if (!g) ok = false; });
          return ok || { ok: false, msg: t("markedWrong") };
        },
        reveal: function () { sels.forEach(function (s) { s.value = s._answer; markField(s, true); }); },
        lock: function () {
          sels.forEach(function (s) { s.disabled = true; });
          if (ex.tree && !after) { after = treeViz(ex.tree); body.appendChild(after); }
        }
      };
    }
  };

  /* ---------- Explorer: Bit the robot ---------- */
  var DX = [1, 0, -1, 0], DY = [0, 1, 0, -1], DIRCH = { ">": 0, "v": 1, "<": 2, "^": 3 };
  function parseMap(rows) {
    var m = { w: 0, h: rows.length, rows: rows, walls: {}, stars: [], flag: null, start: { x: 0, y: 0, dir: 0 } };
    rows.forEach(function (r, y) {
      m.w = Math.max(m.w, r.length);
      r.split("").forEach(function (ch, x) {
        if (ch === "#") m.walls[x + "," + y] = 1;
        else if (ch === "*") m.stars.push(x + "," + y);
        else if (ch === "F") m.flag = x + "," + y;
        else if (DIRCH[ch] !== undefined) m.start = { x: x, y: y, dir: DIRCH[ch] };
      });
    });
    return m;
  }
  function blocked(m, x, y) { return x < 0 || y < 0 || x >= m.w || y >= m.h || m.rows[y].charAt(x) === "" || !!m.walls[x + "," + y]; }
  var uid = 0;
  function normProg(spec) {
    return (spec || []).map(function (s) {
      if (typeof s === "string") return { id: ++uid, op: s };
      return { id: ++uid, op: "repeat", n: s.repeat, body: normProg(s["do"]) };
    });
  }
  function countBlocks(p) { return p.reduce(function (a, n) { return a + 1 + (n.op === "repeat" ? countBlocks(n.body) : 0); }, 0); }
  function flatten(p, out) {
    p.forEach(function (n) {
      if (out.length > 400) return;
      if (n.op === "repeat") { for (var i = 0; i < n.n; i++) flatten(n.body, out); } else out.push(n);
    });
    return out;
  }
  function simulate(m, prog) {
    var s = { x: m.start.x, y: m.start.y, dir: m.start.dir, got: {} };
    var steps = [], acts = flatten(prog, []).slice(0, 400), crash = false;
    for (var i = 0; i < acts.length; i++) {
      var a = acts[i];
      if (a.op === "turnLeft") s.dir = (s.dir + 3) % 4;
      else if (a.op === "turnRight") s.dir = (s.dir + 1) % 4;
      else if (a.op === "move") {
        var nx = s.x + DX[s.dir], ny = s.y + DY[s.dir];
        if (blocked(m, nx, ny)) { crash = true; steps.push({ x: s.x, y: s.y, dir: s.dir, got: Object.assign({}, s.got), node: a, bump: true }); break; }
        s.x = nx; s.y = ny;
        if (m.stars.indexOf(nx + "," + ny) >= 0) s.got[nx + "," + ny] = 1;
      }
      steps.push({ x: s.x, y: s.y, dir: s.dir, got: Object.assign({}, s.got), node: a });
    }
    var last = steps[steps.length - 1] || { x: m.start.x, y: m.start.y, got: {} };
    var result = crash ? "wall" : (last.x + "," + last.y !== m.flag ? "noflag" : (Object.keys(last.got).length < m.stars.length ? "stars" : "ok"));
    return { steps: steps, result: result };
  }
  MG._simulate = function (map, spec) { return simulate(parseMap(map), normProg(spec)).result; };

  var SVG_BOT = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M31 14 L39 20 L31 26 Z" fill="var(--c6)"/><rect x="4" y="5" width="28" height="30" rx="10" fill="var(--bot)"/><rect x="8" y="9" width="20" height="22" rx="7" fill="var(--bot-face)"/><circle cx="22" cy="15" r="3.6" fill="#fff"/><circle cx="22" cy="25" r="3.6" fill="#fff"/><circle cx="23.3" cy="15" r="1.8" fill="#14202a"/><circle cx="23.3" cy="25" r="1.8" fill="#14202a"/><circle cx="9" cy="20" r="2.4" fill="var(--c5)"/></svg>';
  var SVG_STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 16.8 6.2 20l1.4-6.4L2.7 9.2l6.5-.7z" fill="var(--c6)" stroke="var(--star-edge)" stroke-width="1.2" stroke-linejoin="round"/></svg>';
  var SVG_FLAG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3v18" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/><path d="M7 4h11l-3 4 3 4H7z" fill="var(--c5)"/></svg>';
  var ICON = {
    move: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    turnLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H15a5 5 0 010 10h-3M9 3L5 7l4 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    turnRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 7H9a5 5 0 000 10h3M15 3l4 4-4 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    repeat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11V9a4 4 0 014-4h11M16 2l3 3-3 3M20 13v2a4 4 0 01-4 4H5M8 22l-3-3 3-3" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function board(m) {
    var el = h("div", "board");
    el.style.aspectRatio = m.w + " / " + m.h;
    el.style.maxWidth = Math.min(m.w * 72, 560) + "px";
    var cells = h("div", "cells");
    cells.style.gridTemplateColumns = "repeat(" + m.w + ", 1fr)";
    for (var y = 0; y < m.h; y++) {
      for (var x = 0; x < m.w; x++) {
        var k = x + "," + y, wall = blocked(m, x, y);
        var c = h("div", "cell" + (wall ? " wall" : (x + y) % 2 ? " alt" : ""));
        if (m.stars.indexOf(k) >= 0) { var st = h("div", "star", SVG_STAR); st.dataset.k = k; c.appendChild(st); }
        if (m.flag === k) c.appendChild(h("div", "flag", SVG_FLAG));
        cells.appendChild(c);
      }
    }
    var bot = h("div", "bot", SVG_BOT);
    bot.style.width = 100 / m.w + "%";
    bot.style.height = 100 / m.h + "%";
    el.appendChild(cells);
    el.appendChild(bot);
    var rot = m.start.dir * 90;
    function place(s, instant) {
      var target = s.dir * 90, cur = ((rot % 360) + 360) % 360;
      var d = ((target - cur + 540) % 360) - 180;
      rot = instant ? target : rot + d;
      bot.classList.toggle("instant", !!instant);
      bot.style.left = (s.x * 100) / m.w + "%";
      bot.style.top = (s.y * 100) / m.h + "%";
      bot.style.setProperty("--rot", rot + "deg");
      bot.classList.remove("bump");
      if (s.bump) { void bot.offsetWidth; bot.classList.add("bump"); }
      el.querySelectorAll(".star").forEach(function (st) { st.classList.toggle("got", !!(s.got && s.got[st.dataset.k])); });
      el.classList.toggle("win", !instant && s.x + "," + s.y === m.flag && Object.keys(s.got || {}).length === m.stars.length);
    }
    function reset() { place({ x: m.start.x, y: m.start.y, dir: m.start.dir, got: {} }, true); }
    reset();
    return { el: el, place: place, reset: reset };
  }

  function progText(p, mode, depth) {
    depth = depth || 0;
    var ind = new Array(depth + 1).join("    "), out = [];
    p.forEach(function (n) {
      if (n.op === "repeat") {
        var v = "ijk"[depth] || "n";
        out.push(ind + (mode === "java" ? "for (int " + v + " = 0; " + v + " < " + n.n + "; " + v + "++) {" : t("w_repeat", { n: n.n }) + ":"));
        out = out.concat(progText(n.body, mode, depth + 1));
        if (mode === "java") out.push(ind + "}");
      } else out.push(ind + (mode === "java" ? "bit." + n.op + "();" : t("w_" + n.op)));
    });
    return out;
  }
  var textMode = "words";

  function editor(opts) {
    var prog = opts.program || [], target = null, locked = false, ro = !!opts.readonly;
    var el = h("div", "editor" + (ro ? " ro" : ""));
    if (!ro) {
      el.appendChild(h("div", "zone-label", esc(t("blocksLabel"))));
      var pal = h("div", "palette");
      opts.palette.forEach(function (op) {
        var b = h("button", "blk b-" + op + " pal", ICON[op] + "<span>" + esc(op === "repeat" ? t("w_repeat", { n: "…" }) : t("w_" + op)) + "</span>");
        b.type = "button";
        b.addEventListener("click", function () {
          if (locked) return;
          var nd = op === "repeat" ? { id: ++uid, op: "repeat", n: 3, body: [] } : { id: ++uid, op: op };
          (target ? target.body : prog).push(nd);
          if (op === "repeat") target = nd;
          changed();
        });
        pal.appendChild(b);
      });
      el.appendChild(pal);
    }
    var head = h("div", "prog-head");
    var count = h("span", "count");
    head.innerHTML = '<span class="zone-label" style="margin:0">' + esc(t(ro ? "demoProgram" : "yourProgram")) + "</span>";
    head.appendChild(count);
    if (!ro) {
      var clr = h("button", "btn btn-quiet", esc(t("clear")));
      clr.type = "button";
      clr.addEventListener("click", function () { if (locked) return; prog.length = 0; target = null; changed(); });
      head.appendChild(clr);
    }
    el.appendChild(head);
    var progEl = h("div", "prog");
    el.appendChild(progEl);
    var tv = h("div", "textview");
    var tabs = h("div", "tv-tabs");
    ["words", "java"].forEach(function (md_) {
      var b = h("button", null, md_ === "java" ? "Java" : esc(t("words")));
      b.type = "button";
      b.setAttribute("aria-pressed", textMode === md_);
      b.addEventListener("click", function () { textMode = md_; tabs.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); drawText(); });
      tabs.appendChild(b);
    });
    var tvCode = h("div");
    tv.appendChild(tabs);
    tv.appendChild(tvCode);
    el.appendChild(tv);

    function changed() { draw(); if (opts.onChange) opts.onChange(); }
    function drawText() {
      var lines = progText(prog, textMode);
      tvCode.innerHTML = "";
      tvCode.appendChild(codeBlock(lines.length ? lines.join("\n") : (textMode === "java" ? "// …" : "…")));
    }
    function draw() {
      progEl.innerHTML = "";
      progEl.appendChild(list(prog, null));
      var n = countBlocks(prog);
      count.textContent = t("blocksCount", { a: n }) + (opts.max ? " · " + t("maxBlocks", { n: opts.max }) : "");
      count.classList.toggle("over", !!opts.max && n > opts.max);
      drawText();
    }
    function list(arr, owner) {
      var box = h("div", "plist" + (!ro && target === owner ? " target" : ""));
      if (!ro) box.addEventListener("click", function (e) {
        if (locked) return;
        if (e.target === box || e.target.classList.contains("drop")) { e.stopPropagation(); target = owner; draw(); }
      });
      if (!arr.length) box.appendChild(h("div", "drop", esc(ro ? "…" : owner ? t("dropInside") : t("dropMain"))));
      arr.forEach(function (nd, i) { box.appendChild(blockEl(nd, arr, i)); });
      if (arr.length && !ro && target === owner && owner) box.appendChild(h("div", "drop slim", esc(t("addHere"))));
      return box;
    }
    function contains(nd, x) { return nd === x || (nd.body || []).some(function (c) { return contains(c, x); }); }
    function removeBtn(arr, i, nd) {
      var x = h("button", "blk-x", "×");
      x.type = "button";
      x.setAttribute("aria-label", "remove");
      x.addEventListener("click", function (e) { e.stopPropagation(); if (locked) return; if (target && contains(nd, target)) target = null; arr.splice(i, 1); changed(); });
      return x;
    }
    function blockEl(nd, arr, i) {
      if (nd.op === "repeat") {
        var w = h("div", "blk b-repeat rep");
        w.dataset.id = nd.id;
        var hd = h("div", "rep-head", ICON.repeat);
        var lab = h("span");
        var parts = t("w_repeat", { n: "#" }).split("#");
        lab.appendChild(document.createTextNode(parts[0]));
        if (!ro) {
          var minus = h("button", "cnt", "−"); minus.type = "button"; minus.setAttribute("aria-label", "-1");
          var plus = h("button", "cnt", "+"); plus.type = "button"; plus.setAttribute("aria-label", "+1");
          minus.addEventListener("click", function (e) { e.stopPropagation(); if (locked) return; nd.n = Math.max(2, nd.n - 1); changed(); });
          plus.addEventListener("click", function (e) { e.stopPropagation(); if (locked) return; nd.n = Math.min(12, nd.n + 1); changed(); });
          lab.appendChild(minus);
          lab.appendChild(h("b", "num", String(nd.n)));
          lab.appendChild(plus);
        } else lab.appendChild(h("b", "num", String(nd.n)));
        lab.appendChild(document.createTextNode(parts[1] || ""));
        hd.appendChild(lab);
        if (!ro) {
          hd.appendChild(removeBtn(arr, i, nd));
          hd.addEventListener("click", function () { if (locked) return; target = nd; draw(); });
        }
        w.appendChild(hd);
        w.appendChild(list(nd.body, nd));
        w.appendChild(h("div", "rep-foot"));
        return w;
      }
      var b = h("div", "blk b-" + nd.op, ICON[nd.op] + "<span>" + esc(t("w_" + nd.op)) + "</span>");
      b.dataset.id = nd.id;
      if (!ro) b.appendChild(removeBtn(arr, i, nd));
      return b;
    }
    draw();
    return {
      el: el,
      get: function () { return prog; },
      set: function (p) { prog = p; target = null; draw(); },
      highlight: function (nd) {
        el.querySelectorAll(".blk.run").forEach(function (x) { x.classList.remove("run"); });
        if (nd) { var e = el.querySelector('[data-id="' + nd.id + '"]'); if (e) e.classList.add("run"); }
      },
      lock: function (v) { locked = v; el.classList.toggle("locked", v); }
    };
  }

  function animate(bd, ed, steps, done) {
    var i = 0;
    bd.reset();
    function tick() {
      if (!bd.el.isConnected) return;
      if (i >= steps.length) { setTimeout(function () { ed.highlight(null); done(); }, 250); return; }
      var s = steps[i++];
      bd.place(s);
      ed.highlight(s.node);
      setTimeout(tick, s.bump ? 600 : 420);
    }
    setTimeout(tick, 250);
  }

  TYPES.grid = function (body, ex) {
    var m = parseMap(ex.map);
    var wrap = h("div", "play");
    var bd = board(m);
    var left = h("div", "play-board");
    left.appendChild(bd.el);
    var running = false;
    var ed = editor({ palette: ex.blocks || ["move", "turnLeft", "turnRight"], program: [], max: ex.maxBlocks, onChange: function () { if (!running) bd.reset(); } });
    wrap.appendChild(left);
    wrap.appendChild(ed.el);
    body.appendChild(wrap);
    return {
      checkLabel: t("run"),
      emptyMsg: t("addBlocks"),
      check: function () {
        var p = ed.get();
        if (!countBlocks(p)) return null;
        var sim = simulate(m, p);
        running = true;
        ed.lock(true);
        return new Promise(function (res) {
          animate(bd, ed, sim.steps, function () {
            running = false;
            ed.lock(false);
            var tooMany = ex.maxBlocks && countBlocks(p) > ex.maxBlocks;
            if (sim.result === "ok" && !tooMany) res(true);
            else res({ ok: false, msg: sim.result === "ok" ? t("tooMany", { n: ex.maxBlocks }) : t("res_" + sim.result) });
          });
        });
      },
      reveal: function () {
        ed.set(normProg(ex.solution));
        ed.lock(true);
        running = true;
        animate(bd, ed, simulate(m, ed.get()).steps, function () { running = false; });
      },
      lock: function () { ed.lock(true); }
    };
  };

  function gridDemo(viz) {
    var m = parseMap(viz.map);
    var wrap = h("div", "play demo");
    var bd = board(m);
    var left = h("div", "play-board");
    left.appendChild(bd.el);
    var ed = editor({ program: normProg(viz.program), readonly: true });
    var row = h("div", "row");
    var msg = h("span", "demo-msg");
    msg.setAttribute("aria-live", "polite");
    var play = btn("▶ " + t("play"), "btn-primary", function () {
      play.disabled = true;
      msg.textContent = "";
      msg.className = "demo-msg";
      var sim = simulate(m, ed.get());
      animate(bd, ed, sim.steps, function () {
        play.disabled = false;
        msg.textContent = sim.result === "ok" ? t("demoOk") : t("res_" + sim.result);
        msg.className = "demo-msg " + (sim.result === "ok" ? "ok" : "bad");
      });
    });
    row.appendChild(play);
    row.appendChild(msg);
    left.appendChild(row);
    wrap.appendChild(left);
    wrap.appendChild(ed.el);
    return wrap;
  }

  /* ---------- visualizations ---------- */
  function refNum(v) { return parseInt(String(v).slice(1), 10) || 1; }
  function refClass(v) { return "rc" + ((refNum(v) - 1) % 5); }
  function valHtml(v, heap) {
    if (v === null || v === undefined) return "null";
    var s = String(v);
    if (/^@\d+$/.test(s)) {
      var o = (heap || []).filter(function (x) { return x.id === s; })[0];
      return '<span class="ref ' + refClass(s) + '">→ ' + esc((o ? o.cls + " " : "#") + refNum(s)) + "</span>";
    }
    return esc(s);
  }
  function memoryViz(code, viz) {
    var steps = [{ line: 0, start: true, frames: [{ name: "main", vars: {} }], heap: [] }].concat(viz.steps), i = 0;
    var root = h("div", "mem");
    var codeHost = h("div");
    var side = h("div", "mem-side");
    var talk = h("div", "mem-talk", MGSite.bit("#58dce0"));
    var note = h("div", "mem-note");
    note.setAttribute("aria-live", "polite");
    talk.appendChild(note);
    var ctrl = h("div", "mem-ctrl");
    var prev = btn("◀", "btn-ghost", function () { if (i > 0) { i--; draw(); } });
    prev.setAttribute("aria-label", t("prev"));
    var next = btn("", "btn-primary", function () { i = i < steps.length - 1 ? i + 1 : 0; draw(); });
    var count = h("span", "counter");
    ctrl.appendChild(prev); ctrl.appendChild(next); ctrl.appendChild(count);
    var vars = h("div", "mem-box");
    var objs = h("div", "mem-box");
    var cons = h("div", "console");
    /* no objects in this example (e.g. only numbers and text): hide the Objects box */
    var anyHeap = viz.steps.some(function (x) { return x.heap && x.heap.length; });
    side.appendChild(talk); side.appendChild(ctrl); side.appendChild(vars); if (anyHeap) side.appendChild(objs); side.appendChild(cons);
    root.appendChild(codeHost); root.appendChild(side);

    function draw() {
      var s = steps[i], p = steps[i - 1] || {}, last = i === steps.length - 1;
      codeHost.innerHTML = "";
      codeHost.appendChild(codeBlock(code, { hl: s.line }));
      note.innerHTML = mdInline(s.start ? t("memStart") : tr(s.note || ""));
      var pv = {};
      (p.frames || []).forEach(function (f) { pv[tr(f.name)] = f.vars || {}; });
      var hasRef = JSON.stringify(s.frames || []).indexOf('"@') >= 0;
      vars.innerHTML = "<h4>" + esc(t("variables")) + "</h4>" + (hasRef ? '<p class="arrow-help">' + mdInline(t("memArrow")) + "</p>" : "") + (s.frames || []).map(function (f, fi) {
        var old = pv[tr(f.name)] || {};
        var keys = Object.keys(f.vars || {});
        return '<div class="frame' + (fi > 0 ? " temp" : "") + '"><div class="frame-name">' + esc(f.name === "main" ? t("memMain") : tr(f.name)) + (fi > 0 ? " · " + esc(t("memTemp")) : "") + '</div><div class="vars">' +
          (keys.length ? keys.map(function (k) {
            var chg = i > 0 && old[k] !== f.vars[k];
            return '<span class="var' + (chg ? " chg" : "") + '"><b>' + esc(k) + "</b><span>" + valHtml(f.vars[k], s.heap) + "</span></span>";
          }).join("") : '<span class="empty-note">' + esc(t("memNoVars")) + "</span>") + "</div></div>";
      }).join("");
      var ph = {};
      (p.heap || []).forEach(function (o) { ph[o.id] = o.fields || {}; });
      var heap = s.heap || [];
      objs.innerHTML = "<h4>" + esc(t("objects")) + "</h4>" + (heap.length ? '<div class="objs">' + heap.map(function (o) {
        var pf = ph[o.id];
        var keys = Object.keys(o.fields || {});
        return '<div class="obj ' + refClass(o.id) + '"><div class="obj-head"><span>' + esc(o.cls + " " + refNum(o.id)) + "</span></div>" +
          (keys.length ? keys.map(function (k) {
            var chg = i > 0 && (!pf || pf[k] !== o.fields[k]);
            return '<div class="kv' + (chg ? " chg" : "") + '"><b>' + esc(k) + "</b><span>" + valHtml(o.fields[k], s.heap) + "</span></div>";
          }).join("") : '<div class="kv"><span class="empty-note">—</span></div>') + "</div>";
      }).join("") + "</div>" : '<div class="empty-note">' + esc(t("noObjects")) + "</div>");
      cons.innerHTML = '<span class="console-label">' + esc(t("memOut")) + "</span>" + esc((s.out || []).join("\n") || " ");
      count.textContent = i === 0 ? "" : t("step", { i: i, n: steps.length - 1 });
      prev.disabled = i === 0;
      next.innerHTML = last ? "↺ " + esc(t("restart")) : esc(t("memNext")) + " ▶";
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
    me.innerHTML =
      '<div class="row" style="margin-bottom:18px">' + avatarHtml(true) + '<div><h2 style="margin:0">' + esc(S.name || "—") + '</h2><span class="lvl-badge">' + S.xp + " XP</span></div></div>" +
      '<div class="field"><span class="lab">' + esc(t("yourRobot")) + '</span><div class="robots">' +
      ROBOT.map(function (c, i) { return '<button type="button" data-c="' + i + '" aria-pressed="' + ((S.color || 0) % ROBOT.length === i) + '" aria-label="' + esc(t("yourRobot")) + " " + (i + 1) + '">' + MGSite.bit(c) + "</button>"; }).join("") +
      "</div></div>" +
      (cloudUid ? '<div class="field"><span class="lab">' + esc(t("nickname")) + "</span><b>" + esc(S.name) + "</b><small>" + esc(t("nickFixed")) + "</small></div>"
        : '<div class="field"><label for="pf-name">' + esc(t("nickname")) + '</label><input id="pf-name" maxlength="24" autocomplete="off" value="' + esc(S.name) + '"><small>' + esc(t("nicknameHelp")) + "</small></div>");
    if (!cloudUid) me.appendChild(btn(esc(t("save")), "btn-primary", function () {
      S.name = me.querySelector("#pf-name").value.trim().slice(0, 24);
      save(); render(); toast(medal("spark", true), t("saved"), "");
    }));
    me.querySelectorAll("[data-c]").forEach(function (b) {
      b.addEventListener("click", function () { S.color = +b.dataset.c; save(); render(); });
    });
    grid.appendChild(me);

    var right = h("div", "stack");
    var pc = h("div", "card");
    pc.innerHTML = "<h2>" + esc(t("parts")) + '</h2><p class="muted" style="margin-top:0">' + esc(t("partsHow")) + '</p><div class="badges">' + allParts().filter(function (p) { return p.ready; }).map(function (p) {
      return '<div class="badge part' + (S.badges[p.id] ? "" : " off") + '"><span class="part-ic">' + partIcon(p) + "</span><b>" + esc(p.name) + "</b><span>" + esc(t("partFrom", { l: tr(MG.stages[p.si].name), n: p.n })) + "</span></div>";
    }).join("") + "</div>";
    right.appendChild(pc);

    var bc = h("div", "card");
    bc.innerHTML = "<h2>" + esc(t("badges")) + '</h2><p class="muted" style="margin-top:0">' + esc(t("medalsHow")) + '</p><div class="badges">' + allBadges().map(function (b) {
      return '<div class="badge' + (S.badges[b.id] ? "" : " off") + '">' + medal(b.glyph) + "<b>" + esc(tr(b.name)) + "</b><span>" + esc(tr(b.desc)) + (b.xp ? " · +" + b.xp + " XP" : "") + "</span></div>";
    }).join("") + "</div>";
    right.appendChild(bc);

    var hc = h("div", "card");
    hc.innerHTML = "<h2>" + esc(t("history")) + "</h2>" + (S.history.length ? '<ul class="hist">' + S.history.slice(0, 20).map(function (e) {
      var label = e.k === "badge" ? t("newBadge") + ": " : e.k === "part" ? t("newPart") + ": " : e.k === "module" ? "✓ " : e.k === "placement" ? t("placeTitle") + ": " : "";
      return "<li><span>" + esc(label + e.x) + "</span><time>" + esc(fmtDate(e.t)) + "</time></li>";
    }).join("") + "</ul>" : '<p class="muted">' + esc(t("noHistory")) + "</p>");
    right.appendChild(hc);

    var rc = h("div", "card");
    if (cloudUid) {
      var lc = h("div", "card");
      lc.innerHTML = "<h2>" + esc(t("logoutTitle")) + '</h2><p class="muted" style="margin-top:0">' + esc(t("logoutText")) + "</p>";
      lc.appendChild(btn(esc(t("logout")), "btn-primary", function () {
        Promise.resolve(pushCloud()).then(function () { return cloud.logout(); }).then(function () { location.hash = "home"; });
      }));
      right.appendChild(lc);
    }
    rc.innerHTML = "<h2>" + esc(t("resetTitle")) + '</h2><p class="muted" style="margin-top:0">' + esc(t(cloudUid ? "resetTextCloud" : "resetText")) + "</p>";
    var conf = h("div", "confirm");
    conf.hidden = true;
    conf.innerHTML = '<p style="margin:0 0 10px">' + esc(t("resetSure")) + "</p>";
    var crow = h("div", "row");
    crow.appendChild(btn(esc(t("resetYes")), "btn-primary", function () {
      var keep = { name: S.name, color: S.color };
      S = fresh();
      if (cloudUid) { S.name = keep.name; S.color = keep.color; }
      save(); ui = { mod: null, sec: "learn", slide: 0, idx: 0 }; location.hash = "home"; render();
    }));
    crow.appendChild(btn(esc(t("cancel")), "btn-ghost", function () { conf.hidden = true; }));
    conf.appendChild(crow);
    rc.appendChild(btn(esc(t("resetBtn")), "btn-ghost", function () { conf.hidden = false; }));
    rc.appendChild(conf);
    right.appendChild(rc);

    grid.appendChild(right);
    wrap.appendChild(grid);
    return wrap;
  }

  /* ---------- login (cloud mode) ---------- */
  function viewLogin() {
    var w = h("div", "login");
    var c = h("div", "card login-card");
    c.innerHTML = '<div class="login-top">' + MGSite.bit("#58dce0") + "<div><h1>" + esc(t("loginTitle")) + '</h1><p class="muted">' + esc(t("loginText")) + "</p></div></div>" +
      '<form id="lf" novalidate>' +
      '<div class="field"><label for="lf-nick">' + esc(t("nickname")) + '</label><input id="lf-nick" autocomplete="username" autocapitalize="off" spellcheck="false" maxlength="24"></div>' +
      '<div class="field"><label for="lf-code">' + esc(t("loginCode")) + '</label><input id="lf-code" type="password" autocomplete="current-password" autocapitalize="off" spellcheck="false" maxlength="40">' +
      '<label class="show-code"><input type="checkbox" id="lf-show"> ' + esc(t("loginShow")) + "</label></div>" +
      '<p class="login-err" role="alert"></p>' +
      '<button class="btn btn-primary btn-big" type="submit">' + esc(t("loginBtn")) + "</button></form>" +
      '<p class="muted login-help">' + esc(t("loginHelp")) + '</p><a class="teacher-link" href="teacher.html">' + esc(t("teacherLink")) + "</a>";
    var err = c.querySelector(".login-err"), form = c.querySelector("form"), go = form.querySelector("button");
    if (loginError) err.textContent = t(loginError);
    c.querySelector("#lf-show").addEventListener("change", function (e) { c.querySelector("#lf-code").type = e.target.checked ? "text" : "password"; });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nick = c.querySelector("#lf-nick").value, code = c.querySelector("#lf-code").value;
      if (!nick.trim() || !code.trim()) { err.textContent = t("badLogin"); return; }
      go.disabled = true; err.textContent = "";
      loginError = "";
      cloud.loginStudent(nick, code).catch(function (x) { go.disabled = false; err.textContent = t(cloud.errKey(x)); });
    });
    w.appendChild(c);
    return w;
  }
  function startCloud() {
    cloud.onAuth(function (u) {
      if (!u) {
        cloudUid = null; S = fresh(); cloudReady = true;
        ui = { mod: null, sec: "learn", slide: 0, idx: 0 };
        render();
        return;
      }
      cloudReady = false; render();
      cloud.loadMine().then(function (doc) {
        if (!doc) {
          if (!cloud.isTeacher(u)) { loginError = "notActive"; cloud.logout(); return; }
          doc = { nick: "Prof", color: 0, state: null };
          return cloud.saveMine({ nick: "Prof", color: 0, state: null, xp: 0, done: [] }).then(function () { return doc; });
        }
        return doc;
      }).then(function (doc) {
        if (!doc) return;
        var st = null;
        try { st = doc.state ? JSON.parse(doc.state) : null; } catch (e) {}
        S = Object.assign(fresh(), st || {});
        S.name = doc.nick || "";
        S.color = doc.color || 0;
        S.lang = detectLang();
        ui = { mod: null, sec: "learn", slide: 0, idx: 0 };
        cloudUid = u.uid; cloudReady = true; loginError = "";
        render();
      }).catch(function (x) { loginError = cloud.errKey(x); cloud.logout(); });
    }).catch(function () {
      /* Firebase could not load: keep working in this browser only */
      cloud = null; cloudReady = true; S = load(); S.lang = detectLang(); render();
    });
    window.addEventListener("pagehide", function () { if (cloudTimer) pushCloud(); });
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden" && cloudTimer) pushCloud(); });
  }

  /* ---------- router ---------- */
  var PAGE_TITLE = { it: "mi.Game · Gioca e impara", es: "mi.Game · Juega y aprende", en: "mi.Game · Play & learn" };
  function render() {
    document.title = PAGE_TITLE[S.lang] || PAGE_TITLE.en;
    renderTopbar();
    var hash = (location.hash || "").replace(/^#/, "") || "home";
    var view;
    if (cloud && !cloudReady) view = h("p", "loading", esc(t("loadingTxt")));
    else if (cloud && !cloudUid) view = viewLogin();
    else if (hash === "profile") view = viewProfile();
    else if (hash === "placement") view = viewPlacement();
    else if (hash.indexOf("m-") === 0 && MG.modules[hash.slice(2)] && moduleUnlocked(hash.slice(2))) view = viewModule(MG.modules[hash.slice(2)]);
    else view = viewHome();
    main.innerHTML = "";
    var w = h("div", "wrap");
    w.appendChild(view);
    main.appendChild(w);
    var foot = document.querySelector("footer.site-foot");
    if (foot) MGSite.footer(foot, { root: "../" });
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
    topbar = document.querySelector("header.site-head");
    MGSite.onLang(function (l) { S.lang = l; save(); render(); });
    main = document.querySelector("main");
    if (cloud) { S = fresh(); render(); }
    loadContent(function () {
      if (cloud) startCloud(); else render();
      window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
    });
  };
})();
