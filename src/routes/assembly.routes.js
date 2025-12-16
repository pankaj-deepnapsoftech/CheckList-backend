import { Router } from "express";

// ------------------------- local imports -------------------------------
import { Validater } from "../middleware/validator.js";
import { assemblyValidationSchema } from "../validation/AssemblyLine.validation.js";
import { createAssembly, deleteAssemblyData, getAllAssemblyData, getAssemblyData, searchAssemblyData, updateAssemblyData } from "../controller/assembly.controller.js";


const routes = Router();


routes.route("/create-assembly").post(Validater(assemblyValidationSchema),createAssembly);
routes.route("/get-assembly").get(getAssemblyData);
routes.route("/search-assembly-line").get(searchAssemblyData);
routes.route("/delete-assembly/:id").delete(deleteAssemblyData);
routes.route("/update-assembly/:id").put(updateAssemblyData);
routes.route("/get-assembly-data").get(getAllAssemblyData)


export default routes;