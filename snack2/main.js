/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/
// chiedere due parole all'utente

//parola1
const word1 = prompt('digita la prima parola');
//console.log(word1);

//parola2
const word2 = prompt('digita la prima parola');
//console.log(word2);


if (word1.length > word2.length) {
    console.log(word2 , word1);
    
} else if (word2.length > word1.length) {
    console.log(word1 , word2);


} else {
    console.log('le du parole hanno la stessa lungezza' , word1 , word2)
}