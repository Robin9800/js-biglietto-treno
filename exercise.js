/*Inserisci i km e la tua età*/
const kmNum = prompt ('Inserisci il numero di chilometri che si vuole percorrere');
const ageUser = prompt ('Inserisci la tua età');
let totale;
let sconto;

if (ageUser < 18){
    total = (kmNum * 0.21) + '€';
    sconto = 'Hai diritto al 20% di sconto';
} else if (ageUser > 65){
    total = (kmNum * 0.21) + '€';
    sconto = 'Hai diritto al 40% di sconto';
}
else {
    totale = (kmNum * 0.21) + '€';
    sconto = '';
}
     

