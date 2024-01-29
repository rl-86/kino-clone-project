import { test } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";
import { loadMovies } from "../src/movies.js";

test("All movie titles are displayed on the movies page", async () => {
  const movies = await loadMovies();
  const passedTitles = [];
  let titleCount = 0;

  for (const movie of movies) {
    const response = await request(app)
      .get(`/movie/${movie.id}`)
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);

    expect(response.text).toMatch(movie.title);

    passedTitles.push(movie.title);
    titleCount++;
  }
  console.log("Titles passed:", titleCount, passedTitles);
});
