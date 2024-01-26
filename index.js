import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async (request, response) => {
  const buf = await fs.readFile("./index.html");
  const html = buf.toString();

  response.send(html);
});

app.use("/", express.static("./"));

app.listen(5080);
