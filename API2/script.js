//https://framagit.org/popschool-lens/cours-philippe/-/blob/master/undefined/JS2.md

// Exercice 1 : aller chercher une image

// la fameuse fonction loadImage
// les fonctions de callback (par exemple celles appellées par un eventListener
// ) recoivent un paramatre : le contexte de l'evenement

var loadImage = function (event) {
    var myImage = document.querySelector("#myImage");
    // fetch() est une fonction native JS pour dire daller chercher quelque choses
    // le premier .then : c'est ce qui se passe quand JS a ramené le quelque chose.
    // la fonction de callback du premier then cest ce qu'on va faire au quelque chose qui a eté ramené
    // la seconde fonction de callback c'est ce qu'on va faire du quelque chose exploitable

    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
    .then(function (response) {
        myImage.alt = "Transformation en cours";
        return response.blob();
    })
    .then(function (blobedResponse) {
        var blobedResponseURL = URL.createObjectURL(blobedResponse);
        myImage.alt = "Logo Wikipedia";
        myImage.src = blobedResponseURL;
    });
}

var myButton = document.querySelector("#myButton");
//Load image est la foncton appellé quand on clique sur le bouton
myButton.addEventListener("click",loadImage);


// Exercice 2 : liste des étudiants


