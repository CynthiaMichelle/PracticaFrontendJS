import { createAnuncioController } from "./createAnuncioController.js";

const token = localStorage.getItem("token");

if (!token) {
  window.location = "/";
} else {
  const createAnuncioFormElement = document.querySelector("#createAnuncioForm");
  createAnuncioController(createAnuncioFormElement);
}
