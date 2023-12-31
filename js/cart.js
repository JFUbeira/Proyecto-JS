const cartItems = JSON.parse(localStorage.getItem("shoppingCart")) || []

function groupAndSumItems(cartItems) {
    const groupedItems = {}

    cartItems.forEach(item => {
        if (!groupedItems[item.id]) {
            groupedItems[item.id] = { ...item }
        } else {
            groupedItems[item.id].quantity += item.quantity
        }
    });

    return Object.values(groupedItems)
}

function renderCart(cartItems) {
    const cartSection = document.getElementById("card")
    cartSection.innerHTML = ""

    let subtotal = 0;

    cartItems.forEach(item => {
        const itemTotalPrice = item.price * item.quantity
        subtotal += itemTotalPrice

        const cartItemDiv = document.createElement("div")
        cartItemDiv.classList.add("cart-item")

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

        const deleteButton = cartItemDiv.querySelector(`#delete${item.id}FromCart`)
        deleteButton.addEventListener("click", () => deleteFromCart(item))

        cartSection.appendChild(cartItemDiv)
    });

    const total = subtotal * 1.21

    const cartTotalDiv = document.createElement("div")
    cartTotalDiv.classList.add("cart-total")
    cartTotalDiv.innerHTML = `
        <p class="subtotal">Subtotal: $${subtotal.toFixed(2)}</p>
        <p class="total">Total (IVA incluido): $${total.toFixed(2)}</p>
        <button id="clearCartButton" class="btn btn-info">Limpiar carrito de compras</button>
    `;

    cartSection.appendChild(cartTotalDiv)
}

const groupedCartItems = groupAndSumItems(cartItems)
renderCart(groupedCartItems)

function deleteFromCart(item) {
    Swal.fire({
        text: '¿Está seguro que desea quitar este producto del carrito?',
        icon: 'alert',
        showCancelButton: true,
        confirmButtonText: 'Quitar del carrito',
        cancelButtonText: 'Cancelar'
    })
    .then( resultado => {
        if (resultado.isConfirmed) {
            Swal.fire({
                icon: 'success',
                text: 'Se ha quitado este producto del carrito',
                showCancelButton: false,
                showConfirmButton: false
            })  
            const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
            localStorage.setItem("shoppingCart", JSON.stringify(updatedCartItems))
            setTimeout(()=>{
                location.reload()
            }, 2000)
        }
    })
}

const clearCartButton = document.getElementById("clearCartButton")
clearCartButton.addEventListener("click", () => clearCart())

function clearCart() {
        Swal.fire({
        text: '¿Está seguro que desea limpiar el carrito?',
        icon: 'alert',
        showCancelButton: true,
        confirmButtonText: 'Limpiar carrito',
        cancelButtonText: 'Cancelar'
    })
    .then( resultado => {
        if (resultado.isConfirmed) {
            Swal.fire({
                icon: 'success',
                text: 'Se ha limpiado el carrito',
                showCancelButton: false,
                showConfirmButton: false
            })  
            localStorage.clear()
            setTimeout(()=>{
                location.reload()
            }, 2000)
        }
    })
}

