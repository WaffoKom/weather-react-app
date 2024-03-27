export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "7eeed3c5e4ba626063661567dafa8c0e";

export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "01374af95cmsh505a0b9f5c4cf50p16957ajsn02e0926ffd48",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export async function fetchData(_url, options) {
  try {
    const response = await fetch(_url, options);
    const result = await response.text();
    // Traitement optionnel des données (par exemple, JSON.parse)
    const data = JSON.parse(result); // En supposant que la réponse est JSON
    // console.log(data);
    return data; // Renvoyer les données à utiliser dans votre composant
  } catch (error) {
    console.error(error);
    return null; // Ou gérer les erreurs différemment (par exemple, lancer une erreur)
  }
}
