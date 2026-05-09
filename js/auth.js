export function loginUsuario() {
    localStorage.setItem("usuarioLogueado", "true");
    window.location.href = "../index.html";
}

export function logoutUsuario(estaEnPages = false) {
    localStorage.removeItem("usuarioLogueado");

    if (estaEnPages) {
        window.location.href = "login.html";
    } else {
        window.location.href = "pages/login.html";
    }
}

export function verificarSesion(estaEnPages = false) {
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");

    if (usuarioLogueado !== "true") {
        if (estaEnPages) {
            window.location.href = "login.html";
        } else {
            window.location.href = "pages/login.html";
        }
    }
}