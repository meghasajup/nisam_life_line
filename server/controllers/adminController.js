import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAdminTokenSync } from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

// Hardcoded Admin credentials
const ADMIN_EMAIL = "nisamlifeline@gmail.com";
const ADMIN_PASSWORD = "nisam@1234";

// ================= Admin Login =================
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter both email and password" });
  }

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Generate admin token (using email here as payload)
  const token = generateAdminTokenSync({ email });

  // Send token in cookie
  res.cookie("adminToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true for HTTPS (Vercel)
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  return res.status(200).json({
    message: "Admin login successful",
    token,
  });
});

// ================= Admin Logout =================
export const adminLogout = asyncHandler(async (req, res) => {
  res.clearCookie("adminToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  return res.status(200).json({ message: "Admin logged out successfully" });
});

// ================= Check Admin User =================
export const checkAdminUser = asyncHandler(async (req, res) => {
  const token = req.cookies?.adminToken;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({
      message: "Admin authenticated",
      user: decoded,
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});
