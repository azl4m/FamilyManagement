import { Request,Response } from "express";
import { FamilyMember} from "../models/FamilyMember";

export class FamilyController{
    static async getHomePage(req:Request,res:Response):Promise<void>{
        try {
            const familyMembers = await FamilyMember.find()
            res.render('index',{familyMembers})
        } catch (error) {
            console.log(error);
            
        }
    }
    static async getFamilyDetails(req:Request,res:Response):Promise<void>{
        try {
            const familyMembers = await FamilyMember.find()
            console.log(familyMembers);
            
            res.status(200).json({familyMembers})
        } catch (error) {
            console.log(error);
            
        }
    }
    static async addFamilyMember(req:Request,res:Response):Promise<void>{
        try {
            
            console.log(req.body);
            const newFamilyMember = new FamilyMember(req.body)
            
            const savedMember = await newFamilyMember.save()
            console.log(savedMember);
            
            res.status(201).json(savedMember)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'Error adding family member'})
        }
    }
    static async getAllFamilyMembers(req:Request,res:Response):Promise<void>{
        try {
            const familyMembers = await FamilyMember.find()
            res.status(200).json({familyMembers})
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'Error fetching all family members'})
        }
    }
    static async getFamilyMemberById(req:Request,res:Response):Promise<void>{
        try {
            const member = await FamilyMember.findById(req.params.id)
            if(!member){
                res.status(404).json({error:'Family member not found'})
                return
            }
            res.status(200).json(member)
        } catch (error) {
            res.status(500).json({error:"Error fetching family member"})
        }
    }
    static async updateFamilyMember(req: Request, res: Response): Promise<void> {
        try {
            console.log("inside updatefamilymember");
            
            const updatedMember = await FamilyMember.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true } 
            );
            if (!updatedMember) {
                res.status(404).json({ error: 'Family member not found' });
                return;
            }
            res.status(200).json(updatedMember);
        } catch (error) {
            res.status(500).json({ error: 'Error updating family member' });
        }
    }
    static async deleteFamilyMember(req: Request, res: Response): Promise<void> {
        try {
            console.log("inside deletefamilymember");
            
            const member = await FamilyMember.findById(req.params.id)
            console.log(member);
            
            const deletedMember = await FamilyMember.findByIdAndDelete(req.params.id);
            if (!deletedMember) {
                res.status(404).json({ error: 'Family member not found' });
                return;
            }
            res.status(200).json({ message: 'Family member deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting family member' });
        }
    }
}