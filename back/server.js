const express = require('express');
const connectddb = require('./config/connectdb');
const contactRouter = require('./routes/contact');
const cors = require('cors')
const app = express();

require('dotenv').config()

const port=process.env.port;

require('dotenv').config()
//link database
connectddb()
app.use(cors())
app.use(express.json())
app.use('/api/user',contactRouter)



app.listen(port,err=>{
    err?console.log(err):console.log(`you are contected to ${port}`)
})
