import {Router} from "express";

// ----------------------------- 
import { GetAllCardsData } from "../controller/dashboard.controller";


const routes = Router();

routes.route("/get-cards-data").get(GetAllCardsData);



export default routes;