import { logoutUsuario } from "../auth.js";

export function crearNavbar(estaEnPages = false) {
    const navbar = document.getElementById("navbar");
    const prefijo = estaEnPages ? "../" : "";

    navbar.innerHTML = `
        <nav>
           <a href="${prefijo}index.html" class="logo-link">
           <img src="${prefijo}img/icono-golshop.png" alt="Icono de GolShop">
           </a>
           <span>GolShop</span>
            <a href="${prefijo}index.html">Home</a>
            <a href="${prefijo}pages/categoria-futbol.html">Fútbol</a>
            <a href="${prefijo}pages/categoria-basquet.html">Básquet</a>
            <a href="${prefijo}pages/categoria-otros.html">Otros Deportes</a>
            <a href="${prefijo}pages/carrito.html">Carrito</a>
            <button id="btnLogout">Logout</button>
        </nav>
    `;

    const btnLogout = document.getElementById("btnLogout");

    btnLogout.addEventListener("click", () => {
        logoutUsuario(estaEnPages);
    });
}