let totale = 0;
let prezzo;

do {
    prezzo = parseFloat(prompt("Inserisci il prezzo del prodotto (o 0 per terminare):"));

    if (!isNaN(prezzo)) {
        totale += prezzo;
    }
} while (prezzo !== 0);

alert("Il totale della spesa è: " + totale);
console.log("Il totale della spesa è: " + totale);