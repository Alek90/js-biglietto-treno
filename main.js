// Domanda quanti km si devono percorrere

const journey = Number (prompt ("Quanti km desidera percorrere?"))
console.log(journey);

// Domanda l'età

const user_age = Number (prompt ("Quanti anni ha?"))
console.log(user_age);

// Prezzo base

const price_km = 0.21


// Calcola costo biglietto

const price_ticket = price_km * journey
console.log(price_ticket);

   // Se età < 18 applica 20% sconto
   if (user_age < 18) {
    price_your_ticket = price_ticket * 0.8
   }

   // Se invece età > 65 applica 40% sconto


console.log(price_your_ticket);   