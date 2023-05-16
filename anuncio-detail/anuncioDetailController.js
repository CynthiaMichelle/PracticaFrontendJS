import { decodedToken } from "../utils/decodeToken.js";
import { deleteAnuncio, getAnuncioById } from "./anuncioDetail.js";
import { buildAnuncioDetail } from "./anuncioDetailView.js";

export const anuncioDetailController = async (
  anuncioDetailElement,
  anuncioId
) => {
  try {
    const anuncio = await getAnuncioById(anuncioId);
    anuncioDetailElement.innerHTML = buildAnuncioDetail(anuncio);
    handleDeleteAnuncioButton(anuncioDetailElement, anuncio);
  } catch (error) {
    alert(error.message);
  }

  function handleDeleteAnuncioButton(anuncioDetailElement, anuncio) {
    const token = localStorage.getItem("token");
    const deleteButtonElement =
      anuncioDetailElement.querySelector("#deleteAnuncio");

    if (!token) {
      deleteButtonElement.remove();
    } else {
      const userInfo = decodedToken(token);
      if (anuncio.userId == userInfo.userId) {
        // añadir evento click al boton+ enganchar con sparrest
        deleteButtonElement.addEventListener("click", async () => {
          const answer = confirm("Desea borrar el anuncio?");
          if (answer) {
            await deleteAnuncio(anuncio.id);
            window.location = "/";
          }
        });
      } else {
        deleteButtonElement.remove();
      }
    }
  }
};
