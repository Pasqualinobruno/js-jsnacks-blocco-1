/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let sum = 0;

for (let i = 1; i <= 10; i++) {
    const numb = Number(prompt('digita un numero'));
    console.log(numb);

    sum = sum + numb



}
console.log(sum);