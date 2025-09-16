import express from "express";
import { adminLogin, adminLogout } from "../controllers/adminController.js";
import { 
  checkAdmin,
  getAllUserDetails,
  getRecentlyDeleted,
  permanentlyDeleteUser,
  softDeleteUser,
  updateUserDetail
} from "../controllers/detailsController.js";
import { verifyAdminToken } from "../middleware/verifyAdminToke.js";
import { restoreMultipleItems } from "../controllers/restoreController.js";

const router = express.Router();

router.post('/login', adminLogin); // Login
router.post('/logout', verifyAdminToken, adminLogout); // Logout
router.get("/check-admin", verifyAdminToken, checkAdmin); // Check Admin

// Details routes
router.get('/getallusers', verifyAdminToken, getAllUserDetails); // Get all users
router.put('/update/:id', verifyAdminToken, updateUserDetail); // Update user
router.delete("/delete/:id", verifyAdminToken, softDeleteUser); // Soft delete
router.get("/recently-deleted", verifyAdminToken, getRecentlyDeleted); // Get recently deleted
router.delete("/permanent-delete/:id", verifyAdminToken, permanentlyDeleteUser); // Permanent delete 
router.post('/restore-items', verifyAdminToken, restoreMultipleItems); // Restore multiple items

export default router;
