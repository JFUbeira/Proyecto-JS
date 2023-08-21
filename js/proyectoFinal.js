const getStock = async () => {
    const response = await fetch("https://jfubeira.github.io/Proyecto-JS/data/data.json")
    return await response.json()
}

const stock = await getStock()

for (let i = 0; i < stock.length; i++) {
    let productDescription = document.getElementById("product" + (i + 1))
    productDescription.textContent = stock[i].itemName + ' $' + stock[i].price
}
const shoppingCart = []

const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
console.log(storedCart)