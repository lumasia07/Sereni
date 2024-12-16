// card Routes
const express = require('express');
const { postCard } = require('../controllers/Card.js')
const { authJWT } = require('../middleware/authJwt.js');

const router = express.Router();

router.post('/post', authJWT, postCard);
 
module.exports = router;