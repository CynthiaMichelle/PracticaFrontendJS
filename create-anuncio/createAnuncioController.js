import { createAnuncio } from "./createAnuncio.js"

export const createAnuncioController = (createAnuncioFormElement) => {
    createAnuncioFormElement.addEventListener('submit', async(event) => {
        event.preventDefault()

        const anuncioData = new FormData(createAnuncioFormElement)

        try {
            await createAnuncio(anuncioData)
            window.location = '/'

        } catch (error) {
            alert(error)
        }

    })
}