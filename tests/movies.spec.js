import { test } from "@jest/globals";
import request from "supertest";
import app from "../src/app.js";

test("Encanto page shows title of movie", async () => {
  const response = await request(app)
    .get("/movie/2")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Encanto");
});
