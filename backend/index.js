const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');

const exampleRouter = require('./routes/example')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

app.use('/', exampleRouter)

app.listen(5000, () => {
    console.log(`Example Server is running at http://localhost:5000`)
})