export const createAnuncio = async (anuncioData) => {
  const newAnuncio = {
    nombre: anuncioData.get("nombre"),
    imagen: anuncioData.get("imagen"),
    precio: anuncioData.get("precio"),
    descripcion: anuncioData.get("descripcion"),
    tipoAnuncio: anuncioData.get("tipoAnuncio"),
  };
  const token = localStorage.getItem("token");

  //como utilizo fetch para crear un anuncio
  //consumir el api de sparrest utilizando un post y enviando los datos que ha introducido el usuario
  const response = await fetch("http://localhost:8000/api/anuncios", {
    method: "POST",
    body: JSON.stringify(newAnuncio),
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error creando anuncio");
  }
};
