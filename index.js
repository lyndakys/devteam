const products = [ 
    {
      name: "Waffle",
      fullname: "Waffle with Berries",
      price: "$6.50",
      image: "./assets/images/image-waffle-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Créme Brûlée", 
      fullname: "Vanilla Bean Crème Brûlée",
      price: "$7.00",
      image: "./assets/images/image-creme-brulee-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Macaron",
      fullname: "Macaron Mix of Five",
      price: "$8.00",
      image: "./assets/images/image-macaron-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Tiramisu",
      fullname: "Classic Tiramisu",
      price: "$5.50",
      image: "./assets/images/image-tiramisu-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Baklava",
      fullname: "Pistachio Baklava",
      price: "$4.00",
      image: "./assets/images/image-baklava-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Pie",
      fullname: "Lemon Meringue Pie",
      price: "$5.00",
      image: "./assets/images/image-meringue-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Cake",
      fullname: "Red Velvet Cake",
      price: "$4.50",
      image: "./assets/images/image-cake-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Brownie",
      fullname: "Salted Caramel Brownie",
      price: "$5.50",
      image: "./assets/images/image-brownie-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
    {
      name: "Panna Cotta",
      fullname: "Vanilla Panna Cotta",
      price: "$6.50",
      image: "./assets/images/image-panna-cotta-desktop.jpg",
      quantity: 0,
      inCart: false,
    },
  ];
  
  // Inject products into HTML
  const container = document.querySelector(".grids");
  
  products.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.className = "option";
  
    productElement.innerHTML =`
      <div class="background">
          <img class="centered-image" src="${product.image}" alt="${product.fullname}">
          <button class="add_button" onclick="addToCart(${index})">
              <img class="shop_icon" src="./assets/images/icon-add-to-cart.svg">
              <p class="add_to_cart">Add to Cart</p>
          </button>
      </div>
      <div class="product_data">
          <p class="name">${product.name}</p>
          <p class="fullname">${product.fullname}</p>
          <p class="price">${product.price}</p>
      </div>`;
  
    container.appendChild(productElement);
  });
  
  // Update cart count
  function updateCartCount() {
    const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
    document.getElementById("total").textContent = totalItems;
  }
  
  function updateCartDisplay() {
    const cartContainer = document.querySelector(".items");
    cartContainer.innerHTML = ""; // Clear the cart display
  
    const cartItems = products.filter((product) => product.inCart);
  
    if (cartItems.length === 0) {
      // Show the "empty cart" message if no items in cart
      cartContainer.innerHTML = `
        <img class="cake" src="./assets/images/illustration-empty-cart.svg" alt="Empty Cart">
        <h6>Your added items will appear here</h6>
      `;
      return;
    }
  
    // Render each product in the cart
    cartItems.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <img class="cart-image" src="${product.image}" alt="${product.fullname}">
        <div class="cart-details">
          <p class="cart-name">${product.fullname}</p>
          <p class="cart-price">${product.price}</p>
          <div class="cart-controls">
            <button onclick="decreaseQuantity(${products.indexOf(product)})">-</button>
            <span>${product.quantity}</span>
            <button onclick="increaseQuantity(${products.indexOf(product)})">+</button>
            </div>
        </div>`;
      cartContainer.appendChild(cartItem);
    });
  }
  
  function increaseQuantity(index) {
    products[index].quantity++;
    updateCartCount();
    updateCartDisplay();
  }
  
  function decreaseQuantity(index) {
    if (products[index].quantity > 1) {
      products[index].quantity--;
    } else {
      products[index].inCart = false;
      products[index].quantity = 0;
    }
  
    updateCartCount();
    updateCartDisplay();
  }
  
  function addToCart(index) {
    const product = products[index];
  
    if (!product.inCart) {
      product.inCart = true;
      product.quantity = 1; // Add item with quantity 1
    } else {
      product.quantity++;
    }
  
    updateCartCount();
    updateCartDisplay();
  }
