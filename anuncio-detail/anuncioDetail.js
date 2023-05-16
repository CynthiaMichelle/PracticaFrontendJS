export const getAnuncioById = async (anuncioId) => {
  const response = await fetch(
    `http://localhost:8000/api/anuncios/${anuncioId}`
  );

  if (!response.ok) {
    throw new Error("El anuncio solicitado no existe");
  }

  const anuncio = await response.json();

  return anuncio;
};

export const deleteAnuncio = async (anuncioId) => {
  const token = localStorage.getItem("token");

  //como utilizo fetch para crear un anuncio
  //consumir el api de sparrest utilizando un post y enviando los datos que ha introducido el usuario
  const response = await fetch(
    `http://localhost:8000/api/anuncios/${anuncioId}`,
    {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
