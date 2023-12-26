var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
  if (MenuItems.style.maxHeight == '0px') {
    MenuItems.style.maxHeight = '200px';
  } else {
    MenuItems.style.maxHeight = '0px';
  }
}
// let cart = [];
// let cartTotal = 0;

// function addToCart(productName, price) {
//   cart.push({ productName, price });
//   cartTotal += price;
//   updateCart();
// }

// function updateCart() {
//   const cartItemsElement = document.getElementById("cartItems");
//   const cartTotalElement = document.getElementById("cartTotal");

//   cartItemsElement.innerHTML = "";
//   cart.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
//     cartItemsElement.appendChild(li);
//   });

//   cartTotalElement.textContent = cartTotal.toFixed(2);
// }

const products = [
  { id: 1, name: 'Product 1', price: 10.00 },
  { id: 2, name: 'Product 2', price: 20.00 },
  { id: 3, name: 'Product 3', price: 30.00 }
];

const cart = [];

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>${item.quantity}</td>
          <td>$${(item.price * item.quantity).toFixed(2)}</td>
          <td><span class="remove-item" onclick="removeItem(${item.id})">Remove</span></td>
      `;
      cartItemsContainer.appendChild(row);
      total += item.price * item.quantity;
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (product) {
      const existingItem = cart.find(item => item.id === productId);

      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1
          });
      }

      updateCart();
  }
}

function removeItem(productId) {
  const index = cart.findIndex(item => item.id === productId);

  if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
  }
}

function checkout() {
  // In a real-world scenario, you would typically send the cart data to the server for processing
  alert('Checkout clicked. Cart data would be sent to the server for processing.');
}

// Initial cart update
updateCart();