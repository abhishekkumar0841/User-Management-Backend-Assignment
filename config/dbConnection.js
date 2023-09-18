const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async ()=>{
    mongoose.connect(process.env.DATABASE_URI).then((conn)=>{
        console.log(`Database connected successfully with: ${conn.connection.host}`)
    }).catch((e)=>{
        console.log("Error while database connection")
        console.log(e)
    })
}

module.exports = dbConnection;