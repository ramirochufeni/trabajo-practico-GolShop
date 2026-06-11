import { loginUsuario } from "../auth.js";
import { crearFooter } from "../components/footer.js";

crearFooter();

const formularioLogin = document.getElementById("formLogin");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    loginUsuario();
});