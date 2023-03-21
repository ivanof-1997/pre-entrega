
alert("ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = parseInt(prompt("\n1-buzo $3000 \n2-remeras $1500 \n3-jeans $6000 \n4-zapatillas $15000"))
let seleccionarCantidad;
let total = 0




const cantidad = (cantidad, precio) => {
    return cantidad * precio
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = parseInt(prompt("el producto seleccionado es buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
            break;

        case 2:
            seleccionarCantidad = parseInt(prompt("el producto seleccionado es remeras, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1500)
            break;

        case 3:
            seleccionarCantidad = parseInt(prompt("el producto seleccionado es jean, indique la cantidad"))

            total += cantidad(seleccionarCantidad, 6000)
            break;

        case 4:
            seleccionarCantidad = parseInt(prompt("el producto seleccionado es zapatillas, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 15000)
            break;

        default:
            break;
    }
    seleccionarProductos = prompt("\n1-buzo $3000 \n2-remeras $1500 \n3-jeans $6000 \n4-zapatillas $15000")
}

alert("el total de compras es " + total)


const envio = () => {
    if (total >= 10000) {
        alert("El envio es gratuito")
    } else {
        total +=
            alert("El costo del envio es de 1000, el total es: " + total)
    }
}

envio()

