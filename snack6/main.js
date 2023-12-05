/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

//Chiedi un numero di 4 cifre all’utente
const number4 = prompt("scrivi un numero di quattro cifre")
console.log(number4);
if (number4.length > 4 || number4.length < 4) {
    alert("questo non è un numero di quattro cifre")

} else {
    console.log("il numero è coretto");
    let sum = 0
    console.log(sum);
    for (let i = 0; i < (number4.length-1); i++) {
        const element = number4[i];
        console.log(element)
        sum = sum + element
        
    }
    console.log(sum);


}



    /* for (let i = 0; i < 4; i++) { */
    /*      */

    /*      */

    /* } */
    //calcola la somma di tutte le cifre che compongono il numero */
    

/* if (number4 % 10 == 0) { */
/*     console.log(number4); */
/*  */
/*      */
/* } else { */
/*     somma = number4 +  */
/*  */
/* } */



