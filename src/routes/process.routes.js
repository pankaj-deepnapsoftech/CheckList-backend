import {Router} from "express";

// ------------------------- local imports -------------------
import { Validater } from "../middleware/validator.js";
import { processValidationSchema } from "../validation/process.validation.js";
import { createProcess } from "../controller/process.controller.js";


const routes = Router();


routes.route("/create-process").post(Validater(processValidationSchema),createProcess);





export default routes;