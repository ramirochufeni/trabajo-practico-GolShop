import { verificarSesion } from "../auth.js";
import { crearNavbar } from "../components/navbar.js";
import { crearCardProducto, activarBotonesProductos } from "../components/productCard.js";
import { crearFooter } from "../components/footer.js";

verificarSesion(true);
crearNavbar(true);
crearFooter();

const contenedorProductos = document.getElementById("productos");
const categoriaActual = contenedorProductos.dataset.categoria;

fetch("../js/data/productos.json")
    .then(response => response.json())
    .then(productos => {
        const productosFiltrados = productos.filter(producto => producto.categoria === categoriaActual);

        productosFiltrados.forEach(producto => {
            contenedorProductos.innerHTML += crearCardProducto(producto, true);
        });

        activarBotonesProductos(productosFiltrados);
    });