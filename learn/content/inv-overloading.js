/* INVENTOR · mission 3: Overloading (same name, different parameters) */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var robot = { id: "@1", cls: "Robot", fields: {} };
  var player = function (id, name, lives) { return { id: id, cls: "Player", fields: { name: name, lives: lives } }; };

  MG.module({
    id: "inv-overloading",
    title: T("Same name, different jobs", "Mismo nombre, distintos trabajos", "Stesso nome, lavori diversi"),
    summary: T(
      "One method name, several versions: Java picks the right one by looking at what you pass in.",
      "Un nombre de método, varias versiones: Java elige la correcta mirando lo que le pasas.",
      "Un solo nome di metodo, più versioni: Java sceglie quella giusta guardando cosa gli passi."
    ),

    learn: [
      {
        title: T("Three methods called say", "Tres métodos que se llaman say", "Tre metodi che si chiamano say"),
        text: T(
          "A class can have several methods with the **same name**, as long as their **parameters** are different: how many there are, or of which type. This is called **overloading**.",
          "Una clase puede tener varios métodos con el **mismo nombre**, siempre que sus **parámetros** sean distintos: cuántos hay o de qué tipo. Esto se llama **sobrecarga**.",
          "Una classe può avere più metodi con lo **stesso nome**, purché i loro **parametri** siano diversi: quanti sono, o di che tipo. Questo si chiama **overloading** (sovraccarico)."
        ),
        code: "class Robot {\n    void say() {\n        System.out.println(\"Beep\");\n    }\n    void say(String word) {\n        System.out.println(word);\n    }\n    void say(String word, int times) {\n        for (int i = 0; i < times; i++) {\n            System.out.println(word);\n        }\n    }\n}",
        after: T(
          "Same name, three different jobs: say nothing special, say a word, say a word several times.",
          "El mismo nombre, tres trabajos distintos: decir lo de siempre, decir una palabra, decir una palabra varias veces.",
          "Stesso nome, tre lavori diversi: dire la solita cosa, dire una parola, dire una parola più volte."
        )
      },
      {
        title: T("Java chooses by the arguments", "Java elige por los argumentos", "Java sceglie in base agli argomenti"),
        text: T(
          "When you call `say`, Java looks at what's between the brackets and picks the version that matches.\n\nPress **Next line** and watch which version runs.",
          "Cuando llamas a `say`, Java mira lo que hay entre los paréntesis y elige la versión que encaja.\n\nPulsa **Siguiente línea** y mira qué versión se ejecuta.",
          "Quando chiami `say`, Java guarda cosa c'è tra le parentesi e sceglie la versione che corrisponde.\n\nPremi **Riga successiva** e guarda quale versione viene eseguita."
        ),
        code: "Robot bit = new Robot();\nbit.say();\nbit.say(\"Hi\");\nbit.say(\"Go\", 2);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A new robot.", "Un robot nuevo.", "Un robot nuovo."), frames: [main({ bit: "@1" })], heap: [robot] },
            { line: 2, note: T("Nothing in the brackets → the version **without parameters**.", "Nada entre los paréntesis → la versión **sin parámetros**.", "Niente tra le parentesi → la versione **senza parametri**."), frames: [main({ bit: "@1" })], heap: [robot], out: ["Beep"] },
            { line: 3, note: T("One text → the version with **String word**.", "Un texto → la versión con **String word**.", "Un testo → la versione con **String word**."), frames: [main({ bit: "@1" })], heap: [robot], out: ["Beep", "Hi"] },
            { line: 4, note: T("A text and a number → the version with **word and times**.", "Un texto y un número → la versión con **word y times**.", "Un testo e un numero → la versione con **word e times**."), frames: [main({ bit: "@1" })], heap: [robot], out: ["Beep", "Hi", "Go", "Go"] }
          ]
        }
      },
      {
        title: T("Constructors too", "También los constructores", "Anche i costruttori"),
        text: T(
          "Constructors can be overloaded as well. Here you can create a player with the standard 3 lives, or choose how many.",
          "Los constructores también se pueden sobrecargar. Aquí puedes crear un jugador con las 3 vidas de siempre, o elegir cuántas.",
          "Anche i costruttori si possono sovraccaricare. Qui puoi creare un giocatore con le solite 3 vite, oppure scegliere quante."
        ),
        code: "class Player {\n    String name;\n    int lives;\n    Player(String name) {\n        this.name = name;\n        this.lives = 3;\n    }\n    Player(String name, int lives) {\n        this.name = name;\n        this.lives = lives;\n    }\n}\n\nPlayer a = new Player(\"Ada\");\nPlayer b = new Player(\"Leo\", 5);",
        viz: {
          type: "memory",
          steps: [
            { line: 14, note: T("One argument → the first constructor: 3 lives.", "Un argumento → el primer constructor: 3 vidas.", "Un argomento → il primo costruttore: 3 vite."), frames: [main({ a: "@1" })], heap: [player("@1", "\"Ada\"", "3")] },
            { line: 15, note: T("Two arguments → the second constructor: Leo chooses 5.", "Dos argumentos → el segundo constructor: Leo elige 5.", "Due argomenti → il secondo costruttore: Leo sceglie 5."), frames: [main({ a: "@1", b: "@2" })], heap: [player("@1", "\"Ada\"", "3"), player("@2", "\"Leo\"", "5")] }
          ]
        }
      },
      {
        title: T("What doesn't count", "Lo que no cuenta", "Cosa non conta"),
        text: T(
          "Java only looks at the **number** and the **types** of the parameters. Changing just the return type, or just the parameter names, is not enough: Java wouldn't know which one to pick.",
          "Java solo mira el **número** y los **tipos** de los parámetros. Cambiar solo el tipo de retorno, o solo los nombres de los parámetros, no basta: Java no sabría cuál elegir.",
          "Java guarda solo il **numero** e i **tipi** dei parametri. Cambiare solo il tipo restituito, o solo i nomi dei parametri, non basta: Java non saprebbe quale scegliere."
        ),
        code: "int area(int side) { return side * side; }\nint area(int w, int h) { return w * h; }     // OK: 2 parameters\ndouble area(int side) { return 0.5; }        // ERROR: same as line 1\nint area(int length) { return length; }      // ERROR: only the name changed",
        after: T(
          "The name plus the list of parameter types is called the **signature** of the method. Two methods in the same class can't have the same signature.",
          "El nombre más la lista de tipos de los parámetros se llama **firma** del método. Dos métodos de la misma clase no pueden tener la misma firma.",
          "Il nome più l'elenco dei tipi dei parametri si chiama **firma** del metodo. Due metodi della stessa classe non possono avere la stessa firma."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("With the Robot class from the lesson, which version runs for `bit.say(\"Yes\")`?", "Con la clase Robot de la lección, ¿qué versión se ejecuta con `bit.say(\"Yes\")`?", "Con la classe Robot della lezione, quale versione viene eseguita con `bit.say(\"Yes\")`?"),
        options: ["`say()`", "`say(String word)`", "`say(String word, int times)`"],
        answer: 1,
        explain: T("One String argument matches the version with one String parameter.", "Un argumento String encaja con la versión de un parámetro String.", "Un argomento String corrisponde alla versione con un parametro String.")
      },
      {
        id: "q2", type: "choice",
        q: T("What decides which version is called?", "¿Qué decide qué versión se llama?", "Cosa decide quale versione viene chiamata?"),
        options: [
          T("The number and types of the arguments", "El número y los tipos de los argumentos", "Il numero e i tipi degli argomenti"),
          T("The order in which the methods are written", "El orden en que están escritos los métodos", "L'ordine in cui sono scritti i metodi"),
          T("The return type", "El tipo de retorno", "Il tipo restituito")
        ],
        answer: 0,
        explain: T("Java matches the call to the method with the same list of parameter types.", "Java empareja la llamada con el método que tiene la misma lista de tipos de parámetros.", "Java abbina la chiamata al metodo con lo stesso elenco di tipi di parametri.")
      },
      {
        id: "q3", type: "choice",
        q: T("Can these two methods live in the same class?", "¿Pueden estar estos dos métodos en la misma clase?", "Questi due metodi possono stare nella stessa classe?"),
        code: "int twice(int n) { return n * 2; }\nString twice(int n) { return n + \"\" + n; }",
        options: [T("No", "No", "No"), T("Yes", "Sí", "Sì")],
        answer: 0,
        explain: T("Same name and same parameters (one int): only the return type changes, and that's not enough.", "Mismo nombre y mismos parámetros (un int): solo cambia el tipo de retorno, y eso no basta.", "Stesso nome e stessi parametri (un int): cambia solo il tipo restituito, e non basta.")
      },
      {
        id: "q4", type: "choice",
        q: T("And these two?", "¿Y estos dos?", "E questi due?"),
        code: "void show(int n) { }\nvoid show(String s) { }",
        options: [T("Yes", "Sí", "Sì"), T("No", "No", "No")],
        answer: 0,
        explain: T("The parameter types are different (int and String), so it's valid overloading.", "Los tipos de los parámetros son distintos (int y String), así que es una sobrecarga válida.", "I tipi dei parametri sono diversi (int e String), quindi è un overloading valido.")
      },
      {
        id: "q5", type: "choice",
        q: T("`new Player(\"Ada\")` with the Player class from the lesson: how many lives does Ada have?", "`new Player(\"Ada\")` con la clase Player de la lección: ¿cuántas vidas tiene Ada?", "`new Player(\"Ada\")` con la classe Player della lezione: quante vite ha Ada?"),
        options: ["0", "3", "5"],
        answer: 1,
        explain: T("One argument calls the first constructor, which sets 3 lives.", "Un argumento llama al primer constructor, que pone 3 vidas.", "Un argomento chiama il primo costruttore, che mette 3 vite.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "class Printer {\n    void show(int n) {\n        System.out.println(\"number \" + n);\n    }\n    void show(String s) {\n        System.out.println(\"text \" + s);\n    }\n}\n\nPrinter p = new Printer();\np.show(5);\np.show(\"5\");",
        answer: "number 5\ntext 5",
        hint: T("Is `5` the same as `\"5\"`?", "¿`5` es lo mismo que `\"5\"`?", "`5` è uguale a `\"5\"`?"),
        explain: T("`5` is an int, `\"5\"` is a String: two different versions.", "`5` es un int, `\"5\"` es un String: dos versiones distintas.", "`5` è un int, `\"5\"` è una String: due versioni diverse.")
      },
      {
        id: "p2", type: "bug",
        q: T("Java refuses this class. Click the wrong line.", "Java rechaza esta clase. Haz clic en la línea equivocada.", "Java rifiuta questa classe. Clicca la riga sbagliata."),
        code: "class Calc {\n    int add(int a, int b) { return a + b; }\n    int add(int a, int b, int c) { return a + b + c; }\n    int add(int x, int y) { return x + y; }\n    double add(double a, double b) { return a + b; }\n}",
        line: 4,
        hint: T("Look for two methods with the same number and types of parameters.", "Busca dos métodos con el mismo número y los mismos tipos de parámetros.", "Cerca due metodi con lo stesso numero e gli stessi tipi di parametri."),
        explain: T("Line 4 has two int parameters, just like line 2: only the names changed. Line 5 is fine: its types are double.", "La línea 4 tiene dos parámetros int, igual que la línea 2: solo han cambiado los nombres. La línea 5 está bien: sus tipos son double.", "La riga 4 ha due parametri int, proprio come la riga 2: sono cambiati solo i nomi. La riga 5 va bene: i suoi tipi sono double.")
      },
      {
        id: "p3", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "class Box {\n    int size;\n    Box() {\n        size = 1;\n    }\n    Box(int s) {\n        size = s;\n    }\n}\n\nBox a = new Box();\nBox b = new Box(7);\nint total = a.size + b.size;",
        rows: [
          { label: "`a.size`", answer: "1" },
          { label: "`b.size`", answer: "7" },
          { label: "`total`", answer: "8" }
        ],
        hint: T("Which constructor runs for `new Box()` and which for `new Box(7)`?", "¿Qué constructor se ejecuta con `new Box()` y cuál con `new Box(7)`?", "Quale costruttore viene eseguito con `new Box()` e quale con `new Box(7)`?"),
        explain: T("No argument → size 1. One int → size 7. 1 + 7 = 8.", "Sin argumento → size 1. Un int → size 7. 1 + 7 = 8.", "Nessun argomento → size 1. Un int → size 7. 1 + 7 = 8.")
      },
      {
        id: "p4", type: "fill",
        q: T("Add a second version of `area` for rectangles, so that the last line gives 10.", "Añade una segunda versión de `area` para rectángulos, para que la última línea dé 10.", "Aggiungi una seconda versione di `area` per i rettangoli, in modo che l'ultima riga dia 10."),
        code: "int area(int side) {\n    return side * side;\n}\nint [[area]](int w, int [[h]]) {\n    return w * h;\n}\n\nint r = area(2, 5);",
        hint: T("Same name as the first method, and a second parameter called like the one used in return.", "El mismo nombre que el primer método, y un segundo parámetro que se llame como el del return.", "Stesso nome del primo metodo, e un secondo parametro che si chiami come quello usato nel return."),
        explain: T("`area(int w, int h)` has two parameters, so it's a different version from `area(int side)`.", "`area(int w, int h)` tiene dos parámetros, así que es una versión distinta de `area(int side)`.", "`area(int w, int h)` ha due parametri, quindi è una versione diversa da `area(int side)`.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("Same name, different types. What does this print?", "El mismo nombre, tipos distintos. ¿Qué imprime esto?", "Stesso nome, tipi diversi. Cosa stampa questo?"),
        code: "class Mixer {\n    String join(int a, int b) {\n        return \"\" + (a + b);\n    }\n    String join(String a, String b) {\n        return a + b;\n    }\n}\n\nMixer m = new Mixer();\nSystem.out.println(m.join(2, 3));\nSystem.out.println(m.join(\"2\", \"3\"));",
        answer: "5\n23",
        hint: T("With numbers, `+` adds. With texts, `+` glues.", "Con números, `+` suma. Con textos, `+` pega.", "Con i numeri `+` somma. Con i testi `+` incolla."),
        explain: T("join(2, 3) uses the int version: 2 + 3 = 5. join(\"2\", \"3\") uses the String version: \"23\".", "join(2, 3) usa la versión int: 2 + 3 = 5. join(\"2\", \"3\") usa la versión String: \"23\".", "join(2, 3) usa la versione int: 2 + 3 = 5. join(\"2\", \"3\") usa la versione String: \"23\".")
      },
      {
        id: "c2", type: "trace",
        q: T("Three constructors! How much is each variable worth when the program ends? Write the values in the boxes.", "¡Tres constructores! ¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Tre costruttori! Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "class Hero {\n    String name;\n    int power;\n    Hero() {\n        name = \"Bit\";\n        power = 1;\n    }\n    Hero(int p) {\n        name = \"Bit\";\n        power = p;\n    }\n    Hero(String n, int p) {\n        name = n;\n        power = p * 2;\n    }\n}\n\nHero a = new Hero();\nHero b = new Hero(4);\nHero c = new Hero(\"Ada\", 4);\nint total = a.power + b.power + c.power;",
        rows: [
          { label: "`b.power`", answer: "4" },
          { label: "`c.name`", answer: "Ada" },
          { label: "`c.power`", answer: "8" },
          { label: "`total`", answer: "13" }
        ],
        hint: T("Match each `new Hero(...)` with the constructor that has the same parameters.", "Empareja cada `new Hero(...)` con el constructor que tiene los mismos parámetros.", "Abbina ogni `new Hero(...)` al costruttore che ha gli stessi parametri."),
        explain: T("a: no arguments → power 1. b: one int → power 4. c: a String and an int → name Ada, power 4 × 2 = 8. Total 1 + 4 + 8 = 13.", "a: sin argumentos → power 1. b: un int → power 4. c: un String y un int → name Ada, power 4 × 2 = 8. Total 1 + 4 + 8 = 13.", "a: nessun argomento → power 1. b: un int → power 4. c: una String e un int → name Ada, power 4 × 2 = 8. Totale 1 + 4 + 8 = 13.")
      }
    ]
  });
})();
