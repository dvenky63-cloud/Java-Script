let apiStatus = document.querySelector('.api');
let finallyStatus = document.querySelector('.finally-status');
let productContainer = document.querySelector('#product-container');

apiStatus.innerHTML = "Loading products...";

fetch('https://fakestoreapi.com/products')
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then(function(products) {
    apiStatus.innerHTML = "";

    products.forEach(function(product) {
      let card = document.createElement('div');
      card.className = "card";

      let slicedTitle = product.title.slice(0, 50);
      let slicedDesc = product.description.slice(0, 100);

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${product.image}" alt="${slicedTitle}">
        </div>
        <p class="product-id">ID: #${product.id}</p>
        <h2 class="product-title">${slicedTitle}...</h2>
        <p class="product-price">$${product.price}</p>
        <p class="product-desc">${slicedDesc}...</p>
      `;

      productContainer.appendChild(card);
    });
  })
  .catch(function(error) {
    apiStatus.className = "api error";
    apiStatus.innerHTML = "Error: " + error.message;
  })
  .finally(function() {
    finallyStatus.innerHTML = "API request completed";
  });