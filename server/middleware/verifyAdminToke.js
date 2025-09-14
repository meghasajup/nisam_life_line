export const verifyAdminToken = (req, res, next) => {
  let token = req.cookies?.AdminToken;
  
  // iOS fallback: check headers if no cookie
  const userAgent = req.headers['user-agent'] || '';
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  
  if (!token && isIOS) {
    token = req.headers['authorization']?.replace(/^Bearer\s/, "");
  }

  if (!token) {
    return res.status(403).json({ 
      success: false, 
      message: "Access denied. No token provided." 
    });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return res.status(401).json({ 
      success: false, 
      error: "Invalid or expired token" 
    });
  }
};