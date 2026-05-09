import { verificarSesion } from "../auth.js";
import { crearNavbar } from "../components/navbar.js";
import { productos } from "../data/productos.js";
import { crearCardProducto, activarBotonesCantidad } from "../components/productCard.js";

verificarSesion(true);
crearNavbar(true);

const contenedorProductos = document.getElementById("productos");

const productosOtros = productos.filter(producto => producto.categoria === "otros");

productosOtros.forEach(producto => {
    contenedorProductos.innerHTML += crearCardProducto(producto, true);
});

activarBotonesCantidad();