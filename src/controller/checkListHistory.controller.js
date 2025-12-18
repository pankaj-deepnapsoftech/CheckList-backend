import { StatusCodes } from "http-status-codes";
import { createChecklistHistory, findTodayChecklistHistory } from "../services/checklistHistory.service.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/errorHandler.js";


export const createCheckListHistory = AsyncHandler(async (req, res) => {
  const { data } = req.body;

  // 1️⃣ Validate request
  if (!Array.isArray(data) || data.length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Data array is required",
    });
  }

  // 2️⃣ Find today's existing records
  const existingRecords = await findTodayChecklistHistory(data);

  // 3️⃣ Create lookup set
  const existingSet = new Set(
    existingRecords.map(
      item => `${item.checkList}_${item.process_id}_${item.assembly}`
    )
  );

  // 4️⃣ Filter new records only
  const filteredData = data.filter(item => {
    const key = `${item.checkList}_${item.process_id}_${item.assembly}`;
    return !existingSet.has(key);
  });

  // 5️⃣ If all already exist → error
  if (filteredData.length === 0) {
    throw new BadRequestError("All checklist history records already exist for today","createCheckListHistory() method error")
  }

  // 6️⃣ Insert only new records
  const result = await createChecklistHistory(filteredData);

  // 7️⃣ Response
  res.status(StatusCodes.CREATED).json({
    message: "Checklist history saved successfully",
    insertedCount: result.length,
    skippedCount: data.length - result.length,
    data: result,
  });
});

