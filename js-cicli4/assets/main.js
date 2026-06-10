let i = 0;
const tentativiMassimi = 3;

while (i < tentativiMassimi) {
    let password = prompt(`Inserisci la password (${tentativiMassimi - i} tentativi rimasti)`);

    if (password === "password") {
        console.log("Benvenuto");
        break;
    } else
        i++;
    if (i < tentativiMassimi) {
        console.log("Password errata, riprova.");
    } else {
        console.log("Bloccato");
    }
}
