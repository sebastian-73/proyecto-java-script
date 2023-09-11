

// Crear un array de productos
/*const productos = [
    {
      id: 1,
      nombre: "Capsuladora Rulante",
      descripcion: "Manual, compleja o eléctrica monofásica o trifásica, con guía regulable en altura para distintas botellas. Practicidad y calidad a la hora del capsulado.",
      precio: 55000
    },
    {
      id: 2,
      nombre: "Capsuladora neumática de banco para espumantes",
      descripcion: "Con regulación de presión en gomas de plisado para distintas opciones de cápsula, monofásica.",
      precio: 45000
    },
    {
      id: 3,
      nombre: "Capsuladora Rulante vertical",
      descripcion: "Con zapato alzabotellas neumático con regulador independiente de velocidad en entrada y salida de botella.",
      precio: 39000
    },
    {
      id: 4,
      nombre: "Llenadora por gravedad",
      descripcion: "Llenadora de 2 válvulas por gravedad con inertizador y corte a nivel para todo tipo de botellas, monofásica.",
      precio: 69000
    }
  ];*/
  
  // Función 
  function mostrarProductoSimplificado(producto) {
    return `${producto.id}. ${producto.nombre} - $${producto.precio}`;
  }
  

  function mostrarProductosDisponibles() {
    console.log("Productos disponibles:");
    console.table(productos.map(mostrarProductoSimplificado));
  }
  
  
  function filtrarProductosPorPrecioMaximo(maxPrecio) {
    return productos.filter(producto => producto.precio <= maxPrecio);
  }
  
  // Ciclo principal
  let continuar = true;
  while (continuar) {
    const opcion = prompt("Elige una opción:\n1. Ver todos los productos disponibles\n2. Filtrar productos por precio máximo\n3. Salir");
  
    if (opcion === "1") {
      mostrarProductosDisponibles();
      const seleccion = parseInt(prompt("Selecciona el número de producto que deseas comprar:"));
      
      if (seleccion && seleccion >= 1 && seleccion <= productos.length) {
        const cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));
        
        if (!isNaN(cantidad) && cantidad > 0) {
          const productoSeleccionado = productos.find(producto => producto.id === seleccion);
          if (productoSeleccionado) {
            const costoTotal = productoSeleccionado.precio * cantidad;
            console.log(`Has comprado ${cantidad} ${productoSeleccionado.nombre}(s).`);
            console.log(`Costo Total: $${costoTotal}`);
          } else {
            console.log("Producto no encontrado.");
          }
        } else {
          console.log("Cantidad inválida. Debes ingresar un número mayor que cero.");
        }
      } else {
        console.log("Número de producto inválido. Debes seleccionar un número entre 1 y " + productos.length);
      }
    } else if (opcion === "2") {
      const maxPrecio = parseInt(prompt("Ingresa el precio máximo para el filtro:"));
      
      if (!isNaN(maxPrecio) && maxPrecio > 0) {
        const productosFiltrados = filtrarProductosPorPrecioMaximo(maxPrecio);
        if (productosFiltrados.length > 0) {
          console.log(`Productos con precio menor o igual a $${maxPrecio}:`);
          console.table(productosFiltrados.map(mostrarProductoSimplificado));
        } else {
          console.log("No hay productos que cumplan con el filtro de precio.");
        }
      } else {
        console.log("Precio inválido. Debes ingresar un número mayor que cero.");
      }
    } else if (opcion === "3") {
      continuar = false;
    } else {
      console.log("Opción no válida.");
    }
  }
  