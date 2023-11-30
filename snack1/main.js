console.log('bye');
/* 
Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore..
*/
const number1= prompt('inseriesici un numero')
//console.log(number1);
const number2= prompt('inseriesici un numero')
//console.log(number2);

if (isNaN(number1)) || isNaN(number2) {
    alert('scrivi un numero')
    
} else if (number1 > number2) {
    document.querySelector('#number').innerHTML = number1;
    
} else if (number2 > number1) {
    document.querySelector('#number').innerHTML = number2;

} else {
    document.querySelector('#number').innerHTML = 'I numeri sono uguali';

}