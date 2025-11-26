import { Router } from "express";
import controller from "../controller/movie.controller.js";

const router = Router();

router
    .post("/", controller.create)
    .get("/", controller.findAll)
    .get("/:id", controller.findOne)
    .patch("/:id", controller.update)
    .delete("/:id", controller.remove) 
    
export default router