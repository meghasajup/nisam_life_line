import { Details } from "../models/detailsModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import '../utils/cronJob.js';

//Create user
export const createUserDetail = asyncHandler(async (req, res) => {
  const { fullName, place, phoneNumber, age, gender, goal, duration } = req.body;
  console.log(req.body);

  // Validation
  if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
    res.status(400);
    throw new Error("Full name is required and must be at least 2 characters.");
  }

  if (!place || typeof place !== "string") {
    res.status(400);
    throw new Error("Place is required and must be a valid string.");
  }

  if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
    res.status(400);
    throw new Error("Phone number is required and must be 10 digits.");
  }

  if (!gender || !["Male", "Female", "Other"]) {
    res.status(400);
    throw new Error("Gender must be 'Male', 'Female', or 'Other'.");
  }

  req.body.gender = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

  if (!goal || !["weight gain", "fat loss"].includes(goal.toLowerCase())) {
    res.status(400);
    throw new Error("Goal must be 'weight gain', or 'fat loss'.");
  }

  if (!duration || !["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].includes(duration.toString())) {
    res.status(400);
    throw new Error("Duration must be 1 to 12.");
  }

  // Save to DB
  const newUser = await Details.create({
    fullName,
    place,
    phoneNumber,
    age,
    gender,
    goal,
    duration
  });

  res.status(201).json({
    success: true,
    message: "User detail saved successfully.",
    data: newUser
  });
});



//Get all users
export const getAllUserDetails = asyncHandler(async (req, res) => {
  const users = await Details.find({ isDeleted: false });

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});



//Delete user
export const softDeleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const detail = await Details.findById(id);
  if (!detail) {
    return res.status(404).json({ message: "Detail not found" });
  }

  if (detail.isDeleted) {
    return res.status(400).json({ message: "Already deleted" });
  }

  detail.isDeleted = true;
  detail.deletedAt = new Date();
  await detail.save();

  res.status(200).json({ message: "Deleted successfully" });
});



// Recently deleted
export const getRecentlyDeleted = asyncHandler(async (req, res) => {
  const deletedDetails = await Details.find({
    isDeleted: true
  });
  res.status(200).json(deletedDetails);
});



// Permanently deleted 
export const permanentlyDeleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const detail = await Details.findById(id);
  if (!detail) {
    return res.status(404).json({ message: "Detail not found" });
  }

  if (!detail.isDeleted) {
    return res.status(400).json({ message: "Only deleted records can be permanently deleted" });
  }

  await Details.findByIdAndDelete(id);

  res.status(200).json({ message: "Permanently deleted successfully" });
});



// Edit user
export const updateUserDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fullName, place, phoneNumber, age, gender, goal, duration } = req.body;
  console.log(req.body);

  const user = await Details.findById(id);
  if (!user) {
    res.status(400).json({ success: false, message: "User not found", });
  }


  user.fullName = fullName || user.fullName;
  user.place = place || user.place;
  user.phoneNumber = phoneNumber || user.phoneNumber;
  user.age = age || user.age;
  user.gender = gender || user.gender;
  user.goal = goal || user.goal;
  user.duration = duration || user.duration;

  const updatedUser = await user.save();

  res.status(200).json({
    success: true,
    message: "User updated successfully.",
    data: updatedUser,
  });
});



// Check Admin
export const checkAdmin = asyncHandler(async (req, res, next) => {
  const user = req.admin;
  if (!user) {
    return res.status(401).json({ success: false, message: 'Admin not authenticated' })
  }
  res.json({ success: true, message: 'Admin is authenticated' })
})