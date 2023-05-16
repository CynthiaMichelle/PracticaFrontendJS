export const buildAnuncioDetail = (anuncio) => {
  return `
      <h3>${anuncio.nombre}</h3>
      <img src="${anuncio.imagen}" />
      <p>${anuncio.descripcion}</p>
      <p>${anuncio.precio} - ${anuncio.tipoAnuncio}</p> 
      <button id="deleteAnuncio">Borrar anuncio</button>
      `;
};
