import { verificarSesion } from "../auth.js";
import { crearNavbar } from "../components/navbar.js";
import { crearCardProducto, activarBotonesProductos } from "../components/productCard.js";

verificarSesion(false);
crearNavbar(false);

const contenedorProductos = document.getElementById("productos");

fetch("js/data/productos.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            contenedorProductos.innerHTML += crearCardProducto(producto, false);
        });

        activarBotonesProductos(productos);
    });