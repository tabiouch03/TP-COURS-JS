let nbcopie = 30;

if (nbcopie <= 10) {
    prix = nbcopie * 0.1;
} else if (nbcopie > 11) {
    prix = (10*0.1) + ((nbcopie - 11) * 0.09);
} else if (nbcopie > 20) {
    prix = (10 * 0.1) + (10*0.09) + ((nbcopie - 20) * 0.08);
}

console.log(prix);
