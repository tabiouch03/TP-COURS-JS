// Créer une fonction abracadabra qui ne contiendra aucun paramètre.

// Demander le prénom, le nom et l'age de notre utilisateur grâce à une boîte de dialogue.

// Stocker ces trois informations grâce à trois variables : prenom, nom et age (ne compliquons pas les choses !)

// Afficher, toujours grâce à une boîte de dialogue, la phrase "Sapristi ! On ne m'avait pas prévenu que c'était vous, [prenom] !
// Euh... Je veux dire... Monsieur le grand magicien [nom] ! Cela fait déjà [age] ans que vous faites rayonner notre contrée !".


function ageConfirmation() {

    if (age = prompt("Quel est votre age ?")) {
        confirm("Etes vous sur d'avoir " + age + " ans ?");
    }

    if (prenom = prompt("Quel est votre prénom ?")) {
        confirm("Etes vous sur d'étre " + prenom + " ?")
    }

    if (nom = prompt("Quel est votre nom ?")) {
        confirm("etes vous sur de votre nom " + nom + " ?")
    }

    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous," + prenom + " ! Euh... Je veux dire... Monsieur le grand magicien " + nom + " ! Cela fait déjà " + age +  " ans que vous faites rayonner notre contrée !")

}

ageConfirmation();