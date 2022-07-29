//Exdercice 1 ALLER chercher une image (JSON)

// et exercice ne présente que peu d’intérêt: ce que nous allons faire pourrait
//  être fait sans fetch, en modifiant la valeur src de la balise image directement.
//   Le but est de vous apprendre fetch sans avoir à apprendre JSON immédiatement
// Nous allons récupérer dynamiquement le logo de Wikipédia 
// (https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png)
// ➡ Créer une page HTML, mettre une image avec un id et mettre un bouton
// ➡ Créer un script JS, ajouter un listener click au bouton et lui donner le code ci-dessous

var myButton = document.querySelector("#myButton");
var myImage = document.querySelector("#myImage");

myButton.addEventListener("click", function (event) {
    var myImage = document.querySelector("#myImage");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
            myImage.alt = "Logo Wikipédia";
        });
});



// Exercice 2
// Vous reprenez l’ancien exercice affichant la liste des étudiants (exo 5 de JS1)
//  et vous refaites la même en affichant plus d’formations et en exploitant la 
//  donnée JSON fournie ci-dessus.
// Amélioration: la même mais en fetchant la liste des étudiants depuis 
//  https://pachyderme.net/students.json
// ➡ On va recevoir du JSON: le premier then contiendra 
// donc response => response.json()
// ➡ C’est magique, la fonction du second then est notre JSON déjà parsé ! 
// Rien à faire, c’est un objet JS valide

var students = ["Alexandre.C","Alexandre.B","Benoît","Donatien","Hugo","Myriam","Youcef","Nicolas","Vlad",
"Quentin rmc","Quentin Kiou","Steven","Loïc","Julian","Maxence","Thomas","Amandine", "Tristan"];

// var studentsDiv = document.querySelector("#students");
const header = document.querySelector('#header')
const carte = document.querySelector('#carte')


fetch("https://pachyderme.net/students.json")
    .then(response => response.json())
    .then(function (studentsJSON) {
        console.log(studentsJSON);
        studentsJSON.students.forEach(function (student)
        {
            console.log(student)


            for (var i = 0; i < studentsJSON.students.length; i++ ){

                let card = document.createElement("div")
                header.appendChild(card)

                let divfirstname = document.createElement("div")
                divfirstname.classList.add('text-red-600')

                divfirstname.text = `Prenom : ${studentsJSON.students[i].firstname}`
                card.appendChild(divfirstname).innerHTML = divfirstname.text

                let divlastname = document.createElement("div")
                divlastname.classList.add('text-green-900')

                divlastname.text = `Nom : ${studentsJSON.students[i].lastname}`
                card.appendChild(divlastname).innerHTML = divlastname.text

                let divsex = document.createElement("div")
                divsex.classList.add('text-blue-700')

                divsex.text = `Sexe : ${studentsJSON.students[i].sex}`
                card.appendChild(divsex).innerHTML = divsex.text

            }
        })
    });


