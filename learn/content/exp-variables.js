/* EXPLORER · mission 4: Boxes with names (variables), with Scratch-style blocks written as words. */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  /* variable names in the three languages */
  var SC = T("score", "puntos", "punti"), LV = T("lives", "vidas", "vite");
  /* boxes score / lives with their names in each language: B(score, lives) */
  var B = function (sc, lv) {
    var o = { en: {}, es: {}, it: {} };
    if (sc !== undefined) { o.en.score = String(sc); o.es.puntos = String(sc); o.it.punti = String(sc); }
    if (lv !== undefined) { o.en.lives = String(lv); o.es.vidas = String(lv); o.it.vite = String(lv); }
    return o;
  };

  MG.module({
    id: "exp-variables",
    title: T("Boxes with names", "Cajas con nombre", "Scatole con un nome"),
    summary: T(
      "Every game needs to remember things: the score, the lives, the time. That's what variables are for.",
      "Todo juego necesita recordar cosas: los puntos, las vidas, el tiempo. Para eso sirven las variables.",
      "Ogni gioco deve ricordarsi delle cose: i punti, le vite, il tempo. A questo servono le variabili."
    ),

    learn: [
      {
        title: T("A box with a label", "Una caja con etiqueta", "Una scatola con l'etichetta"),
        text: T(
          "A **variable** is a box with a name written on it. The program puts a value inside and can read it whenever it wants.\n\nIn Scratch you use the block **set … to …**. Press **Next line** and watch the boxes.",
          "Una **variable** es una caja con un nombre escrito encima. El programa mete un valor dentro y puede leerlo cuando quiera.\n\nEn Scratch se usa el bloque **dar a … el valor …**. Pulsa **Siguiente línea** y mira las cajas.",
          "Una **variabile** è una scatola con un nome scritto sopra. Il programma ci mette dentro un valore e lo può leggere quando vuole.\n\nIn Scratch si usa il blocco **porta … a …**. Premi **Riga successiva** e guarda le scatole."
        ),
        code: T("set score to 0\nset lives to 3", "dar a puntos el valor 0\ndar a vidas el valor 3", "porta punti a 0\nporta vite a 3"),
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A box called **score**. Inside: 0.", "Una caja llamada **puntos**. Dentro: 0.", "Una scatola che si chiama **punti**. Dentro: 0."), frames: [main(B(0))] },
            { line: 2, note: T("A second box, **lives**, with 3 inside.", "Una segunda caja, **vidas**, con 3 dentro.", "Una seconda scatola, **vite**, con dentro 3."), frames: [main(B(0, 3))] }
          ]
        }
      },
      {
        title: T("Change what's inside", "Cambiar lo que hay dentro", "Cambiare quello che c'è dentro"),
        text: T(
          "**change … by …** adds to what is already in the box. **set … to …** throws away the old value and puts in a new one.",
          "**sumar a … …** suma a lo que ya hay en la caja. **dar a … el valor …** tira el valor viejo y mete uno nuevo.",
          "**cambia … di …** aggiunge a quello che c'è già nella scatola. **porta … a …** butta via il valore vecchio e ne mette uno nuovo."
        ),
        code: T("set score to 0\nchange score by 1\nchange score by 1\nset score to 10", "dar a puntos el valor 0\nsumar a puntos 1\nsumar a puntos 1\ndar a puntos el valor 10", "porta punti a 0\ncambia punti di 1\ncambia punti di 1\nporta punti a 10"),
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("The box starts at 0.", "La caja empieza en 0.", "La scatola parte da 0."), frames: [main(B(0))] },
            { line: 2, note: T("0 + 1 = 1", "0 + 1 = 1", "0 + 1 = 1"), frames: [main(B(1))] },
            { line: 3, note: T("1 + 1 = 2", "1 + 1 = 2", "1 + 1 = 2"), frames: [main(B(2))] },
            { line: 4, note: T("**set** doesn't add: it throws away the 2 and puts in 10.", "**dar el valor** no suma: tira el 2 y mete 10.", "**porta** non aggiunge: butta via il 2 e mette 10."), frames: [main(B(10))] }
          ]
        }
      },
      {
        title: T("Use the box", "Usar la caja", "Usare la scatola"),
        text: T(
          "**say** shows something on the screen. Without quotes, Bit says what's **inside** the box. With quotes, it says the word exactly as it is.",
          "**decir** muestra algo en la pantalla. Sin comillas, Bit dice lo que hay **dentro** de la caja. Con comillas, dice la palabra tal cual.",
          "**di'** mostra qualcosa sullo schermo. Senza virgolette, Bit dice quello che c'è **dentro** la scatola. Con le virgolette, dice la parola così com'è."
        ),
        code: T("set score to 7\nsay score\nsay \"score\"", "dar a puntos el valor 7\ndecir puntos\ndecir \"puntos\"", "porta punti a 7\ndi' punti\ndi' \"punti\""),
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("7 goes into the box.", "El 7 entra en la caja.", "Il 7 entra nella scatola."), frames: [main(B(7))] },
            { line: 2, note: T("No quotes: Bit says what's **inside**.", "Sin comillas: Bit dice lo que hay **dentro**.", "Senza virgolette: Bit dice quello che c'è **dentro**."), frames: [main(B(7))], out: ["7"] },
            { line: 3, note: T("With quotes: Bit says the **word**.", "Con comillas: Bit dice la **palabra**.", "Con le virgolette: Bit dice la **parola**."), frames: [main(B(7))], out: ["7", T("score", "puntos", "punti")] }
          ]
        }
      },
      {
        title: T("Boxes in real code", "Cajas en código de verdad", "Le scatole nel codice vero"),
        text: T(
          "In Java the same blocks look like this. You'll see them again in the Apprentice level:",
          "En Java los mismos bloques se ven así. Los volverás a ver en el nivel Aprendiz:",
          "In Java gli stessi blocchi si scrivono così. Li ritroverai nel livello Apprendista:"
        ),
        code: "int score = 0;\nscore = score + 1;\nSystem.out.println(score);",
        after: T(
          "**set score to 0** → `int score = 0;`\n**change score by 1** → `score = score + 1;`\n**say score** → `System.out.println(score);`",
          "**dar a puntos el valor 0** → `int score = 0;`\n**sumar a puntos 1** → `score = score + 1;`\n**decir puntos** → `System.out.println(score);`",
          "**porta punti a 0** → `int score = 0;`\n**cambia punti di 1** → `score = score + 1;`\n**di' punti** → `System.out.println(score);`"
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What is in **score** at the end?", "¿Qué hay en **puntos** al final?", "Cosa c'è in **punti** alla fine?"),
        code: T("set score to 5\nchange score by 2", "dar a puntos el valor 5\nsumar a puntos 2", "porta punti a 5\ncambia punti di 2"),
        options: ["2", "5", "7"],
        answer: 2,
        explain: T("5, then 2 more: 7.", "5, y luego 2 más: 7.", "5, poi 2 in più: 7.")
      },
      {
        id: "q2", type: "choice",
        q: T("And now?", "¿Y ahora?", "E adesso?"),
        code: T("set score to 5\nset score to 2", "dar a puntos el valor 5\ndar a puntos el valor 2", "porta punti a 5\nporta punti a 2"),
        options: ["2", "5", "7"],
        answer: 0,
        explain: T("**set** throws away the old value: only 2 is left.", "**dar el valor** tira el valor viejo: solo queda 2.", "**porta** butta via il valore vecchio: resta solo 2.")
      },
      {
        id: "q3", type: "choice",
        q: T("What does Bit say?", "¿Qué dice Bit?", "Cosa dice Bit?"),
        code: T("set lives to 3\nsay lives", "dar a vidas el valor 3\ndecir vidas", "porta vite a 3\ndi' vite"),
        options: ["3", T("lives", "vidas", "vite"), "0"],
        answer: 0,
        explain: T("No quotes: Bit says what's inside the box.", "Sin comillas: Bit dice lo que hay dentro de la caja.", "Senza virgolette: Bit dice quello che c'è dentro la scatola.")
      },
      {
        id: "q4", type: "choice",
        q: T("Which block takes away one life?", "¿Qué bloque quita una vida?", "Quale blocco toglie una vita?"),
        options: [
          T("change lives by -1", "sumar a vidas -1", "cambia vite di -1"),
          T("set lives to 1", "dar a vidas el valor 1", "porta vite a 1"),
          T("say lives", "decir vidas", "di' vite")
        ],
        answer: 0,
        explain: T("Adding -1 is the same as taking away 1.", "Sumar -1 es lo mismo que quitar 1.", "Aggiungere -1 è come togliere 1.")
      },
      {
        id: "q5", type: "choice",
        q: T("Why do games use variables?", "¿Por qué los juegos usan variables?", "Perché i giochi usano le variabili?"),
        options: [
          T("To remember things that change, like score and lives", "Para recordar cosas que cambian, como los puntos y las vidas", "Per ricordarsi delle cose che cambiano, come i punti e le vite"),
          T("To draw the characters", "Para dibujar los personajes", "Per disegnare i personaggi"),
          T("To make the game faster", "Para que el juego vaya más rápido", "Per far andare il gioco più veloce")
        ],
        answer: 0,
        explain: T("Without variables the game would forget everything at every step.", "Sin variables el juego lo olvidaría todo a cada paso.", "Senza variabili il gioco dimenticherebbe tutto a ogni passo.")
      }
    ],

    practice: [
      {
        id: "p1", type: "trace",
        q: T("How much is in each box when the program ends? Write the values in the boxes.", "¿Cuánto hay en cada caja cuando termina el programa? Escribe los valores en las casillas.", "Quanto c'è in ogni scatola quando il programma finisce? Scrivi i valori nelle caselle."),
        code: T("set score to 0\nset lives to 3\nchange score by 10\nchange lives by -1\nchange score by 10", "dar a puntos el valor 0\ndar a vidas el valor 3\nsumar a puntos 10\nsumar a vidas -1\nsumar a puntos 10", "porta punti a 0\nporta vite a 3\ncambia punti di 10\ncambia vite di -1\ncambia punti di 10"),
        rows: [
          { label: SC, answer: "20" },
          { label: LV, answer: "2" }
        ],
        hint: T("Follow one box at a time.", "Sigue una caja cada vez.", "Segui una scatola alla volta."),
        explain: T("score: 0 + 10 + 10 = 20. lives: 3 − 1 = 2.", "puntos: 0 + 10 + 10 = 20. vidas: 3 − 1 = 2.", "punti: 0 + 10 + 10 = 20. vite: 3 − 1 = 2.")
      },
      {
        id: "p2", type: "predict",
        q: T("What does Bit say? One line for each **say**.", "¿Qué dice Bit? Una línea por cada **decir**.", "Cosa dice Bit? Una riga per ogni **di'**."),
        code: T("set stars to 2\nsay stars\nchange stars by 3\nsay stars", "dar a estrellas el valor 2\ndecir estrellas\nsumar a estrellas 3\ndecir estrellas", "porta stelle a 2\ndi' stelle\ncambia stelle di 3\ndi' stelle"),
        answer: "2\n5",
        hint: T("Bit says the value inside the box at that moment.", "Bit dice el valor que hay en la caja en ese momento.", "Bit dice il valore che c'è nella scatola in quel momento."),
        explain: T("First 2. Then the box becomes 5, and Bit says 5.", "Primero 2. Luego la caja pasa a 5, y Bit dice 5.", "Prima 2. Poi la scatola diventa 5, e Bit dice 5.")
      },
      {
        id: "p3", type: "fill",
        q: T("Complete the numbers so that at the end **score** is 15.", "Completa los números para que al final **puntos** valga 15.", "Completa i numeri in modo che alla fine **punti** valga 15."),
        code: T("set score to [[5]]\nchange score by 10", "dar a puntos el valor [[5]]\nsumar a puntos 10", "porta punti a [[5]]\ncambia punti di 10"),
        hint: T("? + 10 = 15", "? + 10 = 15", "? + 10 = 15"),
        explain: T("5 + 10 = 15.", "5 + 10 = 15.", "5 + 10 = 15.")
      },
      {
        id: "p4", type: "match",
        q: T("What does each block do?", "¿Qué hace cada bloque?", "Cosa fa ogni blocco?"),
        options: [
          T("puts a new value in the box", "mete un valor nuevo en la caja", "mette un valore nuovo nella scatola"),
          T("adds to the value in the box", "suma al valor de la caja", "aggiunge al valore della scatola"),
          T("shows the value on screen", "muestra el valor en pantalla", "mostra il valore sullo schermo")
        ],
        items: [
          { left: T("set score to 0", "dar a puntos el valor 0", "porta punti a 0"), answer: T("puts a new value in the box", "mete un valor nuevo en la caja", "mette un valore nuovo nella scatola") },
          { left: T("change score by 1", "sumar a puntos 1", "cambia punti di 1"), answer: T("adds to the value in the box", "suma al valor de la caja", "aggiunge al valore della scatola") },
          { left: T("say score", "decir puntos", "di' punti"), answer: T("shows the value on screen", "muestra el valor en pantalla", "mostra il valore sullo schermo") }
        ],
        explain: T("set = replace, change = add, say = show.", "dar el valor = sustituir, sumar = añadir, decir = mostrar.", "porta = sostituisci, cambia = aggiungi, di' = mostra.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "order",
        q: T("Bit has 3 lives. It loses one and says how many are left, then finds an extra life and says it again. Put the blocks in order so that Bit says **2** and then **3**. One block is a trap.", "Bit tiene 3 vidas. Pierde una y dice cuántas le quedan, luego encuentra una vida extra y lo vuelve a decir. Ordena los bloques para que Bit diga **2** y luego **3**. Un bloque es una trampa.", "Bit ha 3 vite. Ne perde una e dice quante ne restano, poi trova una vita extra e lo dice di nuovo. Metti in ordine i blocchi in modo che Bit dica **2** e poi **3**. Un blocco è una trappola."),
        lines: [
          T("set lives to 3", "dar a vidas el valor 3", "porta vite a 3"),
          T("change lives by -1", "sumar a vidas -1", "cambia vite di -1"),
          T("say lives", "decir vidas", "di' vite"),
          T("change lives by 1", "sumar a vidas 1", "cambia vite di 1"),
          T("say lives", "decir vidas", "di' vite")
        ],
        extra: [T("set lives to 1", "dar a vidas el valor 1", "porta vite a 1")],
        hint: T("First the box gets its value. Bit speaks right after each change.", "Primero la caja recibe su valor. Bit habla justo después de cada cambio.", "Prima la scatola riceve il valore. Bit parla subito dopo ogni cambiamento."),
        explain: T("3 − 1 = 2, Bit says 2. 2 + 1 = 3, Bit says 3. **set lives to 1** would throw away the lives.", "3 − 1 = 2, Bit dice 2. 2 + 1 = 3, Bit dice 3. **dar a vidas el valor 1** tiraría las vidas.", "3 − 1 = 2, Bit dice 2. 2 + 1 = 3, Bit dice 3. **porta vite a 1** butterebbe via le vite.")
      },
      {
        id: "c2", type: "trace",
        q: T("Two boxes that talk to each other! How much is in each box when the program ends?", "¡Dos cajas que se hablan! ¿Cuánto hay en cada caja cuando termina el programa?", "Due scatole che si parlano! Quanto c'è in ogni scatola quando il programma finisce?"),
        code: T("set a to 4\nset b to a\nchange a by 1\nchange b by a", "dar a a el valor 4\ndar a b el valor a\nsumar a a 1\nsumar a b a", "porta a a 4\nporta b a a\ncambia a di 1\ncambia b di a"),
        rows: [
          { label: "a", answer: "5" },
          { label: "b", answer: "9" }
        ],
        hint: T("**set b to a** copies the number that's in a **at that moment**.", "**dar a b el valor a** copia el número que hay en a **en ese momento**.", "**porta b a a** copia il numero che c'è in a **in quel momento**."),
        explain: T("b gets a copy of 4. Then a becomes 5, and b becomes 4 + 5 = 9.", "b recibe una copia de 4. Luego a pasa a 5, y b pasa a 4 + 5 = 9.", "b riceve una copia di 4. Poi a diventa 5, e b diventa 4 + 5 = 9.")
      }
    ]
  });
})();
