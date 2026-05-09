export function crearCardProducto(producto, estaEnPages = false) {
    const prefijo = estaEnPages ? "../" : "";

    return `
        <article class="card">
            <img src="${prefijo}${producto.imagen}" alt="${producto.titulo}">
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">$${producto.precio}</p>

            <div class="cantidad-container">
                <button class="btn-restar">-</button>
                <span class="cantidad">0</span>
                <button class="btn-sumar">+</button>
            </div>
        </article>
    `;
}

export function activarBotonesCantidad() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const btnSumar = card.querySelector(".btn-sumar");
        const btnRestar = card.querySelector(".btn-restar");
        const cantidadTexto = card.querySelector(".cantidad");

        let cantidad = 0;

        btnSumar.addEventListener("click", () => {
            cantidad++;
            cantidadTexto.textContent = cantidad;
        });

        btnRestar.addEventListener("click", () => {
            if (cantidad > 0) {
                cantidad--;
                cantidadTexto.textContent = cantidad;
            }
        });
    });
}