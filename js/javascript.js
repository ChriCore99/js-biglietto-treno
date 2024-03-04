// chiedere quanti chilometri si dovrà percorrere

const numeroKm = parseFloat(prompt('inserisci i km da percorrere'));

// moltiplicare il numero dei km per 0.21€

let costoIniziale = numeroKm * 0.21;

// chiedere l'età del passeggiero

const età = parseFloat(prompt('inserisci la tua età'));

// applicare uno sconto del 20% o del 40% se nei parametri

if (età < 18){
    console.log(costoIniziale * 0.20)
} else if (età > 60){
    console.log(costoIniziale * 0.40)
} else {
    console.log(costoIniziale * 1)
}

// dire il prezzo del biglietto arrotondato al centesimo