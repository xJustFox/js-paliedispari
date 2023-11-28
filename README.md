### Esercizio di oggi:
nome repo: `js-paliedispari`

#### Palidroma
Chiedere all’utente di inserire una parola <br>
Creare una funzione per capire se la parola inserita è palindroma

#### Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. <br>
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). <br>
Sommiamo i due numeri <br>
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) <br>
Dichiariamo chi ha vinto. 


#### Pari e Dispari - Problem Solving:
- 1 Definisci la funzione `randNum()` che genererà un numero randomico da 1 a 5; <br>
- 2 Definisci la funzione `sumNum(num1, num2)` che sommera i numeri del giocatore e del bot;<br>
- 3 Definisci la funzione `everOrOdd(sumNum)` che controllerà se la somma è pari o dispari;<br>
- 4 Inizializza la variabile `userChoise`;<br>
    - 4.1 Permetti all'utente di inserire del testo;<br>
- 5 Inizializza la variabile `userNum`;<br>
    - 5.1 Permetti all'utente di inserire un numero;<br>
- 6- Inizializza la variabile `pcNum`;<br>
    - 6.1 Assegnagli la funzione `randNum()`;<br>
- 7 Inizializza la variabile `sum`;<br>
    - 7.1 Assegnagli la funzione `sumNum(userNum, pcNum)`, inserendo come valori della funzione `userNum` e `pcNum`;<br>
- 8 Utilizza un loop `while` per controllare che il giocatore inserisca un numero da 1 a 5;<br>
- 9 Visualizzare a schermo il numero tirato dal bot;<br>
- 10 Utilizza un `else if` per decretare il vincitore;<br>
    - 10.1 Visualizzare a schermo il vincitore;

#### Pari e Dispari - Problem Solving:
- 1 Definisci la funzione `palindromeWord(word)`;<br>
    - 1.1 Inizializza la variabile `reverseWord`;<br>
        - 1.1.1 Assegna il valore `word` utilizzando su di essa `.split("") .reverse() .join("")`;<br>
    - 1.2 Utilizza un `if else` per controllare se la parola è palindroma;<br>
        - 1.2.1 Visualizzare a schermo il risultato;<br>
- 2 Inizializza la variabile `userWord`;<br>
    - 2.1 Permetti all'utente di inserire del testo;<br>
- 3 Richiama la funzione `palindromeWord(userWord)` dandogli come valore `userWord`;<br>