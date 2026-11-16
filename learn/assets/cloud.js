/* mi.Game — student accounts and cloud saving (Firebase).
   Used by learn/index.html (students) and learn/teacher.html (teacher panel).
   Students log in with nickname + code. Behind the scenes the nickname becomes an
   email-like login name (e.g. "luca" → luca@studenti.migame.es) that never receives mail. */
(function () {
  "use strict";
  var SDK = "https://www.gstatic.com/firebasejs/10.14.1/";
  var DOMAIN = "studenti.migame.es";
  var cfg = window.MG_FIREBASE || null;
  var app = null, auth = null, db = null, loading = null;

  function loadScript(src) {
    return new Promise(function (ok, ko) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = ok;
      s.onerror = function () { ko(new Error("load " + src)); };
      document.head.appendChild(s);
    });
  }
  function ready() {
    if (!cfg) return Promise.reject(new Error("disabled"));
    if (loading) return loading;
    var chain = window.firebase && window.firebase.firestore ? Promise.resolve() :
      loadScript(SDK + "firebase-app-compat.js")
        .then(function () { return loadScript(SDK + "firebase-auth-compat.js"); })
        .then(function () { return loadScript(SDK + "firebase-firestore-compat.js"); });
    loading = chain.then(function () {
      app = firebase.apps.length ? firebase.app() : firebase.initializeApp(cfg);
      auth = app.auth();
      db = app.firestore();
    });
    return loading;
  }

  /* "Lucía 2" → "lucia2" */
  function slug(nick) {
    return String(nick || "").trim().toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }
  function emailOf(nick) { return slug(nick) + "@" + DOMAIN; }

  /* easy code for kids: 3 syllables + 2 digits, e.g. "pimolu42" */
  function newCode() {
    var C = "bdfgklmnprstvz", V = "aeiou", s = "";
    var r = function (n) { var a = new Uint32Array(1); (window.crypto || window.msCrypto).getRandomValues(a); return a[0] % n; };
    for (var i = 0; i < 3; i++) s += C[r(C.length)] + V[r(V.length)];
    return s + String(10 + r(90));
  }

  function errKey(e) {
    var c = (e && e.code) || "";
    if (/invalid-credential|wrong-password|user-not-found|invalid-email|invalid-login/.test(c)) return "badLogin";
    if (/too-many-requests/.test(c)) return "tooMany";
    if (/network/.test(c)) return "network";
    if (/email-already-in-use/.test(c)) return "nickTaken";
    if (/permission-denied/.test(c)) return "denied";
    return "generic";
  }

  var api = {
    enabled: !!cfg,
    ready: ready,
    slug: slug,
    errKey: errKey,
    user: function () { return auth && auth.currentUser; },
    isTeacher: function (u) { u = u || (auth && auth.currentUser); return !!(u && window.MG_TEACHER_UID && u.uid === window.MG_TEACHER_UID); },
    onAuth: function (fn) { return ready().then(function () { return auth.onAuthStateChanged(fn); }); },
    loginStudent: function (nick, code) {
      return ready().then(function () { return auth.signInWithEmailAndPassword(emailOf(nick), String(code || "").trim()); });
    },
    loginTeacher: function (email, pw) {
      return ready().then(function () { return auth.signInWithEmailAndPassword(String(email || "").trim(), pw); });
    },
    logout: function () { return ready().then(function () { return auth.signOut(); }); },

    /* the signed-in user's own record: { nick, color, state, xp, done, updatedAt } */
    loadMine: function () {
      return ready().then(function () {
        return db.collection("users").doc(auth.currentUser.uid).get();
      }).then(function (d) { return d.exists ? d.data() : null; });
    },
    saveMine: function (data) {
      return ready().then(function () {
        data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
        return db.collection("users").doc(auth.currentUser.uid).set(data, { merge: true });
      });
    },

    /* ----- teacher only ----- */
    createStudent: function (nick) {
      var display = String(nick || "").trim().slice(0, 24);
      if (slug(display).length < 2) return Promise.reject({ code: "short-nick" });
      var code = newCode(), tmp, uid;
      return ready().then(function () {
        /* a second, temporary connection creates the student, so the teacher stays logged in */
        tmp = firebase.initializeApp(cfg, "tmp-" + Date.now());
        return tmp.auth().createUserWithEmailAndPassword(emailOf(display), code);
      }).then(function (cred) {
        uid = cred.user.uid;
        return tmp.auth().signOut();
      }).then(function () {
        var batch = db.batch();
        batch.set(db.collection("users").doc(uid), { nick: display, color: 0, state: null, xp: 0, done: [], createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        batch.set(db.collection("codes").doc(uid), { nick: display, code: code });
        return batch.commit();
      }).then(function () {
        return { uid: uid, nick: display, code: code };
      }).finally(function () { if (tmp) tmp.delete().catch(function () {}); });
    },
    listStudents: function () {
      return ready().then(function () {
        return Promise.all([db.collection("users").get(), db.collection("codes").get()]);
      }).then(function (r) {
        var codes = {};
        r[1].forEach(function (d) { codes[d.id] = d.data().code; });
        var out = [];
        r[0].forEach(function (d) {
          if (d.id === window.MG_TEACHER_UID) return;
          var x = d.data();
          out.push({ uid: d.id, nick: x.nick, color: x.color || 0, xp: x.xp || 0, done: x.done || [], updatedAt: x.updatedAt && x.updatedAt.toDate ? x.updatedAt.toDate() : null, code: codes[d.id] || "" });
        });
        out.sort(function (a, b) { return String(a.nick).localeCompare(String(b.nick)); });
        return out;
      });
    },
    /* blocks the student: their record is deleted, so the app refuses to open */
    removeStudent: function (uid) {
      return ready().then(function () {
        var batch = db.batch();
        batch.delete(db.collection("users").doc(uid));
        batch.delete(db.collection("codes").doc(uid));
        return batch.commit();
      });
    }
  };
  window.MGCloud = api;
})();
