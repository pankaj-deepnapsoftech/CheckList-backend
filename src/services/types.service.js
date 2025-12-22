import { TypeModal } from "../models/types.modal.js"


export const createTypesService = async (data) =>{
    const result = await TypeModal.create(data);
    return result;
};

export const updatetypesService = async (id,data) => {
    const result = await TypeModal.findByIdAndUpdate(id,data,{new:true});
    return result;
};

export const deleteTypesService = async (id) => {
    const result = await TypeModal.findByIdAndDelete(id);
    return result;
};

export const getTypesService = async () => {
    const result = await TypeModal.find().lean();
    return result;
};

export const getUomTypeService = async () => {
    const result = await TypeModal.findOne({uom:{$exists:false}});
    return result;
};

export const getCheckingTimeTypeService = async () => {
    const result = await TypeModal.findOne({checking_time:{$exists:false}});
    return result;
};

export const getCheckingMethodTypeService = async () => {
    const result = await TypeModal.findOne({checking_method:{$exists:false}});
    return result;
};








