/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
-- Che ci sia un array da qualche parte?
-- Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


/* // Chiedere all'utente la sua email
const email = (prompt('Inserisci la tua email'));
console.log(email); */

// Creare una lista
const listEmail = [
    'boolean@gmail.com',
    'javascript@gmail.com',
    'vscode@gmail.com'
];
console.log(listEmail);
// Seleziono ogni elemento in console
for (let i = 0; i < listEmail.length; i++) {
    console.log(listEmail[i]);
}

//Seleziono l'input dalla DOM
const buttonElement = document.querySelector('button')
// Creo un event listner
buttonElement.addEventListener('click', function () {
    const emailInputElement = document.getElementById('emailInput').value
    console.log(emailInputElement);
    const accessEmail = document.querySelector('p')
    console.log(accessEmail);
    let access;

    for (let i = 0; i < listEmail.length; i++) {
        if (listEmail[i] == emailInputElement) {
            console.log('Puoi accedere ');
            i = listEmail.length
            accessEmail.innerHTML = 'Email presente, puoi accerdere';
        } else {
            access = 'Non puoi accedere'
            console.log('Email non presente, non puoi accedere');
            accessEmail.innerHTML = access;
        }
    }
})

const numberPc = document.getElementById('computer');
const numberPlayer = document.getElementById('player');
const result = document.getElementById('result');
const buttonGioca = document.getElementById('gioca')
buttonGioca.addEventListener('click', function () {
    let numberCasualPlayer = Math.floor(Math.random() * 6) + 1;
    let numberCasualPc = Math.floor(Math.random() * 6) + 1;
    console.log(`Player ${numberCasualPlayer}`);
    numberPlayer.innerHTML = numberCasualPlayer;

    console.log(`Player PC ${numberCasualPc}`);
    numberPc.innerHTML = numberCasualPc;


    if (numberCasualPlayer > numberCasualPc) {
        console.log('Vince il player');
        result.innerHTML = 'Hai vinto'
    } else if (
        numberCasualPlayer < numberCasualPc) {
        console.log('Vince il Pc')
        result.innerHTML = 'Hai perso'
    } else { 
        console.log('Hai pareggiato');
        result.innerHTML = 'Hai pareggiato'
     }
})





//Genero un numero casuale da 1 a 6















