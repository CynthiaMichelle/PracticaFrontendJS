import { pubSub } from "../pubsub.js";
import { getAnuncios } from "./anuncio.js";
import {
  buildAnuncioView,
  buildSpinnerView,
  buildErrorLoadingAnuncios,
  buildEmptyAnuncioList,
} from "./anuncioView.js";

export async function anuncioListController(anuncioListElement) {
  anuncioListElement.innerHTML = buildSpinnerView();
  let anuncios = [];

  try {
    anuncios = await getAnuncios();
    pubSub.publish(
      pubSub.TOPICS.SHOW_NOTIFICATION,
      "Los anuncios se cargaron correctamente"
    );

    if (anuncios.length > 0) {
      drawAnuncios(anuncios, anuncioListElement);
    } else {
      showEmptyMesssage(anuncioListElement);
    }
  } catch (error) {
    pubSub.publish(
      pubSub.TOPICS.SHOW_NOTIFICATION,
      "No hemos podido cargar los anuncios"
    );
  } finally {
    hideSpinner(anuncioListElement);
  }
}

function hideSpinner(anuncioListElement) {
  const spinnerElement = anuncioListElement.querySelector(".spinner");
  spinnerElement.classList.add("hide");
}

function drawAnuncios(anuncios, anuncioListElement) {
  // generar el html que reperesentara un anuncio - Controlador que gestionara la carga de los anuncios
  for (const anuncio of anuncios) {
    const newAnuncioElement = buildAnuncioView(anuncio);
    anuncioListElement.appendChild(newAnuncioElement); // nota pintar todos los anuncios a la vez
  }
}

function showEmptyMesssage(anuncioListElement) {
  anuncioListElement.innerHTML = buildEmptyAnuncioList();
}
