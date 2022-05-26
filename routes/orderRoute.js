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

module.exports = router