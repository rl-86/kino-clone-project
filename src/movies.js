import fetch from "node-fetch";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function loadMovies() {
  const res = await fetch(API_BASE + "/movies");
  const payload = await res.json();
  const newArray = payload.data.map((obj) => {
    return {
      id: obj.id,
      ...obj.attributes,
    };
  });
  return newArray;
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + "/movies/" + id);
  const payload = await res.json();
  return {
    id: payload.data.id,
    ...payload.data.attributes,
  };
}
