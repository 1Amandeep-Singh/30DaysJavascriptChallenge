document.addEventListener("DOMContentLoaded", () => {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById('product-grid');

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;

                productGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});

let cart = [];

function addToCart(productId) {
    // Fetch the product details again if needed or use local data
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                const cartItem = cart.find(item => item.id === productId);
                if (cartItem) {
                    cartItem.quantity += 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCart();
            }
        });
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;

        cartItems.appendChild(cartItem);
    });

    cartSummary.innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    const confirmationMessage = `
        <h3>Order Confirmation</h3>
        <p>Thank you, ${name}! Your order has been received.</p>
        <p>Address: ${address}</p>
        <p>Payment Details: ${payment}</p>
        <p>Total: $${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
    `;

    document.getElementById('confirmation-message').innerHTML = confirmationMessage;
    cart = []; // Clear the cart after submission
    updateCart(); // Update the cart display
});
