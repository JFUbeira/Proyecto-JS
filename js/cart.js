const getStock = async () => {
    const response = await fetch("../data/data.json")
    return await response.json()
}

const stock = await getStock()

const shoppingCart = []

const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
console.log(storedCart)