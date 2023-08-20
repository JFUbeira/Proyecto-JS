// cart.js

// Obtener los datos del localStorage
const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// Crear una función para agrupar los productos por ID y sumar las cantidades
function groupAndSumItems(cartItems) {
    const groupedItems = {};

    cartItems.forEach(item => {
        if (!groupedItems[item.id]) {
            groupedItems[item.id] = { ...item };
        } else {
            groupedItems[item.id].quantity += item.quantity;
        }
    });

    return Object.values(groupedItems);
}

// Crear una función para renderizar los elementos en el carrito
function renderCart(cartItems) {
    const cartSection = document.getElementById("card");
    cartSection.innerHTML = "";

    let subtotal = 0;

    // Recorrer los productos agrupados en el carrito
    cartItems.forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        subtotal += itemTotalPrice;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        cartItemDiv.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.itemName}" class="cart-item-image">
            <div class="cart-item-details">
                <p class="item-name">${item.itemName}</p>
                <p class="item-price">$${item.price.toFixed(2)}</p>
                <p class="item-quantity">Cantidad: ${item.quantity}</p>
                <p class="item-total-price">Total: $${itemTotalPrice.toFixed(2)}</p>
                <button id="delete${item.id}FromCart" class="btn btn-info">Eliminar producto del carrito</button>
            </div>
        `;

        const deleteButton = cartItemDiv.querySelector(`#delete${item.id}FromCart`);
        deleteButton.addEventListener("click", () => deleteFromCart(item));

        cartSection.appendChild(cartItemDiv);
    });

    // Calcular y mostrar el subtotal y el total
    const total = subtotal * 1.21;

    const cartTotalDiv = document.createElement("div");
    cartTotalDiv.classList.add("cart-total");
    cartTotalDiv.innerHTML = `
        <p class="subtotal">Subtotal: $${subtotal.toFixed(2)}</p>
        <p class="total">Total (IVA incluido): $${total.toFixed(2)}</p>
        <button id="clearCartButton" class="btn btn-info">Limpiar carrito de compras</button>
    `;

    cartSection.appendChild(cartTotalDiv);
}

// Llamar a la función para renderizar el carrito
const groupedCartItems = groupAndSumItems(cartItems);
renderCart(groupedCartItems);

function deleteFromCart(item) {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCartItems));
    location.reload(); // Recargar la página para reflejar los cambios
}

const clearCartButton = document.getElementById("clearCartButton")
clearCartButton.addEventListener("click", () => clearCart())

function clearCart() {
    localStorage.clear()
    location.reload()
}







//// cart.js

// // Obtener los datos del localStorage
// const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// // Función para calcular el subtotal
// function calculateSubtotal(items) {
//     return items.reduce(
//         (subtotal, item) => subtotal + item.price * item.quantity,
//         0
//     );
// }

// // Crear una función para renderizar los elementos en el carrito
// function renderCart(cartItems) {
//     const cartSection = document.getElementById("card");
//     cartSection.innerHTML = "";

//     // Crear un objeto para agrupar los productos por nombre
//     const groupedItems = cartItems.reduce((grouped, item) => {
//         if (!grouped[item.itemName]) {
//             grouped[item.itemName] = item;
//         } else {
//             grouped[item.itemName].quantity += item.quantity;
//         }
//         return grouped;
//     }, {});

//     // Recorrer el objeto agrupado y renderizar los productos en el carrito
//     for (const itemName in groupedItems) {
//         const item = groupedItems[itemName];
//         const itemTotalPrice = item.price * item.quantity;

//         const cartItemDiv = document.createElement("div");
//         cartItemDiv.classList.add("cart-item");

//         cartItemDiv.innerHTML = `
//         <img src="${item.imgUrl}" alt="${item.itemName}" class="cart-item-image">
//         <div class="cart-item-details">
//             <p class="item-name">${item.itemName}</p>
//             <p class="item-price">$${item.price.toFixed(2)}</p>
//             <p class="item-quantity">Cantidad: ${item.quantity}</p>
//             <p class="item-total-price">Total: $${itemTotalPrice.toFixed(2)}</p>
//         </div>
//     `;

//         cartSection.appendChild(cartItemDiv);
//     }

//     // Calcular y mostrar el subtotal y el total
//     const subtotal = calculateSubtotal(cartItems);
//     const total = subtotal * 1.21;

//     const cartTotalDiv = document.createElement("div");
//     cartTotalDiv.classList.add("cart-total");
//     cartTotalDiv.innerHTML = `
//     <p class="subtotal">Subtotal: $${subtotal.toFixed(2)}</p>
//     <p class="total">Total (IVA incluido): $${total.toFixed(2)}</p>
// `;

//     cartSection.appendChild(cartTotalDiv);
// }

// // Llamar a la función para renderizar el carrito
// renderCart(cartItems); 