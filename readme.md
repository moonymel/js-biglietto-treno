Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) in console.log()
BONUS
1 - Mostrare il risultato a video in html;
2 - Stilizzare con i css la pagina



PROCESSO:

1 Creare un prompt per chiedere all'utente il numero di chilometri che vuole percorrere
2 Creare un promp per chiedere all'utente l'età del passeggero
3 Creare una variabile per il prezzo del biglietto standard (0.21 x variabile dei km)
4 Calcolare il prezzo del biglietto per le altre categorie
    4.a ? età < 18 anni
        4.a.1 Calcolare il valore dello sconto del 20%
        4.a.2 Calcolaer il valore del biglietto scontato
        4.a.3 Stampare in console.log il valore del biglietto scontato
    4.b ? età >= 65 anni
        4.a.1 Calcolare il valore dello sconto del 40%
        4.a.2 Calcolaer il valore del biglietto scontato
        4.a.3 Stampare in console.log il valore del biglietto scontato
5 ; Stampare in console.log il valore del biglietto standard