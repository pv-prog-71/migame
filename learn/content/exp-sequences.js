/* EXPLORER · mission 1: Step by step
   Maps for "grid" puzzles:  #  wall   .  floor   *  star   F  flag
   Bit's start and direction:  >  right   <  left   ^  up   v  down
   Blocks: "move", "turnLeft", "turnRight", { repeat: 3, do: [ ... ] } */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };

  MG.module({
    id: "exp-sequences",
    title: T("Step by step", "Paso a paso", "Passo dopo passo"),
    summary: T(
      "Meet Bit, a little robot that does exactly what you tell it, one block at a time.",
      "Conoce a Bit, un pequeño robot que hace exactamente lo que le dices, bloque a bloque.",
      "Ecco Bit, un piccolo robot che fa esattamente quello che gli dici, un blocco alla volta."
    ),
    badge: { glyph: "flag", name: T("First steps", "Primeros pasos", "Primi passi") },

    learn: [
      {
        title: T("Meet Bit", "Te presento a Bit", "Ecco Bit"),
        text: T(
          "Bit is a robot. Bit can't think: it only follows **instructions**.\n\nA list of instructions is called a **program**. Press **Play** and watch Bit run this one.",
          "Bit es un robot. Bit no sabe pensar: solo sigue **instrucciones**.\n\nUna lista de instrucciones se llama **programa**. Pulsa **Reproducir** y mira cómo Bit lo ejecuta.",
          "Bit è un robot. Bit non sa pensare: segue solo le **istruzioni**.\n\nUna lista di istruzioni si chiama **programma**. Premi **Avvia** e guarda Bit eseguirlo."
        ),
        viz: { type: "grid", map: [">..F"], program: ["move", "move", "move"] }
      },
      {
        title: T("Turning", "Girar", "Girare"),
        text: T(
          "**Turn left** and **turn right** make Bit face a new direction. Bit turns on the spot: it doesn't move.\n\nTip: imagine you are Bit. Which way is *your* left?",
          "**Girar a la izquierda** y **girar a la derecha** hacen que Bit mire hacia otro lado. Bit gira en el sitio: no se mueve.\n\nTruco: imagina que eres Bit. ¿Hacia dónde está *tu* izquierda?",
          "**Gira a sinistra** e **gira a destra** fanno guardare Bit in un'altra direzione. Bit gira sul posto: non si muove.\n\nTrucco: immagina di essere Bit. Da che parte è la *tua* sinistra?"
        ),
        viz: { type: "grid", map: ["..F", ">.."], program: ["move", "move", "turnLeft", "move"] }
      },
      {
        title: T("Order matters", "El orden importa", "L'ordine conta"),
        text: T(
          "Same blocks as before, different order. Press **Play**: what goes wrong?\n\nThe computer runs the blocks **from top to bottom**, exactly as written. It never fixes your mistakes for you.",
          "Los mismos bloques que antes, en otro orden. Pulsa **Reproducir**: ¿qué sale mal?\n\nEl ordenador ejecuta los bloques **de arriba abajo**, tal y como están. Nunca arregla tus errores por ti.",
          "Gli stessi blocchi di prima, in un altro ordine. Premi **Avvia**: cosa va storto?\n\nIl computer esegue i blocchi **dall'alto in basso**, esattamente come sono scritti. Non corregge mai i tuoi errori."
        ),
        viz: { type: "grid", map: ["..F", ">.."], program: ["turnLeft", "move", "move", "move"] },
        after: T(
          "Under the blocks you can see the same program in **words** and in **Java**. Real programmers write the text version. You'll get there!",
          "Debajo de los bloques puedes ver el mismo programa en **palabras** y en **Java**. Los programadores de verdad escriben la versión de texto. ¡Ya llegarás!",
          "Sotto i blocchi vedi lo stesso programma in **parole** e in **Java**. I programmatori veri scrivono la versione testuale. Ci arriverai!"
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("Bit is facing **right**. Which block makes Bit face **up**?", "Bit mira a la **derecha**. ¿Qué bloque hace que mire **arriba**?", "Bit guarda a **destra**. Quale blocco lo fa guardare **in alto**?"),
        options: [T("turn left", "girar a la izquierda", "gira a sinistra"), T("turn right", "girar a la derecha", "gira a destra"), T("move forward", "avanzar", "vai avanti")],
        answer: 0,
        explain: T("If you face right and turn to your left, you face up.", "Si miras a la derecha y giras a tu izquierda, miras hacia arriba.", "Se guardi a destra e giri alla tua sinistra, guardi in alto.")
      },
      {
        id: "q2", type: "choice",
        q: T("How many squares does Bit move?", "¿Cuántas casillas avanza Bit?", "Di quante caselle si muove Bit?"),
        code: T("move forward\nturn right\nmove forward\nturn left", "avanzar\ngirar a la derecha\navanzar\ngirar a la izquierda", "vai avanti\ngira a destra\nvai avanti\ngira a sinistra"),
        options: ["1", "2", "4"],
        answer: 1,
        explain: T("Only **move forward** moves Bit. Turning happens on the spot.", "Solo **avanzar** mueve a Bit. Los giros son en el sitio.", "Solo **vai avanti** muove Bit. Le girate sono sul posto.")
      },
      {
        id: "q3", type: "choice",
        q: T("Bit faces **up** and turns right **twice**. Where does Bit face now?", "Bit mira **arriba** y gira a la derecha **dos veces**. ¿Hacia dónde mira ahora?", "Bit guarda **in alto** e gira a destra **due volte**. Dove guarda adesso?"),
        options: [T("right", "derecha", "destra"), T("down", "abajo", "in basso"), T("left", "izquierda", "sinistra")],
        answer: 1,
        explain: T("Two quarter turns make a half turn: Bit now faces the opposite way.", "Dos cuartos de vuelta hacen media vuelta: Bit mira al lado contrario.", "Due quarti di giro fanno mezzo giro: Bit guarda dalla parte opposta.")
      },
      {
        id: "q4", type: "choice",
        q: T("Why do the blocks need to be in the right order?", "¿Por qué los bloques tienen que estar en el orden correcto?", "Perché i blocchi devono essere nell'ordine giusto?"),
        options: [
          T("The computer runs them one by one, exactly as written", "El ordenador los ejecuta uno a uno, tal y como están", "Il computer li esegue uno alla volta, esattamente come sono scritti"),
          T("The computer chooses the best order by itself", "El ordenador elige solo el mejor orden", "Il computer sceglie da solo l'ordine migliore"),
          T("The order doesn't matter", "El orden no importa", "L'ordine non conta")
        ],
        answer: 0,
        explain: T("That's the first big idea of programming: a **sequence** of steps.", "Esta es la primera gran idea de la programación: una **secuencia** de pasos.", "È la prima grande idea della programmazione: una **sequenza** di passi.")
      }
    ],

    practice: [
      {
        id: "p1", type: "grid",
        q: T("Take Bit to the flag.", "Lleva a Bit hasta la bandera.", "Porta Bit alla bandiera."),
        map: [">...F"],
        solution: ["move", "move", "move", "move"],
        explain: T("Four steps, four blocks.", "Cuatro pasos, cuatro bloques.", "Quattro passi, quattro blocchi.")
      },
      {
        id: "p2", type: "grid",
        q: T("Bit is facing down. Reach the flag.", "Bit mira hacia abajo. Llega a la bandera.", "Bit guarda in basso. Raggiungi la bandiera."),
        map: ["v##", ".##", "..F"],
        solution: ["move", "move", "turnLeft", "move", "move"],
        hint: T("When Bit faces down, *Bit's* left is *your* right on the screen.", "Cuando Bit mira hacia abajo, la izquierda *de Bit* es *tu* derecha en la pantalla.", "Quando Bit guarda in basso, la sinistra *di Bit* è la *tua* destra sullo schermo."),
        explain: T("Turning is always from Bit's point of view, not yours.", "Los giros son siempre desde el punto de vista de Bit, no del tuyo.", "Le girate sono sempre dal punto di vista di Bit, non dal tuo.")
      },
      {
        id: "p3", type: "grid",
        q: T("Pick up the star, then reach the flag.", "Coge la estrella y luego llega a la bandera.", "Prendi la stella, poi raggiungi la bandiera."),
        map: [">.*#", "##.#", "##.F"],
        solution: ["move", "move", "turnRight", "move", "move", "turnLeft", "move"],
        explain: T("Bit picks up a star just by stepping on it.", "Bit coge una estrella solo con pisarla.", "Bit prende una stella solo passandoci sopra.")
      },
      {
        id: "p4", type: "grid",
        q: T("Go down the stairs.", "Baja las escaleras.", "Scendi le scale."),
        map: [">.##", "#..#", "##.F"],
        solution: ["move", "turnRight", "move", "turnLeft", "move", "turnRight", "move", "turnLeft", "move"],
        hint: T("Each step is: turn right, move, turn left, move.", "Cada escalón es: girar a la derecha, avanzar, girar a la izquierda, avanzar.", "Ogni gradino è: gira a destra, vai avanti, gira a sinistra, vai avanti."),
        explain: T("Did you notice the same blocks coming back again and again? Keep that in mind for the next module…", "¿Te has fijado en que los mismos bloques se repiten? Recuérdalo para el próximo módulo…", "Hai notato che gli stessi blocchi tornano sempre? Ricordatelo per il prossimo modulo…")
      }
    ],

    challenge: [
      {
        id: "c1", type: "grid",
        q: T("The way is blocked. Grab the star and find another way to the flag.", "El camino está cortado. Coge la estrella y busca otro camino a la bandera.", "La strada è bloccata. Prendi la stella e trova un'altra via per la bandiera."),
        map: ["*..#", ">#.F"],
        solution: ["turnLeft", "move", "turnRight", "move", "move", "turnRight", "move", "turnLeft", "move"]
      },
      {
        id: "c2", type: "grid",
        q: T("Make a U-turn and collect the star.", "Da la vuelta en U y coge la estrella.", "Fai un'inversione a U e prendi la stella."),
        map: [">..", "##.", "F*."],
        solution: ["move", "move", "turnRight", "move", "move", "turnRight", "move", "move"]
      }
    ]
  });
})();
