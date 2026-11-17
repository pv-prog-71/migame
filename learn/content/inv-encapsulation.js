/* INVENTOR · mission 4: Encapsulation (private fields, public methods) */
(function () {
  var T = function (en, es, it) { return { en: en, es: es, it: it }; };
  var main = function (vars) { return { name: "main", vars: vars || {} }; };
  var wallet = function (coins) { return { id: "@1", cls: "Wallet", fields: { coins: String(coins) } }; };
  var inside = function (fn, vars) { return { name: T("Inside " + fn, "Dentro de " + fn, "Dentro " + fn), vars: vars }; };

  MG.module({
    id: "inv-encapsulation",
    title: T("Encapsulation", "Encapsulamiento", "Incapsulamento"),
    summary: T(
      "An object protects its own data: from outside you can only use the doors it decides to open.",
      "Un objeto protege sus propios datos: desde fuera solo puedes usar las puertas que él decide abrir.",
      "Un oggetto protegge i propri dati: da fuori puoi usare solo le porte che lui decide di aprire."
    ),

    learn: [
      {
        title: T("Anyone can break it", "Cualquiera puede romperlo", "Chiunque lo può rompere"),
        text: T(
          "In this class anybody can write anything in `coins`, even a negative number of coins. That makes no sense, and nobody stops it.",
          "En esta clase cualquiera puede escribir cualquier cosa en `coins`, incluso un número negativo de monedas. No tiene sentido, y nadie lo impide.",
          "In questa classe chiunque può scrivere qualsiasi cosa in `coins`, perfino un numero negativo di monete. Non ha senso, e nessuno lo impedisce."
        ),
        code: "class Wallet {\n    int coins = 0;\n}\n\nWallet w = new Wallet();\nw.coins = -500;   // allowed... but wrong!",
        after: T(
          "In a real game, a bug like this could give a player infinite coins, or a negative score.",
          "En un juego de verdad, un fallo así podría dar a un jugador monedas infinitas, o una puntuación negativa.",
          "In un gioco vero, un errore così potrebbe dare a un giocatore monete infinite, o un punteggio negativo."
        )
      },
      {
        title: T("private and public", "private y public", "private e public"),
        text: T(
          "`private` means: only the class itself can touch this field. To let others use it, the class offers **public** methods, and inside them it checks the rules.\n\n`if (n > 0)` means: only if n is greater than 0. You met `if` with Bit's blocks.",
          "`private` significa: solo la propia clase puede tocar este atributo. Para que los demás lo usen, la clase ofrece métodos **public**, y dentro comprueba las reglas.\n\n`if (n > 0)` significa: solo si n es mayor que 0. Ya conociste `if` con los bloques de Bit.",
          "`private` vuol dire: solo la classe stessa può toccare questo attributo. Per farlo usare agli altri, la classe offre metodi **public**, e dentro controlla le regole.\n\n`if (n > 0)` vuol dire: solo se n è maggiore di 0. Hai già conosciuto `if` con i blocchi di Bit."
        ),
        code: "class Wallet {\n    private int coins = 0;\n\n    public void add(int n) {\n        if (n > 0) {\n            coins = coins + n;\n        }\n    }\n\n    public int getCoins() {\n        return coins;\n    }\n}",
        after: T(
          "Now the only way to change `coins` from outside is `add`, and `add` refuses negative numbers. The only way to read it is `getCoins`.",
          "Ahora la única forma de cambiar `coins` desde fuera es `add`, y `add` rechaza los números negativos. La única forma de leerlo es `getCoins`.",
          "Ora l'unico modo per cambiare `coins` da fuori è `add`, e `add` rifiuta i numeri negativi. L'unico modo per leggerlo è `getCoins`."
        )
      },
      {
        title: T("The wallet defends itself", "La cartera se defiende", "Il portafoglio si difende"),
        text: T(
          "Press **Next line** and watch what happens when someone tries to add -50 coins.",
          "Pulsa **Siguiente línea** y mira qué pasa cuando alguien intenta añadir -50 monedas.",
          "Premi **Riga successiva** e guarda cosa succede quando qualcuno prova ad aggiungere -50 monete."
        ),
        code: "Wallet w = new Wallet();\nw.add(10);\nw.add(-50);\nSystem.out.println(w.getCoins());\nw.coins = 1000;   // ERROR: coins is private",
        viz: {
          type: "memory",
          steps: [
            { line: 1, note: T("A new wallet with 0 coins.", "Una cartera nueva con 0 monedas.", "Un portafoglio nuovo con 0 monete."), frames: [main({ w: "@1" })], heap: [wallet(0)] },
            { line: 2, note: T("10 is greater than 0: accepted.", "10 es mayor que 0: aceptado.", "10 è maggiore di 0: accettato."), frames: [main({ w: "@1" }), inside("add", { n: "10" })], heap: [wallet(10)] },
            { line: 3, note: T("-50 is not greater than 0: `add` does nothing. The coins are safe.", "-50 no es mayor que 0: `add` no hace nada. Las monedas están a salvo.", "-50 non è maggiore di 0: `add` non fa niente. Le monete sono al sicuro."), frames: [main({ w: "@1" }), inside("add", { n: "-50" })], heap: [wallet(10)] },
            { line: 4, note: T("Read the coins through the public door.", "Lee las monedas por la puerta pública.", "Leggi le monete dalla porta pubblica."), frames: [main({ w: "@1" })], heap: [wallet(10)], out: ["10"] },
            { line: 5, note: T("Java refuses this line before the program even starts: from outside, `coins` can't be touched.", "Java rechaza esta línea antes de que el programa empiece: desde fuera, `coins` no se puede tocar.", "Java rifiuta questa riga prima ancora che il programma parta: da fuori, `coins` non si può toccare."), frames: [main({ w: "@1" })], heap: [wallet(10)], out: ["10"] }
          ]
        }
      },
      {
        title: T("Getters and setters", "Getters y setters", "Getter e setter"),
        text: T(
          "Methods that read a private field are usually called **get…** (getters), methods that change it **set…** (setters). Hiding the data and offering controlled doors is called **encapsulation**.",
          "Los métodos que leen un atributo privado se suelen llamar **get…** (getters), y los que lo cambian **set…** (setters). Esconder los datos y ofrecer puertas controladas se llama **encapsulamiento**.",
          "I metodi che leggono un attributo privato di solito si chiamano **get…** (getter), quelli che lo cambiano **set…** (setter). Nascondere i dati e offrire porte controllate si chiama **incapsulamento**."
        ),
        code: "class Player {\n    private int lives = 3;\n\n    public int getLives() {\n        return lives;\n    }\n\n    public void setLives(int n) {\n        if (n >= 0) {\n            lives = n;\n        }\n    }\n}",
        after: T(
          "Think of a vending machine: you can't open it and take what you want, you use the buttons. The machine decides what's allowed.",
          "Piensa en una máquina expendedora: no puedes abrirla y coger lo que quieras, usas los botones. La máquina decide qué está permitido.",
          "Pensa a un distributore automatico: non puoi aprirlo e prendere quello che vuoi, usi i pulsanti. È la macchina a decidere cosa è permesso."
        )
      }
    ],

    quiz: [
      {
        id: "q1", type: "choice",
        q: T("What does `private` mean in front of a field?", "¿Qué significa `private` delante de un atributo?", "Cosa vuol dire `private` davanti a un attributo?"),
        options: [
          T("Only the class itself can use it", "Solo la propia clase puede usarlo", "Solo la classe stessa lo può usare"),
          T("Nobody can ever use it", "Nadie puede usarlo nunca", "Nessuno lo può mai usare"),
          T("It can't change", "No puede cambiar", "Non può cambiare")
        ],
        answer: 0,
        explain: T("The class's own methods can read and change it; code outside can't.", "Los métodos de la propia clase pueden leerlo y cambiarlo; el código de fuera no.", "I metodi della classe lo possono leggere e cambiare; il codice da fuori no.")
      },
      {
        id: "q2", type: "choice",
        q: T("With the Wallet class from the lesson, which line is refused?", "Con la clase Wallet de la lección, ¿qué línea se rechaza?", "Con la classe Wallet della lezione, quale riga viene rifiutata?"),
        options: ["`w.add(5);`", "`int c = w.getCoins();`", "`w.coins = 5;`"],
        answer: 2,
        explain: T("`coins` is private: from outside you must use `add` and `getCoins`.", "`coins` es privado: desde fuera hay que usar `add` y `getCoins`.", "`coins` è privato: da fuori devi usare `add` e `getCoins`.")
      },
      {
        id: "q3", type: "choice",
        q: T("A new wallet, then `w.add(-3); w.add(4);`. How many coins?", "Una cartera nueva, luego `w.add(-3); w.add(4);`. ¿Cuántas monedas?", "Un portafoglio nuovo, poi `w.add(-3); w.add(4);`. Quante monete?"),
        options: ["1", "4", "7"],
        answer: 1,
        explain: T("-3 is refused, 4 is accepted: 0 + 4.", "-3 se rechaza, 4 se acepta: 0 + 4.", "-3 viene rifiutato, 4 accettato: 0 + 4.")
      },
      {
        id: "q4", type: "choice",
        q: T("What is a getter?", "¿Qué es un getter?", "Cos'è un getter?"),
        options: [
          T("A method that gives back the value of a field", "Un método que devuelve el valor de un atributo", "Un metodo che restituisce il valore di un attributo"),
          T("A field that can't be read", "Un atributo que no se puede leer", "Un attributo che non si può leggere"),
          T("A type of loop", "Un tipo de bucle", "Un tipo di ciclo")
        ],
        answer: 0,
        explain: T("Like `getCoins()`: it reads the private field and gives the value back.", "Como `getCoins()`: lee el atributo privado y devuelve el valor.", "Come `getCoins()`: legge l'attributo privato e restituisce il valore.")
      },
      {
        id: "q5", type: "choice",
        q: T("Why use encapsulation?", "¿Para qué sirve el encapsulamiento?", "A cosa serve l'incapsulamento?"),
        options: [
          T("So the object can keep its data correct", "Para que el objeto pueda mantener sus datos correctos", "Perché l'oggetto possa tenere i suoi dati corretti"),
          T("To make the program shorter", "Para que el programa sea más corto", "Per rendere il programma più corto"),
          T("To hide the program from the teacher", "Para esconder el programa del profe", "Per nascondere il programma all'insegnante")
        ],
        answer: 0,
        explain: T("The class checks every change, so impossible values can't get in.", "La clase comprueba cada cambio, así que no pueden entrar valores imposibles.", "La classe controlla ogni cambiamento, quindi non possono entrare valori impossibili.")
      }
    ],

    practice: [
      {
        id: "p1", type: "bug",
        q: T("Java refuses this program. Click the wrong line.", "Java rechaza este programa. Haz clic en la línea equivocada.", "Java rifiuta questo programma. Clicca la riga sbagliata."),
        code: "class Door {\n    private boolean open = false;\n    public void unlock() { open = true; }\n    public boolean isOpen() { return open; }\n}\n\nDoor d = new Door();\nd.unlock();\nd.open = false;\nSystem.out.println(d.isOpen());",
        line: 9,
        hint: T("Which line touches a private field from outside the class?", "¿Qué línea toca un atributo privado desde fuera de la clase?", "Quale riga tocca un attributo privato da fuori della classe?"),
        explain: T("`open` is private: outside the class you can only use `unlock()` and `isOpen()`.", "`open` es privado: fuera de la clase solo se pueden usar `unlock()` e `isOpen()`.", "`open` è privato: fuori dalla classe puoi usare solo `unlock()` e `isOpen()`.")
      },
      {
        id: "p2", type: "predict",
        q: T("What does this print?", "¿Qué imprime esto?", "Cosa stampa questo?"),
        code: "class Thermo {\n    private int temp = 20;\n    public void set(int t) {\n        if (t >= 0) {\n            temp = t;\n        }\n    }\n    public int get() { return temp; }\n}\n\nThermo th = new Thermo();\nth.set(25);\nSystem.out.println(th.get());\nth.set(-10);\nSystem.out.println(th.get());",
        answer: "25\n25",
        hint: T("Does `set` accept -10?", "¿Acepta `set` el -10?", "`set` accetta -10?"),
        explain: T("25 is accepted. -10 is not greater than or equal to 0, so the temperature stays 25.", "25 se acepta. -10 no es mayor o igual que 0, así que la temperatura sigue en 25.", "25 viene accettato. -10 non è maggiore o uguale a 0, quindi la temperatura resta 25.")
      },
      {
        id: "p3", type: "fill",
        q: T("Protect the field and complete the getter.", "Protege el atributo y completa el getter.", "Proteggi l'attributo e completa il getter."),
        code: "class Score {\n    [[private]] int points = 0;\n\n    public int [[getPoints]]() {\n        [[return]] points;\n    }\n}",
        hint: T("The field must be hidden; the getter's name starts with get; it gives the value back.", "El atributo tiene que estar oculto; el nombre del getter empieza por get; devuelve el valor.", "L'attributo deve essere nascosto; il nome del getter comincia con get; restituisce il valore."),
        explain: T("`private` hides the field, `getPoints` is the getter, and `return` gives the value back.", "`private` oculta el atributo, `getPoints` es el getter y `return` devuelve el valor.", "`private` nasconde l'attributo, `getPoints` è il getter e `return` restituisce il valore.")
      },
      {
        id: "p4", type: "match",
        q: T("Which word goes with each idea?", "¿Qué palabra va con cada idea?", "Quale parola va con ogni idea?"),
        options: ["private", "public", "getter", "setter"],
        items: [
          { left: T("Only the class can use it", "Solo la clase puede usarlo", "Solo la classe lo può usare"), answer: "private" },
          { left: T("Everybody can use it", "Todos pueden usarlo", "Tutti lo possono usare"), answer: "public" },
          { left: T("Method that reads a field", "Método que lee un atributo", "Metodo che legge un attributo"), answer: "getter" },
          { left: T("Method that changes a field, checking the rules", "Método que cambia un atributo comprobando las reglas", "Metodo che cambia un attributo controllando le regole"), answer: "setter" }
        ],
        explain: T("private hides, public opens, getters read, setters change with control.", "private oculta, public abre, los getters leen, los setters cambian con control.", "private nasconde, public apre, i getter leggono, i setter cambiano con controllo.")
      }
    ],

    challenge: [
      {
        id: "c1", type: "trace",
        q: T("How much is each variable worth when the program ends? Write the values in the boxes.", "¿Cuánto vale cada variable cuando termina el programa? Escribe los valores en las casillas.", "Quanto vale ogni variabile quando il programma finisce? Scrivi i valori nelle caselle."),
        code: "class Tank {\n    private int fuel = 0;\n    public void fill(int n) {\n        if (fuel + n <= 100) {\n            fuel = fuel + n;\n        }\n    }\n    public int getFuel() { return fuel; }\n}\n\nTank t = new Tank();\nt.fill(60);\nt.fill(50);\nt.fill(30);\nint f = t.getFuel();",
        rows: [{ label: "`f`", answer: "90" }],
        hint: T("The tank holds at most 100. Check each `fill` before adding.", "El depósito admite como máximo 100. Comprueba cada `fill` antes de sumar.", "Il serbatoio contiene al massimo 100. Controlla ogni `fill` prima di aggiungere."),
        explain: T("60 → ok (60). 50 → 110 is too much, refused. 30 → 90, ok.", "60 → bien (60). 50 → 110 es demasiado, se rechaza. 30 → 90, bien.", "60 → ok (60). 50 → 110 è troppo, rifiutato. 30 → 90, ok.")
      },
      {
        id: "c2", type: "predict",
        q: T("The account says yes or no. What does this print?", "La cuenta dice sí o no. ¿Qué imprime esto?", "Il conto dice sì o no. Cosa stampa questo?"),
        code: "class Account {\n    private int money = 50;\n    public boolean pay(int price) {\n        if (price <= money) {\n            money = money - price;\n            return true;\n        }\n        return false;\n    }\n    public int getMoney() { return money; }\n}\n\nAccount a = new Account();\nSystem.out.println(a.pay(30));\nSystem.out.println(a.pay(30));\nSystem.out.println(a.getMoney());",
        answer: "true\nfalse\n20",
        hint: T("After the first payment, is there still enough money for the second?", "Después del primer pago, ¿queda dinero suficiente para el segundo?", "Dopo il primo pagamento, ci sono ancora abbastanza soldi per il secondo?"),
        explain: T("50 − 30 = 20, so the first payment works (true). 30 is more than 20, so the second is refused (false) and the money stays 20.", "50 − 30 = 20, así que el primer pago funciona (true). 30 es más que 20, así que el segundo se rechaza (false) y el dinero sigue en 20.", "50 − 30 = 20, quindi il primo pagamento va (true). 30 è più di 20, quindi il secondo viene rifiutato (false) e i soldi restano 20.")
      }
    ]
  });
})();
