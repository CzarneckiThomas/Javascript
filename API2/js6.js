var loadAmiibos = function(event) {
    fetch("https://www.amiiboapi.com/api/amiibo/?showgames")
       .then(function (response) {
           return response.json();

       })

       .then(function (jsonResponse) {
        console.log(jsonResponse)
        amiibosCard = document.querySelector("#amiibos");
        jsonResponse.amiibo.forEach(function(amiibo) {
            // console.log(amiibo);
            amiiboCard = document.createElement("div");
            amiiboH2 = document.createElement("h2");
            amiiboImage = document.createElement("img");
            

            amiiboCard.className = "card";
            amiiboH2.innerHTML = amiibo["name"];
            amiiboImage.src = amiibo["image"];
            
            amiiboCard.appendChild(amiiboImage)
            amiiboCard.appendChild(amiiboH2)
            amiibosCard.appendChild(amiiboCard);
        });

    })
}

document.addEventListener("readystatechange", loadAmiibos);