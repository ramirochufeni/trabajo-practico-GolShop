import { verificarSesion } from "../auth.js";
import { crearNavbar } from "../components/navbar.js";
import { productos } from "../data/productos.js";
import { crearCardProducto, activarBotonesCantidad } from "../components/productCard.js";

verificarSesion(true);
crearNavbar(true);

const contenedorProductos = document.getElementById("productos");

const productosFutbol = productos.filter(producto => producto.categoria === "futbol");

productosFutbol.forEach(producto => {
    contenedorProductos.innerHTML += crearCardProducto(producto, true);
});

activarBotonesCantidad();