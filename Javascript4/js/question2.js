  const url = "https://api.rawg.io/api/games";

fetch(url)
.then(function(response) {
    return response.json()
})

.then(function(json) {
    createGames(json);
})

.catch(function(error) {
    console.log(error);
})

function createGames(json) {
    const resultsDiv = document.querySelector(".results");
    const results = json.results;

    let html = "";

    results.forEach(function (results) {
        html += `<div class="game">
        <h2>${results.name}</h2>
        <img src=${results.background_image} alt="Name of game">
        </div>`
    })

    resultsDiv.innerHTML = html;
}