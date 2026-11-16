/* mi.Game — teacher panel: create students, see their progress, read their codes. */
(function () {
  "use strict";
  var T = {
    it: {
      title: "Il tuo pannello", off: "L'area studenti non è ancora collegata. Inserisci la configurazione di Firebase in learn/assets/firebase-config.js.",
      loginTitle: "Accesso insegnante", email: "Email", password: "Password", enter: "Entra", notTeacher: "Questo account non è l'account insegnante.",
      open: "Apri Gioca e impara", logout: "Esci",
      newTitle: "Nuovo studente", newHelp: "Scegli un nickname facile, senza nome e cognome veri.", nick: "Nickname", create: "Crea studente",
      made: "Studente creato. Dai questi dati allo studente:", code: "Codice", copy: "Copia", copied: "Copiato",
      listTitle: "I tuoi studenti", none: "Ancora nessuno studente.", show: "Mostra", levels: "Missioni completate", last: "Ultimo accesso",
      remove: "Disattiva", sure: "Disattivare? I progressi vengono cancellati.", yes: "Sì", no: "No", never: "mai",
      badLogin: "Email o password non giuste.", tooMany: "Troppi tentativi. Aspetta qualche minuto.", network: "Nessuna connessione.", nickTaken: "Questo nickname esiste già. Scegline un altro.",
      shortNick: "Il nickname deve avere almeno 2 lettere o numeri.", denied: "Permesso negato: controlla le regole di Firestore e il tuo UID.", generic: "Qualcosa è andato storto. Riprova.",
      copyText: "Nickname: {n}\nCodice: {c}\nEntra da: {u}"
    },
    es: {
      title: "Tu panel", off: "El área de alumnos aún no está conectada. Pon la configuración de Firebase en learn/assets/firebase-config.js.",
      loginTitle: "Acceso del profe", email: "Email", password: "Contraseña", enter: "Entrar", notTeacher: "Esta cuenta no es la cuenta del profe.",
      open: "Abrir Juega y aprende", logout: "Salir",
      newTitle: "Nuevo alumno", newHelp: "Elige un apodo fácil, sin nombre ni apellidos reales.", nick: "Apodo", create: "Crear alumno",
      made: "Alumno creado. Dale estos datos:", code: "Código", copy: "Copiar", copied: "Copiado",
      listTitle: "Tus alumnos", none: "Todavía no hay alumnos.", show: "Ver", levels: "Misiones completadas", last: "Último acceso",
      remove: "Desactivar", sure: "¿Desactivar? Se borra su progreso.", yes: "Sí", no: "No", never: "nunca",
      badLogin: "Email o contraseña incorrectos.", tooMany: "Demasiados intentos. Espera unos minutos.", network: "No hay conexión.", nickTaken: "Este apodo ya existe. Elige otro.",
      shortNick: "El apodo debe tener al menos 2 letras o números.", denied: "Permiso denegado: revisa las reglas de Firestore y tu UID.", generic: "Algo ha ido mal. Vuelve a intentarlo.",
      copyText: "Apodo: {n}\nCódigo: {c}\nEntra en: {u}"
    },
    en: {
      title: "Your panel", off: "The student area is not connected yet. Put the Firebase configuration in learn/assets/firebase-config.js.",
      loginTitle: "Teacher login", email: "Email", password: "Password", enter: "Log in", notTeacher: "This account is not the teacher account.",
      open: "Open Play & learn", logout: "Log out",
      newTitle: "New student", newHelp: "Pick an easy nickname, not their real name.", nick: "Nickname", create: "Create student",
      made: "Student created. Give them these details:", code: "Code", copy: "Copy", copied: "Copied",
      listTitle: "Your students", none: "No students yet.", show: "Show", levels: "Missions completed", last: "Last seen",
      remove: "Deactivate", sure: "Deactivate? Their progress is deleted.", yes: "Yes", no: "No", never: "never",
      badLogin: "Wrong email or password.", tooMany: "Too many tries. Wait a few minutes.", network: "No connection.", nickTaken: "This nickname already exists. Pick another one.",
      shortNick: "The nickname needs at least 2 letters or numbers.", denied: "Permission denied: check the Firestore rules and your UID.", generic: "Something went wrong. Try again.",
      copyText: "Nickname: {n}\nCode: {c}\nLog in at: {u}"
    }
  };
  var ROBOT = ["#58dce0", "#ffd02f", "#42c83d", "#ffae16", "#ff8cc6", "#c9472f"];
  var root = document.getElementById("tp");
  var state = { user: null, list: null, made: null };

  function L() { return T[MGSite.lang()] || T.it; }
  function t(k, v) { var s = L()[k] || T.it[k] || k; if (v) Object.keys(v).forEach(function (x) { s = s.split("{" + x + "}").join(v[x]); }); return s; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function errText(e) { var k = e && e.code === "short-nick" ? "shortNick" : MGCloud.errKey(e); return t(k); }
  function codeOf(id) {
    for (var i = 0; i < (MG.stages || []).length; i++) {
      var j = MG.stages[i].modules.map(function (e) { return e.id; }).indexOf(id);
      if (j >= 0) { var nm = MG.stages[i].name; nm = (nm[MGSite.lang()] || nm.en || "?"); return nm.charAt(0) + (j + 1); }
    }
    return id;
  }
  function when(d) {
    if (!d) return t("never");
    try { return d.toLocaleDateString(MGSite.lang(), { day: "numeric", month: "short" }) + " " + d.toLocaleTimeString(MGSite.lang(), { hour: "2-digit", minute: "2-digit" }); } catch (e) { return ""; }
  }
  function learnUrl() { return location.href.replace(/teacher\.html.*$/, "index.html"); }

  function chrome() {
    MGSite.header(document.querySelector("header.site-head"), { root: "../", active: "learn" });
    MGSite.footer(document.querySelector("footer.site-foot"), { root: "../" });
  }

  function render() {
    document.title = "mi.Game · " + ({ it: "Insegnante", es: "Profesor", en: "Teacher" }[MGSite.lang()] || "Teacher");
    chrome();
    root.innerHTML = "";
    if (!MGCloud.enabled) { root.innerHTML = '<div class="card"><h2>' + esc(t("title")) + "</h2><p>" + esc(t("off")) + "</p></div>"; return; }
    if (!state.user) return renderLogin();
    if (!MGCloud.isTeacher(state.user)) {
      var c = document.createElement("div");
      c.className = "card";
      c.innerHTML = "<p><b>" + esc(t("notTeacher")) + '</b></p><button class="btn btn-primary" type="button">' + esc(t("logout")) + "</button>";
      c.querySelector("button").addEventListener("click", function () { MGCloud.logout(); });
      root.appendChild(c);
      return;
    }
    renderPanel();
  }

  function renderLogin() {
    var w = document.createElement("div");
    w.className = "login";
    w.innerHTML = '<div class="card login-card"><div class="login-top">' + MGSite.bit("#ffd02f") + "<div><h1>" + esc(t("loginTitle")) + "</h1></div></div>" +
      '<form novalidate><div class="field"><label for="tl-email">' + esc(t("email")) + '</label><input id="tl-email" type="email" autocomplete="username"></div>' +
      '<div class="field"><label for="tl-pw">' + esc(t("password")) + '</label><input id="tl-pw" type="password" autocomplete="current-password"></div>' +
      '<p class="login-err" role="alert"></p><button class="btn btn-primary btn-big" type="submit">' + esc(t("enter")) + "</button></form></div>";
    var f = w.querySelector("form"), err = w.querySelector(".login-err"), b = f.querySelector("button");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      b.disabled = true; err.textContent = "";
      MGCloud.loginTeacher(w.querySelector("#tl-email").value, w.querySelector("#tl-pw").value)
        .catch(function (x) { b.disabled = false; err.textContent = errText(x); });
    });
    root.appendChild(w);
  }

  function renderPanel() {
    var p = document.createElement("div");
    p.className = "tp";
    p.innerHTML = '<div class="tp-head"><h1>' + esc(t("title")) + '</h1><a class="btn btn-ghost" href="index.html">' + esc(t("open")) + '</a><button type="button" class="btn btn-ghost" id="tp-out">' + esc(t("logout")) + "</button></div>" +
      '<div class="card"><h2>' + esc(t("newTitle")) + '</h2><form class="new-row" novalidate><div class="field"><label for="tp-nick">' + esc(t("nick")) + '</label><input id="tp-nick" maxlength="24" autocomplete="off"><small>' + esc(t("newHelp")) + '</small></div><button class="btn btn-primary" type="submit">' + esc(t("create")) + '</button></form><p class="msg" role="alert"></p><div id="tp-made"></div></div>' +
      '<div class="card"><h2>' + esc(t("listTitle")) + '</h2><div id="tp-list"><p class="empty">…</p></div></div>';
    root.appendChild(p);
    p.querySelector("#tp-out").addEventListener("click", function () { MGCloud.logout(); });
    var form = p.querySelector("form"), msg = p.querySelector(".msg"), b = form.querySelector("button");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      b.disabled = true; msg.textContent = "";
      MGCloud.createStudent(p.querySelector("#tp-nick").value).then(function (r) {
        state.made = r;
        p.querySelector("#tp-nick").value = "";
        b.disabled = false;
        drawMade(p.querySelector("#tp-made"));
        loadList();
      }).catch(function (x) { b.disabled = false; msg.textContent = errText(x); });
    });
    drawMade(p.querySelector("#tp-made"));
    if (state.list) drawList(); else loadList();
  }

  function drawMade(box) {
    var r = state.made;
    if (!r) { box.innerHTML = ""; return; }
    box.innerHTML = '<div class="made"><p>' + esc(t("made")) + "</p><dl><dt>" + esc(t("nick")) + "</dt><dd>" + esc(r.nick) + "</dd><dt>" + esc(t("code")) + "</dt><dd>" + esc(r.code) + '</dd></dl><button class="btn btn-sun" type="button">' + esc(t("copy")) + "</button></div>";
    var cb = box.querySelector("button");
    cb.addEventListener("click", function () {
      var text = t("copyText", { n: r.nick, c: r.code, u: learnUrl() });
      try { navigator.clipboard.writeText(text).then(function () { cb.textContent = t("copied"); }, function () {}); } catch (e) {}
    });
  }

  function loadList() {
    MGCloud.listStudents().then(function (l) { state.list = l; drawList(); })
      .catch(function (x) { var el = document.getElementById("tp-list"); if (el) el.innerHTML = '<p class="msg">' + esc(errText(x)) + "</p>"; });
  }

  function drawList() {
    var el = document.getElementById("tp-list");
    if (!el) return;
    var l = state.list || [];
    if (!l.length) { el.innerHTML = '<p class="empty">' + esc(t("none")) + "</p>"; return; }
    el.innerHTML = '<div class="tbl-wrap"><table><thead><tr><th>' + esc(t("nick")) + "</th><th>" + esc(t("code")) + "</th><th>XP</th><th>" + esc(t("levels")) + "</th><th>" + esc(t("last")) + "</th><th></th></tr></thead><tbody>" +
      l.map(function (s, i) {
        return "<tr><td><span class=\"who\">" + MGSite.bit(ROBOT[(s.color || 0) % ROBOT.length]) + esc(s.nick) + '</span></td>' +
          '<td class="codecell" data-i="' + i + '"><button type="button">' + esc(t("show")) + "</button></td>" +
          '<td class="tnum">' + s.xp + "</td>" +
          '<td><div class="lv">' + (s.done.length ? s.done.map(function (id) { return "<span>" + esc(codeOf(id)) + "</span>"; }).join("") : "—") + "</div></td>" +
          "<td>" + esc(when(s.updatedAt)) + '</td><td class="rm" data-i="' + i + '"><button type="button" class="act danger">' + esc(t("remove")) + "</button></td></tr>";
      }).join("") + "</tbody></table></div>";
    el.querySelectorAll(".codecell button").forEach(function (b) {
      b.addEventListener("click", function () { var s = l[+b.parentNode.dataset.i]; b.parentNode.textContent = s.code || "—"; });
    });
    el.querySelectorAll(".rm button").forEach(function (b) {
      b.addEventListener("click", function () {
        var cell = b.parentNode, s = l[+cell.dataset.i];
        cell.innerHTML = '<div class="confirm-row"><span>' + esc(t("sure")) + '</span><button type="button" class="act danger">' + esc(t("yes")) + '</button><button type="button" class="act">' + esc(t("no")) + "</button></div>";
        var bs = cell.querySelectorAll("button");
        bs[0].addEventListener("click", function () { MGCloud.removeStudent(s.uid).then(loadList).catch(function (x) { cell.textContent = errText(x); }); });
        bs[1].addEventListener("click", drawList);
      });
    });
  }

  MGSite.onLang(render);
  render();
  if (MGCloud.enabled) {
    MGCloud.onAuth(function (u) { state.user = u; state.list = null; state.made = null; render(); })
      .catch(function () { root.innerHTML = '<div class="card"><p class="msg">' + esc(t("network")) + "</p></div>"; });
  }
})();
