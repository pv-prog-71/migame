/* APPRENTICE · mission 4: Lists (Java arrays) */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var arr = function (id, cls, values) {
    var f = {};
    values.forEach(function (v, i) { f["[" + i + "]"] = String(v); });
    return { id: id, cls: cls, fields: f };
  };

  MG.module({
    id: "app-lists",
    title: T("Lists", "Listas", "Liste"),
    summary: T(
      "Ten scores, a hundred enemies, all the players' names: when there are many values, you put them in a list.",
      "Diez puntuaciones, cien enemigos, los nombres de todos los jugadores: cuando hay muchos valores, se ponen en una lista.",
      "Dieci punteggi, cento nemici, i nomi di tutti i giocatori: quando i valori sono tanti, si mettono in una lista."
    ),

    learn: [
      {
        title: T("Many boxes in a row", "Muchas cajas en fila", "Tante scatole in fila"),
        text: T(
          "A list (in Java it's called an **array**) is a row of boxes with **one** name. Each box has a number, its **position**, and the first position is **0**, not 1!\n\n`int[]` means: a list of whole numbers.",
          "Una lista (en Java se llama **array**) es una fila de cajas con **un solo** nombre. Cada caja tiene un número, su **posición**, ¡y la primera posición es **0**, no 1!\n\n`int[]` significa: una lista de números enteros.",
          "Una lista (in Java si chiama **array**) è una fila di scatole con **un solo** nome. Ogni scatola ha un numero, la sua **posizione**, e la prima posizione è **0**, non 1!\n\n`int[]` vuol dire: una lista di numeri interi."
        ),
        code: "int[] scores = {7, 3, 9};\nSystem.out.println(scores[0]);\nSystem.out.println(scores[2]);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A list with 3 boxes appears. The variable `scores` points to it.", "Aparece una lista con 3 cajas. La variable `scores` apunta a ella.", "Appare una lista con 3 scatole. La variabile `scores` la indica."), frames: [main({ scores: "@1" })], heap: [arr("@1", "int[]", [7, 3, 9])] },
            { line: 2, note: T("Position 0 is the **first** box: 7.", "La posición 0 es la **primera** caja: 7.", "La posizione 0 è la **prima** scatola: 7."), frames: [main({ scores: "@1" })], heap: [arr("@1", "int[]", [7, 3, 9])], out: ["7"] },
            { line: 3, note: T("Position 2 is the **third** box: 9.", "La posición 2 es la **tercera** caja: 9.", "La posizione 2 è la **terza** scatola: 9."), frames: [main({ scores: "@1" })], heap: [arr("@1", "int[]", [7, 3, 9])], out: ["7", "9"] }
          ]
        }
      },
      {
        title: T("Change a box, count the boxes", "Cambiar una caja, contar las cajas", "Cambiare una scatola, contare le scatole"),
        text: T(
          "You change a box like any variable, using its position. `length` tells you how many boxes the list has.",
          "Una caja se cambia como cualquier variable, usando su posición. `length` te dice cuántas cajas tiene la lista.",
          "Una scatola si cambia come qualsiasi variabile, usando la sua posizione. `length` ti dice quante scatole ha la lista."
        ),
        code: "String[] names = {\"Ada\", \"Leo\", \"Mia\"};\nnames[1] = \"Bit\";\nSystem.out.println(names[1]);\nSystem.out.println(names.length);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A list of texts, 3 boxes.", "Una lista de textos, 3 cajas.", "Una lista di testi, 3 scatole."), frames: [main({ names: "@1" })], heap: [arr("@1", "String[]", ["\"Ada\"", "\"Leo\"", "\"Mia\""])] },
            { line: 2, note: T("Position 1 (the second box) gets \"Bit\".", "La posición 1 (la segunda caja) recibe \"Bit\".", "La posizione 1 (la seconda scatola) riceve \"Bit\"."), frames: [main({ names: "@1" })], heap: [arr("@1", "String[]", ["\"Ada\"", "\"Bit\"", "\"Mia\""])] },
            { line: 3, note: T("Print position 1.", "Imprime la posición 1.", "Stampa la posizione 1."), frames: [main({ names: "@1" })], heap: [arr("@1", "String[]", ["\"Ada\"", "\"Bit\"", "\"Mia\""])], out: ["Bit"] },
            { line: 4, note: T("`length` is 3: three boxes, positions 0, 1, 2.", "`length` vale 3: tres cajas, posiciones 0, 1, 2.", "`length` vale 3: tre scatole, posizioni 0, 1, 2."), frames: [main({ names: "@1" })], heap: [arr("@1", "String[]", ["\"Ada\"", "\"Bit\"", "\"Mia\""])], out: ["Bit", "3"] }
          ]
        }
      },
      {
        title: T("Visit every box with for", "Recorrer todas las cajas con for", "Visitare ogni scatola con for"),
        text: T(
          "Lists and loops are best friends. The counter `i` goes 0, 1, 2… and `scores[i]` is a different box each time.",
          "Las listas y los bucles son muy amigos. El contador `i` va 0, 1, 2… y `scores[i]` es una caja distinta cada vez.",
          "Liste e cicli sono grandi amici. Il contatore `i` va 0, 1, 2… e `scores[i]` è una scatola diversa ogni volta."
        ),
        code: "int[] scores = {7, 3, 9};\nint total = 0;\nfor (int i = 0; i < scores.length; i++) {\n    total = total + scores[i];\n}\nSystem.out.println(total);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("The list.", "La lista.", "La lista."), frames: [main({ scores: "@1" })], heap: [arr("@1", "int[]", [7, 3, 9])] },
            { line: 2, note: T("The total starts at 0.", "El total empieza en 0.", "Il totale parte da 0."), frames: [main({ scores: "@1", total: "0" })], heap: [arr("@1", "int[]", [7, 3, 9])] },
            { line: 4, note: T("i = 0: add scores[0], that is 7.", "i = 0: suma scores[0], es decir 7.", "i = 0: aggiungi scores[0], cioè 7."), frames: [main({ scores: "@1", total: "7", i: "0" })], heap: [arr("@1", "int[]", [7, 3, 9])] },
            { line: 4, note: T("i = 1: add scores[1], that is 3.", "i = 1: suma scores[1], es decir 3.", "i = 1: aggiungi scores[1], cioè 3."), frames: [main({ scores: "@1", total: "10", i: "1" })], heap: [arr("@1", "int[]", [7, 3, 9])] },
            { line: 4, note: T("i = 2: add scores[2], that is 9.", "i = 2: suma scores[2], es decir 9.", "i = 2: aggiungi scores[2], cioè 9."), frames: [main({ scores: "@1", total: "19", i: "2" })], heap: [arr("@1", "int[]", [7, 3, 9])] },
            { line: 6, note: T("i = 3 is not less than 3: the loop stops. The total is 19.", "i = 3 no es menor que 3: el bucle se para. El total es 19.", "i = 3 non è minore di 3: il ciclo si ferma. Il totale è 19."), frames: [main({ scores: "@1", total: "19" })], heap: [arr("@1", "int[]", [7, 3, 9])], out: ["19"] }
          ]
        }
      },
      {
        title: T("Watch out for the last box", "Cuidado con la última caja", "Attento all'ultima scatola"),
        text: T(
          "A list with 3 boxes has positions 0, 1 and 2. Position 3 **doesn't exist**: the program stops with an error.",
          "Una lista con 3 cajas tiene las posiciones 0, 1 y 2. La posición 3 **no existe**: el programa se para con un error.",
          "Una lista con 3 scatole ha le posizioni 0, 1 e 2. La posizione 3 **non esiste**: il programma si ferma con un errore."
        ),
        code: "int[] scores = {7, 3, 9};\nSystem.out.println(scores[3]);   // ERROR",
        after: T(
          "It's one of the most common mistakes in programming, even for experts. The last position is always **length − 1**.",
          "Es uno de los errores más comunes de la programación, también para los expertos. La última posición es siempre **length − 1**.",
          "È uno degli errori più comuni della programmazione, anche per gli esperti. L'ultima posizione è sempre **length − 1**."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What is the position of the **first** box of a list?", "¿Cuál es la posición de la **primera** caja de una lista?", "Qual è la posizione della **prima** scatola di una lista?"),
        options: ["0", "1", "-1"],
        answer: 0,
        explain: T("Lists count from 0.", "Las listas cuentan desde 0.", "Le liste contano da 0.")
      },
      {
        id: "q2", type: "choice",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "int[] n = {4, 8, 15, 16};\nSystem.out.println(n[1]);",
        options: ["4", "8", "15"],
        answer: 1,
        explain: T("Position 1 is the second box: 8.", "La posición 1 es la segunda caja: 8.", "La posizione 1 è la seconda scatola: 8.")
      },
      {
        id: "q3", type: "choice",
        q: T("How much is `n.length` for the same list?", "¿Cuánto vale `n.length` para la misma lista?", "Quanto vale `n.length` per la stessa lista?"),
        options: ["3", "4", "16"],
        answer: 1,
        explain: T("There are 4 boxes. The last position is 3.", "Hay 4 cajas. La última posición es 3.", "Ci sono 4 scatole. L'ultima posizione è 3.")
      },
      {
        id: "q4", type: "choice",
        q: T("Which line causes an error?", "¿Qué línea da error?", "Quale riga dà errore?"),
        code: "int[] a = {1, 2};",
        options: ["`a[0] = 5;`", "`a[1] = 5;`", "`a[2] = 5;`"],
        answer: 2,
        explain: T("With 2 boxes the positions are 0 and 1. Position 2 doesn't exist.", "Con 2 cajas las posiciones son 0 y 1. La posición 2 no existe.", "Con 2 scatole le posizioni sono 0 e 1. La posizione 2 non esiste.")
      },
      {
        id: "q5", type: "choice",
        q: T("`String[] pets` is…", "`String[] pets` es…", "`String[] pets` è…"),
        options: [
          T("a list of texts", "una lista de textos", "una lista di testi"),
          T("a single text", "un solo texto", "un testo solo"),
          T("a list of numbers", "una lista de números", "una lista di numeri")
        ],
        answer: 0,
        explain: T("The square brackets `[]` after the type mean: a list of that type.", "Los corchetes `[]` después del tipo significan: una lista de ese tipo.", "Le parentesi quadre `[]` dopo il tipo vogliono dire: una lista di quel tipo.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "String[] team = {\"Ada\", \"Leo\", \"Mia\"};\nSystem.out.println(team[2]);\nSystem.out.println(team[0]);",
        answer: "Mia\nAda",
        hint: T("Count from 0: Ada is 0.", "Cuenta desde 0: Ada es 0.", "Conta da 0: Ada è la 0."),
        explain: T("team[2] is the third name, team[0] the first.", "team[2] es el tercer nombre, team[0] el primero.", "team[2] è il terzo nome, team[0] il primo.")
      },
      {
        id: "p2", type: "trace",
        q: T("How much is each box of the list worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada caja de la lista cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni scatola della lista quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "int[] lives = {3, 3, 3};\nlives[0] = 1;\nlives[2] = lives[0] + 5;",
        rows: [
          { label: "`lives[0]`", answer: "1" },
          { label: "`lives[1]`", answer: "3" },
          { label: "`lives[2]`", answer: "6" }
        ],
        hint: T("Line 3 reads lives[0] **after** line 2 changed it.", "La línea 3 lee lives[0] **después** de que la línea 2 la cambiara.", "La riga 3 legge lives[0] **dopo** che la riga 2 l'ha cambiata."),
        explain: T("lives[0] becomes 1, lives[1] is untouched, lives[2] = 1 + 5 = 6.", "lives[0] pasa a 1, lives[1] no se toca, lives[2] = 1 + 5 = 6.", "lives[0] diventa 1, lives[1] non viene toccata, lives[2] = 1 + 5 = 6.")
      },
      {
        id: "p3", type: "bug",
        q: T("This program stops with an error. Click the wrong line.", "Este programa se para con un error. Haz clic en la línea equivocada.", "Questo programma si ferma con un errore. Clicca la riga sbagliata."),
        code: "int[] days = {1, 2, 3, 4, 5, 6, 7};\nSystem.out.println(days[0]);\nSystem.out.println(days[6]);\nSystem.out.println(days[7]);",
        line: 4,
        hint: T("7 boxes: what's the last position?", "7 cajas: ¿cuál es la última posición?", "7 scatole: qual è l'ultima posizione?"),
        explain: T("Positions go from 0 to 6. days[7] doesn't exist.", "Las posiciones van de 0 a 6. days[7] no existe.", "Le posizioni vanno da 0 a 6. days[7] non esiste.")
      },
      {
        id: "p4", type: "fill",
        q: T("Complete the loop so it prints every name, one per line.", "Completa el bucle para que imprima todos los nombres, uno por línea.", "Completa il ciclo in modo che stampi tutti i nomi, uno per riga."),
        code: "String[] names = {\"Ada\", \"Leo\", \"Mia\"};\nfor (int i = [[0]]; i < names.[[length]]; i++) {\n    System.out.println(names[i]);\n}",
        hint: T("Start from the first position, stop at the number of boxes, and use the counter as the position.", "Empieza por la primera posición, para en el número de cajas y usa el contador como posición.", "Parti dalla prima posizione, fermati al numero di scatole e usa il contatore come posizione."),
        explain: T("`i` goes from 0 while it's less than `names.length`, and `names[i]` is the box at position i.", "`i` va desde 0 mientras sea menor que `names.length`, y `names[i]` es la caja en la posición i.", "`i` parte da 0 finché è minore di `names.length`, e `names[i]` è la scatola nella posizione i.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "int[] n = {2, 4, 6};\nfor (int i = 0; i < n.length; i++) {\n    n[i] = n[i] * 10;\n}\nSystem.out.println(n[0] + n[2]);\nSystem.out.println(n.length);",
        answer: "80\n3",
        hint: T("The loop changes every box. `length` doesn't change.", "El bucle cambia todas las cajas. `length` no cambia.", "Il ciclo cambia tutte le scatole. `length` non cambia."),
        explain: T("The list becomes {20, 40, 60}. 20 + 60 = 80. There are still 3 boxes.", "La lista pasa a {20, 40, 60}. 20 + 60 = 80. Sigue habiendo 3 cajas.", "La lista diventa {20, 40, 60}. 20 + 60 = 80. Le scatole sono ancora 3.")
      },
      {
        id: "c2", type: "order",
        q: T("Write a program that prints the **last** name of the list, whatever its length. One piece is a trap.", "Escribe un programa que imprima el **último** nombre de la lista, sea cual sea su longitud. Una pieza es una trampa.", "Scrivi un programma che stampi l'**ultimo** nome della lista, qualunque sia la sua lunghezza. Un pezzo è una trappola."),
        lines: ["String[] names = {\"Ada\", \"Leo\", \"Mia\"};", "int last = names.length - 1;", "System.out.println(names[last]);"],
        extra: ["int last = names.length;"],
        hint: T("The last position is always one less than the number of boxes.", "La última posición es siempre uno menos que el número de cajas.", "L'ultima posizione è sempre uno in meno del numero di scatole."),
        explain: T("With 3 boxes, the last position is 3 − 1 = 2. `names[names.length]` would be an error.", "Con 3 cajas, la última posición es 3 − 1 = 2. `names[names.length]` daría error.", "Con 3 scatole, l'ultima posizione è 3 − 1 = 2. `names[names.length]` darebbe errore.")
      },
      {
        id: "c3", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nint x = a[0];",
        rows: [
          { label: "`a[0]`", answer: "99" },
          { label: "`x`", answer: "99" }
        ],
        hint: T("A list is an object: `b = a` copies the **arrow**, not the boxes.", "Una lista es un objeto: `b = a` copia la **flecha**, no las cajas.", "Una lista è un oggetto: `b = a` copia la **freccia**, non le scatole."),
        explain: T("`a` and `b` point to the same list. Changing b[0] changes a[0] too. You'll meet this again with objects in the Inventor level.", "`a` y `b` apuntan a la misma lista. Cambiar b[0] cambia también a[0]. Lo volverás a ver con los objetos en el nivel Inventor.", "`a` e `b` indicano la stessa lista. Cambiare b[0] cambia anche a[0]. Lo ritroverai con gli oggetti nel livello Inventore.")
      }
    ]
  });
})();
