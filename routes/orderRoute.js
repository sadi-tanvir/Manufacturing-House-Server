const router = require('express').Router()
const Order = require('../model/Order')


// save order
router.post('/order', async (req, res) => {
    const { userName, userEmail, userPhone, userAddress, productId, productName, productImage, unit_price, orderQuantity, totalAmount } = req.body;
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
        totalAmount
    })

    const result = await order.save()
    res.json({
        success: true,
        order: result
    })
})


// get my orders
router.get('/myOrders/:email', async (req, res) => {
    const orders = await Order.find({ userEmail: req.params.email })

    res.json({
        status: true,
        orders
    })
})

// get single order
router.get('/getSingleOrder/:id', async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id })

    res.json({
        status: true,
        order
    })
})

// delete order
router.delete('/deleteOrder/:id', async (req, res) => {
    const deleteOrder = await Order.findOneAndDelete({ _id: req.params.id })

    res.json({
        success: true,
        deleteOrder
    })
})

// get all orders
router.get('/allOrders', async (req, res) => {
    const orders = await Order.find()
    res.json({
        success: true,
        orders
    })
})


// true payment status
router.patch('/paidProduct/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.findOne({_id: id})
    const { trxId } = req.body;
    const updateOrder = await Order.updateOne(
        { _id: id },
        {$set: {
            payment_status: true,
            trxId: trxId || order.trxId
        }},
        {new: true}
    )

    res.json({
        success: true,
        updateOrder
    })
})

// false payment status
router.patch('/unpaidProduct/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.findOne({_id: id})
    const { trxId } = req.body;
    const updateOrder = await Order.updateOne(
        { _id: id },
        {$set: {
            payment_status: false,
            trxId: trxId || order.trxId
        }},
        {new: true}
    )

    res.json({
        success: true,
        updateOrder
    })
})

// true shipping status
router.patch('/shippedProduct/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.findOne({_id: id})
    
    order.shipped = true
    const shippingStatus = await order.save()

    res.json({
        success: true,
        shippingStatus
    })
})

// false shipping status
router.patch('/pendingProduct/:id', async (req, res) => {
    const id = req.params.id;
    const order = await Order.findOne({_id: id})
    
    order.shipped = false
    const shippingStatus = await order.save()

    res.json({
        success: true,
        shippingStatus
    })
})

module.exports = router