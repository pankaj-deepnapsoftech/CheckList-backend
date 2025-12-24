import { StatusCodes } from "http-status-codes";
import { allCardsData, GetDailyAssemblyStatus, GetMonthlyTrend } from "../services/dashboard.service.js";
import { AsyncHandler } from "../utils/asyncHandler.js";


export const GetAllCardsData = AsyncHandler(async (req,res) => {
    const result = await allCardsData();
    res.status(StatusCodes.OK).json({
        data:result
    });
});


export const GetMonthlyTrendData = AsyncHandler(async (req,res) => {
    const result = await GetMonthlyTrend();
     res.status(StatusCodes.OK).json({
        data:result
    });
});

export const getAssemblyData = AsyncHandler(async (req,res) =>{
    const result = await GetDailyAssemblyStatus();
    res.status(StatusCodes.OK).json({
        data:result
    })
});