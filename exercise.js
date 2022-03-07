/*Inserisci i km e la tua età*/
const kmNum = prompt('Inserisci il numero di chilometri che si vuole percorrere');
const ageUser = prompt('Inserisci la tua età');
let totale = (kmNum * 0.21);
let sconto;



if (!isNaN(kmNum) && !isNaN(ageUser)){

}else{
    alert('Hai inserito valori non numerici');
}

/*Se hai meno di 18 anni hai uno sconto del 20%, se hai più di 65 anni hai uno sconto del 40%*/
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

document.getElementById('total').innerHTML = 'Il prezzo finale è ' + finalPrice.toFixed(2) + '€';


     

