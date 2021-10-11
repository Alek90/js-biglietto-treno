// Domanda quanti km si devono percorrere

const journey = Number (prompt ("Quanti km desidera percorrere?"))
/* console.log(journey); */

// Domanda l'età

const user_age = Number (prompt ("Quanti anni ha?"))
/* console.log(user_age); */

// Prezzo base biglietto

const price_km = 0.21


// Calcola costo biglietto

const price_ticket = price_km * journey
/* console.log(price_ticket); */

let price_your_ticket

   // Se età < 18 applica 20% sconto
   if (user_age < 18) {
        price_your_ticket = price_ticket * 0.8
   }

   // Se età > 65 applica 40% sconto
   else if (user_age > 65) {
        price_your_ticket = price_ticket * 0.6
   }

   // Altrimenti prezzo intero

    else {
        price_your_ticket = price_km *      journey
    }
/* console.log(price_your_ticket); */ 

// Mostra prezzo corrispondente

document.getElementById("your_ticket").innerHTML = `€ ${price_your_ticket.toFixed(2)}`