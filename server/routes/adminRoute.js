import express from "express"
import { adminLogin, adminLogout } from "../controllers/adminController.js"
import { getAllUserDetails, getRecentlyDeleted, permanentlyDeleteUser, softDeleteUser, updateUserDetail } from "../controllers/detailsController.js";
import { verifyAdminToken } from "../middleware/verifyAdminToke.js";



const router = express.Router()


router.post('/login', adminLogin)
router.post('/logout', adminLogout)


//details
router.get('/getallusers', verifyAdminToken, getAllUserDetails);
router.put('/update/:id', verifyAdminToken, updateUserDetail);
router.delete("/delete/:id", verifyAdminToken, softDeleteUser);
router.get("/recently-deleted", verifyAdminToken, getRecentlyDeleted);
router.delete("/permanent-delete/:id", verifyAdminToken, permanentlyDeleteUser);



export default router