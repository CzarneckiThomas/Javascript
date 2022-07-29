console.log("Hello World");

// var helloWorldH1 = document.createElement("h1");
// helloWorldH1.innerHTML = "Hello world!";
// document.body.appendChild(helloWorldH1);


var helloWorldH1 = document.createElement("h1");
helloWorldH1.innerHTML = "Hello world";
document.querySelector("#greetings").appendChild(helloWorldH1);


var students = ["Alexandre.C","Alexandre.B","Benoît","Donatien","Hugo","Myriam","Youcef","Nicolas","Vlad",
"Quentin rmc","Quentin Kiou","Steven","Loïc","Julian","Maxence","Thomas","Amandine", "Tristan"];


//Lister les nom du tableau dans la console, puis dans le HTML, MA REPONSE
var greetingsDiv = document.querySelector("#greetings");


var length = students.length;
for (var i = 0; i < length; i++) {
    console.log(students[i]);  
    greetingsDiv.innerHTML += students[i] + "<br>";
}

students.forEach(function(student) {

})

// LE CORRIGE , avec la boucle for Each:
var studentsDiv = document.querySelector("#studentsDiv");

students.forEach(function (student) {
    console.log(student)
    studentsDiv.innerHTML += student + ", ";
});

// Créez une balise ul id="studentsList" et ajoutez y les étudiants sous forme [li]
// La notion d’ajout est importante ! Un simple = ne suffira pas ! Il faudra passer 
// par += qui permet les ajouts.

var studentsUL = document.querySelector("#studentsUL");

students.forEach(function (student) {
    studentLI = document.createElement("li");
    studentLI.id = student; // ligne pas obligatoire
    studentLI.innerHTML = student;
    studentsUL.appendChild(studentLI);
});


//Ajouter dynamiquement un background color en cliquant
function loadStyle(event) {
    event.target.className = "dynamicStyle";
}

document.querySelector("main").addEventListener("click", loadStyle)



//Additioner 2 nombre entrés dans une balise input

function calculator(valeur1, valeur2){
    valeur1 = parseInt(document.querySelector("#valeur1").value);
    valeur2= parseInt(document.querySelector("#valeur2").value);
    const result = valeur1+valeur2;
    document.querySelector("#result").innerHTML = `Resultat: ${result}`;
}
document.querySelector("#calcul").addEventListener("click", calculator);


// Cumul, moyenne
// On a un champ d’input.
//  À chaque fois que l’utilisateur y entre une valeur (validée en appuyant sur un bouton par exemple), 
//  vous affichez le cumul de toutes
//  les valeurs entrées depuis le début ainsi que la moyenne des valeurs entrées.

// Créez un tableau pour stocker les valeurs (var inputVals = [];
// var inputVals = [];

// Pour ajouter une valeur à un tableau : 
// inputVals.push(parseInt(document.querySelector("#myInput").value));


const result = document.querySelector("#cummul");
const moyenne = document.querySelector("#moyenne");
let inputVals = [];
total = 0;
let average;

document.querySelector("#validate").addEventListener("click", () => {
  const value = parseInt(document.querySelector("#nombre").value);
  // ajouter le valeur dans un tableau
  inputVals.push(value);
  // pour afficher la valeur rentrée
  result.innerHTML = inputVals;
  // pour cummule tout les valeurs rentée
  total += value;
  // pour afficher le total des valeurs
  result.innerHTML = total;
  // pour avoir moyenne de tout les valeur rentrées
  average = total / inputVals.length;
  // pour afficher le moyenne de valeur rentrée
  moyenne.innerHTML = avarege;
});