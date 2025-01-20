import express from 'express'
import {FamilyController} from '../controllers/FamilyController'

const router = express.Router();

router.get("/",FamilyController.getHomePage)
router.get("/getDetails",FamilyController.getFamilyDetails)
router.post('/add', FamilyController.addFamilyMember);
router.get('/', FamilyController.getAllFamilyMembers);
router.get('/:id', FamilyController.getFamilyMemberById);
router.put('/update/:id', FamilyController.updateFamilyMember);
router.delete('/delete/:id', FamilyController.deleteFamilyMember);

export default router;