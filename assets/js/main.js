/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
-- Che ci sia un array da qualche parte?
-- Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


// Chiedere all'utente la sua email
const email = (prompt('Inserisci la tua email'));
console.log(email);

// Creare una lista
const listEmail = [
    'boolean@gmail.com',
    'javascript@gmail.com',
    'vscode@gmail.com'
];
console.log(listEmail);
// Seleziono ogni elemento in console
for (let i = 0; i < listEmail.length ;i++){
    console.log(listEmail[i]);
}

//Seleziono l'input dalla DOM
const buttonElement = document.querySelector('button')
// Creo un event listner
buttonElement = document.addEventListener('click', function() {
    const emailInputElment = document.getElementById('emailInput').value
})





//Genero un numero casuale da 1 a 6
let numberCasual = Math.floor(Math.random()*6);
//Loggo in console il numero casuale 
console.log(numberCasual, 'Numero Casuale');

// Creo una lista di numeri casuali
const casualN = [
    1, 2, 3, 4, 5, 6 ];
console.log(casualN);

 for(let i = 0 ; i < casualN.lenght; i++) {
    console.log(casualN[i]);
} 