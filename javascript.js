var eta =prompt("Quanti anni hai?");
console.log(eta);

var km =prompt("quanti km devi percorrere?");
console.log(km);

if (!eta) {
    alert("Manca l'età");
} 

if (!km) {
    alert("manca la quantità di km");
} 

if (isNaN(eta)) {
    alert("gli anni vanno indicati con un numero")

} 

if (isNaN(km)) {
    alert("i km vanno indicati con un numero")
}

var prezzoBase =0.21;

var prezzoTotale= prezzoBase * km;

var sconto= 0;

if (eta <= 18) {
    var sconto = prezzoTotale * 20 / 100 ;
    var prezzoFinale18 = prezzoTotale - sconto;
    document.getElementById("answer").innerHTML = 
    "ciao il prezzo del tuo biglietto è " + prezzoFinale18.toFixed(2) + " euro";
} else if (eta >= 65) {
    var sconto = prezzoTotale * 40 / 100;
    var prezzoFinale65 = prezzoTotale - sconto;
    document.getElementById("answer").innerHTML = 
    "ciao il prezzo del tuo biglietto è " + prezzoFinale65.toFixed(2) + " euro";

} else {
    var prezzoNormale= prezzoBase * km;
    document.getElementById("answer").innerHTML = 
    "ciao il prezzo del tuo biglietto è " + prezzoNormale.toFixed(2) + " euro";
}






