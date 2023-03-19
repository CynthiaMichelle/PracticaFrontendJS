import { notificationController } from "./notifications/notificationControler.js";
import { anuncioListController } from "./anuncio-list/anuncioListController.js"
import { userActionsController } from "./user-actions/userActionsController.js";

const anuncioListElement = document.querySelector('.anuncio-list')
const notificationsElement = document.querySelector('.notifications')
const userActionElement = document.querySelector('.user-actions')


anuncioListController(anuncioListElement)
userActionsController(userActionElement)
notificationController(notificationsElement)