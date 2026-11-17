/* INVENTOR · mission 1: Classes & objects */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var dog = function (id, name, age) { return { id: id, cls: "Dog", fields: { name: name, age: age } }; };
  var ctor = T("Inside the constructor", "Dentro del constructor", "Dentro il costruttore");

  MG.module({
    id: "inv-classes",
    title: T("Classes & objects", "Clases y objetos", "Classi e oggetti"),
    summary: T(
      "A class is a blueprint. An object is the thing you build with it.",
      "Una clase es un plano. Un objeto es lo que construyes con él.",
      "Una classe è un progetto. Un oggetto è la cosa che costruisci con esso."
    ),
    badge: { glyph: "blueprint", name: T("Blueprint maker", "Creador de planos", "Creatore di progetti") },

    learn: [
      {
        title: T("A class is a blueprint", "Una clase es un plano", "Una classe è un progetto"),
        text: T(
          "Think of a cookie cutter. The cutter is not a cookie, but it decides the shape of every cookie.\n\nA **class** works the same way. It says what every object of that kind *has* (its **fields**). This class says: every dog has a name and an age.",
          "Piensa en un molde de galletas. El molde no es una galleta, pero decide la forma de todas.\n\nUna **clase** funciona igual. Dice lo que *tiene* cada objeto de ese tipo (sus **atributos**). Esta clase dice: cada perro tiene un nombre y una edad.",
          "Pensa a uno stampino per biscotti. Lo stampino non è un biscotto, ma decide la forma di tutti i biscotti.\n\nUna **classe** funziona allo stesso modo. Dice cosa *ha* ogni oggetto di quel tipo (i suoi **attributi**). Questa classe dice: ogni cane ha un nome e un'età."
        ),
        code: "class Dog {\n    String name;\n    int age;\n}",
        after: T(
          "No dog exists yet: we only wrote the plan. Next, we build some dogs.",
          "Todavía no existe ningún perro: solo hemos escrito el plano. Ahora construimos algunos.",
          "Ancora non esiste nessun cane: abbiamo scritto solo il progetto. Ora ne costruiamo qualcuno."
        )
      },
      {
        title: T("Build objects with new", "Construye objetos con new", "Costruisci oggetti con new"),
        text: T(
          "`new Dog()` builds a real dog in memory. The variable `rex` doesn't contain the dog: it **points** to it, like an arrow.\n\nPress **Next line** and watch what each line does.",
          "`new Dog()` construye un perro de verdad en la memoria. La variable `rex` no contiene el perro: **apunta** a él, como una flecha.\n\nPulsa **Siguiente línea** y mira qué hace cada línea.",
          "`new Dog()` costruisce un cane vero nella memoria. La variabile `rex` non contiene il cane: lo **indica**, come una freccia.\n\nPremi **Riga successiva** e guarda cosa fa ogni riga."
        ),
        code: "Dog rex = new Dog();\nrex.name = \"Rex\";\nrex.age = 3;\nDog luna = new Dog();\nluna.name = \"Luna\";\nSystem.out.println(rex.name);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A new dog appears. It's still empty. The variable `rex` points to it.", "Aparece un perro nuevo. Todavía está vacío. La variable `rex` apunta a él.", "Appare un cane nuovo. È ancora vuoto. La variabile `rex` lo indica."), frames: [main({ rex: "@1" })], heap: [dog("@1", "null", "0")] },
            { line: 2, note: T("`rex.name` means: the name **of** the dog that `rex` points to.", "`rex.name` significa: el nombre **del** perro al que apunta `rex`.", "`rex.name` significa: il nome **del** cane indicato da `rex`."), frames: [main({ rex: "@1" })], heap: [dog("@1", "\"Rex\"", "0")] },
            { line: 3, note: T("Same dog, now with an age.", "El mismo perro, ahora con edad.", "Lo stesso cane, ora con un'età."), frames: [main({ rex: "@1" })], heap: [dog("@1", "\"Rex\"", "3")] },
            { line: 4, note: T("A second `new`: a second, separate dog. It has no name yet.", "Un segundo `new`: un segundo perro, distinto. Todavía no tiene nombre.", "Un secondo `new`: un secondo cane, separato. Non ha ancora un nome."), frames: [main({ rex: "@1", luna: "@2" })], heap: [dog("@1", "\"Rex\"", "3"), dog("@2", "null", "0")] },
            { line: 5, note: T("Naming Luna doesn't change Rex. Each dog has its own fields.", "Poner nombre a Luna no cambia a Rex. Cada perro tiene sus propios atributos.", "Dare un nome a Luna non cambia Rex. Ogni cane ha i suoi attributi."), frames: [main({ rex: "@1", luna: "@2" })], heap: [dog("@1", "\"Rex\"", "3"), dog("@2", "\"Luna\"", "0")] },
            { line: 6, note: T("Print Rex's name. Done!", "Imprime el nombre de Rex. ¡Listo!", "Stampa il nome di Rex. Fatto!"), frames: [main({ rex: "@1", luna: "@2" })], heap: [dog("@1", "\"Rex\"", "3"), dog("@2", "\"Luna\"", "0")], out: ["Rex"] }
          ]
        }
      },
      {
        title: T("Constructors set things up", "Los constructores preparan el objeto", "I costruttori preparano l'oggetto"),
        text: T(
          "Filling every field by hand is boring. A **constructor** runs automatically when you write `new`. It has the same name as the class.\n\nInside it, `this.name` is the dog's field, while `name` alone is the value we passed in.",
          "Rellenar cada atributo a mano es aburrido. Un **constructor** se ejecuta solo cuando escribes `new`. Se llama igual que la clase.\n\nDentro, `this.name` es el atributo del perro, y `name` solo es el valor que le pasamos.",
          "Riempire ogni attributo a mano è noioso. Un **costruttore** parte da solo quando scrivi `new`. Si chiama come la classe.\n\nDentro, `this.name` è l'attributo del cane, mentre `name` da solo è il valore che gli passiamo."
        ),
        code: "class Dog {\n    String name;\n    int age;\n\n    Dog(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nDog rex = new Dog(\"Rex\", 3);",
        viz: {
          type: "memory",
          steps: [
            { line: 11, note: T("`new` builds an empty dog and calls the constructor with \"Rex\" and 3.", "`new` construye un perro vacío y llama al constructor con \"Rex\" y 3.", "`new` costruisce un cane vuoto e chiama il costruttore con \"Rex\" e 3."), frames: [main(), { name: ctor, vars: { name: "\"Rex\"", age: "3" } }], heap: [dog("@1", "null", "0")] },
            { line: 6, note: T("Copy the name into the dog.", "Copia el nombre dentro del perro.", "Copia il nome dentro il cane."), frames: [main(), { name: ctor, vars: { name: "\"Rex\"", age: "3" } }], heap: [dog("@1", "\"Rex\"", "0")] },
            { line: 7, note: T("Copy the age into the dog.", "Copia la edad dentro del perro.", "Copia l'età dentro il cane."), frames: [main(), { name: ctor, vars: { name: "\"Rex\"", age: "3" } }], heap: [dog("@1", "\"Rex\"", "3")] },
            { line: 11, note: T("The constructor is finished: its temporary variables disappear. The dog stays, and `rex` points to it.", "El constructor ha terminado: sus variables temporales desaparecen. El perro se queda, y `rex` apunta a él.", "Il costruttore ha finito: le sue variabili temporanee spariscono. Il cane resta, e `rex` lo indica."), frames: [main({ rex: "@1" })], heap: [dog("@1", "\"Rex\"", "3")] }
          ]
        }
      },
      {
        title: T("Methods: what an object can do", "Métodos: lo que un objeto sabe hacer", "Metodi: cosa sa fare un oggetto"),
        text: T(
          "Fields are what an object **knows**. Methods are what it **does**.",
          "Los atributos son lo que un objeto **sabe**. Los métodos son lo que **hace**.",
          "Gli attributi sono ciò che un oggetto **sa**. I metodi sono ciò che **fa**."
        ),
        code: "class Dog {\n    String name;\n    int age;\n\n    void bark() {\n        System.out.println(name + \" says Woof!\");\n    }\n\n    int humanYears() {\n        return age * 7;\n    }\n}",
        after: T(
          "`void` means the method gives nothing back: it just does something. `int` means it gives back a whole number.\n\nIf Rex is 3: `rex.bark()` prints **Rex says Woof!** and `rex.humanYears()` gives back **21**. We'll use this `Dog` in the exercises (with the constructor from before).",
          "`void` significa que el método no devuelve nada: solo hace algo. `int` significa que devuelve un número entero.\n\nSi Rex tiene 3 años: `rex.bark()` imprime **Rex says Woof!** y `rex.humanYears()` devuelve **21**. Usaremos este `Dog` en los ejercicios (con el constructor de antes).",
          "`void` significa che il metodo non restituisce niente: fa solo qualcosa. `int` significa che restituisce un numero intero.\n\nSe Rex ha 3 anni: `rex.bark()` stampa **Rex says Woof!** e `rex.humanYears()` restituisce **21**. Useremo questo `Dog` negli esercizi (con il costruttore di prima)."
        )
      },
      {
        title: T("Two arrows, one dog", "Dos flechas, un perro", "Due frecce, un cane"),
        text: T(
          "Careful! Copying a variable copies the **arrow**, not the dog. Watch what happens to `a` when we change `b`.",
          "¡Atención! Copiar una variable copia la **flecha**, no el perro. Mira qué le pasa a `a` cuando cambiamos `b`.",
          "Attenzione! Copiare una variabile copia la **freccia**, non il cane. Guarda cosa succede ad `a` quando cambiamo `b`."
        ),
        code: "Dog a = new Dog(\"Rex\", 3);\nDog b = a;\nb.age = 4;\nSystem.out.println(a.age);",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("One dog, one arrow.", "Un perro, una flecha.", "Un cane, una freccia."), frames: [main({ a: "@1" })], heap: [dog("@1", "\"Rex\"", "3")] },
            { line: 2, note: T("`b = a` copies the arrow. Now both point to the **same** dog. No new dog!", "`b = a` copia la flecha. Ahora las dos apuntan al **mismo** perro. ¡Ningún perro nuevo!", "`b = a` copia la freccia. Ora tutte e due indicano lo **stesso** cane. Nessun cane nuovo!"), frames: [main({ a: "@1", b: "@1" })], heap: [dog("@1", "\"Rex\"", "3")] },
            { line: 3, note: T("We change the age through `b`…", "Cambiamos la edad a través de `b`…", "Cambiamo l'età passando da `b`…"), frames: [main({ a: "@1", b: "@1" })], heap: [dog("@1", "\"Rex\"", "4")] },
            { line: 4, note: T("…and `a` sees 4 too, because it's the same dog.", "…y `a` también ve 4, porque es el mismo perro.", "…e anche `a` vede 4, perché è lo stesso cane."), frames: [main({ a: "@1", b: "@1" })], heap: [dog("@1", "\"Rex\"", "4")], out: ["4"] }
          ]
        }
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What is a **class**?", "¿Qué es una **clase**?", "Cos'è una **classe**?"),
        options: [
          T("A blueprint that describes its objects", "Un plano que describe sus objetos", "Un progetto che descrive i suoi oggetti"),
          T("One specific object, like Rex", "Un objeto concreto, como Rex", "Un oggetto preciso, come Rex"),
          T("A number", "Un número", "Un numero")
        ],
        answer: 0,
        explain: T("The class is the plan. Objects are built from it with `new`.", "La clase es el plano. Los objetos se construyen con `new`.", "La classe è il progetto. Gli oggetti si costruiscono con `new`.")
      },
      {
        id: "q2", type: "choice",
        q: T("Which word builds a new object?", "¿Qué palabra construye un objeto nuevo?", "Quale parola costruisce un nuovo oggetto?"),
        options: ["`class`", "`new`", "`return`"],
        answer: 1,
        explain: T("`new Dog(...)` builds a dog and runs its constructor.", "`new Dog(...)` construye un perro y ejecuta su constructor.", "`new Dog(...)` costruisce un cane e fa partire il suo costruttore.")
      },
      {
        id: "q3", type: "choice",
        q: T("How many dogs does this code build?", "¿Cuántos perros construye este código?", "Quanti cani costruisce questo codice?"),
        code: "Dog a = new Dog(\"Rex\", 3);\nDog b = new Dog(\"Luna\", 5);\nDog c = a;",
        options: ["2", "3", "1"],
        answer: 0,
        explain: T("Count the `new`: there are two. `c = a` only copies an arrow.", "Cuenta los `new`: hay dos. `c = a` solo copia una flecha.", "Conta i `new`: sono due. `c = a` copia solo una freccia.")
      },
      {
        id: "q4", type: "choice",
        q: T("Fields or methods? `name` and `age` are…", "¿Atributos o métodos? `name` y `age` son…", "Attributi o metodi? `name` e `age` sono…"),
        options: [
          T("fields: what the dog knows", "atributos: lo que el perro sabe", "attributi: ciò che il cane sa"),
          T("methods: what the dog does", "métodos: lo que el perro hace", "metodi: ciò che il cane fa")
        ],
        answer: 0,
        explain: T("`bark()` would be a method: it has brackets and does something.", "`bark()` sería un método: lleva paréntesis y hace algo.", "`bark()` sarebbe un metodo: ha le parentesi e fa qualcosa.")
      },
      {
        id: "q5", type: "choice",
        q: T("What is printed?", "¿Qué se imprime?", "Cosa viene stampato?"),
        code: "Dog a = new Dog(\"Rex\", 3);\nDog b = a;\nb.name = \"Max\";\nSystem.out.println(a.name);",
        options: ["Rex", "Max", "null"],
        answer: 1,
        explain: T("`a` and `b` point to the same dog. Renaming it through `b` renames it for `a` too.", "`a` y `b` apuntan al mismo perro. Si lo renombras con `b`, también cambia para `a`.", "`a` e `b` indicano lo stesso cane. Se lo rinomini con `b`, cambia anche per `a`.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("Using the `Dog` class from the lesson, what does this print?", "Con la clase `Dog` de la lección, ¿qué imprime esto?", "Con la classe `Dog` della lezione, cosa stampa questo?"),
        code: "Dog rex = new Dog(\"Rex\", 2);\nrex.bark();\nSystem.out.println(rex.humanYears());",
        answer: "Rex says Woof!\n14",
        hint: T("`bark()` prints the name + \" says Woof!\". `humanYears()` gives back age × 7.", "`bark()` imprime el nombre + \" says Woof!\". `humanYears()` devuelve edad × 7.", "`bark()` stampa il nome + \" says Woof!\". `humanYears()` restituisce età × 7."),
        explain: T("First `bark()` prints a line, then 2 × 7 = 14 is printed.", "Primero `bark()` imprime una línea, luego se imprime 2 × 7 = 14.", "Prima `bark()` stampa una riga, poi viene stampato 2 × 7 = 14.")
      },
      {
        id: "p2", type: "order",
        q: T("Build a `Cat` class with a `name` and a constructor. One piece is a trap.", "Construye una clase `Cat` con `name` y un constructor. Una pieza es una trampa.", "Costruisci una classe `Cat` con `name` e un costruttore. Un pezzo è una trappola."),
        lines: ["class Cat {", "    String name;", "    Cat(String name) {", "        this.name = name;", "    }", "}"],
        extra: ["    void Cat(String name) {"],
        hint: T("A constructor has **no** `void`.", "Un constructor **no** lleva `void`.", "Un costruttore **non** ha `void`."),
        explain: T("Constructors only have the class name, nothing before it.", "Los constructores solo llevan el nombre de la clase, nada delante.", "I costruttori hanno solo il nome della classe, niente davanti.")
      },
      {
        id: "p3", type: "fill",
        q: T("Complete the constructor and build a book.", "Completa el constructor y construye un libro.", "Completa il costruttore e costruisci un libro."),
        code: "class Book {\n    String title;\n    int pages;\n\n    Book(String title, int pages) {\n        [[this]].title = title;\n        this.[[pages]] = pages;\n    }\n}\n\nBook b = [[new]] Book(\"Pinocchio\", 192);",
        hint: T("To reach the object's own field you write `this.` + field name.", "Para llegar al atributo del objeto escribes `this.` + nombre del atributo.", "Per arrivare all'attributo dell'oggetto scrivi `this.` + nome dell'attributo."),
        explain: T("`this.title` is the field, `title` is the value passed in. `new` builds the book.", "`this.title` es el atributo, `title` es el valor recibido. `new` construye el libro.", "`this.title` è l'attributo, `title` è il valore ricevuto. `new` costruisce il libro.")
      },
      {
        id: "p4", type: "bug",
        q: T("After `new Player(\"Ada\")` the name is still `null`. Click the wrong line.", "Después de `new Player(\"Ada\")` el nombre sigue siendo `null`. Haz clic en la línea equivocada.", "Dopo `new Player(\"Ada\")` il nome è ancora `null`. Clicca la riga sbagliata."),
        code: "class Player {\n    String name;\n    int score;\n\n    Player(String name) {\n        name = name;\n        score = 0;\n    }\n}",
        line: 6,
        hint: T("There are two things called `name` here. Which one does `name` alone mean?", "Aquí hay dos cosas llamadas `name`. ¿Cuál es `name` solo?", "Qui ci sono due cose che si chiamano `name`. Quale è `name` da solo?"),
        explain: T("`name = name` copies the value into itself. The fix is `this.name = name;`.", "`name = name` copia el valor en sí mismo. La solución es `this.name = name;`.", "`name = name` copia il valore su se stesso. La correzione è `this.name = name;`.")
      },
      {
        id: "p5", type: "trace",
        q: T("Follow the arrows. How much is each one worth when the program ends? Write the values in the boxes.", "Sigue las flechas. ¿Cuánto vale cada uno cuando termina el programa? Escribe los valores en las casillas.", "Segui le frecce. Quanto vale ognuno quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "class Counter {\n    int count;\n    void add() { count = count + 1; }\n}\n\nCounter c = new Counter();\nc.add();\nc.add();\nCounter d = c;\nd.add();",
        rows: [
          { label: "`c.count`", answer: "3" },
          { label: "`d.count`", answer: "3" },
          { label: T("How many counters exist?", "¿Cuántos contadores hay?", "Quanti contatori esistono?"), answer: "1" }
        ],
        hint: T("`d = c` does not build a new counter.", "`d = c` no construye un contador nuevo.", "`d = c` non costruisce un nuovo contatore."),
        explain: T("Only one `new`, so one counter. `add()` ran three times on it.", "Solo un `new`, así que un contador. `add()` se ejecutó tres veces sobre él.", "Un solo `new`, quindi un contatore. `add()` è stato eseguito tre volte su di lui.")
      },
      {
        id: "p6", type: "match",
        q: T("Match each description with the right word.", "Une cada descripción con la palabra correcta.", "Abbina ogni descrizione alla parola giusta."),
        options: ["class", "object", "field", "method", "constructor"],
        items: [
          { left: T("Something an object **does**", "Algo que un objeto **hace**", "Qualcosa che un oggetto **fa**"), answer: "method" },
          { left: T("Something an object **knows**", "Algo que un objeto **sabe**", "Qualcosa che un oggetto **sa**"), answer: "field" },
          { left: T("The blueprint", "El plano", "Il progetto"), answer: "class" },
          { left: T("The thing built with `new`", "Lo que se construye con `new`", "La cosa costruita con `new`"), answer: "object" },
          { left: T("Runs by itself when the object is built", "Se ejecuta solo al construir el objeto", "Parte da solo quando l'oggetto viene costruito"), answer: "constructor" }
        ],
        explain: T("Class = plan, object = thing, field = data, method = action, constructor = setup.", "Clase = plano, objeto = cosa, atributo = dato, método = acción, constructor = preparación.", "Classe = progetto, oggetto = cosa, attributo = dato, metodo = azione, costruttore = preparazione.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("Arrows on the move! What does this print? (Same `Dog` class.)", "¡Flechas en movimiento! ¿Qué imprime? (La misma clase `Dog`.)", "Frecce in movimento! Cosa stampa? (Stessa classe `Dog`.)"),
        code: "Dog a = new Dog(\"Rex\", 3);\nDog b = new Dog(\"Luna\", 5);\nDog c = a;\nc.name = \"Max\";\na = b;\nSystem.out.println(a.name);\nSystem.out.println(c.name);",
        answer: "Luna\nMax",
        hint: T("Draw two boxes for the two dogs, then move the arrows line by line.", "Dibuja dos cajas para los dos perros y mueve las flechas línea a línea.", "Disegna due scatole per i due cani e sposta le frecce riga per riga."),
        explain: T("`c` and `a` start on Rex, who becomes Max. Then `a` moves to Luna. Max stays with `c`.", "`c` y `a` empiezan en Rex, que pasa a llamarse Max. Luego `a` pasa a Luna. Max se queda con `c`.", "`c` e `a` partono da Rex, che diventa Max. Poi `a` passa a Luna. Max resta con `c`.")
      },
      {
        id: "c2", type: "fill",
        q: T("Finish the piggy bank. `take` must say no (false) if there isn't enough money.", "Termina la hucha. `take` debe decir que no (false) si no hay suficiente dinero.", "Completa il salvadanaio. `take` deve dire di no (false) se non ci sono abbastanza soldi."),
        code: "class PiggyBank {\n    int coins;\n\n    void add(int n) {\n        coins = coins [[+]] n;\n    }\n\n    [[boolean]] take(int n) {\n        if (n > coins) {\n            return [[false]];\n        }\n        coins = coins - n;\n        return true;\n    }\n}",
        hint: T("`take` answers yes or no. Which type holds true/false?", "`take` responde sí o no. ¿Qué tipo guarda true/false?", "`take` risponde sì o no. Quale tipo contiene true/false?"),
        explain: T("Adding coins uses `+`. A yes/no answer is a `boolean`, and it's `false` when there isn't enough.", "Añadir monedas usa `+`. Una respuesta sí/no es un `boolean`, y es `false` cuando no hay suficiente.", "Aggiungere monete usa `+`. Una risposta sì/no è un `boolean`, ed è `false` quando non bastano.")
      },
      {
        id: "c3", type: "order",
        q: T("Write a program that prints `Luna says Woof!` then `21`. Two pieces are traps.", "Escribe un programa que imprima `Luna says Woof!` y luego `21`. Dos piezas son trampas.", "Scrivi un programma che stampi `Luna says Woof!` e poi `21`. Due pezzi sono trappole."),
        lines: ["Dog luna = new Dog(\"Luna\", 3);", "luna.bark();", "System.out.println(luna.humanYears());"],
        extra: ["Dog luna = Dog(\"Luna\", 3);", "System.out.println(Dog.humanYears());"],
        explain: T("You need `new` to build the dog, and you ask the dog (`luna`), not the class (`Dog`).", "Hace falta `new` para construir el perro, y se lo pides al perro (`luna`), no a la clase (`Dog`).", "Serve `new` per costruire il cane, e lo chiedi al cane (`luna`), non alla classe (`Dog`).")
      }
    ]
  });
})();
