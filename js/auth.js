export function loginUsuario() {
    localStorage.setItem("usuarioLogueado", "true");
    window.location.href = "index.html";
}

export function logoutUsuario() {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "login.html";
}

export function verificarSesion() {
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");

    if (usuarioLogueado !== "true") {
        window.location.href = "login.html";
    }
}