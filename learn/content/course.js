/* COURSE MAP
   - Three levels (Explorer, Apprentice, Inventor), each with an ordered list of missions.
   - A mission with `soon: true` is shown on the map as "Coming soon".
     While a level has "soon" missions it can't be completed, so the next level stays locked
     (the level test can still unlock it).
   - Every completed mission adds a part to the player's robot (1st: tracks, 2nd: arms,
     3rd: antenna, 4th: rockets, 5th: visor, 6th: helmet; bronze / silver / gold by level).
   - Any other mission is loaded from content/<id>.js
   - Texts: T("english", "español", "italiano") */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };

  MG.course({
    contentPath: "content/",

    stages: [
      {
        id: "explorer",
        name: T("Explorer", "Explorador", "Esploratore"),
        blurb: T("Guide Bit with blocks: sequences, loops, conditions.", "Guía a Bit con bloques: secuencias, bucles, condiciones.", "Guida Bit con i blocchi: sequenze, cicli, condizioni."),
        badge: { glyph: "compass", name: T("Explorer", "Explorador", "Esploratore"), desc: T("Complete the Explorer level", "Completa el nivel Explorador", "Completa il livello Esploratore") },
        modules: [
          { id: "exp-sequences" },
          { id: "exp-loops" },
          { id: "exp-conditions", soon: true, title: T("If this, then that", "Si esto, entonces aquello", "Se questo, allora quello") },
          { id: "exp-variables", soon: true, title: T("Boxes with names", "Cajas con nombre", "Scatole con un nome") }
        ]
      },
      {
        id: "apprentice",
        name: T("Apprentice", "Aprendiz", "Apprendista"),
        blurb: T("From blocks to written code: types, functions, lists.", "De los bloques al código escrito: tipos, funciones, listas.", "Dai blocchi al codice scritto: tipi, funzioni, liste."),
        badge: { glyph: "key", name: T("Apprentice", "Aprendiz", "Apprendista"), desc: T("Complete the Apprentice level", "Completa el nivel Aprendiz", "Completa il livello Apprendista") },
        modules: [
          { id: "app-types" },
          { id: "app-functions" },
          { id: "app-scope", soon: true, title: T("Local and global", "Local y global", "Locale e globale") },
          { id: "app-lists", soon: true, title: T("Lists", "Listas", "Liste") }
        ]
      },
      {
        id: "inventor",
        name: T("Inventor", "Inventor", "Inventore"),
        blurb: T("Think in objects: classes, inheritance, interfaces.", "Piensa en objetos: clases, herencia, interfaces.", "Pensa a oggetti: classi, ereditarietà, interfacce."),
        badge: { glyph: "crown", name: T("Inventor", "Inventor", "Inventore"), desc: T("Complete the Inventor level", "Completa el nivel Inventor", "Completa il livello Inventore") },
        modules: [
          { id: "inv-classes" },
          { id: "inv-inheritance" },
          { id: "inv-overloading", soon: true, title: T("Same name, different jobs", "Mismo nombre, distintos trabajos", "Stesso nome, lavori diversi") },
          { id: "inv-encapsulation", soon: true, title: T("Encapsulation", "Encapsulamiento", "Incapsulamento") },
          { id: "inv-interfaces", soon: true, title: T("Interfaces", "Interfaces", "Interfacce") },
          { id: "inv-polymorphism", soon: true, title: T("Polymorphism", "Polimorfismo", "Polimorfismo") }
        ]
      }
    ],

    /* LEVEL TEST
       score → unlocked worlds: 0-3 world 1, 4-6 worlds 1-2, 7-8 worlds 1-3.
       `answer` is the position of the right option (0 = first). */
    placement: {
      bands: [{ min: 0, stage: 0 }, { min: 4, stage: 1 }, { min: 7, stage: 2 }],
      questions: [
        {
          q: T("Bit follows these instructions. How many squares does Bit move?", "Bit sigue estas instrucciones. ¿Cuántas casillas avanza?", "Bit segue queste istruzioni. Di quante caselle si muove?"),
          code: T("move forward\nmove forward\nturn right\nmove forward", "avanzar\navanzar\ngirar a la derecha\navanzar", "vai avanti\nvai avanti\ngira a destra\nvai avanti"),
          options: ["2", "3", "4"],
          answer: 1
        },
        {
          q: T("How many times does Bit jump?", "¿Cuántas veces salta Bit?", "Quante volte salta Bit?"),
          code: T("repeat 5 times:\n    jump", "repetir 5 veces:\n    saltar", "ripeti 5 volte:\n    salta"),
          options: ["1", "5", "6"],
          answer: 1
        },
        {
          q: T("Today it is raining. What does Bit take?", "Hoy llueve. ¿Qué coge Bit?", "Oggi piove. Cosa prende Bit?"),
          code: T("if it is raining:\n    take the umbrella\notherwise:\n    take the cap", "si llueve:\n    coger el paraguas\nsi no:\n    coger la gorra", "se piove:\n    prendi l'ombrello\naltrimenti:\n    prendi il cappellino"),
          options: [T("the umbrella", "el paraguas", "l'ombrello"), T("the cap", "la gorra", "il cappellino"), T("both", "las dos cosas", "tutti e due")],
          answer: 0
        },
        {
          q: T("What is the value of `points` at the end?", "¿Cuánto vale `points` al final?", "Quanto vale `points` alla fine?"),
          code: "points = 5\npoints = points + 2",
          options: ["5", "7", "2"],
          answer: 1
        },
        {
          q: T("How many times is “Hi” printed?", "¿Cuántas veces se imprime “Hi”?", "Quante volte viene stampato “Hi”?"),
          code: "for (int i = 0; i < 3; i++) {\n    System.out.println(\"Hi\");\n}",
          options: ["2", "3", "4"],
          answer: 1
        },
        {
          q: T("What does `twice(4)` give back?", "¿Qué devuelve `twice(4)`?", "Cosa restituisce `twice(4)`?"),
          code: "int twice(int n) {\n    return n * 2;\n}",
          options: ["4", "6", "8"],
          answer: 2
        },
        {
          q: T("In `Dog rex = new Dog();` what are `Dog` and `rex`?", "En `Dog rex = new Dog();` ¿qué son `Dog` y `rex`?", "In `Dog rex = new Dog();` cosa sono `Dog` e `rex`?"),
          options: [
            T("`Dog` is a class (the blueprint), `rex` is an object made from it", "`Dog` es una clase (el plano), `rex` es un objeto hecho con ella", "`Dog` è una classe (il progetto), `rex` è un oggetto costruito con essa"),
            T("`Dog` is an object, `rex` is a class", "`Dog` es un objeto, `rex` es una clase", "`Dog` è un oggetto, `rex` è una classe"),
            T("They are two numbers", "Son dos números", "Sono due numeri")
          ],
          answer: 0
        },
        {
          q: T("`class Cat extends Animal` means…", "`class Cat extends Animal` significa…", "`class Cat extends Animal` significa…"),
          options: [
            T("A Cat is a kind of Animal: it gets everything an Animal has", "Un Cat es un tipo de Animal: tiene todo lo que tiene un Animal", "Un Cat è un tipo di Animal: ha tutto quello che ha un Animal"),
            T("An Animal is a kind of Cat", "Un Animal es un tipo de Cat", "Un Animal è un tipo di Cat"),
            T("Cat and Animal can't be used together", "Cat y Animal no se pueden usar juntos", "Cat e Animal non si possono usare insieme")
          ],
          answer: 0
        }
      ]
    }
  });
})();
