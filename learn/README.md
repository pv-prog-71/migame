# mi.Game Learn

App statica (solo HTML, CSS e JavaScript) per migame.es. Nessun server, nessun database: funziona su GitHub Pages così com'è.

## Come metterla online

1. Copia la cartella `learn/` nella radice del repository del sito (accanto a `index.html` della landing).
2. Fai commit e push. L'app sarà su **migame.es/learn/**.
3. Nella landing aggiungi un link, per esempio un pulsante "Prova gratis" che punta a `/learn/`.

Per provarla sul tuo computer basta aprire `learn/index.html` con doppio clic.

## Struttura

```
learn/
  index.html            pagina principale
  assets/app.css        grafica
  assets/app.js         motore dell'app (non serve toccarlo)
  content/course.js     mappa del corso: tappe, moduli, test di livello
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

Tutti accettano anche `q` (domanda), `hint` (suggerimento) ed `explain` (spiegazione mostrata dopo).

## Punti e badge

- 10 XP per esercizio (20 nella sfida), metà se serve più di un tentativo, meno 3 se si usa il suggerimento, 0 se si chiede la risposta.
- 10 XP per aver letto la teoria, 50 XP bonus per ogni modulo completato.
- Il badge di un modulo si definisce nel file del modulo con `badge: { glyph, name }`.
  Icone disponibili: `spark`, `compass`, `bolt`, `coin`, `crown`, `blueprint`, `tree`, `gear`, `key`, `flag`.

## Progressi e dispositivi

I progressi sono salvati nel browser (localStorage). Dal profilo lo studente può copiare un codice e incollarlo su un altro dispositivo. Nessun dato personale: solo un nickname.

Quando vorrai il login con sincronizzazione automatica (Firebase), basterà collegarlo al salvataggio dei progressi in `app.js` (funzioni `load` e `save`): il resto dell'app non cambia.

## Sblocchi

- Le tappe si aprono in ordine: la tappa successiva si apre quando tutti i moduli disponibili della precedente sono completati.
- Le tappe che hanno solo moduli "in arrivo" non bloccano nessuno. Per questo oggi Inventore è già aperta: appena pubblicherai i moduli di Esploratore e Apprendista, il blocco si attiverà da solo.
- Il test di livello sblocca direttamente la tappa consigliata.
