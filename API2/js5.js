var loadMounts = function(event) {
    fetch("https://ffxivcollect.com/api/mounts")
       .then(function (response) {
           return response.json();

       })

       .then(function (jsonResponse) {
        console.log(jsonResponse)
        mountsCard = document.querySelector("#mounts");
        jsonResponse.results.forEach(function(mount) {
            console.log(mount);
            mountCard = document.createElement("div");
             mountH2 = document.createElement("h2");
             mountImage = document.createElement("img");
             mountDescription = document.createElement("p");
    

             mountCard.className = "card";
             mountH2.innerHTML = mount["name"];
             mountImage.src = mount["image"];
             mountDescription.innerHTML = mount["description"];
             
             mountCard.appendChild(mountImage)
             mountCard.appendChild(mountH2)
             mountCard.appendChild(mountDescription)
             mountsCard.appendChild(mountCard);
        });

    })
}

document.addEventListener("readystatechange", loadMounts);
