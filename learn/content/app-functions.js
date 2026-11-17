/* APPRENTICE · mission 2: Functions (written code, Java) */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var inside = function (fn, vars) { return { name: T("Inside " + fn, "Dentro de " + fn, "Dentro " + fn), vars: vars }; };

  MG.module({
    id: "app-functions",
    title: T("Functions", "Funciones", "Funzioni"),
    summary: T(
      "Give a name to a group of instructions and use it whenever you want. With inputs and an answer.",
      "Ponle nombre a un grupo de instrucciones y úsalo cuando quieras. Con datos de entrada y una respuesta.",
      "Dai un nome a un gruppo di istruzioni e usalo quando vuoi. Con dei dati in ingresso e una risposta."
    ),

    learn: [
      {
        title: T("A recipe with a name", "Una receta con nombre", "Una ricetta con un nome"),
        text: T(
          "A **function** is a group of instructions with a name. You write it **once**, then you use it as many times as you like by writing its name with brackets: this is called **calling** the function.",
          "Una **función** es un grupo de instrucciones con nombre. La escribes **una vez** y luego la usas cuantas veces quieras escribiendo su nombre con paréntesis: esto se llama **llamar** a la función.",
          "Una **funzione** è un gruppo di istruzioni con un nome. La scrivi **una volta**, poi la usi tutte le volte che vuoi scrivendo il suo nome con le parentesi: questo si chiama **chiamare** la funzione."
        ),
        code: "void greet() {\n    System.out.println(\"Hi!\");\n    System.out.println(\"I'm Bit\");\n}\n\ngreet();\ngreet();",
        after: T(
          "Lines 1–4 only **teach** the program what `greet` means: nothing is printed yet. Lines 6 and 7 call it twice, so you see 4 lines: Hi! I'm Bit Hi! I'm Bit.\n\n`void` means: this function does something but gives **nothing back**.",
          "Las líneas 1–4 solo **enseñan** al programa qué significa `greet`: todavía no se imprime nada. Las líneas 6 y 7 la llaman dos veces, así que ves 4 líneas: Hi! I'm Bit Hi! I'm Bit.\n\n`void` significa: esta función hace algo pero **no devuelve nada**.",
          "Le righe 1–4 **insegnano** soltanto al programma cosa vuol dire `greet`: ancora non si stampa niente. Le righe 6 e 7 la chiamano due volte, quindi vedi 4 righe: Hi! I'm Bit Hi! I'm Bit.\n\n`void` vuol dire: questa funzione fa qualcosa ma **non restituisce niente**."
        )
      },
      {
        title: T("Inputs: parameters", "Datos de entrada: parámetros", "I dati in ingresso: parametri"),
        text: T(
          "A function can receive values. They go between the brackets and are called **parameters**. Each call can pass a different value.\n\nPress **Next line** and watch the temporary box that appears during each call.",
          "Una función puede recibir valores. Van entre los paréntesis y se llaman **parámetros**. Cada llamada puede pasar un valor distinto.\n\nPulsa **Siguiente línea** y mira la caja temporal que aparece en cada llamada.",
          "Una funzione può ricevere dei valori. Vanno tra le parentesi e si chiamano **parametri**. Ogni chiamata può passare un valore diverso.\n\nPremi **Riga successiva** e guarda la scatola temporanea che appare a ogni chiamata."
        ),
        code: "void greet(String name) {\n    System.out.println(\"Hi \" + name + \"!\");\n}\n\ngreet(\"Ada\");\ngreet(\"Leo\");",
        viz: {
          type: "memory",
          steps: [
            { line: 5, note: T("Call `greet` with \"Ada\". A temporary box opens: `name` = \"Ada\".", "Llamamos a `greet` con \"Ada\". Se abre una caja temporal: `name` = \"Ada\".", "Chiamiamo `greet` con \"Ada\". Si apre una scatola temporanea: `name` = \"Ada\"."), frames: [main(), inside("greet", { name: "\"Ada\"" })] },
            { line: 2, note: T("Inside the function, `name` is \"Ada\".", "Dentro de la función, `name` vale \"Ada\".", "Dentro la funzione, `name` vale \"Ada\"."), frames: [main(), inside("greet", { name: "\"Ada\"" })], out: ["Hi Ada!"] },
            { line: 6, note: T("The first call is over and its box is gone. New call, new box: `name` = \"Leo\".", "La primera llamada ha terminado y su caja ha desaparecido. Nueva llamada, nueva caja: `name` = \"Leo\".", "La prima chiamata è finita e la sua scatola è sparita. Nuova chiamata, nuova scatola: `name` = \"Leo\"."), frames: [main(), inside("greet", { name: "\"Leo\"" })], out: ["Hi Ada!"] },
            { line: 2, note: T("Same function, different value, different result.", "La misma función, otro valor, otro resultado.", "Stessa funzione, valore diverso, risultato diverso."), frames: [main(), inside("greet", { name: "\"Leo\"" })], out: ["Hi Ada!", "Hi Leo!"] }
          ]
        }
      },
      {
        title: T("Giving an answer back: return", "Devolver una respuesta: return", "Restituire una risposta: return"),
        text: T(
          "Some functions calculate something and **give it back** with `return`. Instead of `void`, you write the type of the answer: here `int`.\n\nThe call `twice(4)` is replaced by the answer, so you can put it in a box or use it in another call.",
          "Algunas funciones calculan algo y lo **devuelven** con `return`. En lugar de `void`, escribes el tipo de la respuesta: aquí `int`.\n\nLa llamada `twice(4)` se sustituye por la respuesta, así que puedes guardarla en una caja o usarla en otra llamada.",
          "Alcune funzioni calcolano qualcosa e lo **restituiscono** con `return`. Al posto di `void` scrivi il tipo della risposta: qui `int`.\n\nLa chiamata `twice(4)` viene sostituita dalla risposta, quindi puoi metterla in una scatola o usarla in un'altra chiamata."
        ),
        code: "int twice(int n) {\n    return n * 2;\n}\n\nint a = twice(4);\nint b = twice(a);\nSystem.out.println(b);",
        viz: {
          type: "memory",
          steps: [
            { line: 5, note: T("To fill `a`, first call `twice` with 4.", "Para llenar `a`, primero se llama a `twice` con 4.", "Per riempire `a`, prima si chiama `twice` con 4."), frames: [main(), inside("twice", { n: "4" })] },
            { line: 2, note: T("4 × 2 = 8. `return` gives 8 back and the function ends.", "4 × 2 = 8. `return` devuelve 8 y la función termina.", "4 × 2 = 8. `return` restituisce 8 e la funzione finisce."), frames: [main(), inside("twice", { n: "4" })] },
            { line: 5, note: T("`twice(4)` became 8, and 8 goes into `a`.", "`twice(4)` se ha convertido en 8, y el 8 entra en `a`.", "`twice(4)` è diventato 8, e l'8 entra in `a`."), frames: [main({ a: "8" })] },
            { line: 6, note: T("Call it again, this time with the value of `a`: 8.", "Se llama otra vez, ahora con el valor de `a`: 8.", "Si chiama di nuovo, stavolta con il valore di `a`: 8."), frames: [main({ a: "8" }), inside("twice", { n: "8" })] },
            { line: 2, note: T("8 × 2 = 16, given back.", "8 × 2 = 16, devuelto.", "8 × 2 = 16, restituito."), frames: [main({ a: "8" }), inside("twice", { n: "8" })] },
            { line: 6, note: T("16 goes into `b`.", "El 16 entra en `b`.", "Il 16 entra in `b`."), frames: [main({ a: "8", b: "16" })] },
            { line: 7, note: T("Print `b`.", "Imprime `b`.", "Stampa `b`."), frames: [main({ a: "8", b: "16" })], out: ["16"] }
          ]
        }
      },
      {
        title: T("Print or give back?", "¿Imprimir o devolver?", "Stampare o restituire?"),
        text: T(
          "These two functions look alike, but they are very different.",
          "Estas dos funciones se parecen, pero son muy distintas.",
          "Queste due funzioni si somigliano, ma sono molto diverse."
        ),
        code: "int square(int n) {\n    return n * n;\n}\n\nvoid showSquare(int n) {\n    System.out.println(n * n);\n}",
        after: T(
          "`square(3)` **gives back** 9: you can keep using it, for example `square(3) + 1` is 10.\n\n`showSquare(3)` only **prints** 9 on the screen. Nothing comes back to the program, so `showSquare(3) + 1` makes no sense.\n\nTip: a function that gives back an answer is more useful, because the rest of the program can use it.",
          "`square(3)` **devuelve** 9: puedes seguir usándolo, por ejemplo `square(3) + 1` da 10.\n\n`showSquare(3)` solo **imprime** 9 en la pantalla. No vuelve nada al programa, así que `showSquare(3) + 1` no tiene sentido.\n\nConsejo: una función que devuelve una respuesta es más útil, porque el resto del programa puede usarla.",
          "`square(3)` **restituisce** 9: puoi continuare a usarlo, per esempio `square(3) + 1` fa 10.\n\n`showSquare(3)` invece **stampa** soltanto 9 sullo schermo. Al programma non torna niente, quindi `showSquare(3) + 1` non ha senso.\n\nConsiglio: una funzione che restituisce una risposta è più utile, perché il resto del programma la può usare."
        )
      },
      {
        title: T("More than one parameter", "Más de un parámetro", "Più di un parametro"),
        text: T(
          "Parameters are separated by commas, and each one has its own type. Values are matched **in order**: the first value goes to the first parameter.",
          "Los parámetros se separan con comas, y cada uno tiene su tipo. Los valores se emparejan **en orden**: el primer valor va al primer parámetro.",
          "I parametri si separano con le virgole, e ognuno ha il suo tipo. I valori si abbinano **in ordine**: il primo valore va al primo parametro."
        ),
        code: "int add(int a, int b) {\n    return a + b;\n}\n\nSystem.out.println(add(2, 3));\nSystem.out.println(add(add(1, 1), 10));",
        after: T(
          "The first line prints **5**. In the second, the inner call goes first: `add(1, 1)` is 2, then `add(2, 10)` is **12**.",
          "La primera línea imprime **5**. En la segunda, primero va la llamada de dentro: `add(1, 1)` es 2, luego `add(2, 10)` es **12**.",
          "La prima riga stampa **5**. Nella seconda prima si fa la chiamata interna: `add(1, 1)` fa 2, poi `add(2, 10)` fa **12**."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What does `void` mean in front of a function?", "¿Qué significa `void` delante de una función?", "Cosa vuol dire `void` davanti a una funzione?"),
        options: [
          T("It gives nothing back", "No devuelve nada", "Non restituisce niente"),
          T("It gives back a number", "Devuelve un número", "Restituisce un numero"),
          T("It never runs", "No se ejecuta nunca", "Non viene mai eseguita")
        ],
        answer: 0,
        explain: T("`void` functions do something (like printing) but don't give an answer back.", "Las funciones `void` hacen algo (como imprimir) pero no devuelven una respuesta.", "Le funzioni `void` fanno qualcosa (come stampare) ma non restituiscono una risposta.")
      },
      {
        id: "q2", type: "choice",
        q: T("In `int twice(int n)`, what is `n`?", "En `int twice(int n)`, ¿qué es `n`?", "In `int twice(int n)`, cos'è `n`?"),
        options: [
          T("A parameter: the value the function receives", "Un parámetro: el valor que recibe la función", "Un parametro: il valore che la funzione riceve"),
          T("The answer the function gives back", "La respuesta que devuelve la función", "La risposta che la funzione restituisce"),
          T("The name of the function", "El nombre de la función", "Il nome della funzione")
        ],
        answer: 0,
        explain: T("The name is `twice`, the answer's type is `int`, and `n` is the input.", "El nombre es `twice`, el tipo de la respuesta es `int` y `n` es el dato de entrada.", "Il nome è `twice`, il tipo della risposta è `int` e `n` è il dato in ingresso.")
      },
      {
        id: "q3", type: "choice",
        q: T("How many times is `Hi!` printed?", "¿Cuántas veces se imprime `Hi!`?", "Quante volte viene stampato `Hi!`?"),
        code: "void greet() {\n    System.out.println(\"Hi!\");\n}\n\ngreet();\ngreet();\ngreet();",
        options: ["1", "3", "4"],
        answer: 1,
        explain: T("Writing the function prints nothing. Each of the 3 calls prints once.", "Escribir la función no imprime nada. Cada una de las 3 llamadas imprime una vez.", "Scrivere la funzione non stampa niente. Ognuna delle 3 chiamate stampa una volta.")
      },
      {
        id: "q4", type: "choice",
        q: T("With the `twice` function from the lesson, what does `twice(5)` give back?", "Con la función `twice` de la lección, ¿qué devuelve `twice(5)`?", "Con la funzione `twice` della lezione, cosa restituisce `twice(5)`?"),
        options: ["5", "7", "10"],
        answer: 2,
        explain: T("`return n * 2` with n = 5 gives 10.", "`return n * 2` con n = 5 da 10.", "`return n * 2` con n = 5 fa 10.")
      },
      {
        id: "q5", type: "choice",
        q: T("What happens to a function's temporary boxes when it ends?", "¿Qué pasa con las cajas temporales de una función cuando termina?", "Cosa succede alle scatole temporanee di una funzione quando finisce?"),
        options: [
          T("They disappear", "Desaparecen", "Spariscono"),
          T("They stay forever", "Se quedan para siempre", "Restano per sempre"),
          T("They move into the main program", "Pasan al programa principal", "Passano nel programma principale")
        ],
        answer: 0,
        explain: T("Only the answer given back with `return` survives the call.", "Solo la respuesta devuelta con `return` sobrevive a la llamada.", "Della chiamata resta solo la risposta restituita con `return`.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "int triple(int n) {\n    return n * 3;\n}\n\nSystem.out.println(triple(2));\nSystem.out.println(triple(2) + 1);",
        answer: "6\n7",
        hint: T("Replace each call with its answer.", "Sustituye cada llamada por su respuesta.", "Sostituisci ogni chiamata con la sua risposta."),
        explain: T("`triple(2)` is 6. Then 6 + 1 = 7.", "`triple(2)` es 6. Luego 6 + 1 = 7.", "`triple(2)` fa 6. Poi 6 + 1 = 7.")
      },
      {
        id: "p2", type: "fill",
        q: T("Complete the function so that `total` is 7.", "Completa la función para que `total` valga 7.", "Completa la funzione in modo che `total` valga 7."),
        code: "[[int]] add(int a, int b) {\n    [[return]] a + b;\n}\n\nint total = add(3, 4);",
        hint: T("It gives back a whole number. Which word gives the answer back?", "Devuelve un número entero. ¿Qué palabra devuelve la respuesta?", "Restituisce un numero intero. Quale parola restituisce la risposta?"),
        explain: T("The answer is an `int`, and `return` gives it back.", "La respuesta es un `int`, y `return` la devuelve.", "La risposta è un `int`, e `return` la restituisce.")
      },
      {
        id: "p3", type: "order",
        q: T("Build a function that cheers, then call it so it prints `Go Ada!`. One piece is a trap.", "Construye una función que anime y llámala para que imprima `Go Ada!`. Una pieza es una trampa.", "Costruisci una funzione che fa il tifo, poi chiamala in modo che stampi `Go Ada!`. Un pezzo è una trappola."),
        lines: ["void cheer(String name) {", "    System.out.println(\"Go \" + name + \"!\");", "}", "cheer(\"Ada\");"],
        extra: ["    return \"Go\";"],
        hint: T("A `void` function gives nothing back.", "Una función `void` no devuelve nada.", "Una funzione `void` non restituisce niente."),
        explain: T("`return \"Go\"` can't go in a `void` function. First write the function, then call it.", "`return \"Go\"` no puede ir en una función `void`. Primero escribe la función y luego llámala.", "`return \"Go\"` non può stare in una funzione `void`. Prima scrivi la funzione, poi chiamala.")
      },
      {
        id: "p4", type: "bug",
        q: T("`half` promises to give back an `int`, but Java refuses it. Click the wrong line.", "`half` promete devolver un `int`, pero Java la rechaza. Haz clic en la línea equivocada.", "`half` promette di restituire un `int`, ma Java la rifiuta. Clicca la riga sbagliata."),
        code: "int half(int n) {\n    int result = n / 2;\n}\n\nint x = half(10);\nSystem.out.println(x);",
        line: 2,
        hint: T("The function calculates the result… and then?", "La función calcula el resultado… ¿y luego?", "La funzione calcola il risultato… e poi?"),
        explain: T("The result is calculated but never given back. The fix is `return n / 2;`.", "El resultado se calcula pero nunca se devuelve. La solución es `return n / 2;`.", "Il risultato viene calcolato ma non viene mai restituito. La correzione è `return n / 2;`.")
      },
      {
        id: "p5", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "int addOne(int n) {\n    n = n + 1;\n    return n;\n}\n\nint a = 5;\nint b = addOne(a);",
        rows: [
          { label: "`a`", answer: "5" },
          { label: "`b`", answer: "6" }
        ],
        hint: T("The function receives a **copy** of `a` in its own box `n`.", "La función recibe una **copia** de `a` en su propia caja `n`.", "La funzione riceve una **copia** di `a` nella sua scatola `n`."),
        explain: T("`n` changes inside the function, but `a` stays 5. The answer 6 goes into `b`.", "`n` cambia dentro de la función, pero `a` sigue en 5. La respuesta 6 entra en `b`.", "`n` cambia dentro la funzione, ma `a` resta 5. La risposta 6 entra in `b`.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("Calls inside calls! What does this print?", "¡Llamadas dentro de llamadas! ¿Qué imprime?", "Chiamate dentro le chiamate! Cosa stampa?"),
        code: "int twice(int n) {\n    return n * 2;\n}\n\nint addThree(int n) {\n    return n + 3;\n}\n\nSystem.out.println(twice(addThree(1)));\nSystem.out.println(addThree(twice(1)));",
        answer: "8\n5",
        hint: T("Always start from the innermost call.", "Empieza siempre por la llamada de más adentro.", "Parti sempre dalla chiamata più interna."),
        explain: T("addThree(1) = 4, twice(4) = 8. twice(1) = 2, addThree(2) = 5.", "addThree(1) = 4, twice(4) = 8. twice(1) = 2, addThree(2) = 5.", "addThree(1) = 4, twice(4) = 8. twice(1) = 2, addThree(2) = 5.")
      },
      {
        id: "c2", type: "fill",
        q: T("Finish the area function. `a` must be 12.", "Termina la función del área. `a` debe valer 12.", "Completa la funzione dell'area. `a` deve valere 12."),
        code: "int area(int width, int height) {\n    [[return]] width [[*]] height;\n}\n\nint a = area(3, [[4]]);",
        hint: T("Area of a rectangle: width times height. 3 × ? = 12.", "Área de un rectángulo: ancho por alto. 3 × ? = 12.", "Area di un rettangolo: base per altezza. 3 × ? = 12."),
        explain: T("`return width * height;` and 3 × 4 = 12.", "`return width * height;` y 3 × 4 = 12.", "`return width * height;` e 3 × 4 = 12.")
      },
      {
        id: "c3", type: "order",
        q: T("Write a program that prints `20`. Two pieces are traps.", "Escribe un programa que imprima `20`. Dos piezas son trampas.", "Scrivi un programma che stampi `20`. Due pezzi sono trappole."),
        lines: ["int twice(int n) {", "    return n * 2;", "}", "int x = twice(5);", "System.out.println(twice(x));"],
        extra: ["void twice(int n) {", "System.out.println(twice);"],
        hint: T("`twice(5)` is 10. What do you have to do to 10 to get 20?", "`twice(5)` es 10. ¿Qué hay que hacer con 10 para obtener 20?", "`twice(5)` fa 10. Cosa devi fare a 10 per ottenere 20?"),
        explain: T("The function must give back an `int` (not `void`). `x` is 10, and `twice(x)` is 20. A call always needs brackets.", "La función debe devolver un `int` (no `void`). `x` vale 10, y `twice(x)` da 20. Una llamada siempre lleva paréntesis.", "La funzione deve restituire un `int` (non `void`). `x` vale 10, e `twice(x)` fa 20. Una chiamata ha sempre le parentesi.")
      }
    ]
  });
})();
