import express from "express"
import { adminLogin, adminLogout } from "../controllers/adminController.js"
import { checkAdmin, getAllUserDetails, getRecentlyDeleted, permanentlyDeleteUser, softDeleteUser, updateUserDetail } from "../controllers/detailsController.js";
import { verifyAdminToken } from "../middleware/verifyAdminToke.js";
import { restoreMultipleItems } from "../controllers/restoreController.js";



const router = express.Router()


router.post('/login', adminLogin) //Login

router.post('/logout', adminLogout) //Logout

router.get("/check-admin", checkAdmin) // Check Admin

//details
router.get('/getallusers', getAllUserDetails); // Get all users

router.put('/update/:id', updateUserDetail); //Update user

router.delete("/delete/:id", softDeleteUser); //Delete user

router.get("/recently-deleted", getRecentlyDeleted); // Recently deleted

router.delete("/permanent-delete/:id", permanentlyDeleteUser); // Permanently deleted

router.post('/restore-items', restoreMultipleItems); // Restore data


export default router