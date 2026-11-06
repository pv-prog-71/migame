/* MODULE: Classes & Objects (Inventor stage)
   Structure: learn (slides) → quiz → practice → challenge.
   Exercise types: choice, predict, order, fill, bug, trace, match. See README.md. */
MG.module({
  id: "inv-classes",
  title: { en: "Classes & objects", es: "Clases y objetos", it: "Classi e oggetti" },
  summary: {
    en: "A class is a blueprint, an object is the thing you build with it. Fields, constructors, methods and references.",
    es: "Una clase es un plano, un objeto es lo que construyes con él. Atributos, constructores, métodos y referencias.",
    it: "Una classe è un progetto, un oggetto è ciò che costruisci con esso. Attributi, costruttori, metodi e riferimenti."
  },
  badge: { glyph: "blueprint", name: { en: "Blueprint maker", es: "Creador de planos", it: "Creatore di progetti" } },

  learn: [
    {
      title: "A class is a blueprint",
      text: "Think of a cookie cutter. The cutter is not a cookie, but it decides the shape of every cookie you make.\n\nA **class** works the same way. It describes what every object of that kind *has* (its **fields**) and what it *can do* (its **methods**). This class says that every dog has a name and an age:",
      code: "class Dog {\n    String name;\n    int age;\n}",
      after: "Nothing exists yet. We only wrote the plan. Let's build some dogs."
    },
    {
      title: "Objects are built with new",
      text: "The keyword `new` takes the blueprint and builds a real object in memory. The variable doesn't hold the dog itself: it holds a **reference**, an arrow pointing to the object.\n\nPress **Next** and watch the memory change line by line.",
      code: "Dog rex = new Dog();\nrex.name = \"Rex\";\nrex.age = 3;\nDog luna = new Dog();\nluna.name = \"Luna\";\nSystem.out.println(rex.name + \" \" + luna.name);",
      viz: {
        type: "memory",
        steps: [
          { line: 1, note: "`new Dog()` builds an object. Fields start with default values: `null` for text, `0` for numbers. `rex` points to it.", frames: [{ name: "main", vars: { rex: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null", age: "0" } }] },
          { line: 2, note: "The dot means *inside*. `rex.name` is the name field inside the object `rex` points to.", frames: [{ name: "main", vars: { rex: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "0" } }] },
          { line: 3, note: "Same object, another field.", frames: [{ name: "main", vars: { rex: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }] },
          { line: 4, note: "A second `new` builds a second, separate object from the same blueprint.", frames: [{ name: "main", vars: { rex: "@1", luna: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }, { id: "@2", cls: "Dog", fields: { name: "null", age: "0" } }] },
          { line: 5, note: "Changing Luna doesn't touch Rex. Each object has its own fields.", frames: [{ name: "main", vars: { rex: "@1", luna: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }, { id: "@2", cls: "Dog", fields: { name: "\"Luna\"", age: "0" } }] },
          { line: 6, note: "Reading fields from both objects.", frames: [{ name: "main", vars: { rex: "@1", luna: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }, { id: "@2", cls: "Dog", fields: { name: "\"Luna\"", age: "0" } }], out: ["Rex Luna"] }
        ]
      }
    },
    {
      title: "Constructors set things up",
      text: "Filling every field by hand is boring and easy to forget. A **constructor** is a special method that runs automatically when you write `new`. It has the same name as the class and no return type.\n\nInside it, `this` means *the object being built*. `this.name` is the field; `name` alone is the parameter.",
      code: "class Dog {\n    String name;\n    int age;\n\n    Dog(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nDog rex = new Dog(\"Rex\", 3);",
      viz: {
        type: "memory",
        steps: [
          { line: 11, note: "`new` first makes an empty object…", frames: [{ name: "main", vars: {} }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null", age: "0" } }] },
          { line: 5, note: "…then calls the constructor. It gets its own box of variables: the parameters, plus `this` pointing to the new object.", frames: [{ name: "main", vars: {} }, { name: "Dog(name, age)", vars: { "this": "@1", name: "\"Rex\"", age: "3" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null", age: "0" } }] },
          { line: 6, note: "`this.name = name` copies the parameter into the object's field.", frames: [{ name: "main", vars: {} }, { name: "Dog(name, age)", vars: { "this": "@1", name: "\"Rex\"", age: "3" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "0" } }] },
          { line: 7, note: "Same for the age.", frames: [{ name: "main", vars: {} }, { name: "Dog(name, age)", vars: { "this": "@1", name: "\"Rex\"", age: "3" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }] },
          { line: 11, note: "The constructor ends and its box disappears. The object stays, and `rex` points to it.", frames: [{ name: "main", vars: { rex: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }] }
        ]
      }
    },
    {
      title: "Methods: what an object can do",
      text: "Fields are what an object **knows**. Methods are what it **does**. A method can read the object's own fields directly.",
      code: "class Dog {\n    String name;\n    int age;\n\n    Dog(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    void bark() {\n        System.out.println(name + \" says Woof!\");\n    }\n\n    int humanYears() {\n        return age * 7;\n    }\n}",
      after: "`void` means the method gives nothing back; it just does something. `int` means it returns a whole number.\n\nWith `Dog rex = new Dog(\"Rex\", 3);` then `rex.bark()` prints **Rex says Woof!** and `rex.humanYears()` gives back **21**. We'll use this `Dog` class in the exercises."
    },
    {
      title: "Two variables, one object",
      text: "This is the trickiest idea in the module, and the most useful. Copying a variable copies the **arrow**, not the object. Watch what happens to `a` when we change `b`.",
      code: "Dog a = new Dog(\"Rex\", 3);\nDog b = a;\nb.age = 4;\nSystem.out.println(a.age);\nDog c = new Dog(\"Rex\", 4);\nSystem.out.println(a == b);\nSystem.out.println(a == c);",
      viz: {
        type: "memory",
        steps: [
          { line: 1, note: "One object, one arrow.", frames: [{ name: "main", vars: { a: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }] },
          { line: 2, note: "`b = a` copies the arrow. Now two variables point to the **same** dog.", frames: [{ name: "main", vars: { a: "@1", b: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } }] },
          { line: 3, note: "Changing the dog through `b`…", frames: [{ name: "main", vars: { a: "@1", b: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }] },
          { line: 4, note: "…is visible through `a`, because it's the same dog.", frames: [{ name: "main", vars: { a: "@1", b: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }], out: ["4"] },
          { line: 5, note: "A new object that looks identical, but is a different object.", frames: [{ name: "main", vars: { a: "@1", b: "@1", c: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }, { id: "@2", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }], out: ["4"] },
          { line: 6, note: "`==` on objects asks: *do both arrows point to the same object?* Yes.", frames: [{ name: "main", vars: { a: "@1", b: "@1", c: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }, { id: "@2", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }], out: ["4", "true"] },
          { line: 7, note: "Same data, different objects, so `false`.", frames: [{ name: "main", vars: { a: "@1", b: "@1", c: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }, { id: "@2", cls: "Dog", fields: { name: "\"Rex\"", age: "4" } }], out: ["4", "true", "false"] }
        ]
      }
    }
  ],

  quiz: [
    {
      id: "q1", type: "choice",
      q: "What is a **class**?",
      options: ["A blueprint that describes what its objects have and do", "One specific object, like Rex", "A variable that stores a number"],
      answer: 0,
      explain: "A class is the plan. Objects are the things built from it with `new`."
    },
    {
      id: "q2", type: "choice",
      q: "Which keyword builds a new object?",
      options: ["`class`", "`new`", "`this`", "`return`"],
      answer: 1,
      explain: "`new Dog(...)` builds an object and runs its constructor."
    },
    {
      id: "q3", type: "choice",
      q: "The class `Dog` has a field `int age;` and no constructor. What is printed?",
      code: "Dog d = new Dog();\nSystem.out.println(d.age);",
      options: ["`0`", "`null`", "An error"],
      answer: 0,
      explain: "Number fields start at `0`. Text fields (and other objects) start at `null`."
    },
    {
      id: "q4", type: "choice",
      q: "Inside a constructor, what does `this` mean?",
      options: ["The class itself", "The object that is being built", "The previous object created"],
      answer: 1,
      explain: "`this` always refers to the current object: the one whose constructor or method is running."
    },
    {
      id: "q5", type: "choice",
      q: "What is printed?",
      code: "Dog a = new Dog(\"Rex\", 3);\nDog b = a;\nb.name = \"Max\";\nSystem.out.println(a.name);",
      options: ["Rex", "Max", "null"],
      answer: 1,
      explain: "`b = a` copies the arrow, so both variables point to the same dog. Renaming it through `b` renames it for `a` too."
    }
  ],

  practice: [
    {
      id: "p1", type: "predict",
      q: "Using the `Dog` class from the lesson, what does this print?",
      code: "Dog rex = new Dog(\"Rex\", 2);\nrex.bark();\nSystem.out.println(rex.humanYears());",
      answer: "Rex says Woof!\n14",
      hint: "`bark()` prints the name followed by \" says Woof!\". `humanYears()` returns age × 7.",
      explain: "First `bark()` prints a line, then `humanYears()` returns 2 × 7 = 14, which `println` prints."
    },
    {
      id: "p2", type: "order",
      q: "Build a `Cat` class with a `name` field and a constructor that sets it. Put the field first.",
      lines: ["class Cat {", "    String name;", "    Cat(String name) {", "        this.name = name;", "    }", "}"],
      extra: ["    void Cat(String name) {"],
      hint: "A constructor has **no** return type, not even `void`.",
      explain: "With `void`, Java would treat `Cat` as a normal method, not a constructor. Constructors only have the class name."
    },
    {
      id: "p3", type: "fill",
      q: "Complete the constructor and create a book.",
      code: "class Book {\n    String title;\n    int pages;\n\n    Book(String title, int pages) {\n        [[this]].title = title;\n        this.[[pages]] = pages;\n    }\n}\n\nBook b = [[new]] Book(\"Pinocchio\", 192);",
      hint: "To reach the object's own field you write `this.` followed by the field name.",
      explain: "`this.title` is the field, `title` is the parameter. `new` builds the book and calls the constructor."
    },
    {
      id: "p4", type: "bug",
      q: "After `new Player(\"Ada\")` the player's name is still `null`. Click the line that causes it.",
      code: "class Player {\n    String name;\n    int score;\n\n    Player(String name) {\n        name = name;\n        score = 0;\n    }\n}",
      line: 6,
      hint: "Inside the constructor there are two things called `name`. Which one does `name` mean on its own?",
      explain: "On its own, `name` means the parameter, so `name = name` copies the parameter into itself. The field is never touched. The fix is `this.name = name;`."
    },
    {
      id: "p5", type: "trace",
      q: "Follow the arrows. Fill in the values at the end of the program.",
      code: "class Counter {\n    int count;\n    void add() { count = count + 1; }\n}\n\nCounter c = new Counter();\nc.add();\nc.add();\nCounter d = c;\nd.add();",
      rows: [
        { label: "`c.count`", answer: "3" },
        { label: "`d.count`", answer: "3" },
        { label: "How many `Counter` objects exist?", answer: "1" }
      ],
      hint: "`d = c` does not build a new counter.",
      explain: "There is only one `new`, so only one counter. `c` and `d` point to it, and `add()` ran three times on it."
    },
    {
      id: "p6", type: "match",
      q: "Match each description with the right word.",
      options: ["class", "object", "field", "method", "constructor"],
      items: [
        { left: "Something an object can **do**", answer: "method" },
        { left: "Something an object **knows** (its data)", answer: "field" },
        { left: "The blueprint", answer: "class" },
        { left: "The thing built with `new`", answer: "object" },
        { left: "Runs automatically when the object is built", answer: "constructor" }
      ],
      explain: "Class = plan, object = thing, field = data, method = action, constructor = setup."
    }
  ],

  challenge: [
    {
      id: "c1", type: "predict",
      q: "Arrows are moving around. What does this print? (Same `Dog` class as before.)",
      code: "Dog a = new Dog(\"Rex\", 3);\nDog b = new Dog(\"Luna\", 5);\nDog c = a;\nc.name = \"Max\";\na = b;\nSystem.out.println(a.name);\nSystem.out.println(c.name);\nSystem.out.println(b.humanYears());",
      answer: "Luna\nMax\n35",
      hint: "Draw two boxes for the two dogs. Then move the arrows one line at a time.",
      explain: "`c` and `a` start on Rex; renaming through `c` makes it Max. Then `a = b` moves `a` to Luna. Max stays with `c`. Luna is 5, so 35 in human years."
    },
    {
      id: "c2", type: "fill",
      q: "Finish the bank account. `withdraw` must refuse (return false) when there isn't enough money.",
      code: "class BankAccount {\n    double balance;\n\n    void deposit(double amount) {\n        balance = balance [[+]] amount;\n    }\n\n    [[boolean]] withdraw(double amount) {\n        if (amount > balance) {\n            return [[false]];\n        }\n        balance = balance - amount;\n        return true;\n    }\n}",
      hint: "`withdraw` returns `true` or `false`. What type holds yes/no values?",
      explain: "A deposit adds to the balance. A method that answers yes/no returns a `boolean`, and it returns `false` when the amount is too big."
    },
    {
      id: "c3", type: "order",
      q: "Write a program that prints `Luna says Woof!` and then `21`. Some pieces are traps.",
      lines: ["Dog luna = new Dog(\"Luna\", 3);", "luna.bark();", "System.out.println(luna.humanYears());"],
      extra: ["Dog luna = Dog(\"Luna\", 3);", "System.out.println(Dog.humanYears());"],
      explain: "You need `new` to build the object, and you call methods on the object (`luna`), not on the class (`Dog`)."
    }
  ]
});
