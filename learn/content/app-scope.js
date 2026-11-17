/* APPRENTICE · mission 3: Local and global (where a variable lives), Java */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var inside = function (fn, vars) { return { name: T("Inside " + fn, "Dentro de " + fn, "Dentro " + fn), vars: vars }; };

  MG.module({
    id: "app-scope",
    title: T("Local and global", "Local y global", "Locale e globale"),
    summary: T(
      "Every variable lives somewhere: inside a function, or in the whole program. Where you create it decides who can use it.",
      "Cada variable vive en algún sitio: dentro de una función o en todo el programa. Dónde la creas decide quién puede usarla.",
      "Ogni variabile vive da qualche parte: dentro una funzione, o in tutto il programma. Dove la crei decide chi la può usare."
    ),

    learn: [
      {
        title: T("A box that lives inside a function", "Una caja que vive dentro de una función", "Una scatola che vive dentro una funzione"),
        text: T(
          "A variable created **inside** a function is **local**: it is born when the function starts and disappears when it ends. Outside, nobody can see it.",
          "Una variable creada **dentro** de una función es **local**: nace cuando la función empieza y desaparece cuando termina. Fuera, nadie puede verla.",
          "Una variabile creata **dentro** una funzione è **locale**: nasce quando la funzione comincia e sparisce quando finisce. Fuori, nessuno la può vedere."
        ),
        code: "void bonus() {\n    int extra = 5;\n    System.out.println(extra);\n}\n\nbonus();\nSystem.out.println(extra);   // ERROR",
        viz: {
          type: "memory",
          steps: [
            { line: 6, note: T("Call `bonus`: its temporary box opens.", "Se llama a `bonus`: se abre su caja temporal.", "Chiamiamo `bonus`: si apre la sua scatola temporanea."), frames: [main(), inside("bonus", {})] },
            { line: 2, note: T("`extra` is born **inside** the function.", "`extra` nace **dentro** de la función.", "`extra` nasce **dentro** la funzione."), frames: [main(), inside("bonus", { extra: "5" })] },
            { line: 3, note: T("Inside, it can be used.", "Dentro, se puede usar.", "Dentro, si può usare."), frames: [main(), inside("bonus", { extra: "5" })], out: ["5"] },
            { line: 7, note: T("The function has ended and `extra` is gone. Java refuses this line: `extra` doesn't exist here.", "La función ha terminado y `extra` ya no existe. Java rechaza esta línea: aquí `extra` no existe.", "La funzione è finita e `extra` non c'è più. Java rifiuta questa riga: qui `extra` non esiste."), frames: [main()], out: ["5"] }
          ]
        }
      },
      {
        title: T("A box for everybody: global", "Una caja para todos: global", "Una scatola per tutti: globale"),
        text: T(
          "A variable created **outside** all functions belongs to the whole program: it's **global**. Every function can read it and change it, and it stays alive until the program ends.\n\nGood for things the whole game shares, like the score.",
          "Una variable creada **fuera** de todas las funciones pertenece a todo el programa: es **global**. Todas las funciones pueden leerla y cambiarla, y sigue viva hasta que el programa termina.\n\nViene bien para cosas que comparte todo el juego, como los puntos.",
          "Una variabile creata **fuori** da tutte le funzioni appartiene a tutto il programma: è **globale**. Ogni funzione la può leggere e cambiare, e resta viva fino alla fine del programma.\n\nVa bene per le cose che tutto il gioco condivide, come il punteggio."
        ),
        code: "int score = 0;\n\nvoid addPoints(int p) {\n    score = score + p;\n}\n\naddPoints(10);\naddPoints(5);\nSystem.out.println(score);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("`score` is created outside every function: it belongs to the program.", "`score` se crea fuera de todas las funciones: pertenece al programa.", "`score` è creata fuori da tutte le funzioni: appartiene al programma."), frames: [main({ score: "0" })] },
            { line: 7, note: T("Call with `p` = 10.", "Llamada con `p` = 10.", "Chiamata con `p` = 10."), frames: [main({ score: "0" }), inside("addPoints", { p: "10" })] },
            { line: 4, note: T("The function changes the **global** box: 0 + 10.", "La función cambia la caja **global**: 0 + 10.", "La funzione cambia la scatola **globale**: 0 + 10."), frames: [main({ score: "10" }), inside("addPoints", { p: "10" })] },
            { line: 8, note: T("`p` is gone, but `score` keeps its 10. New call with 5.", "`p` ha desaparecido, pero `score` conserva su 10. Nueva llamada con 5.", "`p` è sparita, ma `score` tiene il suo 10. Nuova chiamata con 5."), frames: [main({ score: "10" }), inside("addPoints", { p: "5" })] },
            { line: 4, note: T("10 + 5 = 15", "10 + 5 = 15", "10 + 5 = 15"), frames: [main({ score: "15" }), inside("addPoints", { p: "5" })] },
            { line: 9, note: T("The global box remembers everything.", "La caja global lo recuerda todo.", "La scatola globale si ricorda tutto."), frames: [main({ score: "15" })], out: ["15"] }
          ]
        }
      },
      {
        title: T("Same name, two different boxes", "El mismo nombre, dos cajas distintas", "Stesso nome, due scatole diverse"),
        text: T(
          "If a function creates a local variable with the **same name** as a global one, inside the function the local one wins. The global one is not touched.",
          "Si una función crea una variable local con el **mismo nombre** que una global, dentro de la función gana la local. La global no se toca.",
          "Se una funzione crea una variabile locale con lo **stesso nome** di una globale, dentro la funzione vince quella locale. Quella globale non viene toccata."
        ),
        code: "int lives = 3;\n\nvoid test() {\n    int lives = 99;\n    System.out.println(lives);\n}\n\ntest();\nSystem.out.println(lives);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("Global `lives` = 3.", "`lives` global = 3.", "`lives` globale = 3."), frames: [main({ lives: "3" })] },
            { line: 8, note: T("Call `test`.", "Se llama a `test`.", "Chiamiamo `test`."), frames: [main({ lives: "3" }), inside("test", {})] },
            { line: 4, note: T("A **new** local box with the same name. Two boxes called `lives`!", "Una caja local **nueva** con el mismo nombre. ¡Dos cajas llamadas `lives`!", "Una **nuova** scatola locale con lo stesso nome. Due scatole che si chiamano `lives`!"), frames: [main({ lives: "3" }), inside("test", { lives: "99" })] },
            { line: 5, note: T("Inside the function, the local one wins: 99.", "Dentro de la función gana la local: 99.", "Dentro la funzione vince quella locale: 99."), frames: [main({ lives: "3" }), inside("test", { lives: "99" })], out: ["99"] },
            { line: 9, note: T("Outside, only the global one is left: still 3.", "Fuera solo queda la global: sigue en 3.", "Fuori resta solo quella globale: ancora 3."), frames: [main({ lives: "3" })], out: ["99", "3"] }
          ]
        }
      },
      {
        title: T("Local is usually better", "Local suele ser mejor", "Di solito è meglio locale"),
        text: T(
          "Globals are handy, but if every function can change them, it's hard to know who changed what. Programmers prefer to pass values in as **parameters** and get them back with `return`.",
          "Las globales son cómodas, pero si todas las funciones pueden cambiarlas, es difícil saber quién cambió qué. Los programadores prefieren pasar los valores como **parámetros** y recibirlos con `return`.",
          "Le variabili globali sono comode, ma se ogni funzione le può cambiare è difficile capire chi ha cambiato cosa. I programmatori preferiscono passare i valori come **parametri** e riaverli con `return`."
        ),
        code: "int addPoints(int score, int p) {\n    return score + p;\n}\n\nint score = 0;\nscore = addPoints(score, 10);",
        after: T(
          "Here the function changes nothing outside: it receives two numbers and gives back the result. You decide what to do with it, on the last line.",
          "Aquí la función no cambia nada de fuera: recibe dos números y devuelve el resultado. Tú decides qué hacer con él, en la última línea.",
          "Qui la funzione non cambia niente fuori: riceve due numeri e restituisce il risultato. Decidi tu cosa farne, nell'ultima riga."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("A variable created inside a function is…", "Una variable creada dentro de una función es…", "Una variabile creata dentro una funzione è…"),
        options: [T("local", "local", "locale"), T("global", "global", "globale"), T("eternal", "eterna", "eterna")],
        answer: 0,
        explain: T("It only lives during the call.", "Solo vive durante la llamada.", "Vive solo durante la chiamata.")
      },
      {
        id: "q2", type: "choice",
        q: T("When does a global variable disappear?", "¿Cuándo desaparece una variable global?", "Quando sparisce una variabile globale?"),
        options: [
          T("When the program ends", "Cuando termina el programa", "Quando finisce il programma"),
          T("At the end of every function", "Al final de cada función", "Alla fine di ogni funzione"),
          T("After it's printed", "Después de imprimirla", "Dopo che è stata stampata")
        ],
        answer: 0,
        explain: T("Globals belong to the whole program.", "Las globales pertenecen a todo el programa.", "Le globali appartengono a tutto il programma.")
      },
      {
        id: "q3", type: "choice",
        q: T("What does this program print?", "¿Qué imprime este programa?", "Cosa stampa questo programma?"),
        code: "int coins = 1;\n\nvoid find() {\n    coins = coins + 1;\n}\n\nfind();\nfind();\nSystem.out.println(coins);",
        options: ["1", "2", "3"],
        answer: 2,
        explain: T("Both calls change the same global box: 1 + 1 + 1.", "Las dos llamadas cambian la misma caja global: 1 + 1 + 1.", "Le due chiamate cambiano la stessa scatola globale: 1 + 1 + 1.")
      },
      {
        id: "q4", type: "choice",
        q: T("And this one?", "¿Y este?", "E questo?"),
        code: "int coins = 1;\n\nvoid find() {\n    int coins = 50;\n}\n\nfind();\nSystem.out.println(coins);",
        options: ["1", "50", "51"],
        answer: 0,
        explain: T("`int coins = 50` creates a **new** local box. The global one stays 1.", "`int coins = 50` crea una caja local **nueva**. La global sigue en 1.", "`int coins = 50` crea una **nuova** scatola locale. Quella globale resta 1.")
      },
      {
        id: "q5", type: "choice",
        q: T("Why do programmers prefer local variables?", "¿Por qué los programadores prefieren las variables locales?", "Perché i programmatori preferiscono le variabili locali?"),
        options: [
          T("It's easier to know who changes what", "Es más fácil saber quién cambia qué", "È più facile capire chi cambia cosa"),
          T("They are faster to type", "Se escriben más rápido", "Si scrivono più in fretta"),
          T("Globals are not allowed in Java", "En Java las globales no están permitidas", "In Java le globali non sono permesse")
        ],
        answer: 0,
        explain: T("Fewer boxes that everybody can touch means fewer surprises.", "Menos cajas que todos pueden tocar significa menos sorpresas.", "Meno scatole che tutti possono toccare vuol dire meno sorprese.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "int level = 1;\n\nvoid levelUp() {\n    level = level + 1;\n    System.out.println(level);\n}\n\nlevelUp();\nlevelUp();\nSystem.out.println(level);",
        answer: "2\n3\n3",
        hint: T("There's only one `level` box, and both calls change it.", "Solo hay una caja `level`, y las dos llamadas la cambian.", "C'è una sola scatola `level`, e tutte e due le chiamate la cambiano."),
        explain: T("1 → 2 (print 2), 2 → 3 (print 3), then the last line prints 3 again.", "1 → 2 (imprime 2), 2 → 3 (imprime 3), y la última línea vuelve a imprimir 3.", "1 → 2 (stampa 2), 2 → 3 (stampa 3), poi l'ultima riga stampa di nuovo 3.")
      },
      {
        id: "p2", type: "bug",
        q: T("Java refuses this program. Click the wrong line.", "Java rechaza este programa. Haz clic en la línea equivocada.", "Java rifiuta questo programma. Clicca la riga sbagliata."),
        code: "int total = 0;\n\nvoid shop() {\n    int price = 4;\n    total = total + price;\n}\n\nshop();\nSystem.out.println(price);",
        line: 9,
        hint: T("Which variable only exists inside `shop`?", "¿Qué variable existe solo dentro de `shop`?", "Quale variabile esiste solo dentro `shop`?"),
        explain: T("`price` is local to `shop` and disappears when it ends. `total` is global, so it would be fine.", "`price` es local de `shop` y desaparece cuando termina. `total` es global, así que estaría bien.", "`price` è locale di `shop` e sparisce quando finisce. `total` è globale, quindi andrebbe bene.")
      },
      {
        id: "p3", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "int a = 1;\nint b = 1;\n\nvoid change() {\n    int a = 10;\n    b = 10;\n}\n\nchange();",
        rows: [
          { label: "`a`", answer: "1" },
          { label: "`b`", answer: "10" }
        ],
        hint: T("Inside `change`, one line creates a new box and the other changes an existing one.", "Dentro de `change`, una línea crea una caja nueva y la otra cambia una que ya existe.", "Dentro `change`, una riga crea una scatola nuova e l'altra cambia una che esiste già."),
        explain: T("`int a = 10` is a new local box, so the global `a` stays 1. `b = 10` has no type in front: it changes the global `b`.", "`int a = 10` es una caja local nueva, así que la `a` global sigue en 1. `b = 10` no lleva tipo delante: cambia la `b` global.", "`int a = 10` è una nuova scatola locale, quindi la `a` globale resta 1. `b = 10` non ha il tipo davanti: cambia la `b` globale.")
      },
      {
        id: "p4", type: "fill",
        q: T("Make `heal` change the **global** `health`, so that the program prints 100.", "Haz que `heal` cambie la `health` **global**, para que el programa imprima 100.", "Fai in modo che `heal` cambi la `health` **globale**, così il programma stampa 100."),
        code: "int health = 60;\n\nvoid heal() {\n    [[health]] = health + 40;\n}\n\nheal();\nSystem.out.println(health);",
        hint: T("Don't write a type in front, or you'd create a new local box.", "No escribas un tipo delante, o crearías una caja local nueva.", "Non scrivere il tipo davanti, altrimenti creeresti una nuova scatola locale."),
        explain: T("`health = health + 40;` without `int` changes the global box: 60 + 40 = 100.", "`health = health + 40;` sin `int` cambia la caja global: 60 + 40 = 100.", "`health = health + 40;` senza `int` cambia la scatola globale: 60 + 40 = 100.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("Careful with the names! What does this print?", "¡Cuidado con los nombres! ¿Qué imprime esto?", "Attento ai nomi! Cosa stampa questo?"),
        code: "int x = 5;\n\nvoid show(int x) {\n    x = x * 2;\n    System.out.println(x);\n}\n\nshow(3);\nshow(x);\nSystem.out.println(x);",
        answer: "6\n10\n5",
        hint: T("A parameter is a local box too, even if it has the same name as a global.", "Un parámetro también es una caja local, aunque se llame igual que una global.", "Anche un parametro è una scatola locale, anche se ha lo stesso nome di una globale."),
        explain: T("show(3): local x = 3 → 6. show(x): local x gets a copy of 5 → 10. The global x was never touched: 5.", "show(3): x local = 3 → 6. show(x): la x local recibe una copia de 5 → 10. La x global nunca se tocó: 5.", "show(3): x locale = 3 → 6. show(x): la x locale riceve una copia di 5 → 10. La x globale non è mai stata toccata: 5.")
      },
      {
        id: "c2", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "int score = 0;\nint bonus = 3;\n\nint add(int points) {\n    int bonus = 1;\n    score = score + points + bonus;\n    return score;\n}\n\nint last = add(10);\nlast = add(last);",
        rows: [
          { label: "`score`", answer: "23" },
          { label: "`bonus`", answer: "3" },
          { label: "`last`", answer: "23" }
        ],
        hint: T("Inside `add`, `bonus` is the local one (1). `score` is global and keeps growing.", "Dentro de `add`, `bonus` es la local (1). `score` es global y sigue creciendo.", "Dentro `add`, `bonus` è quella locale (1). `score` è globale e continua a crescere."),
        explain: T("First call: 0 + 10 + 1 = 11, so last = 11. Second call: points is 11, so 11 + 11 + 1 = 23, and last = 23. The global bonus is never used: it stays 3.", "Primera llamada: 0 + 10 + 1 = 11, así que last = 11. Segunda llamada: points vale 11, así que 11 + 11 + 1 = 23, y last = 23. La bonus global no se usa nunca: sigue en 3.", "Prima chiamata: 0 + 10 + 1 = 11, quindi last = 11. Seconda chiamata: points vale 11, quindi 11 + 11 + 1 = 23, e last = 23. La bonus globale non viene mai usata: resta 3.")
      }
    ]
  });
})();
