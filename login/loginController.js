import { loginUser } from "./login.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { pubSub } from "../pubsub.js";

export function loginController(loginElement) {
  loginElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("formulario completo");

    const emailElement = loginElement.querySelector("#username");
    const passwordElement = loginElement.querySelector("#password");

    if (!isEmailValid(emailElement.value)) {
      // mostramos notificacion
      console.log(emailElement.value);
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, "Email Invalido");
    } else {
      //logar usuario
      logUser(loginElement);
    }
  });

  async function logUser(loginElement) {
    const formData = new FormData(loginElement);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      // jwt = token de acceso del usuario
      const jwt = await loginUser(username, password);
      localStorage.setItem("token", jwt);
      window.location.href = "http://127.0.0.1:5500/index.html";
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message);
    }
  }
}
