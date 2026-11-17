/* APPRENTICE · mission 1: Variables and types (written code, Java) */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };

  MG.module({
    id: "app-types",
    title: T("Variables and types", "Variables y tipos", "Variabili e tipi"),
    summary: T(
      "From blocks to written code. A variable is a box with a name, and its type says what can go inside.",
      "De los bloques al código escrito. Una variable es una caja con nombre, y su tipo dice qué puede ir dentro.",
      "Dai blocchi al codice scritto. Una variabile è una scatola con un nome, e il suo tipo dice cosa ci puoi mettere dentro."
    ),

    learn: [
      {
        title: T("From blocks to written code", "De los bloques al código escrito", "Dai blocchi al codice scritto"),
        text: T(
          "Until now you gave your robot orders with blocks. Real programs are **written**: every block becomes a line of text.\n\nThis is **Java**, the language we'll use from now on. Each instruction ends with a semicolon `;`. `System.out.println(...)` prints one line on the screen.",
          "Hasta ahora le dabas órdenes a tu robot con bloques. Los programas de verdad se **escriben**: cada bloque se convierte en una línea de texto.\n\nEsto es **Java**, el lenguaje que usaremos a partir de ahora. Cada instrucción termina con un punto y coma `;`. `System.out.println(...)` imprime una línea en la pantalla.",
          "Finora hai dato gli ordini al tuo robot con i blocchi. I programmi veri si **scrivono**: ogni blocco diventa una riga di testo.\n\nQuesto è **Java**, il linguaggio che useremo da qui in poi. Ogni istruzione finisce con un punto e virgola `;`. `System.out.println(...)` stampa una riga sullo schermo."
        ),
        code: "System.out.println(\"Hi!\");\nSystem.out.println(\"I'm Bit\");",
        after: T(
          "The program runs from top to bottom, like your blocks. It prints **Hi!** and then **I'm Bit**. The text between quotes is printed exactly as it is.",
          "El programa va de arriba abajo, como tus bloques. Imprime **Hi!** y luego **I'm Bit**. El texto entre comillas se imprime tal cual.",
          "Il programma va dall'alto in basso, come i tuoi blocchi. Stampa **Hi!** e poi **I'm Bit**. Il testo tra virgolette viene stampato così com'è."
        )
      },
      {
        title: T("A box with a name and a type", "Una caja con nombre y tipo", "Una scatola con un nome e un tipo"),
        text: T(
          "A **variable** is a box where the program keeps a value. In Java you say three things: the **type** (`int` = whole number), the **name** and the starting **value**.\n\nPress **Next line** and watch the box change.",
          "Una **variable** es una caja donde el programa guarda un valor. En Java dices tres cosas: el **tipo** (`int` = número entero), el **nombre** y el **valor** inicial.\n\nPulsa **Siguiente línea** y mira cómo cambia la caja.",
          "Una **variabile** è una scatola dove il programma tiene un valore. In Java dici tre cose: il **tipo** (`int` = numero intero), il **nome** e il **valore** di partenza.\n\nPremi **Riga successiva** e guarda come cambia la scatola."
        ),
        code: "int points = 5;\npoints = points + 2;\nSystem.out.println(points);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A new box called `points`, for whole numbers. Inside: 5.", "Una caja nueva llamada `points`, para números enteros. Dentro: 5.", "Una scatola nuova che si chiama `points`, per i numeri interi. Dentro: 5."), frames: [main({ points: "5" })] },
            { line: 2, note: T("First the right side: 5 + 2 = 7. Then 7 goes into the box. The old 5 is gone.", "Primero el lado derecho: 5 + 2 = 7. Luego el 7 entra en la caja. El 5 de antes desaparece.", "Prima il lato destro: 5 + 2 = 7. Poi il 7 entra nella scatola. Il 5 di prima sparisce."), frames: [main({ points: "7" })] },
            { line: 3, note: T("Print what's in the box. No quotes, so it prints the **value**, not the word.", "Imprime lo que hay en la caja. Sin comillas, así que imprime el **valor**, no la palabra.", "Stampa quello che c'è nella scatola. Senza virgolette, quindi stampa il **valore**, non la parola."), frames: [main({ points: "7" })], out: ["7"] }
          ]
        }
      },
      {
        title: T("The four types you'll use most", "Los cuatro tipos que más usarás", "I quattro tipi che userai di più"),
        text: T(
          "Every box has a type, chosen when you create it:\n\n- `int`: whole numbers, like `3` or `-10`\n- `double`: numbers with a decimal point, like `1.5`\n- `String`: text, always between quotes, like `\"Bit\"` (capital S: in Java capitals matter)\n- `boolean`: only `true` or `false`",
          "Cada caja tiene un tipo, que eliges al crearla:\n\n- `int`: números enteros, como `3` o `-10`\n- `double`: números con decimales, como `1.5`\n- `String`: texto, siempre entre comillas, como `\"Bit\"` (con S mayúscula: en Java las mayúsculas cuentan)\n- `boolean`: solo `true` o `false`",
          "Ogni scatola ha un tipo, che scegli quando la crei:\n\n- `int`: numeri interi, come `3` o `-10`\n- `double`: numeri con la virgola, come `1.5` (in Java si scrive con il punto)\n- `String`: testo, sempre tra virgolette, come `\"Bit\"` (con la S maiuscola: in Java maiuscole e minuscole contano)\n- `boolean`: solo `true` (vero) o `false` (falso)"
        ),
        code: "int lives = 3;\ndouble speed = 1.5;\nString name = \"Bit\";\nboolean hasKey = false;",
        after: T(
          "Watch out: `\"7\"` with quotes is a `String` (text), `7` without quotes is an `int` (a number).",
          "Atención: `\"7\"` con comillas es un `String` (texto), `7` sin comillas es un `int` (un número).",
          "Attenzione: `\"7\"` con le virgolette è una `String` (testo), `7` senza virgolette è un `int` (un numero)."
        )
      },
      {
        title: T("The type protects the box", "El tipo protege la caja", "Il tipo protegge la scatola"),
        text: T(
          "Why bother with types? Because Java checks them **before** the program even starts. If you put the wrong thing in a box, it stops you right away.",
          "¿Para qué sirven los tipos? Porque Java los comprueba **antes** de que el programa empiece. Si metes algo equivocado en una caja, te para enseguida.",
          "A cosa servono i tipi? Java li controlla **prima** ancora che il programma parta. Se metti la cosa sbagliata in una scatola, ti ferma subito."
        ),
        code: "int lives = 3;\nlives = \"three\";   // ERROR: text in a box for numbers\nlives = 2;         // OK",
        after: T(
          "Line 2 is refused: `\"three\"` is text, and `lives` only takes whole numbers. It's like trying to put a sock in an egg box. Finding the mistake early is a gift: no surprises while the game is running.",
          "La línea 2 se rechaza: `\"three\"` es texto, y `lives` solo acepta números enteros. Es como meter un calcetín en una huevera. Encontrar el error pronto es un regalo: nada de sorpresas mientras el juego funciona.",
          "La riga 2 viene rifiutata: `\"three\"` è testo, e `lives` accetta solo numeri interi. È come mettere un calzino nel portauova. Trovare l'errore subito è un regalo: niente sorprese mentre il gioco gira."
        )
      },
      {
        title: T("Text + numbers", "Texto + números", "Testo + numeri"),
        text: T(
          "The `+` sign does two different jobs. Between two numbers it **adds**. If there is text on one side, it **glues** them together.",
          "El signo `+` hace dos trabajos distintos. Entre dos números **suma**. Si hay texto a un lado, los **pega**.",
          "Il segno `+` fa due lavori diversi. Tra due numeri **somma**. Se da una parte c'è del testo, li **incolla**."
        ),
        code: "String name = \"Bit\";\nint points = 7;\nSystem.out.println(name + \" has \" + points + \" points\");\nSystem.out.println(\"1\" + 1);\nSystem.out.println(1 + 1);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A text box.", "Una caja de texto.", "Una scatola di testo."), frames: [main({ name: "\"Bit\"" })] },
            { line: 2, note: T("A number box.", "Una caja de número.", "Una scatola numero."), frames: [main({ name: "\"Bit\"", points: "7" })] },
            { line: 3, note: T("Text + number = everything glued into one sentence.", "Texto + número = todo pegado en una frase.", "Testo + numero = tutto incollato in una frase."), frames: [main({ name: "\"Bit\"", points: "7" })], out: ["Bit has 7 points"] },
            { line: 4, note: T("`\"1\"` is text, so `+` glues: **11**, not 2!", "`\"1\"` es texto, así que `+` pega: ¡**11**, no 2!", "`\"1\"` è testo, quindi `+` incolla: **11**, non 2!"), frames: [main({ name: "\"Bit\"", points: "7" })], out: ["Bit has 7 points", "11"] },
            { line: 5, note: T("Two numbers: now `+` adds. **2**.", "Dos números: ahora `+` suma. **2**.", "Due numeri: ora `+` somma. **2**."), frames: [main({ name: "\"Bit\"", points: "7" })], out: ["Bit has 7 points", "11", "2"] }
          ]
        }
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("Which type do you use for a whole number like `42`?", "¿Qué tipo usas para un número entero como `42`?", "Quale tipo usi per un numero intero come `42`?"),
        options: ["`int`", "`String`", "`boolean`"],
        answer: 0,
        explain: T("`int` is for whole numbers. `String` is text, `boolean` is true/false.", "`int` es para números enteros. `String` es texto, `boolean` es true/false.", "`int` è per i numeri interi. `String` è testo, `boolean` è vero/falso.")
      },
      {
        id: "q2", type: "choice",
        q: T("A box that can only hold `true` or `false` is…", "Una caja que solo puede guardar `true` o `false` es…", "Una scatola che può contenere solo `true` o `false` è…"),
        options: ["`double`", "`boolean`", "`String`"],
        answer: 1,
        explain: T("`boolean` has only two possible values: `true` and `false`.", "`boolean` solo tiene dos valores posibles: `true` y `false`.", "`boolean` ha solo due valori possibili: `true` e `false`.")
      },
      {
        id: "q3", type: "choice",
        q: T("What is in `x` at the end?", "¿Qué hay en `x` al final?", "Cosa c'è in `x` alla fine?"),
        code: "int x = 4;\nx = x * 2;",
        options: ["4", "8", "42"],
        answer: 1,
        explain: T("First the right side: 4 × 2 = 8. Then 8 goes into `x`.", "Primero el lado derecho: 4 × 2 = 8. Luego el 8 entra en `x`.", "Prima il lato destro: 4 × 2 = 8. Poi l'8 entra in `x`.")
      },
      {
        id: "q4", type: "choice",
        q: T("Which line does Java refuse?", "¿Qué línea rechaza Java?", "Quale riga viene rifiutata da Java?"),
        options: ["`int age = 9;`", "`String pet = \"cat\";`", "`int age = \"nine\";`"],
        answer: 2,
        explain: T("`\"nine\"` is text, but the box is for whole numbers (`int`).", "`\"nine\"` es texto, pero la caja es para números enteros (`int`).", "`\"nine\"` è testo, ma la scatola è per numeri interi (`int`).")
      },
      {
        id: "q5", type: "choice",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "System.out.println(\"2\" + 3);",
        options: ["23", "5", T("an error", "un error", "un errore")],
        answer: 0,
        explain: T("`\"2\"` is text, so `+` glues instead of adding.", "`\"2\"` es texto, así que `+` pega en lugar de sumar.", "`\"2\"` è testo, quindi `+` incolla invece di sommare.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "int coins = 10;\ncoins = coins - 3;\ncoins = coins + 5;\nSystem.out.println(coins);",
        answer: "12",
        hint: T("Follow the box line by line: 10, then…", "Sigue la caja línea a línea: 10, luego…", "Segui la scatola riga per riga: 10, poi…"),
        explain: T("10 − 3 = 7, then 7 + 5 = 12.", "10 − 3 = 7, luego 7 + 5 = 12.", "10 − 3 = 7, poi 7 + 5 = 12.")
      },
      {
        id: "p2", type: "match",
        q: T("Which type does each value have?", "¿Qué tipo tiene cada valor?", "Che tipo ha ogni valore?"),
        options: ["int", "double", "String", "boolean"],
        items: [
          { left: "`7`", answer: "int" },
          { left: "`\"hello\"`", answer: "String" },
          { left: "`true`", answer: "boolean" },
          { left: "`2.5`", answer: "double" },
          { left: "`\"7\"`", answer: "String" }
        ],
        hint: T("Quotes always mean text.", "Las comillas siempre significan texto.", "Le virgolette vogliono sempre dire testo."),
        explain: T("Quotes → `String`. Decimal point → `double`. true/false → `boolean`. Whole number → `int`.", "Comillas → `String`. Decimales → `double`. true/false → `boolean`. Número entero → `int`.", "Virgolette → `String`. Virgola → `double`. true/false → `boolean`. Numero intero → `int`.")
      },
      {
        id: "p3", type: "fill",
        q: T("Write the right type for each box.", "Escribe el tipo correcto para cada caja.", "Scrivi il tipo giusto per ogni scatola."),
        code: "[[int]] lives = 3;\n[[String]] hero = \"Ada\";\n[[boolean]] gameOver = false;\n[[double]] speed = 0.5;",
        hint: T("Look at the value on the right of `=`.", "Mira el valor a la derecha del `=`.", "Guarda il valore a destra dell'`=`."),
        explain: T("Whole number → `int`, text → `String`, true/false → `boolean`, decimal → `double`.", "Número entero → `int`, texto → `String`, true/false → `boolean`, decimal → `double`.", "Numero intero → `int`, testo → `String`, vero/falso → `boolean`, con la virgola → `double`.")
      },
      {
        id: "p4", type: "bug",
        q: T("Java refuses this program. Click the wrong line.", "Java rechaza este programa. Haz clic en la línea equivocada.", "Java rifiuta questo programma. Clicca la riga sbagliata."),
        code: "int score = 0;\nscore = score + 10;\nString msg = \"Score: \" + score;\nint bonus = \"5\";\nSystem.out.println(msg);",
        line: 4,
        hint: T("Look for a value that doesn't match the type of its box.", "Busca un valor que no encaja con el tipo de su caja.", "Cerca un valore che non va d'accordo con il tipo della sua scatola."),
        explain: T("`\"5\"` is text, but `bonus` is an `int`. The fix is `int bonus = 5;`. Line 3 is fine: text + number makes text.", "`\"5\"` es texto, pero `bonus` es un `int`. La solución es `int bonus = 5;`. La línea 3 está bien: texto + número da texto.", "`\"5\"` è testo, ma `bonus` è un `int`. La correzione è `int bonus = 5;`. La riga 3 va bene: testo + numero fa testo.")
      },
      {
        id: "p5", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "int a = 3;\nint b = a + 2;\na = 10;\nb = b * 2;",
        rows: [
          { label: "`a`", answer: "10" },
          { label: "`b`", answer: "10" }
        ],
        hint: T("When `a` changes on line 3, does `b` change too?", "Cuando `a` cambia en la línea 3, ¿cambia también `b`?", "Quando `a` cambia alla riga 3, cambia anche `b`?"),
        explain: T("`b` got a copy of the result (5) on line 2. Changing `a` later doesn't touch it. Then 5 × 2 = 10.", "`b` recibió una copia del resultado (5) en la línea 2. Cambiar `a` después no lo toca. Luego 5 × 2 = 10.", "`b` ha ricevuto una copia del risultato (5) alla riga 2. Cambiare `a` dopo non lo tocca. Poi 5 × 2 = 10.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("Three lines of output. What are they?", "Tres líneas de salida. ¿Cuáles son?", "Tre righe di output. Quali sono?"),
        code: "int x = 5;\nint y = x;\nx = x + 1;\nSystem.out.println(x);\nSystem.out.println(y);\nSystem.out.println(\"x\" + y);",
        answer: "6\n5\nx5",
        hint: T("`y = x` copies the number. And on the last line, `\"x\"` has quotes.", "`y = x` copia el número. Y en la última línea, `\"x\"` lleva comillas.", "`y = x` copia il numero. E nell'ultima riga `\"x\"` ha le virgolette."),
        explain: T("`y` keeps its copy (5) while `x` becomes 6. `\"x\"` is just the letter x, glued to 5.", "`y` conserva su copia (5) mientras `x` pasa a 6. `\"x\"` es solo la letra x, pegada al 5.", "`y` tiene la sua copia (5) mentre `x` diventa 6. `\"x\"` è solo la lettera x, incollata al 5.")
      },
      {
        id: "c2", type: "order",
        q: T("Write a program that prints `Lives: 2`. Two pieces are traps.", "Escribe un programa que imprima `Lives: 2`. Dos piezas son trampas.", "Scrivi un programma che stampi `Lives: 2`. Due pezzi sono trappole."),
        lines: ["int lives = 3;", "lives = lives - 1;", "System.out.println(\"Lives: \" + lives);"],
        extra: ["int lives = \"3\";", "lives = lives - \"1\";"],
        explain: T("Numbers without quotes go in an `int`. Subtract 1, then glue the text and the number.", "Los números sin comillas van en un `int`. Resta 1 y luego pega el texto y el número.", "I numeri senza virgolette vanno in un `int`. Togli 1, poi incolla il testo e il numero.")
      },
      {
        id: "c3", type: "fill",
        q: T("Finish the shop. The program must print `10.0`.", "Termina la tienda. El programa debe imprimir `10.0`.", "Completa il negozio. Il programma deve stampare `10.0`."),
        code: "[[String]] item = \"apple\";\ndouble price = 2.5;\nint howMany = [[4]];\n[[double]] total = price * howMany;\nSystem.out.println(total);",
        hint: T("2.5 × ? = 10. And a price with a decimal point needs a box that can hold decimals.", "2,5 × ? = 10. Y un precio con decimales necesita una caja que acepte decimales.", "2,5 × ? = 10. E un prezzo con la virgola ha bisogno di una scatola che accetti la virgola."),
        explain: T("2.5 × 4 = 10.0. The total has a decimal point, so it's a `double`.", "2,5 × 4 = 10,0. El total tiene decimales, así que es un `double`.", "2,5 × 4 = 10,0. Il totale ha la virgola, quindi è un `double`.")
      }
    ]
  });
})();
