/*Inserisci i km e la tua età*/
const kmNum = prompt ('Inserisci il numero di chilometri che si vuole percorrere');
const ageUser = prompt ('Inserisci la tua età');
let totale;
let sconto;

if (ageUser < 18){
    totale = (kmNum * 0.21) + '€';
    sconto = 'Hai diritto al 20% di sconto';
    console.log('hai diritto al 20% di sconto, quindi pagherai ' + totale);
} else if (ageUser > 65){
    totale = (kmNum * 0.21) + '€';
    sconto = 'Hai diritto al 40% di sconto';
    console.log('hai diritto al 40% di sconto, quindi pagherai ' + totale);
}
else {
    totale = (kmNum * 0.21) + '€';
    sconto = '';
    console.log('Questo è quanto dovrai pagare ' + totale)
}


     

