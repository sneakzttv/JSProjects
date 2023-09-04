// Declare product html var for gernerating html
let productsHTML = '';

// For each loop to generate html, append produtsHTMLS var with the accumulator pattern
products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
        ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary
        js-add-to-cart"
        data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

// Append html with the generated HTML above
document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;
// Find all cart buttons and allow adding to cart interactivity using data attributes via event listener
  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        // Product name via data attraibute
        const productId = button.dataset.productId;
        // Matching item var
        let matchingItem;
        // Loop through each item in the cart and check if we have a matching item
        cart.forEach((item) => {
          if (productId === item.productId) {
            matchingItem = item;
          }
        });
        // Increase matching item quantity else add it to the cart
        if (matchingItem) {
          matchingItem.quantity ++;
        } else {
          cart.push({
            productId: productId,
            quantity: 1
          });
        }
        console.log(cart);
      });
    });