import { decodedToken } from "../utils/decodeToken.js"
import { buildGreeting } from "./userActionsControllerView.js"

export function userActionsController(userActionsElement) {
    const token = localStorage.getItem('token')
    const closeSessionElement = userActionsElement.querySelector('#closeSession')

    if (token) {
        //borrar link de login y de signup
        const loginLinkElement = userActionsElement.querySelector('#loginLink')
        const signupLinkElement = userActionsElement.querySelector('#signupLink')
        loginLinkElement.remove()
        signupLinkElement.remove()
        
        // Saludo al hacer login
        const payload = decodedToken(token)
        userActionsElement.appendChild(buildGreeting(payload.username))

        // Añadir boton cerrar sesión
        closeSessionElement.addEventListener('click', () => {
            // confirm -> muestra un popup que nos pide confirmacion de la acción que queremos realizar
            const answer = confirm('Desea cerrar sesion?')
            if (answer) {
                localStorage.removeItem('token')
                window.location.reload() // resfresca la página
            }
        })
    } else {
        //borrar el link de crear anuncio
        const createAnuncioLinkElement = userActionsElement.querySelector('#crearAnuncioLink')
        createAnuncioLinkElement.remove()
        closeSessionElement.remove()

    }
}