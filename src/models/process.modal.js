import {Schema,model} from "mongoose";


const processSchema = new Schema({
    process_name: {type:String,required:true},
    process_no:{type:String,required:true},
    responsibility:{type:Schema.Types.ObjectId,ref:"User"}
},{timestamps:true});

export const ProcessModel = model("process",processSchema);





