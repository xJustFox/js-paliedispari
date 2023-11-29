// numero randomico
function randNum() {
    return Math.floor(Math.random()* 5 + 1);
}

// somma numeri del giocatore e del bot
function sumNum(num1, num2) {
    return num1 + num2;
}

// controllo somma se pari o dispari
function evenOrOdd(sumNum) {
    if (sumNum % 2 == 0) {
        return true;
    } 
    else{
        return false;
    }
}

let userChoice = prompt("Pari o Dispari?");

while (userChoice.toLowerCase() != "pari" && userChoice.toLowerCase() != "dispari") {
    alert("Selezione non valida, selezionora esclusivamente 'pari' o 'dispari'");
    
    userChoice = prompt("Pari o Dispari?");
}

let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (userNum > 5) {
    alert("Hai inserito un numero maggiore di 5, non va bene...");
    
    userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

let pcNum = randNum();
let sum = sumNum(userNum, pcNum);
let result = evenOrOdd(sum);

alert("l'avversario tira " + pcNum);

if (result == true && userChoice.toLowerCase() == "pari") {
    alert(`La somma è ${sum}, Hai vinto!`);
} 
else if (result == false && userChoice.toLowerCase() == "dispari") {
    alert(`La somma è ${sum}, Hai vinto!`);
}
else{
    alert(`La somma è ${sum}, Hai perso!`);
}

console.log(userChoice);
console.log(userNum);
console.log(pcNum);
console.log(sum);



