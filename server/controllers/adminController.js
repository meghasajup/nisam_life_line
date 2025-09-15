import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAdminTokenSync } from "../utils/generateToken.js";

export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter both email and password" });
  }

  const AdminEmail = "nisamlifeline@gmail.com"; 
  const AdminPassword = "nisam@1234";

  if (email === AdminEmail && password === AdminPassword) {
    const token = generateAdminTokenSync();

    // Set cookie with better mobile compatibility
    res.cookie("AdminToken", token, {
      // httpOnly: true,
      secure: true,
      // sameSite: "None",
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 
    });

    return res.status(200).json({ message: "Login successful", token });
  }

  return res.status(401).json({ message: "Invalid email or password" });
});



export const adminLogout = asyncHandler(async (req, res) => {
  res.clearCookie("AdminToken", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    secure: true,
  });

  res.status(200).json({ success: true, message: "Admin logged out successfully" });
});