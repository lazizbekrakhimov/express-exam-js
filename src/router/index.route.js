import { Router } from "express";
import controllerRouter from "./movie.route.js";

const router = Router();

router.use('/movies', controllerRouter)

export default router;

