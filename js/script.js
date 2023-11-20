
let kilometres = prompt('Inserisci qui il numero di chilometri da percorrere');
console.log(kilometres);

let age = prompt("Inserisci qui l'età del passeggero");
console.log(age);

let ticket_price_st = kilometres * 0.21;

if (age < 18) {
    let ticket_price_under = ticket_price_st - ticket_price_st / 100 * 20;
    console.log(ticket_price_under.toFixed(2));
}

else if (age >= 65) {
    let ticket_price_over = ticket_price_st - ticket_price_st / 100 * 40;
    console.log(ticket_price_over.toFixed(2));
}

else {
    console.log(ticket_price_st.toFixed(2))
}