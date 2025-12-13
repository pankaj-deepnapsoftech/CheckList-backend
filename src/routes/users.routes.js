import {Router} from "express";

// ---------------------- local imports --------------------------
import { LoginUser, registerUser } from "../controller/user.controller.js";
import { Validater } from "../middleware/validator.js";
import { userValidationSchema } from "../validation/users.validation.js";


const routes = Router();

routes.route("/register-user").post(Validater(userValidationSchema),registerUser);
routes.route("/login-user").post(LoginUser);




export default routes;