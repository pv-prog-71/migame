/* MODULE: Loops (Explorer stage). Uses the "repeat" block. */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var ALL = ["move", "turnLeft", "turnRight", "repeat"];

  MG.module({
    id: "exp-loops",
    title: T("Loops", "Bucles", "Cicli"),
    summary: T(
      "Why write the same block ten times? Teach Bit to repeat.",
      "¿Para qué escribir el mismo bloque diez veces? Enseña a Bit a repetir.",
      "Perché scrivere lo stesso blocco dieci volte? Insegna a Bit a ripetere."
    ),
    badge: { glyph: "gear", name: T("Loop master", "Maestro de bucles", "Maestro dei cicli") },

    learn: [
      {
        title: T("Repeat instead of copy", "Repetir en vez de copiar", "Ripeti invece di copiare"),
        text: T(
          "Six moves would need six blocks. With **repeat** you need just two: Bit runs everything inside the repeat block again and again.\n\nThis is called a **loop**.",
          "Seis pasos necesitarían seis bloques. Con **repetir** bastan dos: Bit ejecuta una y otra vez lo que hay dentro del bloque.\n\nEsto se llama **bucle**.",
          "Sei passi richiederebbero sei blocchi. Con **ripeti** ne bastano due: Bit esegue più volte tutto quello che c'è dentro il blocco.\n\nQuesto si chiama **ciclo**."
        ),
        viz: { type: "grid", map: [">.....F"], program: [{ repeat: 6, do: ["move"] }] }
      },
      {
        title: T("Repeat a pattern", "Repetir un patrón", "Ripeti uno schema"),
        text: T(
          "Remember the stairs? Every step was the same four blocks. Put the pattern **inside** a repeat, and say how many times.\n\nHow to find a loop: look for what comes back, then count how many times it comes back.",
          "¿Recuerdas las escaleras? Cada escalón eran los mismos cuatro bloques. Pon el patrón **dentro** de un repetir y di cuántas veces.\n\nCómo encontrar un bucle: busca lo que se repite y cuenta cuántas veces aparece.",
          "Ti ricordi le scale? Ogni gradino era fatto degli stessi quattro blocchi. Metti lo schema **dentro** un ripeti e di' quante volte.\n\nCome trovare un ciclo: cerca cosa ritorna, poi conta quante volte ritorna."
        ),
        viz: { type: "grid", map: [">.###", "#..##", "##..#", "###.F"], program: ["move", { repeat: 3, do: ["turnRight", "move", "turnLeft", "move"] }] }
      },
      {
        title: T("Loops in real code", "Bucles en código de verdad", "I cicli nel codice vero"),
        text: T(
          "Switch the view under the blocks to **Java**. A repeat block becomes a `for` loop:",
          "Cambia la vista debajo de los bloques a **Java**. Un bloque repetir se convierte en un bucle `for`:",
          "Passa la vista sotto i blocchi a **Java**. Un blocco ripeti diventa un ciclo `for`:"
        ),
        code: "for (int i = 0; i < 3; i++) {\n    bit.move();\n    bit.turnLeft();\n}",
        after: T(
          "Read it as: *start counting at 0, keep going while the count is less than 3, add 1 each time*. So it runs 3 times: 0, 1, 2. You don't need to remember this yet. Just notice that blocks and code say the same thing.",
          "Léelo así: *empieza a contar en 0, sigue mientras la cuenta sea menor que 3, suma 1 cada vez*. Así se ejecuta 3 veces: 0, 1, 2. Todavía no hace falta memorizarlo. Solo fíjate en que los bloques y el código dicen lo mismo.",
          "Leggilo così: *comincia a contare da 0, continua finché il conto è minore di 3, aggiungi 1 ogni volta*. Quindi gira 3 volte: 0, 1, 2. Non serve ancora ricordarlo. Nota solo che blocchi e codice dicono la stessa cosa."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("How many squares does Bit move?", "¿Cuántas casillas avanza Bit?", "Di quante caselle si muove Bit?"),
        code: T("repeat 4 times:\n    move forward", "repetir 4 veces:\n    avanzar", "ripeti 4 volte:\n    vai avanti"),
        options: ["1", "4", "5"],
        answer: 1,
        explain: T("The block inside runs 4 times.", "El bloque de dentro se ejecuta 4 veces.", "Il blocco dentro viene eseguito 4 volte.")
      },
      {
        id: "q2", type: "choice",
        q: T("How many instructions does Bit carry out in total?", "¿Cuántas instrucciones hace Bit en total?", "Quante istruzioni esegue Bit in tutto?"),
        code: T("repeat 3 times:\n    move forward\n    turn left", "repetir 3 veces:\n    avanzar\n    girar a la izquierda", "ripeti 3 volte:\n    vai avanti\n    gira a sinistra"),
        options: ["2", "3", "6"],
        answer: 2,
        explain: T("2 blocks inside × 3 times = 6.", "2 bloques dentro × 3 veces = 6.", "2 blocchi dentro × 3 volte = 6.")
      },
      {
        id: "q3", type: "choice",
        q: T("Which program is the same as five **move forward** blocks?", "¿Qué programa es igual a cinco bloques **avanzar**?", "Quale programma è uguale a cinque blocchi **vai avanti**?"),
        options: [
          T("repeat 5 times: move forward", "repetir 5 veces: avanzar", "ripeti 5 volte: vai avanti"),
          T("repeat 4 times: move forward", "repetir 4 veces: avanzar", "ripeti 4 volte: vai avanti"),
          T("move forward, then repeat 5 times: move forward", "avanzar, y luego repetir 5 veces: avanzar", "vai avanti, poi ripeti 5 volte: vai avanti")
        ],
        answer: 0,
        explain: T("The number in the repeat block is how many times it runs.", "El número del bloque repetir indica cuántas veces se ejecuta.", "Il numero nel blocco ripeti dice quante volte viene eseguito.")
      },
      {
        id: "q4", type: "choice",
        q: T("A loop inside a loop! How many squares does Bit move?", "¡Un bucle dentro de otro! ¿Cuántas casillas avanza Bit?", "Un ciclo dentro un ciclo! Di quante caselle si muove Bit?"),
        code: T("repeat 2 times:\n    repeat 3 times:\n        move forward", "repetir 2 veces:\n    repetir 3 veces:\n        avanzar", "ripeti 2 volte:\n    ripeti 3 volte:\n        vai avanti"),
        options: ["5", "6", "23"],
        answer: 1,
        explain: T("The inner loop moves 3. The outer loop does that twice: 3 × 2 = 6.", "El bucle de dentro avanza 3. El de fuera lo hace dos veces: 3 × 2 = 6.", "Il ciclo interno avanza di 3. Quello esterno lo fa due volte: 3 × 2 = 6.")
      }
    ],

    practice: [
      {
        id: "p1", type: "grid",
        q: T("A long road! Use **at most 2 blocks**.", "¡Un camino largo! Usa **2 bloques como máximo**.", "Una strada lunga! Usa **al massimo 2 blocchi**."),
        map: [">.......F"],
        blocks: ALL, maxBlocks: 2,
        solution: [{ repeat: 8, do: ["move"] }],
        hint: T("Count the squares between Bit and the flag. Use **−** and **+** to change the number.", "Cuenta las casillas entre Bit y la bandera. Usa **−** y **+** para cambiar el número.", "Conta le caselle tra Bit e la bandiera. Usa **−** e **+** per cambiare il numero.")
      },
      {
        id: "p2", type: "grid",
        q: T("Walk around the wall and collect both stars. Max **5 blocks**.", "Rodea la pared y coge las dos estrellas. Máximo **5 bloques**.", "Gira intorno al muro e prendi le due stelle. Massimo **5 blocchi**."),
        map: [">..*", ".##.", ".##*", "F..."],
        blocks: ALL, maxBlocks: 5,
        solution: [{ repeat: 3, do: ["move", "move", "move", "turnRight"] }],
        hint: T("Each side is 3 moves and then a turn. How many sides?", "Cada lado son 3 pasos y un giro. ¿Cuántos lados?", "Ogni lato sono 3 passi e una girata. Quanti lati?")
      },
      {
        id: "p3", type: "grid",
        q: T("Big stairs. Max **6 blocks**.", "Escaleras grandes. Máximo **6 bloques**.", "Scale grandi. Massimo **6 blocchi**."),
        map: [">.####", "#..###", "##..##", "###..#", "####.F"],
        blocks: ALL, maxBlocks: 6,
        solution: [{ repeat: 4, do: ["move", "turnRight", "move", "turnLeft"] }, "move"],
        hint: T("Find the pattern for one step. Something might be left over at the end.", "Busca el patrón de un escalón. Puede que sobre algo al final.", "Trova lo schema di un gradino. Alla fine potrebbe avanzare qualcosa.")
      },
      {
        id: "p4", type: "grid",
        q: T("Two loops in a row. Max **5 blocks**.", "Dos bucles seguidos. Máximo **5 bloques**.", "Due cicli uno dopo l'altro. Massimo **5 blocchi**."),
        map: [">.*...", "#####.", "#####*", "#####F"],
        blocks: ALL, maxBlocks: 5,
        solution: [{ repeat: 5, do: ["move"] }, "turnRight", { repeat: 3, do: ["move"] }],
        explain: T("Loops can go one after the other, like any other block.", "Los bucles pueden ir uno detrás de otro, como cualquier bloque.", "I cicli possono stare uno dopo l'altro, come qualsiasi blocco.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "grid",
        q: T("Climb the mountain, grab the star at the top, come down the other side. Max **10 blocks**.", "Sube la montaña, coge la estrella de la cima y baja por el otro lado. Máximo **10 bloques**.", "Scala la montagna, prendi la stella in cima e scendi dall'altra parte. Massimo **10 blocchi**."),
        map: ["##.*###", "#....##", "..##..#", ">####.F"],
        blocks: ALL, maxBlocks: 10,
        solution: [{ repeat: 3, do: ["turnLeft", "move", "turnRight", "move"] }, { repeat: 3, do: ["turnRight", "move", "turnLeft", "move"] }],
        hint: T("Going up is one loop. Going down is another loop.", "Subir es un bucle. Bajar es otro bucle.", "Salire è un ciclo. Scendere è un altro ciclo.")
      },
      {
        id: "c2", type: "grid",
        q: T("Around the square with only **4 blocks**. You'll need a loop inside a loop!", "Alrededor del cuadrado con solo **4 bloques**. ¡Necesitarás un bucle dentro de otro!", "Intorno al quadrato con solo **4 blocchi**. Ti servirà un ciclo dentro un ciclo!"),
        map: [">...*", "####.", "####.", "####.", "F.*.*"],
        blocks: ALL, maxBlocks: 4,
        solution: [{ repeat: 3, do: [{ repeat: 4, do: ["move"] }, "turnRight"] }],
        hint: T("One side is: repeat 4 times move forward, then turn right. Now repeat that.", "Un lado es: repetir 4 veces avanzar, y luego girar a la derecha. Ahora repite eso.", "Un lato è: ripeti 4 volte vai avanti, poi gira a destra. Ora ripeti tutto questo."),
        explain: T("A loop inside a loop is called a **nested loop**. Programmers use them all the time.", "Un bucle dentro de otro se llama **bucle anidado**. Los programadores los usan muchísimo.", "Un ciclo dentro un altro si chiama **ciclo annidato**. I programmatori li usano sempre.")
      }
    ]
  });
})();
