import { Details } from "../models/detailsModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import '../utils/cronJob.js';

export const createUserDetail = asyncHandler(async (req, res) => {
  const { fullName, place, phoneNumber, age, gender, goal, duration } = req.body;

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

  if (!age || typeof age !== "number" || age < 10 || age > 100) {
    res.status(400);
    throw new Error("Age is required and must be a number between 10 and 100.");
  }

  if (!gender || !["male", "female", "other"].includes(gender.toLowerCase())) {
    res.status(400);
    throw new Error("Gender must be 'male', 'female', or 'other'.");
  }

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
    gender: gender.toLowerCase(),
    goal,
    duration
  });

  res.status(201).json({
    success: true,
    message: "User detail saved successfully.",
    data: newUser
  });
});

export const getAllUserDetails = asyncHandler(async (req, res) => {
  const users = await Details.find({ isDeleted: false });

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

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

// FETCH RECENTLY DELETED
export const getRecentlyDeleted = asyncHandler(async (req, res) => {
  const deletedDetails = await Details.find({
    isDeleted: true
  });
  res.status(200).json(deletedDetails);
});

// PERMANENTLY DELETE FROM RECENTLY DELETED
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

export const updateUserDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fullName, place, phoneNumber, age, gender, goal, duration } = req.body;

  const user = await Details.findById(id);
  if (!user) {
    res.status(400).json({ success: false, message: "User not found", });
  }

  // Optional: Add validation here if needed again

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