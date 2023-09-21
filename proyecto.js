document.addEventListener("DOMContentLoaded", function () {
  const productos = [
      {
          id: 1,
          nombre: "Capsuladora Rulante",
          descripcion: "Manual, compleja o eléctrica monofásica o trifásica, con guía regulable en altura para distintas botellas. Practicidad y calidad a la hora del capsulado.",
          precio: 55000,
          imagen: "/img/cap rulante.jpg"
      },
      {
          id: 2,
          nombre: "Capsuladora neumática",
          descripcion: "Con regulación de presión en gomas de plisado para distintas opciones de cápsula, monofásica.",
          precio: 45000,
          imagen: "/img/cap para espumante.jpg"
      },
      {
          id: 3,
          nombre: "Capsuladora Rulante vertical",
          descripcion: "Con zapato alzabotellas neumático con regulador independiente de velocidad en entrada y salida de botella.",
          precio: 39000,
          imagen: "/img/cap rulante vertical.jpg"
      },
      {
          id: 4,
          nombre: "Llenadora por gravedad",
          descripcion: "Llenadora de 2 válvulas por gravedad con inertizador y corte a nivel para todo tipo de botellas, monofásica.",
          precio: 69000,
          imagen: "img/Rpiston alzabotella llenadora gai.jpg"
      }
  ];

  const buscador = document.getElementById("buscador");
  const productosDiv = document.getElementById("productos");
  const carritoDiv = document.getElementById("carrito");
  const finalizarCompraBtn = document.getElementById("finalizarCompra");
  const mensajeGraciasDiv = document.getElementById("mensajeGracias");
  const carritoVacioDiv = document.getElementById("carrito-vacio");
  const listaCarrito = document.getElementById("lista-carrito");

  // localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Función para mostrar productos 
  function mostrarProductos() {
      productosDiv.innerHTML = "";
      productos.forEach(producto => {
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta");
          tarjeta.innerHTML = `
              <h3>${producto.nombre}</h3>
              <p>${producto.descripcion}</p>
              <p>Precio: $${producto.precio}</p>
              <img src="${producto.imagen}" alt="${producto.nombre}">
              <button class="agregarCarrito" data-id="${producto.id}">Agregar al Carrito</button>
          `;
          productosDiv.appendChild(tarjeta);
      });
  }

  // agregar un producto al carrito
  function agregarAlCarrito(id) {
      const producto = productos.find(p => p.id === id);
      if (producto) {
          carrito.push(producto);
          actualizarCarrito();
      }
  }

  //  eliminar producto del carrito
  function eliminarDelCarrito(id) {
      carrito = carrito.filter(producto => producto.id !== id);
      actualizarCarrito();
  }

  //  actualizar el carrito
  function actualizarCarrito() {
      listaCarrito.innerHTML = "";
      carrito.forEach(producto => {
          const li = document.createElement("li");
          li.innerHTML = `
              <span>${producto.nombre}</span>
              <span>Precio: $${producto.precio}</span>
              <button class="eliminarCarrito" data-id="${producto.id}">Eliminar</button>
          `;
          listaCarrito.appendChild(li);
      });

      // Mostrar o ocultar el mensaje de carrito vacío
      if (carrito.length === 0) {
          carritoVacioDiv.style.display = "block";
      } else {
          carritoVacioDiv.style.display = "none";
      }

      // Guardar el carrito en el almacenamiento local
      localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  //  finalizar la compra
  function finalizarCompra() {
      carrito = [];
      actualizarCarrito();
      mensajeGraciasDiv.style.display = "block";
  }

  //  agregar productos al carrito
  productosDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("agregarCarrito")) {
          const id = parseInt(e.target.getAttribute("data-id"));
          agregarAlCarrito(id);
      }
  });

  //  eliminar productos del carrito
  listaCarrito.addEventListener("click", (e) => {
      if (e.target.classList.contains("eliminarCarrito")) {
          const id = parseInt(e.target.getAttribute("data-id"));
          eliminarDelCarrito(id);
      }
  });

  //  finalizar la compra
  finalizarCompraBtn.addEventListener("click", finalizarCompra);

  //  buscar productos
  buscador.addEventListener("input", () => {
      const textoBuscado = buscador.value.toLowerCase();
      const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(textoBuscado));
      mostrarProductos(productosFiltrados);
  });

  // Inicializar la página
  mostrarProductos();
  actualizarCarrito();
});
