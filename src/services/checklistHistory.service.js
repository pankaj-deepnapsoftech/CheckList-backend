import { CheckListHistoryModal } from "../models/checkListHistory.modal.js"


export const createChecklistHistory = async (data) => {
    const result = await CheckListHistoryModal.insertMany(data);
    return result;
};


export const  existChecklistHistory = async (data) => {
    const startOfDay = new Date();
startOfDay.setHours(0, 0, 0, 0);

const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);
    const result = await CheckListHistoryModal.findOne({...data,createdAt: { $gte: startOfDay, $lte: endOfDay }})
}




















