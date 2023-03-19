// query.selector -> Consulta en documento html
// create.Element -> Crea un elemento en este caso article
// innerHTML -> Reemplaza todo el HTML que hay dentro de article
// appendChild -> Lo empuja al DOM (Documento HTML)

export function buildAnuncioView(anuncio) {
  const newAnuncioElement = document.createElement('article');
  newAnuncioElement.classList.add('anuncio')
/// poner en href link a pagina html crear anuncio
  newAnuncioElement.innerHTML = `
  <a href="/anuncio-detail.html?anuncioId=${anuncio.id}">
    <h3>${anuncio.nombre}</h3>
    <img src="${anuncio.imagen}" alt="No hay imagen disponible" />
    <p>${anuncio.descripcion}</p>
    <p>${anuncio.precio} - ${anuncio.tipoAnuncio}</p> 
  </a>
    `; 
  return newAnuncioElement;
  }
  
export function buildSpinnerView() {
  return `<div class="spinner"><div></div><div></div><div></div></div>`
}

export function buildErrorLoadingAnuncios() {
  return '<p class="load-error ">Ha habido un problema cargando los anuncios. Intentalo de nuevo mas tarde</p>'

}

export function buildEmptyAnuncioList() {
  return '<p> No hay resultados disponibles</p>'
}