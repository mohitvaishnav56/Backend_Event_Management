const express = require('express');
const { registerUser, loginUser, getProfile, deleteAccount } = require('../controllers/user.controller');
const verifyToken = require('../middlewares/user.middlware.js');


const router = express.Router();

// Define routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getProfile);
router.delete('/delete', deleteAccount);

module.exports = router;