





let cakes = [];

async function loadCakes() {
const response = await fetch("./data/fake-products.json");
  cakes = await response.json();
}

export function searchCakes(keyword) {
  return cakes.filter(cake =>
    cake.description.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No cakes found.</p>";
    return;
  }

  results.forEach(cake => {
    // Create a star rating string (★ for filled, ☆ for empty)
    const stars = "★".repeat(cake.stars) + "☆".repeat(5 - cake.stars);

    resultsDiv.innerHTML += `
      <div class="cake-card">
        <img src="${cake.img}" alt="${cake.title}" class="cake-image" />
        <h3>${cake.title}</h3>
        <p>${cake.description}</p>
        <p><strong>${cake.price}</strong></p>
        <p class="cake-stars">${stars}</p>
      </div>
    `;
  });
}


document.addEventListener("DOMContentLoaded", async () => {
  await loadCakes(); // load JSON before searching

  const searchInput = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchBtn");

  searchButton.addEventListener("click", () => {
    const keyword = searchInput.value;
    const results = searchCakes(keyword);
    displayResults(results);
  });
});


export default {
  searchCakes,
  displayResults
};
