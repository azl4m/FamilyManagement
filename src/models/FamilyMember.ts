import mongoose,{Schema,Document} from "mongoose";

export interface IFamilyMember extends Document{
    name:string;
    age:number;
    relation:string;
}

const FamilyMemberSchema:Schema = new Schema({
    name:{type:String,requireed:true},
    age:{type:Number,required:true},
    relation:{type:String,required:true}
},
{timestamps:true});

export const FamilyMember = mongoose.model<IFamilyMember>('FamilyMember',FamilyMemberSchema)