export function crearCardProducto(producto, estaEnPages = false) {
    const prefijo = estaEnPages ? "../" : "";

    return `
        <article class="card">
            <img src="${prefijo}${producto.imagen}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">$${producto.precio}</p>

            <div class="cantidad-container">
                <button class="btn-restar" data-id="${producto.id}">-</button>
                <span class="cantidad" id="cantidad-${producto.id}">1</span>
                <button class="btn-sumar" data-id="${producto.id}">+</button>
            </div>

            <button class="btn-agregar" data-id="${producto.id}">Añadir al carrito</button>
        </article>
    `;
}

export function activarBotonesProductos(productos) {
    const botonesSumar = document.querySelectorAll(".btn-sumar");
    const botonesRestar = document.querySelectorAll(".btn-restar");
    const botonesAgregar = document.querySelectorAll(".btn-agregar");

    botonesSumar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id;
            const cantidadTexto = document.getElementById(`cantidad-${id}`);

            let cantidad = parseInt(cantidadTexto.textContent);
            cantidad++;
            cantidadTexto.textContent = cantidad;
        });
    });

    botonesRestar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.dataset.id;
            const cantidadTexto = document.getElementById(`cantidad-${id}`);

            let cantidad = parseInt(cantidadTexto.textContent);

            if (cantidad > 1) {
                cantidad--;
                cantidadTexto.textContent = cantidad;
            }
        });
    });

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = parseInt(boton.dataset.id);
            const producto = productos.find(item => item.id === id);
            const cantidad = parseInt(document.getElementById(`cantidad-${id}`).textContent);

            agregarAlCarrito(producto, cantidad);
        });
    });
}

function agregarAlCarrito(producto, cantidad) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: producto.id,
            titulo: producto.titulo,
            descripcion: producto.descripcion,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: cantidad
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito");
}