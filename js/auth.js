export function loginUsuario() {
    sessionStorage.setItem("usuarioLogueado", "true");
    window.location.href = "../index.html";
}

export function logoutUsuario(estaEnPages = false) {
    sessionStorage.removeItem("usuarioLogueado");

    if (estaEnPages) {
        window.location.href = "login.html";
    } else {
        window.location.href = "pages/login.html";
    }
}

export function verificarSesion(estaEnPages = false) {
    const usuarioLogueado = sessionStorage.getItem("usuarioLogueado");

    if (usuarioLogueado !== "true") {
        if (estaEnPages) {
            window.location.href = "login.html";
        } else {
            window.location.href = "pages/login.html";
        }
    }
}