function myFunction() {
    let consommable = "chocolat";

switch (consommable) {

    case "pomme de terre":
    case "carotte" : 
        console.log("Ceci est un légume");
        break;

    case "pomme":
    case "banane" :
        console.log("Ceci est un fruit");
        break;

    default:
        console.log("Ceci n'est ni un fruit ni un légume");        
}
}