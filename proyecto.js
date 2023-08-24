
// Función para obtener el precio de un producto
function obtenerPrecio(id) {
    switch (id) {
        case 1:
            return 30000;
        case 2:
            return 25000;
        case 3:
            return 40000;
        default:
            return 0;
    }
}

let idproductos = parseInt(prompt("Tecnica Moreno\n1-Capsuladoras de botellas ..$30000\n2-Tapadoras de botellas ..$25000\n3-Llenadoras de botellas ..$40000"));

// Condicional para validar la opción ingresada
if (idproductos >= 1 && idproductos <= 3) {
    const precioProducto = obtenerPrecio(idproductos);
    console.log(`El precio del producto seleccionado es: $${precioProducto}`);

    let cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar:"));

    // Ciclo para validar la cantidad ingresada
    while (isNaN(cantidad) || cantidad <= 0) {
        cantidad = parseInt(prompt("Cantidad inválida. Ingrese la cantidad de productos a comprar:"));
    }

    const costoTotal = precioProducto * cantidad;
    console.log(`El costo total de ${cantidad} producto(s) es: $${costoTotal}`);
} else {
    console.log("Opción inválida. Por favor, selecciona una opción válida.");
}


//agregar un alert al costototal
