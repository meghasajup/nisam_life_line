import express from "express";
import userDetailsRoute from './userDetailsRoute.js'
import adminRoute from './adminRoute.js'

const v1Router = express.Router()

v1Router.use('/details', userDetailsRoute); //User details
v1Router.use('/admin', adminRoute); // Admin details

export default v1Router