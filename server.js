const express = require('express')
const app = express();
const register = require('./Routes/Register');
const login =require('./Routes/Login')
const bodyParser = require('body-parser');
const cors = require('cors');
const email = require('./Routes/Email')

app.use(cors());
app.use(bodyParser.json());
app.use('/register',register)
app.use('/login',login)
app.use('/contact',email)

const port = 5000;



app.listen(port,()=>{
    console.log(`The server is running successfully in ${port}`)
})