// user Routes
const express = require('express');
const { registerUser, userLogin, findUserByID } = require('../controllers/User.js');
const { authJWT } = require('../middleware/authJwt.js');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', userLogin);

router.get('/profile', authJWT, findUserByID);
  
module.exports = router;