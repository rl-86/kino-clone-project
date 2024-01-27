import express from "express";
import exphbs from "express-handlebars";
import handlebarsLayouts from "handlebars-layouts";
import { loadMovie, loadMovies } from "./movies.js";

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".handlebars",
  helpers: handlebarsLayouts(),
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
  const movies = await loadMovies();
  res.render("home", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("movie", { movie });
});

app.use("/", express.static("./"));

export default app;
