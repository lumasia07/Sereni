const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middleware/authJwt.js')

const prisma = new PrismaClient();

// Register User
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password} = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'Email aleardy in use!'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            },
        });

        return res.status(201).json({ message: 'User registered successfully', user: newUser});
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error'});
    }
};

// User login
const userLogin = async (req, res) => {
    try {
        const { email, password} = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials!'});
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials!' });
        }

        const token = generateToken(user);

        res.json({ message: 'Login successful', token});
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error!'});
    }
};

// Fetch User profile using ID

const findUserByID = async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: { userID: req.user.userID },
        select: { 
          userID: true,
          firstName: true,
          lastName: true,
          email: true
        }
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { registerUser, userLogin, findUserByID };
