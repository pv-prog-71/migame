/* INVENTOR · mission 6: Polymorphism (the last mission of the course) */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var o = function (id, cls, fields) { return { id: id, cls: cls, fields: fields || {} }; };
  var ZOO = [o("@1", "Animal[]", { "[0]": "@2", "[1]": "@3", "[2]": "@4" }), o("@2", "Dog"), o("@3", "Cat"), o("@4", "Dog")];
  var inside = function (fn, vars) { return { name: T("Inside " + fn, "Dentro de " + fn, "Dentro " + fn), vars: vars }; };

  MG.module({
    id: "inv-polymorphism",
    title: T("Polymorphism", "Polimorfismo", "Polimorfismo"),
    summary: T(
      "One line of code, many behaviours: each object answers in its own way. It's the big idea that holds everything together.",
      "Una línea de código, muchos comportamientos: cada objeto responde a su manera. Es la gran idea que lo une todo.",
      "Una riga di codice, tanti comportamenti: ogni oggetto risponde a modo suo. È la grande idea che tiene insieme tutto."
    ),

    learn: [
      {
        title: T("One loop, many animals", "Un bucle, muchos animales", "Un ciclo, tanti animali"),
        text: T(
          "Remember Animal, Dog and Cat from inheritance? A list of `Animal` can hold dogs and cats together. The loop calls the same `speak()`, and each animal answers in its own way.\n\n**Polymorphism** means \"many shapes\".",
          "¿Recuerdas Animal, Dog y Cat de la herencia? Una lista de `Animal` puede tener perros y gatos juntos. El bucle llama al mismo `speak()`, y cada animal responde a su manera.\n\n**Polimorfismo** significa \"muchas formas\".",
          "Ti ricordi Animal, Dog e Cat dell'ereditarietà? Una lista di `Animal` può contenere cani e gatti insieme. Il ciclo chiama lo stesso `speak()`, e ogni animale risponde a modo suo.\n\n**Polimorfismo** vuol dire \"tante forme\"."
        ),
        code: "Animal[] zoo = { new Dog(), new Cat(), new Dog() };\nfor (int i = 0; i < zoo.length; i++) {\n    System.out.println(zoo[i].speak());\n}",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A list of Animal. Inside: a dog, a cat, a dog.", "Una lista de Animal. Dentro: un perro, un gato, un perro.", "Una lista di Animal. Dentro: un cane, un gatto, un cane."), frames: [main({ zoo: "@1" })], heap: ZOO },
            { line: 3, note: T("i = 0 → a Dog: Woof.", "i = 0 → un Dog: Woof.", "i = 0 → un Dog: Woof."), frames: [main({ zoo: "@1", i: "0" })], heap: ZOO, out: ["Woof"] },
            { line: 3, note: T("i = 1 → a Cat: same line, different answer.", "i = 1 → un Cat: la misma línea, otra respuesta.", "i = 1 → un Cat: stessa riga, risposta diversa."), frames: [main({ zoo: "@1", i: "1" })], heap: ZOO, out: ["Woof", "Meow"] },
            { line: 3, note: T("i = 2 → a Dog again.", "i = 2 → otra vez un Dog.", "i = 2 → di nuovo un Dog."), frames: [main({ zoo: "@1", i: "2" })], heap: ZOO, out: ["Woof", "Meow", "Woof"] }
          ]
        }
      },
      {
        title: T("One method for every animal", "Un método para todos los animales", "Un metodo per tutti gli animali"),
        text: T(
          "A method that receives an `Animal` works with **every** kind of animal, even the ones that will be invented tomorrow. You write it once.",
          "Un método que recibe un `Animal` funciona con **todos** los tipos de animal, incluso con los que se inventen mañana. Lo escribes una sola vez.",
          "Un metodo che riceve un `Animal` funziona con **ogni** tipo di animale, anche con quelli che verranno inventati domani. Lo scrivi una volta sola."
        ),
        code: "void pet(Animal a) {\n    System.out.println(\"You pet it: \" + a.speak());\n}\n\npet(new Cat());\npet(new Dog());",
        viz: {
          type: "memory",
          steps: [
            { line: 5, note: T("`a` receives a cat.", "`a` recibe un gato.", "`a` riceve un gatto."), frames: [main(), inside("pet", { a: "@1" })], heap: [o("@1", "Cat")] },
            { line: 2, note: T("`a.speak()` asks the real object: Meow.", "`a.speak()` pregunta al objeto real: Meow.", "`a.speak()` chiede all'oggetto vero: Meow."), frames: [main(), inside("pet", { a: "@1" })], heap: [o("@1", "Cat")], out: ["You pet it: Meow"] },
            { line: 6, note: T("Now a dog. The method is the same.", "Ahora un perro. El método es el mismo.", "Ora un cane. Il metodo è lo stesso."), frames: [main(), inside("pet", { a: "@2" })], heap: [o("@1", "Cat"), o("@2", "Dog")], out: ["You pet it: Meow"] },
            { line: 2, note: T("Woof.", "Woof.", "Woof."), frames: [main(), inside("pet", { a: "@2" })], heap: [o("@1", "Cat"), o("@2", "Dog")], out: ["You pet it: Meow", "You pet it: Woof"] }
          ]
        }
      },
      {
        title: T("Abstract classes", "Clases abstractas", "Classi astratte"),
        text: T(
          "Sometimes the parent can't give a sensible answer: what is the area of a \"shape\"? With `abstract` the parent says: *every child must write this method*. Like an interface, but it can also have fields and normal methods.",
          "A veces el padre no puede dar una respuesta con sentido: ¿cuál es el área de una \"forma\"? Con `abstract` el padre dice: *cada hijo tiene que escribir este método*. Como una interfaz, pero además puede tener atributos y métodos normales.",
          "A volte il genitore non può dare una risposta sensata: qual è l'area di una \"forma\"? Con `abstract` il genitore dice: *ogni figlio deve scrivere questo metodo*. Come un'interfaccia, ma può avere anche attributi e metodi normali."
        ),
        code: "abstract class Shape {\n    abstract int area();\n    void describe() {\n        System.out.println(\"Area: \" + area());\n    }\n}\n\nclass Square extends Shape {\n    int side = 3;\n    int area() { return side * side; }\n}\n\nclass Rect extends Shape {\n    int w = 2, h = 5;\n    int area() { return w * h; }\n}",
        viz: { type: "tree", nodes: [{ name: "Shape", members: ["area() (abstract)", "describe()"] }, { name: "Square", parent: "Shape", members: ["side", "^area() → side × side"] }, { name: "Rect", parent: "Shape", members: ["w, h", "^area() → w × h"] }] },
        after: T(
          "`new Square().describe()` prints **Area: 9**, `new Rect().describe()` prints **Area: 10**. `describe` is written once in Shape, but calls the right `area()` every time. `new Shape()` is refused: it's abstract.",
          "`new Square().describe()` imprime **Area: 9**, `new Rect().describe()` imprime **Area: 10**. `describe` está escrito una vez en Shape, pero llama cada vez al `area()` correcto. `new Shape()` se rechaza: es abstracta.",
          "`new Square().describe()` stampa **Area: 9**, `new Rect().describe()` stampa **Area: 10**. `describe` è scritto una volta sola in Shape, ma chiama ogni volta l'`area()` giusta. `new Shape()` viene rifiutato: è astratta."
        )
      },
      {
        title: T("The variable decides what you can ask", "La variable decide qué puedes pedir", "La variabile decide cosa puoi chiedere"),
        text: T(
          "Two rules to remember:\n\n- **What you can call** depends on the type of the **variable**.\n- **Which version runs** depends on the real **object**.\n\nIf `Dog` has a `fetch()` method that `Animal` doesn't have, an `Animal` variable can't call it, even if the object is a dog.",
          "Dos reglas para recordar:\n\n- **Lo que puedes llamar** depende del tipo de la **variable**.\n- **Qué versión se ejecuta** depende del **objeto** real.\n\nSi `Dog` tiene un método `fetch()` que `Animal` no tiene, una variable `Animal` no puede llamarlo, aunque el objeto sea un perro.",
          "Due regole da ricordare:\n\n- **Cosa puoi chiamare** dipende dal tipo della **variabile**.\n- **Quale versione viene eseguita** dipende dall'**oggetto** vero.\n\nSe `Dog` ha un metodo `fetch()` che `Animal` non ha, una variabile `Animal` non lo può chiamare, anche se l'oggetto è un cane."
        ),
        code: "Animal a = new Dog();\nSystem.out.println(a.speak());   // OK: Woof\na.fetch();                       // ERROR: Animal has no fetch()\nDog d = new Dog();\nd.fetch();                       // OK",
        after: T(
          "You've reached the end of the course! Classes, inheritance, interfaces and polymorphism are the tools used to build real games and apps.",
          "¡Has llegado al final del curso! Clases, herencia, interfaces y polimorfismo son las herramientas con las que se construyen juegos y apps de verdad.",
          "Sei arrivato alla fine del percorso! Classi, ereditarietà, interfacce e polimorfismo sono gli strumenti con cui si costruiscono giochi e app veri."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What does \"polymorphism\" mean?", "¿Qué significa \"polimorfismo\"?", "Cosa vuol dire \"polimorfismo\"?"),
        options: [T("Many shapes", "Muchas formas", "Tante forme"), T("Many classes", "Muchas clases", "Tante classi"), T("Many errors", "Muchos errores", "Tanti errori")],
        answer: 0,
        explain: T("The same call takes a different shape depending on the object.", "La misma llamada toma una forma distinta según el objeto.", "La stessa chiamata prende una forma diversa a seconda dell'oggetto.")
      },
      {
        id: "q2", type: "choice",
        q: T("`Animal x = new Cat();` Which `speak()` runs?", "`Animal x = new Cat();` ¿Qué `speak()` se ejecuta?", "`Animal x = new Cat();` Quale `speak()` viene eseguito?"),
        options: [T("Cat's", "El de Cat", "Quello di Cat"), T("Animal's", "El de Animal", "Quello di Animal"), T("Both", "Los dos", "Tutti e due")],
        answer: 0,
        explain: T("The version is chosen by the real object: a Cat.", "La versión la elige el objeto real: un Cat.", "La versione la sceglie l'oggetto vero: un Cat.")
      },
      {
        id: "q3", type: "choice",
        q: T("With the shapes from the lesson, what does `new Rect().describe()` print?", "Con las formas de la lección, ¿qué imprime `new Rect().describe()`?", "Con le forme della lezione, cosa stampa `new Rect().describe()`?"),
        options: ["Area: 9", "Area: 10", "Area: 0"],
        answer: 1,
        explain: T("describe() calls the Rect version of area(): 2 × 5 = 10.", "describe() llama a la versión de Rect de area(): 2 × 5 = 10.", "describe() chiama la versione di Rect di area(): 2 × 5 = 10.")
      },
      {
        id: "q4", type: "choice",
        q: T("Which line is refused?", "¿Qué línea se rechaza?", "Quale riga viene rifiutata?"),
        options: ["`Shape s = new Square();`", "`Shape s = new Shape();`", "`Square q = new Square();`"],
        answer: 1,
        explain: T("Shape is abstract: you can't build one, only its children.", "Shape es abstracta: no se puede construir, solo sus hijos.", "Shape è astratta: non si può costruire, solo i suoi figli.")
      },
      {
        id: "q5", type: "choice",
        q: T("`Animal a = new Dog();` — why is `a.fetch()` refused, if `fetch()` only exists in Dog?", "`Animal a = new Dog();` — ¿por qué se rechaza `a.fetch()`, si `fetch()` solo existe en Dog?", "`Animal a = new Dog();` — perché `a.fetch()` viene rifiutato, se `fetch()` esiste solo in Dog?"),
        options: [
          T("Because the variable is an Animal, and Animal has no fetch()", "Porque la variable es un Animal, y Animal no tiene fetch()", "Perché la variabile è un Animal, e Animal non ha fetch()"),
          T("Because dogs can't fetch", "Porque los perros no saben traer cosas", "Perché i cani non sanno riportare"),
          T("Because the object is not a Dog", "Porque el objeto no es un Dog", "Perché l'oggetto non è un Dog")
        ],
        answer: 0,
        explain: T("What you can call depends on the variable's type.", "Lo que puedes llamar depende del tipo de la variable.", "Cosa puoi chiamare dipende dal tipo della variabile.")
      }
    ],

    practice: [
      {
        id: "p1", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "Animal[] pets = { new Cat(), new Cat(), new Dog() };\nfor (int i = 0; i < pets.length; i++) {\n    System.out.println(pets[i].speak());\n}",
        answer: "Meow\nMeow\nWoof",
        hint: T("One line of output for each animal, in the order of the list.", "Una línea de salida por cada animal, en el orden de la lista.", "Una riga di output per ogni animale, nell'ordine della lista."),
        explain: T("Cat, Cat, Dog: each one answers with its own speak().", "Cat, Cat, Dog: cada uno responde con su propio speak().", "Cat, Cat, Dog: ognuno risponde con il suo speak().")
      },
      {
        id: "p2", type: "bug",
        q: T("Java refuses this program. Click the wrong line.", "Java rechaza este programa. Haz clic en la línea equivocada.", "Java rifiuta questo programma. Clicca la riga sbagliata."),
        code: "class Animal { String speak() { return \"...\"; } }\nclass Dog extends Animal {\n    String speak() { return \"Woof\"; }\n    void fetch() { System.out.println(\"Got it!\"); }\n}\n\nAnimal rex = new Dog();\nSystem.out.println(rex.speak());\nrex.fetch();",
        line: 9,
        hint: T("Look at the type of the variable `rex`, not at the object.", "Mira el tipo de la variable `rex`, no el objeto.", "Guarda il tipo della variabile `rex`, non l'oggetto."),
        explain: T("rex is an Animal variable, and Animal has no fetch(). With `Dog rex = new Dog();` it would work.", "rex es una variable Animal, y Animal no tiene fetch(). Con `Dog rex = new Dog();` funcionaría.", "rex è una variabile Animal, e Animal non ha fetch(). Con `Dog rex = new Dog();` funzionerebbe.")
      },
      {
        id: "p3", type: "fill",
        q: T("Complete the abstract class and the child.", "Completa la clase abstracta y la hija.", "Completa la classe astratta e la figlia."),
        code: "[[abstract]] class Vehicle {\n    abstract int wheels();\n}\n\nclass Bike [[extends]] Vehicle {\n    int [[wheels]]() { return 2; }\n}",
        hint: T("The parent can't be built; the child takes everything from it and writes the missing method.", "El padre no se puede construir; el hijo lo hereda todo y escribe el método que falta.", "Il genitore non si può costruire; la figlia prende tutto da lui e scrive il metodo che manca."),
        explain: T("`abstract class Vehicle`, `Bike extends Vehicle`, and Bike writes `wheels()`.", "`abstract class Vehicle`, `Bike extends Vehicle`, y Bike escribe `wheels()`.", "`abstract class Vehicle`, `Bike extends Vehicle`, e Bike scrive `wheels()`.")
      },
      {
        id: "p4", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "abstract class Coin { abstract int value(); }\nclass Gold extends Coin { int value() { return 5; } }\nclass Silver extends Coin { int value() { return 2; } }\n\nCoin[] purse = { new Gold(), new Silver(), new Silver() };\nint total = 0;\nfor (int i = 0; i < purse.length; i++) {\n    total = total + purse[i].value();\n}\nint first = purse[0].value();",
        rows: [
          { label: "`total`", answer: "9" },
          { label: "`first`", answer: "5" }
        ],
        hint: T("Gold is worth 5, Silver 2.", "Gold vale 5, Silver 2.", "Gold vale 5, Silver 2."),
        explain: T("5 + 2 + 2 = 9. purse[0] is the Gold coin: 5.", "5 + 2 + 2 = 9. purse[0] es la moneda Gold: 5.", "5 + 2 + 2 = 9. purse[0] è la moneta Gold: 5.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("The final boss! A parent method that calls a child's version. What does this print?", "¡El jefe final! Un método del padre que llama a la versión del hijo. ¿Qué imprime esto?", "Il boss finale! Un metodo del genitore che chiama la versione del figlio. Cosa stampa questo?"),
        code: "abstract class Hero {\n    abstract String power();\n    String attack() {\n        return \"Uses \" + power();\n    }\n}\nclass Wizard extends Hero {\n    String power() { return \"magic\"; }\n}\nclass Knight extends Hero {\n    String power() { return \"sword\"; }\n    String attack() { return \"Charge!\"; }\n}\n\nHero[] team = { new Wizard(), new Knight() };\nfor (int i = 0; i < team.length; i++) {\n    System.out.println(team[i].attack());\n}",
        answer: "Uses magic\nCharge!",
        hint: T("Wizard uses the parent's attack(). Knight has its own attack().", "Wizard usa el attack() del padre. Knight tiene su propio attack().", "Wizard usa l'attack() del genitore. Knight ha il suo attack()."),
        explain: T("Wizard doesn't override attack(), so Hero's version runs and calls Wizard's power(): \"Uses magic\". Knight overrides attack(): \"Charge!\".", "Wizard no sobrescribe attack(), así que se ejecuta la versión de Hero, que llama al power() de Wizard: \"Uses magic\". Knight sobrescribe attack(): \"Charge!\".", "Wizard non sovrascrive attack(), quindi viene eseguita la versione di Hero, che chiama il power() di Wizard: \"Uses magic\". Knight sovrascrive attack(): \"Charge!\".")
      },
      {
        id: "c2", type: "match",
        q: T("You've seen it all. Match each idea with its name.", "Ya lo has visto todo. Une cada idea con su nombre.", "Hai visto tutto. Abbina ogni idea al suo nome."),
        options: [
          T("class", "clase", "classe"),
          T("inheritance", "herencia", "ereditarietà"),
          T("encapsulation", "encapsulamiento", "incapsulamento"),
          T("interface", "interfaz", "interfaccia"),
          T("polymorphism", "polimorfismo", "polimorfismo")
        ],
        items: [
          { left: T("The blueprint for building objects", "El plano para construir objetos", "Il progetto per costruire gli oggetti"), answer: T("class", "clase", "classe") },
          { left: T("A child takes everything from its parent", "Un hijo hereda todo de su padre", "Un figlio prende tutto dal genitore"), answer: T("inheritance", "herencia", "ereditarietà") },
          { left: T("Private data, controlled doors", "Datos privados, puertas controladas", "Dati privati, porte controllate"), answer: T("encapsulation", "encapsulamiento", "incapsulamento") },
          { left: T("A promise of methods to write", "Una promesa de métodos que escribir", "Una promessa di metodi da scrivere"), answer: T("interface", "interfaz", "interfaccia") },
          { left: T("Same call, each object answers its own way", "La misma llamada, cada objeto responde a su manera", "Stessa chiamata, ogni oggetto risponde a modo suo"), answer: T("polymorphism", "polimorfismo", "polimorfismo") }
        ],
        explain: T("These five ideas are the heart of object-oriented programming. Well done, Inventor!", "Estas cinco ideas son el corazón de la programación orientada a objetos. ¡Bien hecho, Inventor!", "Queste cinque idee sono il cuore della programmazione a oggetti. Bravo, Inventore!")
      }
    ]
  });
})();
