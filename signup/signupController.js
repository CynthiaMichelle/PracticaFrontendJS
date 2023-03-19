import { createUser } from "./signup.js"
import { pubSub } from "../pubSub.js"
import { isEmailValid } from "../utils/isEmailValid.js"

export function signupController(signupElement) {
    signupElement.addEventListener('submit', async(event) => {
        // preventDfault de validar automaticamente el formualrio ya que queremos hacer nosotros esta valdiacion
        event.preventDefault()
        console.log('formulario completo')

        const emailElement = signupElement.querySelector('#username')
        const passwordElement = signupElement.querySelector('#password')
        const passwordConfirmedElement = signupElement.querySelector('#passwordConfirm')

        if (isEmailValid(emailElement.value) &&
            isPasswordValid(passwordElement.value, passwordConfirmedElement.value)) {
            // crear usuario
            try {
                await createUser(emailElement.value, passwordElement.value)
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Usuario creado correctamente')
                signupElement.reset()

                // redirect
                window.location.href ='http://127.0.0.1:5500/index.html'

            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            }
        }
    })

    function isPasswordValid(password, passwordConfirmed) {
        if (password !== passwordConfirmed) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Las contraseñas no son iguales')
            return false
        }
        return true
    }
}