// search.js
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search__input");
  const button = document.querySelector(".search__submit");
  const resultCount = document.querySelector(".search__result-count");
  const gallery = document.querySelector(".gallery-container");

  button.addEventListener("click", async () => {
    const keyword = input.value.trim().toLowerCase();

    if (!keyword) {
      resultCount.textContent = "Please enter a keyword.";
      return;
    }

    try {
      // Fetch the JSON file (adjust path if needed)
      const response = await fetch("./fake-products.json");
      if (!response.ok) throw new Error("Could not load products.json");

      const products = await response.json();

      // Filter by keyword in description
      const results = products.filter(product =>
        product.description.toLowerCase().includes(keyword)
      );

      // Show result count
      resultCount.textContent = `${results.length} product(s) found`;

      // Clear previous results
      gallery.innerHTML = "";

      // Render results
      results.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.img}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p>⭐ ${product.stars} | ${product.price}</p>
        `;

        gallery.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      resultCount.textContent = "Error loading products.";
    }
  });
});

