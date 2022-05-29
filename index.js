const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 6000
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


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


const calculateOrderAmount = (price) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const amount = price * 100
  return amount;
};


app.post("/create-payment-intent", async (req, res) => {
    const { price } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(price),
      currency: "usd",
      payment_method_types:['card'],
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });


// server listen
app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
})