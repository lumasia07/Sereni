// Entry point
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Sereni Backend!')
})

app.listen(port, () => {
    console.log(`Sereni server is running on port ${port}`)
})