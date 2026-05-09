import { loginUsuario } from "../auth.js";

const formularioLogin = document.getElementById("formLogin");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    loginUsuario();
});