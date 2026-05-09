import { paginas } from "../data/paginas.js";
import { logoutUsuario } from "../auth.js";

export function crearNavbar() {
    const navbar = document.getElementById("navbar");

    let links = "";

    paginas.forEach(pagina => {
        links += `<a href="${pagina.direccion}">${pagina.titulo}</a>`;
    });

    navbar.innerHTML = `
        <nav>
            <img src="icono-golshop.png" alt="Icono de GolShop">
            <span>GolShop</span>
            ${links}
            <button id="btnLogout">Logout</button>
        </nav>
    `;

    const btnLogout = document.getElementById("btnLogout");

    btnLogout.addEventListener("click", () => {
        logoutUsuario();
    });
}