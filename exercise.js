/*Inserisci i km e la tua età*/
const kmNum = prompt('Inserisci il numero di chilometri che si vuole percorrere');
const ageUser = prompt('Inserisci la tua età');
let totale = (kmNum * 0.21);
let sconto;




if (ageUser < 18){
    sconto = (totale *0.2);

}   else if (ageUser >= 65){
    sconto = (totale *0.4);
}
else{
    sconto = 0
}

let finalPrice = (totale-sconto);
console.log('Il prezzo finale è ' + finalPrice + '€');

document.getElementById('total').innerHTML = 'Il prezzo finale è ' + finalPrice + '€';


     

