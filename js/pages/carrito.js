import { verificarSesion } from "../auth.js";
import { crearNavbar } from "../components/navbar.js";
import { crearFooter } from "../components/footer.js";

verificarSesion(true);
crearNavbar(true);
crearFooter();

const contenedorCarrito = document.getElementById("carrito");
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");

function obtenerRutaImagen(imagen) {
    if (imagen.startsWith("../")) {
        return imagen;
    }

    if (imagen.startsWith("img/")) {
        return `../${imagen}`;
    }

    return `../img/${imagen}`;
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p class='mensaje-carrito'>No hay productos en el carrito.</p>";
        btnFinalizarCompra.style.display = "none";
        return;
    }

    btnFinalizarCompra.style.display = "block";

    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <article class="card">
                <img src="${obtenerRutaImagen(producto.imagen)}" alt="${producto.titulo}">
                <h3>${producto.titulo}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Total: $${producto.precio * producto.cantidad}</p>
                <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
            </article>
        `;
    });

    activarBotonesEliminar();
}

function activarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = parseInt(boton.dataset.id);

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito = carrito.filter(producto => producto.id !== id);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            mostrarCarrito();
        });
    });
}

btnFinalizarCompra.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    alert("Compra finalizada correctamente");
    mostrarCarrito();
});

mostrarCarrito();