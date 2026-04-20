const express = require('express');
const router = express.Router();
const { signup, login, logout, refreshToken } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/refresh-token', refreshToken); 
module.exports = router;
