
function photocopie() {

    let nbcopie = document.getElementById("photo").value;

    if (nbcopie <= 10) {
        prix = nbcopie * 0.1;
    } else if (nbcopie > 10) {
        prix = (10 * 0.1) + ((nbcopie - 10) * 0.09);
    } else if (nbcopie > 20) {
        prix = (10 * 0.1) + (20 * 0.09) + ((nbcopie - 30) * 0.08);
    }

    alert(prix);

}