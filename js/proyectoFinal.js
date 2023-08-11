// class Product {
//     constructor(id, itemName, price){
//         this.id = id
//         this.itemName = itemName
//         this.price = parseFloat(price)
//     }
// }

// const product1 = new Product(1, 'Remera', 7500)
// const product2 = new Product(2, 'Buzo', 19000)
// const product3 = new Product(3, 'Campera', 34000)
// const product4 = new Product(4, 'Top', 9000)

const getStock = async () => {
    const response = await fetch("../data/data.json")
    return await response.json()
}

const stock = await getStock()

// const stock = [product1, product2, product3, product4]

const shoppingCart = []

for (let i = 0; i < stock.length; i++) {
    let button = document.getElementById('button' + i)
    button.addEventListener('click', () => addToCart(stock[i]))

    let productDescription = document.getElementById("product" + (i + 1))
    productDescription.textContent = stock[i].itemName + ' $' + stock[i].price
}

function addToCart(product) {
    shoppingCart.push(product)
    let notification = document.getElementById('notification')
    let cartTotal = shoppingCart.reduce((total, product) => total + product.price, 0)
    notification.textContent = 'Se agregó un(a) ' + product.itemName + ' al carrito. Subtotal: $' + cartTotal
    notification.classList.remove('itemAdded')
    void notification.offsetWidth
    notification.classList.add('itemAdded')
    let cartIcon = document.getElementById('cartIcon')
    cartIcon.classList.remove('fa-cart-shopping')
    cartIcon.classList.add('fa-cart-plus')
    console.log(shoppingCart)
}


// function addToCart(product) {
//     shoppingCart.push(product)
//     let notification = document.getElementById('notification')
//     notification.textContent = 'Se agregó un(a) ' + product.itemName + ' al carrito.'
//     console.log(shoppingCart);
// }


// let button1 = document.getElementById('button1')
// let button2 = document.getElementById('button2')
// let button3 = document.getElementById('button3')
// let button4 = document.getElementById('button4')

// button1.addEventListener('click', clickAction1)
// button2.addEventListener('click', clickAction2)
// button3.addEventListener('click', clickAction3)
// button4.addEventListener('click', clickAction4)


// function clickAction1(){
//     shoppingCart.push(product1)
//     console.log(shoppingCart)
// }
// function clickAction2(){
//     shoppingCart.push(product2)
//     console.log(shoppingCart)
// }
// function clickAction3(){
//     shoppingCart.push(product3)
//     console.log(shoppingCart)
// }
// function clickAction4(){
//     shoppingCart.push(product4)
//     console.log(shoppingCart)
// }

// const product1Description = document.getElementById("product1") 
// product1Description.textContent = product1.itemName + ' $' + product1.price

// const product2Description = document.getElementById("product2")
// product2Description.textContent = product2.itemName + ' $' + product2.price

// const product3Description = document.getElementById("product3")
// product3Description.textContent = product3.itemName + ' $' + product3.price

// const product4Description = document.getElementById("product4")
// product4Description.textContent = product4.itemName + ' $' + product4.price
