import jwt from 'jsonwebtoken'

// Generate token
export const generateTokenSync = (id, role, email) => {

  try {
    const token = jwt.sign({ id: id, role: role, email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token
  } catch (error) {
    console.error("JWT Signing Error:", error);
    return null;
  }
};

//GEnerate admin token
export const generateAdminTokenSync = () => {
  try {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.error("JWT Signing Error:", error);
    return null;
  }
};