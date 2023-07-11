let userName = prompt("Ingresá tu nombre completo")

if (userName == ''){
    do{
        userName = prompt("Por favor, ingrese su nombre completo para continuar")
    } while(userName == '')
}

let respuesta = prompt("Bienvenido " + userName + ", ¿desea comprar un producto? Conteste SI o NO")
let respuestaUC = respuesta.toUpperCase()

while (respuestaUC !== 'SI' && respuestaUC !== 'NO') {
    alert("Por favor, ingresa una respuesta válida para continuar");
    respuesta = prompt(userName + ", ¿desea comprar un producto? Conteste SI o NO")
    respuestaUC = respuesta.toUpperCase()
}

if (respuestaUC == 'NO'){
    alert("Gracias por su tiempo, ¡hasta la próxima!")
}

class Product {
    constructor(id, itemName, price){
        this.id = id
        this.itemName = itemName
        this.price = parseFloat(price)
    }
}

const product1 = new Product(1, 'Buzo', 19000)
const product2 = new Product(2, 'Campera', 37000)
const product3 = new Product(3, 'Remera', 7500)
const product4 = new Product(4, 'Zapatillas', 28000)

const stock = [product1, product2, product3, product4]

const shoppingCart = []

if (respuestaUC == 'SI'){

    let priceRange = parseInt(prompt('¿En qué rango de precios desea comprar nuestros productos? Seleccione 1, 2, 3 o 4. \n 1 - Menores a $15000 \n 2 - Entre $15000 y $30000 \n 3 - Mayores a $30000 \n 4 - Todos los productos'))
    if(priceRange == 1){
        let availableProducts = stock.filter((stockObject) => stockObject.price < 15000)
        let productInfo = availableProducts.map((product) => product.itemName + " - $" + product.price)
        let productsString = productInfo.join("\n")
        let userCart = prompt("Los productos disponibles son:\n" + productsString + "\n ¿Desea agregar una Remera al carrito? Conteste SI o NO")
        userCartUC = userCart.toUpperCase()

        if(userCartUC == "SI"){
            shoppingCart.push(product3)
            alert("Se agregó una " + product3.itemName + " al carrito. El costo total incluyendo impuestos es de $" + (product3.price * 1.21))
            console.log(shoppingCart)
        }
        if (userCartUC == "NO"){
            alert("Gracias por su tiempo, ¡hasta la próxima!")
        }
    }
    else if (priceRange == 2) {
        let availableProducts = stock.filter((stockObject) => stockObject.price >= 15000 && stockObject.price <= 30000);
        let productInfo = availableProducts.map((product) => product.itemName + " - $" + product.price)
        let productsString = productInfo.join("\n")
        let userCart = parseInt(prompt("Los productos disponibles son:\n" + productsString + "\n¿Qué desea agregar al carrito? Seleccione 1, 2, 3 o 4. \n 1 - " + product1.itemName + '\n 2 - ' + product4.itemName + "\n 3 - Ambos \n 4 - Ninguno"))

        if (userCart == 1) {
            shoppingCart.push(product1)
            alert("Se agregó un " + product1.itemName + " al carrito. El costo total incluyendo impuestos es de $" + (product1.price * 1.21))
            console.log(shoppingCart)
        } 
        else if (userCart == 2) {
            shoppingCart.push(product4)
            alert("Se agregaron " + product4.itemName + " al carrito. El costo total incluyendo impuestos es de $" + (product4.price * 1.21))
            console.log(shoppingCart)
        }
        else if (userCart == 3){
            shoppingCart.push(product1, product4)
            alert("Se agregaron " + product1.itemName + " y " + product4.itemName + " al carrito. El costo total incluyendo impuestos es de $" + ((product1.price + product4.price) * 1.21))
            console.log(shoppingCart)
        }
        else if (userCart == 4) {
            alert("Gracias por su tiempo, ¡hasta la próxima!");
        }
    } else if (priceRange == 3) {
        let availableProducts = stock.filter((stockObject) => stockObject.price > 30000)
        let productInfo = availableProducts.map((product) => product.itemName + " - $" + product.price)
        let productsString = productInfo.join("\n")
        let userCart = prompt("Los productos disponibles son:\n" + productsString + "\n¿Desea agregar una Campera al carrito? Conteste SI o NO")
        let userCartUC = userCart.toUpperCase()

        if (userCartUC == "SI") {
            shoppingCart.push(product2);
            alert("Se agregaron unas " + product2.itemName + " al carrito. El costo total incluyendo impuestos es de $" + (product2.price * 1.21));
            console.log(shoppingCart);
        } else if (userCartUC == "NO") {
            alert("Gracias por su tiempo, ¡hasta la próxima!");
        }
    } else if (priceRange == 4) {
        let availableProducts = stock
        let productInfo = availableProducts.map((product) => product.itemName + " - $" + product.price)
        let productsString = productInfo.join("\n")
        alert("Los productos disponibles son:\n" + productsString + "\nA continuación, le preguntaremos uno por uno si desea agregarlos al carrito.")
        userCart = prompt("¿Desea agregar un " + product1.itemName + " ($" + product1.price + ") al carrito? Conteste SI o NO")
        userCartUC = userCart.toUpperCase()
        if (userCartUC == "SI") {
            shoppingCart.push(product1)
            alert("Se agregó un " + product1.itemName + " al carrito.")
        } 
        userCart = prompt("¿Desea agregar un " + product2.itemName + " ($" + product2.price + ") al carrito? Conteste SI o NO")
        userCartUC = userCart.toUpperCase()
        if (userCartUC == "SI") {
            shoppingCart.push(product2)
            alert("Se agregó un " + product2.itemName + " al carrito.")
        } 
        userCart = prompt("¿Desea agregar un " + product3.itemName + " ($" + product3.price + ") al carrito? Conteste SI o NO")
        userCartUC = userCart.toUpperCase()
        if (userCartUC == "SI") {
            shoppingCart.push(product3)
            alert("Se agregó un " + product3.itemName + " al carrito.")
        } 
        userCart = prompt("¿Desea agregar un " + product4.itemName + " ($" + product4.price + ") al carrito? Conteste SI o NO")
        userCartUC = userCart.toUpperCase()
        if (userCartUC == "SI") {
            shoppingCart.push(product4)
            alert("Se agregó un " + product4.itemName + " al carrito.")
        }         
    }
}

let cartItems = shoppingCart.map(product => product.itemName + " - $" + product.price)
let cartTotal = shoppingCart.reduce((total, product) => total + product.price, 0)

let cartContent = cartItems.join("\n")
let cartSummary = "Su carrito consta de los siguientes items:\n" + cartContent + "\nSubtotal: $" + cartTotal + "\n+ IVA 21%\nTotal: $" + (cartTotal * 1.21)

alert(cartSummary + "\n¡Muchas gracias por su compra!")

