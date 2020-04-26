const url = "https://api.rawg.io/api/games/4200";

fetch(url)
.then(function(response) {
    return response.json()
  })

  .then(function(json) {
    createGameDetails(json)
  })

  .catch(function(error) {
    console.dir(error)
  })

function createGameDetails(json) {
    console.dir(json);

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const image = document.querySelector(".image");
    if (json.background_image) {
        image.style.backgroundImage = `url("${json.background_image}")`
    } else if (json.background_image_additional) {
        image.style.backgroundImage = `url("${json.background_image_additional}")`
    }

    const description = document.querySelector(".description");
    description.innerHTML = json.description
}