const productListContainer = document.getElementById("product-list");
const totalPriceElement = document.getElementById("total-price");

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.setAttribute("data-product-id", product.id);

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.alt = product.name;
  productImage.className = "product-image";

  const productInfo = document.createElement("div");
  productInfo.className = "product-info";

  const productName = document.createElement("h3");
  productName.className = "product-name";
  productName.textContent = product.name;

  const productDescription = document.createElement("p");
  productDescription.className = "product-description";
  productDescription.textContent = product.description;

  const productDetails = document.createElement("div");
  productDetails.className = "product-details";

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = `₹${product.price}`;

  const quantityContainer = document.createElement("div");
  quantityContainer.className = "product-quantity";

  const decreaseBtn = document.createElement("button");
  decreaseBtn.className = "quantity-btn decrease-btn";
  decreaseBtn.textContent = "-";
  decreaseBtn.onclick = () => updateQuantity(product.id, -1);

  const quantityDisplay = document.createElement("span");
  quantityDisplay.className = "quantity-display";
  quantityDisplay.textContent = product.quantity;

  const increaseBtn = document.createElement("button");
  increaseBtn.className = "quantity-btn";
  increaseBtn.textContent = "+";
  increaseBtn.onclick = () => updateQuantity(product.id, 1);

  // Putting everything together
  quantityContainer.appendChild(decreaseBtn);
  quantityContainer.appendChild(quantityDisplay);
  quantityContainer.appendChild(increaseBtn);

  const removeButton = document.createElement("button");
  removeButton.className = "remove-btn";
  removeButton.textContent = "Remove";
  removeButton.onclick = () => removeProduct(product.id);

  productDetails.appendChild(productPrice);
  productDetails.appendChild(quantityContainer);
  productDetails.appendChild(removeButton);

  productInfo.appendChild(productName);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productDetails);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);

  return productCard;
}

// Function to render all products
function renderProducts() {
  productListContainer.innerHTML = "";
  
  cartData.forEach(product => {
    const productCard = createProductCard(product);
    productListContainer.appendChild(productCard);
  });
  
  updateTotalPrice();
}

// Function to update quantity
function updateQuantity(productId, change) {
  const product = cartData.find(item => item.id === productId);
  
  if (product) {
    product.quantity = Math.max(1, product.quantity + change);
    renderProducts();
  }
}

// Function to remove product
function removeProduct(productId) {
  const index = cartData.findIndex(item => item.id === productId);
  if (index > -1) {
    cartData.splice(index, 1);
    renderProducts();
  }
}

// Function to calculate and update total price
function updateTotalPrice() {
  const total = cartData.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
  }, 0);
  
  totalPriceElement.textContent = total;
}

renderProducts();