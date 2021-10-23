const express = require('express')
const dotenv = require('dotenv');

dotenv.config()

const PORT = process.env.PORT

const app = express()
app.get('/', (req,res) =>{
    res.send('hi')
})


app.listen(PORT,() => console.log(`Listening on port ${PORT}`))