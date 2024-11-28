const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { authJWT } = require('./middleware/authJwt.js');

const app = express();
const port = 3000;

// Parse JSON Request bodies
app.use(express.json());

// User routes blueprint
app.use('/api/v1/users', userRoutes);

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Root route
app.get('/', authJWT, (req, res) => {
    res.send('Sereni Backend!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Sereni server is running on port ${port}`);
});
