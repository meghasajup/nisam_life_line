import express from "express"
import { createUserDetail } from "../controllers/detailsController.js"

const router = express.Router()

router.post('/create', createUserDetail); //Create user

export default router;