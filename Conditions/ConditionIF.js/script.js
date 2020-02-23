// verifié l'age de l'utilisateur
// -18 : Vous n'êtes pas majeur
// 18 et 20 : Vous etes majeur en France
// 21+ : Vous etes majeur partout !

age = 22;

if (age < 18) {
    console.log("vous n'etes pas majeur");
} 
else if(age >= 18, age <= 20) {
    console.log("Vous etes majeur en france");
    
}
else {
    console.log("vous etes majeur partout !");
}