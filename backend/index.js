import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js'
import modulesRoute from './routes/dashboardRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Book Store");
});

app.use('/books', booksRoute)

app.use('/modules', modulesRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
