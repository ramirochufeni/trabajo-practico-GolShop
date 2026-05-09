import { verificarSesion } from "../auth.js";
import { crearNavbar } from "../components/navbar.js";
import { productos } from "../data/productos.js";
import { crearCardProducto, activarBotonesCantidad } from "../components/productCard.js";

verificarSesion();
crearNavbar();

const contenedorProductos = document.getElementById("productos");

const productosBasquet = productos.filter(producto => producto.categoria === "basquet");

productosBasquet.forEach(producto => {
    contenedorProductos.innerHTML += crearCardProducto(producto);
});

activarBotonesCantidad();