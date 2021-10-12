// VARIABILI

// Domanda quanti km si devono percorrere
const journey = Number (prompt ("Quanti km desidera percorrere?"));

// Domanda l'età
const user_age = Number (prompt ("Quanti anni ha?"));

// Prezzo base biglietto
const price_km = 0.21;

// Costo biglietto assoluto
const price_ticket = price_km * journey;

// Costo biglietto relativo
let price_your_ticket;


// CONDIZIONI DETERMINANTI

if (user_age < 18) {  // Se età < 18 applica 20% sconto
    price_your_ticket = price_ticket * 0.8
}else if (user_age > 65) {  // Se età > 65 applica 40% sconto
    price_your_ticket = price_ticket * 0.6
}else {  // Altrimenti prezzo intero
    price_your_ticket = price_ticket
};


//  RISULTATO

// Mostra prezzo corrispondente

document.getElementById("your_ticket").innerHTML = `€ ${price_your_ticket.toFixed(2)}`;


//  UTILITA'

// console.log utilizzati in fase di programmazione

/* console.log(journey); */
/* console.log(user_age); */
/* console.log(price_ticket); */
/* console.log(price_your_ticket); */ 