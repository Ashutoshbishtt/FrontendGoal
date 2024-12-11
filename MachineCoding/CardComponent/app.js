const wrapper = document.getElementById("wrapper");

// Fetch products and render cards
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((products) => {
    products.forEach((product) => renderCard(product));
  })
  .catch((error) => {
    console.error("Error:", error);
    wrapper.innerHTML =
      '<p class="error">Failed to load products. Please try again later.</p>';
  });

// Function to render a single product card
function renderCard(product) {
  const card = document.createElement("div");
  card.className = "cardWrapper";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="productImage">
    <div class="cardContent">
      <h2>${product.title}</h2>
      <p>${product.category}</p>
      <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
    </div>
    <div class="cardFooter">
      <span class="price">$${product.price}</span>
      <button class="buyNowButton">Buy Now</button>
    </div>
  `;

  wrapper.appendChild(card);
}
