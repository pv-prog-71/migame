/* ===== Firebase connection =====
   While MG_FIREBASE is null, Play & learn works without login and saves progress only in the browser.
   To turn on the student area: paste here the firebaseConfig object from the Firebase console,
   and put your teacher account UID in MG_TEACHER_UID.
   These values are not secret: security comes from the rules in firestore.rules. */
window.MG_FIREBASE = {
  apiKey: "AIzaSyBcLPItfx6qP-yKNcNPuTeZVGwBCn7qAro",
  authDomain: "migame-464a3.firebaseapp.com",
  projectId: "migame-464a3",
  storageBucket: "migame-464a3.firebasestorage.app",
  messagingSenderId: "384053004177",
  appId: "1:384053004177:web:f33ee16c60a6ecd030fc30"
};
/* example:
window.MG_FIREBASE = {
  apiKey: "AIza...",
  authDomain: "migame-xxxx.firebaseapp.com",
  projectId: "migame-xxxx",
  storageBucket: "migame-xxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
window.MG_TEACHER_UID = "oRUtFNWKFvaVNDQuLTfV851oXXK2";
