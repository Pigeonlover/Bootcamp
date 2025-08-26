// Get API data

async function getRandomAnimeImage() {
  const response = await fetch("https://nekos.best/api/v2/neko");
  const json = await response.json();
  const wrangledData = json.results[0].url;

  return wrangledData;
}

function createAnimeImage(animeUrl) {
  const animeImageContainer = document.getElementById("random-image-box");
  const animeImage = document.createElement("img");
  animeImage.src = animeUrl;
  animeImage.alt = "A randomly generated anime image.";
  animeImageContainer.appendChild(animeImage);
}

async function addAnimeDataToImage() {
  const animeData = await getRandomAnimeImage();
  createAnimeImage(animeData);
}

addAnimeDataToImage();
