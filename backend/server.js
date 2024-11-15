// Entry point
const express = require('express')
const app = express()
const port = 5000

// Parse JSON Request bodies
app.use(express.json())

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
})

app.get('/', (req, res) => {
    res.send('Sereni Backend!');
})

app.listen(port, () => {
    console.log(`Sereni server is running on port ${port}`);
})