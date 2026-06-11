export function crearFooter() {
    const footer = document.getElementById("footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = `
        <footer>
            <p>GolShop - Tienda online de artículos deportivos</p>
            <p>Trabajo Integrador - Aplicaciones Web 1</p>
            <p>Ramiro Chufeni</p>
        </footer>
    `;
}