import express, { response } from "express";
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

// Movie list
app.get("/filmer", async (req, res) => {
  const movies = await loadMovies();
  res.render("filmer", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("movie", { movie });
});

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/filmer", async (req, res) => {
  res.render("filmer");
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.get("/tickets", async (req, res) => {
  res.render("tickets");
});

app.get("/event", async (req, res) => {
  res.render("event");
});

app.use("/", express.static("./"));

export default app;
