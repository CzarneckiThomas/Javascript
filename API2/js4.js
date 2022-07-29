//Exercice API : Poissons

var loadFishs = function(event) {
    fetch("https://www.fishwatch.gov/api/species")
       .then(function (response) {
           return response.json();

       })

       .then(function (jsonResponse) {
           console.log(jsonResponse)
           fishsUL = document.querySelector("#fishs");
           jsonResponse.forEach(function(fish) {
               console.log(fish);
                fishLI = document.createElement("li");
                fishImage = document.createElement("img");

                fishLI.innerHTML = fish["Scientific Name"] 
                                        + " " + fish["Color"];
                if(fish.hasOwnProperty("Image Gallery") && fish["Image Gallery"] != null) {
                    fishImage.src = fish["Image Gallery"][0]["src"];
                }
                
                fishLI.appendChild(fishImage)
                fishsUL.appendChild(fishLI);
                
           });

       })
}

document.addEventListener("readystatechange", loadFishs);