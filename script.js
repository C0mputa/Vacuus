const gameList = document.getElementById("game-list");
const searchBar = document.getElementById("search-bar");

function displayGames(filteredGames) {
  gameList.innerHTML = '';
  filteredGames.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
      <h2>${game.name}</h2>
      <img src="${game.icon}" alt="${game.name} icon">
      <iframe src="${game.url}" width="300" height="200"></iframe>
    `;
    gameList.appendChild(gameCard);
  });
}

function filterGames() {
  const searchText = searchBar.value.toLowerCase();
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchText));
  displayGames(filteredGames);
}

searchBar.addEventListener("input", filterGames);
displayGames(games);
