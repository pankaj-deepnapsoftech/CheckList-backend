import {Router} from "express";
import { createCompany, listCompany, updateCompany } from "../controller/company.controller.js";
import { Validater } from "../middleware/validator.js";
import { companyValidationSchema } from "../validation/company.validation.js";

const routes = Router();


routes.route("/create-company").post(Validater(companyValidationSchema),createCompany)
routes.route("/list-company").get(listCompany)
routes.route("/update-company/:id").put(Validater(companyValidationSchema),updateCompany)
// routes.route("/delete-company/:id").delete()


export default routes;


