Photo blog
===
## Consegna
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