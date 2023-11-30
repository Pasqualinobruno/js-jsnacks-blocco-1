/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

//Crea un array vuoto.
const numbers = []
//Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    const yournumbers = prompt('Inserisci in numero')
    console.log(yournumbers)
    if (yournumbers % 2 == 0) {
        console.log(yournumbers, "è pari");
    } else {       
        numbers.push(yournumbers);
        console.log(numbers, "è dispari");
        
    }
    
}
console.log(numbers);