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
router.get('/myOrders/:email', async (req, res) =>{
    const orders = await Order.find({userEmail:req.params.email})

    res.json({
        status:true,
        orders
    })
})


// delete product
router.delete('/deleteOrder/:id', async (req, res) => {
    const deleteOrder = await Order.findOneAndDelete({_id: req.params.id})

    res.json({
        success: true,
        deleteOrder
    })
})


router.get('/allOrders', async (req, res) => {
    const orders = await Order.find()
    res.json({
        success: true,
        orders
    })
})

module.exports = router