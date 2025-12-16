import { StatusCodes } from "http-status-codes";
import { createProcessService, findProcessbyProcesNameOrNumber } from "../services/process.service.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/errorHandler.js";





export const createProcess = AsyncHandler(async (req,res) => {
    const data = req.body;

    const exist = await findProcessbyProcesNameOrNumber(data.process_name,data.process_no);
    if(exist){
        throw new BadRequestError("Process name or  Process number is already exist","createProcess() method error");
    }
    const result = await createProcessService(data);
    res.status(StatusCodes.OK).json({
        message:"Process created successfully",
        data:result
    });
});












