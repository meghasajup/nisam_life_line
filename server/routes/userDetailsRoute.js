import express from "express"
import { createUserDetail } from "../controllers/detailsController.js"
import { verifyAdminToken } from "../middleware/verifyAdminToke.js"



const router = express.Router()


router.post('/create', verifyAdminToken, createUserDetail)


export default router
