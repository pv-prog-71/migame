# mi.Game Learn

App statica (solo HTML, CSS e JavaScript) per migame.es. Nessun server, nessun database: funziona su GitHub Pages così com'è.

## Come metterla online

Lo zip contiene **tutto il sito**: la home (`index.html`), lo stile comune (`assets/`) e l'app (`learn/`).

1. Sostituisci il contenuto del repository con quello dello zip (tieni una copia della vecchia home, se vuoi).
2. In `index.html` cerca `CONTACT` e scrivi email e WhatsApp.
3. Fai commit e push. La home sarà su **migame.es**, l'app su **migame.es/learn/**.

Per provarlo sul tuo computer basta aprire `index.html` con doppio clic.

Home e app usano gli stessi file `assets/site.css` (colori, caratteri, pulsanti) e `assets/site.js` (menu, piè di pagina, lingua, il robot Bit). Se cambi un colore lì, cambia su tutto il sito. La lingua scelta vale per tutto il sito.

## Struttura

```
index.html              home del sito
assets/site.css         stile comune
assets/site.js          menu, piè di pagina, lingua, robot Bit
learn/
  index.html            pagina principale
  assets/app.css        grafica
  assets/app.js         motore dell'app (non serve toccarlo)
  content/course.js     mappa del corso: livelli, missioni, test di livello
  content/exp-sequences.js     modulo "Passo dopo passo"
  content/exp-loops.js         modulo "Cicli"
  content/inv-classes.js       modulo "Classi e oggetti"
  content/inv-inheritance.js   modulo "Ereditarietà"
```

## Aggiungere un modulo

1. Copia un file esistente, per esempio `content/inv-classes.js`, e rinominalo (es. `content/inv-interfaces.js`).
2. Dentro il file cambia `id: "inv-interfaces"` (deve essere uguale al nome del file, senza `.js`) e scrivi i contenuti.
3. In `content/course.js` trova la riga del modulo e togli `soon: true`:
   `{ id: "inv-interfaces" },`

Il modulo compare sulla mappa e si sblocca quando lo studente completa quello precedente.

## Com'è fatto un modulo

Ogni modulo ha quattro parti, che lo studente fa in ordine:

- `learn`: le schede di teoria
- `quiz`: domande a scelta multipla
- `practice`: esercizi
- `challenge`: la sfida finale (vale il doppio dei punti)

Ogni esercizio ha un `id` unico nel modulo (`q1`, `p1`, `c1`...). **Non cambiare l'id** di un esercizio già pubblicato: i progressi degli studenti sono legati all'id.

### Testi e lingue

Ogni testo può essere scritto in due modi:

```js
title: "Inheritance"                                         // solo inglese
title: { en: "Inheritance", es: "Herencia", it: "Ereditarietà" }  // tre lingue
```

Se manca una lingua, l'app usa l'inglese.

Nei testi puoi usare: `**grassetto**`, `*corsivo*`, `` `codice` ``, una riga vuota per un nuovo paragrafo, e righe che iniziano con `- ` per un elenco.

### Scheda di teoria

```js
{
  title: "Titolo",
  text: "Spiegazione prima del codice",
  code: "class Dog {\n    String name;\n}",   // \n = a capo
  after: "Testo dopo il codice (facoltativo)",
  viz: { ... }                                  // visualizzazione (facoltativa)
}
```

**Visualizzazione memoria** (`type: "memory"`): mostra il codice riga per riga, con variabili, oggetti e output. Ogni passo descrive com'è la memoria *dopo* quella riga:

```js
viz: { type: "memory", steps: [
  { line: 1,
    note: "Spiegazione del passo",
    frames: [ { name: "main", vars: { rex: "@1" } } ],          // variabili; "@1" = freccia verso l'oggetto @1
    heap:   [ { id: "@1", cls: "Dog", fields: { name: "\"Rex\"", age: "3" } } ],
    out:    [ "riga stampata" ] }
]}
```

L'ultimo blocco in `frames` è quello attivo (es. un costruttore in esecuzione).

**Albero delle classi** (`type: "tree"`):

```js
viz: { type: "tree", nodes: [
  { name: "Animal", members: ["name", "speak()"] },
  { name: "Dog", parent: "Animal", members: ["^speak()", "fetch()"] }   // ^ = override
]}
```

### Tipi di esercizio

| tipo | cosa fa lo studente | campi principali |
|---|---|---|
| `choice` | sceglie una risposta | `options`, `answer` (indice, 0 = la prima) |
| `predict` | scrive l'output | `code`, `answer` (righe separate da `\n`) |
| `order` | mette in ordine le righe | `lines` (ordine giusto), `extra` (righe trappola) |
| `fill` | completa gli spazi | `code` con `[[risposta]]` o `[[giusta|altra giusta]]` |
| `bug` | clicca la riga sbagliata | `code`, `line` (numero della riga) |
| `trace` | scrive i valori delle variabili | `code`, `rows: [{ label, answer }]` |
| `match` | abbina con menu a tendina | `items: [{ left, answer }]`, `options`, `tree` (facoltativo) |
| `grid` | programma il robot Bit con i blocchi | `map`, `solution`, `blocks` (facoltativo), `maxBlocks` (facoltativo) |

Tutti accettano anche `q` (domanda), `hint` (suggerimento) ed `explain` (spiegazione mostrata dopo).

### La griglia di Bit (livello Esploratore)

La mappa è una lista di righe, tutte della stessa lunghezza:

```js
map: [">..*",      // >  Bit, guarda a destra  (anche <  ^  v)
      "#.##",      // #  muro     .  pavimento
      "#..F"],     // *  stella   F  bandiera
solution: ["move", "move", { repeat: 3, do: ["move", "turnLeft"] }],
blocks: ["move", "turnLeft", "turnRight", "repeat"],   // blocchi disponibili
maxBlocks: 5                                           // limite di blocchi
```

Per vincere Bit deve finire sulla bandiera dopo aver preso tutte le stelle. Qualsiasi soluzione valida va bene: `solution` serve solo per il pulsante "Mostra la risposta". Nelle schede di teoria puoi mostrare una demo con `viz: { type: "grid", map, program }`.

Nei moduli Esploratore i testi sono in tre lingue con la scorciatoia `T("inglese", "spagnolo", "italiano")`.

## Nomi nel gioco

- **Livello**: Esploratore, Apprendista, Inventore (in `course.js` si chiamano `stages`).
- **Missione**: una tappa sulla mappa, dentro un livello (Sequenze, Cicli, Funzioni…). Nei file si chiama modulo: un file in `content/` per missione.
- **Passo**: una pagina della teoria («Prossimo passo»).
- **Boss**: la sezione sfida (`challenge`) di una missione.
- **Test di livello**: le 8 domande che dicono da quale livello partire.

## Esperienza, pezzi del robot e medaglie

- 10 XP per esercizio (20 nel boss), metà se serve più di un tentativo, meno 3 se si usa il suggerimento, 0 se si chiede la risposta.
- 10 XP per aver letto la teoria, 50 XP bonus per ogni missione completata.
- **Pezzi del robot**: ogni missione completata aggiunge un pezzo, che si vede sul robot. La 1ª missione di un livello dà i cingoli, la 2ª le braccia, la 3ª l'antenna stella, la 4ª i razzi, la 5ª il visore, la 6ª il casco. Esploratore = bronzo, Apprendista = argento, Inventore = oro. Non serve scrivere niente nel file della missione: dipende dalla posizione in `course.js`.
- **Medaglie**: Primo passo (+10 XP), Bussola (test di livello, +20 XP), Percorso netto (boss senza errori né suggerimenti, +30 XP), Collezionista (250 XP), Tesoro (1000 XP) e una per ogni livello completato (+100 XP).
  Icone disponibili: `spark`, `compass`, `bolt`, `coin`, `crown`, `blueprint`, `tree`, `gear`, `key`, `flag`.

## Area studenti (login)

Finché `assets/firebase-config.js` contiene `window.MG_FIREBASE = null`, Gioca e impara funziona **senza login**: i progressi restano nel browser.

Per attivare l'area studenti:

1. Incolla in `assets/firebase-config.js` il blocco `firebaseConfig` della console Firebase e il tuo UID in `MG_TEACHER_UID`.
2. Nella console Firebase apri **Firestore Database → Reglas**, incolla il contenuto del file `firestore.rules` (nella radice del sito), sostituisci `TEACHER_UID` con il tuo UID e premi **Publicar**.
3. Apri `learn/teacher.html` (c'è anche il link «Sono l'insegnante» sotto il login) ed entra con la tua email e password.

Dal pannello:

- **Crei gli studenti** con un nickname. Il codice segreto viene generato da solo (per esempio `pimolu42`). Con «Copia» copi nickname, codice e indirizzo per mandarli alla famiglia.
- **Vedi i progressi** di ogni studente: XP, missioni completate (E1 = Esploratore missione 1, A2 = Apprendista missione 2…), ultimo accesso. Il codice resta visibile con «Mostra», così se uno studente lo dimentica glielo ridai.
- **Disattivi** uno studente: i suoi progressi vengono cancellati e non può più entrare. Quel nickname non si può riusare.

Lo studente entra con nickname e codice. Maiuscole e accenti nel nickname non contano: «Lucía» e «lucia» sono lo stesso. Progressi, stelle, pezzi, medaglie e colore del robot si salvano sul server e li ritrova su qualsiasi dispositivo. La lingua invece viene dal sito.

## Progressi

I progressi sono salvati nel browser (localStorage). Nessun dato personale: solo un nickname.

Quando vorrai il login con sincronizzazione automatica (Firebase), basterà collegarlo al salvataggio dei progressi in `app.js` (funzioni `load` e `save`): il resto dell'app non cambia.

## Sblocchi

- I livelli si aprono in ordine: il livello successivo si apre solo quando **tutte** le missioni del precedente sono completate. Finché un livello ha missioni "in arrivo", il livello dopo resta chiuso.
- Il test di livello sblocca i livelli dal primo fino a quello consigliato (punteggio 0-3: Esploratore; 4-6: fino ad Apprendista; 7-8: fino a Inventore).
- Stelle per missione: 1 se la completi, 2 se non usi mai "Mostra la risposta", 3 se batti il boss senza errori né suggerimenti.
