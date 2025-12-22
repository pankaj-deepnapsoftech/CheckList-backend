import {Schema,model} from "mongoose";

const typeSchema = new Schema({
    uom:{type:String},
    checking_time:{type:String},
    checking_method:{type:String},
});

export const TypeModal = model("types",typeSchema);

