import {Router} from "express";

// ----------------------------- 
import { GetAllCardsData, getAssemblyData, GetMonthlyTrendData } from "../controller/dashboard.controller.js";


const routes = Router();

routes.route("/get-cards-data").get(GetAllCardsData);
routes.route("/get-monthly-trend").get(GetMonthlyTrendData);
routes.route("/get-assembly-status").get(getAssemblyData)



export default routes;