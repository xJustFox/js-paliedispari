function palindromeWord(word){
    word = word.toLowerCase()
    let reverseWord = word.split("").reverse().join("");

    if (reverseWord == word) {
        alert(`La parola "${reverseWord}" è palindroma`);
    } 
    else {
        alert(`La parola "${word}" non è palindroma`);
    }

    console.log(reverseWord);
}


let userWord = prompt("Inserici una parola per verificare se è palindroma");
palindromeWord(userWord);