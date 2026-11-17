/* EXPLORER · mission 3: If this, then that. Condition blocks: "if there's a wall ahead",
   "if the way ahead is clear", "repeat until the flag". Several exercises use `maps`:
   one program must work on every road. */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var ALL = ["move", "turnLeft", "turnRight", "repeat", "ifWall", "ifPath", "until"];

  /* roads that turn right (clockwise) */
  var ROAD_A = [">...#", "###.#", "F...#"];
  var ROAD_B = [">.#", "#.#", "#.#", "F.#"];
  var FOLLOW_RIGHT = [{ until: "flag", "do": [{ "if": "wall", "do": ["turnRight"] }, "move"] }];

  MG.module({
    id: "exp-conditions",
    title: T("If this, then that", "Si esto, entonces aquello", "Se questo, allora quello"),
    summary: T(
      "Bit learns to look ahead and decide by itself. One program, many different roads.",
      "Bit aprende a mirar delante y a decidir solo. Un programa, muchos caminos distintos.",
      "Bit impara a guardare davanti e a decidere da solo. Un programma, tante strade diverse."
    ),

    learn: [
      {
        title: T("One program, two roads", "Un programa, dos caminos", "Un programma, due strade"),
        text: T(
          "This program is perfect for **road 1**. But look what happens on **road 2**: the turns are in different places, and Bit bumps into the wall.\n\nPress **Play** and watch both roads.",
          "Este programa es perfecto para el **camino 1**. Pero mira lo que pasa en el **camino 2**: las curvas están en otros sitios y Bit se choca con la pared.\n\nPulsa **Play** y mira los dos caminos.",
          "Questo programma è perfetto per la **strada 1**. Ma guarda cosa succede sulla **strada 2**: le curve sono in posti diversi e Bit sbatte contro il muro.\n\nPremi **Play** e guarda tutte e due le strade."
        ),
        viz: { type: "grid", maps: [ROAD_A, ROAD_B], expect: "wall", program: ["move", "move", "move", "turnRight", "move", "move", "turnRight", "move", "move", "move"] }
      },
      {
        title: T("Look before you move", "Mira antes de moverte", "Guarda prima di muoverti"),
        text: T(
          "The green block **if there's a wall ahead** makes Bit look at the square in front. The blocks inside run **only if** there really is a wall. Otherwise Bit skips them.\n\nThis is called a **condition**: a question with a yes or no answer.",
          "El bloque verde **si hay una pared delante** hace que Bit mire la casilla de delante. Los bloques de dentro se ejecutan **solo si** de verdad hay una pared. Si no, Bit se los salta.\n\nEsto se llama **condición**: una pregunta que se responde con sí o no.",
          "Il blocco verde **se c'è un muro davanti** fa guardare a Bit la casella davanti. I blocchi dentro vengono eseguiti **solo se** c'è davvero un muro. Altrimenti Bit li salta.\n\nQuesto si chiama **condizione**: una domanda che ha come risposta sì o no."
        ),
        viz: { type: "grid", map: ROAD_A, program: [{ repeat: 8, "do": [{ "if": "wall", "do": ["turnRight"] }, "move"] }] }
      },
      {
        title: T("Repeat until the flag", "Repetir hasta la bandera", "Ripeti fino alla bandiera"),
        text: T(
          "With **repeat 8 times** you still have to count the squares, and every road is different. **Repeat until the flag** keeps going until Bit is on the flag, however long the road is.\n\nNow the same program works on both roads!",
          "Con **repetir 8 veces** todavía tienes que contar las casillas, y cada camino es distinto. **Repetir hasta la bandera** sigue hasta que Bit está en la bandera, sea el camino largo o corto.\n\n¡Ahora el mismo programa funciona en los dos caminos!",
          "Con **ripeti 8 volte** devi ancora contare le caselle, e ogni strada è diversa. **Ripeti fino alla bandiera** continua finché Bit non è sulla bandiera, che la strada sia lunga o corta.\n\nOra lo stesso programma funziona su tutte e due le strade!"
        ),
        viz: { type: "grid", maps: [ROAD_A, ROAD_B], program: FOLLOW_RIGHT }
      },
      {
        title: T("Conditions in real code", "Condiciones en código de verdad", "Le condizioni nel codice vero"),
        text: T(
          "Switch the view under the blocks to **Java**. A condition is written with `if`, and repeat until the flag with `while`:",
          "Cambia la vista debajo de los bloques a **Java**. Una condición se escribe con `if`, y repetir hasta la bandera con `while`:",
          "Passa la vista sotto i blocchi a **Java**. Una condizione si scrive con `if`, e ripeti fino alla bandiera con `while`:"
        ),
        code: "while (!bit.atFlag()) {\n    if (bit.wallAhead()) {\n        bit.turnRight();\n    }\n    bit.move();\n}",
        after: T(
          "Read it as: *while Bit is not on the flag: if there's a wall ahead, turn right; then move*. The `!` means **not**.\n\nThere's also the opposite block, **if the way ahead is clear**. Use the one that makes your program easier to read.",
          "Léelo así: *mientras Bit no esté en la bandera: si hay una pared delante, gira a la derecha; luego avanza*. El `!` significa **no**.\n\nTambién existe el bloque contrario, **si el camino está libre**. Usa el que haga tu programa más fácil de leer.",
          "Leggilo così: *finché Bit non è sulla bandiera: se c'è un muro davanti, gira a destra; poi vai avanti*. Il `!` vuol dire **non**.\n\nEsiste anche il blocco contrario, **se la strada è libera**. Usa quello che rende il tuo programma più facile da leggere."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("There **is** a wall in front of Bit. What does Bit do?", "Delante de Bit **hay** una pared. ¿Qué hace Bit?", "Davanti a Bit **c'è** un muro. Cosa fa Bit?"),
        code: T("if there's a wall ahead:\n    turn right\nmove forward", "si hay una pared delante:\n    girar a la derecha\navanzar", "se c'è un muro davanti:\n    gira a destra\nvai avanti"),
        options: [
          T("Turns right, then moves forward", "Gira a la derecha y luego avanza", "Gira a destra, poi va avanti"),
          T("Only moves forward", "Solo avanza", "Va solo avanti"),
          T("Stops", "Se para", "Si ferma")
        ],
        answer: 0,
        explain: T("The condition is true, so the block inside runs. Then comes move forward, which is outside the condition.", "La condición es verdadera, así que se ejecuta el bloque de dentro. Luego viene avanzar, que está fuera de la condición.", "La condizione è vera, quindi il blocco dentro viene eseguito. Poi c'è vai avanti, che è fuori dalla condizione.")
      },
      {
        id: "q2", type: "choice",
        q: T("Same program, but this time the way ahead is **clear**. What does Bit do?", "El mismo programa, pero esta vez el camino está **libre**. ¿Qué hace Bit?", "Stesso programma, ma questa volta la strada è **libera**. Cosa fa Bit?"),
        code: T("if there's a wall ahead:\n    turn right\nmove forward", "si hay una pared delante:\n    girar a la derecha\navanzar", "se c'è un muro davanti:\n    gira a destra\nvai avanti"),
        options: [
          T("Turns right, then moves forward", "Gira a la derecha y luego avanza", "Gira a destra, poi va avanti"),
          T("Only moves forward", "Solo avanza", "Va solo avanti"),
          T("Turns right and stops", "Gira a la derecha y se para", "Gira a destra e si ferma")
        ],
        answer: 1,
        explain: T("No wall, so the answer to the question is no: Bit skips what's inside and just moves forward.", "No hay pared, así que la respuesta es no: Bit se salta lo de dentro y solo avanza.", "Non c'è il muro, quindi la risposta è no: Bit salta quello che c'è dentro e va solo avanti.")
      },
      {
        id: "q3", type: "choice",
        q: T("When does **repeat until the flag** stop?", "¿Cuándo se para **repetir hasta la bandera**?", "Quando si ferma **ripeti fino alla bandiera**?"),
        options: [
          T("When Bit is on the flag", "Cuando Bit está en la bandera", "Quando Bit è sulla bandiera"),
          T("After 10 times", "Después de 10 veces", "Dopo 10 volte"),
          T("When Bit bumps into a wall", "Cuando Bit se choca con una pared", "Quando Bit sbatte contro un muro")
        ],
        answer: 0,
        explain: T("It doesn't count: it checks every time whether Bit has arrived.", "No cuenta: comprueba cada vez si Bit ha llegado.", "Non conta: controlla ogni volta se Bit è arrivato.")
      },
      {
        id: "q4", type: "choice",
        q: T("Why use a condition instead of a fixed list of blocks?", "¿Por qué usar una condición en lugar de una lista fija de bloques?", "Perché usare una condizione invece di una lista fissa di blocchi?"),
        options: [
          T("So the same program works on different roads", "Para que el mismo programa funcione en caminos distintos", "Perché lo stesso programma funzioni su strade diverse"),
          T("So Bit goes faster", "Para que Bit vaya más rápido", "Perché Bit vada più veloce"),
          T("Because blocks run out", "Porque se acaban los bloques", "Perché i blocchi finiscono")
        ],
        answer: 0,
        explain: T("With conditions, Bit decides while it moves, so it can handle roads it has never seen.", "Con condiciones, Bit decide mientras se mueve, así que puede con caminos que nunca ha visto.", "Con le condizioni Bit decide mentre si muove, quindi se la cava anche su strade che non ha mai visto.")
      },
      {
        id: "q5", type: "choice",
        q: T("What does this line of Java mean?", "¿Qué significa esta línea de Java?", "Cosa vuol dire questa riga di Java?"),
        code: "if (bit.pathAhead()) {\n    bit.move();\n}",
        options: [
          T("If the way ahead is clear, move forward", "Si el camino está libre, avanza", "Se la strada è libera, vai avanti"),
          T("Move forward until the flag", "Avanza hasta la bandera", "Vai avanti fino alla bandiera"),
          T("If there's a wall, move forward", "Si hay una pared, avanza", "Se c'è un muro, vai avanti")
        ],
        answer: 0,
        explain: T("`if` asks a question, `pathAhead` means the way ahead is clear.", "`if` hace una pregunta, `pathAhead` significa que el camino de delante está libre.", "`if` fa una domanda, `pathAhead` vuol dire che la strada davanti è libera.")
      }
    ],

    practice: [
      {
        id: "p1", type: "grid",
        q: T("Two roads, **one program**. Max **4 blocks**.", "Dos caminos, **un programa**. Máximo **4 bloques**.", "Due strade, **un solo programma**. Massimo **4 blocchi**."),
        maps: [[">...#", "###.#", "###.#", "###F#"], [">.#", "#.#", "#F#"]],
        blocks: ALL, maxBlocks: 4,
        solution: FOLLOW_RIGHT,
        mustFail: [["move", "move", "move", "turnRight", "move", "move", "move"]],
        hint: T("Go forward, and turn right only when there's a wall. Keep going until the flag.", "Avanza, y gira a la derecha solo cuando haya una pared. Sigue hasta la bandera.", "Vai avanti, e gira a destra solo quando c'è un muro. Continua fino alla bandiera.")
      },
      {
        id: "p2", type: "grid",
        q: T("These roads turn **left**. Try the block **if the way ahead is clear**. Max **5 blocks**.", "Estos caminos giran a la **izquierda**. Prueba el bloque **si el camino está libre**. Máximo **5 bloques**.", "Queste strade girano a **sinistra**. Prova il blocco **se la strada è libera**. Massimo **5 blocchi**."),
        maps: [["###F#", "###.#", ">...#"], ["#F#", "#.#", "#.#", ">.#"]],
        blocks: ALL, maxBlocks: 5,
        solution: [{ until: "flag", "do": [{ "if": "path", "do": ["move"] }, { "if": "wall", "do": ["turnLeft"] }] }],
        hint: T("If the way is clear, move. If there's a wall, turn left. Repeat until the flag.", "Si el camino está libre, avanza. Si hay una pared, gira a la izquierda. Repite hasta la bandera.", "Se la strada è libera, vai avanti. Se c'è un muro, gira a sinistra. Ripeti fino alla bandiera.")
      },
      {
        id: "p3", type: "grid",
        q: T("A long spiral with two stars. With fixed blocks you'd need more than 10. Can you do it with **4**?", "Una espiral larga con dos estrellas. Con bloques fijos necesitarías más de 10. ¿Puedes con **4**?", "Una spirale lunga con due stelle. Con i blocchi fissi te ne servirebbero più di 10. Ce la fai con **4**?"),
        map: [">....", "####.", "##F#*", "##.#.", "##.*."],
        blocks: ALL, maxBlocks: 4,
        solution: FOLLOW_RIGHT,
        hint: T("At every corner there's a wall in front of Bit, and the turn is always to the right.", "En cada esquina hay una pared delante de Bit, y el giro es siempre a la derecha.", "A ogni angolo c'è un muro davanti a Bit, e la svolta è sempre a destra.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "grid",
        q: T("Three roads, one program, and a star on the way. Max **4 blocks**.", "Tres caminos, un programa y una estrella por el camino. Máximo **4 bloques**.", "Tre strade, un programma e una stella lungo la via. Massimo **4 blocchi**."),
        maps: [["F..#", "##*#", ">..#"], ["F.#", "#.#", "#.#", ">.#"], ["F...#", "###.#", ">...#"]],
        blocks: ALL, maxBlocks: 4,
        solution: [{ until: "flag", "do": [{ "if": "wall", "do": ["turnLeft"] }, "move"] }],
        mustFail: [FOLLOW_RIGHT],
        hint: T("Which way do these roads turn at every wall?", "¿Hacia dónde giran estos caminos en cada pared?", "Da che parte girano queste strade a ogni muro?")
      },
      {
        id: "c2", type: "grid",
        q: T("The big spiral! Collect both stars. Max **4 blocks**.", "¡La gran espiral! Coge las dos estrellas. Máximo **4 bloques**.", "La grande spirale! Prendi tutte e due le stelle. Massimo **4 blocchi**."),
        map: [">.....", "#####.", ".**F#.", ".####.", ".####.", "......"],
        blocks: ALL, maxBlocks: 4,
        solution: FOLLOW_RIGHT,
        hint: T("It's the same idea as the small spiral: look, turn if needed, move.", "Es la misma idea que la espiral pequeña: mira, gira si hace falta, avanza.", "È la stessa idea della spirale piccola: guarda, gira se serve, vai avanti."),
        explain: T("Programs that look around and decide are the beginning of every robot and every video game character.", "Los programas que miran alrededor y deciden son el comienzo de todos los robots y de todos los personajes de videojuegos.", "I programmi che guardano intorno e decidono sono l'inizio di ogni robot e di ogni personaggio dei videogiochi.")
      }
    ]
  });
})();
