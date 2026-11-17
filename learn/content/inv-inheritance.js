/* INVENTOR · mission 2: Inheritance */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var ANIMALS = {
    nodes: [
      { name: "Animal", members: ["speak() → \"...\""] },
      { name: "Dog", parent: "Animal", members: ["^speak() → \"Woof\""] },
      { name: "Cat", parent: "Animal", members: ["^speak() → \"Meow\""] },
      { name: "Fish", parent: "Animal", members: [] }
    ]
  };

  MG.module({
    id: "inv-inheritance",
    title: T("Inheritance", "Herencia", "Ereditarietà"),
    summary: T(
      "Build new classes on top of old ones: extends, super and overriding.",
      "Construye clases nuevas encima de otras: extends, super y sobrescritura.",
      "Costruisci classi nuove sopra quelle vecchie: extends, super e override."
    ),
    badge: { glyph: "tree", name: T("Family tree", "Árbol genealógico", "Albero genealogico") },

    learn: [
      {
        title: T("A Dog is an Animal", "Un perro es un animal", "Un cane è un animale"),
        text: T(
          "Dogs and cats are different, but both are animals: both have a name and both eat. Instead of writing that twice, we put it in `Animal`, and `Dog` and `Cat` **inherit** it with `extends`.\n\nRead `class Dog extends Animal` as: *a Dog **is an** Animal*.",
          "Perros y gatos son distintos, pero los dos son animales: los dos tienen nombre y los dos comen. En vez de escribirlo dos veces, lo ponemos en `Animal`, y `Dog` y `Cat` lo **heredan** con `extends`.\n\nLee `class Dog extends Animal` como: *un Dog **es un** Animal*.",
          "Cani e gatti sono diversi, ma sono entrambi animali: hanno un nome e mangiano. Invece di scriverlo due volte, lo mettiamo in `Animal`, e `Dog` e `Cat` lo **ereditano** con `extends`.\n\nLeggi `class Dog extends Animal` così: *un Dog **è un** Animal*."
        ),
        code: "class Animal {\n    String name;\n    void eat() { System.out.println(name + \" is eating\"); }\n}\n\nclass Dog extends Animal {\n    void fetch() { System.out.println(name + \" fetches the ball\"); }\n}\n\nclass Cat extends Animal {\n    void climb() { System.out.println(name + \" climbs a tree\"); }\n}",
        viz: { type: "tree", nodes: [{ name: "Animal", members: ["name", "eat()"] }, { name: "Dog", parent: "Animal", members: ["fetch()"] }, { name: "Cat", parent: "Animal", members: ["climb()"] }] },
        after: T(
          "A `Dog` has `name`, `eat()` **and** `fetch()`. A `Cat` has `name`, `eat()` and `climb()`. Children get everything from the parent and add their own extras.",
          "Un `Dog` tiene `name`, `eat()` **y** `fetch()`. Un `Cat` tiene `name`, `eat()` y `climb()`. Los hijos reciben todo del padre y añaden lo suyo.",
          "Un `Dog` ha `name`, `eat()` **e** `fetch()`. Un `Cat` ha `name`, `eat()` e `climb()`. I figli ricevono tutto dal genitore e aggiungono qualcosa di loro."
        )
      },
      {
        title: T("super(): the parent goes first", "super(): primero el padre", "super(): prima il genitore"),
        text: T(
          "When you build a `Dog`, its `Animal` part must be prepared too. The first line of the Dog's constructor calls the parent's constructor with `super(...)`.\n\nPress **Next line** and watch the order of the messages.",
          "Cuando construyes un `Dog`, también hay que preparar su parte de `Animal`. La primera línea del constructor de Dog llama al constructor del padre con `super(...)`.\n\nPulsa **Siguiente línea** y mira el orden de los mensajes.",
          "Quando costruisci un `Dog`, va preparata anche la sua parte di `Animal`. La prima riga del costruttore di Dog chiama il costruttore del genitore con `super(...)`.\n\nPremi **Riga successiva** e guarda l'ordine dei messaggi."
        ),
        code: "class Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n        System.out.println(\"Animal ready\");\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n        System.out.println(\"Dog ready\");\n    }\n}\n\nDog rex = new Dog(\"Rex\");",
        viz: {
          type: "memory",
          steps: [
            { line: 16, note: T("`new Dog(\"Rex\")` builds a dog and starts the Dog constructor.", "`new Dog(\"Rex\")` construye un perro y empieza el constructor de Dog.", "`new Dog(\"Rex\")` costruisce un cane e avvia il costruttore di Dog."), frames: [main()], heap: [{ id: "@1", cls: "Dog", fields: { name: "null" } }] },
            { line: 11, note: T("The first thing Dog does: `super(name)` asks Animal to prepare its part.", "Lo primero que hace Dog: `super(name)` pide a Animal que prepare su parte.", "La prima cosa che fa Dog: `super(name)` chiede ad Animal di preparare la sua parte."), frames: [main()], heap: [{ id: "@1", cls: "Dog", fields: { name: "null" } }] },
            { line: 4, note: T("Animal sets the name…", "Animal pone el nombre…", "Animal imposta il nome…"), frames: [main()], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }] },
            { line: 5, note: T("…and prints the first message.", "…e imprime el primer mensaje.", "…e stampa il primo messaggio."), frames: [main()], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }], out: ["Animal ready"] },
            { line: 12, note: T("Back in Dog, which finishes its own part.", "De vuelta en Dog, que termina su parte.", "Di nuovo in Dog, che finisce la sua parte."), frames: [main()], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }], out: ["Animal ready", "Dog ready"] },
            { line: 16, note: T("Done! Parent first, then child: like building the ground floor before the first floor.", "¡Listo! Primero el padre y luego el hijo: como construir la planta baja antes del primer piso.", "Fatto! Prima il genitore, poi il figlio: come costruire il piano terra prima del primo piano."), frames: [main({ rex: "@1" })], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }], out: ["Animal ready", "Dog ready"] }
          ]
        }
      },
      {
        title: T("Override: same method, new behaviour", "Sobrescribir: mismo método, otro comportamiento", "Override: stesso metodo, nuovo comportamento"),
        text: T(
          "Every animal can `speak()`, but each one sounds different. A child can **override** a method: write it again with the same name, and its version wins.\n\n`@Override` tells Java: *I'm replacing a parent method on purpose*.",
          "Todos los animales saben `speak()`, pero cada uno suena distinto. Un hijo puede **sobrescribir** un método: lo escribe otra vez con el mismo nombre, y gana su versión.\n\n`@Override` le dice a Java: *estoy reemplazando un método del padre a propósito*.",
          "Ogni animale sa fare `speak()`, ma ognuno ha un verso diverso. Un figlio può fare l'**override** di un metodo: lo riscrive con lo stesso nome, e vince la sua versione.\n\n`@Override` dice a Java: *sto sostituendo apposta un metodo del genitore*."
        ),
        code: "class Animal {\n    String speak() { return \"...\"; }\n}\n\nclass Dog extends Animal {\n    @Override\n    String speak() { return \"Woof\"; }\n}\n\nclass Cat extends Animal {\n    @Override\n    String speak() { return \"Meow\"; }\n}\n\nclass Fish extends Animal { }",
        viz: { type: "tree", nodes: ANIMALS.nodes },
        after: T(
          "`Fish` doesn't override anything, so a fish uses the parent's version and says `...`. We'll use these four classes in the exercises.",
          "`Fish` no sobrescribe nada, así que el pez usa la versión del padre y dice `...`. Usaremos estas cuatro clases en los ejercicios.",
          "`Fish` non fa override di niente, quindi il pesce usa la versione del genitore e dice `...`. Useremo queste quattro classi negli esercizi."
        )
      },
      {
        title: T("The object decides", "Decide el objeto", "Decide l'oggetto"),
        text: T(
          "A variable of type `Animal` can point to any animal, because a Dog **is an** Animal. When you call `speak()`, Java looks at the **object**, not at the variable.",
          "Una variable de tipo `Animal` puede apuntar a cualquier animal, porque un Dog **es un** Animal. Cuando llamas a `speak()`, Java mira el **objeto**, no la variable.",
          "Una variabile di tipo `Animal` può indicare qualsiasi animale, perché un Dog **è un** Animal. Quando chiami `speak()`, Java guarda l'**oggetto**, non la variabile."
        ),
        code: "Animal a = new Dog();\nSystem.out.println(a.speak());\na = new Cat();\nSystem.out.println(a.speak());",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("The variable is an `Animal`, but the object is a `Dog`.", "La variable es un `Animal`, pero el objeto es un `Dog`.", "La variabile è un `Animal`, ma l'oggetto è un `Dog`."), frames: [main({ a: "@1" })], heap: [{ id: "@1", cls: "Dog", fields: {} }] },
            { line: 2, note: T("Java follows the reference, finds a Dog, and runs the Dog's `speak()`.", "Java sigue la referencia, encuentra un Dog y ejecuta el `speak()` de Dog.", "Java segue il riferimento, trova un Dog e usa lo `speak()` di Dog."), frames: [main({ a: "@1" })], heap: [{ id: "@1", cls: "Dog", fields: {} }], out: ["Woof"] },
            { line: 3, note: T("Same variable, now pointing to a Cat.", "La misma variable, ahora apunta a un Cat.", "Stessa variabile, ora indica un Cat."), frames: [main({ a: "@2" })], heap: [{ id: "@2", cls: "Cat", fields: {} }], out: ["Woof"] },
            { line: 4, note: T("Same line of code, different object, different sound!", "¡La misma línea de código, otro objeto, otro sonido!", "Stessa riga di codice, oggetto diverso, verso diverso!"), frames: [main({ a: "@2" })], heap: [{ id: "@2", cls: "Cat", fields: {} }], out: ["Woof", "Meow"] }
          ]
        }
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What does `class Dog extends Animal` mean?", "¿Qué significa `class Dog extends Animal`?", "Cosa significa `class Dog extends Animal`?"),
        options: [
          T("A Dog is an Animal: it gets what Animal has", "Un Dog es un Animal: recibe lo que tiene Animal", "Un Dog è un Animal: riceve quello che ha Animal"),
          T("Animal gets what Dog has", "Animal recibe lo que tiene Dog", "Animal riceve quello che ha Dog"),
          T("Dog and Animal are the same class", "Dog y Animal son la misma clase", "Dog e Animal sono la stessa classe")
        ],
        answer: 0,
        explain: T("The child (`Dog`) inherits from the parent (`Animal`), never the other way round.", "El hijo (`Dog`) hereda del padre (`Animal`), nunca al revés.", "Il figlio (`Dog`) eredita dal genitore (`Animal`), mai il contrario.")
      },
      {
        id: "q2", type: "choice",
        q: T("Which word creates the family link between two classes?", "¿Qué palabra crea el lazo familiar entre dos clases?", "Quale parola crea il legame di famiglia tra due classi?"),
        options: ["`new`", "`extends`", "`return`"],
        answer: 1,
        explain: T("`extends` says who the parent is.", "`extends` dice quién es el padre.", "`extends` dice chi è il genitore.")
      },
      {
        id: "q3", type: "choice",
        q: T("Which one is a good use of inheritance?", "¿Cuál es un buen uso de la herencia?", "Quale è un buon uso dell'ereditarietà?"),
        options: [
          T("A Car **is a** Vehicle", "Un Coche **es un** Vehículo", "Un'Auto **è un** Veicolo"),
          T("A Wheel **is a** Car", "Una Rueda **es un** Coche", "Una Ruota **è un'**Auto"),
          T("A Car **is a** Road", "Un Coche **es una** Carretera", "Un'Auto **è una** Strada")
        ],
        answer: 0,
        explain: T("Inheritance is for “is a”. A wheel is *part of* a car, not a kind of car.", "La herencia es para “es un”. Una rueda es *parte de* un coche, no un tipo de coche.", "L'ereditarietà serve per “è un”. Una ruota è *parte di* un'auto, non un tipo di auto.")
      },
      {
        id: "q4", type: "choice",
        q: T("With Animal / Dog / Cat / Fish from the lesson, what does a fish say?", "Con Animal / Dog / Cat / Fish de la lección, ¿qué dice un pez?", "Con Animal / Dog / Cat / Fish della lezione, cosa dice un pesce?"),
        code: "Fish nemo = new Fish();\nSystem.out.println(nemo.speak());",
        options: ["`...`", "`Blub`", T("Nothing, there is an error", "Nada, hay un error", "Niente, c'è un errore")],
        answer: 0,
        explain: T("`Fish` doesn't override `speak()`, so it uses Animal's version.", "`Fish` no sobrescribe `speak()`, así que usa la versión de Animal.", "`Fish` non fa override di `speak()`, quindi usa la versione di Animal.")
      }
    ],

    practice: [
      {
        id: "p1", type: "match",
        q: T("Choose the parent of each class.", "Elige el padre de cada clase.", "Scegli il genitore di ogni classe."),
        options: ["Object", "Vehicle", "Car"],
        items: [
          { left: "`class Vehicle`", answer: "Object" },
          { left: "`class Car extends Vehicle`", answer: "Vehicle" },
          { left: "`class Bike extends Vehicle`", answer: "Vehicle" },
          { left: "`class ElectricCar extends Car`", answer: "Car" }
        ],
        hint: T("A class with no `extends` has a hidden parent: `Object`, the root of every family.", "Una clase sin `extends` tiene un padre escondido: `Object`, la raíz de todas las familias.", "Una classe senza `extends` ha un genitore nascosto: `Object`, la radice di tutte le famiglie."),
        explain: T("Here is the family tree:", "Este es el árbol genealógico:", "Ecco l'albero genealogico:"),
        tree: { nodes: [{ name: "Object" }, { name: "Vehicle", parent: "Object" }, { name: "Car", parent: "Vehicle" }, { name: "Bike", parent: "Vehicle" }, { name: "ElectricCar", parent: "Car" }] }
      },
      {
        id: "p2", type: "predict",
        q: T("With Animal / Dog / Cat / Fish, what does this print?", "Con Animal / Dog / Cat / Fish, ¿qué imprime esto?", "Con Animal / Dog / Cat / Fish, cosa stampa questo?"),
        code: "Animal x = new Cat();\nAnimal y = new Fish();\nDog z = new Dog();\nSystem.out.println(x.speak());\nSystem.out.println(y.speak());\nSystem.out.println(z.speak());",
        answer: "Meow\n...\nWoof",
        hint: T("Look at the object made by `new`, not at the type of the variable.", "Mira el objeto creado con `new`, no el tipo de la variable.", "Guarda l'oggetto creato con `new`, non il tipo della variabile."),
        explain: T("The object decides: the cat meows, the fish uses `...`, the dog woofs.", "Decide el objeto: el gato maúlla, el pez usa `...`, el perro ladra.", "Decide l'oggetto: il gatto miagola, il pesce usa `...`, il cane abbaia.")
      },
      {
        id: "p3", type: "fill",
        q: T("A bike is a vehicle with 2 wheels. Complete the code.", "Una bici es un vehículo con 2 ruedas. Completa el código.", "Una bici è un veicolo con 2 ruote. Completa il codice."),
        code: "class Vehicle {\n    int wheels;\n    Vehicle(int wheels) {\n        this.wheels = wheels;\n    }\n}\n\nclass Bike [[extends]] Vehicle {\n    Bike() {\n        [[super]](2);\n    }\n}",
        explain: T("`extends` makes the family link. `super(2)` passes 2 to Vehicle's constructor.", "`extends` crea el lazo familiar. `super(2)` pasa 2 al constructor de Vehicle.", "`extends` crea il legame di famiglia. `super(2)` passa 2 al costruttore di Vehicle.")
      },
      {
        id: "p4", type: "bug",
        q: T("Java complains about one line. Click it.", "Java protesta por una línea. Haz clic en ella.", "Java si lamenta di una riga. Cliccala."),
        code: "class Shape {\n    String name;\n    Shape(String name) {\n        this.name = name;\n    }\n}\n\nclass Square extends Shape {\n    int side;\n    Square(int side) {\n        this.side = side;\n        super(\"square\");\n    }\n}",
        line: 12,
        hint: T("Remember: the parent goes first.", "Recuerda: primero el padre.", "Ricorda: prima il genitore."),
        explain: T("`super(...)` must be the **first** line of the constructor. Swap lines 11 and 12.", "`super(...)` debe ser la **primera** línea del constructor. Cambia de sitio las líneas 11 y 12.", "`super(...)` deve essere la **prima** riga del costruttore. Scambia le righe 11 e 12.")
      },
      {
        id: "p5", type: "order",
        q: T("Write a `Cat` that overrides `speak()` to return `Meow`. Two pieces are traps.", "Escribe un `Cat` que sobrescriba `speak()` para devolver `Meow`. Dos piezas son trampas.", "Scrivi un `Cat` che faccia override di `speak()` restituendo `Meow`. Due pezzi sono trappole."),
        lines: ["class Cat extends Animal {", "    @Override", "    String speak() {", "        return \"Meow\";", "    }", "}"],
        extra: ["class Cat new Animal {", "    String speak();"],
        explain: T("Classes inherit with `extends`. A method that does something needs `{ }`, not a semicolon.", "Las clases heredan con `extends`. Un método que hace algo necesita `{ }`, no punto y coma.", "Le classi ereditano con `extends`. Un metodo che fa qualcosa ha bisogno di `{ }`, non del punto e virgola.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "predict",
        q: T("Three generations. What does `new C()` print?", "Tres generaciones. ¿Qué imprime `new C()`?", "Tre generazioni. Cosa stampa `new C()`?"),
        code: "class A {\n    A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n    B() {\n        super();\n        System.out.println(\"B\");\n    }\n}\nclass C extends B {\n    C() {\n        super();\n        System.out.println(\"C\");\n    }\n}\n\nnew C();",
        answer: "A\nB\nC",
        hint: T("Each constructor calls its parent *before* printing.", "Cada constructor llama a su padre *antes* de imprimir.", "Ogni costruttore chiama il genitore *prima* di stampare."),
        explain: T("C calls B, B calls A. A prints first, then B, then C. Grandparents first!", "C llama a B, B llama a A. A imprime primero, luego B, luego C. ¡Primero los abuelos!", "C chiama B, B chiama A. A stampa per primo, poi B, poi C. Prima i nonni!")
      },
      {
        id: "c2", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "class Robot {\n    String hello() { return \"Beep\"; }\n}\nclass FriendlyRobot extends Robot {\n    @Override\n    String hello() { return super.hello() + \", nice to meet you!\"; }\n}\n\nRobot r = new FriendlyRobot();\nSystem.out.println(r.hello());",
        answer: "Beep, nice to meet you!",
        hint: T("`super.hello()` runs the parent's version.", "`super.hello()` ejecuta la versión del padre.", "`super.hello()` usa la versione del genitore."),
        explain: T("The object is a FriendlyRobot, so its `hello()` runs: it takes the parent's \"Beep\" and adds its part.", "El objeto es un FriendlyRobot, así que se ejecuta su `hello()`: toma el \"Beep\" del padre y añade lo suyo.", "L'oggetto è un FriendlyRobot, quindi parte il suo `hello()`: prende il \"Beep\" del genitore e aggiunge la sua parte.")
      },
      {
        id: "c3", type: "match",
        q: T("Which `speak()` runs? (Animal / Dog / Cat / Fish.)", "¿Qué `speak()` se ejecuta? (Animal / Dog / Cat / Fish.)", "Quale `speak()` viene usato? (Animal / Dog / Cat / Fish.)"),
        options: [T("Animal's", "El de Animal", "Quello di Animal"), T("Dog's", "El de Dog", "Quello di Dog"), T("Cat's", "El de Cat", "Quello di Cat")],
        items: [
          { left: "`new Dog().speak()`", answer: T("Dog's", "El de Dog", "Quello di Dog") },
          { left: "`new Fish().speak()`", answer: T("Animal's", "El de Animal", "Quello di Animal") },
          { left: "`Animal a = new Cat(); a.speak()`", answer: T("Cat's", "El de Cat", "Quello di Cat") },
          { left: "`new Animal().speak()`", answer: T("Animal's", "El de Animal", "Quello di Animal") }
        ],
        explain: T("Java starts from the object's own class. If there's no override there, it climbs up the family tree.", "Java empieza por la clase del objeto. Si ahí no hay sobrescritura, sube por el árbol genealógico.", "Java parte dalla classe dell'oggetto. Se lì non c'è override, risale l'albero genealogico.")
      }
    ]
  });
})();
