import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAdminTokenSync } from "../utils/generateToken.js";

export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter both email and password" });
  }

  // Hardcoded admin credentials
  const AdminEmail = "nisamlifeline@gmail.com";
  const AdminPassword = "nisam@1234";

  // Check credentials
  if (email === AdminEmail && password === AdminPassword) {
    const token = generateAdminTokenSync(); // Generate token
    res.cookie("AdminToken", token, { //httpOnly: true, sameSite: "None",
      secure: true
    });
    return res.status(200).json({
      message: "Login successful",
      token,
    });
  }
  // If credentials are wrong
  return res.status(401).json({ message: "Invalid email or password" });
});

export const adminLogout = asyncHandler(async (req, res) => {
  res.clearCookie("AdminToken", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  res.status(200).json({ success: true, message: "Admin logged out successfully" });
});