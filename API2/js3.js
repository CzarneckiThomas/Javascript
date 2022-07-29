//https://framagit.org/popschool-lens/cours-philippe/-/blob/master/undefined/JS2.md


//EXERCICE 3 : LOCAL STORAGE

//Notez Bien : #changePromotionName" ," deletePromotionName" sont les valeurs id dans le code HTML
//c'est pour ca qu'il y a des guillement. Ne pas confondre avec la variable qui 
//porte le meme nom.

function changePromotionName(event) {
    //on recupere la valeur entrée dans l'input
    var promotionName = promotionNameInput.value;
    // on l'enregistre en localstorage avec comme nom de stockage : PromotionName
    localStorage.setItem("PromotionName", promotionName)
    //on modifie le champ d'input
    promotionNameInput.value = promotionName;
}

function deletePromotionName(event) {
    //on supprime du localstorage l'enregistrement PromotioName
    localStorage.removeItem("PromotionName")
    //on vide le champ d'input
    promotionNameInput.value = "";
}

var promotionNameInput = document.querySelector("#promotionName");
var changeButton = document.querySelector("#changePromotionName");
var deleteButton = document.querySelector("#deletePromotionName");

changeButton.addEventListener("click", changePromotionName);
deleteButton.addEventListener("click", deletePromotionName);

// ici du code qui va s'executer a la fin du chargement DOM (a cause du defer
// indiqué dans la balise script)

//on commence par recuperer ce qui est, ou non, sauvegardé
//On affecte ce qu'on a recuperé dans la valeur de l'input #promotionName
var promotionName = localstorage.getItem("PromotionName");
promotionNameInput.value = promotionName;
