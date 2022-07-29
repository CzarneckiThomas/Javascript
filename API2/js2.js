//https://framagit.org/popschool-lens/cours-philippe/-/blob/master/undefined/JS2.md
//Exercice 2: lister les etudiants


// var loadStudents = function(event) {
//     fetch("https://pachyderme.net/students.json")
//        .then(function (response) {
//            return response.json();
//        })
//        .then(function (jsonResponse) {
//            studentsUL = document.querySelector("#students");
//            jsonResponse.students.forEach(function(student) {
//                studentLI = document.createElement("li");
//                studentLI.innerHTML = student.firstname + " " + student.lastname;
//                studentsUL.appendChild(studentLI);
//            });

//        })
// }

// // on ecoute l'evenement qui se declenche quand la page est totalement chargée
// // (images,css, js etc. chargés et traités)
// document.addEventListener("readystatechange", loadStudents);

var loadStudents = function(event) {
    fetch("https://pachyderme.net/students.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonResponse) {
            studentsUL = document.querySelector("#students");
            jsonResponse.students.forEach(function (student) {
                studentLI = document.createElement("li");
                    if(student["firstname-latin"] !== undefined) {
                        studentLI.innerHTML = student["firstname-latin"] + " " + student["lastname-latin"];
                    }
                    else {
                        studentLI.innerHTML = student.firstname + " " + student.lastname;
                    }
                    studentsUL.appendChild(studentLI);
                });

        })

}

/* on écoute l’événement qui se déclenche quand la page est totalement chargée 
 * (images, css, js etc. chargés et traîtés) */
document.addEventListener("readystatechange", loadStudents);