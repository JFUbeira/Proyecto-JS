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

else if (respuestaUC == 'SI'){
    
    let carrito = prompt("¿Cuál de estos productos desea comprar? Seleccione uno: remera o buzo")
    let carritoUC = carrito.toUpperCase()
    const remera = 7999
    const buzo = 21999
    function calcular(buzo, remera){
        return buzo + remera
    }

    while (carritoUC !== 'REMERA' && carritoUC !== 'BUZO') {
        alert("Por favor, ingresa uno de los productos disponibles para continuar")
        carrito = prompt(userName + ", ¿Cuál de estos productos desea comprar? Seleccione uno: Remera o Buzo")
        carritoUC = carrito.toUpperCase();
    }

    if(carritoUC == "REMERA"){
        let masProductos = prompt("Se agregó una remera al carrito. ¿Desea agregar más productos? Conteste SI o NO")
        let masProductosUC = masProductos.toUpperCase()
        if (masProductosUC == 'NO'){
            alert(userName + " , el valor total de su carrito es de $" + remera)
        }
        else if (masProductosUC == 'SI'){
        let masProductos2 = prompt("¿Desea agregar un buzo? Conteste SI o NO")
        let masProductos2UC = masProductos2.toUpperCase()
            while (masProductos2UC !== 'SI' && masProductos2UC !== 'NO') {
                alert("Por favor, ingrese una respuesta válida para continuar")
                masProductos2 = prompt(userName + ", ¿desea agregar un buzo al carrito? Conteste SI o NO")
                masProductos2 = masProductos2UC.toUpperCase();
                }
            if (masProductos2UC == "SI"){
                alert(userName + " , el valor total de su carrito es de $" + calcular(buzo,remera))
            }
            else if (masProductos2UC == "NO"){
                alert(userName + " , el valor total de su carrito es de $" + remera)
            }
        }
    }

    if(carritoUC == "BUZO"){
        let masProductos = prompt("Se agregó un buzo al carrito. ¿Desea agregar más productos? Conteste SI o NO")
        let masProductosUC = masProductos.toUpperCase()
        if (masProductosUC == 'NO'){
            alert(userName + " , el valor total de su carrito es de $" + buzo)
        }
        else if (masProductosUC == 'SI'){
        let masProductos2 = prompt("¿Desea agregar una remera? Conteste SI o NO")
        let masProductos2UC = masProductos2.toUpperCase()
            while (masProductos2UC !== 'SI' && masProductos2UC !== 'NO') {
                alert("Por favor, ingrese una respuesta válida para continuar")
                masProductos2 = prompt(userName + ", ¿desea agregar una remera al carrito? Conteste SI o NO")
                masProductos2 = masProductos2UC.toUpperCase();
                }
            if(masProductos2UC == "SI"){
                alert(userName + " , el valor total de su carrito es de $" + calcular(buzo,remera))
            }
            else if (masProductos2UC == "NO"){
                alert(userName + " , el valor total de su carrito es de $" + buzo)
            }
        }
    }
}






