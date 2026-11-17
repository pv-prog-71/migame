/* INVENTOR · mission 5: Interfaces */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var obj = function (id, cls) { return { id: id, cls: cls, fields: {} }; };

  MG.module({
    id: "inv-interfaces",
    title: T("Interfaces", "Interfaces", "Interfacce"),
    summary: T(
      "An interface is a promise: \"whoever signs here knows how to do these things\". Very different classes can keep the same promise.",
      "Una interfaz es una promesa: \"quien firme aquí sabe hacer estas cosas\". Clases muy distintas pueden cumplir la misma promesa.",
      "Un'interfaccia è una promessa: \"chi firma qui sa fare queste cose\". Classi molto diverse possono mantenere la stessa promessa."
    ),

    learn: [
      {
        title: T("A promise without the how", "Una promesa sin el cómo", "Una promessa senza il come"),
        text: T(
          "An **interface** lists methods **without** writing what they do: only their name and parameters. A class that says `implements Playable` promises to write all of them.",
          "Una **interfaz** enumera métodos **sin** escribir lo que hacen: solo su nombre y sus parámetros. Una clase que dice `implements Playable` promete escribirlos todos.",
          "Un'**interfaccia** elenca dei metodi **senza** scrivere cosa fanno: solo il nome e i parametri. Una classe che dice `implements Playable` promette di scriverli tutti."
        ),
        code: "interface Playable {\n    void play();\n}\n\nclass Guitar implements Playable {\n    public void play() {\n        System.out.println(\"Strum\");\n    }\n}\n\nclass Drum implements Playable {\n    public void play() {\n        System.out.println(\"Boom\");\n    }\n}",
        viz: { type: "tree", nodes: [{ name: "«interface» Playable", members: ["play()"] }, { name: "Guitar", parent: "«interface» Playable", members: ["^play() → \"Strum\""] }, { name: "Drum", parent: "«interface» Playable", members: ["^play() → \"Boom\""] }] },
        after: T(
          "A guitar and a drum have nothing in common, but both can be **played**. That's what the interface says.",
          "Una guitarra y un tambor no tienen nada en común, pero los dos se pueden **tocar**. Eso es lo que dice la interfaz.",
          "Una chitarra e un tamburo non hanno niente in comune, ma tutti e due si possono **suonare**. È questo che dice l'interfaccia."
        )
      },
      {
        title: T("The interface as a type", "La interfaz como tipo", "L'interfaccia come tipo"),
        text: T(
          "A variable of type `Playable` can point to **any** object that keeps the promise. Calling `play()` runs the version of the real object.",
          "Una variable de tipo `Playable` puede apuntar a **cualquier** objeto que cumpla la promesa. Llamar a `play()` ejecuta la versión del objeto real.",
          "Una variabile di tipo `Playable` può indicare **qualsiasi** oggetto che mantiene la promessa. Chiamare `play()` esegue la versione dell'oggetto vero."
        ),
        code: "Playable p = new Guitar();\np.play();\np = new Drum();\np.play();",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("`p` points to a guitar.", "`p` apunta a una guitarra.", "`p` indica una chitarra."), frames: [main({ p: "@1" })], heap: [obj("@1", "Guitar")] },
            { line: 2, note: T("The real object is a Guitar: Strum.", "El objeto real es una Guitar: Strum.", "L'oggetto vero è una Guitar: Strum."), frames: [main({ p: "@1" })], heap: [obj("@1", "Guitar")], out: ["Strum"] },
            { line: 3, note: T("Same variable, now it points to a drum.", "La misma variable ahora apunta a un tambor.", "Stessa variabile, ora indica un tamburo."), frames: [main({ p: "@2" })], heap: [obj("@1", "Guitar"), obj("@2", "Drum")], out: ["Strum"] },
            { line: 4, note: T("Same line of code, different result: Boom.", "La misma línea de código, otro resultado: Boom.", "Stessa riga di codice, risultato diverso: Boom."), frames: [main({ p: "@2" })], heap: [obj("@1", "Guitar"), obj("@2", "Drum")], out: ["Strum", "Boom"] }
          ]
        }
      },
      {
        title: T("Many promises at once", "Muchas promesas a la vez", "Tante promesse insieme"),
        text: T(
          "A class can have only **one** parent with `extends`, but it can keep **many** promises: just separate the interfaces with a comma.",
          "Una clase solo puede tener **un** padre con `extends`, pero puede cumplir **muchas** promesas: basta separar las interfaces con una coma.",
          "Una classe può avere un solo genitore con `extends`, ma può mantenere **tante** promesse: basta separare le interfacce con una virgola."
        ),
        code: "interface Swimmer { void swim(); }\ninterface Flyer { void fly(); }\n\nclass Duck implements Swimmer, Flyer {\n    public void swim() { System.out.println(\"Paddle\"); }\n    public void fly() { System.out.println(\"Flap\"); }\n}",
        after: T(
          "A duck can be used wherever a Swimmer is needed **and** wherever a Flyer is needed.",
          "Un pato se puede usar donde haga falta un Swimmer **y** donde haga falta un Flyer.",
          "Un'anatra si può usare dove serve uno Swimmer **e** dove serve un Flyer."
        )
      },
      {
        title: T("A promise must be kept", "Una promesa hay que cumplirla", "Una promessa va mantenuta"),
        text: T(
          "If a class says `implements` but forgets a method, Java refuses it before the program starts. You also can't build an object of an interface: it's only a promise, not a thing.",
          "Si una clase dice `implements` pero se olvida de un método, Java la rechaza antes de que empiece el programa. Tampoco se puede construir un objeto de una interfaz: es solo una promesa, no una cosa.",
          "Se una classe dice `implements` ma dimentica un metodo, Java la rifiuta prima che il programma parta. E non si può costruire un oggetto di un'interfaccia: è solo una promessa, non una cosa."
        ),
        code: "class Piano implements Playable {\n}                                  // ERROR: play() is missing\n\nPlayable x = new Playable();       // ERROR: it's only a promise",
        after: T(
          "Interfaces are everywhere in big programs: they let people write pieces that fit together, even without knowing each other's code.",
          "Las interfaces están por todas partes en los programas grandes: permiten escribir piezas que encajan, aunque no se conozca el código de los demás.",
          "Le interfacce sono ovunque nei programmi grandi: permettono di scrivere pezzi che si incastrano, anche senza conoscere il codice degli altri."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What does an interface contain?", "¿Qué contiene una interfaz?", "Cosa contiene un'interfaccia?"),
        options: [
          T("Method names and parameters, without the body", "Nombres de métodos y parámetros, sin el cuerpo", "Nomi dei metodi e parametri, senza il corpo"),
          T("Fields with their values", "Atributos con sus valores", "Attributi con i loro valori"),
          T("A main program", "Un programa principal", "Un programma principale")
        ],
        answer: 0,
        explain: T("It says **what** must be done, not **how**.", "Dice **qué** hay que hacer, no **cómo**.", "Dice **cosa** bisogna fare, non **come**.")
      },
      {
        id: "q2", type: "choice",
        q: T("Which word does a class use to keep an interface's promise?", "¿Qué palabra usa una clase para cumplir la promesa de una interfaz?", "Quale parola usa una classe per mantenere la promessa di un'interfaccia?"),
        options: ["`implements`", "`extends`", "`new`"],
        answer: 0,
        explain: T("`extends` is for a parent class, `implements` for interfaces.", "`extends` es para una clase padre, `implements` para interfaces.", "`extends` è per una classe genitore, `implements` per le interfacce.")
      },
      {
        id: "q3", type: "choice",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "Playable p = new Drum();\np.play();",
        options: ["Strum", "Boom", T("an error", "un error", "un errore")],
        answer: 1,
        explain: T("The variable is Playable, but the real object is a Drum.", "La variable es Playable, pero el objeto real es un Drum.", "La variabile è Playable, ma l'oggetto vero è un Drum.")
      },
      {
        id: "q4", type: "choice",
        q: T("How many interfaces can a class implement?", "¿Cuántas interfaces puede implementar una clase?", "Quante interfacce può implementare una classe?"),
        options: [T("As many as it wants", "Las que quiera", "Quante ne vuole"), T("Only one", "Solo una", "Solo una"), T("None", "Ninguna", "Nessuna")],
        answer: 0,
        explain: T("Only one parent with extends, but many interfaces, separated by commas.", "Solo un padre con extends, pero muchas interfaces, separadas por comas.", "Un solo genitore con extends, ma tante interfacce, separate da virgole.")
      },
      {
        id: "q5", type: "choice",
        q: T("Which line is refused?", "¿Qué línea se rechaza?", "Quale riga viene rifiutata?"),
        options: ["`Playable p = new Guitar();`", "`Playable p = new Playable();`", "`Guitar g = new Guitar();`"],
        answer: 1,
        explain: T("You can't build an object of an interface: it's only a promise.", "No se puede construir un objeto de una interfaz: es solo una promesa.", "Non si può costruire un oggetto di un'interfaccia: è solo una promessa.")
      }
    ],

    practice: [
      {
        id: "p1", type: "fill",
        q: T("Complete the class so it keeps the promise of `Light`.", "Completa la clase para que cumpla la promesa de `Light`.", "Completa la classe in modo che mantenga la promessa di `Light`."),
        code: "interface Light {\n    void turnOn();\n}\n\nclass Lamp [[implements]] Light {\n    public void [[turnOn]]() {\n        System.out.println(\"Click\");\n    }\n}",
        hint: T("Which word keeps an interface's promise? Which method does the interface ask for?", "¿Qué palabra cumple la promesa de una interfaz? ¿Qué método pide la interfaz?", "Quale parola mantiene la promessa di un'interfaccia? Quale metodo chiede l'interfaccia?"),
        explain: T("`implements Light`, then the method with exactly the same name: `turnOn()`.", "`implements Light`, y luego el método con exactamente el mismo nombre: `turnOn()`.", "`implements Light`, poi il metodo con esattamente lo stesso nome: `turnOn()`.")
      },
      {
        id: "p2", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "interface Pet { String sound(); }\nclass Dog implements Pet { public String sound() { return \"Woof\"; } }\nclass Cat implements Pet { public String sound() { return \"Meow\"; } }\n\nPet a = new Cat();\nPet b = new Dog();\nSystem.out.println(a.sound() + \" \" + b.sound());",
        answer: "Meow Woof",
        hint: T("Look at the real object behind each variable.", "Mira el objeto real que hay detrás de cada variable.", "Guarda l'oggetto vero dietro ogni variabile."),
        explain: T("a is a Cat, b is a Dog, glued with a space in between.", "a es un Cat, b es un Dog, pegados con un espacio en medio.", "a è un Cat, b è un Dog, incollati con uno spazio in mezzo.")
      },
      {
        id: "p3", type: "bug",
        q: T("Java refuses this class. Click the line where the problem is.", "Java rechaza esta clase. Haz clic en la línea donde está el problema.", "Java rifiuta questa classe. Clicca la riga dove c'è il problema."),
        code: "interface Shape {\n    int area();\n    int sides();\n}\n\nclass Square implements Shape {\n    public int area() { return 4; }\n}",
        line: 6,
        hint: T("Count the methods the interface asks for, and the ones the class writes.", "Cuenta los métodos que pide la interfaz y los que escribe la clase.", "Conta i metodi che chiede l'interfaccia e quelli che scrive la classe."),
        explain: T("Square promises to be a Shape but doesn't write `sides()`. The fix is to add `public int sides() { return 4; }`.", "Square promete ser una Shape pero no escribe `sides()`. La solución es añadir `public int sides() { return 4; }`.", "Square promette di essere una Shape ma non scrive `sides()`. La correzione è aggiungere `public int sides() { return 4; }`.")
      },
      {
        id: "p4", type: "match",
        q: T("extends or implements?", "¿extends o implements?", "extends o implements?"),
        options: ["extends", "implements"],
        items: [
          { left: T("Dog takes everything from Animal", "Dog hereda todo de Animal", "Dog prende tutto da Animal"), answer: "extends" },
          { left: T("Guitar keeps the promise of Playable", "Guitar cumple la promesa de Playable", "Guitar mantiene la promessa di Playable"), answer: "implements" },
          { left: T("Duck is both a Swimmer and a Flyer", "Duck es Swimmer y Flyer a la vez", "Duck è sia Swimmer sia Flyer"), answer: "implements" },
          { left: T("Only one is allowed per class", "Solo se permite uno por clase", "Se ne può avere uno solo per classe"), answer: "extends" }
        ],
        explain: T("One parent with extends; as many interfaces as you want with implements.", "Un padre con extends; tantas interfaces como quieras con implements.", "Un genitore con extends; quante interfacce vuoi con implements.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("A list of different things that keep the same promise. What does this print?", "Una lista de cosas distintas que cumplen la misma promesa. ¿Qué imprime esto?", "Una lista di cose diverse che mantengono la stessa promessa. Cosa stampa questo?"),
        code: "interface Scorer { int points(); }\nclass Coin implements Scorer { public int points() { return 1; } }\nclass Gem implements Scorer { public int points() { return 10; } }\n\nScorer[] bag = { new Coin(), new Gem(), new Coin() };\nint total = 0;\nfor (int i = 0; i < bag.length; i++) {\n    total = total + bag[i].points();\n}\nSystem.out.println(total);",
        answer: "12",
        hint: T("Go through the bag one item at a time: what does each `points()` give back?", "Recorre la bolsa objeto por objeto: ¿qué devuelve cada `points()`?", "Passa la borsa un oggetto alla volta: cosa restituisce ogni `points()`?"),
        explain: T("Coin 1 + Gem 10 + Coin 1 = 12. The loop doesn't need to know what each object is: it only knows they're all Scorers.", "Coin 1 + Gem 10 + Coin 1 = 12. El bucle no necesita saber qué es cada objeto: solo sabe que todos son Scorer.", "Coin 1 + Gem 10 + Coin 1 = 12. Il ciclo non ha bisogno di sapere cos'è ogni oggetto: sa solo che sono tutti Scorer.")
      },
      {
        id: "c2", type: "fill",
        q: T("Make Robot keep **two** promises. The last lines must work.", "Haz que Robot cumpla **dos** promesas. Las últimas líneas tienen que funcionar.", "Fai in modo che Robot mantenga **due** promesse. Le ultime righe devono funzionare."),
        code: "interface Walker { void walk(); }\ninterface Talker { void talk(); }\n\nclass Robot implements Walker[[,]] [[Talker]] {\n    public void walk() { System.out.println(\"Step\"); }\n    public void [[talk]]() { System.out.println(\"Beep\"); }\n}\n\nWalker w = new Robot();\nTalker t = new Robot();",
        hint: T("Interfaces are separated by a comma, and every promised method must be written.", "Las interfaces se separan con una coma, y hay que escribir todos los métodos prometidos.", "Le interfacce si separano con una virgola, e ogni metodo promesso va scritto."),
        explain: T("`implements Walker, Talker` and both methods, `walk()` and `talk()`.", "`implements Walker, Talker` y los dos métodos, `walk()` y `talk()`.", "`implements Walker, Talker` e tutti e due i metodi, `walk()` e `talk()`.")
      }
    ]
  });
})();
