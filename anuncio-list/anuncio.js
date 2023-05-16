export async function getAnuncios() {
  const anunciosUrlOK = "http://localhost:8000/api/anuncios";
  const anunciosUrlKO =
    "https://gist.githubusercontent.com/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/anuncios.json";

  const response = await fetch(anunciosUrlOK);
  const anuncios = await response.json();

  console.log(anuncios);

  return anuncios;
}
