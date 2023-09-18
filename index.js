const express = require('express')
const dbConnection = require('./config/dbConnection')
const router = require('./routes/userRoutes')

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000

dbConnection();

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Home Page")
})

app.use('/api/user', router)

app.listen(PORT, ()=>{
    console.log(`This app is running on http://localhost:${PORT}`)
})