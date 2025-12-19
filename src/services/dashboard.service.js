import { AssemblyModal } from "../models/AssemblyLine.modal.js"



export const allCardsData = async () => {
    const data = Promise.all([
        await AssemblyModal.countDocuments(),
    ]);
    return data
};






