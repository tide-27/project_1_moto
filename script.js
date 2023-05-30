window.addEventListener("DOMContentLoaded", (event) => {
  fetch("data.js")
    .then((response) => response.json())
    .then((data) => {
      displayProducts(data);
    })
    .catch((error) => {
      console.error("Fehler beim Laden der Daten:", error);
    });
});

function displayProducts(products) {
  const productsContainer = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-card");
    productElement.innerHTML = `
            <img src="${product.url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.EngineDisplacement}</p>
            <p>Preis: ${product.price} EUR</p>
            <button onclick="addToCart('${product.name}',${product.price})">In den Warenkorb</button>
            <hr>
        `;
    productsContainer.appendChild(productElement);
  });
}

function addToCart(name, price) {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  const li = document.createElement("li");
  li.textContent = `${name} - ${price} EUR`;
  cartItems.appendChild(li);

  const currentTotal = parseFloat(cartTotal.textContent.split(" ")[1]);
  const newTotal = currentTotal + price;
  cartTotal.textContent = `Gesamt: ${newTotal.toFixed(2)} EUR`;

  showCart();
}

function showCart() {
  const cart = document.getElementById("cart");
  cart.classList.remove("hidden");
}

function hideCart() {
  const cart = document.getElementById("cart");
  cart.classList.add("hidden");
}
