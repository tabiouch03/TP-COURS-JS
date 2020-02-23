let ageHomme = 35

function impotHomme() {

    if (ageHomme >= 18) {
        console.log('Monsieur doit payer ces impots !');

    } else {
        console.log('Monsieur est trop jeune pour payer ces impots');

    }

}

let ageFemme = 10

function impotFemme() {

    if (ageFemme >= 18 && ageFemme <= 35) {
        console.log('Madame doit payer ces impots !');

    } else {
        console.log('Madame ne doit pas payer ces impots');

    }

}

impotHomme();
impotFemme();