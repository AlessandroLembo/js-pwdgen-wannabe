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
7 - Salvare la risposta nella variabile
8 - Compongo la password 
9 - Inserisco nella pagina la password generata
*/

// SVOLGIMENTO
// 1 - Prendo l'elemento dalla pagina
const passwordSubject = document.getElementById("name");
console.log(passwordSubject);


// 2e3 - Chiedo all'utente come si chiama e lo salvo in variabile
const firstName = prompt("Qual è il tuo nome?" , "alessandro");
console.log(firstName);


// 4e5 - Chiedo all'utente il suo cognome e lo salvo nella variabile
const lastName = prompt("Qual è il tuo cognome?" , "lembo");
console.log(lastName);


// 6e7 - Chiedo all'utente il suo colore preferito e lo salvo in variabile
const colorChoosen = prompt("Qual è il tuo colore preferito?" , "verde");
console.log(colorChoosen);


// 8 - Compongo la password
const password = firstName + lastName + colorChoosen + "21";
console.log(password);


// 9 - Inserico la password generata nella pagina
passwordSubject.innerText = password;