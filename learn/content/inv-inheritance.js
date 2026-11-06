/* MODULE: Inheritance (Inventor stage) */
MG.module({
  id: "inv-inheritance",
  title: { en: "Inheritance", es: "Herencia", it: "Ereditarietà" },
  summary: {
    en: "Build new classes on top of existing ones. extends, super, overriding, and a first taste of polymorphism.",
    es: "Construye clases nuevas sobre otras existentes. extends, super, sobrescritura y un primer vistazo al polimorfismo.",
    it: "Costruisci nuove classi sopra quelle esistenti. extends, super, overriding e un primo assaggio di polimorfismo."
  },
  badge: { glyph: "tree", name: { en: "Family tree", es: "Árbol genealógico", it: "Albero genealogico" } },

  learn: [
    {
      title: "Is-a: share what's common",
      text: "Dogs and cats are different, but both are animals: both have a name and both eat. Instead of writing that twice, we put it in an `Animal` class and let `Dog` and `Cat` **inherit** it with `extends`.\n\nRead `class Dog extends Animal` as *a Dog **is an** Animal*.",
      code: "class Animal {\n    String name;\n    void eat() { System.out.println(name + \" is eating\"); }\n}\n\nclass Dog extends Animal {\n    void fetch() { System.out.println(name + \" fetches the ball\"); }\n}\n\nclass Cat extends Animal {\n    void climb() { System.out.println(name + \" climbs a tree\"); }\n}",
      viz: {
        type: "tree",
        nodes: [
          { name: "Animal", members: ["name", "eat()"] },
          { name: "Dog", parent: "Animal", members: ["fetch()"] },
          { name: "Cat", parent: "Animal", members: ["climb()"] }
        ]
      },
      after: "A `Dog` has `name`, `eat()` **and** `fetch()`. A `Cat` has `name`, `eat()` and `climb()`. A plain `Animal` can't fetch or climb. Children get everything from the parent, and add their own extras."
    },
    {
      title: "super(): the parent goes first",
      text: "When you build a `Dog`, the `Animal` part has to be set up too. The first line of a child's constructor calls the parent's constructor with `super(...)`.\n\nStep through and watch the order of the messages.",
      code: "class Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n        System.out.println(\"Animal ready\");\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n        System.out.println(\"Dog ready\");\n    }\n}\n\nDog rex = new Dog(\"Rex\");",
      viz: {
        type: "memory",
        steps: [
          { line: 16, note: "`new Dog(\"Rex\")` makes an object. It's a Dog, so it also has the `name` field it inherited.", frames: [{ name: "main", vars: {} }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null" } }] },
          { line: 10, note: "The `Dog` constructor starts.", frames: [{ name: "main", vars: {} }, { name: "Dog(name)", vars: { "this": "@1", name: "\"Rex\"" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null" } }] },
          { line: 11, note: "`super(name)` hands the name to the parent's constructor.", frames: [{ name: "main", vars: {} }, { name: "Dog(name)", vars: { "this": "@1", name: "\"Rex\"" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null" } }] },
          { line: 3, note: "Now the `Animal` constructor runs, on the same object.", frames: [{ name: "main", vars: {} }, { name: "Dog(name)", vars: { "this": "@1", name: "\"Rex\"" } }, { name: "Animal(name)", vars: { "this": "@1", name: "\"Rex\"" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "null" } }] },
          { line: 4, note: "The parent sets the field it owns.", frames: [{ name: "main", vars: {} }, { name: "Dog(name)", vars: { "this": "@1", name: "\"Rex\"" } }, { name: "Animal(name)", vars: { "this": "@1", name: "\"Rex\"" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }] },
          { line: 5, note: "First message: the parent finished.", frames: [{ name: "main", vars: {} }, { name: "Dog(name)", vars: { "this": "@1", name: "\"Rex\"" } }, { name: "Animal(name)", vars: { "this": "@1", name: "\"Rex\"" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }], out: ["Animal ready"] },
          { line: 12, note: "Back in `Dog`, which finishes its own part.", frames: [{ name: "main", vars: {} }, { name: "Dog(name)", vars: { "this": "@1", name: "\"Rex\"" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }], out: ["Animal ready", "Dog ready"] },
          { line: 16, note: "Done. Parent first, then child: like building the ground floor before the first floor.", frames: [{ name: "main", vars: { rex: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: { name: "\"Rex\"" } }], out: ["Animal ready", "Dog ready"] }
        ]
      }
    },
    {
      title: "Overriding: same method, new behaviour",
      text: "Every animal can `speak()`, but each one sounds different. A child class can **override** a method: write a method with the same name and parameters, and it replaces the parent's version for that child.\n\n`@Override` is a note for Java: *I mean to replace a parent method*. If you misspell the name, Java warns you.",
      code: "class Animal {\n    String speak() { return \"...\"; }\n}\n\nclass Dog extends Animal {\n    @Override\n    String speak() { return \"Woof\"; }\n}\n\nclass Cat extends Animal {\n    @Override\n    String speak() { return \"Meow\"; }\n}\n\nclass Fish extends Animal { }",
      viz: {
        type: "tree",
        nodes: [
          { name: "Animal", members: ["speak() → \"...\""] },
          { name: "Dog", parent: "Animal", members: ["^speak() → \"Woof\""] },
          { name: "Cat", parent: "Animal", members: ["^speak() → \"Meow\""] },
          { name: "Fish", parent: "Animal", members: [] }
        ]
      },
      after: "`Fish` doesn't override anything, so a fish uses the parent's version and says `...`. We'll use these four classes in the exercises."
    },
    {
      title: "super.method(): reuse, then add",
      text: "Sometimes you don't want to *replace* the parent's method, you want to *extend* it. Inside an override, `super.describe()` calls the parent's version. Then you add your part.",
      code: "class Animal {\n    String name;\n    String describe() {\n        return \"I am \" + name;\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    String describe() {\n        return super.describe() + \" and I love balls\";\n    }\n}",
      after: "For a dog called Rex, `describe()` returns **I am Rex and I love balls**. The parent built the first half, the child added the rest. If the parent's text changes one day, the dog follows automatically."
    },
    {
      title: "An Animal variable, a Dog object",
      text: "A variable of type `Animal` can point to any kind of animal, because a Dog **is an** Animal. When you call a method, Java looks at the **object**, not the variable, to decide which version runs. This is called **polymorphism**, and it has its own module later.",
      code: "Animal a = new Dog();\nSystem.out.println(a.speak());\na = new Cat();\nSystem.out.println(a.speak());",
      viz: {
        type: "memory",
        steps: [
          { line: 1, note: "The variable's type is `Animal`, but the object is a `Dog`.", frames: [{ name: "main", vars: { a: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: {} }] },
          { line: 2, note: "Java follows the arrow, finds a Dog, and runs **Dog's** `speak()`.", frames: [{ name: "main", vars: { a: "@1" } }], heap: [{ id: "@1", cls: "Dog", fields: {} }], out: ["Woof"] },
          { line: 3, note: "Same variable, now pointing to a Cat. Nobody points to the dog any more: Java will clean it up on its own.", frames: [{ name: "main", vars: { a: "@2" } }], heap: [{ id: "@1", cls: "Dog", fields: {} }, { id: "@2", cls: "Cat", fields: {} }], out: ["Woof"] },
          { line: 4, note: "Same line of code as before, different object, different sound.", frames: [{ name: "main", vars: { a: "@2" } }], heap: [{ id: "@2", cls: "Cat", fields: {} }], out: ["Woof", "Meow"] }
        ]
      },
      after: "One limit: through an `Animal` variable you can only call what **every** animal has. `a.fetch()` would not compile, even if the object is a Dog, because not every animal can fetch."
    },
    {
      title: "Everything is an Object",
      text: "If a class doesn't say `extends`, Java quietly makes it extend `Object`, the root of every family tree. That's why every object already has methods like `toString()` and `equals()` that you never wrote.",
      viz: {
        type: "tree",
        nodes: [
          { name: "Object", members: ["toString()", "equals()"] },
          { name: "Animal", parent: "Object", members: ["name", "speak()"] },
          { name: "Dog", parent: "Animal", members: ["^speak()", "fetch()"] },
          { name: "Cat", parent: "Animal", members: ["^speak()"] }
        ]
      },
      after: "Override `toString()` in your own classes and `System.out.println(rex)` will print something readable instead of a strange code like `Dog@1b6d3586`."
    }
  ],

  quiz: [
    {
      id: "q1", type: "choice",
      q: "What does `class Dog extends Animal` mean?",
      options: ["A Dog is an Animal: it gets Animal's fields and methods", "Animal gets Dog's fields and methods", "Dog and Animal are two names for the same class"],
      answer: 0,
      explain: "The child (`Dog`) inherits from the parent (`Animal`), never the other way round."
    },
    {
      id: "q2", type: "choice",
      q: "Which sentence is a good reason to use inheritance?",
      options: ["A Car **is a** Vehicle", "A Car **has an** Engine", "A Car **drives on** a Road"],
      answer: 0,
      explain: "Inheritance models *is-a*. *Has-a* is a field: a Car would have an `Engine engine;` field, not extend `Engine`."
    },
    {
      id: "q3", type: "choice",
      q: "In a child's constructor, what does `super(name)` do?",
      options: ["Calls the parent's constructor with `name`", "Creates a second object of the parent class", "Makes `name` a global variable"],
      answer: 0,
      explain: "It lets the parent set up its part of the same object. It must be the first line of the constructor."
    },
    {
      id: "q4", type: "choice",
      q: "With the Animal / Dog / Cat / Fish classes from the lesson, what does this print?",
      code: "Fish nemo = new Fish();\nSystem.out.println(nemo.speak());",
      options: ["`...`", "`Blub`", "An error, Fish has no speak()"],
      answer: 0,
      explain: "`Fish` doesn't override `speak()`, so it inherits Animal's version."
    },
    {
      id: "q5", type: "choice",
      q: "What happens with this code?",
      code: "Animal a = new Dog();\na.fetch();",
      options: ["The dog fetches the ball", "It doesn't compile: `Animal` has no `fetch()`", "It prints nothing"],
      answer: 1,
      explain: "Through an `Animal` variable you can only call methods every animal has. To fetch, you need a `Dog` variable."
    }
  ],

  practice: [
    {
      id: "p1", type: "match",
      q: "Pick the parent class each one extends.",
      options: ["Object", "Vehicle", "Car", "Bike"],
      items: [
        { left: "`class Vehicle`", answer: "Object" },
        { left: "`class Car`", answer: "Vehicle" },
        { left: "`class Bike`", answer: "Vehicle" },
        { left: "`class ElectricCar`", answer: "Car" }
      ],
      hint: "An electric car is still a car. And a class with no `extends` has a hidden parent.",
      explain: "Here is the family tree:",
      tree: {
        nodes: [
          { name: "Object" },
          { name: "Vehicle", parent: "Object" },
          { name: "Car", parent: "Vehicle" },
          { name: "Bike", parent: "Vehicle" },
          { name: "ElectricCar", parent: "Car" }
        ]
      }
    },
    {
      id: "p2", type: "predict",
      q: "Using Animal / Dog / Cat / Fish from the lesson, what does this print?",
      code: "Animal x = new Cat();\nAnimal y = new Fish();\nDog z = new Dog();\nSystem.out.println(x.speak());\nSystem.out.println(y.speak());\nSystem.out.println(z.speak());",
      answer: "Meow\n...\nWoof",
      hint: "Look at the object built by `new`, not the type of the variable.",
      explain: "The object decides: the Cat meows, the Fish uses Animal's `...`, the Dog woofs."
    },
    {
      id: "p3", type: "fill",
      q: "A bike is a vehicle with 2 wheels. Complete the code.",
      code: "class Vehicle {\n    int wheels;\n    Vehicle(int wheels) {\n        this.wheels = wheels;\n    }\n}\n\nclass Bike [[extends]] Vehicle {\n    Bike() {\n        [[super]](2);\n    }\n}",
      explain: "`extends` creates the family link. `super(2)` passes 2 to Vehicle's constructor, which stores it in `wheels`."
    },
    {
      id: "p4", type: "bug",
      q: "This doesn't compile. Click the line Java complains about.",
      code: "class Shape {\n    String name;\n    Shape(String name) {\n        this.name = name;\n    }\n}\n\nclass Square extends Shape {\n    int side;\n    Square(int side) {\n        this.side = side;\n        super(\"square\");\n    }\n}",
      line: 12,
      hint: "There's a rule about where `super(...)` can go.",
      explain: "`super(...)` must be the **first** line of the constructor: the parent part is built before the child's. Swap lines 11 and 12."
    },
    {
      id: "p5", type: "order",
      q: "Write a `Cat` that overrides `speak()` to return `Meow`. Watch out for the traps.",
      lines: ["class Cat extends Animal {", "    @Override", "    String speak() {", "        return \"Meow\";", "    }", "}"],
      extra: ["class Cat implements Animal {", "    String speak();"],
      explain: "Classes are inherited with `extends`. A method that does something needs a body in `{ }`, not a semicolon."
    },
    {
      id: "p6", type: "choice",
      q: "Which design makes sense?",
      options: ["`class Teacher extends Person`", "`class Person extends Teacher`", "`class Wheel extends Car`"],
      answer: 0,
      explain: "Every teacher is a person, but not every person is a teacher. A wheel is *part of* a car, not a kind of car: that's a field."
    }
  ],

  challenge: [
    {
      id: "c1", type: "predict",
      q: "Three generations. What does `new C()` print?",
      code: "class A {\n    A() { System.out.println(\"A\"); }\n}\nclass B extends A {\n    B() {\n        super();\n        System.out.println(\"B\");\n    }\n}\nclass C extends B {\n    C() {\n        super();\n        System.out.println(\"C\");\n    }\n}\n\nnew C();",
      answer: "A\nB\nC",
      hint: "Each constructor calls its parent *before* printing.",
      explain: "C calls B, B calls A. A prints first, then control comes back down: B, then C. Grandparents first."
    },
    {
      id: "c2", type: "predict",
      q: "What does this print?",
      code: "class Robot {\n    String name = \"Robo\";\n    String hello() { return \"Beep, I am \" + name; }\n}\nclass FriendlyRobot extends Robot {\n    @Override\n    String hello() { return super.hello() + \"! Nice to meet you\"; }\n}\n\nRobot r = new FriendlyRobot();\nSystem.out.println(r.hello());",
      answer: "Beep, I am Robo! Nice to meet you",
      explain: "The object is a FriendlyRobot, so its `hello()` runs. It calls the parent's version first and adds its own part."
    },
    {
      id: "c3", type: "trace",
      q: "A bonus account adds 1 extra to every deposit. Fill in the balances at the end.",
      code: "class Account {\n    int balance = 0;\n    void add(int n) { balance = balance + n; }\n}\nclass BonusAccount extends Account {\n    @Override\n    void add(int n) { super.add(n + 1); }\n}\n\nAccount a = new Account();\nAccount b = new BonusAccount();\na.add(10);\nb.add(10);\nb.add(5);",
      rows: [
        { label: "`a.balance`", answer: "10" },
        { label: "`b.balance`", answer: "17" }
      ],
      hint: "`b` is a BonusAccount even though its variable type is Account.",
      explain: "`a` is a normal account: 10. `b` runs the bonus version: it adds 11, then 6, so 17."
    },
    {
      id: "c4", type: "match",
      q: "Which version of `speak()` runs? (Animal / Dog / Cat / Fish from the lesson.)",
      options: ["Animal's speak()", "Dog's speak()", "Cat's speak()"],
      items: [
        { left: "`new Dog().speak()`", answer: "Dog's speak()" },
        { left: "`new Fish().speak()`", answer: "Animal's speak()" },
        { left: "`Animal a = new Cat(); a.speak()`", answer: "Cat's speak()" },
        { left: "`new Animal().speak()`", answer: "Animal's speak()" }
      ],
      explain: "Always the object's own class first. If it has no override, Java walks up the family tree until it finds one."
    }
  ]
});
