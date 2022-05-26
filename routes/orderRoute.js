const router = require('express').Router()
const Order = require('../model/Order')


// save order
router.post('/order', async (req, res) => {
    const {userName, userEmail, userPhone, userAddress, productId, productName, productImage, unit_price, orderQuantity} =req.body;
    const order = await new Order({
        userName,
        userEmail,
        userPhone,
        userAddress,
        productId,
        productName,
        productImage,
        unit_price,
        orderQuantity,
    })

    const result = await order.save()
    res.json({
        success: true,
        order:result
    })
})



// get my orders
router.get('/myOrders', async (req, res) =>{
    const email = req.query.email

    const orders = await Order.find({email})

    res.json({
        status:true,
        orders
    })
})

module.exports = router