const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');

const protect = async (req, res, next) => {
  let token;

  // Get token from Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user info to request (excluding password)
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      console.error('Auth Error:', err.message);
      return res.status(401).json({ message: 'Not authorized, invalid token' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: `Access denied: requires role(s) ${roles.join(', ')}` });
    }
    next();
  };
};

module.exports = { protect, authorize };
