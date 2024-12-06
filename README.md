Photo blog
===
## Consegna (giorno 1)
**Milestone 1**
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
**Milestone 2**
Utilizzando Postman o Thunder Client, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

## Logica 
**Milestone 1**
html+css
centro il titolo e metto sfondo
card 600*600, 3 in una riga (fare anche prova con 6 card)
in html preparo la card (img + didascalia) e in css la strutturo
usare row-cols per renderle responsive
**Milestone 2**
studio la risposta di thunder client e scrivo le info che mi servono
**Milestone 3**
in js uso axios.get per fare la chiamata AJAX all'API di json placeholder e con il .then prendo le info che mi sono presa dalla milestone 2. Inserisco queste info all'interno della card per generare tutte
Ricordarsi il .catch (inserisci messaggio di errore in pagina)
**Bonus**
Rivedere il responsive della milestone 1


## Consegna (giorno 2)
**Milestone 1**
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
**Milestone 2**
Facciamo sparire l’overlay con l'aiuto di una classe CSS che imposti il display: none.
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
**Milestone 3**
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare 

**Bonus**
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

## Logica
**Milestone 1**
overlay fuori da main e header per far si che vada sopra a entrambi
bottone che attiva d-none all'overlay
**Milestone 2**
cliccando sulla singola card compare la foto a tutto schermo, tolgo quindi il dipslay-none all'overlay
clicco il bottone e l'overlay scompare di nuovo
**Milestone 3**
al click sulla card faccio comparire l'immagine stessa, 
uso closest() per per prendere il tag che mi interessa per far si che il click avvenga solo sopra la card e poi uso getAttribute() per prendere l'url specifico della card in base a quella su cui clicco.

**bonus**
css: all'hover creo effetto zoom, ruotamento e aumento ombra 
sempre all'hover faccio diventare la freccetta una manina