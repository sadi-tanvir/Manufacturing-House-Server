const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()


// component
require('./DB/db')
const productsRoute = require('./routes/productsRoute')
const orderRoute = require('./routes/orderRoute')
const reviewRoute = require('./routes/reviewRoute')
const userRoute = require('./routes/userRoute')


// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes define
app.use(productsRoute)
app.use(orderRoute)
app.use(reviewRoute)
app.use(userRoute)


// server listen
app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
})