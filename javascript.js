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
if (eta <1){
    alert("Sei troppo bimbo");
}

var prezzoBase =0.21;

var prezzoTotale= prezzoBase * km;

var sconto= 0;
var prezzoFinale = prezzoTotale - sconto;
if (eta <= 18) {
    var sconto = prezzoTotale * 20 / 100 ;
    var tipoBiglietto = "junior"
} else if (eta >= 65) {
    var sconto = prezzoTotale * 40 / 100;
    var tipoBiglietto ="Senior"
} else {
    var tipoBiglietto = "Base"
}

document.getElementById("answer").innerHTML = 
"ciao il prezzo del tuo biglietto " + tipoBiglietto + " è " + prezzoFinale.toFixed(2) + " euro";




