document.addEventListener("DOMContentLoaded", () => {
    const getParamUrl = (param) => {
        const urlParam = new URLSearchParams(window.location.search)
        return parseInt(urlParam.get(param))
    };

    const getProduct = async (pid) => {
        const response = await fetch("https://jfubeira.github.io/Proyecto-JS/data/data.json")
        const data = await response.json()
        return data.find(product => product.id === pid)
    };

    const renderProductDetails = async () => {
        const cardSection = document.getElementById("card")
        const productId = getParamUrl("pid")

        const product = await getProduct(productId)

        const productDetailsHTML = `
            <div class="product-details">
                <h2>${product.itemName}</h2>
                <h3>$${product.price}</h3>
                <img src="${product.imgUrl}" alt="${product.itemName} Image">
                <div>
                    <button id="addToCartButton" class="btn btn-info">Agregar al carrito</button>
                </div>   
            </div>
        `

        cardSection.innerHTML = productDetailsHTML

        const addToCartButton = document.getElementById("addToCartButton")
        addToCartButton.addEventListener("click", () => addToCart(product))
    };

    renderProductDetails()
})

const getStock = async () => {
    const response = await fetch("../data/data.json")
    return await response.json()
}

const stock = await getStock()

const shoppingCart = []

function addToCart(product) {
    let currentCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    currentCart.push(product);
    localStorage.setItem('shoppingCart', JSON.stringify(currentCart));
    console.log(currentCart);
    
    // Obtener la URL base de GitHub Pages
    const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
    const cartPageUrl = baseUrl + '../cart.html'; // Agregar la ruta relativa a la página del carrito
    
    Toastify({
        text: 'Se agregó el producto al carrito. Haz click para ver el carrito ->',
        duration: 3000,
        destination: cartPageUrl
    }).showToast();
}




// function addToCart(product) {
//     let currentCart = JSON.parse(localStorage.getItem('shoppingCart')) || []
//     currentCart.push(product)
//     localStorage.setItem('shoppingCart', JSON.stringify(currentCart))
//     console.log(currentCart)
//     Toastify({
//     text: 'Se agregó el producto al carrito. Haz click para ver el carrito ->',
//     duration: 3000,
//     destination: '../cart.html'  
//     }).showToast()
// }


