document.addEventListener("DOMContentLoaded", () => {
    const getParamUrl = (param) => {
        const urlParam = new URLSearchParams(window.location.search)
        return parseInt(urlParam.get(param))
    };

    const getProduct = async (pid) => {
        const response = await fetch("../data/data.json")
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
                <!-- Agrega más detalles o estilos según tus necesidades -->
            </div>
        `

        cardSection.innerHTML = productDetailsHTML
    };

    renderProductDetails()
})
    


