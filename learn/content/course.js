/* COURSE MAP
   - Three stages, each with an ordered list of modules.
   - A module with `soon: true` is shown on the map as "Coming soon".
   - Any other module is loaded from content/<id>.js
   - Texts can be a plain string (English) or { en: "...", es: "...", it: "..." }. */
MG.course({
  homeUrl: "../",
  contentPath: "content/",

  stages: [
    {
      id: "explorer",
      name: { en: "Explorer", es: "Explorador", it: "Esploratore" },
      blurb: {
        en: "Blocks and plain words. Sequences, loops, conditions and your first variables.",
        es: "Bloques y palabras sencillas. Secuencias, bucles, condiciones y tus primeras variables.",
        it: "Blocchi e parole semplici. Sequenze, cicli, condizioni e le prime variabili."
      },
      modules: [
        { id: "exp-sequences", soon: true, title: { en: "Step by step", es: "Paso a paso", it: "Passo dopo passo" } },
        { id: "exp-loops", soon: true, title: { en: "Loops", es: "Bucles", it: "Cicli" } },
        { id: "exp-conditions", soon: true, title: { en: "If this, then that", es: "Si esto, entonces aquello", it: "Se questo, allora quello" } },
        { id: "exp-variables", soon: true, title: { en: "Boxes with names", es: "Cajas con nombre", it: "Scatole con un nome" } }
      ]
    },
    {
      id: "apprentice",
      name: { en: "Apprentice", es: "Aprendiz", it: "Apprendista" },
      blurb: {
        en: "From blocks to real code. Types, functions, local and global scope, lists.",
        es: "De los bloques al código real. Tipos, funciones, ámbito local y global, listas.",
        it: "Dai blocchi al codice vero. Tipi, funzioni, scope locale e globale, liste."
      },
      modules: [
        { id: "app-types", soon: true, title: { en: "Variables and types", es: "Variables y tipos", it: "Variabili e tipi" } },
        { id: "app-functions", soon: true, title: { en: "Functions", es: "Funciones", it: "Funzioni" } },
        { id: "app-scope", soon: true, title: { en: "Local and global", es: "Local y global", it: "Locale e globale" } },
        { id: "app-lists", soon: true, title: { en: "Lists", es: "Listas", it: "Liste" } }
      ]
    },
    {
      id: "inventor",
      name: { en: "Inventor", es: "Inventor", it: "Inventore" },
      blurb: {
        en: "Think in objects. Classes, inheritance, overloading, interfaces and polymorphism.",
        es: "Piensa en objetos. Clases, herencia, sobrecarga, interfaces y polimorfismo.",
        it: "Pensa a oggetti. Classi, ereditarietà, overloading, interfacce e polimorfismo."
      },
      badge: { glyph: "crown", name: { en: "Inventor", es: "Inventor", it: "Inventore" }, desc: { en: "Complete every Inventor module", es: "Completa todos los módulos de Inventor", it: "Completa tutti i moduli Inventore" } },
      modules: [
        { id: "inv-classes" },
        { id: "inv-inheritance" },
        { id: "inv-overloading", soon: true, title: { en: "Same name, different jobs", es: "Mismo nombre, distintos trabajos", it: "Stesso nome, lavori diversi" } },
        { id: "inv-encapsulation", soon: true, title: { en: "Encapsulation", es: "Encapsulamiento", it: "Incapsulamento" } },
        { id: "inv-interfaces", soon: true, title: { en: "Interfaces", es: "Interfaces", it: "Interfacce" } },
        { id: "inv-polymorphism", soon: true, title: { en: "Polymorphism", es: "Polimorfismo", it: "Polimorfismo" } }
      ]
    }
  ],

  /* LEVEL QUIZ: score decides the suggested stage (bands). `answer` is the index of the right option (0 = first). */
  placement: {
    bands: [ { min: 0, stage: 0 }, { min: 4, stage: 1 }, { min: 7, stage: 2 } ],
    questions: [
      {
        q: { en: "What does this program show at the end?", es: "¿Qué muestra este programa al final?", it: "Cosa mostra questo programma alla fine?" },
        code: "x = 2\nx = x + 3\nprint x",
        options: ["2", "5", "x + 3"],
        answer: 1
      },
      {
        q: { en: "How many times is “hello” printed?", es: "¿Cuántas veces se imprime “hello”?", it: "Quante volte viene stampato “hello”?" },
        code: "repeat 3 times:\n    print \"hello\"\nprint \"bye\"",
        options: ["1", "3", "4"],
        answer: 1
      },
      {
        q: { en: "If `age` is 12, what is printed?", es: "Si `age` vale 12, ¿qué se imprime?", it: "Se `age` vale 12, cosa viene stampato?" },
        code: "if age >= 14:\n    print \"teen\"\nelse:\n    print \"kid\"",
        options: ["teen", "kid", "teen and kid"],
        answer: 1
      },
      {
        q: { en: "Which Java type fits the value `3.5`?", es: "¿Qué tipo de Java sirve para el valor `3.5`?", it: "Quale tipo Java va bene per il valore `3.5`?" },
        options: ["`int`", "`double`", "`boolean`"],
        answer: 1
      },
      {
        q: { en: "What does this method return when called as `twice(4)`?", es: "¿Qué devuelve este método con `twice(4)`?", it: "Cosa restituisce questo metodo chiamato come `twice(4)`?" },
        code: "int twice(int n) {\n    return n * 2;\n}",
        options: ["4", "8", "n * 2"],
        answer: 1
      },
      {
        q: { en: "What happens on the last line?", es: "¿Qué pasa en la última línea?", it: "Cosa succede all'ultima riga?" },
        code: "void greet() {\n    String msg = \"Hi\";\n}\n\nSystem.out.println(msg);",
        options: [
          { en: "It prints Hi", es: "Imprime Hi", it: "Stampa Hi" },
          { en: "Error: `msg` only exists inside `greet`", es: "Error: `msg` solo existe dentro de `greet`", it: "Errore: `msg` esiste solo dentro `greet`" },
          { en: "It prints nothing", es: "No imprime nada", it: "Non stampa niente" }
        ],
        answer: 1
      },
      {
        q: { en: "In `Dog rex = new Dog();` what is `Dog`, and what is `rex`?", es: "En `Dog rex = new Dog();` ¿qué es `Dog` y qué es `rex`?", it: "In `Dog rex = new Dog();` cos'è `Dog` e cos'è `rex`?" },
        options: [
          { en: "`Dog` is a class, `rex` refers to an object", es: "`Dog` es una clase, `rex` apunta a un objeto", it: "`Dog` è una classe, `rex` si riferisce a un oggetto" },
          { en: "`Dog` is an object, `rex` is a class", es: "`Dog` es un objeto, `rex` es una clase", it: "`Dog` è un oggetto, `rex` è una classe" },
          { en: "Both are methods", es: "Los dos son métodos", it: "Sono entrambi metodi" }
        ],
        answer: 0
      },
      {
        q: { en: "What is printed?", es: "¿Qué se imprime?", it: "Cosa viene stampato?" },
        code: "class Animal {\n    String sound() { return \"...\"; }\n}\nclass Cat extends Animal {\n    String sound() { return \"Meow\"; }\n}\n\nAnimal a = new Cat();\nSystem.out.println(a.sound());",
        options: ["...", "Meow", "Error"],
        answer: 1
      }
    ]
  }
});
