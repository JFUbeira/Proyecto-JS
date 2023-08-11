// const getParamUrl = (param) => {
//     const urlParam = new URLSearchParams(window.location.search)
//     return parseInt(urlParam.get(param))
// }

// const getProduct = async (pid) => {
//     const response = await fetch("../data/data.json")
//     const data = await response.json()
//     return data.find(product => product.id === pid)
// }

// const renderProduct = (product, card) => {
//     const section = document.createElement("section")
//     section.classList.add('row', 'w-100')
//     section.innerHTML=`
//         <div class='col-6'>
//             <img src="${product.imgUrl}" class='card-img-top w-75>
//         </div>
//         <div class='col-6'>
//             <h2>${product.itemName}</h2>
//             <h3>$ ${product.price}</h3>
//             <button class= 'btn' id='button${product.id-1}>Agregar al carrito</button>
//         </div>
//     `
//     card.appendChild(section)
// }

// const getParamUrl = (param) => {
//     const urlParam = new URLSearchParams(window.location.search);
//     return parseInt(urlParam.get(param));
// };

// const getProduct = async (pid) => {
//     const response = await fetch("../data/data.json");
//     const data = await response.json();
//     return data.find(product => product.id === pid);
// };

// const renderProduct = async () => {
//     const card = document.getElementById("card"); // Cambia "card" por el ID correcto de tu elemento HTML
//     const productId = getParamUrl("id");
//     const product = await getProduct(productId);

//     const section = document.createElement("section");
//     section.classList.add('row', 'w-100');
//     section.innerHTML=`
//         <div class='col-6'>
//             <img src="${product.imgUrl}" class='card-img-top w-75'>
//         </div>
//         <div class='col-6'>
//             <h2>${product.itemName}</h2>
//             <h3>$ ${product.price}</h3>
//             <button class='btn' id='button${product.id-1}'>Agregar al carrito</button>
//         </div>
//     `;

//     card.appendChild(section);
// };

// renderProduct();


document.addEventListener("DOMContentLoaded", () => {
    const getParamUrl = (param) => {
        const urlParam = new URLSearchParams(window.location.search);
        return parseInt(urlParam.get(param));
    };

    const getProduct = async (pid) => {
        const response = await fetch("../data/data.json");
        const data = await response.json();
        return data.find(product => product.id === pid);
    };

    const renderProduct = async () => {
        const card = document.getElementById("card");
        const productId = getParamUrl("id");
        console.log("productId:", productId); // Agrega esta línea para depurar
    
        const product = await getProduct(productId);
        console.log("product:", product); // Agrega esta línea para depurar
    
        if (!product) {
            console.log("Producto no encontrado"); // Agrega esta línea para depurar
            return;
        }
    
        // Resto del código de renderProduct
    };
    

        const section = document.createElement("section");
        section.classList.add('row', 'w-100');
        section.innerHTML=`
            <div class='col-6'>
                <img src=${product.imgUrl} class='card-img-top w-75'>
            </div>
            <div class='col-6'>
                <h2>${product.itemName}</h2>
                <h3>$ ${product.price}</h3>
                <button class='btn' id='button${product.id-1}'>Agregar al carrito</button>
            </div>
        `;

        card.appendChild(section);
    });

    renderProduct();

