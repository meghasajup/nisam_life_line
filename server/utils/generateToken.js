import jwt from 'jsonwebtoken';

// Generate token (for normal users if needed)
export const generateTokenSync = (id, role, email) => {
  try {
    const token = jwt.sign(
      { id, role, email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return token;
  } catch (error) {
    console.error("JWT Signing Error:", error);
    return null;
  }
};

// Generate admin token
export const generateAdminTokenSync = (payload) => {
  try {
    const token = jwt.sign(
      { ...payload }, // flexible: can pass {id, email}
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return token;
  } catch (error) {
    console.error("JWT Signing Error:", error);
    return null;
  }
};
