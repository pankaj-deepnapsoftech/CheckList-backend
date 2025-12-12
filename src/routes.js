import {Router} from "express";

// ------------------  local imports -------------------
import companyRoutes from "./routes/company.routes.js";

const routes = Router();


routes.use("/company",companyRoutes);


export default routes;


