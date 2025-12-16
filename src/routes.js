import {Router} from "express";

// ------------------  local imports -------------------
import { Authorization } from "./middleware/Authorization.js";
import companyRoutes from "./routes/company.routes.js";
import plantRoutes from "./routes/plant.routes.js";
import roleRoutes from "./routes/role.routes.js";
import usersRoutes from "./routes/users.routes.js";
import processRoutes from "./routes/process.routes.js";



const routes = Router();


routes.use("/users",usersRoutes);
routes.use("/company",Authorization,companyRoutes);
routes.use("/plant",Authorization,plantRoutes);
routes.use("/roles",Authorization,roleRoutes);
routes.use("/process",Authorization,processRoutes);


export default routes;


