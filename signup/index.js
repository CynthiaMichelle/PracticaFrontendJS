import { signupController } from "./signupController.js";
import { notificationController } from "../notifications/notificationControler.js";

const signupElement = document.querySelector("#createUser");
const notificationElement = document.querySelector(".notifications");

const showMessage = notificationController(notificationElement);

signupController(signupElement);
