// user Routes
const express = require('express');
const { registerUser } = require('../controllers/Register.js')

const router = express.Router();

router.post('/register', registerUser);

module.exports = router;