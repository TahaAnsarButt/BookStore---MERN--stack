import express, {Router} from "express";
import { Module } from "../models/dashboardModel.js";
const router = express.Router();

router.get("/", async (request, response) => {
    try {
      const modules = await Module.find({});
      return response.status(200).json({
        data: modules,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;