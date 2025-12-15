let cart = [];
let total = 0;

// Show user name
const user = JSON.parse(localStorage.getItem("user"));
if (user && document.getElementById("welcomeUser")) {
    document.getElementById("welcomeUser").innerText =
        `Welcome, ${user.name} ☕`;
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: ₹${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty ❌");
        return;
    }
    alert("Order placed successfully ☕");
    cart = [];
    total = 0;
    updateCart();
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
