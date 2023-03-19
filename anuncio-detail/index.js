import { anuncioDetailController } from "./anuncioDetailController.js"

// leer de la url el id del anuncio
const params = new URLSearchParams(window.location.search)
const anuncioId = params.get('anuncioId')


// si el query param no existe hacemos una redireccion al listado de anuncios
if (!anuncioId) {
    window.location = '/'
} else {
    // crearemos un controlador donde le pasaremos dicho id
    const anuncioDetailElement = document.querySelector('.anuncio-detail')

    anuncioDetailController(anuncioDetailElement, anuncioId)
}