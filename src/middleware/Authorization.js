import jwt from "jsonwebtoken";

// --------------------------- local imports ----------------------------
import { AsyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/errorHandler.js";
import { FindUserById } from "../services/users.service.js";
import { config } from "../config.js";


export const Authorization = AsyncHandler(async (req,res,next) => {
    const token = req?.cookies?.AT || req?.headers?.authorization?.split(" ")[1];

    if(!token){
        throw new BadRequestError("invalid request User not Authorized","Authorization() method error");
    };

    const payload = jwt.verify(token,config.JWT_SECRET);

    const user = await FindUserById(payload.id);
    req.currentUser = user;
    next()
})









