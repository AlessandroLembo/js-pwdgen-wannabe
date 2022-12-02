console.log(" JS OK ");

/* 
TRACCIA:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/*
ANALISI
1 - Prendo gli elementi dalla pagina
2 - Chiedere all'utente come si chiama 
3 - Salvare la risposta nella variabile
4 - Chiedere all'utente il suo cognome 
5 - Salvare la risposta nella variabile
6 - Chiedere all'utente il suo colore preferito
7-  Salvare la risposta nella variabile
8 - Inserisco nella pagina la password generata
*/

// SVOLGIMENTO
// 1 - Prendo gli elementi dalla pagina
const nameSubject = document.getElementById("name");
// console.log(nameUser);

const surnameSubject = document.getElementById("surname");
// console.log(surnameUser);

const colorFavorite = document.getElementById("color");
// console.log(colorUser);

const myNumber = document.getElementById("number");
// console.log(myNumber);


// 2 - Chiedo all'utente come si chiama
const firstName = prompt("Qual è il tuo nome?" , "alessandro");
console.log(firstName);